echo "########################## pull updates ##########################"
git pull

echo "########################## build react app ##########################"
cd frontend
npm run build

echo "########################## start server ##########################"
cd ../backend
waitress-serve --port=80 "main:app"
