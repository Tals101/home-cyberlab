#!/bin/bash

show_help() {
  echo "HashVault - File Integrity Checker"
  echo ""
  echo "Usage:"
  echo "  ./hashvault.sh create <file-or-folder> <manifest-name>"
  echo "  ./hashvault.sh verify <file-or-folder> <manifest-name>"
}

check_dependencies() {
  if ! command -v sha256sum >/dev/null 2>&1; then
    echo "Error: sha256sum is not installed."
    exit 1
  fi

  if ! command -v openssl >/dev/null 2>&1; then
    echo "Error: OpenSSL is not installed."
    exit 1
  fi
}

check_dependencies
ACTION="$1"
TARGET="$2"
MANIFEST="$3"

if [ -z "$ACTION" ] || [ -z "$TARGET" ] || [ -z "$MANIFEST" ]; then
  show_help
  exit 1
fi

if [ ! -e "$TARGET" ]; then
  echo "Error: Target does not exist."
  exit 1
fi

create_manifest() {

 if [ -e "$MANIFEST" ]; then
    echo "Error: Manifest already exists: $MANIFEST"
    echo "Choose a new manifest name or delete the old one first."
    exit 1
  fi

  echo "HashVault Manifest" > "$MANIFEST"
  echo "Created: $(date)" >> "$MANIFEST"
  echo "Target: $TARGET" >> "$MANIFEST"
  echo "--------------------------------" >> "$MANIFEST"

  if [ -f "$TARGET" ]; then
    sha256sum "$TARGET" >> "$MANIFEST"
  elif [ -d "$TARGET" ]; then
    find "$TARGET" -type f -exec sha256sum {} \; >> "$MANIFEST"
  fi

openssl enc -aes-256-cbc -salt -pbkdf2 -in "$MANIFEST" -out "$MANIFEST.enc"
rm "$MANIFEST"

echo "Encrypted manifest created: $MANIFEST.enc"
}

verify_manifest() {
  REPORT="reports/verification-report.txt"

  echo "HashVault Verification Report" > "$REPORT"
  echo "Generated: $(date)" >> "$REPORT"
  echo "Target: $TARGET" >> "$REPORT"
  echo "Manifest: $MANIFEST" >> "$REPORT"
  echo "--------------------------------" >> "$REPORT"

  openssl enc -d -aes-256-cbc -pbkdf2 -in "$MANIFEST.enc" -out "$MANIFEST"

tail -n +5 "$MANIFEST" | sha256sum -c | tee -a "$REPORT"

rm "$MANIFEST"

  echo "Report saved to: $REPORT"
}


case "$ACTION" in
  create)
    create_manifest
    ;;
  verify)
    verify_manifest
    ;;
  *)
    show_help
    exit 1
    ;;
esac
