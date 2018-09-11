pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                withAWS(credentials: '5766a5cb-7ee9-4d29-b098-71238516a4f9') {
                    s3Upload(bucket:"bb8-test-celso", path:'/', includePathPattern:'**/*', workingDir:'dist')
                }
            }
        }
    }
}