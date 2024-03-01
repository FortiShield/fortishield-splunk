#!/bin/bash
# Define the main function
main() {
  if [ -z ${FORTISHIELD_API_URL+x} ]; then
    cat <<EOF
ERROR: FORTISHIELD_API_URL variable is not defined.
If you are using npm script to launch it, use:
  FORTISHIELD_API_URL="FORTISHIELD_API_URL" npm run <script_name>
  Example: FORTISHIELD_API_URL="https://172.16.1.2:55000" npm run <script_name>
EOF
    exit 1
  fi
  echo "Generate Fortishield API 4.0 endpoints data and format to use in Fortishield app"
  local API_TMP_OUTPUT_PATH="output"
  local API_OUTPUT_PATH="../../SplunkAppForFortishield/bin/api_info"

  node generate-api-info.js $FORTISHIELD_API_URL --full || exit_with_message "ERROR: the script had an error"
  echo "Moving files to $API_OUTPUT_PATH"
  mv "$API_TMP_OUTPUT_PATH"/* "$API_OUTPUT_PATH" || exit_with_message "ERROR: moving the generated files"
  echo "Removing temporal directory $API_TMP_OUTPUT_PATH"
  rm -rf $API_TMP_OUTPUT_PATH || exit_with_message "ERROR: removing the temporal directory"
  echo "Success generating Fortishield API 4.0 API info!"
}

# Function to exit with a message
exit_with_message() {
  echo $1
  exit 1
}

# Run main function
main
