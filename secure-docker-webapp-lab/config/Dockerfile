FROM python:3.11-slim

WORKDIR /app

RUN useradd -r -u 10001 appuser

COPY app.py .

RUN pip install --no-cache-dir flask

USER appuser

# SECRET_KEY is supplied at run time (docker run -e or Docker secrets), never stored in the image

CMD ["flask", "--app", "app", "run", "--host=0.0.0.0"]