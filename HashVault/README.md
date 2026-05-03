# HashVault

HashVault is an educational Bash-based file integrity checker that creates protected SHA-256 manifests and verifies files against them to detect changes, deletions, or tampering.

## Skills Practiced

- Bash scripting
- OpenSSL encryption
- SHA-256 hashing
- File integrity verification
- Directory scanning
- Manifest generation
- CLI input validation
- Security-focused documentation

## Usage

Create an encrypted manifest:

./hashvault.sh create test_files secure-manifest.txt

Verify files against the encrypted manifest:

./hashvault.sh verify test_files secure-manifest.txt

## Project Goal

The goal of this project is to better understand how file integrity monitoring, protected metadata, hashing, and Bash scripting can work together in a practical command-line workflow.
