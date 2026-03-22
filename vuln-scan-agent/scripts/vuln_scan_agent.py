from pathlib import Path
from langchain_ollama import OllamaLLM

SCAN_FILE = Path.home() / "ai-lab" / "vuln-scan-agent" / "samples" / "nmap_scan.txt"

def read_scan_file(path, max_lines=200):
    if not path.exists():
        return f"Scan file not found: {path}"
    try:
        lines = path.read_text(errors="ignore").splitlines()
        return "\n".join(lines[:max_lines])
    except Exception as e:
        return f"Error reading scan file: {e}"

def main():
    scan_data = read_scan_file(SCAN_FILE)

    prompt = f"""
You are a cybersecurity vulnerability analysis agent.

Analyze the following Nmap service/version scan results and produce:

1. A short summary of the exposed services
2. The top likely security risks
3. The most interesting ports/services to investigate next
4. A possible exploit path an attacker might consider
5. Safe defensive recommendations

Nmap scan results:
{scan_data}
"""

    llm = OllamaLLM(model="llama3.2:3b")
    response = llm.invoke(prompt)

    print("\n=== AI VULNERABILITY ANALYSIS ===\n")
    print(response)

if __name__ == "__main__":
    main()