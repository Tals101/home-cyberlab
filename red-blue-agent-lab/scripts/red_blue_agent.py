from pathlib import Path
from langchain_ollama import OllamaLLM

INPUT_FILE = Path.home() / "ai-lab" / "red-blue-agent-lab" / "samples" / "target_profile.txt"

def read_input_file(path):
    if not path.exists():
        return f"Input file not found: {path}"
    try:
        return path.read_text(errors="ignore")
    except Exception as e:
        return f"Error reading input file: {e}"

def main():
    target_data = read_input_file(INPUT_FILE)

    llm = OllamaLLM(model="llama3.2:3b")

    red_prompt = f"""
You are a red team security agent working only in a controlled, isolated training lab.

Review the following target profile and provide:
1. A short attacker-style summary of the target
2. The most interesting services to investigate first
3. Plausible attack paths to test in a legal lab setting
4. Likely weaknesses based on exposed services

Target profile:
{target_data}
"""

    blue_prompt = f"""
You are a blue team security agent working only in a controlled, isolated training lab.

Review the following target profile and provide:
1. A short defender-style summary of the target exposure
2. the most important logging and monitoring opportunities
3. Likely attack surfaces the defender should prioritize
4. Defensive mitigations and detection ideas

Target profile:
{target_data}
"""

    red_response = llm.invoke(red_prompt)
    blue_response = llm.invoke(blue_prompt)

    print("\n=== RED AGENT ANALYSIS ===\n")
    print(red_response)

    print("\n=== BLUE AGENT ANALYSIS ===\n")
    print(blue_response)

if __name__ == "__main__":
    main()
