// @ts-nocheck

/* eslint-disable */ 
/** 
 * This file contains language specific functions for tree-shaking. 
 * 
 *! WARNING: Only import from this file if you want to manually
 *! optimize your bundle. Else, import from the `messages.js` file. 
 */
import * as registry from '../registry.js'

/**
* @param {{  }} i
*/
export const site_title = (i) => `Paraglide + Astro Beispiel`

/**
* @param {{  }} i
*/
export const site_description = (i) => `Ein Beispiel für die Verwendung von Paraglide und Astro`

/**
* @param {{ site: NonNullable<unknown> }} i
*/
export const follow_us_on = (i) => `Folge uns auf ${i.site}`

/**
* @param {{ site: NonNullable<unknown> }} i
*/
export const view_on = (i) => `Siehe auf ${i.site}`

/**
* @param {{  }} i
*/
export const all_rights_reserved = (i) => `Alle Rechte vorbehalten`

/**
* @param {{ count: NonNullable<unknown> }} i
*/
export const count = (i) => `Der Zählerstand ist: ${i.count}`

/**
* @param {{  }} i
*/
export const english = (i) => `Englisch`

/**
* @param {{  }} i
*/
export const german = (i) => `Deutsch`

/**
* @param {{  }} i
*/
export const page_not_found = (i) => `Seite nicht gefunden`

/**
* @param {{ locale: NonNullable<unknown> }} i
*/
export const switch_locale = (i) => `Programmatisch locale ändern zu ${i.locale}`

/**
* @param {{  }} i
*/
export const home = (i) => `Haus`

/**
* @param {{  }} i
*/
export const pricing = (i) => `Preise`

/**
* @param {{  }} i
*/
export const pricing_description = (i) => `Gehen Sie mit Zuversicht voran. Capgo ist die Unternehmens-Cloud-Plattform für Capacitor-Anwendungen.`

/**
* @param {{  }} i
*/
export const blog = (i) => `Blog`

/**
* @param {{  }} i
*/
export const documentation = (i) => `Dokumentation`

/**
* @param {{  }} i
*/
export const login = (i) => `Anmelden`

/**
* @param {{  }} i
*/
export const register = (i) => `Registrieren`

/**
* @param {{  }} i
*/
export const solutions = (i) => `Lösungen`

/**
* @param {{  }} i
*/
export const support = (i) => `Unterstützung`

/**
* @param {{  }} i
*/
export const turn_off_adblock = (i) => `Bitte schalten Sie Ihren Adblocker aus!`

/**
* @param {{  }} i
*/
export const making_world_better = (i) => `Die Welt zu einem besseren Ort machen, indem elegante Apps entwickelt werden.`

/**
* @param {{  }} i
*/
export const carbon_removal = (i) => `5 % unseres Umsatzes fließt in die Kohlenstoffentfernung.`

/**
* @param {{  }} i
*/
export const open_source = (i) => `100 % Open Source`

/**
* @param {{  }} i
*/
export const built_with_supabase = (i) => `Gebaut mit Supabase`

/**
* @param {{  }} i
*/
export const build_in_public_on_twitter = (i) => `In der Öffentlichkeit auf Twitter bauen`

/**
* @param {{  }} i
*/
export const footer = (i) => `Fußzeile`

/**
* @param {{  }} i
*/
export const company = (i) => `Firma`

/**
* @param {{  }} i
*/
export const legal = (i) => `Rechtlich`

/**
* @param {{  }} i
*/
export const copyright = (i) => `Alle Rechte vorbehalten.`

/**
* @param {{  }} i
*/
export const trust = (i) => `Vertrauen`

/**
* @param {{  }} i
*/
export const app_mobile = (i) => `Mobile-App`

/**
* @param {{  }} i
*/
export const plugins = (i) => `Plugins`

/**
* @param {{  }} i
*/
export const disclaimer = (i) => `Haftungsausschluss`

/**
* @param {{  }} i
*/
export const read_our_disclaimer = (i) => `Lese unseren Haftungsausschluss`

/**
* @param {{  }} i
*/
export const plugins_description = (i) => `Capgo bietet mehrere Plugins an, um Ihnen zu helfen, Ihre App schneller und besser zu erstellen.`

/**
* @param {{  }} i
*/
export const awesome_capacitor = (i) => `Toller Kondensator`

/**
* @param {{  }} i
*/
export const top_app_by_framework = (i) => `Top-App nach Framework`

/**
* @param {{  }} i
*/
export const community = (i) => `Gemeinschaft`

/**
* @param {{  }} i
*/
export const guides = (i) => `Leitfäden`

/**
* @param {{  }} i
*/
export const status = (i) => `Status`

/**
* @param {{  }} i
*/
export const chat = (i) => `Plaudern`

/**
* @param {{  }} i
*/
export const sponsor = (i) => `Sponsoring`

/**
* @param {{  }} i
*/
export const about = (i) => `Über`

/**
* @param {{  }} i
*/
export const imprint = (i) => `Impressum`

/**
* @param {{  }} i
*/
export const imprint_description = (i) => `Finden Sie hier die Infos zur Firma $1`

/**
* @param {{  }} i
*/
export const jobs = (i) => `Jobs`

/**
* @param {{  }} i
*/
export const contributing = (i) => `Beitragen`

/**
* @param {{  }} i
*/
export const contributing_description = (i) => `Wie man zu Capgo Open Source beiträgt`

/**
* @param {{  }} i
*/
export const consulting_description = (i) => `Gehen Sie selbstbewusst voran. Capgo bietet mehrere Schutzebenen, um Ihr geistiges Eigentum und sensible Daten zu sichern.`

/**
* @param {{  }} i
*/
export const security = (i) => `Sicherheit`

/**
* @param {{  }} i
*/
export const consulting = (i) => `Beratung`

/**
* @param {{  }} i
*/
export const affiliate = (i) => `Affiliate`

/**
* @param {{  }} i
*/
export const privacy = (i) => `Datenschutz`

/**
* @param {{  }} i
*/
export const support_policy = (i) => `Unterstützungspolitik`

/**
* @param {{  }} i
*/
export const read_our_support_policy = (i) => `Lesen Sie unsere Support-Richtlinie`

/**
* @param {{  }} i
*/
export const privacy_policy = (i) => `Datenschutzerklärung`

/**
* @param {{  }} i
*/
export const read_our_privacy_policy = (i) => `Lesen Sie unsere Datenschutzrichtlinie`

/**
* @param {{  }} i
*/
export const sla = (i) => `Dienstleistungsvereinbarung`

/**
* @param {{  }} i
*/
export const sla_policy = (i) => `SLA-Richtlinie`

/**
* @param {{  }} i
*/
export const read_our_sla_policy = (i) => `Lesen Sie unsere SLA-Richtlinie`

/**
* @param {{  }} i
*/
export const security_policy = (i) => `Sicherheitspolitik`

/**
* @param {{  }} i
*/
export const read_our_security_policy = (i) => `Lesen Sie unsere Sicherheitsrichtlinie`

/**
* @param {{  }} i
*/
export const return_policy = (i) => `Rückgaberecht`

/**
* @param {{  }} i
*/
export const read_our_return_policy = (i) => `Lesen Sie unsere Rückgabebedingungen`

/**
* @param {{  }} i
*/
export const aup = (i) => `Zulässige Nutzungsrichtlinie`

/**
* @param {{  }} i
*/
export const read_our_aup = (i) => `Lesen Sie unsere Richtlinie für die akzeptable Nutzung`

/**
* @param {{  }} i
*/
export const Capacitor_Sanbox_App = (i) => `Kondensator Sanbox App`

/**
* @param {{  }} i
*/
export const Capacitor_Sanbox_App_description = (i) => `Versuche jede Version deiner App unmittelbar in der Sandbox-App in einer Sekunde. Verwalte OTA-Updates für deine Capacitor-App aus deiner Tasche, verfügbar für iOS und Android.`

/**
* @param {{  }} i
*/
export const eula = (i) => `Endbenutzer-Lizenzvereinbarung`

/**
* @param {{  }} i
*/
export const read_our_eula = (i) => `Lesen Sie unsere Endbenutzer-Lizenzvereinbarung.`

/**
* @param {{  }} i
*/
export const data_processing_agreement = (i) => `Datenverarbeitungsvereinbarung`

/**
* @param {{  }} i
*/
export const read_our_data_processing_agreement = (i) => `Lesen Sie unsere Vereinbarung zur Datenverarbeitung`

/**
* @param {{  }} i
*/
export const terms = (i) => `Nutzungsbedingungen`

/**
* @param {{  }} i
*/
export const read_our_terms_of_service = (i) => `Lesen Sie unsere Nutzungsbedingungen`

/**
* @param {{  }} i
*/
export const security_txt = (i) => `Sicherheit.txt`

/**
* @param {{  }} i
*/
export const dp = (i) => `Datenrichtlinie`

/**
* @param {{  }} i
*/
export const dpa = (i) => `Datenschutzvereinbarung`

/**
* @param {{  }} i
*/
export const instant_updates_for_capacitor = (i) => `Sofortige Updates für Capacitor`

/**
* @param {{  }} i
*/
export const ship_updates_fixes_changes_and_features = (i) => `Schiff-Updates, Fehlerbehebungen, Änderungen und Funktionen`

/**
* @param {{  }} i
*/
export const within_minutes = (i) => `Innerhalb von Minuten`

/**
* @param {{  }} i
*/
export const no_credit_card_required = (i) => `Keine Kreditkarte erforderlich`

/**
* @param {{  }} i
*/
export const try_for_free = (i) => `Jetzt kostenlos testen`

/**
* @param {{  }} i
*/
export const instant_updates = (i) => `Echtzeit-Updates`

/**
* @param {{  }} i
*/
export const reach_users_now_not_weeks_later = (i) => `Erreichen Sie Nutzer jetzt, nicht in Wochen.`

/**
* @param {{  }} i
*/
export const app_store_compliant = (i) => `App Store-konform`

/**
* @param {{  }} i
*/
export const compliant_with_apple_and_android_requirements = (i) => `100% konform mit den Anforderungen von Apple und Android`

/**
* @param {{  }} i
*/
export const end_to_end_encryption = (i) => `Ende-zu-Ende-Verschlüsselung`

/**
* @param {{  }} i
*/
export const only_your_users_can_decrypt_your_updates_no_one_else = (i) => `Nur deine Nutzer können deine Updates entschlüsseln, sonst niemand.`

/**
* @param {{  }} i
*/
export const no_more_wait = (i) => `Kein weiteres Warten`

/**
* @param {{  }} i
*/
export const for_apple_and_google_app_updates_distribution = (i) => `Für die Verteilung von App-Updates für Apple und Google`

/**
* @param {{  }} i
*/
export const youre_in_good_company = (i) => `Du bist in guter Gesellschaft.`

/**
* @param {{  }} i
*/
export const capgo_enables_development_teams_at_some_of_the_most_innovative_companies = (i) => `Capgo ermöglicht Entwicklungsteams in einigen der innovativsten Unternehmen.`

/**
* @param {{  }} i
*/
export const apps_with_20m_users = (i) => `Apps mit über 20 Millionen Nutzern`

/**
* @param {{  }} i
*/
export const use_capgo = (i) => `Verwenden Sie Capgo`

/**
* @param {{  }} i
*/
export const our_numbers_are_shared_transparently_since_december_2021 = (i) => `Unsere Zahlen werden seit Dezember 2021 transparent geteilt.`

/**
* @param {{  }} i
*/
export const last_update = (i) => `Letzte Aktualisierung`

/**
* @param {{  }} i
*/
export const updates_delivered = (i) => `Updates wurden geliefert`

/**
* @param {{  }} i
*/
export const all_around_the_globe = (i) => `Überall auf der Welt`

/**
* @param {{  }} i
*/
export const apps = (i) => `Apps`

/**
* @param {{  }} i
*/
export const using_us_in_production = (i) => `Uns in der Produktion verwenden`

/**
* @param {{  }} i
*/
export const stars_in_github = (i) => `Sterne in GitHub`

/**
* @param {{  }} i
*/
export const how_it_work = (i) => `Wie funktioniert es?`

/**
* @param {{  }} i
*/
export const ship_your_first_update_in_less_than_15_minutes = (i) => `Versende dein erstes Update in weniger als 15 Minuten!`

/**
* @param {{  }} i
*/
export const install_the_plugin = (i) => `Installiere das Plugin`

/**
* @param {{  }} i
*/
export const send_your_first_update = (i) => `Sende dein erstes Update`

/**
* @param {{  }} i
*/
export const build_your_app_as_usual_then_send_with_the_cli = (i) => `Bauen Sie Ihre App wie gewohnt und senden Sie sie dann mit der CLI.`

/**
* @param {{  }} i
*/
export const get_the_update = (i) => `Holen Sie sich das Update`

/**
* @param {{  }} i
*/
export const open_the_app_it_update_in_the_background = (i) => `Öffnen Sie die App, sie wird im Hintergrund aktualisiert.`

/**
* @param {{  }} i
*/
export const start_now = (i) => `Jetzt anfangen`

/**
* @param {{  }} i
*/
export const faster_releases = (i) => `Schnellere Veröffentlichungen`

/**
* @param {{  }} i
*/
export const integration = (i) => `Integration`

/**
* @param {{  }} i
*/
export const goodbye_bugs = (i) => `Sofortige Änderungen, Fehlerbehebungen Kein Warten auf das erneute Herunterladen der App erforderlich! Mit nur einem Befehl können Benutzer schnell sehen, wie Fehlerbehebungen in Aktion treten. Verabschieden Sie sich von frustrierenden Verzögerungen.`

/**
* @param {{  }} i
*/
export const manage_updates_effortlessly = (i) => `Updates mühelos verwalten`

/**
* @param {{  }} i
*/
export const user_assignment = (i) => `Benutzereigenschaft`

/**
* @param {{  }} i
*/
export const easily_assign_users_and_send_the_latest_update_to_your_private_or_public_testers = (i) => `Weisen Sie Benutzern einfach zu und senden Sie das neueste Update an Ihre privaten oder öffentlichen Tester.`

/**
* @param {{  }} i
*/
export const seamless_deployment_process = (i) => `Nahtloser Bereitstellungsprozess`

/**
* @param {{  }} i
*/
export const when_your_update_is_ready_deploy_it_seamlessly_to_all_your_users = (i) => `Wenn Ihr Update bereit ist, stellen Sie es nahtlos allen Ihren Benutzern zur Verfügung.`

/**
* @param {{  }} i
*/
export const simple_configuration_management = (i) => `Einfache Konfigurationsverwaltung`

/**
* @param {{  }} i
*/
export const manage_all_your_configurations_conveniently_through_our_user_friendly_web_interface = (i) => `Verwalten Sie all Ihre Konfigurationen bequem über unsere benutzerfreundliche Weboberfläche.`

/**
* @param {{  }} i
*/
export const try_risk_free_with_a_15_days_free_trial = (i) => `Probieren Sie es risikofrei mit einer 15-tägigen kostenlosen Testversion.`

/**
* @param {{  }} i
*/
export const get_started = (i) => `Loslegen`

/**
* @param {{  }} i
*/
export const they_love_capgo = (i) => `Sie lieben Capgo.`

/**
* @param {{  }} i
*/
export const flexible_organization_management_for_your_team = (i) => `Flexibles Organisationsmanagement für Ihr Team`

/**
* @param {{  }} i
*/
export const create_manage_organizations_with_ease = (i) => `Erstellen und verwalten Sie mehrere Organisationen mit Leichtigkeit und weisen Sie jedem Benutzer spezifische Rechte zu. Capgo bietet leistungsstarke Werkzeuge, um Ihr Team organisiert und effizient zu halten.`

/**
* @param {{  }} i
*/
export const multiple_organizations = (i) => `Mehrere Organisationen`

/**
* @param {{  }} i
*/
export const manage_various_teams = (i) => `Teams verwalten`

/**
* @param {{  }} i
*/
export const create_oversee_organizations_from_single_account = (i) => `Erstellen und verwalten Sie mehrere Organisationen von einem einzigen Konto aus, um Ihren Arbeitsablauf zu optimieren und die Produktivität zu steigern.`

/**
* @param {{  }} i
*/
export const granular_permissions = (i) => `Granulare Berechtigungen`

/**
* @param {{  }} i
*/
export const control_access_levels = (i) => `Zugriffslevel steuern`

/**
* @param {{  }} i
*/
export const assign_specific_rights_and_access_levels_to_each_user_within_your_organizations = (i) => `Weisen Sie jedem Benutzer innerhalb Ihrer Organisation spezifische Rechte und Zugriffslevels zu, um Sicherheit und eine angemessene Ressourcenzuweisung zu gewährleisten.`

/**
* @param {{  }} i
*/
export const flexible_management = (i) => `Flexibles Management`

/**
* @param {{  }} i
*/
export const adapt_as_you_grow = (i) => `Anpassen, während Sie wachsen`

/**
* @param {{  }} i
*/
export const easily_adjust_user_roles_and_permissions_as_your_team_and_projects_evolve_maintaining_optimal_organization_structure = (i) => `Passen Sie Benutzerrollen und Berechtigungen ganz einfach an, während sich Ihr Team und Ihre Projekte weiterentwickeln, um eine optimale Organisationsstruktur aufrechtzuerhalten.`

/**
* @param {{  }} i
*/
export const effortless_ci_cd_solutions = (i) => `Mühelose CI/CD-Lösungen`

/**
* @param {{  }} i
*/
export const we_configure_your_ci_cd_pipeline_directly_in_your_preferred_platform_whether_its_github_actions_gitlab_ci_or_others_we_dont_host_ci_cd_or_charge_you_to_maintain_it = (i) => `Wir konfigurieren Ihre CI/CD-Pipeline direkt in Ihrer bevorzugten Plattform, sei es GitHub Actions, GitLab CI oder anderen. Wir hosten keine CI/CD oder berechnen Ihnen Gebühren für die Wartung.`

/**
* @param {{  }} i
*/
export const seamless_integration = (i) => `Nahtlose Integration`

/**
* @param {{  }} i
*/
export const we_set_up_your_ci_cd_workflow_to_work_seamlessly_with_your_current_development_process_no_need_to_switch_platforms_or_learn_new_tools = (i) => `Wir richten Ihren CI/CD-Workflow so ein, dass er nahtlos mit Ihrem aktuellen Entwicklungsprozess funktioniert. Es ist nicht notwendig, die Plattform zu wechseln oder neue Werkzeuge zu lernen.`

/**
* @param {{  }} i
*/
export const tailored_configuration = (i) => `Maßgeschneiderte Konfiguration`

/**
* @param {{  }} i
*/
export const our_team_customizes_the_ci_cd_setup_to_match_your_specific_project_requirements_ensuring_optimal_performance_and_efficiency = (i) => `Unser Team passt die CI/CD-Konfiguration an Ihre spezifischen Projektanforderungen an, um optimale Leistung und Effizienz zu gewährleisten.`

/**
* @param {{  }} i
*/
export const platform_independence = (i) => `Plattformunabhängigkeit`

/**
* @param {{  }} i
*/
export const whether_you_use_github_gitlab_or_another_version_control_system_we_adapt_our_configuration_to_fit_your_existing_infrastructure = (i) => `Egal, ob Sie GitHub, GitLab oder ein anderes Versionskontrollsystem verwenden, wir passen unsere Konfiguration an Ihre bestehende Infrastruktur an.`

/**
* @param {{  }} i
*/
export const expert_guidance = (i) => `Expertenrat`

/**
* @param {{  }} i
*/
export const benefit_from_our_deep_expertise_in_mobile_app_ci_cd_best_practices_without_the_need_to_build_and_maintain_a_complex_system_yourself = (i) => `Profitieren Sie von unserer umfassenden Expertise in den Best Practices für CI/CD von mobilen Anwendungen, ohne ein komplexes System selbst aufbauen und pflegen zu müssen.`

/**
* @param {{  }} i
*/
export const we_already_setup_ci_cd_for_50_apps = (i) => `Wir haben bereits CI/CD für über 50 Apps eingerichtet.`

/**
* @param {{  }} i
*/
export const running_your_ci_cd_costs_300 = (i) => `Das Betreiben Ihres CI/CD kostet etwa 300 $/Monat.`

/**
* @param {{  }} i
*/
export const appflow_6000_annually = (i) => `AppFlow 6.000 $ jährlich.`

/**
* @param {{  }} i
*/
export const our_one_time_setup_fee_of_2600_combined_with_ci_cd_results_in_less_than_half_the_first_year_fee_of_appflow = (i) => `Unsere einmalige Einrichtungskosten von 2.600 $, kombiniert mit CI/CD, führen zu weniger als der Hälfte der Gebühren für das erste Jahr von AppFlow.`

/**
* @param {{  }} i
*/
export const in_5_years_you_save_26100 = (i) => `In 5 Jahren sparen Sie 26.100 $.`

/**
* @param {{  }} i
*/
export const setup_ci_cd_now = (i) => `CI/CD jetzt einrichten →`

/**
* @param {{  }} i
*/
export const push_updates_like_your_commits = (i) => `Updates veröffentlichen wie deine Commits`

/**
* @param {{  }} i
*/
export const its_compatible_with_azure_devops_gitlab_github_jenkins_cloudbees_travis_azure_devops_gitlab_github_circleci_and_many_more = (i) => `Es ist kompatibel mit Azure DevOps, GitLab, GitHub, Jenkins, Cloudbees, Travis, Azure DevOps, GitLab, GitHub, CircleCI und vielen mehr.`

/**
* @param {{  }} i
*/
export const launch_multiple_releases_per_week = (i) => `Mit 1 $ können Sie mehrere Veröffentlichungen pro Woche starten, mit einer beeindruckenden Effizienzsteigerung von 81 %. Lassen Sie sich diesen Wettbewerbsvorteil nicht entgehen.`

/**
* @param {{  }} i
*/
export const easily_combine_features_ci_cd = (i) => `Kombinieren Sie ganz einfach $1 Funktionen in Ihre aktuelle CI/CD-Plattform mit unserem benutzerfreundlichen CLI.`

/**
* @param {{  }} i
*/
export const about_capgo = (i) => `Über Capgo`

/**
* @param {{  }} i
*/
export const your_live_update_solution_for_capacitor_apps = (i) => `Ihre Live-Update-Lösung für Capacitor-Apps`

/**
* @param {{  }} i
*/
export const welcome_to_capgo = (i) => `Willkommen bei Capgo`

/**
* @param {{  }} i
*/
export const capgo_is_the_cutting_edge_live_update_system_designed_specifically_for_capacitor_applications = (i) => `Capgo ist das fortschrittliche Live-Updatesystem, das speziell für Capacitor-Anwendungen entwickelt wurde.`

/**
* @param {{  }} i
*/
export const we_empower_developers_to_push_updates_instantly_ensuring_your_users_always_have_the_latest_version_of_your_app_without_the_hassle_of_app_store_approvals = (i) => `Wir ermöglichen Entwicklern, Updates sofort bereitzustellen, damit Ihre Benutzer immer die neueste Version Ihrer App haben, ohne die Mühe von App-Store-Genehmigungen.`

/**
* @param {{  }} i
*/
export const our_story = (i) => `Unsere Geschichte`

/**
* @param {{  }} i
*/
export const capgo_was_born_from_a_real_need_in_the_developer_community = (i) => `Capgo entstand aus einem realen Bedarf in der Entwicklergemeinschaft.`

/**
* @param {{  }} i
*/
export const it_all_started_with_a_github_issue_where_many_developers_voiced_their_frustration_with_the_high_costs_of_existing_solutions_like_appflow = (i) => `Es begann alles mit einem GitHub-Problem, bei dem viele Entwickler ihren Frust über die hohen Kosten bestehender Lösungen wie Appflow äußerten.`

/**
* @param {{  }} i
*/
export const this_inspired_me_to_create_an_affordable_efficient_alternative = (i) => `Das hat mich inspiriert, eine erschwingliche, effiziente Alternative zu schaffen.`

/**
* @param {{  }} i
*/
export const read_the_full_story_of_capgos_challenging_birth_as_a_solo_maker_project = (i) => `Lesen Sie die gesamte Geschichte von Capgos herausfordernder Geburt als Einzelmacherprojekt.`

/**
* @param {{  }} i
*/
export const key_features = (i) => `Hauptmerkmale`

/**
* @param {{  }} i
*/
export const deploy_changes_in_real_time = (i) => `Änderungen in Echtzeit bereitstellen`

/**
* @param {{  }} i
*/
export const version_control = (i) => `Versionskontrolle`

/**
* @param {{  }} i
*/
export const manage_multiple_app_versions_effortlessly = (i) => `Verwalten Sie mehrere App-Versionen mühelos`

/**
* @param {{  }} i
*/
export const rollback_capability = (i) => `Rückgängig-Funktionalität`

/**
* @param {{  }} i
*/
export const revert_to_previous_versions_if_needed = (i) => `Bei Bedarf auf frühere Versionen zurücksetzen`

/**
* @param {{  }} i
*/
export const analytics = (i) => `Analytik`

/**
* @param {{  }} i
*/
export const track_update_performance_and_user_adoption = (i) => `Verfolgen Sie die Aktualisierungsleistung und die Benutzerakzeptanz.`

/**
* @param {{  }} i
*/
export const organization_and_app_management = (i) => `Organisation und App-Management`

/**
* @param {{  }} i
*/
export const thanks_to_our_open_source_nature = (i) => `Dank unserer Open-Source-Natur`

/**
* @param {{  }} i
*/
export const our_commitment = (i) => `Unser Engagement`

/**
* @param {{  }} i
*/
export const as_the_largest_ecosystem_of_open_source_plugins_for_capacitor_we_re_committed_to_innovation_transparency_and_community_driven_development = (i) => `Als das größte Ökosystem von Open-Source-Plugins für Capacitor setzen wir uns für Innovation, Transparenz und gemeinschaftlich getriebenen Entwicklungen ein.`

/**
* @param {{  }} i
*/
export const practicing_what_we_preach = (i) => `Praxis, was wir predigen`

/**
* @param {{  }} i
*/
export const we_practice_what_we_preach = (i) => `Wir leben, was wir predigen.`

/**
* @param {{  }} i
*/
export const capgo_is_used_to_update_its_own_apps_allowing_us_to_continuously_improve_and_refine_our_product_through_real_world_usage = (i) => `Capgo wird verwendet, um die eigenen Apps zu aktualisieren, wodurch wir unser Produkt kontinuierlich verbessern und verfeinern können, basierend auf der Nutzung in der Praxis.`

/**
* @param {{  }} i
*/
export const our_dedication = (i) => `Unsere Hingabe`

/**
* @param {{  }} i
*/
export const since_2023_capgo_has_been_my_full_time_focus_ensuring_dedicated_development_and_support_for_our_growing_community_of_users = (i) => `Seit 2023 ist Capgo mein Vollzeitfokus, um eine engagierte Entwicklung und Unterstützung für unsere wachsende Gemeinschaft von Nutzern zu gewährleisten.`

/**
* @param {{  }} i
*/
export const hi_there_im_martin_donadieu = (i) => `Hallo! Ich bin Martin Donadieu.`

/**
* @param {{  }} i
*/
export const run_your_projects_on_your_own_device_faster_than_ever_and_share_those_projects_across_your_whole_team = (i) => `Führen Sie Ihre Projekte schneller als je zuvor auf Ihrem eigenen Gerät aus und teilen Sie diese Projekte im gesamten Team.`

/**
* @param {{  }} i
*/
export const test_version_in_the_sandbox_app_manage_version_and_channel = (i) => `Testversion in der Sandbox-App, Version und Kanal verwalten`

/**
* @param {{  }} i
*/
export const speed = (i) => `Geschwindigkeit`

/**
* @param {{  }} i
*/
export const simplicity = (i) => `Einfachheit`

/**
* @param {{  }} i
*/
export const start_building_rich_experiences_with_your_device_and_your_computer = (i) => `Beginnen Sie, reichhaltige Erlebnisse mit Ihrem Gerät und Ihrem Computer zu schaffen.`

/**
* @param {{  }} i
*/
export const confirm_email = (i) => `E-Mail bestätigen`

/**
* @param {{  }} i
*/
export const please_open_your_mailbox_to_verify = (i) => `Bitte öffnen Sie Ihr Postfach zur Überprüfung.`

/**
* @param {{  }} i
*/
export const didnt_receive_confirmation_email = (i) => `Keine Bestätigungs-E-Mail erhalten?`

/**
* @param {{  }} i
*/
export const resend = (i) => `Erneut senden`

/**
* @param {{  }} i
*/
export const resending = (i) => `Wiederversand`

/**
* @param {{  }} i
*/
export const open_mailbox = (i) => `Postfach öffnen`

/**
* @param {{  }} i
*/
export const thank_you_for_choosing_capgo = (i) => `Danke, dass Sie sich für Capgo entschieden haben!`

/**
* @param {{  }} i
*/
export const code_review = (i) => `Code-Überprüfung`

/**
* @param {{  }} i
*/
export const code_review_and_consulting = (i) => `Code-Überprüfung und Beratung`

/**
* @param {{  }} i
*/
export const consult_your_capacitor_apps_and_review_the_code_with_us_to_deliver_bug_free_apps = (i) => `Konsultieren Sie Ihre Capacitor-Apps und überprüfen Sie den Code mit uns, um fehlerfreie Apps zu liefern.`

/**
* @param {{  }} i
*/
export const book_a_consultation = (i) => `Beratung buchen`

/**
* @param {{  }} i
*/
export const testimonial_consulting = (i) => `Capgo hat nicht nur unglaublich talentierte Ingenieure, sondern sie teilen auch meine Leidenschaft für den Projekterfolg. Einen <strong class='italic font-bold'>wahren Partner</strong> zu haben, war eine wunderbare Erfahrung, und es ermöglicht uns, viel schneller voranzukommen, als wir es alleine könnten.`

/**
* @param {{  }} i
*/
export const testimonial_consulting_2 = (i) => `Ich hätte <strong class='italic font-bold'>keine Bedenken, Capgo</strong> anderen zu empfehlen, um eine flexible Lösung für eine bestehende Belegschaft oder langfristig als Teil eines Remote-Teams zu bieten.`

/**
* @param {{  }} i
*/
export const when_its_good_to_ask_for_cordova_and_capacitorjs_consulting_services = (i) => `Wann es gut ist, um Cordova- und CapacitorJS-Consulting-Dienste zu bitten`

/**
* @param {{  }} i
*/
export const review_before_passing_the_code_to_the_production = (i) => `Überprüfung, bevor der Code in die Produktion übergeben wird.`

/**
* @param {{  }} i
*/
export const find_and_fix_bugs_during_the_coding_process = (i) => `Fehler während des Codierungsprozesses finden und beheben.`

/**
* @param {{  }} i
*/
export const it_s_faster_cheaper_and_requires_fewer_developers_to_do_it = (i) => `Es ist schneller, günstiger und erfordert weniger Entwickler, um es zu tun.`

/**
* @param {{  }} i
*/
export const optimization_of_the_existing_app = (i) => `Optimierung der bestehenden App`

/**
* @param {{  }} i
*/
export const little_experience_with_capacitorjs = (i) => `Wenig Erfahrung mit CapacitorJS`

/**
* @param {{  }} i
*/
export const when_developing_a_capacitorjs_app_as_a_beginner_it_s_good_to_have_an_experienced_consultant_by_your_side = (i) => `Beim Entwickeln einer CapacitorJS-App als Anfänger ist es gut, einen erfahrenen Berater an Ihrer Seite zu haben.`

/**
* @param {{  }} i
*/
export const let_them_review_your_work_and_give_your_team_an_opportunity_to_learn_from_the_experts = (i) => `Lass sie deine Arbeit überprüfen und gib deinem Team die Möglichkeit, von den Experten zu lernen.`

/**
* @param {{  }} i
*/
export const poor_app_quality = (i) => `Schlechte App-Qualität`

/**
* @param {{  }} i
*/
export const somebody_developed_an_app_for_you_but_it_doesn_t_meet_your_expectations_and_the_quality_of_the_final_product_is_really_low = (i) => `Jemand hat eine App für dich entwickelt, aber sie entspricht nicht deinen Erwartungen und die Qualität des Endprodukts ist wirklich schlecht.`

/**
* @param {{  }} i
*/
export const something_doesn_t_work_but_you_don_t_know_why = (i) => `Etwas funktioniert nicht, aber du weißt nicht warum.`

/**
* @param {{  }} i
*/
export const a_specific_element_of_your_app_doesn_t_work_and_you_don_t_know_where_the_problem_is_and_how_to_fix_it = (i) => `Ein bestimmtes Element Ihrer App funktioniert nicht und Sie wissen nicht, wo das Problem liegt und wie Sie es beheben können.`

/**
* @param {{  }} i
*/
export const plugin_is_missing = (i) => `Plugin fehlt`

/**
* @param {{  }} i
*/
export const you_need_a_to_access_to_specific_native_api_and_the_right_plugin_don_t_exist_we_can_develop_it_for_you_or_support_you_with_it = (i) => `Sie benötigen Zugriff auf eine bestimmte native API, und das richtige Plugin existiert nicht. Wir können es für Sie entwickeln oder Sie dabei unterstützen.`

/**
* @param {{  }} i
*/
export const ci_cd_setup = (i) => `CI/CD Einrichtung`

/**
* @param {{  }} i
*/
export const our_team_helps_you_with_configuring_and_managing_automated_builds_tests_and_app_deployments_to_app_stores_through_fastlane_and_voltbuilder_in_your_cicd_environment = (i) => `Unser Team hilft Ihnen bei der Konfiguration und Verwaltung automatisierter Builds, Tests und App-Deployments in App-Stores über Fastlane und VoltBuilder in Ihrer CI/CD-Umgebung.`

/**
* @param {{  }} i
*/
export const why_is_it_important = (i) => `Warum ist es wichtig?`

/**
* @param {{  }} i
*/
export const code_consulting_and_review_is_more_than_just_a_bug_check_it_helps_to = (i) => `Code-Beratung und -Überprüfung ist mehr als nur eine Fehlerüberprüfung. Es hilft:`

