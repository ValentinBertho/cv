// Modal data for projects and experiences
const modalData = {
    loghelper: {
        title: 'LogHelper',
        subtitle: 'Portail de gestion intelligente des logs',
        content: `
            <div class="modal-section">
                <h3>Vue d'ensemble</h3>
                <p>LogHelper est une solution complète de gestion et d'analyse de logs conçue pour simplifier le travail des équipes de support technique. Face à la verbosité excessive des logs Spring Boot, l'application offre une interface intuitive pour filtrer, analyser et exporter les informations pertinentes.</p>
            </div>

            <div class="image-placeholder">
                <i class="fas fa-image" style="font-size: 3em; margin-right: 15px;"></i>
                Capture d'écran du dashboard LogHelper
            </div>

            <div class="modal-section">
                <h3>Fonctionnalités principales</h3>
                <ul>
                    <li>Consultation en temps réel des logs d'applications Spring Boot</li>
                    <li>Filtrage intelligent pour masquer les informations verbeux</li>
                    <li>Génération automatique de rapports PDF structurés</li>
                    <li>Export personnalisable des logs pour les développeurs</li>
                    <li>Interface de recherche avancée avec filtres multiples</li>
                    <li>Historique des incidents et tracking des résolutions</li>
                    <li>Dashboard de visualisation des erreurs fréquentes</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Stack technique</h3>
                <div class="tech-grid">
                    <div class="tech-item">Java 21</div>
                    <div class="tech-item">Spring Boot 3.x</div>
                    <div class="tech-item">Thymeleaf</div>
                    <div class="tech-item">SQL Server</div>
                    <div class="tech-item">iText PDF</div>
                    <div class="tech-item">Bootstrap 5</div>
                    <div class="tech-item">Maven</div>
                </div>
            </div>
        `
    },
    athaudit: {
        title: 'Ath Audit',
        subtitle: 'Solution d\'audit pour la conformité facturation électronique',
        content: `
            <div class="modal-section">
                <h3>Vue d'ensemble</h3>
                <p>Ath Audit est un outil d'audit automatisé de bases de données développé en anticipation de l'obligation de facturation électronique. L'application analyse les données d'entreprise pour détecter les anomalies et non-conformités.</p>
            </div>

            <div class="image-placeholder">
                <i class="fas fa-image" style="font-size: 3em; margin-right: 15px;"></i>
                Interface principale d'Ath Audit
            </div>

            <div class="modal-section">
                <h3>Fonctionnalités clés</h3>
                <ul>
                    <li>Scan automatique des bases de données</li>
                    <li>Vérification de la validité des numéros SIRET via l'API INSEE</li>
                    <li>Détection des sociétés sans SIRET ou avec SIRET invalide</li>
                    <li>Génération de rapports d'audit détaillés</li>
                    <li>Export des données à corriger au format Excel</li>
                    <li>Dashboard de conformité avec indicateurs clés</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Stack technique</h3>
                <div class="tech-grid">
                    <div class="tech-item">Java 21</div>
                    <div class="tech-item">Spring Boot 3.x</div>
                    <div class="tech-item">Thymeleaf</div>
                    <div class="tech-item">SQL Server</div>
                    <div class="tech-item">API Sirene INSEE</div>
                </div>
            </div>
        `
    },
    atheneo: {
        title: 'Atheneo Add-in',
        subtitle: 'Extension Outlook pour la productivité',
        content: `
            <div class="modal-section">
                <h3>Vue d'ensemble</h3>
                <p>Atheneo Add-in est une extension web pour Microsoft Outlook qui enrichit l'expérience utilisateur en intégrant des fonctionnalités personnalisées directement dans l'interface mail.</p>
            </div>

            <div class="image-placeholder">
                <i class="fas fa-image" style="font-size: 3em; margin-right: 15px;"></i>
                Add-in intégré dans Outlook
            </div>

            <div class="modal-section">
                <h3>Fonctionnalités principales</h3>
                <ul>
                    <li>Enregistrement du mail</li>
                    <li>Enregistrement des PJ du mail</li>
                    <li>Création de demande directement sur l'ERP</li>
                    <li>Ouverture fiche client sur l'ERP</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Stack technique</h3>
                <div class="tech-grid">
                    <div class="tech-item">TypeScript</div>
                    <div class="tech-item">Office.js</div>
                    <div class="tech-item">Java / Spring Boot</div>
                    <div class="tech-item">Vercel</div>
                    <div class="tech-item">OAuth 2.0</div>
                </div>
            </div>
        `
    },
    trainmate: {
        title: 'TrainMate',
        subtitle: 'Application PWA de coaching sportif',
        content: `
            <div class="modal-section">
                <h3>Vue d'ensemble</h3>
                <p>TrainMate est une Progressive Web App (PWA) innovante qui met en relation des sportifs et des coachs professionnels. L'application offre une plateforme complète pour la création de plans d'entraînement personnalisés.</p>
            </div>

            <div class="image-placeholder">
                <i class="fas fa-image" style="font-size: 3em; margin-right: 15px;"></i>
                Dashboard sportif TrainMate
            </div>

            <div class="modal-section">
                <h3>Fonctionnalités principales</h3>
                <ul>
                    <li>Profils détaillés pour sportifs et coachs</li>
                    <li>Système de matching intelligent sportif-coach</li>
                    <li>Création de plans d'entraînement personnalisés</li>
                    <li>Suivi en temps réel des performances</li>
                    <li>Messagerie intégrée</li>
                    <li>Mode hors-ligne complet</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Stack technique</h3>
                <div class="tech-grid">
                    <div class="tech-item">React 18</div>
                    <div class="tech-item">TypeScript</div>
                    <div class="tech-item">.NET Core 8</div>
                    <div class="tech-item">PostgreSQL</div>
                    <div class="tech-item">Vercel</div>
                    <div class="tech-item">Heroku</div>
                    <div class="tech-item">PWA</div>
                </div>
            </div>
        `
    },
    mismo: {
        title: 'MISMO',
        subtitle: 'Concepteur Développeur d\'Applications • Avril 2022 - Présent',
        content: `
            <div class="modal-section">
                <h3>À propos de MISMO</h3>
                <p>MISMO est une société spécialisée dans les solutions de gestion intégrée pour les entreprises. En tant que Concepteur Développeur, j'interviens sur l'ensemble du cycle de vie des projets.</p>
            </div>

            <div class="modal-section">
                <h3>Missions principales</h3>
                <ul>
                    <li>Analyse des besoins fonctionnels et techniques</li>
                    <li>Développement full stack d'applications métier</li>
                    <li>Conception et développement d'API REST</li>
                    <li>Intégration avec Office 365, LUCCA, CHORUS Pro</li>
                    <li>Optimisation du code</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Technologies utilisées</h3>
                <div class="tech-grid">
                    <div class="tech-item">.NET Core 8</div>
                    <div class="tech-item">Java 21</div>
                    <div class="tech-item">Spring Boot</div>
                    <div class="tech-item">React</div>
                    <div class="tech-item">SQL Server</div>
                    <div class="tech-item">GitLab</div>
                </div>
            </div>
        `
    },
    apside: {
        title: 'Apside',
        subtitle: 'Ingénieur Études et Développement • Sept. 2018 - Mai 2022',
        content: `
            <div class="modal-section">
                <h3>À propos d\'Apside</h3>
                <p>Apside est une ESN française majeure. Durant près de 4 ans, j'ai travaillé sur des missions variées pour des clients prestigieux.</p>
            </div>

            <div class="modal-section">
                <h3>Missions principales</h3>
                <ul>
                    <li><strong>Euro Information (2019-2020)</strong> - Développement d'outils intranet pour le Crédit Mutuel</li>
                    <li><strong>Banque Populaire (2020-2021)</strong> - Portail intranet SharePoint 2016</li>
                    <li><strong>Showroomprivé (2021)</strong> - Module d'achat full stack</li>
                    <li><strong>Air Pays de la Loire (2021-2022)</strong> - Tableaux interactifs qualité de l'air</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Technologies utilisées</h3>
                <div class="tech-grid">
                    <div class="tech-item">C#</div>
                    <div class="tech-item">.NET Core</div>
                    <div class="tech-item">Angular</div>
                    <div class="tech-item">SharePoint</div>
                    <div class="tech-item">Java</div>
                    <div class="tech-item">Spring Boot</div>
                </div>
            </div>
        `
    },
    oleap: {
        title: 'OLEAP',
        subtitle: 'Consultant Développeur Informatique • Sept. 2015 - Sept. 2018',
        content: `
            <div class="modal-section">
                <h3>À propos d\'OLEAP</h3>
                <p>OLEAP est un intégrateur spécialisé dans les solutions ERP SAGE. J'ai travaillé sur la conception de solutions sur-mesure.</p>
            </div>

            <div class="modal-section">
                <h3>Missions principales</h3>
                <ul>
                    <li>Analyse des besoins métiers</li>
                    <li>Développement d'outils ERP SAGE 100/1000</li>
                    <li>Création d'interfaces web et d'API</li>
                    <li>Automatisation des processus métiers</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Technologies utilisées</h3>
                <div class="tech-grid">
                    <div class="tech-item">C#</div>
                    <div class="tech-item">.NET</div>
                    <div class="tech-item">SQL Server</div>
                    <div class="tech-item">Angular</div>
                    <div class="tech-item">SAGE 100/1000</div>
                </div>
            </div>
        `
    },
    ca: {
        title: 'Crédit Agricole Technologies',
        subtitle: 'Développeur Informatique • Août 2014 - Août 2015',
        content: `
            <div class="modal-section">
                <h3>Première expérience professionnelle</h3>
                <p>Le Crédit Agricole Technologies est la filiale du groupe Crédit Agricole spécialisée dans les services informatiques.</p>
            </div>

            <div class="modal-section">
                <h3>Missions principales</h3>
                <ul>
                    <li>Conception et développement d'applications bancaires</li>
                    <li>Développement en C# et .NET Framework</li>
                    <li>Maintenance évolutive d'applications</li>
                    <li>Développement de requêtes SQL</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>Technologies utilisées</h3>
                <div class="tech-grid">
                    <div class="tech-item">C#</div>
                    <div class="tech-item">.NET Framework</div>
                    <div class="tech-item">SQL Server</div>
                    <div class="tech-item">Visual Studio</div>
                </div>
            </div>
        `
    }
};