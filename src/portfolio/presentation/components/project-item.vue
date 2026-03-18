<script setup>
import { Project } from '../../domain/model/project.entity.js'

const props = defineProps({ project: { type: Project, required: true } })
const { project } = props

function openGithub() {
  window.open(project.githubUrl, '_blank')
}

function openDeploy() {
  window.open(project.deployUrl, '_blank')
}
</script>

<template>
  <div class="project-card">
    <img :src="project.imageUrl" :alt="project.title"/>
    <div class="project-overlay">
      <div class="project-info">
        <h3>{{ project.title }}</h3>
        <p>{{ project.description }}</p>
        <div class="project-technologies">
                    <span v-for="tech in project.technologies" :key="tech.name" class="tech-badge">
                        <img v-if="tech.iconUrl" :src="tech.iconUrl" :alt="tech.name"/>
                        {{ tech.name }}
                    </span>
        </div>
      </div>
      <div class="project-links">
        <a :href="project.githubUrl" target="_blank">
          <i class="pi pi-github"/>
        </a>
        <a :href="project.deployUrl" target="_blank">
          <i class="pi pi-external-link"/>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  height: 400px;
  box-shadow: 0 0 30px 10px rgba(255, 86, 168, 0.4);
}

.project-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.project-info h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.project-info p {
  font-size: 13px;
  color: #cccccc;
  margin-bottom: 8px;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-badge {
  display: flex;
  align-items: center;
  gap: 4px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 11px;
}

.tech-badge img {
  width: 14px;
  height: 14px;
}

.project-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-links a {
  color: #ffffff;
  font-size: 26px;
  text-decoration: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-links a i {
  font-size: 26px;
  color: #ffffff;
}

.project-links a:hover {
  background: rgba(255, 86, 168, 0.4);
}
</style>