/**
* @param {{  }} i
*/
export const minimize_mistakes_and_their_impact_on_the_project = (i) => `Fehler minimieren und deren Auswirkungen auf das Projekt verringern`

/**
* @param {{  }} i
*/
export const ensure_that_the_project_requirements_are_fulfilled = (i) => `Stellen Sie sicher, dass die Projektanforderungen erfüllt sind.`

/**
* @param {{  }} i
*/
export const improve_overall_code_quality = (i) => `Die allgemeine Codequalität verbessern`

/**
* @param {{  }} i
*/
export const achieve_consistent_design_and_implementation = (i) => `Erzielen Sie ein konsistentes Design und eine konsistente Implementierung.`

/**
* @param {{  }} i
*/
export const technological_benefits = (i) => `Technologische Vorteile`

/**
* @param {{  }} i
*/
export const better_code_quality = (i) => `Bessere Codequalität`

/**
* @param {{  }} i
*/
export const let_more_experienced_people_review_your_work_and_give_your_team_an_opportunity_to_learn_from_the_experts = (i) => `Lass erfahrenere Personen deine Arbeit überprüfen und gib deinem Team die Möglichkeit, von den Experten zu lernen.`

/**
* @param {{  }} i
*/
export const improved_code_readability = (i) => `Verbesserte Code-Lesbarkeit`

/**
* @param {{  }} i
*/
export const it_s_possible_that_different_developers_will_read_your_code_in_the_future_reduce_unnecessary_pieces_of_it_to_make_it_shorter_and_more_expressive = (i) => `Es ist möglich, dass in Zukunft verschiedene Entwickler Ihren Code lesen werden. Reduzieren Sie unnötige Teile, um ihn kürzer und ausdrucksvoller zu gestalten.`

/**
* @param {{  }} i
*/
export const bugs_reduction = (i) => `Fehlerreduzierung`

/**
* @param {{  }} i
*/
export const eliminate_the_number_of_bugs_before_passing_the_code_to_production = (i) => `Beheben Sie die Anzahl der Fehler, bevor Sie den Code in die Produktion übergeben.`

/**
* @param {{  }} i
*/
export const hire_capacitorjs_consultants = (i) => `CapacitorJS-Berater einstellen`

/**
* @param {{  }} i
*/
export const business_benefits = (i) => `Geschäftliche Vorteile`

/**
* @param {{  }} i
*/
export const lower_cost_of_fixing_bugs = (i) => `Geringere Kosten zur Behebung von Fehlern`

/**
* @param {{  }} i
*/
export const the_faster_you_find_the_bug_the_cheaper_you_can_fix_it_if_the_bug_is_spotted_during_the_development_process_it_s_easier_and_cheaper_to_remove_it = (i) => `Je schneller du den Fehler findest, desto günstiger kannst du ihn beheben. Wenn der Fehler während des Entwicklungsprozesses erkannt wird, ist es einfacher und kostengünstiger, ihn zu beheben.`

/**
* @param {{  }} i
*/
export const opportunity_for_juniors_to_develop_skills = (i) => `Möglichkeit für Berufsanfänger, Fähigkeiten zu entwickeln`

/**
* @param {{  }} i
*/
export const help_your_junior_developers_extend_their_knowledge_by_giving_them_the_opportunity_to_cooperate_with_more_experienced_developers = (i) => `Helfen Sie Ihren Junior-Entwicklern, ihr Wissen zu erweitern, indem Sie ihnen die Möglichkeit geben, mit erfahrenen Entwicklern zusammenzuarbeiten.`

/**
* @param {{  }} i
*/
export const community_trusted = (i) => `Gemeinschaftsvertrauenswürdig`

/**
* @param {{  }} i
*/
export const cordova_and_capacitorjs_expert = (i) => `Cordova- und CapacitorJS-Experte`

/**
* @param {{  }} i
*/
export const experienced_in_working_on_demanding = (i) => `Erfahren in der Arbeit an anspruchsvollen`

/**
* @param {{  }} i
*/
export const cordova_capacitorjs_projects = (i) => `Cordova & CapacitorJS Projekte`

/**
* @param {{  }} i
*/
export const creators_and_maintainers_of_many_open_source_libraries_used_by_millions = (i) => `Ersteller und Maintainer vieler Open-Source-Bibliotheken, die von Millionen verwendet werden`

/**
* @param {{  }} i
*/
export const core_contributors_to_capacitorjs_and_ionic = (i) => `Kernbeitragende zu CapacitorJS und Ionic`

/**
* @param {{  }} i
*/
export const need_help_with_cordova_or_capacitorjs_let_us_know = (i) => `Brauchen Sie Hilfe mit Cordova oder CapacitorJS? Lassen Sie es uns wissen!`

/**
* @param {{  }} i
*/
export const im_a_french_software_engineer = (i) => `Ich bin ein französischer Softwareingenieur.`

/**
* @param {{  }} i
*/
export const living_best_life = (i) => `mein bestes Leben auf der schönen Insel Madeira, Portugal leben`

/**
* @param {{  }} i
*/
export const made_capgo_with_passion = (i) => `Ich habe Capgo mit Leidenschaft erstellt, um Entwickler wie dich zu unterstützen.`

/**
* @param {{  }} i
*/
export const i_m_a_huge_believer_in_open_source = (i) => `Ich glaube fest an Open Source.`

/**
* @param {{  }} i
*/
export const capgo_proudly_stands_as_the_largest_ecosystem_of_open_source_plugins_for_capacitor = (i) => `Capgo steht stolz als das größte Ökosystem von Open-Source-Plugins für Capacitor.`

/**
* @param {{  }} i
*/
export const we_re_committed_to_fostering_a_community_where_developers_can_learn_contribute_and_grow_together = (i) => `Wir engagieren uns, eine Gemeinschaft zu fördern, in der Entwickler zusammen lernen, beitragen und wachsen können.`

/**
* @param {{  }} i
*/
export const each_time_you_contact_capgo_you_re_reaching_out_to_me_directly = (i) => `Jedes Mal, wenn Sie Capgo kontaktieren, erreichen Sie mich direkt.`

/**
* @param {{  }} i
*/
export const i_personally_handle_all_support_through_email_chat_or_discord_because_i_believe_in_real_connections = (i) => `Ich persönlich bearbeite alle Anfragen über E-Mail, Chat oder Discord, da ich an echte Verbindungen glaube.`

/**
* @param {{  }} i
*/
export const your_challenges_are_my_challenges = (i) => `Deine Herausforderungen sind meine Herausforderungen.`

/**
* @param {{  }} i
*/
export const my_commitment_to_transparency_extends_to_everything_i_do = (i) => `Mein Engagement für Transparenz erstreckt sich auf alles, was ich tue.`

/**
* @param {{  }} i
*/
export const when_im_not_working_on_capgo_you_ll_find_me_scaling_climbing_walls_dancing_to_zouk_rhythms_or_exploring_madeiras_stunning_nature = (i) => `Quando não estou a trabalhar na Capgo, encontrarás-me a escalar paredes de escalada 🧗‍♂️, a dançar ao ritmo do zouk 💃, ou a explorar a deslumbrante natureza da Madeira 🌿.`

/**
* @param {{  }} i
*/
export const lets_make_app_development_amazing_together = (i) => `Lass uns gemeinsam die App-Entwicklung großartig machen!`

/**
* @param {{  }} i
*/
export const martin_donadieu_on_a_motorcycle_with_a_rainbow_in_the_background = (i) => `Martin Donadieu auf einem Motorrad mit einem Regenbogen im Hintergrund`

/**
* @param {{  }} i
*/
export const get_quote_now = (i) => `Jetzt Angebot einholen`

/**
* @param {{  }} i
*/
export const you_can_see_my_entire_process_unfold_on_twitter = (i) => `Sie können meinen gesamten Prozess auf Twitter verfolgen.`

/**
* @param {{  }} i
*/
export const and_hear_more_about_my_journey_on_the = (i) => `und erfahren Sie mehr über meine Reise auf dem`

/**
* @param {{  }} i
*/
export const read_more = (i) => `Mehr lesen`
export { _1_app } from "./en.js"

/**
* @param {{  }} i
*/
export const services = (i) => `Dienstleistungen`

/**
* @param {{  }} i
*/
export const case_1 = (i) => `Fall 1`

/**
* @param {{  }} i
*/
export const case_2 = (i) => `Fall 2`

/**
* @param {{  }} i
*/
export const case_3 = (i) => `Fall 3`

/**
* @param {{  }} i
*/
export const case_4 = (i) => `Fall 4`

/**
* @param {{  }} i
*/
export const case_5 = (i) => `Fall 5`

/**
* @param {{  }} i
*/
export const case_6 = (i) => `Fall 6`

/**
* @param {{  }} i
*/
export const case_7 = (i) => `Fall 7`

/**
* @param {{  }} i
*/
export const email_is_required = (i) => `E-Mail ist erforderlich`

/**
* @param {{  }} i
*/
export const when_down_review = (i) => `Wenn eine Anwendung zu langsam funktioniert oder ausfällt (auch nur für ein paar Minuten), kann das die Zufriedenheit der Benutzer beeinträchtigen und den Umsatz verringern. Um solche Situationen zu vermeiden, überprüfen Sie den Code, um Verbesserungsmöglichkeiten zu finden.`

/**
* @param {{  }} i
*/
export const why_work = (i) => `Warum arbeiten`

/**
* @param {{  }} i
*/
export const with_us = (i) => `mit uns?`

/**
* @param {{  }} i
*/
export const consulting_forged_plugins_community_embraced = (i) => `Beratungsgefertigte Plugins, von der Gemeinschaft angenommen`

/**
* @param {{  }} i
*/
export const consulting_forged_plugins_community_embraced_description = (i) => `Unsere Capacitor-Plugins, geboren aus echten Herausforderungen von Kunden, stärken nun Entwickler auf der ganzen Welt.`

/**
* @param {{  }} i
*/
export const each_solution_represents_a_consulting_success_story_battle_tested_and_refined_for_the_community = (i) => `Jede Lösung repräsentiert eine erfolgreiche Beratungsgeschichte, die in der Praxis erprobt und für die Gemeinschaft verfeinert wurde.`

/**
* @param {{  }} i
*/
export const get_your_custom_plugin_built = (i) => `Lassen Sie Ihr individuelles Plugin erstellen`

/**
* @param {{  }} i
*/
export const contact = (i) => `Kontakt`

/**
* @param {{  }} i
*/
export const lets_work_together = (i) => `Lasst uns zusammenarbeiten!`

/**
* @param {{  }} i
*/
export const we_welcome_and_appreciate_all_contributions_to_capgo = (i) => `Wir begrüßen und schätzen alle Beiträge zu Capgo.`

/**
* @param {{  }} i
*/
export const this_page_serves_as_a_helper_to_get_you_started_on_contributing = (i) => `Diese Seite dient als Hilfe, um Ihnen den Einstieg in die Mitarbeit zu erleichtern.`

/**
* @param {{  }} i
*/
export const projects = (i) => `Projekte`

/**
* @param {{  }} i
*/
export const there_are_numerous_repositories_in_the_capgo_organization_that_are_part_of_the_capgo = (i) => `Es gibt zahlreiche Repositorys in der Capgo-Organisation, die Teil von Capgo sind.`

/**
* @param {{  }} i
*/
export const repositories_have_different_scopes_use_different_programming_languages_and_have_varying_level_when_it_comes_to_contributions = (i) => `Repositories haben unterschiedliche Bereiche, verwenden unterschiedliche Programmiersprachen und weisen unterschiedliche Niveaus in Bezug auf Beiträge auf.`

/**
* @param {{  }} i
*/
export const to_help_you_decide_which_repository_might_be_the_best_to_start_contributing_and_or_falls_into_your_interest_here_s_a_short_comparison_languages_in_bold_comprise_most_of_the_codebase = (i) => `Um Ihnen bei der Entscheidung zu helfen, welches Repository am besten geeignet ist, um Beiträge zu leisten (und/oder in Ihr Interesse fällt), hier ist ein kurzer Vergleich (<strong> die in Fettdruck dargestellten Sprachen machen den größten Teil des Codes aus </strong>):`

/**
* @param {{  }} i
*/
export const main_repository_that_provides_the_capacitor_updater_plugin = (i) => `Dies ist das Haupt-Repository, das das <code>capacitor-updater</code> Plugin bereitstellt.`

/**
* @param {{  }} i
*/
export const you_want_to_fix_a_bug_or_add_a_new_feature_to_capacitor_updater_this_is_the_repository_you_want_to_contribute_to = (i) => `Möchten Sie einen Fehler beheben oder eine neue Funktion zu <code>capacitor-updater</code> hinzufügen? Dies ist das Repository, zu dem Sie beitragen möchten.`

/**
* @param {{  }} i
*/
export const the_webapp_and_serverless_functions_that_make_up_the_capgo_cloud_platform = (i) => `Die Webanwendung und serverlosen Funktionen, die die Capgo-Cloud-Plattform ausmachen.`

/**
* @param {{  }} i
*/
export const thare_where_you_want_to_contribute_to_fix_the_backend_of_capgo = (i) => `Dort, wo Sie zur Behebung des Backends von Capgo beitragen möchten.`

/**
* @param {{  }} i
*/
export const frontend_for_official_deno_webpage = (i) => `Frontend für die offizielle Deno-Website`

/**
* @param {{  }} i
*/
export const documentation_in_markdown_that_powers = (i) => `Dokumentation in Markdown, die antreibt`

/**
* @param {{  }} i
*/
export const version_manager_that_power_ci_cd_to_update_apps = (i) => `Versionsverwalter, der CI/CD antreibt, um Apps zu aktualisieren.`

/**
* @param {{  }} i
*/
export const read_the_style_guide = (i) => `Lese den <a href="https://deno.land/manual@v1.25.4/contributing/style_guide">Stilführer.</a>`

/**
* @param {{  }} i
*/
export const ask_for_help_in_the_community_chat_room = (i) => `Fragen Sie in dem <a href="https://discord.com/invite/VnYRvBfgA6">Community-Chatraum nach Hilfe. </a>`

/**
* @param {{  }} i
*/
export const mention_issue_before_working = (i) => `Wenn du an einem Problem arbeitest, erwähne dies in den Kommentaren zum Problem <em>bevor</em> du mit der Arbeit an dem Problem beginnst.`

/**
* @param {{  }} i
*/
export const create_an_issue_and_discuss_before_working_on_a_new_feature = (i) => `Wenn Sie an einer neuen Funktion arbeiten, erstellen Sie ein Issue und diskutieren Sie mit anderen Mitwirkenden <em>bevor</em> Sie mit der Arbeit an der Funktion beginnen; wir schätzen alle Beiträge, aber nicht alle vorgeschlagenen Funktionen werden akzeptiert. Wir möchten nicht, dass Sie Stunden mit Code verbringen, der möglicherweise nicht akzeptiert wird.`

/**
* @param {{  }} i
*/
export const please_be_professional_in_the_forums = (i) => `Bitte seien Sie professionell in den Foren. Wir folgen <a href="https://www.rust-lang.org/policies/code-of-conduct"> Rusts Verhaltensregeln</a> (CoC). Haben Sie ein Problem? Schreiben Sie eine E-Mail an <a href="mailto:ry@tinyclouds.org"> ry@tinyclouds.org.</a>`

/**
* @param {{  }} i
*/
export const submitting_a_pull_request = (i) => `Einen Pull-Request einreichen`

/**
* @param {{  }} i
*/
export const before_submitting_a_pr = (i) => `Bevor Sie einen PR zu einem der Repos einreichen, stellen Sie bitte sicher, dass Folgendes erledigt ist:`

/**
* @param {{  }} i
*/
export const give_pr_a_descriptive_title = (i) => `Gib dem PR einen beschreibenden Titel.`

/**
* @param {{  }} i
*/
export const examples_of_good_pr_title = (i) => `Beispiele für einen guten PR-Titel:`

/**
* @param {{  }} i
*/
export const examples_of_bad_pr_title = (i) => `Beispiele für schlechte PR-Titel:`

/**
* @param {{  }} i
*/
export const submitting_a_pr_to_capgo = (i) => `Ein PR an <a href='https://github.com/Cap-go/capgo'><code>Capgo</code></a> einreichen`

/**
* @param {{  }} i
*/
export const additionally_make_sure_that = (i) => `Zusätzlich zu dem oben genannten stellen Sie sicher, dass:`

/**
* @param {{  }} i
*/
export const npm_run_lint_passes = (i) => `\`npm run lint\` besteht - dies überprüft Rust- und JavaScript-Code auf häufige Fehler und Probleme mit Hilfe von \`Swiftlint\` (für Swift) und \`eslint\` (für JavaScript und Java)`

/**
* @param {{  }} i
*/
export const documenting_apis = (i) => `Dokumentation von APIs`

/**
* @param {{  }} i
*/
export const importance_of_documenting_apis = (i) => `Es ist wichtig, alle öffentlichen APIs zu dokumentieren, und wir möchten dies inline mit dem Code tun. Dies hilft sicherzustellen, dass Code und Dokumentation eng miteinander verbunden sind.`

/**
* @param {{  }} i
*/
export const javascript_and_typescript = (i) => `JavaScript und TypeScript`

/**
* @param {{  }} i
*/
export const jsdoc_documentation = (i) => `Alle öffentlich zugänglichen APIs und Typen im Modul <code>capacitor-updater</code> sollten JSDoc-Dokumentation haben. Diese Dokumentation wird vom TypeScript-Compiler analysiert und ist daher leicht weiterzugeben. JSDoc-Blöcke stehen unmittelbar vor der Anweisung, auf die sie sich beziehen, und werden durch einen führenden <code>/**</code> gekennzeichnet, gefolgt von einem abschließenden <code>*/</code>. Zum Beispiel:`

/**
* @param {{  }} i
*/
export const jsdoc_example = (i) => `export const FOO = 'foo';`

/**
* @param {{  }} i
*/
export const find_more_at = (i) => `Mehr finden unter: <a href='https://jsdoc.app/'> https://jsdoc.app/ </a>`

/**
* @param {{  }} i
*/
export const get_in_touch = (i) => `In Kontakt treten`

/**
* @param {{  }} i
*/
export const company_name = (i) => `Unternehmensname`

/**
* @param {{  }} i
*/
export const register_code = (i) => `Registrierungscode`

/**
* @param {{  }} i
*/
export const address = (i) => `Adresse`

/**
* @param {{  }} i
*/
export const hosting = (i) => `Hosting`

/**
* @param {{  }} i
*/
export const data_storage = (i) => `Datenlagerung`

/**
* @param {{  }} i
*/
export const data_processing = (i) => `Datenverarbeitung`

/**
* @param {{  }} i
*/
export const powerful_app_plugins = (i) => `Leistungsstarke App-Plugins`

/**
* @param {{  }} i
*/
export const powerful_app_plugins_description = (i) => `Unternehmensgerechte Plugins mit hervorragender Dokumentation, fortlaufenden Updates, Codeschnipseln und Premium-Support, damit Sie sich auf die Entwicklung Ihrer App konzentrieren können.`

/**
* @param {{  }} i
*/
export const plans_that_scale_with_your_business = (i) => `Pläne, die mit Ihrem Geschäft wachsen`

/**
* @param {{  }} i
*/
export const plans_that_scale_with_your_business_description = (i) => `Unternehmensgerechte Cloud, die die Funktionalität und Sicherheit von Capacitor-Anwendungen verbessert.`

/**
* @param {{  }} i
*/
export const monthly_plan = (i) => `Monatsplan`

/**
* @param {{  }} i
*/
export const yearly_plan = (i) => `Jahresplan`

/**
* @param {{  }} i
*/
export const save = (i) => `Speichern`

/**
* @param {{  }} i
*/
export const we_don_t_bill_you_automatically_until_your_confirmation = (i) => `Wir stellen Ihnen erst nach Ihrer Bestätigung automatisch eine Rechnung aus.`

/**
* @param {{  }} i
*/
export const we_don_t_store_or_sell_your_data_to_anyone = (i) => `Wir speichern oder verkaufen Ihre Daten an niemanden.`

/**
* @param {{  }} i
*/
export const top_100_app_using_different_framworks_on_android_store = (i) => `Liste der 100 besten Apps, die verschiedene Frameworks im Android-Store verwenden`

/**
* @param {{  }} i
*/
export const top_apps_by_framework = (i) => `Top-Apps nach Framework`

/**
* @param {{  }} i
*/
export const top_100_app_using_capacitor_on_android_play_store = (i) => `Liste der 100 besten Apps, die Capacitor im Android Play Store verwenden.`

/**
* @param {{  }} i
*/
export const top_capacitor_apps = (i) => `Top-Kondensator-Apps`

/**
* @param {{  }} i
*/
export const capacitor_power_aproximately_1_of_apps_on_google_play_store = (i) => `Der Kondensator hat einen ungefähren Anteil von $1% der Apps im Google Play Store.`

/**
* @param {{  }} i
*/
export const downloads = (i) => `Downloads`

/**
* @param {{  }} i
*/
export const see_in_play_store = (i) => `Im Play Store ansehen`

/**
* @param {{  }} i
*/
export const top_app_using_capgo_cloud_or_self_hosted = (i) => `Liste der besten Apps, die Capgo Cloud oder Self-Hosting verwenden`

/**
* @param {{  }} i
*/
export const top_cordova_apps = (i) => `Liste der 100 besten Apps, die Cordova im Android Store verwenden`

/**
* @param {{  }} i
*/
export const top_cordova_apps_title = (i) => `Top Cordova-Apps`

/**
* @param {{  }} i
*/
export const top_capgo_apps_title = (i) => `Top Capgo-Apps`

/**
* @param {{  }} i
*/
export const top_capgo_apps = (i) => `Liste der besten Apps, die Capgo verwenden`

/**
* @param {{  }} i
*/
export const cordova_power_aproximately_1_of_apps_on_google_play_store = (i) => `Cordova steuert ungefähr 1% der Apps im Google Play Store bei.`

/**
* @param {{  }} i
*/
export const top_flutter_apps = (i) => `Liste der 100 besten Apps, die Flutter im Android Store verwenden`

/**
* @param {{  }} i
*/
export const top_kotlin_apps = (i) => `Liste der Top 100 Apps, die Kotlin im Android Store verwenden`

/**
* @param {{  }} i
*/
export const top_native_script_apps = (i) => `Liste der 100 besten Apps, die Native Script im Android Store verwenden`

/**
* @param {{  }} i
*/
export const top_react_native_apps = (i) => `Liste der Top 100 Apps, die React Native im Android Store verwenden`

/**
* @param {{  }} i
*/
export const top_flutter_apps_title = (i) => `Top Flutter-Apps`

/**
* @param {{  }} i
*/
export const flutter_power_aproximately_1_of_apps_on_google_play_store = (i) => `Flutter macht etwa 1% der Apps im Google Play Store aus.`

/**
* @param {{  }} i
*/
export const top_kotlin_apps_title = (i) => `Top Kotlin-Apps`

/**
* @param {{  }} i
*/
export const kotlin_power_aproximately_1_of_apps_on_google_play_store = (i) => `Kotlin hat einen Anteil von ungefähr 1% der Apps im Google Play Store.`

/**
* @param {{  }} i
*/
export const top_native_script_apps_title = (i) => `Top Native Script Apps`

/**
* @param {{  }} i
*/
export const native_script_power_aproximately_1_of_apps_on_google_play_store = (i) => `Native Script macht ungefähr 1 % der Apps im Google Play Store aus.`

/**
* @param {{  }} i
*/
export const top_react_native_apps_title = (i) => `Top React Native Apps`

/**
* @param {{  }} i
*/
export const react_native_power_aproximately_1_of_apps_on_google_play_store = (i) => `React Native macht ungefähr $1% der Apps im Google Play Store aus.`

/**
* @param {{  }} i
*/
export const table_of_contents = (i) => `Inhaltsverzeichnis`

/**
* @param {{  }} i
*/
export const latest_from_news = (i) => `Neueste Nachrichten`

/**
* @param {{  }} i
*/
export const capgo_gives_you_the_best_insights_you_need_to_create_a_truly_professional_mobile_app = (i) => `Capgo bietet Ihnen die besten Einblicke, die Sie benötigen, um eine wirklich professionelle mobile App zu erstellen.`

/**
* @param {{  }} i
*/
export const see_all_from_our_blog = (i) => `Alle Beiträge aus unserem Blog ansehen`

/**
* @param {{  }} i
*/
export const latest_from_the_blog = (i) => `Neuigkeiten vom Blog`

/**
* @param {{  }} i
*/
export const calculate_your_usage = (i) => `Berechnen Sie Ihren Verbrauch`

/**
* @param {{  }} i
*/
export const monthly_active_users = (i) => `Monatlich aktive Benutzer`

/**
* @param {{  }} i
*/
export const enter_your_estimated_monthly_active_users = (i) => `Geben Sie Ihre geschätzten monatlichen aktiven Benutzer, Updates pro Monat und die Update-Größe ein, um Ihre geschätzten monatlichen Kosten zu ermitteln.`

/**
* @param {{  }} i
*/
export const updates_by_month = (i) => `Aktualisierungen<br />nach Monat`

/**
* @param {{  }} i
*/
export const updates_size = (i) => `Aktualisierungen Größe<br />(MB)`

/**
* @param {{  }} i
*/
export const updates_total = (i) => `Aktualisierungen<br />(Insgesamt)`

/**
* @param {{  }} i
*/
export const bandwidth_gb = (i) => `Bandbreite<br />(GB)`

/**
* @param {{  }} i
*/
export const storage = (i) => `Speicher<br />(GB)`

/**
* @param {{  }} i
*/
export const yearly = (i) => `Jährlich`

/**
* @param {{  }} i
*/
export const monthly = (i) => `Monatlich`

/**
* @param {{  }} i
*/
export const we_suggest_you_to_choose_the = (i) => `Wir empfehlen Ihnen, die auszuwählen`

/**
* @param {{  }} i
*/
export const plan = (i) => `Plan`

/**
* @param {{  }} i
*/
export const questions_and_answers = (i) => `Fragen & Antworten`

/**
* @param {{  }} i
*/
export const explore_common_questions = (i) => `Entdecken Sie die häufigsten Fragen und Antworten zu Capgo.`

/**
* @param {{  }} i
*/
export const how_are_mau_counted = (i) => `Wie werden die monatlich aktiven Nutzer (MAU) gezählt?`

/**
* @param {{  }} i
*/
export const mau_counting_explanation = (i) => `Wir zählen MAU (Monatlich aktive Nutzer), indem wir einzigartige Nutzer verfolgen, die Ihre App innerhalb eines 30-Tage-Zeitraums öffnen. Jeder Nutzer wird einmal gezählt, unabhängig davon, wie oft er mit der App interagiert.`

/**
* @param {{  }} i
*/
export const capgo_usage_explanation = (i) => `Bei Capgo zählen wir Emulatoren und Entwicklungsbuilds nicht zu Ihrer Nutzung. Erfahren Sie mehr darüber`

/**
* @param {{  }} i
*/
export const here = (i) => `hier.`

/**
* @param {{  }} i
*/
export const what_does_storage_mean = (i) => `Was bedeutet Speicherung?`

/**
* @param {{  }} i
*/
export const storage_explanation = (i) => `Speicher, insbesondere Edge-Speicher, bezieht sich auf die gesamte Kapazität, die Capgo an Edge-Standorten zur Verfügung stellt, um alle Ihre Update-Pakete zu speichern. Dies stellt sicher, dass die Benutzer schnell und effizient die neueste Version Ihrer App oder Dienstleistung erhalten.`

/**
* @param {{  }} i
*/
export const how_is_bandwidth_counted = (i) => `Wie wird Bandbreite gezählt?`

/**
* @param {{  }} i
*/
export const bandwidth_explanation = (i) => `Bei Capgo messen wir die Bandbreite, indem wir die Menge der zwischen dem Speicherort und den Benutzergeräten über Edge-Server übertragenen Daten verfolgen. Dies hilft uns, Echtzeitaktualisierungen bereitzustellen.`

/**
* @param {{  }} i
*/
export const unsure_about_active_users = (i) => `Nicht sicher über die Anzahl Ihrer aktiven Nutzer?`

/**
* @param {{  }} i
*/
export const free_trial_explanation = (i) => `Wenn Sie sich über die Anzahl der aktiven Nutzer, die Sie haben, unsicher sind und sich Sorgen machen, Ihr Planlimit zu erreichen, nutzen Sie die kostenlose Testversion von Capgo. Es ist eine großartige Möglichkeit, unseren Service zu testen, den richtigen Plan zu finden, unerwartete Gebühren zu vermeiden und sicherzustellen, dass alles reibungslos funktioniert.`

/**
* @param {{  }} i
*/
export const didnt_find_answer = (i) => `Haben Sie die Antwort, nach der Sie gesucht haben, nicht gefunden?`

/**
* @param {{  }} i
*/
export const contact_support = (i) => `Kontaktieren Sie unseren Support`

/**
* @param {{  }} i
*/
export const pay_as_you_go = (i) => `Zahlungsnach Maßnahme`

/**
* @param {{  }} i
*/
export const pay_as_you_go_description = (i) => `Live-Updates/mo. Keine Verpflichtungen.`

/**
* @param {{  }} i
*/
export const users_included = (i) => `Benutzer eingeschlossen`

/**
* @param {{  }} i
*/
export const then = (i) => `dann`

/**
* @param {{  }} i
*/
export const bandwidth = (i) => `Bandbreite`

/**
* @param {{  }} i
*/
export const TB_included = (i) => `TB enthalten`

/**
* @param {{  }} i
*/
export const per_GB = (i) => `pro GB`

/**
* @param {{  }} i
*/
export const cloud_storage = (i) => `Cloud-Speicher`

/**
* @param {{  }} i
*/
export const GB_included = (i) => `GB eingeschlossen`

/**
* @param {{  }} i
*/
export const API_access = (i) => `API-Zugriff`

/**
* @param {{  }} i
*/
export const create_anything_you_want = (i) => `Erstelle alles, was du willst.`

/**
* @param {{  }} i
*/
export const dedicated_support = (i) => `Engagierte Unterstützung`

/**
* @param {{  }} i
*/
export const get_an_answer_in_less_than_6h = (i) => `Bekommen Sie in weniger als 6 Stunden eine Antwort`

/**
* @param {{  }} i
*/
export const custom_domain = (i) => `Benutzerdefinierte Domain`

/**
* @param {{  }} i
*/
export const add_your_own_domain = (i) => `Fügen Sie Ihre eigene Domain hinzu`

/**
* @param {{  }} i
*/
export const all_our_features_are_available_to_all_users = (i) => `Alle unsere Funktionen stehen allen Nutzern zur Verfügung.`

/**
* @param {{  }} i
*/
export const month = (i) => `Monat`

/**
* @param {{  }} i
*/
export const user = (i) => `Benutzer`

/**
* @param {{  }} i
*/
export const get_started_for_free = (i) => `Starte kostenlos`

/**
* @param {{  }} i
*/
export const most_popular = (i) => `Beliebteste`

/**
* @param {{  }} i
*/
export const days_free_trial = (i) => `14 Tage kostenloses Probeabo`

/**
* @param {{  }} i
*/
export const billed_annually_at = (i) => `Jährlich in Rechnung gestellt bei`

/**
* @param {{  }} i
*/
export const you_get = (i) => `Du bekommst`

/**
* @param {{  }} i
*/
export const live_updates_per_month = (i) => `Live-Aktualisierungen/Monat`

/**
* @param {{  }} i
*/
export const of_bandwidth = (i) => `von Bandbreite`

/**
* @param {{  }} i
*/
export const of_storage = (i) => `von Speicher`

/**
* @param {{  }} i
*/
export const priority_support_for_all_capgo_plugins = (i) => `Prioritätsunterstützung für alle Capgo-Plugins <span class='font-bold'>(30+ Plugins)</span>`

/**
* @param {{  }} i
*/
export const for_the_pay_as_you_go_plan = (i) => `für den Pay-as-you-go-Plan`

/**
* @param {{  }} i
*/
export const per_added_user = (i) => `pro hinzugefügten Benutzer`

/**
* @param {{  }} i
*/
export const included = (i) => `eingeschlossen`

/**
* @param {{  }} i
*/
export const per_added_gb = (i) => `pro zusätzliches GB`

/**
* @param {{  }} i
*/
export const updates = (i) => `Updates`

/**
* @param {{  }} i
*/
export const updates_explanation = (i) => `Teil der Berechnung des Bandbreitenpreises`

/**
* @param {{  }} i
*/
export const plan_free_desc = (i) => `Am besten für unbesorgtes Experimentieren`

/**
* @param {{  }} i
*/
export const plan_solo_desc = (i) => `Am besten für unabhängige Entwickler`

/**
* @param {{  }} i
*/
export const plan_maker_desc = (i) => `Am besten für kleine Geschäftsinhaber`

/**
* @param {{  }} i
*/
export const plan_team_desc = (i) => `Am besten für mittelständische Unternehmen`

/**
* @param {{  }} i
*/
export const tutorial_on = (i) => `Tutorial über`

/**
* @param {{  }} i
*/
export const view_repo = (i) => `Repo anzeigen`

/**
* @param {{  }} i
*/
export const view_npm = (i) => `Auf NPM anzeigen`

/**
* @param {{  }} i
*/
export const last_modified = (i) => `Zuletzt geändert`

/**
* @param {{  }} i
*/
export const aup_intro = (i) => `Diese Richtlinie für akzeptable Nutzung (diese 'Richtlinie') beschreibt die verbotenen Nutzungen der von Capgo und seinen Tochtergesellschaften angebotenen Webdienste (die 'Dienste') sowie der Website unter https://capgo.app (die 'Capgo-Website'). Die in dieser Richtlinie enthaltenen Beispiele sind nicht abschließend. Wir können diese Richtlinie jederzeit ändern, indem wir eine überarbeitete Version auf der Capgo-Website veröffentlichen. Durch die Nutzung der Dienste oder den Zugriff auf die Capgo-Website stimmen Sie der jeweils aktuellen Version dieser Richtlinie zu. Wenn Sie gegen die Richtlinie verstoßen oder anderen autorisieren oder helfen, dies zu tun, können wir Ihre Nutzung der Dienste aussetzen oder beenden.`

