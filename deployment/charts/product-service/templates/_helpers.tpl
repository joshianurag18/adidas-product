{{/* vim: set filetype=mustache: */}}
{{/*
Expand the name of the chart.
*/}}
{{- define "name" -}}
{{- if .Values.service.canary.enabled }}
{{- printf "%s-%s" .Chart.Name .Values.service.canary.name | trunc 63 | trimSuffix "-" -}}
{{- else }}
{{- printf "%s" .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end }}
{{- end -}}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" -}}
{{- end -}}

{{/*
Credentials for pulling images.
*/}}
{{- define "imagePullSecret" }}
{{- printf "{\"auths\": {\"%s\": {\"auth\": \"%s\"}}}" .Values.image.pullSecret.registry (printf "%s:%s" .Values.image.pullSecret.username .Values.image.pullSecret.password | b64enc) | b64enc }}
{{- end -}}
