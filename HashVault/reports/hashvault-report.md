# HashVault Project Report

## Executive Summary

HashVault is a Bash-based file integrity monitoring tool designed to detect unauthorized changes, deletions, or tampering of files through SHA-256 hashing and encrypted manifest verification.

## Objectives

- Build a file integrity verification tool using Bash
- Implement SHA-256 hashing for file fingerprinting
- Protect integrity data using OpenSSL encryption
- Detect file modification and deletion
- Produce verification output and reporting

## Tools and Technologies

- Bash
- sha256sum
- OpenSSL
- find

## Workflow

1. User provides an action, target, and manifest name.
2. Script validates that the target file or directory exists.
3. Script generates SHA-256 hashes for the target files.
4. Hash results are stored in a manifest.
5. Manifest is encrypted using OpenSSL.
6. During verification, the manifest is temporarily decrypted.
7. Hashes are checked using sha256sum.
8. Results are displayed and saved to a report.
9. Temporary plaintext manifest is removed.

## Test Scenario 1: Baseline Verification

All files were verified successfully.

Result:

- test_files/a.txt: OK
- test_files/b.txt: OK

## Test Scenario 2: File Tampering Detection

A file was modified after the manifest was created.

Command used:

echo "tampered" > test_files/a.txt

Result:

- test_files/a.txt: FAILED
- Hash mismatch detected

## Test Scenario 3: Missing File Detection

A file was deleted after the manifest was created.

Command used:

rm test_files/b.txt

Result:

- test_files/b.txt: FAILED open or read
- Missing file detected

## Security Strengths

- Uses SHA-256 hashing
- Encrypts manifest files
- Removes temporary plaintext manifest after verification
- Detects modified files
- Detects missing files
- Saves verification output to a report file

## Limitations

- Does not detect newly added files
- Does not run continuously in real time
- Does not include centralized logging
- Password management depends on the user

## Key Takeaways

This project helped reinforce how file integrity monitoring works at a basic level. It showed how hashing, encrypted metadata, Bash scripting, and verification workflows can be combined into a practical command-line security tool.

## Conclusion

HashVault successfully demonstrates a practical file integrity monitoring workflow using Bash, SHA-256 hashing, and OpenSSL encryption. The project provides hands-on experience with security scripting, file verification, and protected manifest handling.