/**
* @param {{  }} i
*/
export const aup_no_illegal_use = (i) => `Keine illegale, schädliche oder anstößige Nutzung oder Inhalte`

/**
* @param {{  }} i
*/
export const aup_no_illegal_use_desc = (i) => `Sie dürfen die Dienste oder die Capgo-Website nicht für illegale, schädliche, betrügerische, verletzende oder anstößige Zwecke nutzen oder andere dazu ermutigen, fördern, unterstützen oder anweisen, dies zu tun, noch Inhalte übertragen, speichern, anzeigen, verbreiten oder auf andere Weise verfügbar machen, die illegal, schädlich, betrügerisch, verletzend oder anstößig sind. Verbotene Aktivitäten oder Inhalte umfassen:`

/**
* @param {{  }} i
*/
export const illegal_activities = (i) => `Illegale, schädliche oder betrügerische Aktivitäten.`

/**
* @param {{  }} i
*/
export const infringing_content = (i) => `Rechtsverletzender Inhalt.`

/**
* @param {{  }} i
*/
export const offensive_content = (i) => `Anstößiger Inhalt.`

/**
* @param {{  }} i
*/
export const harmful_content = (i) => `Schädlicher Inhalt.`

/**
* @param {{  }} i
*/
export const platform_compliance = (i) => `Plattformkonformität.`

/**
* @param {{  }} i
*/
export const aup_no_security_violations = (i) => `Keine Sicherheitsverletzungen`

/**
* @param {{  }} i
*/
export const aup_no_security_violations_desc = (i) => `Sie dürfen die Dienste nicht nutzen, um die Sicherheit oder Integrität eines Netzwerks, Computers oder Kommunikationssystems, einer Softwareanwendung oder eines Netzwerk- oder Computergeräts (jedes ein 'System') zu verletzen. Verbotene Aktivitäten sind:`

/**
* @param {{  }} i
*/
export const unauthorized_access = (i) => `Unbefugter Zugriff.`

/**
* @param {{  }} i
*/
export const interception = (i) => `Abfangung.`

/**
* @param {{  }} i
*/
export const falsification_of_origin = (i) => `Ursprungfälschung.`

/**
* @param {{  }} i
*/
export const aup_no_network_abuse = (i) => `Kein Netzwerkmissbrauch`

/**
* @param {{  }} i
*/
export const aup_no_network_abuse_desc = (i) => `Sie dürfen keine Netzwerkverbindungen zu Benutzern, Hosts oder Netzwerken herstellen, es sei denn, Sie haben die Erlaubnis, mit ihnen zu kommunizieren. Zu den verbotenen Aktivitäten gehören:`

/**
* @param {{  }} i
*/
export const monitoring_crawling = (i) => `Überwachung oder Crawling.`

/**
* @param {{  }} i
*/
export const denial_of_service = (i) => `Dienstverweigerung (DoS).`

/**
* @param {{  }} i
*/
export const intentional_interference = (i) => `Absichtliche Störung.`

/**
* @param {{  }} i
*/
export const operation_of_network_services = (i) => `Betrieb bestimmter Netzwerkdienste.`

/**
* @param {{  }} i
*/
export const avoiding_system_restrictions = (i) => `Vermeidung von Systembeschränkungen.`

/**
* @param {{  }} i
*/
export const aup_no_email_abuse = (i) => `Kein Missbrauch von E-Mail oder anderen Nachrichten`

/**
* @param {{  }} i
*/
export const aup_no_email_abuse_desc = (i) => `Du wirst keine unerwünschten Massen-E-Mails oder andere Nachrichten, Werbungen, Anzeigen oder Aufforderungen (wie 'Spam') verbreiten, veröffentlichen, senden oder das Senden dieser erleichtern, einschließlich kommerzieller Werbung und informativen Ankündigungen. Du wirst die E-Mail-Kopfzeilen nicht ändern oder verschleiern und nicht die Identität eines Absenders annehmen, ohne die ausdrückliche Erlaubnis des Absenders. Du wirst keine Antworten auf von einem anderen Internetdienstanbieter gesendete Nachrichten sammeln, wenn diese Nachrichten gegen diese Richtlinie oder die akzeptable Nutzungsrichtlinie dieses Anbieters verstoßen.`

/**
* @param {{  }} i
*/
export const aup_monitoring_enforcement = (i) => `Unsere Überwachung und Durchsetzung`

/**
* @param {{  }} i
*/
export const aup_monitoring_enforcement_desc = (i) => `Wir behalten uns das Recht vor, übernehmen jedoch nicht die Verpflichtung, jede Verletzung dieser Richtlinie oder den Missbrauch der Dienste oder der Capgo-Website zu untersuchen. Wir können:`

/**
* @param {{  }} i
*/
export const investigate_violations = (i) => `Verstöße gegen diese Richtlinie oder missbräuchliche Nutzung der Dienste oder der Capgo-Website untersuchen;`

/**
* @param {{  }} i
*/
export const remove_modify_content = (i) => `Inhalte oder Ressourcen entfernen, den Zugriff darauf deaktivieren oder ändern, die diese Richtlinie oder eine andere Vereinbarung, die wir mit Ihnen für die Nutzung der Dienste oder der Capgo-Website haben, verletzen.`

/**
* @param {{  }} i
*/
export const aup_reporting_violations = (i) => `Meldung von Verstößen gegen diese Richtlinie`

/**
* @param {{  }} i
*/
export const aup_reporting_violations_desc = (i) => `Wenn Sie von einem Verstoß gegen diese Richtlinie Kenntnis erlangen, werden Sie uns unverzüglich benachrichtigen und uns die erforderliche Unterstützung bieten, um den Verstoß zu stoppen oder zu beheben. Um einen Verstoß gegen diese Richtlinie zu melden, kontaktieren Sie uns bitte unter support@capgo.app.`

/**
* @param {{  }} i
*/
export const illegal_activities_desc = (i) => `Jegliche Aktivitäten, die illegal sind, die Rechte anderer verletzen oder anderen schaden könnten, unseren Betrieben oder unserem Ruf, einschließlich der Verbreitung, Förderung oder Erleichterung von Kinderpornografie, dem Anbieten oder der Verbreitung betrügerischer Waren, Dienstleistungen, Systeme oder Aktionen, schnelles Geld verdienen-Systemen, Ponzi- und Pyramidensystemen, Phishing oder Pharming.`

/**
* @param {{  }} i
*/
export const infringing_content_desc = (i) => `Inhalte, die das geistige Eigentum oder die Eigentumsrechte anderer verletzen oder sich aneignen.`

/**
* @param {{  }} i
*/
export const offensive_content_desc = (i) => `Inhalt, der verleumderisch, obszön, missbräuchlich, invasiv in die Privatsphäre oder anderweitig anstößig ist, einschließlich Inhalten, die Kinderpornografie darstellen, sich auf Bestialität beziehen oder nicht einvernehmliche sexuelle Handlungen abbilden.`

/**
* @param {{  }} i
*/
export const harmful_content_desc = (i) => `Inhalte oder andere Computertechnologien, die Systeme, Programme oder Daten beschädigen, stören, heimlich abfangen oder enteignen können, einschließlich Viren, Trojaner, Würmer, Zeitbomben oder Cancelbots.`

/**
* @param {{  }} i
*/
export const platform_compliance_desc = (i) => `Alle Aktivitäten, die von den Plattformen, die von der Capgo-Website und den Dienstleistungen genutzt werden, als inakzeptabel angesehen werden.`

/**
* @param {{  }} i
*/
export const unauthorized_access_desc = (i) => `Zugriff auf oder Nutzung eines Systems ohne Erlaubnis, einschließlich des Versuchs, die Schwachstellen eines Systems zu erkunden, zu scannen oder zu testen oder Sicherheits- oder Authentifizierungsmaßnahmen, die von einem System verwendet werden, zu verletzen.`

/**
* @param {{  }} i
*/
export const falsification_of_origin_desc = (i) => `Fälschen von TCP-IP-Paketkopfdaten, E-Mail-Kopfzeilen oder irgendeinem Teil einer Nachricht, der ihren Ursprung oder ihren Weg beschreibt. Die legale Nutzung von Aliasen und anonymen Remailern ist durch diese Bestimmung nicht verboten.`

/**
* @param {{  }} i
*/
export const monitoring_crawling_desc = (i) => `Überwachung oder Crawlen eines Systems, das das überwachte oder gecrawlte System beeinträchtigt oder stört.`

/**
* @param {{  }} i
*/
export const denial_of_service_desc = (i) => `Überflutung eines Ziels mit Kommunikationsanfragen, sodass das Ziel entweder nicht auf legitimen Verkehr reagieren kann oder so langsam reagiert, dass es ineffektiv wird.`

/**
* @param {{  }} i
*/
export const intentional_interference_desc = (i) => `Eingriffe in die ordnungsgemäße Funktionsweise eines Systems, einschließlich jeglicher absichtlicher Versuche, ein System durch Mailbombing, Nachrichtenbombing, Rundfunkangriffe oder Fluttechniken zu überlasten.`

/**
* @param {{  }} i
*/
export const operation_of_network_services_desc = (i) => `Betrieb oder der Versuch, irgendeinen Netzwerkdienst oder -dienst zu betreiben, der die ordnungsgemäße Funktion eines Netzwerkdienstes beeinträchtigt.`

/**
* @param {{  }} i
*/
export const avoiding_system_restrictions_desc = (i) => `Verwendung manueller oder elektronischer Mittel, um jegliche Nutzungseinschränkungen, die auf ein System auferlegt wurden, wie z. B. Zugriffs- und Speicherbeschränkungen, zu umgehen.`

/**
* @param {{  }} i
*/
export const report_violations_desc = (i) => `Wir können jede Aktivität melden, von der wir vermuten, dass sie gegen ein Gesetz oder eine Verordnung verstößt, an die entsprechenden Strafverfolgungsbehörden, Regulierungsbehörden oder andere geeignete Dritte.`

/**
* @param {{  }} i
*/
export const report_violations_desc_2 = (i) => `Unser Berichtswesen kann die Offenlegung entsprechender Kundeninformationen umfassen. Wir können auch mit geeigneten Strafverfolgungsbehörden, Regulierungsbehörden oder anderen geeigneten Dritten zusammenarbeiten, um bei der Untersuchung und Verfolgung von rechtswidrigem Verhalten zu helfen, indem wir Netzwerk- und Systeminformationen im Zusammenhang mit den angeblichen Verstößen gegen diese Richtlinie bereitstellen.`

/**
* @param {{  }} i
*/
export const security_policy_title = (i) => `Capgo Sicherheitsrichtlinie`

/**
* @param {{  }} i
*/
export const canonical = (i) => `Kanonisch`

/**
* @param {{  }} i
*/
export const security_intro = (i) => `Bei Capgo betrachten wir die Sicherheit unserer Systeme als oberste Priorität. Allerdings kann es trotz aller Bemühungen um die Systemsicherheit weiterhin Schwachstellen geben.`

/**
* @param {{  }} i
*/
export const security_discovery = (i) => `Wenn Sie eine Sicherheitsanfälligkeit entdecken, möchten wir darüber informiert werden, damit wir schnellstmöglich Maßnahmen zur Behebung ergreifen können. Wir möchten Sie bitten, uns zu helfen, unsere Kunden und unsere Systeme besser zu schützen.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_title = (i) => `Außerhalb des Umfangs stehende Schwachstellen:`

/**
* @param {{  }} i
*/
export const security_out_of_scope_1 = (i) => `Clickjacking auf Seiten ohne sensible Aktionen.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_2 = (i) => `Unbefugt/Abmelden/Anmelden CSRF.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_3 = (i) => `Angriffe, die MITM oder physischen Zugriff auf das Gerät eines Benutzers erfordern.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_4 = (i) => `Angriffe, die soziale Ingenieurtechnik erfordern.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_5 = (i) => `Jede Aktivität, die zu einer Unterbrechung unseres Dienstes (DoS) führen könnte.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_6 = (i) => `Inhalte-Vortäuschung und Textinjektionsprobleme ohne einen Angriffsvektor anzuzeigen/ohne HTML/CSS ändern zu können.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_7 = (i) => `E-Mail-Spoofing`

/**
* @param {{  }} i
*/
export const security_out_of_scope_8 = (i) => `Fehlende DNSSEC-, CAA- und CSP-Header`

/**
* @param {{  }} i
*/
export const security_out_of_scope_9 = (i) => `Fehlendes Secure- oder HTTP-only-Flag bei nicht sensiblen Cookies`

/**
* @param {{  }} i
*/
export const security_out_of_scope_10 = (i) => `Tote Links`

/**
* @param {{  }} i
*/
export const security_out_of_scope_11 = (i) => `Benutzerenumeration`

/**
* @param {{  }} i
*/
export const security_testing_guidelines_title = (i) => `Testrichtlinien:`

/**
* @param {{  }} i
*/
export const security_testing_guidelines_1 = (i) => `Führen Sie keine automatisierten Scanner auf den Projekten anderer Kunden aus. Der Einsatz von automatisierten Scannern kann die Kosten für unsere Nutzer in die Höhe treiben. Aggressiv konfigurierte Scanner könnten unbeabsichtigt Dienste stören, Sicherheitsanfälligkeiten ausnutzen, zu Systeminstabilität oder -verletzungen führen und die Nutzungsbedingungen unserer Anbieter verletzen. Unsere eigenen Sicherheitssysteme werden nicht in der Lage sein, feindliche Aufklärung von Whitehat-Forschung zu unterscheiden. Wenn Sie einen automatisierten Scanner ausführen möchten, benachrichtigen Sie uns unter security@capgo.app und führen Sie ihn nur auf Ihrem eigenen Capgo-Projekt aus. Greifen Sie NICHT die Projekte anderer Kunden an.`

/**
* @param {{  }} i
*/
export const security_testing_guidelines_2 = (i) => `Nutzen Sie die Entdeckung der Schwachstelle oder des Problems nicht aus, indem Sie beispielsweise mehr Daten herunterladen als nötig, um die Schwachstelle zu demonstrieren, oder indem Sie Daten anderer Personen löschen oder ändern.`

/**
* @param {{  }} i
*/
export const security_reporting_guidelines_title = (i) => `Berichterstattung Richtlinien:`

/**
* @param {{  }} i
*/
export const security_reporting_guidelines_1 = (i) => `Reichen Sie Ihre Ergebnisse über unser GitHub-Sicherheitsgutachten ein:`

/**
* @param {{  }} i
*/
export const security_reporting_guidelines_2 = (i) => `Bitte stellen Sie ausreichende Informationen zur Verfügung, um das Problem zu reproduzieren, damit wir es so schnell wie möglich lösen können.`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_title = (i) => `Offenlegungsrichtlinien:`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_1 = (i) => `Um unsere Kunden zu schützen, offenbaren Sie das Problem anderen nicht, bis wir es untersucht, behoben und unsere betroffenen Kunden informiert haben.`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_2 = (i) => `Wenn Sie Ihre Forschung zu Capgo auf einer Konferenz, in einem Blog oder einem anderen öffentlichen Forum öffentlich teilen möchten, sollten Sie uns mindestens 30 Tage vor dem Veröffentlichungstermin einen Entwurf zur Überprüfung und Genehmigung zusenden. Bitte beachten Sie, dass Folgendes nicht enthalten sein sollte:`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_2_1 = (i) => `Daten zu Projekten von Capgo-Kunden`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_2_2 = (i) => `Capgo-Kundendaten`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_2_3 = (i) => `Informationen über Capgo-Mitarbeiter, Auftragnehmer oder Partner`

/**
* @param {{  }} i
*/
export const security_what_we_promise_title = (i) => `Was wir versprechen:`

/**
* @param {{  }} i
*/
export const security_what_we_promise_1 = (i) => `Wir werden innerhalb von 7 Geschäftstagen auf Ihren Bericht reagieren und Ihnen unsere Bewertung des Berichts sowie ein erwartetes Lösungsdatum mitteilen.`

/**
* @param {{  }} i
*/
export const security_what_we_promise_2 = (i) => `Wenn Sie die obigen Anweisungen befolgt haben, werden wir keine rechtlichen Schritte gegen Sie im Zusammenhang mit dem Bericht einleiten.`

/**
* @param {{  }} i
*/
export const security_what_we_promise_3 = (i) => `Wir werden Ihren Bericht strikt vertraulich behandeln und Ihre persönlichen Daten ohne Ihre Zustimmung nicht an Dritte weitergeben.`

/**
* @param {{  }} i
*/
export const security_what_we_promise_4 = (i) => `Wir halten Sie über den Fortschritt bei der Lösung des Problems informiert.`

/**
* @param {{  }} i
*/
export const security_what_we_promise_5 = (i) => `In den öffentlichen Informationen zu dem gemeldeten Problem werden wir Ihren Namen als Entdecker des Problems angeben (es sei denn, Sie wünschen etwas anderes).`

/**
* @param {{  }} i
*/
export const security_closing = (i) => `Wir bemühen uns, alle Probleme so schnell wie möglich zu lösen, und wir möchten eine aktive Rolle bei der endgültigen Veröffentlichung des Problems spielen, nachdem es gelöst wurde.`

/**
* @param {{  }} i
*/
export const sla_title = (i) => `Service Level Agreements (SLAs)`

/**
* @param {{  }} i
*/
export const enterprise_platform_uptime_sla = (i) => `Unternehmensplattform Betriebszeit SLA`

/**
* @param {{  }} i
*/
export const sla_intro = (i) => `Die folgende Service-Level-Vereinbarung, die in die und Bestandteil der Abonnementvereinbarung zwischen Capgo ("Capgo") und dem Kunden (die "Vereinbarung") ist, gilt für die Dienstleistungen für Unternehmenskunden, die in einem Bestellformular während der geltenden Abonnementlaufzeit angegeben sind:`

/**
* @param {{  }} i
*/
export const uptime_commitment_title = (i) => `1. Verfügbarkeitsverpflichtung`

/**
* @param {{  }} i
*/
export const uptime_commitment_desc = (i) => `Capgo wird eine tatsächliche Verfügbarkeit von mindestens neunundneunzig Prozent (99,0%) der Gesamtzeit in jedem Kalendermonat während der Abonnementlaufzeit gewährleisten, gemessen von Capgo (die "Verfügbarkeitsverpflichtung").`

/**
* @param {{  }} i
*/
export const service_credits_title = (i) => `2. Dienstguthaben`

/**
* @param {{  }} i
*/
export const service_credits_desc = (i) => `Wenn das Uptime-Engagement in einem bestimmten Kalendermonat während der Abonnementsdauer nicht erfüllt wird, ist der Kunde für ein Serviceguthaben ("Service Credit") berechtigt, vorausgesetzt, der Kunde meldet Capgo das Versagen, das Uptime-Engagement zu erfüllen, und beantragt dieses Serviceguthaben gemäß diesem Anhang. Der Betrag eines hierunter fälligen Serviceguthabens wird wie folgt berechnet: X * Y, wobei X die gesamten Gebühren sind, die der Kunde für die betroffenen Dienstleistungen im relevanten Kalendermonat an Capgo schuldet (unabhängig davon, wann sie in Rechnung gestellt oder fällig sind), und Y der Kreditprozentsatz ist, der der tatsächlichen Verfügbarkeit entspricht, die für den relevanten Kalendermonat bereitgestellt wird (in Prozent der Gesamtzeit), wie in der Tabelle unten aufgeführt.`

/**
* @param {{  }} i
*/
export const actual_availability = (i) => `Aktuelle Verfügbarkeit`

/**
* @param {{  }} i
*/
export const credit_percentage = (i) => `Kreditanteil`

/**
* @param {{  }} i
*/
export const availability_99_98 = (i) => `Weniger als 99,0 %, aber größer oder gleich 98,0 %`

/**
* @param {{  }} i
*/
export const credit_10_percent = (i) => `10%`

/**
* @param {{  }} i
*/
export const availability_98_97 = (i) => `Weniger als 98,0 %, aber größer oder gleich 97,0 %`

/**
* @param {{  }} i
*/
export const credit_15_percent = (i) => `15 %`

/**
* @param {{  }} i
*/
export const availability_97_95 = (i) => `Weniger als 97,0 %, aber größer als oder gleich 95,0 %`

/**
* @param {{  }} i
*/
export const credit_20_percent = (i) => `20 %`

/**
* @param {{  }} i
*/
export const availability_below_95 = (i) => `Weniger als 95,0%`

/**
* @param {{  }} i
*/
export const credit_30_percent = (i) => `30 %`

/**
* @param {{  }} i
*/
export const credit_requests_payment_title = (i) => `3. Kredit Anfragen und Zahlung`

/**
* @param {{  }} i
*/
export const credit_requests_payment_desc = (i) => `Um einen Service-Gutschrift zu beantragen, muss der Kunde innerhalb von dreißig (30) Tagen nach dem Ende des Monats, in dem das Uptime-Engagement nicht eingehalten wurde, eine E-Mail an Capgo unter support@capgo.app senden. Der Kunde muss entweder seine Kontonummer oder die registrierte E-Mail-Adresse angeben sowie die zuvor gemeldeten Daten und Zeiten, an denen keine Serviceverfügbarkeit bestand. Wenn Capgo bestätigt, dass der Kunde für eine Service-Gutschrift berechtigt ist, wird Capgo innerhalb von dreißig (30) Tagen eine Gutschrift auf das Konto des Kunden ausstellen. Service-Gutschriften sind keine Rückerstattungen, können nicht in einen Bargeldbetrag umgewandelt werden und dürfen nur für zukünftige Rechnungsgebühren verwendet werden. Sofern in Abschnitt 4 unten nicht anders angegeben, sind die Service-Gutschriften das einzige und ausschließliche Rechtsmittel des Kunden sowie die einzige und ausschließliche Haftung von Capgo für jegliches Versäumnis von Capgo, das Uptime-Engagement einzuhalten.`

/**
* @param {{  }} i
*/
export const four_definitions_title = (i) => `4. Definitionen`

/**
* @param {{  }} i
*/
export const definitions_desc = (i) => `Alle in diesem Service-Level-Agreement verwendeten, aber nicht definierten, großgeschriebenen Wörter haben die im Vertrag festgelegte Bedeutung.`

/**
* @param {{  }} i
*/
export const scheduled_availability_title = (i) => `4.1 Geplante Verfügbarkeit`

/**
* @param {{  }} i
*/
export const scheduled_availability_desc = (i) => `"Geplante Verfügbarkeit" bedeutet die Zeit, in Minuten, während der die entsprechenden Dienste allgemein für die autorisierten Benutzer des Kunden zugänglich und verfügbar sind.`

/**
* @param {{  }} i
*/
export const unscheduled_downtime_title = (i) => `4.2 Ungeplanter Ausfall`

/**
* @param {{  }} i
*/
export const unscheduled_downtime_desc = (i) => `"Nicht geplanter Ausfall" bezeichnet die Zeit, in Minuten, in der die betreffenden Dienste für die zulässigen Benutzer des Kunden nicht allgemein zugänglich und verfügbar sind, ausgenommen sind die Unzugänglichkeit oder Nichtverfügbarkeit aufgrund von Handlungen oder Unterlassungen des Kunden oder der zulässigen Benutzer, höhere Gewalt, geplante Wartungsarbeiten, die mindestens 24 Stunden im Voraus per E-Mail bekannt gegeben werden, Hacking- oder Virusangriffe, angemessene Notfallwartung oder andere produktspezifische Ausschlüsse, die in den SLA-Ausschlüssen aufgeführt sind.`

/**
* @param {{  }} i
*/
export const actual_availability_title = (i) => `4.3 Tatsächliche Verfügbarkeit`

/**
* @param {{  }} i
*/
export const actual_availability_desc = (i) => `"Die tatsächliche Verfügbarkeit" bedeutet geplante Verfügbarkeit abzüglich ungeplanter Ausfallzeiten.`

/**
* @param {{  }} i
*/
export const production_title = (i) => `4.4 Produktion`

/**
* @param {{  }} i
*/
export const production_desc = (i) => `"Produktion" wird definiert als ein System, das live Kunden- oder Geschäftssysteme mit bestehenden, bereitgestellten und funktionalen Funktionen bedient.`

/**
* @param {{  }} i
*/
export const non_production_desc = (i) => `"Entwicklung", "Test", "UAT", "Vorproduktion" oder Implementierung neuer Funktionen, selbst in einer Produktionsumgebung, werden nicht als Produktion betrachtet.`

/**
* @param {{  }} i
*/
export const sla_exclusions_title = (i) => `SLA-Ausschlüsse`

/**
* @param {{  }} i
*/
export const general_service_exclusions_title = (i) => `Allgemeine Ausschlüsse vom Service`

/**
* @param {{  }} i
*/
export const general_service_exclusion_1 = (i) => `(i) Verursacht durch Faktoren außerhalb unserer zumutbaren Kontrolle, einschließlich, aber nicht beschränkt auf Ereignisse höherer Gewalt oder Probleme mit dem Internetzugang, ISP-Anbieterprobleme und/oder damit verbundene Probleme jenseits des Abgrenzungspunktes von Capgo.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_2 = (i) => `(ii) Die aus freiwilligen Handlungen oder Unterlassungen von Ihnen resultieren.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_3 = (i) => `(iii) Die sich aus Einschränkungen der CPU- und Speicherressourcen der Instanzklasse ergeben.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_4 = (i) => `(iv) Das resultiert daraus, dass Sie die grundlegenden Betriebsrichtlinien, die in unseren Dokumenten beschrieben sind, nicht befolgen.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_5 = (i) => `(v) Dies führt zu einer langen Wiederherstellungszeit aufgrund unzureichender IO-Kapazität für Ihre Arbeitslast.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_6 = (i) => `(vi) Das resultiert aus Ihrer Ausrüstung, Software oder anderer Technologie.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_7 = (i) => `(vii) Entsteht aus unserer Aussetzung und Beendigung Ihres Rechts, Capgo gemäß unseren Nutzungsbedingungen zu verwenden.`

/**
* @param {{  }} i
*/
export const live_update_sla_exclusions_title = (i) => `Live-Update SLA-Ausnahmen`

/**
* @param {{  }} i
*/
export const live_update_exclusion_1 = (i) => `(i) Unangemessen bereitgestellte Compute-Ressourcen, die mit Ihrem Projekt für die erwartete Last verbunden sind.`

/**
* @param {{  }} i
*/
export const live_update_exclusion_2 = (i) => `(ii) Ausfälle, die durch zu nachsichtige Ratenlimitierungs-Konfigurationen verursacht werden.`

/**
* @param {{  }} i
*/
export const live_update_exclusion_3 = (i) => `(iii) Ausfälle oder Probleme, die durch zurückgezogene Versionen offizieller Capgo-Bibliotheken, -Frameworks, -Softwarepakete oder APIs verursacht werden, einschließlich dringender Rückzüge aufgrund erkannter Sicherheitsanfälligkeiten.`

/**
* @param {{  }} i
*/
export const live_update_exclusion_4 = (i) => `(iv) Ausfälle oder Probleme, die durch inoffizielle Capgo-Clientbibliotheken, Frameworks oder API-Proxy verursacht werden, selbst wenn diese Bibliotheken intern offizielle Capgo-Bibliotheken verwenden.`

/**
* @param {{  }} i
*/
export const live_update_exclusion_5 = (i) => `(v) Ausfälle oder Probleme, die durch ein Upgrade auf eine höhere Minor- oder Patch-Version einer offiziellen Capgo-Clientbibliothek, eines Frameworks oder eines Softwarepakets hätten behoben werden können.`

/**
* @param {{  }} i
*/
export const support_title = (i) => `Unterstützung`

/**
* @param {{  }} i
*/
export const support_desc = (i) => `Capgo bietet Support-Service-Level-Vereinbarungen für unsere Team- und Unternehmenskunden an.`

/**
* @param {{  }} i
*/
export const urgent_support_title = (i) => `1. Dringend`

/**
* @param {{  }} i
*/
export const urgent_support_subtitle = (i) => `Kritisches Problem`

/**
* @param {{  }} i
*/
export const urgent_support_desc = (i) => `Defekt, der zu einem vollständigen oder teilweisen Ausfall des Systems führt oder eine Bedingung verursacht, die Capgo für alle Benutzer des Kunden unbenutzbar oder nicht verfügbar in der Produktion macht.`

/**
* @param {{  }} i
*/
export const high_support_title = (i) => `2. Hoch`

/**
* @param {{  }} i
*/
export const high_support_subtitle = (i) => `Bedeutende Geschäftsunterbrechung`

/**
* @param {{  }} i
*/
export const high_support_desc = (i) => `Problem, der zu einer Situation führt, in der die Hauptfunktionalität beeinträchtigt ist und erhebliche Leistungsverschlechterungen auftreten. Das Problem betrifft einen erheblichen Teil der Benutzerbasis und/oder wesentliche Capgo-Funktionalitäten.`

/**
* @param {{  }} i
*/
export const normal_support_title = (i) => `3. Normal`

/**
* @param {{  }} i
*/
export const normal_support_subtitle = (i) => `Kleine Funktion oder funktionales Problem / Allgemeine Frage`

/**
* @param {{  }} i
*/
export const normal_support_desc = (i) => `Das Problem führt dazu, dass eine Komponente von Capgo nicht wie erwartet oder dokumentiert funktioniert. Eine Anfrage eines Kundenvertreters bezüglich eines allgemeinen technischen Problems oder einer allgemeinen Frage.`

/**
* @param {{  }} i
*/
export const low_support_title = (i) => `4. Niedrig`

/**
* @param {{  }} i
*/
export const low_support_subtitle = (i) => `Kleine Angelegenheit / Funktionsanfrage`

/**
* @param {{  }} i
*/
export const low_support_desc = (i) => `Eine Informationsanfrage zu Capgo oder eine Funktionsanfrage.`

/**
* @param {{  }} i
*/
export const target_initial_response_times_title = (i) => `Zielen Sie auf anfängliche Reaktionszeiten ab`

/**
* @param {{  }} i
*/
export const severity_level = (i) => `Schweregrad`

/**
* @param {{  }} i
*/
export const team_plan = (i) => `Team`

/**
* @param {{  }} i
*/
export const pay_as_you_go_plan = (i) => `Bezahlen nach Verbrauch`

/**
* @param {{  }} i
*/
export const priority_plus_plan = (i) => `Priorität Plus`

/**
* @param {{  }} i
*/
export const urgent_team_response = (i) => `24 Stunden<br />24/7 × 365`

/**
* @param {{  }} i
*/
export const urgent_payg_response = (i) => `1 Stunde<br />24/7 × 365`

/**
* @param {{  }} i
*/
export const urgent_priority_response = (i) => `1 Stunde<br />24/7 × 365`

/**
* @param {{  }} i
*/
export const high_team_response = (i) => `1 Werktag<br />Montag - Freitag`

/**
* @param {{  }} i
*/
export const high_payg_response = (i) => `2 Geschäftszeiten<br />Montag - Freitag`

/**
* @param {{  }} i
*/
export const high_priority_response = (i) => `2 Stunden<br />24/7 × 365`

/**
* @param {{  }} i
*/
export const normal_team_response = (i) => `1 Arbeitstag<br />Montag - Freitag`

/**
* @param {{  }} i
*/
export const normal_payg_response = (i) => `1 Werktag<br />Montag - Freitag`

/**
* @param {{  }} i
*/
export const normal_priority_response = (i) => `12 Stunden<br />24/7 x 365`

/**
* @param {{  }} i
*/
export const low_team_response = (i) => `2 Werktage<br />Montag - Freitag`

/**
* @param {{  }} i
*/
export const low_payg_response = (i) => `2 Werktage<br />Montag - Freitag`

/**
* @param {{  }} i
*/
export const low_priority_response = (i) => `24 Stunden<br />24/7 x 365`

/**
* @param {{  }} i
*/
export const business_hours_note = (i) => `Die Geschäftszeiten sind von 6 Uhr bis 18 Uhr (Ortszeit), es sei denn, es wird anders angegeben.`

/**
* @param {{  }} i
*/
export const support_policy_title = (i) => `Capgo Kundensupport`

/**
* @param {{  }} i
*/
export const support_policy_intro = (i) => `Capgo verpflichtet sich, ein herausragendes Kundenerlebnis zu bieten. Im Rahmen dieses Engagements bieten wir einen begrenzten technischen Support für alle bezahlten Projekte, die unsere Capgo-Plattform nutzen. Unser technischer Support wird durch den folgenden Umfang, die Stunden, Kontakte und Kanäle definiert.`

/**
* @param {{  }} i
*/
export const support_policy_scope_title = (i) => `Umfang`

/**
* @param {{  }} i
*/
export const support_policy_scope_intro = (i) => `Das Supportangebot von Capgo ist nur für Technologien verfügbar, die von der Capgo-Plattform unterstützt werden, und ist beschränkt auf:`

/**
* @param {{  }} i
*/
export const support_policy_configuration_issues_title = (i) => `Konfigurationsprobleme`

/**
* @param {{  }} i
*/
export const support_policy_configuration_issues_1 = (i) => `Einrichtung von Live-Updates`

/**
* @param {{  }} i
*/
export const support_policy_configuration_issues_2 = (i) => `Beste Praktiken für die App-Konfiguration`

/**
* @param {{  }} i
*/
export const support_policy_configuration_issues_3 = (i) => `Allgemeine Fragen zum Capgo-Stack`

/**
* @param {{  }} i
*/
export const support_policy_troubleshooting_title = (i) => `Fehlerbehebung`

/**
* @param {{  }} i
*/
export const support_policy_troubleshooting_1 = (i) => `Bereitstellung von Workarounds oder Lösungen für bekannte Probleme`

/**
* @param {{  }} i
*/
export const support_policy_troubleshooting_2 = (i) => `Beantwortung allgemeiner Anleitungen und Weiterleitung zur Dokumentation`

/**
* @param {{  }} i
*/
export const support_policy_troubleshooting_3 = (i) => `Fehlerbehebung bei unterstützten Funktionen (Live-Updates, App-Management, Analytik), die ein unerwartetes Verhalten auf Capgo zeigen, unabhängig vom Anwendungscode des Benutzers.`

/**
* @param {{  }} i
*/
export const support_policy_not_covered_title = (i) => `Nicht abgedeckt`

/**
* @param {{  }} i
*/
export const support_policy_not_covered_intro = (i) => `Die technischen Unterstützungsdienste von Capgo umfassen nicht:`

/**
* @param {{  }} i
*/
export const support_policy_not_covered_1 = (i) => `Allgemeine Fehlersuche bei Benutzeranwendungen`

/**
* @param {{  }} i
*/
export const support_policy_not_covered_2 = (i) => `Anpassung des Anwendungscodes zur Kompatibilität mit Capgo`

/**
* @param {{  }} i
*/
export const support_policy_not_covered_3 = (i) => `Ändern und/oder Patchen von Drittanbieter- oder Open Source-Software für die Kompatibilität mit Capgo`

/**
* @param {{  }} i
*/
export const support_policy_billing_support = (i) => `Die Unterstützung für Abrechnung und Kontoverwaltung steht allen Kunden zur Verfügung.`

/**
* @param {{  }} i
*/
export const support_policy_limited_support_intro = (i) => `Begrenzte technische Unterstützung ist für Capgo-Kunden verfügbar, die bezahlte Capgo-Ressourcen und/oder bezahlte Capgo-Add-Ons nutzen. Supportanfragen werden nur bearbeitet, wenn:`

/**
* @param {{  }} i
*/
export const support_policy_limited_support_1 = (i) => `Die Anfrage erfolgt über einen unserer offiziellen Support-Kanäle.`

/**
* @param {{  }} i
*/
export const support_policy_limited_support_2 = (i) => `Die Anfrage stammt von einer registrierten Capgo-Konto-E-Mail-Adresse.`

/**
* @param {{  }} i
*/
export const support_policy_limited_support_3 = (i) => `Der Anforderer hat Entwickler- oder höheren Zugriff auf spezifische Capgo-Projekte, die mit der Anfrage verbunden sind.`

/**
* @param {{  }} i
*/
export const support_policy_official_channels_title = (i) => `Offizielle Unterstützungskanäle`

/**
* @param {{  }} i
*/
export const support_policy_official_channels_1 = (i) => `Web und Dashboard: Unterstützung ist exklusiv über die Capgo-Hilfefunktion im Dashboard oder auf unserer Website verfügbar.`

/**
* @param {{  }} i
*/
export const support_policy_official_channels_2 = (i) => `E-Mail: Wenn Sie nicht auf das Dashboard oder das Ticketsystem zugreifen können, wenden Sie sich an den Support, indem Sie eine E-Mail von einer registrierten Capgo-Konto-E-Mail-Adresse an support@capgo.app senden.`

/**
* @param {{  }} i
*/
export const support_policy_official_channels_note = (i) => `Das Support-Team von Capgo wird nur Anfragen bearbeiten, die über diese offiziellen Kanäle eingehen. Es kann Community-Kanäle geben, die peer-to-peer Unterstützung und Diskussionen bieten, die von Freiwilligen, die zur Capgo-Community beitragen, bereitgestellt werden.`

/**
* @param {{  }} i
*/
export const support_policy_code_debugging = (i) => `Für Fragen zur Code-Debugging empfehlen wir, sich über GitHub Issues oder Discord zu melden. Die Community umfasst erfahrene Entwickler, die möglicherweise hilfreiche Hinweise zu codebezogenen Problemen geben können.`

/**
* @param {{  }} i
*/
export const support_policy_community_response = (i) => `Um die hilfreichste Antwort von der Community zu erhalten, geben Sie präzise und detaillierte Informationen zu Ihrem Problem und etwaigen Fehlermeldungen an. Fügen Sie relevante Codeausschnitte bei, die erklären, wie das Problem reproduziert werden kann.`

/**
* @param {{  }} i
*/
export const support_policy_team_participation = (i) => `Beachten Sie, dass die Mitglieder des Capgo-Teams nach eigenem Ermessen an Community-Kanälen teilnehmen können, jedoch keine Garantie für eine Antwort besteht, es sei denn, sie werden über offizielle Kanäle eingereicht.`

/**
* @param {{  }} i
*/
export const support_policy_sla_title = (i) => `Dienstleistungsvereinbarung`

/**
* @param {{  }} i
*/
export const support_policy_sla_desc = (i) => `Service Level Agreements sind nur für Unternehmenskunden verfügbar. Die SLA-Details, einschließlich der Reaktionszeiten des Supports, finden Sie auf unserer speziellen SLA-Seite:`

/**
* @param {{  }} i
*/
export const support_policy_proactive_monitoring_title = (i) => `Proaktive Überwachung`

/**
* @param {{  }} i
*/
export const support_policy_proactive_monitoring_desc = (i) => `Im Falle eines Plattformproblems werden wir eine Mitteilung auf unserer Status-Seite unter status.capgo.app veröffentlichen, um schnell die Auswirkungen und den Status zu kommunizieren. Sie müssen kein Support-Ticket für laufende Plattformprobleme einreichen. Stattdessen sollten Sie die Statusseite für die neuesten Updates und Informationen im Auge behalten.`

/**
* @param {{  }} i
*/
export const support_policy_premium_support_title = (i) => `Premium-Support`

/**
* @param {{  }} i
*/
export const support_policy_premium_support_desc = (i) => `Um mehr über unsere Premium-Support-Optionen für Team- und Enterprise-Kunden zu erfahren, kontaktieren Sie uns bitte über das untenstehende Formular:`

/**
* @param {{  }} i
*/
export const disclaimer_title = (i) => `Haftungsausschluss`

/**
* @param {{  }} i
*/
export const disclaimer_last_updated = (i) => `Letzte Aktualisierung: 28. Januar 2022`

/**
* @param {{  }} i
*/
export const interpretation_and_definitions_title = (i) => `Interpretation und Definitionen`

/**
* @param {{  }} i
*/
export const interpretation_title = (i) => `Interpretation`

/**
* @param {{  }} i
*/
export const interpretation_text = (i) => `Die Wörter, deren Anfangsbuchstabe großgeschrieben ist, haben Bedeutungen, die unter den folgenden Bedingungen definiert sind. Die folgenden Definitionen haben unabhängig davon, ob sie im Singular oder Plural erscheinen, die gleiche Bedeutung.`

/**
* @param {{  }} i
*/
export const definitions_title = (i) => `Definitionen`

/**
* @param {{  }} i
*/
export const definitions_purpose = (i) => `Für die Zwecke dieses Haftungsausschlusses:`

/**
* @param {{  }} i
*/
export const company_definition = (i) => `<strong>Unternehmen</strong> (im Folgenden entweder "das Unternehmen", "Wir", "Uns" oder "Unser" in diesem Haftungsausschluss genannt) bezieht sich auf Digital Shift OU, 6 sepapaja, 15510 Tallinn.`

/**
* @param {{  }} i
*/
export const service_definition = (i) => `<strong>Service</strong> bezieht sich auf die Anwendung.`

/**
* @param {{  }} i
*/
export const you_definition = (i) => `<strong>Sie</strong> bezeichnet die Person, die auf den Dienst zugreift, oder das Unternehmen oder eine andere juristische Person, in deren Namen diese Person auf den Dienst zugreift oder ihn nutzt, sofern zutreffend.`

/**
* @param {{ { brand : NonNullable<unknown> }} i
*/
export const application_definition = (i) => `<strong>Anwendung</strong> bezeichnet das von der Firma bereitgestellte Softwareprogramm, das von Ihnen auf einem elektronischen Gerät mit dem Namen ${i['{ brand ']}} heruntergeladen wurde.`

/**
* @param {{  }} i
*/
export const disclaimer_text = (i) => `Die Informationen, die im Dienst enthalten sind, dienen nur allgemeinen Informationszwecken.`

/**
* @param {{  }} i
*/
export const company_no_responsibility = (i) => `Das Unternehmen übernimmt keine Verantwortung für Fehler oder Auslassungen im Inhalt des Dienstes.`

/**
* @param {{  }} i
*/
export const company_no_liability = (i) => `In keinem Fall haftet das Unternehmen für spezielle, direkte, indirekte, Folgeschäden oder zufällige Schäden oder für sonstige Schäden jeglicher Art, sei es in einer Klage wegen Vertragsverletzung, Fahrlässigkeit oder sonstigem Delikt, die aus oder im Zusammenhang mit der Nutzung des Dienstes oder den Inhalten des Dienstes entstehen. Das Unternehmen behält sich das Recht vor, jederzeit ohne vorherige Ankündigung Ergänzungen, Streichungen oder Änderungen an den Inhalten des Dienstes vorzunehmen. Dieser Haftungsausschluss wurde mit Hilfe der <a href="https://www.termsfeed.com/blog/sample-disclaimer-template/" target="_blank">Haftungsausschluss-Vorlage</a> erstellt.`

/**
* @param {{  }} i
*/
export const no_virus_warranty = (i) => `Das Unternehmen garantiert nicht, dass der Dienst viren- oder andere schädliche Komponenten frei ist.`

/**
* @param {{  }} i
*/
export const external_links_disclaimer_title = (i) => `Haftungsausschluss für externe Links`

/**
* @param {{  }} i
*/
export const external_links_disclaimer_text = (i) => `Der Dienst kann Links zu externen Websites enthalten, die nicht von der Gesellschaft bereitgestellt oder gewartet werden oder in irgendeiner Weise mit ihr verbunden sind.`

/**
* @param {{  }} i
*/
export const external_links_no_guarantee = (i) => `Bitte beachten Sie, dass das Unternehmen keine Garantie für die Genauigkeit, Relevanz, Aktualität oder Vollständigkeit von Informationen auf diesen externen Websites übernimmt.`

/**
* @param {{  }} i
*/
export const errors_and_omissions_disclaimer_title = (i) => `Fehler- und Auslassungsausschluss`

/**
* @param {{  }} i
*/
export const errors_and_omissions_disclaimer_text = (i) => `Die von dem Service bereitgestellten Informationen dienen ausschließlich der allgemeinen Orientierung zu interessierenden Themen. Selbst wenn das Unternehmen alle Vorkehrungen trifft, um sicherzustellen, dass der Inhalt des Services sowohl aktuell als auch genau ist, können Fehler auftreten. Zudem kann es aufgrund der sich ändernden Natur von Gesetzen, Vorschriften und Regelungen zu Verzögerungen, Auslassungen oder Ungenauigkeiten in den Informationen kommen, die im Service enthalten sind.`

/**
* @param {{  }} i
*/
export const company_not_responsible = (i) => `Das Unternehmen übernimmt keine Verantwortung für etwaige Fehler oder Auslassungen oder für die Ergebnisse, die aus der Nutzung dieser Informationen resultieren.`

/**
* @param {{  }} i
*/
export const fair_use_disclaimer_title = (i) => `Fair-Use-Haftungsausschluss`

/**
* @param {{  }} i
*/
export const fair_use_disclaimer_text = (i) => `Das Unternehmen kann urheberrechtlich geschütztes Material verwenden, das nicht immer ausdrücklich vom Urheberrechtsinhaber autorisiert wurde. Das Unternehmen stellt solches Material für Kritik, Kommentare, Nachrichtenberichte, Lehre, Wissenschaft oder Forschung zur Verfügung.`

/**
* @param {{  }} i
*/
export const fair_use_belief = (i) => `Die Gesellschaft ist der Ansicht, dass dies eine "faire Nutzung" von urheberrechtlich geschütztem Material darstellt, wie in Abschnitt 107 des US-Urheberrechtsgesetzes vorgesehen.`

/**
* @param {{  }} i
*/
export const copyright_permission = (i) => `Wenn Sie Materialien, die urheberrechtlich geschützt sind, aus dem Dienst für Ihre eigenen Zwecke verwenden möchten, die über die faire Nutzung hinausgehen, müssen Sie die Genehmigung des Urheberrechtsinhabers einholen.`

/**
* @param {{  }} i
*/
export const views_expressed_disclaimer_title = (i) => `Haftungsausschluss zu geäußerten Ansichten`

/**
* @param {{  }} i
*/
export const views_expressed_disclaimer_text = (i) => `Der Service kann Ansichten und Meinungen enthalten, die die der Autoren sind und nicht unbedingt die offizielle Politik oder Position eines anderen Autors, einer Agentur, Organisation, Arbeitgebers oder Unternehmens, einschließlich des Unternehmens, widerspiegeln.`

/**
* @param {{  }} i
*/
export const user_comments_responsibility = (i) => `Kommentare, die von Benutzern veröffentlicht werden, liegen in deren alleiniger Verantwortung, und die Benutzer übernehmen die volle Verantwortung, Haftung und Schuld für jegliche Verleumdung oder Rechtsstreitigkeiten, die sich aus einem in einem Kommentar Geschriebenen oder als unmittelbare Folge von etwas, das in einem Kommentar geschrieben wurde, ergeben. Das Unternehmen ist nicht haftbar für Kommentare, die von Benutzern veröffentlicht werden, und behält sich das Recht vor, jeden Kommentar aus beliebigen Gründen zu löschen.`

/**
* @param {{  }} i
*/
export const no_responsibility_disclaimer_title = (i) => `Keine Haftungsausschluss`

/**
* @param {{  }} i
*/
export const no_responsibility_disclaimer_text = (i) => `Die Informationen über den Service werden mit dem Verständnis bereitgestellt, dass das Unternehmen hierin nicht an der Erbringung von rechtlichen, steuerlichen, buchhalterischen oder anderen professionellen Beratungen und Dienstleistungen beteiligt ist. Daher sollten sie nicht als Ersatz für eine Beratung durch professionelle Buchhalter, Steuerberater, Juristen oder andere kompetente Berater verwendet werden.`

/**
* @param {{  }} i
*/
export const company_no_liability_for_access = (i) => `In keinem Fall haften die Gesellschaft oder ihre Lieferanten für besondere, zufällige, indirekte oder Folgeschäden, die aus oder im Zusammenhang mit Ihrem Zugriff auf oder der Nutzung oder Unfähigkeit zum Zugriff auf oder zur Nutzung des Dienstes entstehen.`

/**
* @param {{  }} i
*/
export const use_at_your_own_risk_disclaimer_title = (i) => `"Benutzen auf eigene Gefahr" Haftungsausschluss`

/**
* @param {{  }} i
*/
export const use_at_your_own_risk_disclaimer_text = (i) => `Alle Informationen im Dienst werden "wie sie sind" bereitgestellt, ohne Gewähr für Vollständigkeit, Genauigkeit, Aktualität oder die Ergebnisse, die aus der Nutzung dieser Informationen erzielt werden, und ohne jegliche Art von Gewährleistung, weder ausdrücklich noch stillschweigend, einschließlich, aber nicht beschränkt auf Gewährleistungen für die Leistung, Marktfähigkeit und Eignung für einen bestimmten Zweck.`

/**
* @param {{  }} i
*/
export const company_no_liability_for_decisions = (i) => `Das Unternehmen haftet Ihnen oder einer anderen Person nicht für Entscheidungen, die auf Informationen beruhen, die von dem Dienst bereitgestellt wurden, oder für Folgeschäden, besondere oder ähnliche Schäden, selbst wenn auf die Möglichkeit solcher Schäden hingewiesen wurde.`

/**
* @param {{  }} i
*/
export const contact_us_title = (i) => `Kontaktieren Sie uns`

/**
* @param {{  }} i
*/
export const contact_us_text = (i) => `Wenn Sie Fragen zu diesem Haftungsausschluss haben, können Sie uns kontaktieren:`

/**
* @param {{  }} i
*/
export const contact_us_website = (i) => `Indem Sie diese Seite auf der Website besuchen:`

/**
* @param {{  }} i
*/
export const trust_capgo_security = (i) => `Capgo Sicherheit.`

/**
* @param {{  }} i
*/
export const trust_move_forward_with_confidence = (i) => `Gehen Sie mit Zuversicht voran. Wir bieten mehrere Schutzstufen an, um Ihr geistiges Eigentum und sensible Daten zu sichern.`

/**
* @param {{  }} i
*/
export const trust_product_security = (i) => `Produktsicherheit`

/**
* @param {{  }} i
*/
export const trust_source_code_protection = (i) => `Quellcode-Schutz`

/**
* @param {{  }} i
*/
export const trust_source_code_vulnerabilities = (i) => `Der Quellcode wird kontinuierlich auf Schwachstellen mit Sink Inspector überprüft.`

/**
* @param {{  }} i
*/
export const trust_data_security = (i) => `Datensicherheit`

/**
* @param {{  }} i
*/
export const trust_encryption_communication = (i) => `Verschlüsselte Kommunikation`

/**
* @param {{  }} i
*/
export const trust_data_traffic_encrypted = (i) => `Alle Datenübertragungen werden über TLS und HTTPS verschlüsselt.`

/**
* @param {{  }} i
*/
export const trust_source_code_encryption = (i) => `Quellcode-Verschlüsselung`

/**
* @param {{  }} i
*/
export const trust_source_code_encrypted_in_transit = (i) => `Der Quellcode ist während der Übertragung stets durch TLS und HTTPS verschlüsselt.`

/**
* @param {{  }} i
*/
export const trust_data_backup = (i) => `Datenbackup`

/**
* @param {{  }} i
*/
export const trust_data_backup_policy = (i) => `Capgo verfolgt eine Datensicherungsrichtlinie, die den besten Branchenpraktiken entspricht.`

/**
* @param {{  }} i
*/
export const trust_network_security = (i) => `Netzwerksicherheit`

/**
* @param {{  }} i
*/
export const trust_architecture = (i) => `Architektur`

/**
* @param {{  }} i
*/
export const trust_architecture_layers = (i) => `Die Architektur von Capgo besteht aus mehreren sicheren Netzwerkschichten.`

/**
* @param {{  }} i
*/
export const trust_application_security = (i) => `Anwendungssicherheit`

/**
* @param {{  }} i
*/
export const trust_secure_coding = (i) => `Sichere Programmierung`

/**
* @param {{  }} i
*/
export const trust_code_review = (i) => `Änderungen, die in die Produktion überführt werden, müssen zuerst überprüft und genehmigt werden. Code-Refactoring muss den Prinzipien sicherer Programmierung und den besten Praktiken der Branche entsprechen, wie sie von OWASP definiert sind.`

/**
* @param {{  }} i
*/
export const trust_site_reliability = (i) => `Standortsicherheit`

/**
* @param {{  }} i
*/
export const trust_serverless_infrastructure = (i) => `Capgo nutzt 100% serverlose Infrastruktur und hat historisch eine Betriebszeit von 99,9% erreicht. Hier den Status einsehen.`

/**
* @param {{  }} i
*/
export const trust_application_penetration_testing = (i) => `Anwendungssicherheitstests`

/**
* @param {{  }} i
*/
export const trust_third_party_testing = (i) => `Capgo wird regelmäßig von externen Penetrationstestern getestet, um die Sicherheit der Anwendung zu gewährleisten.`

/**
* @param {{  }} i
*/
export const trust_business_security = (i) => `Geschäftssicherheit`

/**
* @param {{  }} i
*/
export const trust_background_checks = (i) => `Hintergrundüberprüfungen`

/**
* @param {{  }} i
*/
export const trust_access_to_production_database = (i) => `Capgo hat keine Mitarbeiter und wird niemals welche haben, nur eine Person, Martin Donadieu, hat Zugang zur Produktionsdatenbank. Freiberufler oder Open-Source-Beiträger dürfen keinen Zugang zur Produktionsdatenbank haben.`

/**
* @param {{  }} i
*/
export const trust_security_awareness = (i) => `Sicherheitsbewusstsein`

/**
* @param {{  }} i
*/
export const trust_security_training = (i) => `Capgo-Gründer legen Wert auf Sicherheitsbewusstsein, bewährte Verfahren und Schulungen zur Vorfallreaktion.`

/**
* @param {{  }} i
*/
export const trust_security_coding_education = (i) => `Sicherheitskodierungsbildung`

/**
* @param {{  }} i
*/
export const trust_open_source_security = (i) => `Capgo, da es zu 100 % quelloffen ist, wird geführt, um die Sicherheit mit der Gemeinschaft zu verbessern.`

/**
* @param {{  }} i
*/
export const trust_partner_management = (i) => `Partnerverwaltung`

/**
* @param {{  }} i
*/
export const trust_soc2_certification = (i) => `Capgo verlangt von allen kritischen Drittanbietern, mindestens die SOC 2-Zertifizierung zu erreichen, und überprüft die Zertifizierungen jährlich.`

/**
* @param {{  }} i
*/
export const trust_incident_response = (i) => `Vorfallreaktion`

/**
* @param {{  }} i
*/
export const trust_dedicated_incident_response = (i) => `Capgo steht bereit mit einer dedizierten Vorfallreaktionsperson.`

/**
* @param {{  }} i
*/
export const trust_incident_response_policy_plan = (i) => `Vorfallreaktionsrichtlinie & -plan`

/**
* @param {{  }} i
*/
export const trust_incident_response_policy = (i) => `Eine Richtlinie zur Vorfallreaktion wird von einer dedizierten Person für die Vorfallreaktion bei Capgo verwaltet und gepflegt.`

/**
* @param {{  }} i
*/
export const trust_communication = (i) => `Kommunikation`

/**
* @param {{  }} i
*/
export const trust_system_wide_issues_notification = (i) => `Im Falle systemweiter Probleme werden die Kunden per E-Mail benachrichtigt. Der Systemstatus von Capgo sowie Netzwerk- und Sicherheitsvorfälle werden unter https://status.capgo.app veröffentlicht.`

