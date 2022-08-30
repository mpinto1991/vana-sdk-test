.PHONY: install test lint coverage build deploy

EnvironmentType ?=dev
SERVICE_OPERATION ?=gt-trans
DATADOG_SECRET_ARN?=arn:aws:secretsmanager:us-east-1:646324814021:secret:dev/datadog-cc3wua

ifeq ($(EnvironmentType), qa)
	DATADOG_SECRET_ARN=arn:aws:secretsmanager:us-east-1:266083239478:secret:qa/datadog-y4F6E4
endif

ifeq ($(EnvironmentType), prod)
	DATADOG_SECRET_ARN=arn:aws:secretsmanager:us-east-1:384120103923:secret:prod/datadog-J3r7gt
endif

PARAMETER_OVERRIDES=--parameter-overrides EnvironmentType=$(EnvironmentType) DataDogSecretArn=$(DATADOG_SECRET_ARN)
S3_BUCKET=vana-deploy

ifneq ($(EnvironmentType),prod)
	S3_BUCKET=vana-deploy-$(EnvironmentType)
endif

install:
	npm install

test:
	npm run test

lint:
	npm run lint

coverage:
	npm run coverage

all: install lint coverage test

