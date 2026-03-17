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
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <div class="project-technologies">
            <span v-for="tech in project.technologies" :key="tech.name" class="tech-badge">
                <img :src="tech.iconUrl" :alt="tech.name"/>
                {{ tech.name }}
            </span>
    </div>
    <div class="project-links">
      <pv-button icon="pi pi-github" @click="openGithub"/>
      <pv-button icon="pi pi-link"   @click="openDeploy"/>
    </div>
  </div>
</template>

<style scoped>
</style>