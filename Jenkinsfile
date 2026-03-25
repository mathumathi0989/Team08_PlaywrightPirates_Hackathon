pipeline{
    agent any 

    parameters{
        choice(
            name: 'BROWSER',
            choices: ['chromium','firefox','webkit','edge'],
            description: 'Select Browser'
        )
        booleanParam(
            name: 'HEADLESS',
            defaultValue: true,
            description: 'Run headless?'
        )
    }

    environment{
        APP_URL = credentials('APP_URL')
        APP_USERNAME = credentials('APP_USERNAME')
        APP_PASSWORD = credentials('APP_PASSWORD')
    }

    stages{
        stage('Install Dependencies'){
            steps{
            withEnv(['PATH+EXTRA=/opt/homebrew/bin:/usr/local/bin']) {
                sh 'node --version'
                sh 'npm --version'
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }
        }

        stage('Run Tests'){
            steps{
                withEnv(['PATH+EXTRA=/opt/homebrew/bin:/usr/local/bin']) 
                {
                sh """
                BROWSER=${params.BROWSER}\
                HEADLESS=${params.HEADLESS}\
                APP_URL=${APP_URL}\
                APP_USERNAME=${APP_USERNAME}\
                APP_PASSWORD=${APP_PASSWORD}\
                npm run test:bdd
                """
            }
        }
        }

        stage('Publish Report'){
            steps{
                publishHTML(target:[
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    keepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }
    post{
        always{
            archiveArtifacts artifacts: 'playwright-report/**', 
            allowEmptyArchive: true,
            fingerprint: true
        }
        success{
            echo 'Test passed!'
        }
        failure{
            echo 'Test failed - check the report'
        }
    }


}