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
        USERNAME = credentials('TEST_USERNAME')
        PASSWORD = credentials('TEST_PASSWORD')
    }

    stages{
        stage('Install Dependencies'){
            steps{
                sh 'npm ci'
                sh 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests'){
            steps{
                sh """
                BROWSER=${params.BROWSER}\
                HEADLESS=${params.HEADLESS}\
                npm run test:bdd
                """
            }
        }

        stage('Publish Report'){
            steps{
                publishHTML(target:[
                    allowMissing: false,
                    alwaysLinkToLastBuild: true,
                    KeepAll: true,
                    reportDir: 'playwright-report',
                    reportFiles: 'index.html',
                    reportName: 'Playwright Report'
                ])
            }
        }
    }
    post{
        always{
            archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
        }
        success{
            echo 'Test passed!'
        }
        failure{
            echo 'Test failed - check the report'
        }
    }


}