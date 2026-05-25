FROM python:3.11-slim

WORKDIR /app

RUN useradd -r -u 10001 appuser

COPY app.py .

RUN pip install --no-cache-dir flask

USER appuser

ENV SECRET_KEY=supersecret

CMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]