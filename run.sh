redis-server --port 6380 --daemonize yes
pm2 start "npm run dev" --name  digiteltechnogi
pm2 start node ./src/app/tasks/worker.js