/**
* @param {{  }} i
*/
export const tos_title = (i) => `Allgemeine Geschäftsbedingungen`

/**
* @param {{  }} i
*/
export const tos_last_updated = (i) => `Zuletzt aktualisiert: 12. Januar 2022`

/**
* @param {{  }} i
*/
export const tos_please_read = (i) => `Bitte lesen Sie diese Allgemeinen Geschäftsbedingungen sorgfältig durch, bevor Sie unseren Service nutzen.`

/**
* @param {{  }} i
*/
export const tos_interpretation_title = (i) => `Interpretation und Definitionen`

/**
* @param {{  }} i
*/
export const tos_interpretation_subtitle = (i) => `Interpretation`

/**
* @param {{  }} i
*/
export const tos_interpretation_text = (i) => `Die Wörter, deren Anfangsbuchstabe großgeschrieben ist, haben Bedeutungen, die unter den folgenden Bedingungen definiert sind. Die folgenden Definitionen haben dieselbe Bedeutung, unabhängig davon, ob sie im Singular oder im Plural erscheinen.`

/**
* @param {{  }} i
*/
export const tos_definitions_subtitle = (i) => `Definitionen`

/**
* @param {{  }} i
*/
export const tos_definitions_intro = (i) => `Für die Zwecke dieser Allgemeinen Geschäftsbedingungen:`

/**
* @param {{  }} i
*/
export const tos_definition_application = (i) => `Anwendung bedeutet das von der Firma bereitgestellte Softwareprogramm, das Sie auf ein beliebiges elektronisches Gerät heruntergeladen haben, mit dem Namen $1.`

/**
* @param {{  }} i
*/
export const tos_definition_application_store = (i) => `Anwendungsstore bezeichnet den digitalen Vertriebsdienst, der von Apple Inc. (Apple App Store) oder Google Inc. (Google Play Store) betrieben und entwickelt wird, in dem die Anwendung heruntergeladen wurde.`

/**
* @param {{  }} i
*/
export const tos_definition_affiliate = (i) => `Affiliate bedeutet eine Einheit, die eine Partei kontrolliert, von einer Partei kontrolliert wird oder unter gemeinsamer Kontrolle mit einer Partei steht, wobei "Kontrolle" den Besitz von 50 % oder mehr der Anteile, Eigenkapitalinteressen oder anderer Wertpapiere, die zum Wählen von Direktoren oder einer anderen Verwaltungsbehörde berechtigen, bedeutet.`

/**
* @param {{  }} i
*/
export const tos_definition_account = (i) => `Konto bezeichnet ein einzigartiges Konto, das für Sie erstellt wurde, um auf unseren Dienst oder Teile unseres Dienstes zuzugreifen.`

/**
* @param {{  }} i
*/
export const tos_definition_country = (i) => `Land bezieht sich auf: Estland`

/**
* @param {{  }} i
*/
export const tos_definition_company = (i) => `Unternehmen (in dieser Vereinbarung auch als „das Unternehmen“, „wir“, „uns“ oder „unser“ bezeichnet) bezieht sich auf Digital shift OU, Sepapaja 6, 15551, Tallinn, Estland.`

/**
* @param {{  }} i
*/
export const tos_definition_device = (i) => `Gerät bedeutet jedes Gerät, das auf den Dienst zugreifen kann, wie z. B. ein Computer, ein Handy oder ein digitales Tablet.`

/**
* @param {{  }} i
*/
export const tos_definition_feedback = (i) => `Feedback bedeutet Feedback, Innovationen oder Vorschläge, die Sie bezüglich der Eigenschaften, der Leistung oder der Funktionen unseres Dienstes senden.`

/**
* @param {{  }} i
*/
export const tos_definition_free_trial = (i) => `Die Testversion bezieht sich auf einen begrenzten Zeitraum, der beim Kauf eines Abonnements kostenlos sein kann.`

/**
* @param {{  }} i
*/
export const tos_definition_in_app_purchase = (i) => `In-App-Käufe beziehen sich auf den Kauf eines Produkts, Artikels, einer Dienstleistung oder eines Abonnements, das über die Anwendung getätigt wird und den vorliegenden Allgemeinen Geschäftsbedingungen und/oder den eigenen Geschäftsbedingungen des App-Stores unterliegt.`

/**
* @param {{  }} i
*/
export const tos_definition_service = (i) => `Der Dienst bezieht sich auf die Anwendung.`

/**
* @param {{  }} i
*/
export const tos_definition_subscriptions = (i) => `Abonnements beziehen sich auf die von der Firma Ihnen angebotenen Dienstleistungen oder den Zugang zum Dienst auf Abonnementbasis.`

/**
* @param {{  }} i
*/
export const tos_definition_terms = (i) => `Allgemeine Geschäftsbedingungen (auch als "AGB" bezeichnet) sind diese Allgemeinen Geschäftsbedingungen, die die gesamte Vereinbarung zwischen Ihnen und dem Unternehmen bezüglich der Nutzung des Dienstes bilden.`

/**
* @param {{  }} i
*/
export const tos_definition_third_party_social_media = (i) => `Drittanbieter-Soziale-Medien-Dienste beziehen sich auf alle Dienstleistungen oder Inhalte (einschließlich Daten, Informationen, Produkte oder Dienstleistungen), die von einem Drittanbieter bereitgestellt werden und die durch den Dienst angezeigt, eingeschlossen oder verfügbar gemacht werden können.`

/**
* @param {{  }} i
*/
export const tos_definition_you = (i) => `Sie bezeichnen die Einzelperson, die auf den Service zugreift oder ihn nutzt, oder das Unternehmen oder eine andere rechtliche Einheit, in deren Namen diese Einzelperson auf den Service zugreift oder ihn nutzt, je nach Anwendbarkeit.`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_title = (i) => `Anerkennung`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_text_1 = (i) => `Dies sind die Allgemeinen Geschäftsbedingungen, die die Nutzung dieses Dienstes regeln und die Vereinbarung darstellen, die zwischen Ihnen und dem Unternehmen besteht. Diese Allgemeinen Geschäftsbedingungen legen die Rechte und Pflichten aller Nutzer in Bezug auf die Nutzung des Dienstes fest.`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_text_2 = (i) => `Ihr Zugriff auf und die Nutzung des Dienstes ist an Ihre Annahme und Einhaltung dieser Allgemeinen Geschäftsbedingungen gebunden. Diese Allgemeinen Geschäftsbedingungen gelten für alle Besucher, Nutzer und andere, die auf den Dienst zugreifen oder ihn nutzen.`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_text_3 = (i) => `Indem Sie auf den Dienst zugreifen oder ihn nutzen, stimmen Sie zu, an diese Allgemeinen Geschäftsbedingungen gebunden zu sein. Wenn Sie mit einem Teil dieser Allgemeinen Geschäftsbedingungen nicht einverstanden sind, dürfen Sie nicht auf den Dienst zugreifen.`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_text_4 = (i) => `Sie bestätigen, dass Sie über 18 Jahre alt sind. Das Unternehmen gestattet es Personen unter 18 Jahren nicht, den Dienst zu nutzen.`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_text_5 = (i) => `Ihr Zugriff auf und Ihre Nutzung des Dienstes ist ebenfalls von Ihrer Akzeptanz und Einhaltung der Datenschutzrichtlinien des Unternehmens abhängig. Unsere Datenschutzrichtlinie beschreibt unsere Richtlinien und Verfahren zur Erfassung, Nutzung und Offenlegung Ihrer persönlichen Informationen, wenn Sie die Anwendung oder die Website verwenden, und informiert Sie über Ihre Datenschutzrechte und wie das Gesetz Sie schützt. Bitte lesen Sie unsere Datenschutzrichtlinie sorgfältig durch, bevor Sie unseren Dienst nutzen.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_title = (i) => `Abonnements`

/**
* @param {{  }} i
*/
export const tos_subscriptions_period_subtitle = (i) => `Abonnementzeitraum`

/**
* @param {{  }} i
*/
export const tos_subscriptions_period_text_1 = (i) => `Der Dienst oder Teile des Dienstes sind nur mit einem kostenpflichtigen Abonnement verfügbar. Sie werden im Voraus auf wiederkehrender und periodischer Basis (wie täglich, wöchentlich, monatlich oder jährlich) in Rechnung gestellt, abhängig von der Art des Abonnementplans, den Sie beim Kauf des Abonnements auswählen.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_period_text_2 = (i) => `Am Ende jedes Zeitraums wird Ihr Abonnement automatisch zu den gleichen Bedingungen erneuert, es sei denn, Sie kündigen es oder das Unternehmen kündigt es.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_cancellations_subtitle = (i) => `Abonnementskündigungen`

/**
* @param {{  }} i
*/
export const tos_subscriptions_cancellations_text_1 = (i) => `Sie können die Verlängerung Ihres Abonnements entweder über die Einstellungen Ihres Kontos oder durch Kontaktaufnahme mit dem Unternehmen stornieren. Sie erhalten keine Rückerstattung für die Gebühren, die Sie bereits für Ihren aktuellen Abonnementzeitraum bezahlt haben, und Sie können den Dienst bis zum Ende Ihres aktuellen Abonnementzeitraums weiterhin nutzen.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_cancellations_text_2 = (i) => `Wenn das Abonnement über einen In-App-Kauf abgeschlossen wurde, können Sie die Verlängerung Ihres Abonnements im App Store kündigen.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_billing_subtitle = (i) => `Abrechnung`

/**
* @param {{  }} i
*/
export const tos_subscriptions_billing_text_1 = (i) => `Sie müssen der Firma genaue und vollständige Rechnungsinformationen zur Verfügung stellen, einschließlich vollständigem Namen, Adresse, Bundesland, Postleitzahl, Telefonnummer und gültigen Zahlungsmethodeninformationen.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_billing_text_2 = (i) => `Sollte die automatische Abrechnung aus irgendeinem Grund fehlschlagen, wird das Unternehmen eine elektronische Rechnung ausstellen, die besagt, dass Sie manuell innerhalb eines bestimmten Fristdatums die vollständige Zahlung leisten müssen, die dem Abrechnungszeitraum entspricht, der auf der Rechnung angegeben ist.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_billing_text_3 = (i) => `Wenn das Abonnement über einen In-App-Kauf abgeschlossen wurde, erfolgt die Abrechnung über den App Store und unterliegt den eigenen Geschäftsbedingungen des App Stores.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_fee_changes_subtitle = (i) => `Änderungen der Gebühren`

/**
* @param {{  }} i
*/
export const tos_subscriptions_fee_changes_text_1 = (i) => `Das Unternehmen kann nach eigenem Ermessen und jederzeit die Abonnementgebühren ändern. Jede Änderung der Abonnementgebühr tritt am Ende des aktuellen Abonnementzeitraums in Kraft.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_fee_changes_text_2 = (i) => `Die Gesellschaft wird Sie mit angemessener Vorankündigung über Änderungen der Abonnementgebühren informieren, um Ihnen die Möglichkeit zu geben, Ihr Abonnement zu kündigen, bevor diese Änderung wirksam wird.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_fee_changes_text_3 = (i) => `Ihre fortgesetzte Nutzung des Dienstes, nachdem die Änderung der Abonnementgebühr in Kraft tritt, stellt Ihre Zustimmung zur Zahlung des modifizierten Abonnementgebührbetrags dar.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_refunds_subtitle = (i) => `Rückerstattungen`

/**
* @param {{  }} i
*/
export const tos_subscriptions_refunds_text_1 = (i) => `Es sei denn, dies ist gesetzlich vorgeschrieben, sind die gezahlten Abonnementgebühren nicht rückerstattbar.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_refunds_text_2 = (i) => `Bestimmte Rückerstattungsanträge für Abonnements können von der Firma fallweise geprüft und nach alleinigem Ermessen der Firma gewährt werden.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_refunds_text_3 = (i) => `Wenn das Abonnement über einen In-App-Kauf abgeschlossen wurde, gilt die Rückerstattungsrichtlinie des App Stores. Wenn Sie eine Rückerstattung beantragen möchten, können Sie dies tun, indem Sie sich direkt an den App Store wenden.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_free_trial_subtitle = (i) => `Kostenlose Testversion`

