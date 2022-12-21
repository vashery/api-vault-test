{{- with secret "database/creds/tempdb" }}
DB_USERNAME="{{ .Data.username }}"
DB_PASSWORD="{{ .Data.password }}"
DB_NAME=tempdb
{{- end }}