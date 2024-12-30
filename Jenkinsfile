pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/LuisEC-QA/Pipeline_Cypress.git'
                        bat 'npm install'
                        bat 'npm update' 
                        bat 'npm install --save-dev cypress-plugin-tab'                      
                        bat 'npx cypress run --record --key b4da640e-628e-46db-b424-82009265d1f5  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/LuisEC-QA/Pipeline_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'   
                        bat 'npm install --save-dev cypress-plugin-tab'                       
                        bat 'npx cypress run --record --key b4da640e-628e-46db-b424-82009265d1f5  --parallel'
                    
                    }
                }

                stage('Slave 3') {
                    agent {
                        label "Agent2_3"
                    }
                    steps {
                        git url: 'https://github.com/LuisEC-QA/Pipeline_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'    
                        bat 'npm install --save-dev cypress-plugin-tab'                      
                        bat 'npx cypress run --record --key b4da640e-628e-46db-b424-82009265d1f5  --parallel'
                    
                    }
                }

                stage('Slave 4') {
                    agent {
                        label "Agent2_4"
                    }
                    steps {
                        git url: 'https://github.com/LuisEC-QA/Pipeline_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'   
                        bat 'npm install --save-dev cypress-plugin-tab'                       
                        bat 'npx cypress run --record --key b4da640e-628e-46db-b424-82009265d1f5  --parallel'
                    
                    }
                }

               

                
   
                  
            }

             
        }

    }
            
}