/**
* @param {{  }} i
*/
export const tos_subscriptions_free_trial_text_1 = (i) => `Das Unternehmen kann nach eigenem Ermessen ein Abonnement mit einer kostenlosen Testphase für einen begrenzten Zeitraum anbieten.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_free_trial_text_2 = (i) => `Möglicherweise müssen Sie Ihre Rechnungsinformationen eingeben, um sich für die kostenlose Testversion anzumelden.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_free_trial_text_3 = (i) => `Wenn Sie Ihre Zahlungsinformationen bei der Anmeldung für eine kostenlose Testversion eingeben, werden Ihnen von der Firma keine Kosten in Rechnung gestellt, bis die Testversion abgelaufen ist. Am letzten Tag des Testzeitraums, es sei denn, Sie haben Ihr Abonnement gekündigt, werden Ihnen automatisch die geltenden Abonnementgebühren für die von Ihnen ausgewählte Abonnementart in Rechnung gestellt.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_free_trial_text_4 = (i) => `Zu jeder Zeit und ohne vorherige Ankündigung behält sich das Unternehmen das Recht vor, (i) die Bedingungen des Angebots für die kostenlose Testversion zu ändern oder (ii) ein solches Angebot für die kostenlose Testversion zu stornieren.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_title = (i) => `In-App-Käufe`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_1 = (i) => `Die Anwendung kann In-App-Käufe enthalten, mit denen Sie Produkte, Dienstleistungen oder Abonnements kaufen können.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_2 = (i) => `Weitere Informationen darüber, wie Sie In-App-Käufe mit Ihrem Gerät verwalten können, finden Sie möglicherweise in den eigenen Geschäftsbedingungen des App-Stores oder in den Hilfeseinstellungen Ihres Geräts.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_3 = (i) => `In-App-Käufe können nur innerhalb der Anwendung verwendet werden. Wenn Sie einen In-App-Kauf tätigen, kann dieser In-App-Kauf nicht storniert werden, nachdem Sie den Download gestartet haben. In-App-Käufe können nicht gegen Bargeld oder andere Gegenleistungen eingelöst oder auf andere Weise übertragen werden.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_4 = (i) => `Wenn ein In-App-Kauf nicht erfolgreich heruntergeladen wird oder nicht funktioniert, nachdem er erfolgreich heruntergeladen wurde, werden wir, nachdem wir von dem Fehler erfahren oder von Ihnen über den Fehler informiert wurden, den Grund für den Fehler untersuchen. Wir werden in angemessener Weise entscheiden, ob wir Ihnen einen Ersatz-In-App-Kauf zur Verfügung stellen oder Ihnen einen Patch zur Behebung des Fehlers ausstellen. In keinem Fall werden wir Ihnen Gebühren für den Ersatz oder die Reparatur des In-App-Kaufs berechnen. Im unwahrscheinlichen Fall, dass wir den entsprechenden In-App-Kauf nicht ersetzen oder reparieren können oder dies nicht innerhalb eines angemessenen Zeitraums und ohne erhebliches Unbehagen für Sie tun können, werden wir den Anwendungsstore autorisieren, Ihnen einen Betrag bis zur Höhe der Kosten des entsprechenden In-App-Kaufs zu erstatten. Alternativ können Sie, wenn Sie eine Rückerstattung beantragen möchten, dies tun, indem Sie sich direkt an den Anwendungsstore wenden.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_5 = (i) => `Sie erkennen an und stimmen zu, dass alle Abrechnungs- und Transaktionsprozesse vom App Store, von dem Sie die Anwendung heruntergeladen haben, abgewickelt werden und von den eigenen Geschäftsbedingungen dieses App Stores geregelt sind.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_6 = (i) => `Wenn Sie Probleme mit Zahlungen im Zusammenhang mit In-App-Käufen haben, müssen Sie sich direkt an den Anwendungsspeicher wenden.`

/**
* @param {{  }} i
*/
export const tos_user_accounts_title = (i) => `Benutzerkonten`

/**
* @param {{  }} i
*/
export const tos_user_accounts_text_1 = (i) => `Wenn Sie ein Konto bei uns erstellen, müssen Sie uns Informationen bereitstellen, die jederzeit genau, vollständig und aktuell sind. Ein Versäumnis stellt einen Verstoß gegen die Bedingungen dar, was zur sofortigen Kündigung Ihres Kontos bei unserem Dienst führen kann.`

/**
* @param {{  }} i
*/
export const tos_user_accounts_text_2 = (i) => `Sie sind verantwortlich für die Sicherung des Passworts, das Sie verwenden, um auf den Dienst zuzugreifen, und für alle Aktivitäten oder Handlungen unter Ihrem Passwort, egal ob Ihr Passwort bei unserem Dienst oder einem Drittanbieter-Sozialmediendienst verwendet wird.`

/**
* @param {{  }} i
*/
export const tos_user_accounts_text_3 = (i) => `Sie stimmen zu, Ihr Passwort nicht an Dritte weiterzugeben. Sie müssen uns unverzüglich benachrichtigen, sobald Sie von einem Sicherheitsvorfall oder einer unbefugten Nutzung Ihres Kontos erfahren.`

/**
* @param {{  }} i
*/
export const tos_user_accounts_text_4 = (i) => `Sie dürfen nicht als Benutzernamen den Namen einer anderen Person oder Entität verwenden, der nicht rechtmäßig zur Verwendung verfügbar ist, einen Namen oder ein Markenzeichen, das den Rechten einer anderen Person oder Entität unterliegt, die nicht Sie sind, ohne entsprechende Genehmigung, oder einen Namen, der anderweitig anstößig, vulgär oder obszön ist.`

/**
* @param {{  }} i
*/
export const tos_intellectual_property_title = (i) => `Geistiges Eigentum`

/**
* @param {{  }} i
*/
export const tos_intellectual_property_text_1 = (i) => `Die Dienste und deren ursprüngliche Inhalte (mit Ausnahme von Inhalten, die von Ihnen oder anderen Nutzern bereitgestellt werden), Funktionen und Funktionalitäten sind und bleiben das ausschließliche Eigentum des Unternehmens und seiner Lizenzgeber.`

/**
* @param {{  }} i
*/
export const tos_intellectual_property_text_2 = (i) => `Der Dienst ist durch Urheberrecht, Markenrecht und andere Gesetze sowohl des Landes als auch ausländischer Länder geschützt.`

/**
* @param {{  }} i
*/
export const tos_intellectual_property_text_3 = (i) => `Unsere Marken und das Erscheinungsbild dürfen nicht in Verbindung mit irgendwelchen Produkten oder Dienstleistungen ohne die vorherige schriftliche Zustimmung des Unternehmens verwendet werden.`

/**
* @param {{  }} i
*/
export const tos_your_feedback_title = (i) => `Ihr Feedback an uns`

/**
* @param {{  }} i
*/
export const tos_your_feedback_text = (i) => `Sie übertragen alle Rechte, Titel und Interessen an jeglichem Feedback, das Sie dem Unternehmen bereitstellen. Sollte diese Übertragung aus irgendeinem Grund unwirksam sein, stimmen Sie zu, dem Unternehmen ein nicht-exklusives, perpetuelles, unwiderrufliches, lizenzfreies, weltweites Recht und eine Lizenz zu gewähren, um dieses Feedback ohne Einschränkungen zu verwenden, zu reproduzieren, offenzulegen, unterzulizenzieren, zu verteilen, zu modifizieren und auszuwerten.`

/**
* @param {{  }} i
*/
export const tos_links_to_other_websites_title = (i) => `Links zu anderen Webseiten`

/**
* @param {{  }} i
*/
export const tos_links_to_other_websites_text_1 = (i) => `Unser Service kann Links zu Websites oder Diensten von Drittanbietern enthalten, die nicht im Besitz des Unternehmens sind oder von diesem kontrolliert werden.`

/**
* @param {{  }} i
*/
export const tos_links_to_other_websites_text_2 = (i) => `Die Gesellschaft hat keine Kontrolle über und übernimmt keine Verantwortung für die Inhalte, Datenschutzrichtlinien oder Praktiken von Websites oder Diensten Dritter. Sie erkennen ferner an und stimmen zu, dass die Gesellschaft weder direkt noch indirekt verantwortlich oder haftbar ist für irgendeinen Schaden oder Verlust, der durch oder im Zusammenhang mit der Nutzung oder dem Vertrauen auf solche Inhalte, Waren oder Dienstleistungen, die auf oder über solche Websites oder Dienste verfügbar sind, verursacht wird oder angeblich verursacht werden soll.`

/**
* @param {{  }} i
*/
export const tos_links_to_other_websites_text_3 = (i) => `Wir empfehlen Ihnen dringend, die Allgemeinen Geschäftsbedingungen und Datenschutzrichtlinien von externen Websites oder Diensten, die Sie besuchen, zu lesen.`

/**
* @param {{  }} i
*/
export const tos_termination_title = (i) => `Kündigung`

/**
* @param {{  }} i
*/
export const tos_termination_text_1 = (i) => `Wir können Ihr Konto jederzeit und ohne vorherige Ankündigung oder Haftung aus beliebigen Gründen, einschließlich, aber nicht beschränkt auf, wenn Sie diese Allgemeinen Geschäftsbedingungen verletzen, sofort kündigen oder sperren.`

/**
* @param {{  }} i
*/
export const tos_termination_text_2 = (i) => `Bei der Kündigung erlischt Ihr Recht zur Nutzung des Dienstes sofort. Wenn Sie Ihr Konto kündigen möchten, können Sie einfach die Nutzung des Dienstes einstellen.`

/**
* @param {{  }} i
*/
export const tos_limitation_of_liability_title = (i) => `Haftungsbeschränkung`

/**
* @param {{  }} i
*/
export const tos_limitation_of_liability_text_1 = (i) => `Ungeachtet aller Schäden, die Ihnen entstehen könnten, ist die gesamte Haftung der Gesellschaft und ihrer Zulieferer gemäß einer Bestimmung dieser Bedingungen und Ihr ausschließliches Rechtsmittel für all das Vorangegangene auf den Betrag beschränkt, den Sie tatsächlich über den Dienst bezahlt haben, oder 100 USD, wenn Sie nichts über den Dienst gekauft haben.`

/**
* @param {{  }} i
*/
export const tos_limitation_of_liability_text_2 = (i) => `Soweit dies nach geltendem Recht zulässig ist, haftet die Gesellschaft oder ihre Anbieter in keinem Fall für besondere, zufällige, indirekte oder Folgeschäden jeglicher Art (einschließlich, aber nicht beschränkt auf, Schäden durch Verlust von Gewinnen, Verlust von Daten oder anderen Informationen, Betriebsunterbrechungen, Personenschäden, Verlust der Privatsphäre, die sich aus der Nutzung oder der Unfähigkeit zur Nutzung des Dienstes, von Drittanbietersoftware und/oder Drittanbieterhardware, die mit dem Dienst verwendet wird, oder anderweitig im Zusammenhang mit einer Bestimmung dieser Bedingungen ergibt), selbst wenn die Gesellschaft oder ein Anbieter auf die Möglichkeit solcher Schäden hingewiesen wurde und selbst wenn das Rechtsmittel seinem wesentlichen Zweck nicht gerecht wird.`

/**
* @param {{  }} i
*/
export const tos_limitation_of_liability_text_3 = (i) => `Einige Bundesstaaten erlauben nicht den Ausschluss von stillschweigenden Garantien oder die Begrenzung der Haftung für beiläufige oder Folgeschäden, was bedeutet, dass einige der oben genannten Beschränkungen möglicherweise nicht gelten. In diesen Bundesstaaten wird die Haftung jeder Partei auf das größtmögliche Maß beschränkt, das das Gesetz zulässt.`

/**
* @param {{  }} i
*/
export const tos_disclaimer_title = (i) => `"Wie besehen" und "Wie verfügbar" Haftungsausschluss`

/**
* @param {{  }} i
*/
export const tos_disclaimer_text_1 = (i) => `Der Dienst wird Ihnen "WIE ER IST" und "WIE VERFÜGBAR" und mit allen Fehlern und Mängeln ohne jegliche Gewährleistung bereitgestellt. Soweit es das anwendbare Recht zulässt, lehnt das Unternehmen, sowohl für sich selbst als auch im Namen seiner Tochtergesellschaften sowie seiner und deren jeweiligen Lizenzgeber und Dienstanbieter, ausdrücklich alle Gewährleistungen ab, egal ob ausdrückliche, stillschweigende, gesetzliche oder andere, in Bezug auf den Dienst, einschließlich aller stillschweigenden Gewährleistungen der Handelsüblichkeit, der Eignung für einen bestimmten Zweck, des Eigentums und`

/**
* @param {{  }} i
*/
export const tos_disclaimer_text_2 = (i) => `Ohne die vorstehenden Bestimmungen einzuschränken, gibt weder das Unternehmen noch einer der Anbieter des Unternehmens eine Art von Garantie oder Gewährleistung, weder ausdrücklich noch stillschweigend: (i) hinsichtlich des Betriebs oder der Verfügbarkeit des Dienstes oder der darauf enthaltenen Informationen, Inhalte und Materialien oder Produkte; (ii) dass der Dienst ununterbrochen oder fehlerfrei sein wird; (iii) hinsichtlich der Genauigkeit, Zuverlässigkeit oder Aktualität von Informationen oder Inhalten, die über den Dienst bereitgestellt werden; oder (iv) dass der Dienst, seine Server, die Inhalte oder E-Mails, die im Auftrag des Unternehmens gesendet werden, frei von Viren, Skripten, Trojanischen Pferden, Würmern, Malware, Zeitbomben oder anderen schädlichen Komponenten sind.`

/**
* @param {{  }} i
*/
export const tos_disclaimer_text_3 = (i) => `Einige Rechtsordnungen erlauben die Ausschluss von bestimmten Arten von Garantien oder Einschränkungen der anwendbaren gesetzlichen Rechte eines Verbrauchers nicht, sodass einige oder alle oben genannten Ausschlüsse und Einschränkungen möglicherweise nicht für Sie gelten. In einem solchen Fall werden die in diesem Abschnitt festgelegten Ausschlüsse und Einschränkungen jedoch in dem größtmöglichen Umfang angewendet, der unter dem anwendbaren Recht durchsetzbar ist.`

/**
* @param {{  }} i
*/
export const tos_governing_law_title = (i) => `Geltendes Recht`

/**
* @param {{  }} i
*/
export const tos_governing_law_text = (i) => `Die Gesetze des Landes, mit Ausnahme der Regeln über Konflikte zwischen Gesetzen, regeln diese Bedingungen und Ihre Nutzung des Dienstes. Ihre Nutzung der Anwendung kann ebenfalls anderen lokalen, staatlichen, nationalen oder internationalen Gesetzen unterliegen.`

/**
* @param {{  }} i
*/
export const tos_disputes_resolution_title = (i) => `Streitbeilegung`

/**
* @param {{  }} i
*/
export const tos_disputes_resolution_text = (i) => `Wenn Sie Bedenken oder Streitigkeiten bezüglich des Dienstes haben, stimmen Sie zu, zunächst zu versuchen, die Streitigkeit informell zu klären, indem Sie das Unternehmen kontaktieren.`

/**
* @param {{  }} i
*/
export const tos_eu_users_title = (i) => `Für Benutzer der Europäischen Union (EU)`

/**
* @param {{  }} i
*/
export const tos_eu_users_text = (i) => `Wenn Sie Verbraucher der Europäischen Union sind, profitieren Sie von etwaigen zwingenden Bestimmungen des Rechts des Landes, in dem Sie wohnhaft sind.`

/**
* @param {{  }} i
*/
export const tos_us_federal_government_title = (i) => `Vorschriften zur Endverwendung der Bundesregierung der Vereinigten Staaten`

/**
* @param {{  }} i
*/
export const tos_us_federal_government_text = (i) => `Wenn Sie ein Endbenutzer der US-Bundesregierung sind, ist unser Service ein "Kommerzieller Artikel", wie dieser Begriff in 48 C.F.R. §2.101 definiert ist.`

/**
* @param {{  }} i
*/
export const tos_us_legal_compliance_title = (i) => `Rechtliche Compliance der Vereinigten Staaten`

/**
* @param {{  }} i
*/
export const tos_us_legal_compliance_text = (i) => `Sie erklären und garantieren, dass (i) Sie sich nicht in einem Land befinden, das dem Embargo der US-Regierung unterliegt oder das von der US-Regierung als "terroristisch unterstützend" eingestuft wurde, und (ii) Sie nicht auf einer Liste der US-Regierung von verbotenen oder eingeschränkten Parteien aufgeführt sind.`

/**
* @param {{  }} i
*/
export const tos_severability_waiver_title = (i) => `Teilbarkeit und Verzicht`

/**
* @param {{  }} i
*/
export const tos_severability_subtitle = (i) => `Teilbarkeit`

/**
* @param {{  }} i
*/
export const tos_severability_text = (i) => `Sollte eine Bestimmung dieser Bedingungen als nicht durchsetzbar oder ungültig angesehen werden, wird diese Bestimmung so geändert und ausgelegt, dass die Ziele dieser Bestimmung im größtmöglichen Maße gemäß dem geltenden Recht erreicht werden, und die verbleibenden Bestimmungen bleiben in vollem Umfang in Kraft und wirksam.`

/**
* @param {{  }} i
*/
export const tos_waiver_subtitle = (i) => `Verzicht`

/**
* @param {{  }} i
*/
export const tos_waiver_text = (i) => `Sofern hierin nichts anderes bestimmt ist, hat das Versäumnis, ein Recht auszuüben oder die Erfüllung einer Verpflichtung gemäß diesen Bedingungen zu fordern, keinen Einfluss auf die Fähigkeit einer Partei, dieses Recht zu einem späteren Zeitpunkt auszuüben oder die Erfüllung zu verlangen; ebenso stellt der Verzicht auf einen Verstoß keinen Verzicht auf einen späteren Verstoß dar.`

/**
* @param {{  }} i
*/
export const tos_translation_title = (i) => `Übersetzung Interpretation`

/**
* @param {{  }} i
*/
export const tos_translation_text = (i) => `Diese Allgemeinen Geschäftsbedingungen können übersetzt worden sein, wenn wir sie Ihnen in unserem Dienst zur Verfügung gestellt haben. Sie stimmen zu, dass der ursprüngliche englische Text im Falle eines Streits Vorrang hat.`

/**
* @param {{  }} i
*/
export const tos_changes_title = (i) => `Änderungen dieser Geschäftsbedingungen`

/**
* @param {{  }} i
*/
export const tos_changes_text_1 = (i) => `Wir behalten uns das Recht vor, nach eigenem Ermessen diese Bedingungen jederzeit zu ändern oder zu ersetzen. Wenn eine Änderung wesentlich ist, werden wir angemessene Anstrengungen unternehmen, um mindestens 30 Tage im Voraus über neue Bedingungen zu informieren, bevor diese in Kraft treten. Was eine wesentliche Änderung darstellt, wird nach eigenem Ermessen entschieden.`

/**
* @param {{  }} i
*/
export const tos_changes_text_2 = (i) => `Indem Sie auf unsere Dienste zugreifen oder diese nutzen, nachdem diese Änderungen wirksam werden, stimmen Sie den überarbeiteten Bedingungen zu. Wenn Sie den neuen Bedingungen, ganz oder teilweise, nicht zustimmen, bitte hören Sie auf, die Website und den Dienst zu nutzen.`

/**
* @param {{  }} i
*/
export const tos_contact_us_title = (i) => `Kontaktiere uns`

/**
* @param {{  }} i
*/
export const tos_contact_us_text = (i) => `Wenn Sie Fragen zu diesen Geschäftsbedingungen haben, können Sie uns kontaktieren:`

/**
* @param {{  }} i
*/
export const tos_contact_us_website = (i) => `Durch den Besuch dieser Seite auf der Website:`

/**
* @param {{  }} i
*/
export const return_policy_title = (i) => `Rückgabe- und Erstattungsrichtlinie`

/**
* @param {{  }} i
*/
export const last_updated = (i) => `Letzte Aktualisierung: 28. Januar 2022`

/**
* @param {{  }} i
*/
export const thank_you_for_shopping = (i) => `Vielen Dank für Ihren Einkauf bei $1.`

/**
* @param {{  }} i
*/
export const not_satisfied_policy = (i) => `Wenn Sie aus irgendeinem Grund mit einem Kauf nicht vollständig zufrieden sind, laden wir Sie ein, unsere Richtlinie zu Rückerstattungen und Rückgaben zu überprüfen. Diese Rückgabe- und Rückerstattungsrichtlinie wurde mit Hilfe von der`

/**
* @param {{  }} i
*/
export const policy_generator = (i) => `Rückgabe- und Rückerstattungsrichtlinien-Generator`

/**
* @param {{  }} i
*/
export const terms_applicable = (i) => `Die folgenden Bedingungen gelten für alle Produkte, die Sie bei uns gekauft haben.`

/**
* @param {{  }} i
*/
export const interpretation_and_definitions = (i) => `Interpretation und Definitionen`

/**
* @param {{  }} i
*/
export const interpretation = (i) => `Interpretation`

/**
* @param {{  }} i
*/
export const interpretation_description = (i) => `Die Wörter, deren Anfangsbuchstabe großgeschrieben ist, haben Bedeutungen, die unter den folgenden Bedingungen definiert sind. Die folgenden Definitionen haben unabhängig davon, ob sie im Singular oder Plural erscheinen, die gleiche Bedeutung.`

/**
* @param {{  }} i
*/
export const definitions = (i) => `Definitionen`

/**
* @param {{  }} i
*/
export const definitions_purpose_refund = (i) => `Für die Zwecke dieser Rückgabe- und Rückerstattungsrichtlinie:`

/**
* @param {{  }} i
*/
export const application_definition_refund = (i) => `Anwendung bezeichnet das von der Gesellschaft bereitgestellte Softwareprogramm, das Sie auf einem elektronischen Gerät heruntergeladen haben, mit dem Namen $1.`

/**
* @param {{  }} i
*/
export const goods_definition = (i) => `Waren beziehen sich auf die Artikel, die im Rahmen des Dienstes zum Verkauf angeboten werden.`

/**
* @param {{  }} i
*/
export const orders_definition = (i) => `Bestellungen sind eine Anfrage Ihrerseits, Waren von uns zu kaufen.`

/**
* @param {{  }} i
*/
export const order_cancellation_rights = (i) => `Ihr Recht auf Stornierung der Bestellung`

/**
* @param {{  }} i
*/
export const cancellation_period = (i) => `Sie haben das Recht, Ihre Bestellung innerhalb von 14 Tagen ohne Angabe von Gründen zu stornieren.`

/**
* @param {{  }} i
*/
export const cancellation_deadline = (i) => `Die Frist für die Stornierung einer Bestellung beträgt 14 Tage ab dem Datum, an dem Sie die Waren erhalten haben oder an dem ein von Ihnen beauftragter Dritter, der nicht der Spediteur ist, Besitz an dem gelieferten Produkt ergreift.`

/**
* @param {{  }} i
*/
export const how_to_cancel = (i) => `Um Ihr Widerrufsrecht auszuüben, müssen Sie uns Ihre Entscheidung durch eine eindeutige Erklärung mitteilen. Sie können uns Ihre Entscheidung mitteilen durch:`

/**
* @param {{  }} i
*/
export const cancellation_link = (i) => `Durch den Besuch dieser Seite auf unserer Website:`

/**
* @param {{  }} i
*/
export const reimbursement_policy = (i) => `Wir werden Ihnen spätestens 14 Tage nach dem Tag, an dem wir die zurückgesandte Ware erhalten, den Betrag zurückerstatten. Wir verwenden dasselbe Zahlungsmittel, das Sie für die Bestellung verwendet haben, und Ihnen entstehen keine Gebühren für diese Rückerstattung.`

/**
* @param {{  }} i
*/
export const conditions_for_returns = (i) => `Rückgabebedingungen`

/**
* @param {{  }} i
*/
export const return_eligibility = (i) => `Damit die Waren für eine Rücksendung in Frage kommen, stellen Sie bitte sicher, dass:`

/**
* @param {{  }} i
*/
export const purchase_timeframe = (i) => `Die Waren wurden in den letzten 14 Tagen gekauft.`

/**
* @param {{  }} i
*/
export const non_returnable_goods = (i) => `Die folgenden Waren können nicht zurückgegeben werden:`

/**
* @param {{  }} i
*/
export const custom_goods = (i) => `Die Lieferung von Waren, die nach Ihren Spezifikationen oder eindeutig personalisiert sind.`

/**
* @param {{  }} i
*/
export const perishable_goods = (i) => `Die Lieferung von Waren, die aufgrund ihrer Beschaffenheit nicht für eine Rücksendung geeignet sind, schnell verderben oder bei denen das Haltbarkeitsdatum überschritten ist.`

/**
* @param {{  }} i
*/
export const unsealed_goods = (i) => `Die Lieferung von Waren, die aus Gesundheits- oder Hygieneschutzgründen nicht für eine Rücksendung geeignet sind und nach der Lieferung geöffnet wurden.`

/**
* @param {{  }} i
*/
export const inseparable_goods = (i) => `Die Lieferung von Waren, die nach der Lieferung aufgrund ihrer Art untrennbar mit anderen Gegenständen vermischt sind.`

/**
* @param {{  }} i
*/
export const right_to_refuse = (i) => `Wir behalten uns das Recht vor, Rücksendungen von Waren, die die oben genannten Rückgabebedingungen nicht erfüllen, ganz nach unserem eigenen Ermessen abzulehnen.`

/**
* @param {{  }} i
*/
export const sale_items_policy = (i) => `Nur regulär preisige Waren können erstattet werden. Leider können im Angebot befindliche Waren nicht erstattet werden. Diese Ausschlussregelung gilt möglicherweise nicht für Sie, wenn dies nach geltendem Recht nicht zulässig ist.`

/**
* @param {{  }} i
*/
export const returning_goods = (i) => `Warenrückgabe`

/**
* @param {{  }} i
*/
export const return_responsibility = (i) => `Sie sind verantwortlich für die Kosten und das Risiko der Rücksendung der Waren an uns. Sie sollten die Waren an folgende Adresse senden:`

/**
* @param {{  }} i
*/
export const return_address = (i) => `6 sepapaja  
Tallinn, 15510  
Estland`

/**
* @param {{  }} i
*/
export const return_shipping_disclaimer = (i) => `Wir können nicht für beschädigte oder verlorene Waren während des Rückversands verantwortlich gemacht werden. Daher empfehlen wir einen versicherten und nachverfolgbaren Versanddienst. Wir können eine Rückerstattung nicht ausstellen, ohne den tatsächlichen Erhalt der Waren oder einen Nachweis über die erhaltene Rücksendung.`

/**
* @param {{  }} i
*/
export const gifts = (i) => `Geschenke`

/**
* @param {{  }} i
*/
export const gift_return_policy = (i) => `Wenn die Waren beim Kauf als Geschenk gekennzeichnet waren und dann direkt an Sie versendet wurden, erhalten Sie einen Geschenkgutschein für den Wert Ihrer Rücksendung. Sobald das zurückgegebene Produkt eingegangen ist, wird Ihnen ein Geschenkgutschein zugesendet.`

/**
* @param {{  }} i
*/
export const non_gift_return_policy = (i) => `Wenn die Waren beim Kauf nicht als Geschenk gekennzeichnet waren oder der Schenker die Bestellung an sich selbst versenden ließ, um sie Ihnen später zu übergeben, werden wir die Rückerstattung an den Schenker senden.`

/**
* @param {{  }} i
*/
export const contact_us = (i) => `Kontaktieren Sie uns`

/**
* @param {{  }} i
*/
export const questions_about_policy = (i) => `Wenn Sie Fragen zu unserer Rückgabe- und Erstattungspolitik haben, kontaktieren Sie uns bitte:`

/**
* @param {{  }} i
*/
export const contact_link = (i) => `Indem Sie diese Seite auf der Website besuchen:`

/**
* @param {{  }} i
*/
export const register_title = (i) => `Registrieren Sie sich bei Capgo`

/**
* @param {{  }} i
*/
export const already_have_account = (i) => `Hast du bereits ein Konto?`

/**
* @param {{  }} i
*/
export const sign_in = (i) => `Anmelden`

/**
* @param {{  }} i
*/
export const email_label = (i) => `E-Mail`

/**
* @param {{  }} i
*/
export const email_placeholder = (i) => `Geben Sie Ihre E-Mail-Adresse ein`

/**
* @param {{  }} i
*/
export const first_name_label = (i) => `Vorname`

/**
* @param {{  }} i
*/
export const first_name_placeholder = (i) => `Johann`

/**
* @param {{  }} i
*/
export const last_name_label = (i) => `Nachname`

/**
* @param {{  }} i
*/
export const last_name_placeholder = (i) => `Koe`

/**
* @param {{  }} i
*/
export const password_label = (i) => `Passwort`

/**
* @param {{  }} i
*/
export const password_placeholder = (i) => `Geben Sie Ihr Passwort ein`

/**
* @param {{  }} i
*/
export const sign_up_button = (i) => `Anmelden`

/**
* @param {{  }} i
*/
export const need_help = (i) => `Brauchen Sie Hilfe?`

/**
* @param {{  }} i
*/
export const open_support = (i) => `Öffnen Sie den Support`

/**
* @param {{  }} i
*/
export const testimonial_title = (i) => `Wir haben Capgo in der Produktion für unsere Nutzerbasis von über 5000 eingeführt!`

/**
* @param {{  }} i
*/
export const testimonial_highlight = (i) => `Benutzer sind innerhalb von Minuten auf dem neuesten Stand.`

/**
* @param {{  }} i
*/
export const testimonial_description = (i) => `Capgo-Benutzer seit 2023`

/**
* @param {{  }} i
*/
export const eula_title = (i) => `Endbenutzer-Lizenzvereinbarung ("Vereinbarung")`

/**
* @param {{  }} i
*/
export const eula_last_updated = (i) => `Letzte Aktualisierung: 28. Januar 2022`

/**
* @param {{  }} i
*/
export const eula_read_carefully = (i) => `Bitte lesen Sie diese Endbenutzer-Lizenzvereinbarung sorgfältig durch, bevor Sie auf die Schaltfläche "Ich stimme zu" klicken, $1 herunterladen oder verwenden.`

/**
* @param {{  }} i
*/
export const eula_interpretation_title = (i) => `Interpretation und Definitionen`

/**
* @param {{  }} i
*/
export const eula_interpretation_subtitle = (i) => `Interpretation`

/**
* @param {{  }} i
*/
export const eula_interpretation_text = (i) => `Die Wörter, deren Anfangsbuchstabe großgeschrieben ist, haben Bedeutungen, die unter den folgenden Bedingungen definiert sind. Die folgenden Definitionen haben die gleiche Bedeutung, unabhängig davon, ob sie im Singular oder Plural erscheinen.`

/**
* @param {{  }} i
*/
export const eula_definitions_subtitle = (i) => `Definitionen`

/**
* @param {{  }} i
*/
export const eula_definitions_intro = (i) => `Für die Zwecke dieser Endbenutzer-Lizenzvereinbarung:`

/**
* @param {{  }} i
*/
export const eula_definition_agreement = (i) => `**Vereinbarung** bedeutet diese Endbenutzer-Lizenzvereinbarung, die die gesamte Vereinbarung zwischen Ihnen und dem Unternehmen bezüglich der Nutzung der Anwendung bildet.`

/**
* @param {{  }} i
*/
export const eula_definition_application = (i) => `**Anwendung** bezeichnet das von der Firma bereitgestellte Softwareprogramm, das Sie über ein Konto in einem Anwendungsstore auf ein Gerät heruntergeladen haben, mit dem Namen $1.`

/**
* @param {{  }} i
*/
export const eula_definition_application_store = (i) => `**Anwendungsspeicher** bezeichnet den digitalen Vertriebsdienst, der von Apple Inc. (Apple App Store) oder Google Inc. (Google Play Store) betrieben und entwickelt wird, über den die Anwendung auf Ihr Gerät heruntergeladen wurde.`

/**
* @param {{  }} i
*/
export const eula_definition_company = (i) => `**Unternehmen** (in diesem Vertrag als "das Unternehmen", "Wir", "Uns" oder "Unser" bezeichnet) bezieht sich auf Digital Shift OU, 6 Sepapaja 15510 Tallinn.`

/**
* @param {{  }} i
*/
export const eula_definition_content = (i) => `**Inhalt** bezieht sich auf Inhalte wie Texte, Bilder oder andere Informationen, die von Ihnen gepostet, hochgeladen, verlinkt oder anderweitig verfügbar gemacht werden können, unabhängig von der Form dieses Inhalts.`

/**
* @param {{  }} i
*/
export const eula_definition_country = (i) => `**Land** bezieht sich auf: Estland`

/**
* @param {{  }} i
*/
export const eula_definition_device = (i) => `**Gerät** bezeichnet jedes Gerät, das auf die Anwendung zugreifen kann, wie einen Computer, ein Mobiltelefon oder ein digitales Tablet.`

/**
* @param {{  }} i
*/
export const eula_definition_family_sharing = (i) => `**Familienfreigabe / Familiengruppe** ermöglicht es Ihnen, Anwendungen, die über den App Store heruntergeladen wurden, mit anderen Familienmitgliedern zu teilen, indem Sie ihnen erlauben, die berechtigten Anwendungen der anderen zu sehen und auf ihren zugehörigen Geräten herunterzuladen.`

/**
* @param {{  }} i
*/
export const eula_definition_third_party_services = (i) => `**Drittanbieter-Dienste** bezeichnet alle Dienste oder Inhalte (einschließlich Daten, Informationen, Anwendungen und anderer Produktdienstleistungen), die von einem Drittanbieter bereitgestellt werden und die von der Anwendung angezeigt, eingeschlossen oder verfügbar gemacht werden können.`

/**
* @param {{  }} i
*/
export const eula_definition_you = (i) => `**Sie** bezeichnet die Person, die auf die Anwendung zugreift oder sie nutzt, oder das Unternehmen oder die andere juristische Person, in deren Namen diese Person auf die Anwendung zugreift oder sie nutzt, sofern zutreffend.`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_title = (i) => `Anerkennung`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_text_1 = (i) => `Indem Sie auf die Schaltfläche "Ich stimme zu" klicken, die Anwendung herunterladen oder verwenden, stimmen Sie zu, an die Bedingungen und Konditionen dieses Vertrags gebunden zu sein. Wenn Sie mit den Bedingungen dieses Vertrags nicht einverstanden sind, klicken Sie nicht auf die Schaltfläche "Ich stimme zu", laden Sie die Anwendung nicht herunter und verwenden Sie sie nicht.`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_text_2 = (i) => `Dieser Vertrag ist ein rechtliches Dokument zwischen Ihnen und dem Unternehmen und regelt Ihre Nutzung der von dem Unternehmen für Sie bereitgestellten Anwendung.`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_text_3 = (i) => `Dieser Vertrag besteht nur zwischen Ihnen und dem Unternehmen und nicht mit dem Anwendungsstore. Daher ist das Unternehmen allein verantwortlich für die Anwendung und deren Inhalte. Obwohl der Anwendungsstore keine Partei dieses Vertrags ist, hat er das Recht, diesen gegen Sie als Drittbegünstigten in Bezug auf Ihre Nutzung der Anwendung durchzusetzen.`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_text_4 = (i) => `Da die Anwendung von anderen Benutzern beispielsweise über Familienfreigabe / Familiengruppe oder Volumenlizenzierung zugegriffen und verwendet werden kann, unterliegt die Nutzung der Anwendung durch diese Benutzer ausdrücklich dieser Vereinbarung.`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_text_5 = (i) => `Die Anwendung wird Ihnen von der Gesellschaft lizenziert, nicht verkauft, zur Nutzung ausschließlich in Übereinstimmung mit den Bedingungen dieses Vertrags.`

/**
* @param {{  }} i
*/
export const eula_license_title = (i) => `Lizenz`

/**
* @param {{  }} i
*/
export const eula_license_scope_subtitle = (i) => `Lizenzumfang`

/**
* @param {{  }} i
*/
export const eula_license_scope_text_1 = (i) => `Das Unternehmen gewährt Ihnen eine widerrufliche, nicht exklusive, nicht übertragbare, eingeschränkte Lizenz zum Herunterladen, Installieren und Verwenden der Anwendung, die strikt gemäß den Bedingungen dieses Vertrags erfolgt.`

/**
* @param {{  }} i
*/
export const eula_license_scope_text_2 = (i) => `Sie dürfen die Anwendung nur auf einem Gerät verwenden, das Sie besitzen oder kontrollieren und wie es die Geschäftsbedingungen des Anwendungsstores erlauben.`

/**
* @param {{  }} i
*/
export const eula_license_scope_text_3 = (i) => `Die Lizenz, die Ihnen von der Firma gewährt wird, ist ausschließlich für Ihre persönlichen, nicht kommerziellen Zwecke und strikt in Übereinstimmung mit den Bedingungen dieser Vereinbarung.`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_subtitle = (i) => `Lizenzbeschränkungen`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_intro = (i) => `Sie stimmen zu, dass Sie nicht, und Sie werden anderen nicht gestatten:`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_1 = (i) => `Lizenzieren, verkaufen, vermieten, verpachten, übertragen, verteilen, übertragen, hosten, auslagern, offenlegen oder anderweitig kommerziell ausbeuten oder die Anwendung einem Dritten zur Verfügung stellen.`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_2 = (i) => `Kopieren oder Verwenden der Anwendung für einen anderen Zweck als im obigen Abschnitt 'Lizenz' erlaubt.`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_3 = (i) => `Ändern, derivative Werke erstellen, zerlegen, entschlüsseln, zurückkompilieren oder zurückentwickeln Sie jeden Teil der Anwendung.`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_4 = (i) => `Entfernen, ändern oder unkenntlich machen von jeglicher Eigentumshinweise (einschließlich jeglicher Hinweise auf Urheberrechte oder Marken) der Gesellschaft oder ihrer verbundenen Unternehmen, Partner, Lieferanten oder Lizenzgeber der Anwendung.`

/**
* @param {{  }} i
*/
export const eula_intellectual_property_title = (i) => `Geistiges Eigentum`

/**
* @param {{  }} i
*/
export const eula_intellectual_property_text_1 = (i) => `Die Anwendung, einschließlich aller Urheberrechte, Patente, Marken, Geschäftsgeheimnisse und anderer geistiger Eigentumsrechte, ist und bleibt das alleinige und ausschließliche Eigentum der Gesellschaft.`

/**
* @param {{  }} i
*/
export const eula_intellectual_property_text_2 = (i) => `Das Unternehmen ist nicht verpflichtet, Sie in Bezug auf Ansprüche Dritter, die aus der Anwendung entstehen oder sich darauf beziehen, zu entschädigen oder zu verteidigen. Soweit das Unternehmen gesetzlich verpflichtet ist, eine Entschädigung bereitzustellen, ist allein das Unternehmen, nicht der Anwendungsspeicher, verantwortlich für die Untersuchung, Verteidigung, Regelung und Erledigung von Forderungen, die besagen, dass die Anwendung oder Ihre Nutzung derselben die Rechte an geistigem Eigentum Dritter verletzt.`

/**
* @param {{  }} i
*/
export const eula_your_suggestions_title = (i) => `Ihre Vorschläge`

/**
* @param {{  }} i
*/
export const eula_your_suggestions_text_1 = (i) => `Alle Rückmeldungen, Kommentare, Ideen, Verbesserungen oder Vorschläge, die Sie dem Unternehmen in Bezug auf die Anwendung zur Verfügung stellen, bleiben das alleinige und ausschließliche Eigentum des Unternehmens.`

/**
* @param {{  }} i
*/
export const eula_your_suggestions_text_2 = (i) => `Die Firma ist berechtigt, die Vorschläge für jeden Zweck und auf jede Weise zu verwenden, zu kopieren, zu modifizieren, zu veröffentlichen oder erneut zu verteilen, ohne Ihnen Anerkennung oder eine Entschädigung zu leisten.`

/**
* @param {{  }} i
*/
export const eula_modifications_title = (i) => `Änderungen an der Anwendung`

/**
* @param {{  }} i
*/
export const eula_modifications_text = (i) => `Die Firma behält sich das Recht vor, die Anwendung oder einen damit verbundenen Dienst vorübergehend oder dauerhaft zu ändern, auszusetzen oder einzustellen, mit oder ohne Vorankündigung und ohne Haftung Ihnen gegenüber.`

/**
* @param {{  }} i
*/
export const eula_updates_subtitle = (i) => `Aktualisierungen der Anwendung`

/**
* @param {{  }} i
*/
export const eula_updates_text_1 = (i) => `Das Unternehmen kann von Zeit zu Zeit Verbesserungen oder Erweiterungen der Funktionen/Funktionalität der Anwendung bereitstellen, die Patches, Fehlerbehebungen, Updates, Upgrades und andere Änderungen umfassen können.`

/**
* @param {{  }} i
*/
export const eula_updates_text_2 = (i) => `Updates können bestimmte Funktionen und/oder Merkmale der Anwendung ändern oder löschen. Sie stimmen zu, dass das Unternehmen keine Verpflichtung hat, (i) Updates bereitzustellen oder (ii) bestimmte Funktionen und/oder Merkmale der Anwendung weiterhin bereitzustellen oder zu aktivieren.`

/**
* @param {{  }} i
*/
export const eula_updates_text_3 = (i) => `Sie stimmen ferner zu, dass alle Updates oder andere Änderungen (i) als wesentlicher Bestandteil der Anwendung betrachtet werden und (ii) den Bedingungen und Konditionen dieses Vertrags unterliegen.`

/**
* @param {{  }} i
*/
export const eula_maintenance_subtitle = (i) => `Wartung und Unterstützung`

/**
* @param {{  }} i
*/
export const eula_maintenance_text = (i) => `Das Unternehmen bietet keine Wartung oder Unterstützung für den Download und die Nutzung der Anwendung an. Soweit Wartung oder Unterstützung nach geltendem Recht erforderlich ist, ist das Unternehmen, nicht der Anwendungsstore, verpflichtet, solche Wartung oder Unterstützung bereitzustellen.`

/**
* @param {{  }} i
*/
export const eula_third_party_services_title = (i) => `Drittanbieter-Dienste`

/**
* @param {{  }} i
*/
export const eula_third_party_services_text_1 = (i) => `Die Anwendung kann Inhalte von Drittanbietern anzeigen, einschließen oder verfügbar machen (einschließlich Daten, Informationen, Anwendungen und anderen Produktdiensten) oder Links zu Websites oder Diensten von Drittanbietern bereitstellen.`

/**
* @param {{  }} i
*/
export const eula_third_party_services_text_2 = (i) => `Sie erkennen an und stimmen zu, dass das Unternehmen nicht für irgendwelche Dienstleistungen Dritter verantwortlich ist, einschließlich deren Genauigkeit, Vollständigkeit, Aktualität, Gültigkeit, Einhaltung von Urheberrechten, Rechtmäßigkeit, Anstand, Qualität oder einem anderen Aspekt davon. Das Unternehmen übernimmt keine Haftung und hat keine Verantwortung gegenüber Ihnen oder irgendeiner anderen Person oder Einheit für irgendwelche Dienstleistungen Dritter.`

/**
* @param {{  }} i
*/
export const eula_third_party_services_text_3 = (i) => `Sie müssen die geltenden Bedingungen der Drittparteien einhalten, wenn Sie die Anwendung nutzen. Drittanbieter-Dienste und die entsprechenden Links werden Ihnen ausschließlich aus Bequemlichkeit bereitgestellt, und Sie greifen auf diese zu und verwenden sie vollständig auf eigene Gefahr und unterliegen den Bedingungen und Konditionen dieser Drittparteien.`

/**
* @param {{  }} i
*/
export const eula_term_and_termination_title = (i) => `Bedingungen und Kündigung`

/**
* @param {{  }} i
*/
export const eula_term_and_termination_text_1 = (i) => `Diese Vereinbarung bleibt in Kraft, bis sie von Ihnen oder dem Unternehmen beendet wird. Das Unternehmen kann nach eigenem Ermessen jederzeit und aus beliebigem oder keinem Grund diese Vereinbarung mit oder ohne vorherige Ankündigung aussetzen oder beenden.`

/**
* @param {{  }} i
*/
export const eula_term_and_termination_text_2 = (i) => `Dieser Vertrag wird sofort und ohne vorherige Ankündigung durch das Unternehmen beendet, wenn Sie eine Bestimmung dieses Vertrags nicht einhalten. Sie können diesen Vertrag auch beenden, indem Sie die Anwendung und alle Kopien davon von Ihrem Gerät oder Ihrem Computer löschen.`

/**
* @param {{  }} i
*/
export const eula_term_and_termination_text_3 = (i) => `Bei Beendigung dieses Vertrags dürfen Sie die Nutzung der Anwendung einstellen und alle Kopien der Anwendung von Ihrem Gerät löschen.`

/**
* @param {{  }} i
*/
export const eula_term_and_termination_text_4 = (i) => `Die Beendigung dieses Vertrags wird die Rechte oder Rechtsmittel des Unternehmens nach Gesetz oder Billigkeit im Falle eines Verstoßes Ihrerseits (während der Laufzeit dieses Vertrags) gegen eine Ihrer Verpflichtungen aus diesem Vertrag nicht einschränken.`

/**
* @param {{  }} i
*/
export const eula_indemnification_title = (i) => `Entschädigung`

/**
* @param {{  }} i
*/
export const eula_indemnification_text = (i) => `Sie erklären sich bereit, das Unternehmen sowie dessen Muttergesellschaften, Tochtergesellschaften, verbundenen Unternehmen, Beamte, Mitarbeiter, Vertreter, Partner und Lizenzgeber (sofern vorhanden) von sämtlichen Ansprüchen oder Forderungen, einschließlich angemessener Anwaltsgebühren, schadlos zu halten, die aufgrund oder aus folgenden Gründen entstehen: (a) Nutzung der Anwendung; (b) Verletzung dieses Vertrages oder eines Gesetzes oder einer Vorschrift; oder (c) Verletzung eines Rechts eines Dritten.`

/**
* @param {{  }} i
*/
export const eula_no_warranties_title = (i) => `Keine Garantien`

/**
* @param {{  }} i
*/
export const eula_no_warranties_text_1 = (i) => `Die Anwendung wird Ihnen "WIE BESEHEN" und "WIE VERFÜGBAR" und mit allen Fehlern und Mängeln ohne jegliche Garantie bereitgestellt. Im maximal zulässigen Umfang nach geltendem Recht, lehnt die Firma, in eigenem Namen sowie im Namen ihrer Tochtergesellschaften und ihrer und deren jeweiligen Lizenzgeber und Dienstanbieter, ausdrücklich alle Garantien ab, gleich welcher Art, ob ausdrücklich, stillschweigend, gesetzlich oder anders, in Bezug auf die Anwendung, einschließlich aller stillschweigenden Garantien der Marktgängigkeit, Eignung für einen bestimmten Zweck, Titel und Nichtverletzung, sowie Garantien, die aus dem Geschäftsverkehr, der Durchführung, der Nutzung oder Handelspraktiken entstehen können. Unbeschadet des Vorstehenden gibt die Firma keine Garantie oder Verpflichtung und macht keinerlei Zusicherung, dass die Anwendung Ihren Anforderungen entspricht, irgendwelche beabsichtigten Ergebnisse erzielt, mit anderer Software, Anwendungen, Systemen oder Dienstleistungen kompatibel ist oder damit funktioniert, ohne Unterbrechung betrieben werden kann, irgendwelche Leistungs- oder Zuverlässigkeitsstandards erfüllt oder fehlerfrei ist, oder dass Fehler oder Mängel behoben werden können oder werden.`

/**
* @param {{  }} i
*/
export const eula_no_warranties_text_2 = (i) => `Ohne die vorstehenden Bestimmungen einzuschränken, geben weder die Gesellschaft noch einer der Anbieter der Gesellschaft eine ausdrückliche oder stillschweigende Zusicherung oder Gewährleistung jeglicher Art: (i) hinsichtlich der Funktionsweise oder Verfügbarkeit der Anwendung oder der darauf enthaltenen Informationen, Inhalte, Materialien oder Produkte; (ii) dass die Anwendung ununterbrochen oder fehlerfrei sein wird; (iii) hinsichtlich der Genauigkeit, Zuverlässigkeit oder Aktualität von Informationen oder Inhalten, die über die Anwendung bereitgestellt werden; oder (iv) dass die Anwendung, ihre Server, der Inhalt oder E-Mails, die von der Gesellschaft oder in ihrem Auftrag gesendet werden, frei von Viren, Skripten, Trojanischen Pferden, Würmern, Schadsoftware, Zeitbomben oder anderen schädlichen Komponenten sind.`

/**
* @param {{  }} i
*/
export const eula_no_warranties_text_3 = (i) => `Einige Rechtsordnungen erlauben nicht den Ausschluss bestimmter Arten von Garantien oder Einschränkungen der geltenden gesetzlichen Rechte eines Verbrauchers, sodass einige oder alle oben genannten Ausschlüsse und Einschränkungen möglicherweise nicht auf Sie zutreffen. In einem solchen Fall gelten die in diesem Abschnitt festgelegten Ausschlüsse und Einschränkungen jedoch in dem größtmöglichen Umfang, der nach geltendem Recht durchsetzbar ist. Soweit eine Garantie nach dem Gesetz besteht, die nicht ausgeschlossen werden kann, ist das Unternehmen, nicht der Anwendungsstore, allein verantwortlich für diese Garantie.`

/**
* @param {{  }} i
*/
export const eula_limitation_of_liability_title = (i) => `Haftungsbeschränkung`

/**
* @param {{  }} i
*/
export const eula_limitation_of_liability_text_1 = (i) => `Ungeachtet aller Schäden, die Ihnen entstehen könnten, beschränkt sich die gesamte Haftung des Unternehmens und seiner Lieferanten gemäß den Bestimmungen dieses Vertrags und Ihr ausschließlicher Rechtsbehelf für all das Vorherige auf den Betrag, den Sie tatsächlich für die Anwendung oder durch die Anwendung gezahlt haben, oder 100 USD, wenn Sie nichts über die Anwendung gekauft haben.`

/**
* @param {{  }} i
*/
export const eula_limitation_of_liability_text_2 = (i) => `Soweit dies nach geltendem Recht zulässig ist, haftet das Unternehmen oder seine Lieferanten in keinem Fall für besondere, zufällige, indirekte oder Folgeschäden jeglicher Art (einschließlich, aber nicht beschränkt auf Schadensersatzansprüche wegen Gewinnverlusts, Daten- oder Informationsverlusts, Geschäftsunterbrechungen, Personenschäden, Verlust der Privatsphäre, die aus der Nutzung oder der Unfähigkeit zur Nutzung der Anwendung, von Drittsoftware und/oder Dritt-Hardware, die in Verbindung mit der Anwendung verwendet wird, oder anderweitig im Zusammenhang mit einer Bestimmung dieser Vereinbarung resultieren), selbst wenn das Unternehmen oder ein Lieferant auf die Möglichkeit solcher Schäden hingewiesen wurde und selbst wenn das Abhilfemittel seinem wesentlichen Zweck nicht gerecht wird.`

/**
* @param {{  }} i
*/
export const eula_limitation_of_liability_text_3 = (i) => `Einige Staaten/Jurisdiktionen erlauben nicht den Ausschluss oder die Einschränkung von zufälligen oder Folgeschäden, sodass die obige Einschränkung oder der Ausschluss möglicherweise nicht für Sie gilt.`

/**
* @param {{  }} i
*/
export const eula_limitation_of_liability_text_4 = (i) => `Sie verstehen ausdrücklich und stimmen zu, dass der Application Store, seine Tochtergesellschaften und verbundenen Unternehmen sowie seine Lizenzgeber Ihnen gegenüber unter keiner Haftungstheorie für direkte, indirekte, zufällige, besondere, Folgeschäden oder exemplarische Schäden haftbar sind, die Ihnen entstehen könnten, einschließlich Datenverlust, unabhängig davon, ob der Application Store oder seine Vertreter über die Möglichkeit solcher Verluste informiert wurden oder hätten informiert werden müssen.`

/**
* @param {{  }} i
*/
export const eula_severability_and_waiver_title = (i) => `Teilbarkeit und Verzicht`

/**
* @param {{  }} i
*/
export const eula_severability_subtitle = (i) => `Salvatorische Klausel`

/**
* @param {{  }} i
*/
export const eula_severability_text = (i) => `Falls eine Bestimmung dieses Vertrags für nicht durchsetzbar oder ungültig erachtet wird, wird diese Bestimmung geändert und so ausgelegt, dass die Ziele dieser Bestimmung im größtmöglichen Rahmen gemäß dem anwendbaren Recht erreicht werden. Die verbleibenden Bestimmungen bleiben in vollem Umfang in Kraft und wirksam.`

/**
* @param {{  }} i
*/
export const eula_waiver_subtitle = (i) => `Verzicht`

/**
* @param {{  }} i
*/
export const eula_waiver_text = (i) => `Sofern hierin nicht anders vorgesehen, hat das Versäumnis, ein Recht auszuüben oder die Erfüllung einer Verpflichtung aus diesem Vertrag zu verlangen, keinen Einfluss auf die Fähigkeit einer Partei, dieses Recht zu einem späteren Zeitpunkt auszuüben oder die Erfüllung zu verlangen, noch wird der Verzicht auf einen Verstoß als Verzicht auf einen nachfolgenden Verstoß angesehen.`

/**
* @param {{  }} i
*/
export const eula_product_claims_title = (i) => `Produktansprüche`

/**
* @param {{  }} i
*/
export const eula_product_claims_text = (i) => `Die Gesellschaft gibt keine Gewährleistungen bezüglich der Anwendung. Soweit Sie Ansprüche aus oder im Zusammenhang mit der Nutzung der Anwendung haben, ist die Gesellschaft, nicht der App Store, verantwortlich für die Bearbeitung solcher Ansprüche, die unter anderem Folgendes umfassen können: (i) jegliche Produkthaftungsansprüche; (ii) jeden Anspruch, dass die Anwendung nicht den geltenden rechtlichen oder regulatorischen Anforderungen entspricht; und (iii) jeden Anspruch, der unter dem Verbraucherschutz oder ähnlicher Gesetzgebung erhoben wird.`

/**
* @param {{  }} i
*/
export const eula_us_legal_compliance_title = (i) => `Rechtliche Compliance der Vereinigten Staaten`

/**
* @param {{  }} i
*/
export const eula_us_legal_compliance_text = (i) => `Sie vertreten und garantieren, dass (i) Sie sich nicht in einem Land befinden, das dem Embargo der US-Regierung unterliegt, oder das von der US-Regierung als ein "Terror unterstützendes" Land eingestuft wurde, und (ii) Sie nicht auf einer Liste der US-Regierung von verbotenen oder eingeschränkten Parteien aufgeführt sind.`

/**
* @param {{  }} i
*/
export const eula_changes_title = (i) => `Änderungen zu diesem Vertrag`

/**
* @param {{  }} i
*/
export const eula_changes_text_1 = (i) => `Die Gesellschaft behält sich das Recht vor, nach eigenem Ermessen diese Vereinbarung jederzeit zu ändern oder zu ersetzen. Falls eine Änderung wesentlich ist, werden wir mindestens 30 Tage im Voraus über die Inkrafttretung neuer Bedingungen informieren. Was eine wesentliche Änderung darstellt, wird nach alleinigem Ermessen der Gesellschaft bestimmt.`

/**
* @param {{  }} i
*/
export const eula_changes_text_2 = (i) => `Indem Sie weiterhin auf die Anwendung zugreifen oder diese nutzen, nachdem Änderungen wirksam werden, stimmen Sie den überarbeiteten Bedingungen zu. Wenn Sie den neuen Bedingungen nicht zustimmen, sind Sie nicht mehr berechtigt, die Anwendung zu nutzen.`

/**
* @param {{  }} i
*/
export const eula_governing_law_title = (i) => `Anwendbares Recht`

/**
* @param {{  }} i
*/
export const eula_governing_law_text = (i) => `Die Gesetze des Landes, ausgenommen die Regeln über Konflikte der Gesetze, regeln diese Vereinbarung und Ihre Nutzung der Anwendung. Ihre Nutzung der Anwendung kann auch anderen lokalen, staatlichen, nationalen oder internationalen Gesetzen unterliegen.`

/**
* @param {{  }} i
*/
export const eula_entire_agreement_title = (i) => `Gesamtvereinbarung`

/**
* @param {{  }} i
*/
export const eula_entire_agreement_text_1 = (i) => `Die Vereinbarung stellt die gesamte Vereinbarung zwischen Ihnen und der Firma bezüglich Ihrer Nutzung der Anwendung dar und ersetzt alle vorherigen und gleichzeitigen schriftlichen oder mündlichen Vereinbarungen zwischen Ihnen oder mündlichen Vereinbarungen zwischen Ihnen und der Firma.`

/**
* @param {{  }} i
*/
export const eula_entire_agreement_text_2 = (i) => `Sie unterliegen möglicherweise zusätzlichen Bedingungen, die gelten, wenn Sie die Dienste eines anderen Unternehmens nutzen oder erwerben, die Ihnen das Unternehmen zum Zeitpunkt der Nutzung oder des Kaufs zur Verfügung stellen wird.`

/**
* @param {{  }} i
*/
export const eula_contact_us_title = (i) => `Kontaktieren Sie uns`

/**
* @param {{  }} i
*/
export const eula_contact_us_text = (i) => `Wenn Sie Fragen zu diesem Vertrag haben, können Sie uns kontaktieren:`

/**
* @param {{  }} i
*/
export const eula_contact_us_link = (i) => `Indem Sie diese Seite auf der Webseite besuchen:`

/**
* @param {{  }} i
*/
export const dpa_title = (i) => `Datenverarbeitungsvereinbarung`

/**
* @param {{  }} i
*/
export const dpa_last_updated = (i) => `Zuletzt aktualisiert: 20. September 2023`

/**
* @param {{  }} i
*/
export const dpa_definitions_title = (i) => `Definitionen`

/**
* @param {{  }} i
*/
export const dpa_definitions_1 = (i) => `Im Rahmen der Bereitstellung des Capgo-Dienstes für den Nutzer gemäß der Vereinbarung kann Capgo Besucherdaten im Auftrag des Nutzers verarbeiten.`

/**
* @param {{  }} i
*/
export const dpa_definitions_2 = (i) => `In dieser Datenverarbeitungsvereinbarung ("DPA") bedeutet "Datenschutzgesetzgebung" die Datenschutz-Grundverordnung (Verordnung (EU) 2016/279) sowie alle anderen geltenden Gesetze, die die Verarbeitung von Besucherdaten und Datenschutz betreffen und in einer relevanten Rechtsordnung bestehen können.`

/**
* @param {{  }} i
*/
export const dpa_definitions_3 = (i) => `"Verantwortlicher", "Auftragsverarbeiter", "betroffene Person", "personenbezogene Daten" und "Verarbeitung" sind gemäß den geltenden Datenschutzgesetzen zu verstehen.`

/**
* @param {{  }} i
*/
export const dpa_definitions_4 = (i) => `Die Parteien sind sich einig, dass der Nutzer der für die Daten verantwortliche Stelle ist und dass Capgo der Datenverarbeiter in Bezug auf die Besucherdaten ist, die im Verlauf der Bereitstellung des Dienstes verarbeitet werden.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_title = (i) => `Datenschutz und Sicherheit Ihrer Besucherdaten`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_1 = (i) => `Wir ergreifen zahlreiche Maßnahmen, um Ihre Daten durch Backups, Redundanzen und Verschlüsselung zu schützen und abzusichern. Wenn Sie unseren Dienst nutzen, um die Statistiken Ihrer Website zu messen, wird Capgo Informationen über Ihre Besucher sammeln.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_2 = (i) => `Sie vertrauen uns Ihre Standortdaten an, und dieses Vertrauen nehmen wir ernst. Sie stimmen zu, dass Capgo Ihre Daten wie in unserer Datenrichtlinie beschrieben verarbeiten darf und zu keinem anderen Zweck. Wir tun unser Bestes, um dieses Vertrauen zu verdienen, indem wir offen darüber sind, wer wir sind, wie wir arbeiten und indem wir Ihnen stets für Ihr Feedback zur Verfügung stehen.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_3 = (i) => `Sie besitzen alle Rechte, Titel und Interessen an den Daten Ihrer Website. Wir erwerben keine Rechte an Ihren Website-Daten. Wir sammeln und analysieren keine persönlichen Informationen von Internetnutzern und verwenden diese Verhaltensanalysen nicht, um Werbung zu verkaufen. Wenn Sie Capgo verwenden, besitzen und kontrollieren Sie zu 100 % alle Daten Ihrer Website. Wir verkaufen oder teilen Ihre Site-Daten nicht mit Dritten und verletzen nicht die Privatsphäre Ihrer Besucher.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_4 = (i) => `Der Zweck von Capgo besteht darin, den Capacitor zu aktualisieren. Dies kann weiterhin ohne Verfolgung, Sammlung oder Speicherung personenbezogener Daten oder persönlich identifizierbarer Informationen (PII) erfolgen, ohne Cookies zu verwenden und während die Privatsphäre Ihrer Website-Besucher respektiert wird.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_5 = (i) => `Durch die Nutzung von Capgo erfolgt die gesamte Standortmessung absolut anonym. Wir minimieren die Datenerhebung im Allgemeinen. Wir messen nur die wesentlichsten Datenpunkte und nichts anderes. Alle gesammelten Metriken passen auf eine einzige Seite.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_6 = (i) => `Wir versuchen nicht, einen gerätepersistenten Identifikator zu generieren, da diese als personenbezogene Daten gemäß der DSGVO gelten. Wir verwenden keine Cookies, Browser-Cache oder den lokalen Speicher. Wir speichern, rufen keine Daten ab und extrahieren auch nichts von den Geräten der Besucher. Die von uns verarbeiteten Daten können nicht zur Identifizierung einer einzelnen Person verwendet werden.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_7 = (i) => `Die Gruppe der von der Verarbeitung ihrer Daten im Rahmen dieser Vereinbarung betroffenen betroffenen Personen umfasst Endnutzer der Websites des Verantwortlichen, die den vom Auftragsverarbeiter bereitgestellten Dienst nutzen.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_8 = (i) => `Sie finden weitere Informationen über die Verarbeitung Ihrer Besucherdaten und welche Arten/Kategorien von Daten wir in Ihrem Namen erheben in unserer öffentlich zugänglichen Datenschutzrichtlinie.`

/**
* @param {{  }} i
*/
export const dpa_security_measures_title = (i) => `Organisatorische und technische Sicherheitsmaßnahmen`

/**
* @param {{  }} i
*/
export const dpa_security_measures_1 = (i) => `Für die Verschlüsselung verwenden wir HTTPS während der Übertragung und den Hashing-Prozess im Ruhezustand. Unser Hashing-Prozess ist wesentlich stärker als die Verschlüsselung. Verschlüsselung impliziert, dass es einen Schlüssel gibt, der die Daten entschlüsseln und die Rohdaten offenbaren kann. In unserer Datenbank sind die Roh-IP-Adresse und der User-Agent für niemanden, einschließlich uns selbst, vollständig unzugänglich. Darüber hinaus verwenden wir strenge Firewall-Regeln und private, verschlüsselte Netzwerke. Wir halten Offsite-Backups mit Replikation und starken bcrypt-Passwörtern.`

/**
* @param {{  }} i
*/
export const dpa_security_measures_2 = (i) => `Capgo ist vollständig Open-Source-Software, was bedeutet, dass unser Quellcode auf GitHub verfügbar und zugänglich ist, sodass jeder ihn überprüfen und auditiert kann. Sie können ihn lesen, inspizieren und überprüfen, um zu verstehen, wie er funktioniert und um sicherzustellen, dass die Daten privat und sicher bleiben. Dies gibt Ihnen und allen anderen vollständige Transparenz darüber, wie wir die Daten des Webseitenverkehrs behandeln.`

/**
* @param {{  }} i
*/
export const dpa_security_measures_3 = (i) => `Mit mehr als 500 GitHub-Sternen haben viele Augen auf unseren Code, und es ist diese Transparenz und Offenheit, die bedeutet, dass Open-Source-Produkte vertrauenswürdiger sein können als proprietäre und geschlossene Produkte. Unsere Software wird mehrmals pro Woche aktualisiert, und auf unserer GitHub-Seite haben wir auch eine Möglichkeit für Menschen, Sicherheitsanfälligkeiten zu melden.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_title = (i) => `Pflichten des Prozessors gegenüber dem Verantwortlichen`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_1 = (i) => `Capgo wird Besucherdaten nur gemäß den Anweisungen des Kunden über die Einstellungen des Dienstes verarbeiten, d.h. (a) um die Infrastruktur zu betreiben, zu warten und zu unterstützen, die zur Bereitstellung des Dienstes verwendet wird; (b) um den Anweisungen des Kunden und den Verarbeitungsanweisungen bei deren Nutzung, Verwaltung und Verwaltung des Dienstes nachzukommen; (c) wie anderweitig über die Einstellungen des Dienstes angeordnet. Capgo wird Besucherdaten nur gemäß der Vereinbarung verarbeiten.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_2 = (i) => `Capgo wird den Kunden unverzüglich benachrichtigen, wenn Capgo der Meinung ist, dass eine von dem Kunden erteilte Anweisung zur Verarbeitung von Besucherdaten gegen geltende Datenschutzgesetze verstößt.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_3 = (i) => `Capgo garantiert die Vertraulichkeit der Besucher Daten, die im Rahmen dieser Vereinbarung verarbeitet werden.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_4 = (i) => `Wir als Menschen können auf Ihre Daten zugreifen, um Ihnen bei Supportanfragen zu helfen, die Sie stellen, und um Capgo zu warten und zu sichern, um die Sicherheit Ihrer Daten und des Dienstes als Ganzes zu gewährleisten. Capgo wird sicherstellen, dass alle Capgo-Mitarbeiter, die auf die Besucherdaten zugreifen müssen, in Bezug auf die DSGVO und den Datenschutz geschult sind, über die vertrauliche Natur der Daten informiert sind und die Verpflichtungen, die in diesem Vertrag festgelegt sind, einhalten.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_5 = (i) => `Capgo wird geeignete technische und organisatorische Sicherheitsmaßnahmen implementieren und aufrechterhalten, um die Besucherdaten vor unbefugter oder unlawful Verarbeitung sowie vor versehentlichem Verlust, Zerstörung, Beschädigung, Diebstahl, Veränderung oder Offenlegung zu schützen. Diese Maßnahmen sollen angemessen sein im Hinblick auf den Schaden, der aus einer unbefugten oder unlawful Verarbeitung, versehendlichem Verlust, Zerstörung, Beschädigung oder Diebstahl der Besucherdaten resultieren könnte, und unter Berücksichtigung der Art der Besucherdaten, die geschützt werden sollen.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_6 = (i) => `Wir arbeiten mit Unterverarbeitern. Mit jedem Anbieter überprüfen wir dessen Engagement für den Datenschutz und schließen eine Datenverarbeitungsvereinbarung mit ihnen ab, die die Standardvertragsklauseln zwischen dem Verantwortlichen und dem Auftragsverarbeiter umfasst. Solchen Subunternehmern wird gestattet, Daten nur zur Erbringung der Dienste zu verarbeiten, die Capgo ihnen anvertraut hat, und sie sind davon ausgeschlossen, Daten für andere Zwecke zu verwenden. Capgo wird den Verantwortlichen benachrichtigen, wenn die Liste der Unterverarbeiter über unsere In-App-Benachrichtigungen, E-Mail und/oder einen Blog geändert wird. Der Verantwortliche hat das Recht, legitim Widerspruch einzulegen und kann die Vereinbarung kündigen.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_7 = (i) => `Wenn Capgo von einem unbeabsichtigten, unbefugten oder rechtswidrigen Sicherheitsvorfall, der Zerstörung, dem Verlust, der Veränderung oder der Offenlegung der personenbezogenen Daten, die von Capgo im Rahmen der Erbringung des Dienstes verarbeitet werden, Kenntnis erlangt, wird es den Kunden ohne unangemessene Verzögerung (spätestens 48 Stunden nach Bekanntwerden) per E-Mail benachrichtigen und dem Kunden eine Beschreibung des Vorfalls sowie regelmäßige Aktualisierungen zu den Informationen über den Vorfall, einschließlich seiner Auswirkungen auf den Kundeninhalt, zur Verfügung stellen. Capgo wird zudem Maßnahmen ergreifen, um den Vorfall zu untersuchen und angemessen zu verhindern oder die Auswirkungen des Vorfalls zu mildern.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_8 = (i) => `Capgo darf keinesfalls eigenmächtig die Verarbeitung von Besucherdaten, die im Auftrag des Verantwortlichen verarbeitet werden, berichtigen, löschen oder einschränken (es sei denn, dies ist gesetzlich erforderlich oder es gelten die Bedingungen für die Datenverarbeitung), sondern darf dies nur auf dokumentierte Anweisung des Verantwortlichen und gemäß den Aufbewahrungsregeln für Daten, die mit dem Abonnementplan des Verantwortlichen verbunden sind, tun.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_9 = (i) => `Capgo wird den Verantwortlichen bei der Einhaltung der Verpflichtungen hinsichtlich der Sicherheit personenbezogener Daten unterstützen. Plausible wird dem Verantwortlichen auch bei Datenschutz-Folgenabschätzungen (DPIAs) Unterstützung bieten. Wenn eine betroffene Person ihre Rechte als betroffene Person geltend macht, wird diese Anfrage unverzüglich an den Verantwortlichen weitergeleitet.`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_title = (i) => `Kundenverpflichtungen und Capgo-Unterstützung`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_1 = (i) => `Der Kunde bestätigt, dass er alle erforderlichen Rechte hat, um Capgo die Besucherdaten zur Verarbeitung im Zusammenhang mit der Bereitstellung der Capgo-Dienste zur Verfügung zu stellen.`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_2 = (i) => `Der Kunde hat jederzeit die Datenschutzgesetze bezüglich aller Besucherdaten, die er Capgo gemäß der Vereinbarung zur Verfügung gestellt hat, einzuhalten.`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_3 = (i) => `Der Kunde versteht, dass er als Verantwortlicher (zwischen dem Kunden und Capgo) verantwortlich ist für:`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_4 = (i) => `Bestimmung der Rechtmäßigkeit jeglicher Verarbeitung, Durchführung der erforderlichen Datenschutz-Folgenabschätzungen und Rechenschaft gegenüber Aufsichtsbehörden und Einzelpersonen, sofern erforderlich;`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_5 = (i) => `Bereitstellung relevanter Datenschutzhinweise für betroffene Personen, wie sie in Ihrer Gerichtsbarkeit erforderlich sein können;`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_6 = (i) => `die Umsetzung Ihrer eigenen geeigneten technischen und organisatorischen Maßnahmen, um die Verarbeitung in Übereinstimmung mit dieser DPA sicherzustellen und nachzuweisen;`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_7 = (i) => `die relevanten Aufsichtsbehörden oder Behörden über einen Vorfall zu informieren, soweit dies nach dem Recht Ihres Rechtsgebiets erforderlich ist.`

