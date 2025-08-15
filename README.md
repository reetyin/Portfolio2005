# Getting Started with Create React App



# Rui Yin Portfolio Website

This project is a portfolio website built with Create React App. It includes the following sections:
- Basic Information
- Work
- Skills
- Resources
- Developer Setup

## Docker Deployment

1. Build the Docker image:
```bash
docker build -t yin_rui_coding_assignment14 .
```

2. Run the container (port 5575):
```bash
docker run -d --name yin_rui_coding_assignment14 -p 5575:80 yin_rui_coding_assignment14
```

3. Open in your browser:
```
http://localhost:5575
```

## Directory Structure

# Rui Yin Portfolio Website

## Assignment Overview

This is the final portfolio assignment for the BSBT program. The site is built with Create React App and highlights all course work completed so far. It uses a component library and is fully dockerized to run at `localhost:5575`.

## Sections Included
- Basic Information
- Work
- Skills
- Resources
- Developer Setup
- Real project data and images

## How to Run (Dockerized)

1. **Build the Docker image:**
	```bash
	docker build -t yin_rui_coding_assignment14 .
	```

2. **Run the container (port 5575):**
	```bash
	docker run -d --name yin_rui_coding_assignment14 -p 5575:80 yin_rui_coding_assignment14
	```

3. **Open in your browser:**
	[http://localhost:5575](http://localhost:5575)

## Directory Structure
- Main working directory: `yin_rui_final_site`
- Source code: `src/`
- Dockerfile and README.md: project root

## Development (Optional)
For local development or debugging, use:
```bash
npm start
```
This will launch the app for local development. For assignment submission, always use Docker and access at [http://localhost:5575](http://localhost:5575).

## Notes
- All requirements from the assignment are met: sections, real project data, images, modern UI, Docker deployment, and instructions.
- No extra configuration is needed. Just follow the steps above to run the site.

## Troubleshooting
- If you encounter issues, make sure Docker is installed and running.
- If port 5575 is in use, stop any existing containers or change the port mapping.

## Contact
For questions or feedback, contact Rui Yin at: reetyin@gmail.com

