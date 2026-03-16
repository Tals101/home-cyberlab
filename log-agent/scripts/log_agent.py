from langchain_ollama import OllamaLLM
from pathlib import Path

LOG_FILE = "/home/defender/ai-lab/log-agent/samples/auth_sample.log"

def read_log_file(path, max_lines=80):
    p = Path(path)
    if not p.exists():
        return f"Log file not found: {path}"
    try:
        lines = p.read_text(errors="ignore").splitlines()
        return "\n".join(lines[-max_lines:])
    except Exeption as e:
        return f"Error reading log file: {e}"

def main():
    logs = read_log_file(LOG_FILE)

    prompt = f"""
You are a SOC analyst AI.

Analyze the following Linux authentication logs and produce:

1. Severity level
2. Suspicious activity summary
3. Attack hypothesis
4. Recommended mitigation steps

Logs:
{logs}
"""

    llm = OllamaLLM(model="llama3.2:3b")
    response = llm.invoke(prompt)

    print("\n=== AI SOC ANALYSIS ===\n")
    print(response)

if __name__ == "__main__":
    main()