/**
* @param {{  }} i
*/
export const dpa_liability_indemnity_title = (i) => `Haftung und Entschädigung`

/**
* @param {{  }} i
*/
export const dpa_liability_indemnity_1 = (i) => `Jede Partei stellt die andere schadlos und hält sie von allen Ansprüchen, Klagen, Ansprüchen Dritter, Verlusten, Schäden und Aufwendungen frei, die von der entschädigten Partei getragen werden und die direkt oder indirekt aus einem Verstoß gegen diese DPA entstehen oder damit in Verbindung stehen.`

/**
* @param {{  }} i
*/
export const dpa_signing_required_title = (i) => `Müssen Kunden die Capgo DPA unterschreiben?`

/**
* @param {{  }} i
*/
export const dpa_signing_required_1 = (i) => `Um unsere Produkte und Dienstleistungen nutzen zu können, müssen Sie unsere DPA akzeptieren. Durch die Nutzung unseres Produkts stimmen Sie unseren Nutzungsbedingungen zu und akzeptieren automatisch unsere DPA, sodass Sie kein separates Dokument unterzeichnen müssen. Wir gewähren allen Kunden die gleichen Datenschutzrechte und -schutz.`

/**
* @param {{  }} i
*/
export const dpa_sharing_title = (i) => `Darf ein Kunde die Capgo DPA mit seinen Kunden teilen?`

