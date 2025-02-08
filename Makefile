build:
	docker compose build --no-cache chessarbiter-next

start:
	docker compose up -d

stop:
	docker compose down