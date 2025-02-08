build:
	docker compose build --no-cache next

start:
	docker compose up -d

stop:
	docker compose down