/**
* @param {{  }} i
*/
export const dpa_sharing_1 = (i) => `Ja. Die DPA ist ein öffentlich verfügbares Dokument, und Kunden, die es mit ihren Kunden teilen möchten, um unsere Sicherheitsmaßnahmen und andere Bedingungen zu bestätigen, können dies gerne tun.`

/**
* @param {{  }} i
*/
export const dpa_notification_title = (i) => `Müssen Kunden jemanden benachrichtigen, nachdem sie unsere DPA akzeptiert haben?`

/**
* @param {{  }} i
*/
export const dpa_notification_1 = (i) => `Nein. Sie sind nicht verpflichtet, uns oder eine dritte Partei über die Annahme unserer DPA zu benachrichtigen, obwohl Sie, wie oben erwähnt, dies gerne tun können.`

/**
* @param {{  }} i
*/
export const dpa_contact_title = (i) => `Kontaktieren Sie uns`

/**
* @param {{  }} i
*/
export const dpa_contact_1 = (i) => `Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, können Sie uns kontaktieren:`

/**
* @param {{  }} i
*/
export const dpa_contact_2 = (i) => `Durch den Besuch dieser Seite auf der Website:`

/**
* @param {{  }} i
*/
export const data_policy_title = (i) => `Datenrichtlinie`

/**
* @param {{  }} i
*/
export const data_policy_last_updated = (i) => `Zuletzt aktualisiert: 21. September 2023`

/**
* @param {{  }} i
*/
export const data_policy_intro = (i) => `Eine Datenrichtlinie enthält eine Reihe von Regeln, Prinzipien und Richtlinien, die einen Rahmen für verschiedene Bereiche des Datenmanagements im gesamten Unternehmen bieten, einschließlich, aber nicht beschränkt auf Datenüberwachung, Datenqualität und Datenarchitektur.`

/**
* @param {{  }} i
*/
export const data_policy_what_we_collect_title = (i) => `Was wir sammeln und wofür wir es verwenden`

/**
* @param {{  }} i
*/
export const data_policy_no_tracking = (i) => `Wir verfolgen keine Personen über ihre Geräte und die Websites und Apps, die sie besuchen. Alle Daten sind auf einen einzelnen Tag, eine einzelne Website und ein einzelnes Gerät beschränkt. Es gibt keine Möglichkeit zu wissen, ob dieselbe Person eine Website von mehr als einem Gerät aus besucht oder eine andere Website besucht.`

/**
* @param {{  }} i
*/
export const data_policy_goal = (i) => `Das Ziel von Capgo ist es, allgemeine Trends im Website-Verkehr zu verfolgen, nicht einzelne Besucher. Wir verwenden keine Cookies, wir generieren keine beständigen Identifikatoren und wir sammeln oder speichern keine persönlichen oder identifizierbaren Daten. Alle Daten sind nur aggregierte Daten und enthalten keine persönlichen Informationen.`

/**
* @param {{  }} i
*/
export const data_policy_anonymous_measurement = (i) => `Durch die Verwendung von Capgo erfolgt die gesamte Standortmessung absolut anonym. Wir messen nur die wesentlichen Datenpunkte und nichts anderes. Alle gesammelten Metriken passen auf eine einzige Seite.`

/**
* @param {{  }} i
*/
export const data_policy_unique_users_title = (i) => `Wie wir eindeutige Benutzer ohne Cookies zählen`

/**
* @param {{  }} i
*/
export const data_policy_unique_users_intro = (i) => `Die Zählung einzigartiger Besucher ist ein integraler Bestandteil der Webanalyse. Capgo versucht, ein vernünftiges Gleichgewicht zwischen der Entduplicierung von Seitenaufrufen und dem Respekt vor der Privatsphäre der Besucher zu finden.`

/**
* @param {{  }} i
*/
export const data_policy_no_persistent_identifier = (i) => `Wir versuchen nicht, einen gerätebeständigen Identifikator zu generieren, da diese als personenbezogene Daten gemäß der DSGVO gelten. Wir verwenden keine Cookies, keinen Browser-Cache und keinen lokalen Speicher. Wir speichern, rufen nichts ab oder extrahieren keine Daten von den Geräten der Besucher.`

/**
* @param {{  }} i
*/
export const data_policy_ip_user_agent = (i) => `Jede einzelne HTTP-Anforderung sendet die IP-Adresse und den User-Agent an den Server, also ist das, was wir verwenden. Wir generieren eine täglich wechselnde Kennung anhand der IP-Adresse und des User-Agents des Besuchers.`

/**
* @param {{  }} i
*/
export const data_policy_ip_accuracy = (i) => `In unseren Tests ist die Zählung von Besuchern anhand von IP-Adressen bemerkenswert genau im Vergleich zur Verwendung von Cookies. In einigen Fällen könnte es sogar genauer sein als die Verwendung eines Cookies, da einige Besucher Cookies vollständig blockieren.`

/**
* @param {{  }} i
*/
export const data_policy_compliance_info = (i) => `Wir freuen uns, Informationen darüber bereitzustellen, wie Capgo Ihnen hilft, die verschiedenen Datenschutzvorschriften einzuhalten. Wir empfehlen Ihnen, spezifische Fragen mit Ihrem Anwalt zu besprechen, um zu entscheiden, ob unser Dienst Ihnen ermöglicht, die geltenden gesetzlichen Anforderungen zu erfüllen.`

/**
* @param {{  }} i
*/
export const data_policy_ownership_title = (i) => `Datenbesitz Ihrer Webseite`

/**
* @param {{  }} i
*/
export const data_policy_ownership_intro = (i) => `Wenn Sie unseren Service nutzen, wird Capgo Informationen über Ihre Besucher sammeln. Sie vertrauen uns Ihre Site-Daten an, und dieses Vertrauen nehmen wir ernst. Die Privatsphäre Ihrer Site-Daten — und es sind Ihre Daten, nicht unsere! — ist uns sehr wichtig.`

/**
* @param {{  }} i
*/
export const data_policy_ownership_statement = (i) => `Durch die Nutzung von Capgo behalten Sie 100% Eigentum an Ihren Website-Daten. Auch wenn bei der Nutzung unseres gehosteten Dienstes Ihre Seitenanalysen auf unserem Server in der Cloud gespeichert werden, behalten Sie die vollständige Kontrolle über Ihre Website-Daten und besitzen ebenfalls alle Ihre Daten vollständig.`

/**
* @param {{  }} i
*/
export const data_policy_ownership_rights = (i) => `Sie besitzen alle Rechte, Titel und Interessen an Ihren Website-Daten. Wir erwerben keine Rechte an Ihren Website-Daten. Wir werden Ihre Site-Daten niemals an Dritte verkaufen oder weitergeben.`

/**
* @param {{  }} i
*/
export const data_policy_data_protection_1 = (i) => `Die Daten Ihrer Website werden nicht mit Werbeunternehmen oder anderen Unternehmen im Allgemeinen geteilt.`

/**
* @param {{  }} i
*/
export const data_policy_data_protection_2 = (i) => `Die Daten Ihrer Website werden überhaupt nicht an Dritte weitergegeben.`

/**
* @param {{  }} i
*/
export const data_policy_data_protection_3 = (i) => `Ihre Websitedaten werden nicht abgebaut und gesammelt, um persönliche und Verhaltens-Trends zu analysieren.`

/**
* @param {{  }} i
*/
export const data_policy_data_protection_4 = (i) => `Ihre Website-Daten sind nicht monetarisiert.`

/**
* @param {{  }} i
*/
export const data_policy_account_deletion = (i) => `Sie können jederzeit entscheiden, Ihr Konto zu löschen und Ihre Website-Statistiken zu löschen. Wir bieten einfache Löschlinks ohne Rückfragen an.`

/**
* @param {{  }} i
*/
export const data_policy_permanent_deletion = (i) => `Alle Ihre Statistiken werden dauerhaft gelöscht, sobald Sie Ihr Capgo-Konto oder Ihre Website-Statistiken löschen. Wir können diese Informationen nicht wiederherstellen, sobald sie dauerhaft gelöscht wurden.`

/**
* @param {{  }} i
*/
export const data_policy_trust_title = (i) => `Warum sollte ich Ihnen vertrauen?`

/**
* @param {{  }} i
*/
export const data_policy_trust_open_source = (i) => `Capgo ist 100 % Open Source. Unser Quellcode ist auf GitHub verfügbar und zugänglich, sodass Sie ihn lesen und überprüfen können, um sicherzustellen, dass unser Code das tut, was wir sagen.`

/**
* @param {{  }} i
*/
export const data_policy_trust_transparency = (i) => `Wir sind keine Black Box. Alles ist offensichtlich. Jeder kann den Code, den wir ausführen, einsehen, überprüfen und inspizieren, um zu verifizieren, dass wir das praktizieren, was wir predigen.`

/**
* @param {{  }} i
*/
export const data_policy_trust_importance = (i) => `Dies ist im Markt für Datenschutzsoftware entscheidend. Unternehmen und proprietäre Software können nicht immer vertraut werden, wenn es um Daten geht. Der einzige Weg, Ihr Vertrauen zu beweisen, besteht darin, Experten zu erlauben, Ihren Code zu prüfen und zu verifizieren, dass Sie tatsächlich das tun, was Sie sagen, dass Sie tun.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_title = (i) => `GDPR-Datenschutz`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_title = (i) => `Rechtsgrundlage für die Verarbeitung personenbezogener Daten gemäß der DSGVO`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_intro = (i) => `Wir können personenbezogene Daten unter den folgenden Bedingungen verarbeiten:`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_consent = (i) => `Zustimmung: Sie haben Ihre Zustimmung zur Verarbeitung personenbezogener Daten für einen oder mehrere spezifische Zwecke gegeben.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_contract = (i) => `Erfüllung eines Vertrags: Die Bereitstellung personenbezogener Daten ist erforderlich für die Erfüllung einer Vereinbarung mit Ihnen und/oder für etwaige vorvertragliche Verpflichtungen daraus.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_legal_obligations = (i) => `Rechtliche Verpflichtungen: Die Verarbeitung personenbezogener Daten ist notwendig, um einer rechtlichen Verpflichtung nachzukommen, der das Unternehmen unterliegt.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_vital_interests = (i) => `Vitalinteressen: Die Verarbeitung personenbezogener Daten ist erforderlich, um Ihre vitalen Interessen oder die einer anderen natürlichen Person zu schützen.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_public_interests = (i) => `Öffentliche Interessen: Die Verarbeitung personenbezogener Daten steht im Zusammenhang mit einer Aufgabe, die im öffentlichen Interesse oder in der Ausübung öffentlicher Befugnisse erfolgt, die dem Unternehmen übertragen sind.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_legitimate_interests = (i) => `Zulässige Interessen: Die Verarbeitung personenbezogener Daten ist erforderlich für die Verfolgung der legitimen Interessen, die von dem Unternehmen verfolgt werden.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_clarification = (i) => `In jedem Fall wird das Unternehmen gerne helfen, die spezifische rechtliche Grundlage zu klären, die für die Verarbeitung gilt, und insbesondere, ob die Bereitstellung von personenbezogenen Daten eine gesetzliche oder vertragliche Anforderung oder eine Voraussetzung ist, die erforderlich ist, um einen Vertrag abzuschließen.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_rights_title = (i) => `Ihre Rechte gemäß der DSGVO`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_rights_intro = (i) => `Die Gesellschaft verpflichtet sich, die Vertraulichkeit Ihrer personenbezogenen Daten zu wahren und Ihnen zu garantieren, dass Sie Ihre Rechte ausüben können.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_rights_list_intro = (i) => `Sie haben im Rahmen dieser Datenschutzrichtlinie und gesetzlich, wenn Sie sich innerhalb der EU befinden, das Recht,:`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_access = (i) => `Antrag auf Zugriff auf Ihre persönlichen Daten. Das Recht, die Informationen, die wir über Sie haben, einzusehen, zu aktualisieren oder zu löschen. Soweit möglich, können Sie auf Ihre persönlichen Daten direkt im Abschnitt Ihrer Kontoeinstellungen zugreifen, diese aktualisieren oder die Löschung anfordern. Wenn Sie diese Aktionen nicht selbst durchführen können, kontaktieren Sie uns bitte, damit wir Ihnen helfen können. Dies ermöglicht es Ihnen auch, eine Kopie der persönlichen Daten zu erhalten, die wir über Sie haben.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_correction = (i) => `Beantragen Sie die Berichtigung der personenbezogenen Daten, die wir über Sie haben. Sie haben das Recht, unvollständige oder ungenaue Informationen, die wir über Sie haben, berichtigen zu lassen.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_object = (i) => `Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Dieses Recht besteht, wenn wir uns auf ein berechtigtes Interesse als rechtliche Grundlage für unsere Verarbeitung stützen und es etwas in Ihrer besonderen Situation gibt, das Sie dazu veranlasst, Widerspruch gegen unsere Verarbeitung Ihrer personenbezogenen Daten aus diesem Grund einzulegen. Sie haben auch das Recht, Widerspruch einzulegen, wenn wir Ihre personenbezogenen Daten für Zwecke der Direktwerbung verarbeiten.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_erasure = (i) => `Fordern Sie die Löschung Ihrer personenbezogenen Daten an. Sie haben das Recht, uns zu bitten, personenbezogene Daten zu löschen oder zu entfernen, wenn es keinen triftigen Grund für uns gibt, mit der Verarbeitung fortzufahren.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_transfer = (i) => `Fordern Sie die Übertragung Ihrer personenbezogenen Daten an. Wir werden Ihnen oder einem von Ihnen gewählten Dritten Ihre personenbezogenen Daten in einem strukturierten, gängigen und maschinenlesbaren Format zur Verfügung stellen. Bitte beachten Sie, dass dieses Recht nur für automatisierte Informationen gilt, für die Sie ursprünglich Ihre Zustimmung gegeben haben, dass wir sie verwenden, oder wenn wir die Informationen verwendet haben, um einen Vertrag mit Ihnen zu erfüllen.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_withdraw_consent = (i) => `Widerruf Ihrer Einwilligung. Sie haben das Recht, Ihre Einwilligung zur Verwendung Ihrer personenbezogenen Daten zu widerrufen. Wenn Sie Ihre Einwilligung widerrufen, sind wir möglicherweise nicht in der Lage, Ihnen den Zugang zu bestimmten spezifischen Funktionen des Dienstes zu ermöglichen.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_exercising_rights_title = (i) => `Ausübung Ihrer Datenschutzrechte gemäß der DSGVO`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_exercising_rights_contact = (i) => `Sie können Ihre Rechte auf Zugriff, Berichtigung, Löschung und Widerspruch ausüben, indem Sie uns kontaktieren. Bitte beachten Sie, dass wir Sie möglicherweise bitten, Ihre Identität zu überprüfen, bevor wir auf solche Anfragen reagieren. Wenn Sie eine Anfrage stellen, werden wir unser Bestes tun, um Ihnen so schnell wie möglich zu antworten.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_complaint_right = (i) => `Sie haben das Recht, sich bei einer Datenschutzbehörde über unsere Erhebung und Verwendung Ihrer personenbezogenen Daten zu beschweren. Für weitere Informationen, wenn Sie im Europäischen Wirtschaftsraum (EWR) sind, wenden Sie sich bitte an Ihre lokale Datenschutzbehörde im EWR.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_title = (i) => `CCPA Datenschutz`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_intro = (i) => `Dieser Abschnitt der Datenschutzerklärung für Bewohner Kaliforniens ergänzt die Informationen, die in unserer Datenschutzrichtlinie enthalten sind, und gilt ausschließlich für alle Besucher, Benutzer und andere, die im Bundesstaat Kalifornien wohnen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_categories_title = (i) => `Kategorien personenbezogener Daten, die gesammelt werden`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_categories_intro = (i) => `Wir sammeln Informationen, die eine bestimmte Person oder ein bestimmtes Gerät identifizieren, sich darauf beziehen, beschreiben, darauf verweisen, mit ihnen in Verbindung gebracht werden können oder direkt oder indirekt damit verknüpft werden könnten. Folgendes ist eine Liste von Kategorien personenbezogener Daten, die wir möglicherweise sammeln oder in den letzten zwölf (12) Monaten von kalifornischen Einwohnern gesammelt haben.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_categories_note = (i) => `Bitte beachten Sie, dass die Kategorien und Beispiele in der untenstehenden Liste diejenigen sind, die im CCPA definiert sind. Das bedeutet nicht, dass alle Beispiele dieser Kategorie personenbezogener Daten tatsächlich von uns gesammelt wurden, sondern spiegelt unseren guten Glauben nach bestem Wissen wider, dass einige dieser Informationen aus der betreffenden Kategorie möglicherweise gesammelt wurden und werden konnten. Beispielsweise würden bestimmte Kategorien personenbezogener Daten nur gesammelt werden, wenn Sie uns solche personenbezogenen Daten direkt zur Verfügung stellen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_a = (i) => `Kategorie A: Bezeichner.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_a_examples = (i) => `Beispiele: Ein echter Name, Alias, Postanschrift, einzigartiger persönlicher Identifikator, Online-Identifikator, Internet-Protokoll-Adresse, E-Mail-Adresse, Kontoname, Führerscheinnummer, Reisepassnummer oder andere ähnliche Identifikatoren.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_a_collected = (i) => `Gesammelt: Ja.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_b = (i) => `Kategorie B: Kategorien persönlicher Informationen, die im kalifornischen Gesetz über Kundenunterlagen (Cal. Civ. Code § 1798.80(e)) aufgeführt sind.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_b_examples = (i) => `Beispiele: Ein Name, Unterschrift, Sozialversicherungsnummer, körperliche Merkmale oder Beschreibung, Adresse, Telefonnummer, Reisepassnummer, Führerschein- oder staatliche Ausweisnummer, Versicherungsnummer, Ausbildung, Beschäftigung, Beschäftigungshistorie, Kontonummer, Kreditkartennummer, Debitkartennummer oder andere finanzielle Informationen, medizinische Informationen oder Informationen zur Krankenversicherung. Einige personenbezogene Informationen, die in diese Kategorie fallen, können sich mit anderen Kategorien überschneiden.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_b_collected = (i) => `Gesammelt: Ja.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_c = (i) => `Kategorie C: Geschützte Klassifikationsmerkmale gemäß kalifornischem oder Bundesrecht.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_c_examples = (i) => `Beispiele: Alter (40 Jahre oder älter), Rasse, Hautfarbe, Herkunft, Staatsangehörigkeit, Religion oder Glaubensrichtung, Familienstand, Gesundheitszustand, körperliche oder geistige Behinderung, Geschlecht (einschließlich Geschlechter, Geschlechtsidentität, Geschlechtsausdruck, Schwangerschaft oder Entbindung und damit verbundene Gesundheitszustände), sexuelle Orientierung, Veteranen- oder Militärstatus, genetische Informationen (einschließlich familiärer genetischer Informationen).`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_c_collected = (i) => `Gesammelt: Nein.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_d = (i) => `Kategorie D: Handelsinformationen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_d_examples = (i) => `Beispiele: Aufzeichnungen und Historie von gekauften oder in Betracht gezogenen Produkten oder Dienstleistungen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_d_collected = (i) => `Gesammelt: Ja.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_e = (i) => `Kategorie E: Biometrische Informationen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_e_examples = (i) => `Beispiele: Genetische, physiologische, verhaltensbezogene und biologische Merkmale oder Aktivitätsmuster, die verwendet werden, um eine Vorlage oder andere Identifikatoren oder identifizierende Informationen zu extrahieren, wie z. B. Fingerabdrücke, Gesichtsdaten und Sprachmuster, Iris- oder Netzhauscans, Tastenanschläge, Gang- oder andere physische Muster sowie Daten zu Schlaf, Gesundheit oder Bewegung.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_e_collected = (i) => `Gesammelt: Nein.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_f = (i) => `Kategorie F: Internet oder andere ähnliche Netzwerkaktivitäten.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_f_examples = (i) => `Beispiele: Interaktion mit unserem Service oder Werbung.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_f_collected = (i) => `Gesammelt: Ja.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_g = (i) => `Kategorie G: Geolokalisierungsdaten.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_g_examples = (i) => `Beispiele: Ungefährer physischer Standort.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_g_collected = (i) => `Gesammelt: Nein.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_h = (i) => `Kategorie H: Sensordaten.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_h_examples = (i) => `Beispiele: Audio-, elektronische, visuelle, thermische, olfaktorische oder ähnliche Informationen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_h_collected = (i) => `Gesammelt: Nein.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_i = (i) => `Kategorie I: Berufliche oder arbeitsbezogene Informationen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_i_examples = (i) => `Beispiele: Aktuelle oder frühere Beschäftigungshistorie oder Leistungsbeurteilungen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_i_collected = (i) => `Gesammelt: Nein.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_j = (i) => `Kategorie J: Nicht öffentliche Bildungsinformationen (gemäß dem Family Educational Rights and Privacy Act (20 U.S.C. Abschnitt 1232g, 34 C.F.R. Teil 99)).`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_j_examples = (i) => `Beispiele: Bildungsunterlagen, die direkt mit einem Schüler verbunden sind und von einer Bildungseinrichtung oder einer Partei, die in deren Auftrag handelt, geführt werden, wie Noten, Zeugnisse, Klassenlisten, Stundenpläne, Schüleridentifikationsnummern, finanzielle Informationen zu Schülern oder disziplinarische Aufzeichnungen von Schülern.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_j_collected = (i) => `Gesammelt: Nein.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_k = (i) => `Kategorie K: Schlussfolgerungen, die aus anderen persönlichen Informationen gezogen werden.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_k_examples = (i) => `Beispiele: Profil, das die Vorlieben, Merkmale, psychologischen Trends, Neigungen, Verhaltensweisen, Einstellungen, Intelligenz, Fähigkeiten und Fertigkeiten einer Person widerspiegelt.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_k_collected = (i) => `Gesammelt: Nein.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sources_title = (i) => `Unter dem CCPA ist persönliche Information weit gefasst als Informationen zu verstehen, die eine bestimmte Person oder ein bestimmtes Gerät identifizieren, damit in Zusammenhang stehen, beschreiben, referenzieren, vernünftigerweise mit ihnen in Verbindung gebracht werden können oder direkt oder indirekt damit verknüpft werden könnten. Persönliche Informationen umfassen keine öffentlich verfügbaren Informationen aus Regierungsunterlagen, anonymisierte oder aggregierte Verbraucherinformationen oder Informationen, die vom Anwendungsbereich des CCPA ausgeschlossen sind.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sources_intro = (i) => `Wir erhalten die oben aufgeführten Kategorien personenbezogener Daten aus den folgenden Kategorien von Quellen:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_source_1 = (i) => `Direkt von Ihnen. Zum Beispiel von den Formularen, die Sie in unserem Dienst ausfüllen, von den Präferenzen, die Sie über unseren Dienst äußern oder bereitstellen, oder von Ihren Käufen in unserem Dienst.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_source_2 = (i) => `Indirekt von Ihnen. Zum Beispiel durch die Beobachtung Ihrer Aktivität in unserem Dienst.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_source_3 = (i) => `Automatisch von Ihnen. Zum Beispiel durch Cookies, die wir oder unsere Dienstleister auf Ihrem Gerät setzen, während Sie durch unseren Dienst navigieren.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_source_4 = (i) => `Von Dienstanbietern. Zum Beispiel Drittanbieter für die Zahlungsabwicklung oder andere Drittanbieter, die wir verwenden, um Ihnen den Service bereitzustellen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_title = (i) => `Verwendung personenbezogener Daten für geschäftliche oder kommerzielle Zwecke`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_intro = (i) => `Wir können personenbezogene Daten, die wir sammeln, für "Geschäftszwecke" oder "kommerzieller Zwecke" (wie unter dem CCPA definiert) verwenden oder offenlegen, wozu folgende Beispiele gehören können:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_1 = (i) => `Um unseren Dienst bereitzustellen und Ihnen unseren Dienst anzubieten.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_2 = (i) => `Um Ihnen Unterstützung zu bieten und auf Ihre Anfragen zu antworten, einschließlich der Untersuchung und Lösung Ihrer Anliegen sowie der Überwachung und Verbesserung unseres Dienstes.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_3 = (i) => `Um den Grund zu erfüllen oder zu erfüllen, haben Sie die Informationen bereitgestellt. Wenn Sie beispielsweise Ihre Kontaktdaten teilen, um eine Frage zu unserem Service zu stellen, werden wir diese personenbezogenen Daten verwenden, um auf Ihre Anfrage zu antworten.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_4 = (i) => `Um auf Anfragen der Strafverfolgungsbehörden zu reagieren und wie es das geltende Recht, Gerichtsbeschlüsse oder staatliche Vorschriften erfordern.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_5 = (i) => `Wie Ihnen beim Sammeln Ihrer persönlichen Daten mitgeteilt wurde oder wie anderweitig im CCPA dargelegt.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_6 = (i) => `Für interne Verwaltungs- und Prüfungszwecke.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_7 = (i) => `Um Sicherheitsvorfälle zu erkennen und sich gegen böswillige, täuschende, betrügerische oder illegale Aktivitäten zu schützen, einschließlich, falls erforderlich, die Verantwortlichen für solche Aktivitäten strafrechtlich zu verfolgen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_title = (i) => `Anteil persönlicher Informationen`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_intro = (i) => `Wir können Ihre persönlichen Informationen, die in den oben genannten Kategorien aufgeführt sind, mit den folgenden Kategorien von Dritten teilen:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_1 = (i) => `Dienstanbieter`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_2 = (i) => `Zahlungsabwickler`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_3 = (i) => `Unsere Partner`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_4 = (i) => `Unsere Geschäftspartner`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_5 = (i) => `Drittanbieter, denen Sie oder Ihre Vertreter uns ermächtigen, Ihre persönlichen Informationen im Zusammenhang mit Produkten oder Dienstleistungen, die wir Ihnen bereitstellen, offenzulegen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_info_title = (i) => `Verkauf persönlicher Informationen`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_info_definition = (i) => `Wie im CCPA definiert, bedeuten "verkaufen" und "Verkauf" das Verkaufen, Vermieten, Freigeben, Offenlegen, Verbreiten, Bereitstellen, Übertragen oder anderweitige Übermitteln mündlich, schriftlich oder durch elektronische oder andere Mittel von persönlichen Informationen eines Verbrauchers durch das Unternehmen an eine dritte Partei gegen wertvolle Gegenleistung. Das bedeutet, dass wir möglicherweise irgendeine Art von Vorteil im Austausch für das Teilen persönlicher Informationen erhalten haben, jedoch nicht unbedingt einen finanziellen Vorteil.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_info_note = (i) => `Bitte beachten Sie, dass die unten aufgeführten Kategorien diejenigen sind, die im CCPA definiert sind. Dies bedeutet nicht, dass tatsächlich alle Beispiele dieser Kategorie personenbezogener Daten verkauft wurden, sondern spiegelt unseren guten Glauben nach bestem Wissen wider, dass einige dieser Informationen aus der betreffenden Kategorie möglicherweise geteilt wurden und möglicherweise gegen Entgelt weitergegeben wurden.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_info_statement = (i) => `Wir können verkauft haben und haben möglicherweise in den letzten zwölf (12) Monaten folgende Kategorien von personenbezogenen Informationen verkauft:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_info_categories = (i) => `Kategorie A: Identifikatoren  
Kategorie B: Kategorien personenbezogener Informationen gemäß dem kalifornischen Gesetz über Kundenunterlagen (Cal. Civ. Code § 1798.80(e))  
Kategorie D: Geschäftsinformationen  
Kategorie F: Internet- oder ähnliche Netzwerkaktivitäten`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_share_of_info_title = (i) => `Anteil an persönlichen Informationen`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_share_of_info_statement = (i) => `Wir können Ihre persönlichen Informationen, die in den oben genannten Kategorien identifiziert sind, mit den folgenden Kategorien von Dritten teilen:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_share_of_info_categories = (i) => `Dienstanbieter  
Zahlungsabwickler  
Unsere Partner  
Unsere Geschäftspartner  
Drittanbieter, denen Sie oder Ihre Beauftragten uns autorisieren, Ihre persönlichen Daten im Zusammenhang mit Produkten oder Dienstleistungen, die wir Ihnen bereitstellen, offenzulegen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_minors_info_title = (i) => `Verkauf personenbezogener Daten von Minderjährigen unter 16 Jahren`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_minors_info_statement = (i) => `Wir sammeln wissentlich keine persönlichen Informationen von Minderjährigen unter 16 Jahren über unseren Dienst, obwohl bestimmte Websites von Drittanbietern, auf die wir verlinken, dies tun können. Diese Websites von Drittanbietern haben ihre eigenen Nutzungsbedingungen und Datenschutzrichtlinien, und wir empfehlen Eltern und gesetzlichen Vertretern, die Internetnutzung ihrer Kinder zu überwachen und ihre Kinder anzuweisen, niemals Informationen auf anderen Websites ohne deren Erlaubnis bereitzustellen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_minors_info_policy = (i) => `Wir verkaufen die persönlichen Informationen von Verbrauchern, von denen wir tatsächlich wissen, dass sie unter 16 Jahre alt sind, nicht, es sei denn, wir erhalten eine ausdrückliche Genehmigung (das „Recht auf Zustimmung“) von dem Verbraucher, der zwischen 13 und 16 Jahre alt ist, oder von dem Elternteil oder Vormund eines Verbrauchers, der unter 13 Jahre alt ist. Verbraucher, die dem Verkauf persönlicher Informationen zustimmen, können zu jedem Zeitpunkt von zukünftigen Verkäufen absehen. Um das Recht auf Widerspruch auszuüben, können Sie (oder Ihr bevollmächtigter Vertreter) uns eine Anfrage senden, indem Sie Kontakt mit uns aufnehmen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_minors_info_request = (i) => `Wenn Sie Grund zu der Annahme haben, dass ein Kind unter 13 Jahren (oder 16 Jahren) uns persönliche Informationen zur Verfügung gestellt hat, kontaktieren Sie uns bitte mit ausreichend Details, um uns zu ermöglichen, diese Informationen zu löschen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_your_rights_title = (i) => `Ihre Rechte gemäß dem CCPA`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_your_rights_intro = (i) => `Das CCPA gewährt Bewohnern Kaliforniens bestimmte Rechte in Bezug auf ihre persönlichen Informationen. Wenn Sie ein Bewohner Kaliforniens sind, haben Sie die folgenden Rechte:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_notice = (i) => `Das Recht auf Benachrichtigung. Sie haben das Recht, benachrichtigt zu werden, welche Kategorien personenbezogener Daten gesammelt werden und zu welchen Zwecken die personenbezogenen Daten verwendet werden.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request = (i) => `Das Recht auf Anfrage. Unter dem CCPA haben Sie das Recht, dass wir Ihnen Informationen über unsere Erhebung, Nutzung, den Verkauf, die Offenlegung zu Geschäftszwecken und die Weitergabe personenbezogener Daten mitteilen. Sobald wir Ihre Anfrage erhalten und bestätigt haben, werden wir Ihnen Folgendes offenlegen:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_1 = (i) => `Die Kategorien personenbezogener Daten, die wir über Sie gesammelt haben`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_2 = (i) => `Die Kategorien von Quellen für die persönlichen Informationen, die wir über Sie gesammelt haben`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_3 = (i) => `Unser geschäftlicher oder kommerzieller Zweck für das Sammeln oder den Verkauf dieser persönlichen Informationen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_4 = (i) => `Die Kategorien von Dritten, mit denen wir diese personenbezogenen Informationen teilen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_5 = (i) => `Die spezifischen persönlichen Informationen, die wir über Sie gesammelt haben`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_6 = (i) => `Wenn wir Ihre persönlichen Informationen verkauft oder für geschäftliche Zwecke offengelegt haben, werden wir Ihnen Folgendes mitteilen:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_6_1 = (i) => `Die Kategorien der verkauften persönlichen Informationskategorien`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_6_2 = (i) => `Die Kategorien der offengelegten persönlichen Informationskategorien`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_opt_out = (i) => `Das Recht, der Verkaufs von persönlichen Daten zu widersprechen (Opt-out). Sie haben das Recht, uns anzuweisen, Ihre persönlichen Informationen nicht zu verkaufen. Um eine Opt-out-Anfrage zu stellen, kontaktieren Sie uns bitte.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete = (i) => `Das Recht auf Löschung von personenbezogenen Daten. Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen, vorbehaltlich bestimmter Ausnahmen. Sobald wir Ihre Anfrage erhalten und bestätigt haben, werden wir Ihre persönlichen Informationen aus unseren Aufzeichnungen löschen (und unsere Dienstanbieter anweisen, diese zu löschen), es sei denn, es liegt eine Ausnahme vor. Wir können Ihre Anfrage auf Löschung ablehnen, wenn die Aufbewahrung der Informationen für uns oder unsere Dienstanbieter erforderlich ist, um:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_1 = (i) => `Vervollständigen Sie die Transaktion, für die wir die persönlichen Informationen gesammelt haben, erbringen Sie ein Gut oder eine Dienstleistung, die Sie angefordert haben, ergreifen Sie Maßnahmen, die im Rahmen unserer laufenden Geschäftsbeziehung mit Ihnen vernünftigerweise erwartet werden können, oder erfüllen Sie anderweitig unseren Vertrag mit Ihnen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_2 = (i) => `Sicherheitsvorfälle erkennen, sich gegen böswillige, täuschende, betrügerische oder illegale Aktivitäten schützen oder diejenigen verfolgen, die für solche Aktivitäten verantwortlich sind.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_3 = (i) => `Debug-Produkte, um Fehler zu identifizieren und zu beheben, die die aktuelle beabsichtigte Funktionalität beeinträchtigen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_4 = (i) => `Äußern Sie die Meinungsfreiheit, gewährleisten Sie das Recht eines anderen Verbrauchers, seine Meinungsfreiheitsrechte auszuüben, oder üben Sie ein weiteres gesetzlich vorgesehenes Recht aus.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_5 = (i) => `Befolgen Sie das kalifornische Gesetz über den Datenschutz bei elektronischen Kommunikationsmitteln (Cal. Strafgesetzbuch § 1546 ff.).`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_6 = (i) => `Engagieren Sie sich in öffentlicher oder peer-reviewed wissenschaftlicher, historischer oder statistischer Forschung im öffentlichen Interesse, die allen anderen anwendbaren Ethik- und Datenschutzgesetzen entspricht, wenn das Löschen der Informationen die Durchführung der Forschung wahrscheinlich unmöglich macht oder erheblich beeinträchtigt, sofern Sie zuvor eine informierte Einwilligung erteilt haben.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_7 = (i) => `Ermöglichen Sie ausschließlich interne Nutzungen, die vernünftig mit den Erwartungen der Verbraucher in Einklang stehen, basierend auf Ihrer Beziehung zu uns.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_8 = (i) => `Einer rechtlichen Verpflichtung nachkommen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_9 = (i) => `Machen Sie andere interne und rechtmäßige Verwendungen dieser Informationen, die mit dem Kontext kompatibel sind, in dem Sie sie bereitgestellt haben.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_non_discrimination = (i) => `Das Recht, nicht diskriminiert zu werden. Sie haben das Recht, nicht diskriminiert zu werden, weil Sie eines Ihrer Verbraucherrechte ausüben, einschließlich durch:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_non_discrimination_1 = (i) => `Die Verweigerung von Waren oder Dienstleistungen an Sie`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_non_discrimination_2 = (i) => `Unterschiedliche Preise oder Tarife für Waren oder Dienstleistungen zu verlangen, einschließlich der Verwendung von Rabatten oder anderen Vorteilen oder der Verhängung von Strafen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_non_discrimination_3 = (i) => `Bereitstellung eines anderen Niveaus oder einer anderen Qualität von Waren oder Dienstleistungen für Sie`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_non_discrimination_4 = (i) => `Vorschlagen, dass Sie einen anderen Preis oder Tarif für Waren oder Dienstleistungen oder ein anderes Niveau oder eine andere Qualität von Waren oder Dienstleistungen erhalten werden.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_title = (i) => `Ausübung Ihrer CCPA-Datenschutzrechte`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_contact = (i) => `Um eines Ihrer Rechte gemäß dem CCPA auszuüben, und wenn Sie ein Einwohner Kaliforniens sind, können Sie uns kontaktieren:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_website = (i) => `Durch den Besuch dieser Seite auf unserer Website: $1/#support`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_authorized_agent = (i) => `Nur Sie oder eine Person, die beim Sekretär des Bundesstaates Kalifornien registriert ist und die Sie autorisieren, in Ihrem Namen zu handeln, dürfen eine prüfbare Anfrage bezüglich Ihrer persönlichen Informationen stellen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_request_must = (i) => `Ihre Anfrage an uns muss:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_request_must_1 = (i) => `Stellen Sie ausreichende Informationen zur Verfügung, die es uns ermöglichen, vernünftigerweise zu überprüfen, dass Sie die Person sind, über die wir personenbezogene Daten gesammelt haben, oder ein bevollmächtigter Vertreter.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_request_must_2 = (i) => `Beschreiben Sie Ihre Anfrage mit ausreichenden Details, die es uns ermöglichen, sie richtig zu verstehen, zu bewerten und darauf zu reagieren.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_cannot_respond = (i) => `Wir können Ihrer Anfrage nicht nachkommen oder Ihnen die benötigten Informationen bereitstellen, wenn wir nicht:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_cannot_respond_1 = (i) => `Überprüfen Sie Ihre Identität oder Befugnis, um die Anfrage zu stellen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_cannot_respond_2 = (i) => `Und bestätigen Sie, dass die persönlichen Informationen Sie betreffen.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_disclosure = (i) => `Wir werden die erforderlichen Informationen kostenlos innerhalb von 45 Tagen nach Erhalt Ihrer überprüfbaren Anfrage offenlegen und bereitstellen. Der Zeitraum zur Bereitstellung der erforderlichen Informationen kann einmalig um weitere 45 Tage verlängert werden, wenn dies raisonnabel notwendig ist und mit vorheriger Ankündigung geschieht.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_disclosure_period = (i) => `Alle Offenlegungen, die wir bereitstellen, betreffen nur den 12-Monats-Zeitraum vor dem Eingang der nachweisbaren Anfrage.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_data_portability = (i) => `Für Anfragen zur Datenportabilität werden wir ein Format auswählen, um Ihre persönlichen Informationen bereitzustellen, das leicht verwendbar ist und es Ihnen ermöglichen sollte, die Informationen ohne Hindernisse von einer Entität zu einer anderen zu übertragen.`

