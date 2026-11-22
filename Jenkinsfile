
pipeline {
    agent any

    options {
        timestamps()
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Chromium') {
            steps {
                bat 'npx playwright install chromium'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }
    }

   post {
    always {
        allure includeProperties: false,
               jdk: '',
               results: [[path: 'allure-results']]

        archiveArtifacts artifacts: 'allure-results/**,test-results/**', allowEmptyArchive: true
    }
}
}
