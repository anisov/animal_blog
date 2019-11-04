# Simple Django Blog with Docker

#### Configure and start project use docker.
1) export CURRENT_UID=$(id -u):$(id -g)
2) export PROJECT_DIR='path/to/project'
3) Create `docker/docker-compose.yml` based on `docker-compose.yml.sample`. 
4) Create `docker/uwsgi.Dockerfile` based on `docker/uwsgi.Dockerfile.sample`.
5) Create `docker/docker_data/nginx/nginx.conf `based on `docker/docker_data/nginx/nginx.conf.sample`.
6) Create `docker/docker_data/nginx/nginx.conf` based on `docker/docker_data/nginx/nginx.conf.sample`.
7) Create `docker/docker_data/uwsgi/uwsgi.ini` based on `docker/docker_data/uwsgi/uwsgi.ini.sample`.
8) Create `animal_blog/local_settings.py` based on `animal_blog/local_settings.py.sample`.
9) Create `blog_app/migrations/__init__.py`.
10) docker-compose -f docker/docker-compose.yml build
11) docker-compose -f docker/docker-compose.yml up -d