/**
* @param {{  }} i
*/
export const privacy_title = (i) => `Datenschutzerklärung`

/**
* @param {{  }} i
*/
export const privacy_last_updated = (i) => `Zuletzt aktualisiert: 28. Januar 2022`

/**
* @param {{  }} i
*/
export const privacy_description = (i) => `Diese Datenschutzrichtlinie beschreibt unsere Richtlinien und Verfahren zur Erhebung, Nutzung und Offenlegung Ihrer Informationen, wenn Sie den Dienst nutzen, und informiert Sie über Ihre Datenschutzrechte sowie darüber, wie das Gesetz Sie schützt.`

/**
* @param {{  }} i
*/
export const privacy_agreement = (i) => `Wir verwenden Ihre personenbezogenen Daten, um den Dienst bereitzustellen und zu verbessern. Durch die Nutzung des Dienstes stimmen Sie der Erhebung und Verwendung von Informationen gemäß dieser Datenschutzerklärung zu.`

/**
* @param {{  }} i
*/
export const privacy_interpretation_title = (i) => `Interpretation und Definitionen`

/**
* @param {{  }} i
*/
export const privacy_interpretation_subtitle = (i) => `Interpretation`

/**
* @param {{  }} i
*/
export const privacy_interpretation_text = (i) => `Die Wörter, deren erster Buchstabe großgeschrieben ist, haben Bedeutungen, die unter den folgenden Bedingungen definiert sind. Die folgenden Definitionen haben unabhängig davon, ob sie im Singular oder Plural erscheinen, die gleiche Bedeutung.`

/**
* @param {{  }} i
*/
export const privacy_definitions_subtitle = (i) => `Definitionen`

/**
* @param {{  }} i
*/
export const privacy_definitions_intro = (i) => `Für die Zwecke dieser Datenschutzrichtlinie:`

/**
* @param {{  }} i
*/
export const privacy_definition_account = (i) => `**Konto** bezeichnet ein einzigartiges Konto, das für Sie erstellt wurde, um auf unseren Service oder Teile unseres Services zuzugreifen.`

/**
* @param {{  }} i
*/
export const privacy_definition_affiliate = (i) => `**Affiliate** bedeutet eine Einheit, die ein Unternehmen kontrolliert, von einem Unternehmen kontrolliert wird oder unter gemeinsamer Kontrolle mit einer Partei steht, wobei "Kontrolle" den Besitz von 50 % oder mehr der Anteile, Eigenkapitalanteile oder anderer Wertpapiere bedeutet, die das Recht haben, an der Wahl von Direktoren oder anderen Leitungsbehörden teilzunehmen.`

/**
* @param {{  }} i
*/
export const privacy_definition_application = (i) => `**Anwendung** bezeichnet das von der Unternehmens bereitgestellte Softwareprogramm, das Sie auf einem elektronischen Gerät heruntergeladen haben, das $1 genannt wird.`

/**
* @param {{  }} i
*/
export const privacy_definition_business = (i) => `**Unternehmen** im Sinne des CCPA (California Consumer Privacy Act) bezieht sich auf das Unternehmen als die juristische Person, die die persönlichen Informationen der Verbraucher sammelt und die Zwecke und Mittel der Verarbeitung der persönlichen Informationen der Verbraucher bestimmt oder im Auftrag dessen solche Informationen gesammelt werden und die allein oder gemeinsam mit anderen die Zwecke und Mittel der Verarbeitung der persönlichen Informationen der Verbraucher bestimmt, die im Bundesstaat Kalifornien Geschäfte tätigt.`

/**
* @param {{  }} i
*/
export const privacy_definition_company = (i) => `**Unternehmen** (in dieser Vereinbarung als "das Unternehmen", "Wir", "Uns" oder "Unser" bezeichnet) bezieht sich auf Digital shift OU, 6 sepapaja 15510 Tallinn.`

/**
* @param {{  }} i
*/
export const privacy_definition_company_gdpr = (i) => `Für die Zwecke der DSGVO ist das Unternehmen der Datenverantwortliche.`

/**
* @param {{  }} i
*/
export const privacy_definition_consumer = (i) => `**Verbraucher** bedeutet im Sinne des CCPA (California Consumer Privacy Act) eine natürliche Person, die in Kalifornien ansässig ist. Ein Einwohner, wie im Gesetz definiert, umfasst (1) jede Person, die sich aus einem anderen als vorübergehenden oder flüchtigen Zweck in den USA befindet, und (2) jede Person, die ihren Wohnsitz in den USA hat und sich aus einem vorübergehenden oder flüchtigen Zweck außerhalb der USA befindet.`

/**
* @param {{  }} i
*/
export const privacy_definition_country = (i) => `**Land** bezieht sich auf: Estland`

/**
* @param {{  }} i
*/
export const privacy_definition_data_controller = (i) => `**Datenverantwortlicher**, im Sinne der DSGVO (Datenschutz-Grundverordnung), bezieht sich auf das Unternehmen als die juristische Person, die allein oder gemeinsam mit anderen die Zwecke und Mittel der Verarbeitung personenbezogener Daten bestimmt.`

/**
* @param {{  }} i
*/
export const privacy_definition_device = (i) => `**Gerät** bezeichnet jedes Gerät, das auf den Dienst zugreifen kann, wie z. B. einen Computer, ein Mobiltelefon oder ein digitales Tablet.`

/**
* @param {{  }} i
*/
export const privacy_definition_do_not_track = (i) => `**Nicht verfolgen** (DNT) ist ein Konzept, das von den US-Regulierungsbehörden, insbesondere der US Federal Trade Commission (FTC), gefördert wurde, damit die Internetindustrie einen Mechanismus entwickelt und implementiert, der es Internetnutzern ermöglicht, das Tracking ihrer Online-Aktivitäten über Websites hinweg zu kontrollieren.`

/**
* @param {{  }} i
*/
export const privacy_definition_personal_data = (i) => `**Personenbezogene Daten** sind alle Informationen, die sich auf eine identifizierte oder identifizierbare Person beziehen.`

/**
* @param {{  }} i
*/
export const privacy_definition_personal_data_gdpr = (i) => `Für die Zwecke der DSGVO bezeichnet personenbezogene Daten alle Informationen, die sich auf Sie beziehen, wie z. B. ein Name, eine Identifikationsnummer, Standortdaten, eine Online-Identifikation oder auf einen oder mehrere spezifische Faktoren der physischen, physiologischen, genetischen, mentalen, wirtschaftlichen, kulturellen oder sozialen Identität.`

/**
* @param {{  }} i
*/
export const privacy_definition_personal_data_ccpa = (i) => `Für die Zwecke des CCPA bedeutet Persönliche Daten alle Informationen, die Sie identifizieren, damit in Verbindung stehen, beschreiben oder mit Ihnen in Verbindung gebracht werden können, oder die vernünftigerweise direkt oder indirekt mit Ihnen verknüpft werden könnten.`

/**
* @param {{  }} i
*/
export const privacy_definition_sale = (i) => `**Verkauf**, im Sinne des CCPA (California Consumer Privacy Act), bedeutet den Verkauf, die Vermietung, die Freigabe, die Offenlegung, die Verbreitung, die Bereitstellung, die Übertragung oder anderweitige mündliche, schriftliche oder elektronische Kommunikationen von persönlichen Informationen eines Verbrauchers an ein anderes Unternehmen oder eine dritte Partei gegen eine monetäre oder andere wertvolle Gegenleistung.`

/**
* @param {{  }} i
*/
export const privacy_definition_service = (i) => `**Service** bezieht sich auf die Anwendung.`

/**
* @param {{  }} i
*/
export const privacy_definition_service_provider = (i) => `**Dienstleister** bezeichnet jede natürliche oder juristische Person, die die Daten im Auftrag des Unternehmens verarbeitet. Dies bezieht sich auf Drittunternehmen oder Einzelpersonen, die vom Unternehmen engagiert werden, um den Dienst zu erleichtern, um den Dienst im Namen des Unternehmens bereitzustellen, um mit dem Dienst verbundene Dienstleistungen zu erbringen oder um das Unternehmen bei der Analyse zu unterstützen, wie der Dienst genutzt wird. Im Sinne der DSGVO gelten Dienstleister als Datenverarbeiter.`

/**
* @param {{  }} i
*/
export const privacy_definition_usage_data = (i) => `**Nutzungsdaten** beziehen sich auf Daten, die automatisch gesammelt werden, entweder generiert durch die Nutzung des Dienstes oder aus der Dienstinfrastruktur selbst (zum Beispiel die Dauer eines Seitenbesuchs).`

/**
* @param {{  }} i
*/
export const privacy_definition_you = (i) => `**Sie** bezeichnet die Person, die auf den Dienst zugreift oder ihn nutzt, oder das Unternehmen oder eine andere juristische Person, in deren Namen diese Person auf den Dienst zugreift oder ihn nutzt, sofern zutreffend.`

/**
* @param {{  }} i
*/
export const privacy_definition_you_gdpr = (i) => `Unter der DSGVO (Datenschutz-Grundverordnung) können Sie als betroffene Person oder als Benutzer bezeichnet werden, da Sie die Person sind, die den Dienst nutzt.`

/**
* @param {{  }} i
*/
export const privacy_collecting_data_title = (i) => `Das Sammeln und Verwenden Ihrer persönlichen Daten`

/**
* @param {{  }} i
*/
export const privacy_types_of_data_title = (i) => `Arten von gesammelten Daten`

/**
* @param {{  }} i
*/
export const privacy_personal_data_title = (i) => `Personenbezogene Daten`

/**
* @param {{  }} i
*/
export const privacy_personal_data_description = (i) => `Während Sie unseren Dienst nutzen, können wir Sie bitten, uns bestimmte personenbezogene Daten zur Verfügung zu stellen, die verwendet werden können, um Sie zu kontaktieren oder zu identifizieren. Zu den personenbezogenen Daten können unter anderem Folgendes gehören:`

/**
* @param {{  }} i
*/
export const privacy_personal_data_usage = (i) => `Nutzungsdaten`

/**
* @param {{  }} i
*/
export const privacy_usage_data_title = (i) => `Nutzungsdaten`

/**
* @param {{  }} i
*/
export const privacy_usage_data_description = (i) => `Nutzungsdaten werden automatisch gesammelt, wenn der Dienst genutzt wird.`

/**
* @param {{  }} i
*/
export const privacy_usage_data_details = (i) => `Nutzungsdaten können Informationen enthalten wie die IP-Adresse Ihres Geräts, den Browsertype, die Browserversion, die Seiten unseres Dienstes, die Sie besuchen, das Datum und die Uhrzeit Ihres Besuchs, die auf diesen Seiten verbrachte Zeit, einzigartige Gerätebezeichner und andere Diagnosedaten.`

/**
* @param {{  }} i
*/
export const privacy_usage_data_mobile = (i) => `Wenn Sie auf den Dienst über ein Mobilgerät zugreifen, können wir automatisch bestimmte Informationen sammeln, einschließlich, aber nicht beschränkt auf, den Typ des von Ihnen verwendeten Mobilgeräts, die eindeutige ID Ihres Mobilgeräts, die IP-Adresse Ihres Mobilgeräts, Ihr mobiles Betriebssystem, den Typ des von Ihnen verwendeten mobilen Internetbrowsers, eindeutige Gerätekennungen und andere Diagnosedaten.`

/**
* @param {{  }} i
*/
export const privacy_usage_data_browser = (i) => `Wir können auch Informationen sammeln, die Ihr Browser sends, jedes Mal, wenn Sie unseren Dienst besuchen oder wenn Sie über ein mobiles Gerät auf den Dienst zugreifen.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_title = (i) => `Verwendung Ihrer persönlichen Daten`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_intro = (i) => `Das Unternehmen darf personenbezogene Daten für die folgenden Zwecke verwenden:`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_provide_service = (i) => `**Um unseren Service bereitzustellen und aufrechtzuerhalten**, einschließlich der Überwachung der Nutzung unseres Services.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_manage_account = (i) => `**Um Ihr Konto zu verwalten:** um Ihre Registrierung als Benutzer des Dienstes zu verwalten. Die von Ihnen bereitgestellten personenbezogenen Daten können Ihnen den Zugriff auf verschiedene Funktionen des Dienstes ermöglichen, die Ihnen als registrierter Benutzer zur Verfügung stehen.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_performance = (i) => `**Für die Durchführung eines Vertrags:** die Entwicklung, Einhaltung und Durchführung des Kaufvertrags für die Produkte, Artikel oder Dienstleistungen, die Sie über den Service bei uns gekauft haben, oder eines anderen Vertrags mit uns.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_contact = (i) => `**Um Sie zu kontaktieren:** Um Sie per E-Mail, Telefonanrufen, SMS oder anderen gleichwertigen Formen elektronischer Kommunikation zu kontaktieren, wie z. B. Push-Benachrichtigungen einer mobilen Anwendung zu Updates oder informativen Mitteilungen, die sich auf die Funktionen, Produkte oder vertraglichen Dienstleistungen beziehen, einschließlich der Sicherheitsupdates, wenn dies erforderlich oder zumutbar für deren Umsetzung ist.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_offers = (i) => `**Um Ihnen** Nachrichten, Sonderangebote und allgemeine Informationen über andere Waren, Dienstleistungen und Veranstaltungen, die wir anbieten und die ähnlich sind wie die, die Sie bereits gekauft oder angefragt haben, bereitzustellen, es sei denn, Sie haben sich entschieden, solche Informationen nicht zu erhalten.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_requests = (i) => `**Um Ihre Anfragen zu verwalten:** Um Ihre Anfragen an uns zu bearbeiten und zu verwalten.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_business_transfers = (i) => `**Für geschäftliche Übertragungen:** Wir dürfen Ihre Informationen verwenden, um eine Fusion, Abspaltung, Umstrukturierung, Reorganisation, Auflösung oder einen anderen Verkauf oder Transfer von einigen oder allen unseren Vermögenswerten zu bewerten oder durchzuführen, seien diese als fortlaufendes Unternehmen oder im Rahmen eines Insolvenz-, Liquidations- oder ähnlichen Verfahrens, bei dem die von uns über unsere Dienstnutzenden gehaltenen personenbezogenen Daten zu den übertragenen Vermögenswerten gehören.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_other_purposes = (i) => `**Für andere Zwecke**: Wir können Ihre Informationen für andere Zwecke verwenden, wie z.B. Datenanalyse, Identifizierung von Nutzungstrends, Bestimmung der Wirksamkeit unserer Werbekampagnen und zur Bewertung und Verbesserung unseres Services, unserer Produkte, Dienstleistungen, Marketing und Ihrer Erfahrung.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_intro = (i) => `Wir können Ihre persönlichen Daten in den folgenden Situationen teilen:`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_service_providers = (i) => `**Mit Dienstanbietern:** Wir können Ihre persönlichen Daten mit Dienstanbietern teilen, um die Nutzung unseres Dienstes zu überwachen und zu analysieren und um Sie zu kontaktieren.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_business_transfers = (i) => `**Für Unternehmensübertragungen:** Wir können Ihre persönlichen Informationen im Zusammenhang mit oder während der Verhandlungen über eine Fusion, den Verkauf von Unternehmensvermögen, Finanzierungen oder die Übernahme eines Teils oder des gesamten Unternehmens an ein anderes Unternehmen teilen oder übertragen.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_affiliates = (i) => `**Mit Affiliate:** Wir können Ihre Informationen mit unseren Affiliates teilen, in welchem Fall wir von diesen Affiliates verlangen werden, diese Datenschutzerklärung einzuhalten. Affiliates umfassen unser Mutterunternehmen und alle anderen Tochtergesellschaften, Joint-Venture-Partner oder andere Unternehmen, die wir kontrollieren oder die unter gemeinsamer Kontrolle mit uns stehen.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_business_partners = (i) => `**Mit Geschäftspartnern:** Wir können Ihre Informationen mit unseren Geschäftspartnern teilen, um Ihnen bestimmte Produkte, Dienstleistungen oder Aktionen anzubieten.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_other_users = (i) => `**Mit anderen Benutzern:** Wenn Sie persönliche Informationen teilen oder anderweitig in den öffentlichen Bereichen mit anderen Benutzern interagieren, können solche Informationen von allen Benutzern angezeigt werden und können öffentlich nach außen verteilt werden.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_consent = (i) => `**Mit Ihrer Zustimmung**: Wir können Ihre persönlichen Informationen zu einem anderen Zweck mit Ihrer Zustimmung offenlegen.`

/**
* @param {{  }} i
*/
export const privacy_retention_of_data_title = (i) => `Aufbewahrung Ihrer persönlichen Daten`

/**
* @param {{  }} i
*/
export const privacy_retention_of_data_description = (i) => `Das Unternehmen wird Ihre persönlichen Daten nur so lange aufbewahren, wie es für die in dieser Datenschutzrichtlinie festgelegten Zwecke erforderlich ist. Wir werden Ihre persönlichen Daten nur in dem Umfang speichern und verwenden, der notwendig ist, um unseren gesetzlichen Verpflichtungen nachzukommen (zum Beispiel, wenn wir gesetzlich verpflichtet sind, Ihre Daten zu speichern, um geltenden Gesetzen zu entsprechen), um Streitigkeiten zu lösen und unsere gesetzlichen Vereinbarungen und Richtlinien durchzusetzen.`

/**
* @param {{  }} i
*/
export const privacy_retention_of_usage_data = (i) => `Das Unternehmen wird auch Nutzungsdaten für interne Analysezwecke speichern. Nutzungsdaten werden in der Regel für einen kürzeren Zeitraum aufbewahrt, es sei denn, diese Daten werden verwendet, um die Sicherheit zu stärken oder die Funktionalität unseres Dienstes zu verbessern, oder wir sind gesetzlich verpflichtet, diese Daten über einen längeren Zeitraum aufzubewahren.`

/**
* @param {{  }} i
*/
export const privacy_transfer_of_data_title = (i) => `Übertragung Ihrer personenbezogenen Daten`

/**
* @param {{  }} i
*/
export const privacy_transfer_of_data_description = (i) => `Ihre Informationen, einschließlich personenbezogener Daten, werden in den Betriebseinrichtungen des Unternehmens und an anderen Orten verarbeitet, an denen sich die an der Verarbeitung beteiligten Parteien befinden. Das bedeutet, dass diese Informationen an Computer übertragen und dort gespeichert werden können, die sich außerhalb Ihres Bundesstaates, Ihrer Provinz, Ihres Landes oder einer anderen staatlichen Zuständigkeitsbereich befinden, in dem die Datenschutzgesetze von denjenigen Ihrer Zuständigkeit abweichen können.`

/**
* @param {{  }} i
*/
export const privacy_transfer_of_data_consent = (i) => `Ihre Zustimmung zu dieser Datenschutzrichtlinie, gefolgt von Ihrer Übermittlung dieser Informationen, stellt Ihre Vereinbarung zu diesem Transfer dar.`

/**
* @param {{  }} i
*/
export const privacy_transfer_of_data_safeguards = (i) => `Das Unternehmen wird alle vernünftigerweise erforderlichen Schritte unternehmen, um sicherzustellen, dass Ihre Daten sicher und gemäß dieser Datenschutzrichtlinie behandelt werden, und es wird keine Übertragung Ihrer personenbezogenen Daten an eine Organisation oder ein Land stattfinden, es sei denn, es sind angemessene Kontrollen vorhanden, einschließlich der Sicherheit Ihrer Daten und anderer persönlicher Informationen.`

/**
* @param {{  }} i
*/
export const privacy_disclosure_of_data_title = (i) => `Offenlegung Ihrer persönlichen Daten`

/**
* @param {{  }} i
*/
export const privacy_disclosure_business_transactions_title = (i) => `Geschäftstransaktionen`

/**
* @param {{  }} i
*/
export const privacy_disclosure_business_transactions_description = (i) => `Wenn das Unternehmen an einer Fusion, Übernahme oder Vermögensveräußertung beteiligt ist, können Ihre personenbezogenen Daten übertragen werden. Wir werden Sie benachrichtigen, bevor Ihre personenbezogenen Daten übertragen werden und einer anderen Datenschutzrichtlinie unterliegen.`

/**
* @param {{  }} i
*/
export const privacy_disclosure_law_enforcement_title = (i) => `Gesetzesvollzugsbehörden`

/**
* @param {{  }} i
*/
export const privacy_disclosure_law_enforcement_description = (i) => `Unter bestimmten Umständen kann das Unternehmen verpflichtet sein, Ihre personenbezogenen Daten offenzulegen, wenn dies gesetzlich vorgeschrieben ist oder als Reaktion auf gültige Anfragen von öffentlichen Behörden (z. B. einem Gericht oder einer Regierungsbehörde).`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_title = (i) => `Andere rechtliche Anforderungen`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_description = (i) => `Das Unternehmen kann Ihre personenbezogenen Daten in dem guten Glauben offenlegen, dass eine solche Maßnahme erforderlich ist, um:`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_comply = (i) => `Einhaltung einer gesetzlichen Verpflichtung`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_protect = (i) => `Schützen und verteidigen Sie die Rechte oder das Eigentum des Unternehmens.`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_prevent = (i) => `Mögliche Fehlverhalten im Zusammenhang mit dem Dienst verhindern oder untersuchen`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_protect_personal = (i) => `Schützen Sie die persönliche Sicherheit der Nutzer des Dienstes oder der Allgemeinheit.`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_protect_legal = (i) => `Schutz vor rechtlicher Haftung`

/**
* @param {{  }} i
*/
export const privacy_security_of_data_title = (i) => `Sicherheit Ihrer persönlichen Daten`

/**
* @param {{  }} i
*/
export const privacy_security_of_data_description = (i) => `Die Sicherheit Ihrer persönlichen Daten ist uns wichtig, aber denken Sie daran, dass keine Übertragungsmethode über das Internet oder elektronische Speicherweise zu 100 % sicher ist. Während wir uns bemühen, kommerziell akzeptable Mittel zum Schutz Ihrer persönlichen Daten zu verwenden, können wir deren absolute Sicherheit nicht garantieren.`

/**
* @param {{  }} i
*/
export const privacy_children_privacy_title = (i) => `Kinderschutz bei der Privatsphäre`

/**
* @param {{  }} i
*/
export const privacy_children_privacy_description = (i) => `Unser Dienst richtet sich nicht an Personen unter 13 Jahren. Wir sammeln wissentlich keine personenbezogenen Daten von Personen unter 13 Jahren. Wenn Sie ein Elternteil oder Erziehungsberechtigter sind und wissen, dass Ihr Kind uns personenbezogene Daten zur Verfügung gestellt hat, kontaktieren Sie uns bitte. Falls wir feststellen, dass wir personenbezogene Daten von jemandem unter 13 Jahren ohne Überprüfung der elterlichen Zustimmung gesammelt haben, ergreifen wir Maßnahmen, um diese Informationen von unseren Servern zu entfernen.`

/**
* @param {{  }} i
*/
export const privacy_children_privacy_consent = (i) => `Wenn wir auf Zustimmung als rechtliche Grundlage für die Verarbeitung Ihrer Informationen angewiesen sind und Ihr Land die Zustimmung eines Elternteils erfordert, benötigen wir möglicherweise die Zustimmung Ihres Elternteils, bevor wir diese Informationen sammeln und verwenden.`

/**
* @param {{  }} i
*/
export const privacy_links_to_other_websites_title = (i) => `Links zu anderen Websites`

/**
* @param {{  }} i
*/
export const privacy_links_to_other_websites_description = (i) => `Unser Dienst kann Links zu anderen Webseiten enthalten, die nicht von uns betrieben werden. Wenn Sie auf einen Link eines Drittanbieters klicken, werden Sie zu der Website dieses Drittanbieters weitergeleitet. Wir empfehlen Ihnen dringend, die Datenschutzrichtlinie jeder Website, die Sie besuchen, zu überprüfen.`

/**
* @param {{  }} i
*/
export const privacy_links_to_other_websites_control = (i) => `Wir haben keine Kontrolle über und übernehmen keine Verantwortung für die Inhalte, Datenschutzrichtlinien oder Praktiken von Drittanbieter-Websites oder -Diensten.`

/**
* @param {{  }} i
*/
export const privacy_changes_to_policy_title = (i) => `Änderungen zu dieser Datenschutzrichtlinie`

/**
* @param {{  }} i
*/
export const privacy_changes_to_policy_description = (i) => `Wir können unsere Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Wir werden Sie über Änderungen informieren, indem wir die neue Datenschutzrichtlinie auf dieser Seite veröffentlichen.`

/**
* @param {{  }} i
*/
export const privacy_changes_to_policy_notification = (i) => `Wir werden Sie per E-Mail und/oder durch eine hervorgehobene Mitteilung auf unserem Dienst informieren, bevor die Änderung wirksam wird, und das Datum "Zuletzt aktualisiert" oben in dieser Datenschutzrichtlinie aktualisieren.`

/**
* @param {{  }} i
*/
export const privacy_changes_to_policy_review = (i) => `Es wird empfohlen, diese Datenschutzrichtlinie regelmäßig auf Änderungen zu überprüfen. Änderungen dieser Datenschutzrichtlinie treten in Kraft, wenn sie auf dieser Seite veröffentlicht werden.`

/**
* @param {{  }} i
*/
export const privacy_contact_us_title = (i) => `Kontaktieren Sie uns`

/**
* @param {{  }} i
*/
export const privacy_contact_us_description = (i) => `Wenn Sie Fragen zu dieser Datenschutzerklärung haben, können Sie uns kontaktieren:`

/**
* @param {{  }} i
*/
export const privacy_contact_us_website = (i) => `Durch den Besuch dieser Seite auf unserer Website: $1`

/**
* @param {{  }} i
*/
export const website_title = (i) => `Capgo - Capacitor Live aktualisierung`

/**
* @param {{  }} i
*/
export const website_description = (i) => `Senden und verwalten Sie Updates in Echtzeit für Ihre Capacitor-App, ohne die Probleme des Stores, 5 Minuten für die Installation von Over-the-Air (OTA) Updates. Verwenden Sie Kanäle, um an bestimmte Gruppen zu senden.`

/**
* @param {{  }} i
*/
export const website_keywords = (i) => `Capacitor, updater, OTA, autoupdate, capgo`