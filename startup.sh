
cd frontend
npm run build

cd ../backend
waitress-serve --port=80 "main:app"
