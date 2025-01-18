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
export const site_title = (i) => `Paraglide + Astro Example`

/**
* @param {{  }} i
*/
export const site_description = (i) => `A simple example of using Paraglide with Astro`

/**
* @param {{ site: NonNullable<unknown> }} i
*/
export const follow_us_on = (i) => `Follow us on ${i.site}`

/**
* @param {{ site: NonNullable<unknown> }} i
*/
export const view_on = (i) => `View on ${i.site}`

/**
* @param {{  }} i
*/
export const all_rights_reserved = (i) => `All rights reserved`

/**
* @param {{ count: NonNullable<unknown> }} i
*/
export const count = (i) => `The current count is ${i.count}`

/**
* @param {{  }} i
*/
export const english = (i) => `English`

/**
* @param {{  }} i
*/
export const german = (i) => `German`

/**
* @param {{  }} i
*/
export const page_not_found = (i) => `Page not found`

/**
* @param {{ locale: NonNullable<unknown> }} i
*/
export const switch_locale = (i) => `Programmatically switch locale to ${i.locale}`

/**
* @param {{  }} i
*/
export const home = (i) => `Home`

/**
* @param {{  }} i
*/
export const pricing = (i) => `Pricing`

/**
* @param {{  }} i
*/
export const pricing_description = (i) => `Move forward with confidence. Capgo is the enterprise-grade cloud platform for Capacitor applications.`

/**
* @param {{  }} i
*/
export const blog = (i) => `Blog`

/**
* @param {{  }} i
*/
export const documentation = (i) => `Documentation`

/**
* @param {{  }} i
*/
export const login = (i) => `Login`

/**
* @param {{  }} i
*/
export const register = (i) => `Register`

/**
* @param {{  }} i
*/
export const solutions = (i) => `Solutions`

/**
* @param {{  }} i
*/
export const support = (i) => `Support`

/**
* @param {{  }} i
*/
export const turn_off_adblock = (i) => `Please turn off your adblock!`

/**
* @param {{  }} i
*/
export const making_world_better = (i) => `Making the world a better place through constructing elegant apps.`

/**
* @param {{  }} i
*/
export const carbon_removal = (i) => `5% of our revenue goes to carbon removal.`

/**
* @param {{  }} i
*/
export const open_source = (i) => `100% open-source`

/**
* @param {{  }} i
*/
export const built_with_supabase = (i) => `Built with Supabase`

/**
* @param {{  }} i
*/
export const build_in_public_on_twitter = (i) => `Build in public on Twitter`

/**
* @param {{  }} i
*/
export const footer = (i) => `Footer`

/**
* @param {{  }} i
*/
export const company = (i) => `Company`

/**
* @param {{  }} i
*/
export const legal = (i) => `Legal`

/**
* @param {{  }} i
*/
export const copyright = (i) => `All rights reserved.`

/**
* @param {{  }} i
*/
export const trust = (i) => `Trust`

/**
* @param {{  }} i
*/
export const app_mobile = (i) => `App mobile`

/**
* @param {{  }} i
*/
export const plugins = (i) => `Plugins`

/**
* @param {{  }} i
*/
export const disclaimer = (i) => `Disclaimer`

/**
* @param {{  }} i
*/
export const read_our_disclaimer = (i) => `Read our disclaimer`

/**
* @param {{  }} i
*/
export const plugins_description = (i) => `Capgo offer multiple plugins to help you build your app faster and better.`

/**
* @param {{  }} i
*/
export const awesome_capacitor = (i) => `Awesome Capacitor`

/**
* @param {{  }} i
*/
export const top_app_by_framework = (i) => `Top App by Framework`

/**
* @param {{  }} i
*/
export const community = (i) => `Community`

/**
* @param {{  }} i
*/
export const guides = (i) => `Guides`

/**
* @param {{  }} i
*/
export const status = (i) => `Status`

/**
* @param {{  }} i
*/
export const chat = (i) => `Chat`

/**
* @param {{  }} i
*/
export const sponsor = (i) => `Sponsoring`

/**
* @param {{  }} i
*/
export const about = (i) => `About`

/**
* @param {{  }} i
*/
export const imprint = (i) => `Imprint`

/**
* @param {{  }} i
*/
export const imprint_description = (i) => `Find the info of $1 company here`

/**
* @param {{  }} i
*/
export const jobs = (i) => `Jobs`

/**
* @param {{  }} i
*/
export const contributing = (i) => `Contributing`

/**
* @param {{  }} i
*/
export const contributing_description = (i) => `How to contribute to Capgo open source`

/**
* @param {{  }} i
*/
export const consulting_description = (i) => `Move forward with confidence. Capgo offer multiple levels of protection to keep your intellectual property and sensitive data secure.`

/**
* @param {{  }} i
*/
export const security = (i) => `Security`

/**
* @param {{  }} i
*/
export const consulting = (i) => `Consulting`

/**
* @param {{  }} i
*/
export const affiliate = (i) => `Affiliate`

/**
* @param {{  }} i
*/
export const privacy = (i) => `Privacy`

/**
* @param {{  }} i
*/
export const support_policy = (i) => `Support Policy`

/**
* @param {{  }} i
*/
export const read_our_support_policy = (i) => `Read our Support Policy`

/**
* @param {{  }} i
*/
export const privacy_policy = (i) => `Privacy Policy`

/**
* @param {{  }} i
*/
export const read_our_privacy_policy = (i) => `Read our Privacy Policy`

/**
* @param {{  }} i
*/
export const sla = (i) => `Service Level Agreement`

/**
* @param {{  }} i
*/
export const sla_policy = (i) => `SLA Policy`

/**
* @param {{  }} i
*/
export const read_our_sla_policy = (i) => `Read our SLA Policy`

/**
* @param {{  }} i
*/
export const security_policy = (i) => `Security Policy`

/**
* @param {{  }} i
*/
export const read_our_security_policy = (i) => `Read our Security Policy`

/**
* @param {{  }} i
*/
export const return_policy = (i) => `Return Policy`

/**
* @param {{  }} i
*/
export const read_our_return_policy = (i) => `Read our Return Policy`

/**
* @param {{  }} i
*/
export const aup = (i) => `Acceptable Use Policy`

/**
* @param {{  }} i
*/
export const read_our_aup = (i) => `Read our Acceptable Use Policy`

/**
* @param {{  }} i
*/
export const Capacitor_Sanbox_App = (i) => `Capacitor Sanbox App`

/**
* @param {{  }} i
*/
export const Capacitor_Sanbox_App_description = (i) => `Try each version of your app directly into the sandbox app in a second. Manage OTA update for your capacitor app from your pocket, available in IOS and Android.`

/**
* @param {{  }} i
*/
export const eula = (i) => `End-User License Agreement`

/**
* @param {{  }} i
*/
export const read_our_eula = (i) => `Read our End-User License Agreement`

/**
* @param {{  }} i
*/
export const data_processing_agreement = (i) => `Data Processing Agreement`

/**
* @param {{  }} i
*/
export const read_our_data_processing_agreement = (i) => `Read our Data Processing Agreement`

/**
* @param {{  }} i
*/
export const terms = (i) => `Terms of Service`

/**
* @param {{  }} i
*/
export const read_our_terms_of_service = (i) => `Read our Terms of Service`

/**
* @param {{  }} i
*/
export const security_txt = (i) => `Security.txt`

/**
* @param {{  }} i
*/
export const dp = (i) => `Data Policy`

/**
* @param {{  }} i
*/
export const dpa = (i) => `Data Protection Agreement`

/**
* @param {{  }} i
*/
export const instant_updates_for_capacitor = (i) => `Instant updates for Capacitor`

/**
* @param {{  }} i
*/
export const ship_updates_fixes_changes_and_features = (i) => `Ship updates, fixes, changes, and features`

/**
* @param {{  }} i
*/
export const within_minutes = (i) => `Within minutes`

/**
* @param {{  }} i
*/
export const no_credit_card_required = (i) => `No credit card required`

/**
* @param {{  }} i
*/
export const try_for_free = (i) => `Try for free`

/**
* @param {{  }} i
*/
export const instant_updates = (i) => `Instant updates`

/**
* @param {{  }} i
*/
export const reach_users_now_not_weeks_later = (i) => `Reach 100% of your users today, not weeks later.`

/**
* @param {{  }} i
*/
export const app_store_compliant = (i) => `App Store compliant`

/**
* @param {{  }} i
*/
export const compliant_with_apple_and_android_requirements = (i) => `100% compliant with Apple and Android requirements`

/**
* @param {{  }} i
*/
export const end_to_end_encryption = (i) => `End-to-end encryption`

/**
* @param {{  }} i
*/
export const only_your_users_can_decrypt_your_updates_no_one_else = (i) => `Only your users can decrypt your updates, no one else.`

/**
* @param {{  }} i
*/
export const no_more_wait = (i) => ` No more wait Push live code changes, on your schedule.`

/**
* @param {{  }} i
*/
export const for_apple_and_google_app_updates_distribution = (i) => `For Apple and Google app updates distribution`

/**
* @param {{  }} i
*/
export const youre_in_good_company = (i) => `You're in good company.`

/**
* @param {{  }} i
*/
export const capgo_enables_development_teams_at_some_of_the_most_innovative_companies = (i) => `Capgo enables development teams at some of the most innovative companies.`

/**
* @param {{  }} i
*/
export const apps_with_20m_users = (i) => `Apps with 20M+ users`

/**
* @param {{  }} i
*/
export const use_capgo = (i) => `Use Capgo`

/**
* @param {{  }} i
*/
export const our_numbers_are_shared_transparently_since_december_2021 = (i) => `Our numbers are shared transparently since December 2021.`

/**
* @param {{  }} i
*/
export const last_update = (i) => `Last update`

/**
* @param {{  }} i
*/
export const updates_delivered = (i) => `Updates delivered`

/**
* @param {{  }} i
*/
export const all_around_the_globe = (i) => `All around the globe`

/**
* @param {{  }} i
*/
export const apps = (i) => `Apps`

/**
* @param {{  }} i
*/
export const using_us_in_production = (i) => `Using us in production`

/**
* @param {{  }} i
*/
export const stars_in_github = (i) => `Stars in GitHub`

/**
* @param {{  }} i
*/
export const how_it_work = (i) => `How it work?`

/**
* @param {{  }} i
*/
export const ship_your_first_update_in_less_than_15_minutes = (i) => `Ship your first update in less than 15 minutes!`

/**
* @param {{  }} i
*/
export const install_the_plugin = (i) => `Install the plugin`

/**
* @param {{  }} i
*/
export const send_your_first_update = (i) => `Send your first update`

/**
* @param {{  }} i
*/
export const build_your_app_as_usual_then_send_with_the_cli = (i) => `Build your app as usual, then send with the CLI`

/**
* @param {{  }} i
*/
export const get_the_update = (i) => `Get the update`

/**
* @param {{  }} i
*/
export const open_the_app_it_update_in_the_background = (i) => `Open the app, it updates in the background`

/**
* @param {{  }} i
*/
export const start_now = (i) => `Start now`

/**
* @param {{  }} i
*/
export const faster_releases = (i) => `Faster releases`

/**
* @param {{  }} i
*/
export const integration = (i) => `Integration`

/**
* @param {{  }} i
*/
export const goodbye_bugs = (i) => `Instant Changes, Bug Fixes No need to wait for app re-downloads! With just one command, users can quickly see bug fixes in action. Say goodbye to frustrating delays.`

/**
* @param {{  }} i
*/
export const manage_updates_effortlessly = (i) => `Manage Updates Effortlessly`

/**
* @param {{  }} i
*/
export const user_assignment = (i) => `User Assignment`

/**
* @param {{  }} i
*/
export const easily_assign_users_and_send_the_latest_update_to_your_private_or_public_testers = (i) => `Easily assign users and send the latest update to your private or public testers.`

/**
* @param {{  }} i
*/
export const seamless_deployment_process = (i) => `Seamless Deployment Process`

/**
* @param {{  }} i
*/
export const when_your_update_is_ready_deploy_it_seamlessly_to_all_your_users = (i) => `When your update is ready, deploy it seamlessly to all your users.`

/**
* @param {{  }} i
*/
export const simple_configuration_management = (i) => `Simple Configuration Management`

/**
* @param {{  }} i
*/
export const manage_all_your_configurations_conveniently_through_our_user_friendly_web_interface = (i) => `Manage all your configurations conveniently through our user-friendly web interface.`

/**
* @param {{  }} i
*/
export const try_risk_free_with_a_15_days_free_trial = (i) => `Try risk free with a 15 days free trial`

/**
* @param {{  }} i
*/
export const get_started = (i) => `Get Started`

/**
* @param {{  }} i
*/
export const they_love_capgo = (i) => `They love Capgo.`

/**
* @param {{  }} i
*/
export const flexible_organization_management_for_your_team = (i) => `Flexible Organization Management for Your Team`

/**
* @param {{  }} i
*/
export const create_manage_organizations_with_ease = (i) => `Create and manage multiple organizations with ease, assigning specific rights to each user. Capgo provides powerful tools to keep your team organized and efficient.`

/**
* @param {{  }} i
*/
export const multiple_organizations = (i) => `Multiple Organizations`

/**
* @param {{  }} i
*/
export const manage_various_teams = (i) => `Manage Various Teams`

/**
* @param {{  }} i
*/
export const create_oversee_organizations_from_single_account = (i) => `Create and oversee multiple organizations from a single account, streamlining your workflow and enhancing productivity.`

/**
* @param {{  }} i
*/
export const granular_permissions = (i) => `Granular Permissions`

/**
* @param {{  }} i
*/
export const control_access_levels = (i) => `Control Access Levels`

/**
* @param {{  }} i
*/
export const assign_specific_rights_and_access_levels_to_each_user_within_your_organizations = (i) => `Assign specific rights and access levels to each user within your organizations, ensuring security and proper resource allocation.`

/**
* @param {{  }} i
*/
export const flexible_management = (i) => `Flexible Management`

/**
* @param {{  }} i
*/
export const adapt_as_you_grow = (i) => `Adapt as You Grow`

/**
* @param {{  }} i
*/
export const easily_adjust_user_roles_and_permissions_as_your_team_and_projects_evolve_maintaining_optimal_organization_structure = (i) => `Easily adjust user roles and permissions as your team and projects evolve, maintaining optimal organization structure.`

/**
* @param {{  }} i
*/
export const effortless_ci_cd_solutions = (i) => `Effortless CI/CD Solutions`

/**
* @param {{  }} i
*/
export const we_configure_your_ci_cd_pipeline_directly_in_your_preferred_platform_whether_its_github_actions_gitlab_ci_or_others_we_dont_host_ci_cd_or_charge_you_to_maintain_it = (i) => `We configure your CI/CD pipeline directly in your preferred platform, whether it's GitHub Actions, GitLab CI, or others. We don't host CI/CD or charge you to maintain it.`

/**
* @param {{  }} i
*/
export const seamless_integration = (i) => `Seamless Integration`

/**
* @param {{  }} i
*/
export const we_set_up_your_ci_cd_workflow_to_work_seamlessly_with_your_current_development_process_no_need_to_switch_platforms_or_learn_new_tools = (i) => `We set up your CI/CD workflow to work seamlessly with your current development process. No need to switch platforms or learn new tools.`

/**
* @param {{  }} i
*/
export const tailored_configuration = (i) => `Tailored Configuration`

/**
* @param {{  }} i
*/
export const our_team_customizes_the_ci_cd_setup_to_match_your_specific_project_requirements_ensuring_optimal_performance_and_efficiency = (i) => `Our team customizes the CI/CD setup to match your specific project requirements, ensuring optimal performance and efficiency.`

/**
* @param {{  }} i
*/
export const platform_independence = (i) => `Platform Independence`

/**
* @param {{  }} i
*/
export const whether_you_use_github_gitlab_or_another_version_control_system_we_adapt_our_configuration_to_fit_your_existing_infrastructure = (i) => `Whether you use GitHub, GitLab, or another version control system, we adapt our configuration to fit your existing infrastructure.`

/**
* @param {{  }} i
*/
export const expert_guidance = (i) => `Expert Guidance`

/**
* @param {{  }} i
*/
export const benefit_from_our_deep_expertise_in_mobile_app_ci_cd_best_practices_without_the_need_to_build_and_maintain_a_complex_system_yourself = (i) => `Benefit from our deep expertise in mobile app CI/CD best practices, without the need to build and maintain a complex system yourself.`

/**
* @param {{  }} i
*/
export const we_already_setup_ci_cd_for_50_apps = (i) => `We already setup CI/CD for 50+ apps.`

/**
* @param {{  }} i
*/
export const running_your_ci_cd_costs_300 = (i) => `Running your CI/CD costs ~$300/month`

/**
* @param {{  }} i
*/
export const appflow_6000_annually = (i) => `AppFlow $6,000 annually.`

/**
* @param {{  }} i
*/
export const our_one_time_setup_fee_of_2600_combined_with_ci_cd_results_in_less_than_half_the_first_year_fee_of_appflow = (i) => `Our one-time setup fee of $2,600, combined with CI/CD, results in less than half the first year fee of AppFlow.`

/**
* @param {{  }} i
*/
export const in_5_years_you_save_26100 = (i) => `In 5 years you save $26,100.`

/**
* @param {{  }} i
*/
export const setup_ci_cd_now = (i) => `Setup CI/CD now →`

/**
* @param {{  }} i
*/
export const push_updates_like_your_commits = (i) => `Push updates like your commits`

/**
* @param {{  }} i
*/
export const its_compatible_with_azure_devops_gitlab_github_jenkins_cloudbees_travis_azure_devops_gitlab_github_circleci_and_many_more = (i) => `It's compatible with Azure DevOps, GitLab, GitHub, Jenkins, Cloudbees, Travis, Azure DevOps, GitLab, GitHub, CircleCI, and many more.`

/**
* @param {{  }} i
*/
export const launch_multiple_releases_per_week = (i) => `With $1, you can launch multiple releases per week with an impressive 81% increase in efficiency. Don't miss out on this competitive advantage.`

/**
* @param {{  }} i
*/
export const easily_combine_features_ci_cd = (i) => `Easily combine $1 features into your current CI/CD platform with our user-friendly CLI.`

/**
* @param {{  }} i
*/
export const about_capgo = (i) => `About Capgo`

/**
* @param {{  }} i
*/
export const your_live_update_solution_for_capacitor_apps = (i) => `Your Live Update Solution for Capacitor Apps`

/**
* @param {{  }} i
*/
export const welcome_to_capgo = (i) => `Welcome to Capgo`

/**
* @param {{  }} i
*/
export const capgo_is_the_cutting_edge_live_update_system_designed_specifically_for_capacitor_applications = (i) => `Capgo is the cutting-edge live update system designed specifically for Capacitor applications.`

/**
* @param {{  }} i
*/
export const we_empower_developers_to_push_updates_instantly_ensuring_your_users_always_have_the_latest_version_of_your_app_without_the_hassle_of_app_store_approvals = (i) => `We empower developers to push updates instantly, ensuring your users always have the latest version of your app without the hassle of app store approvals.`

/**
* @param {{  }} i
*/
export const our_story = (i) => `Our Story`

/**
* @param {{  }} i
*/
export const capgo_was_born_from_a_real_need_in_the_developer_community = (i) => `Capgo was born from a real need in the developer community.`

/**
* @param {{  }} i
*/
export const it_all_started_with_a_github_issue_where_many_developers_voiced_their_frustration_with_the_high_costs_of_existing_solutions_like_appflow = (i) => `It all started with a GitHub issue where many developers voiced their frustration with the high costs of existing solutions like Appflow.`

/**
* @param {{  }} i
*/
export const this_inspired_me_to_create_an_affordable_efficient_alternative = (i) => `This inspired me to create an affordable, efficient alternative.`

/**
* @param {{  }} i
*/
export const read_the_full_story_of_capgos_challenging_birth_as_a_solo_maker_project = (i) => `Read the full story of Capgo's challenging birth as a solo maker project`

/**
* @param {{  }} i
*/
export const key_features = (i) => `Key Features`

/**
* @param {{  }} i
*/
export const deploy_changes_in_real_time = (i) => `Deploy changes in real-time`

/**
* @param {{  }} i
*/
export const version_control = (i) => `Version Control`

/**
* @param {{  }} i
*/
export const manage_multiple_app_versions_effortlessly = (i) => `Manage multiple app versions effortlessly`

/**
* @param {{  }} i
*/
export const rollback_capability = (i) => `Rollback Capability`

/**
* @param {{  }} i
*/
export const revert_to_previous_versions_if_needed = (i) => `Revert to previous versions if needed`

/**
* @param {{  }} i
*/
export const analytics = (i) => `Analytics`

/**
* @param {{  }} i
*/
export const track_update_performance_and_user_adoption = (i) => `Track update performance and user adoption`

/**
* @param {{  }} i
*/
export const organization_and_app_management = (i) => `Organization and App Management`

/**
* @param {{  }} i
*/
export const thanks_to_our_open_source_nature = (i) => `Thanks to our open-source nature`

/**
* @param {{  }} i
*/
export const our_commitment = (i) => `Our Commitment`

/**
* @param {{  }} i
*/
export const as_the_largest_ecosystem_of_open_source_plugins_for_capacitor_we_re_committed_to_innovation_transparency_and_community_driven_development = (i) => `As the largest ecosystem of open source plugins for Capacitor, we're committed to innovation, transparency, and community-driven development.`

/**
* @param {{  }} i
*/
export const practicing_what_we_preach = (i) => `Practicing What We Preach`

/**
* @param {{  }} i
*/
export const we_practice_what_we_preach = (i) => `We practice what we preach`

/**
* @param {{  }} i
*/
export const capgo_is_used_to_update_its_own_apps_allowing_us_to_continuously_improve_and_refine_our_product_through_real_world_usage = (i) => `Capgo is used to update its own apps, allowing us to continuously improve and refine our product through real-world usage.`

/**
* @param {{  }} i
*/
export const our_dedication = (i) => `Our Dedication`

/**
* @param {{  }} i
*/
export const since_2023_capgo_has_been_my_full_time_focus_ensuring_dedicated_development_and_support_for_our_growing_community_of_users = (i) => `Since 2022, Capgo has been my full-time focus, ensuring dedicated development and support for our growing community of users.`

/**
* @param {{  }} i
*/
export const hi_there_im_martin_donadieu = (i) => `Hi there! I'm Martin Donadieu`

/**
* @param {{  }} i
*/
export const run_your_projects_on_your_own_device_faster_than_ever_and_share_those_projects_across_your_whole_team = (i) => `Run your projects on your own device faster than ever, and share those projects across your whole team.`

/**
* @param {{  }} i
*/
export const test_version_in_the_sandbox_app_manage_version_and_channel = (i) => `Test version in the sandbox app, manage version and channel`

/**
* @param {{  }} i
*/
export const speed = (i) => `Speed`

/**
* @param {{  }} i
*/
export const simplicity = (i) => `Simplicity`

/**
* @param {{  }} i
*/
export const start_building_rich_experiences_with_your_device_and_your_computer = (i) => `Start building rich experiences with your device and your computer.`

/**
* @param {{  }} i
*/
export const confirm_email = (i) => `Confirm email`

/**
* @param {{  }} i
*/
export const please_open_your_mailbox_to_verify = (i) => `Please open your mailbox to verify`

/**
* @param {{  }} i
*/
export const didnt_receive_confirmation_email = (i) => `Didn't receive confirmation email?`

/**
* @param {{  }} i
*/
export const resend = (i) => `Resend`

/**
* @param {{  }} i
*/
export const resending = (i) => `Resending`

/**
* @param {{  }} i
*/
export const open_mailbox = (i) => `Open Mailbox`

/**
* @param {{  }} i
*/
export const thank_you_for_choosing_capgo = (i) => `Thank you for choosing Capgo!`

/**
* @param {{  }} i
*/
export const code_review = (i) => `Code Review`

/**
* @param {{  }} i
*/
export const code_review_and_consulting = (i) => `Code Review and Consulting`

/**
* @param {{  }} i
*/
export const consult_your_capacitor_apps_and_review_the_code_with_us_to_deliver_bug_free_apps = (i) => `Consult your Capacitor apps and review the code with us to deliver bug-free apps.`

/**
* @param {{  }} i
*/
export const book_a_consultation = (i) => `Book a consultation`

/**
* @param {{  }} i
*/
export const testimonial_consulting = (i) => `Capgo not only has incredibly talented engineers, but they also share my passion for project success. Having a <strong class='italic font-bold'>true partner</strong> has been a wonderful experience, and it allows us to move much faster than we could alone.`

/**
* @param {{  }} i
*/
export const testimonial_consulting_2 = (i) => `I would have <strong class='italic font-bold'>no hesitation in recommending Capgo</strong> to others, to provide a flexible solution to an existing workforce or on a longer-term basis as part of a remote team`

/**
* @param {{  }} i
*/
export const when_its_good_to_ask_for_cordova_and_capacitorjs_consulting_services = (i) => `When it’s good to ask for Cordova and CapacitorJS consulting services`

/**
* @param {{  }} i
*/
export const review_before_passing_the_code_to_the_production = (i) => `Review before passing the code to the production`

/**
* @param {{  }} i
*/
export const find_and_fix_bugs_during_the_coding_process = (i) => `Find and fix bugs during the coding process.`

/**
* @param {{  }} i
*/
export const it_s_faster_cheaper_and_requires_fewer_developers_to_do_it = (i) => `It’s faster, cheaper, and requires fewer developers to do it.`

/**
* @param {{  }} i
*/
export const optimization_of_the_existing_app = (i) => `Optimization of the existing app`

/**
* @param {{  }} i
*/
export const little_experience_with_capacitorjs = (i) => `Little experience with CapacitorJS`

/**
* @param {{  }} i
*/
export const when_developing_a_capacitorjs_app_as_a_beginner_it_s_good_to_have_an_experienced_consultant_by_your_side = (i) => `When developing a CapacitorJS app as a beginner, it’s good to have an experienced consultant by your side.`

/**
* @param {{  }} i
*/
export const let_them_review_your_work_and_give_your_team_an_opportunity_to_learn_from_the_experts = (i) => `Let them review your work and give your team an opportunity to learn from the experts.`

/**
* @param {{  }} i
*/
export const poor_app_quality = (i) => `Poor app quality`

/**
* @param {{  }} i
*/
export const somebody_developed_an_app_for_you_but_it_doesn_t_meet_your_expectations_and_the_quality_of_the_final_product_is_really_low = (i) => `Somebody developed an app for you but it doesn’t meet your expectations and the quality of the final product is really low.`

/**
* @param {{  }} i
*/
export const something_doesn_t_work_but_you_don_t_know_why = (i) => `Something doesn’t work but you don’t know why`

/**
* @param {{  }} i
*/
export const a_specific_element_of_your_app_doesn_t_work_and_you_don_t_know_where_the_problem_is_and_how_to_fix_it = (i) => `A specific element of your app doesn’t work and you don’t know where the problem is and how to fix it.`

/**
* @param {{  }} i
*/
export const plugin_is_missing = (i) => `Plugin is missing`

/**
* @param {{  }} i
*/
export const you_need_a_to_access_to_specific_native_api_and_the_right_plugin_don_t_exist_we_can_develop_it_for_you_or_support_you_with_it = (i) => `You need a to access to specific native API and the right plugin don’t exist. We can develop it for you or support you with it.`

/**
* @param {{  }} i
*/
export const ci_cd_setup = (i) => `CI/CD Setup`

/**
* @param {{  }} i
*/
export const our_team_helps_you_with_configuring_and_managing_automated_builds_tests_and_app_deployments_to_app_stores_through_fastlane_and_voltbuilder_in_your_cicd_environment = (i) => `Our team helps you with configuring and managing automated builds, tests, and app deployments to app stores through fastlane and VoltBuilder in your CI/CD environment.`

/**
* @param {{  }} i
*/
export const why_is_it_important = (i) => `Why is it important?`

/**
* @param {{  }} i
*/
export const code_consulting_and_review_is_more_than_just_a_bug_check_it_helps_to = (i) => `Code consulting and review is more than just a bug check. It helps to:`

/**
* @param {{  }} i
*/
export const minimize_mistakes_and_their_impact_on_the_project = (i) => `Minimize mistakes and their impact on the project`

/**
* @param {{  }} i
*/
export const ensure_that_the_project_requirements_are_fulfilled = (i) => `Ensure that the project requirements are fulfilled`

/**
* @param {{  }} i
*/
export const improve_overall_code_quality = (i) => `Improve overall code quality`

/**
* @param {{  }} i
*/
export const achieve_consistent_design_and_implementation = (i) => `Achieve consistent design and implementation`

/**
* @param {{  }} i
*/
export const technological_benefits = (i) => `Technological Benefits`

/**
* @param {{  }} i
*/
export const better_code_quality = (i) => `Better code quality`

/**
* @param {{  }} i
*/
export const let_more_experienced_people_review_your_work_and_give_your_team_an_opportunity_to_learn_from_the_experts = (i) => `Let more experienced people review your work and give your team an opportunity to learn from the experts.`

/**
* @param {{  }} i
*/
export const improved_code_readability = (i) => `Improved code readability`

/**
* @param {{  }} i
*/
export const it_s_possible_that_different_developers_will_read_your_code_in_the_future_reduce_unnecessary_pieces_of_it_to_make_it_shorter_and_more_expressive = (i) => `It’s possible that different developers will read your code in the future. Reduce unnecessary pieces of it to make it shorter and more expressive.`

/**
* @param {{  }} i
*/
export const bugs_reduction = (i) => `Bugs reduction`

/**
* @param {{  }} i
*/
export const eliminate_the_number_of_bugs_before_passing_the_code_to_production = (i) => `Eliminate the number of bugs before passing the code to production.`

/**
* @param {{  }} i
*/
export const hire_capacitorjs_consultants = (i) => `Hire CapacitorJS Consultants`

/**
* @param {{  }} i
*/
export const business_benefits = (i) => `Business benefits`

/**
* @param {{  }} i
*/
export const lower_cost_of_fixing_bugs = (i) => `Lower cost of fixing bugs`

/**
* @param {{  }} i
*/
export const the_faster_you_find_the_bug_the_cheaper_you_can_fix_it_if_the_bug_is_spotted_during_the_development_process_it_s_easier_and_cheaper_to_remove_it = (i) => `The faster you find the bug, the cheaper you can fix it. If the bug is spotted during the development process, it’s easier and cheaper to remove it.`

/**
* @param {{  }} i
*/
export const opportunity_for_juniors_to_develop_skills = (i) => `Opportunity for juniors to develop skills`

/**
* @param {{  }} i
*/
export const help_your_junior_developers_extend_their_knowledge_by_giving_them_the_opportunity_to_cooperate_with_more_experienced_developers = (i) => `Help your junior developers extend their knowledge by giving them the opportunity to cooperate with more experienced developers.`

/**
* @param {{  }} i
*/
export const community_trusted = (i) => `Community-trusted`

/**
* @param {{  }} i
*/
export const cordova_and_capacitorjs_expert = (i) => `Cordova & CapacitorJS expert`

/**
* @param {{  }} i
*/
export const experienced_in_working_on_demanding = (i) => `Experienced in working on demanding`

/**
* @param {{  }} i
*/
export const cordova_capacitorjs_projects = (i) => `Cordova & CapacitorJS projects`

/**
* @param {{  }} i
*/
export const creators_and_maintainers_of_many_open_source_libraries_used_by_millions = (i) => `Creators and maintainers of many Open Source libraries used by millions`

/**
* @param {{  }} i
*/
export const core_contributors_to_capacitorjs_and_ionic = (i) => `Core Contributors to CapacitorJS and Ionic`

/**
* @param {{  }} i
*/
export const need_help_with_cordova_or_capacitorjs_let_us_know = (i) => `Need help with Cordova or CapacitorJS? Let us know!`

/**
* @param {{  }} i
*/
export const im_a_french_software_engineer = (i) => `I'm a French software engineer`

/**
* @param {{  }} i
*/
export const living_best_life = (i) => `living my best life on the beautiful island of Madeira, Portugal`

/**
* @param {{  }} i
*/
export const made_capgo_with_passion = (i) => `I made Capgo with passion to empower developers like you.`

/**
* @param {{  }} i
*/
export const i_m_a_huge_believer_in_open_source = (i) => `I'm a huge believer in open source.`

/**
* @param {{  }} i
*/
export const capgo_proudly_stands_as_the_largest_ecosystem_of_open_source_plugins_for_capacitor = (i) => `Capgo proudly stands as the largest ecosystem of open-source plugins for Capacitor.`

/**
* @param {{  }} i
*/
export const we_re_committed_to_fostering_a_community_where_developers_can_learn_contribute_and_grow_together = (i) => `We're committed to fostering a community where developers can learn, contribute, and grow together.`

/**
* @param {{  }} i
*/
export const each_time_you_contact_capgo_you_re_reaching_out_to_me_directly = (i) => `Each time you contact Capgo, you're reaching out to me directly.`

/**
* @param {{  }} i
*/
export const i_personally_handle_all_support_through_email_chat_or_discord_because_i_believe_in_real_connections = (i) => `I personally handle all support through email, chat, or Discord because I believe in real connections.`

/**
* @param {{  }} i
*/
export const your_challenges_are_my_challenges = (i) => `Your challenges are my challenges`

/**
* @param {{  }} i
*/
export const my_commitment_to_transparency_extends_to_everything_i_do = (i) => `My commitment to transparency extends to everything I do.`

/**
* @param {{  }} i
*/
export const when_im_not_working_on_capgo_you_ll_find_me_scaling_climbing_walls_dancing_to_zouk_rhythms_or_exploring_madeiras_stunning_nature = (i) => `When I'm not working on Capgo, you'll find me scaling climbing walls 🧗‍♂️, dancing to zouk rhythms 💃, or exploring Madeira's stunning nature 🌿.`

/**
* @param {{  }} i
*/
export const lets_make_app_development_amazing_together = (i) => `Let's make app development amazing together!`

/**
* @param {{  }} i
*/
export const martin_donadieu_on_a_motorcycle_with_a_rainbow_in_the_background = (i) => `Martin Donadieu on a motorcycle with a rainbow in the background`

/**
* @param {{  }} i
*/
export const get_quote_now = (i) => `Get quote now`

/**
* @param {{  }} i
*/
export const you_can_see_my_entire_process_unfold_on_twitter = (i) => `You can see my entire process unfold on Twitter`

/**
* @param {{  }} i
*/
export const and_hear_more_about_my_journey_on_the = (i) => `and hear more about my journey on the`

/**
* @param {{  }} i
*/
export const read_more = (i) => `Read more`

/**
* @param {{  }} i
*/
export const $1_app = (i) => `$1 App`

/**
* @param {{  }} i
*/
export const services = (i) => `Services`

/**
* @param {{  }} i
*/
export const case_1 = (i) => `Case 1`

/**
* @param {{  }} i
*/
export const case_2 = (i) => `Case 2`

/**
* @param {{  }} i
*/
export const case_3 = (i) => `Case 3`

/**
* @param {{  }} i
*/
export const case_4 = (i) => `Case 4`

/**
* @param {{  }} i
*/
export const case_5 = (i) => `Case 5`

/**
* @param {{  }} i
*/
export const case_6 = (i) => `Case 6`

/**
* @param {{  }} i
*/
export const case_7 = (i) => `Case 7`

/**
* @param {{  }} i
*/
export const email_is_required = (i) => `Email is required`

/**
* @param {{  }} i
*/
export const when_down_review = (i) => `When an application works too slow or gets down (even for a few minutes), it can damage users’ satisfaction and decrease the revenue. To avoid such situations, review the code to find areas for improvement.`

/**
* @param {{  }} i
*/
export const why_work = (i) => `Why work`

/**
* @param {{  }} i
*/
export const with_us = (i) => `with us?`

/**
* @param {{  }} i
*/
export const consulting_forged_plugins_community_embraced = (i) => `Consulting-Forged Plugins, Community Embraced`

/**
* @param {{  }} i
*/
export const consulting_forged_plugins_community_embraced_description = (i) => `Our Capacitor plugins, born from real client challenges, now empower developers worldwide.`

/**
* @param {{  }} i
*/
export const each_solution_represents_a_consulting_success_story_battle_tested_and_refined_for_the_community = (i) => `Each solution represents a consulting success story, battle-tested and refined for the community.`

/**
* @param {{  }} i
*/
export const get_your_custom_plugin_built = (i) => `Get Your Custom Plugin Built`

/**
* @param {{  }} i
*/
export const contact = (i) => `Contact`

/**
* @param {{  }} i
*/
export const lets_work_together = (i) => `Let's work together!`

/**
* @param {{  }} i
*/
export const we_welcome_and_appreciate_all_contributions_to_capgo = (i) => `We welcome and appreciate all contributions to Capgo.`

/**
* @param {{  }} i
*/
export const this_page_serves_as_a_helper_to_get_you_started_on_contributing = (i) => `This page serves as a helper to get you started on contributing.`

/**
* @param {{  }} i
*/
export const projects = (i) => `Projects`

/**
* @param {{  }} i
*/
export const there_are_numerous_repositories_in_the_capgo_organization_that_are_part_of_the_capgo = (i) => `There are numerous repositories in the Capgo organization that are part of the Capgo.`

/**
* @param {{  }} i
*/
export const repositories_have_different_scopes_use_different_programming_languages_and_have_varying_level_when_it_comes_to_contributions = (i) => `Repositories have different scopes, use different programming languages and have varying level when it comes to contributions.`

/**
* @param {{  }} i
*/
export const to_help_you_decide_which_repository_might_be_the_best_to_start_contributing_and_or_falls_into_your_interest_here_s_a_short_comparison_languages_in_bold_comprise_most_of_the_codebase = (i) => `To help you decide which repository might be the best to start contributing (and/or falls into your interest), here is a short comparison (<strong> languages in bold comprise most of the codebase </strong>):`

/**
* @param {{  }} i
*/
export const main_repository_that_provides_the_capacitor_updater_plugin = (i) => `This is the main repository that provides the <code>capacitor-updater</code> Plugin.`

/**
* @param {{  }} i
*/
export const you_want_to_fix_a_bug_or_add_a_new_feature_to_capacitor_updater_this_is_the_repository_you_want_to_contribute_to = (i) => `You want to fix a bug or add a new feature to <code>capacitor-updater</code>? This is the repository you want to contribute to.`

/**
* @param {{  }} i
*/
export const the_webapp_and_serverless_functions_that_make_up_the_capgo_cloud_platform = (i) => `The Webapp and serverless functions that make up the Capgo cloud platform.`

/**
* @param {{  }} i
*/
export const thare_where_you_want_to_contribute_to_fix_the_backend_of_capgo = (i) => `Thare where you want to contribute to fix the backend of Capgo.`

/**
* @param {{  }} i
*/
export const frontend_for_official_deno_webpage = (i) => `Frontend for official Deno webpage`

/**
* @param {{  }} i
*/
export const documentation_in_markdown_that_powers = (i) => `Documentation in Markdown that powers`

/**
* @param {{  }} i
*/
export const version_manager_that_power_ci_cd_to_update_apps = (i) => `Version manager that power CI/CD to uppdate apps.`

/**
* @param {{  }} i
*/
export const read_the_style_guide = (i) => `Read the <a href="https://deno.land/manual@v1.25.4/contributing/style_guide"> style guide.</a>`

/**
* @param {{  }} i
*/
export const ask_for_help_in_the_community_chat_room = (i) => `Ask for help in the <a href="https://discord.com/invite/VnYRvBfgA6"> community chat room. </a>`

/**
* @param {{  }} i
*/
export const mention_issue_before_working = (i) => `When you work on an issue, mention so in the issue comments <em>before</em> you start working on the issue.`

/**
* @param {{  }} i
*/
export const create_an_issue_and_discuss_before_working_on_a_new_feature = (i) => `When you work on a new feature, create an issue and discuss with other contributors <em>before</em> you start working on the feature; we appreciate all contributions, but not all proposed features are getting accepted. We don't want you to spend hours working on a code that might not be accepted.`

/**
* @param {{  }} i
*/
export const please_be_professional_in_the_forums = (i) => `Please be professional in the forums. We follow <a href="https://www.rust-lang.org/policies/code-of-conduct"> Rust's code of conduct</a> (CoC). Have a problem? Email <a href="mailto:ry@tinyclouds.org"> ry@tinyclouds.org.</a>`

/**
* @param {{  }} i
*/
export const submitting_a_pull_request = (i) => `Submitting a pull request`

/**
* @param {{  }} i
*/
export const before_submitting_a_pr = (i) => `Before submitting a PR to any of the repos, please make sure the following is done:`

/**
* @param {{  }} i
*/
export const give_pr_a_descriptive_title = (i) => `Give the PR a descriptive title.`

/**
* @param {{  }} i
*/
export const examples_of_good_pr_title = (i) => `Examples of good PR title:`

/**
* @param {{  }} i
*/
export const examples_of_bad_pr_title = (i) => `Examples of bad PR title:`

/**
* @param {{  }} i
*/
export const submitting_a_pr_to_capgo = (i) => `Submitting a PR to <a href='https://github.com/Cap-go/capgo'><code>Capgo</code></a>`

/**
* @param {{  }} i
*/
export const additionally_make_sure_that = (i) => `Additionally to the above make sure that:`

/**
* @param {{  }} i
*/
export const npm_run_lint_passes = (i) => `<code>npm run lint</code> passes - this will check Rust and JavaScript code for common mistakes and errors using <code>Swiftlint</code> (for Swift) and <code>eslint</code> (for JavaScript and Java)`

/**
* @param {{  }} i
*/
export const documenting_apis = (i) => `Documenting APIs`

/**
* @param {{  }} i
*/
export const importance_of_documenting_apis = (i) => `It is important to document all public APIs and we want to do that inline with the code. This helps ensure that code and documentation are tightly coupled together.`

/**
* @param {{  }} i
*/
export const javascript_and_typescript = (i) => `JavaScript and TypeScript`

/**
* @param {{  }} i
*/
export const jsdoc_documentation = (i) => `All publicly exposed APIs and types, the <code>capacitor-updater</code> module should have JSDoc documentation. This documentation is parsed and available to the TypeScript compiler, and therefore easy to provide further downstream. JSDoc blocks come just prior to the statement they apply to and are denoted by a leading <code>/**</code> before terminating with a <code>*/</code>. For example:`

/**
* @param {{  }} i
*/
export const jsdoc_example = (i) => `export const FOO = 'foo';`

/**
* @param {{  }} i
*/
export const find_more_at = (i) => `Find more at: <a href='https://jsdoc.app/'> https://jsdoc.app/ </a>`

/**
* @param {{  }} i
*/
export const get_in_touch = (i) => `Get in touch`

/**
* @param {{  }} i
*/
export const company_name = (i) => `Company name`

/**
* @param {{  }} i
*/
export const register_code = (i) => `Register code`

/**
* @param {{  }} i
*/
export const address = (i) => `Address`

/**
* @param {{  }} i
*/
export const hosting = (i) => `Hosting`

/**
* @param {{  }} i
*/
export const data_storage = (i) => `Data storage`

/**
* @param {{  }} i
*/
export const data_processing = (i) => `Data processing`

/**
* @param {{  }} i
*/
export const powerful_app_plugins = (i) => `Powerful App Plugins`

/**
* @param {{  }} i
*/
export const powerful_app_plugins_description = (i) => `Enterprise-grade plugins with great documentation, ongoing updates, code snippets and premium support so you can focus on building your app.`

/**
* @param {{  }} i
*/
export const plans_that_scale_with_your_business = (i) => `Plans that scale with your business`

/**
* @param {{  }} i
*/
export const plans_that_scale_with_your_business_description = (i) => `Enterprise-grade cloud that enhance Capacitor application functionality and security.`

/**
* @param {{  }} i
*/
export const monthly_plan = (i) => `Monthly Plan`

/**
* @param {{  }} i
*/
export const yearly_plan = (i) => `Yearly Plan`

/**
* @param {{  }} i
*/
export const save = (i) => `Save`

/**
* @param {{  }} i
*/
export const we_don_t_bill_you_automatically_until_your_confirmation = (i) => `We don’t bill you automatically until your confirmation.`

/**
* @param {{  }} i
*/
export const we_don_t_store_or_sell_your_data_to_anyone = (i) => `We don’t store or sell your data to anyone.`

/**
* @param {{  }} i
*/
export const top_100_app_using_different_framworks_on_android_store = (i) => `List of top 100 app using Diffrents Framworks on android store`

/**
* @param {{  }} i
*/
export const top_apps_by_framework = (i) => `Top apps by framework`

/**
* @param {{  }} i
*/
export const top_100_app_using_capacitor_on_android_play_store = (i) => `List of top 100 app using Capacitor on android play store`

/**
* @param {{  }} i
*/
export const top_capacitor_apps = (i) => `Top Capacitor apps`

/**
* @param {{  }} i
*/
export const capacitor_power_aproximately_1_of_apps_on_google_play_store = (i) => `Capacitor power aproximately $1% of apps on Google Play Store`

/**
* @param {{  }} i
*/
export const downloads = (i) => `Downloads`

/**
* @param {{  }} i
*/
export const see_in_play_store = (i) => `See in Play store`

/**
* @param {{  }} i
*/
export const top_app_using_capgo_cloud_or_self_hosted = (i) => `List of top app using Capgo cloud or self hosted`

/**
* @param {{  }} i
*/
export const top_cordova_apps = (i) => `List of top 100 app using Cordova on android store`

/**
* @param {{  }} i
*/
export const top_cordova_apps_title = (i) => `Top Cordova apps`

/**
* @param {{  }} i
*/
export const top_capgo_apps_title = (i) => `Top Capgo apps`

/**
* @param {{  }} i
*/
export const top_capgo_apps = (i) => `List of top app using Capgo`

/**
* @param {{  }} i
*/
export const cordova_power_aproximately_1_of_apps_on_google_play_store = (i) => `Cordova power aproximately $1% of apps on Google Play Store`

/**
* @param {{  }} i
*/
export const top_flutter_apps = (i) => `List of top 100 app using Flutter on android store`

/**
* @param {{  }} i
*/
export const top_kotlin_apps = (i) => `List of top 100 app using Kotlin on android store`

/**
* @param {{  }} i
*/
export const top_native_script_apps = (i) => `List of top 100 app using Native Script on android store`

/**
* @param {{  }} i
*/
export const top_react_native_apps = (i) => `List of top 100 app using React Native on android store`

/**
* @param {{  }} i
*/
export const top_flutter_apps_title = (i) => `Top Flutter apps`

/**
* @param {{  }} i
*/
export const flutter_power_aproximately_1_of_apps_on_google_play_store = (i) => `Flutter power aproximately $1% of apps on Google Play Store`

/**
* @param {{  }} i
*/
export const top_kotlin_apps_title = (i) => `Top Kotlin apps`

/**
* @param {{  }} i
*/
export const kotlin_power_aproximately_1_of_apps_on_google_play_store = (i) => `Kotlin power aproximately $1% of apps on Google Play Store`

/**
* @param {{  }} i
*/
export const top_native_script_apps_title = (i) => `Top Native Script apps`

/**
* @param {{  }} i
*/
export const native_script_power_aproximately_1_of_apps_on_google_play_store = (i) => `Native Script power aproximately $1% of apps on Google Play Store`

/**
* @param {{  }} i
*/
export const top_react_native_apps_title = (i) => `Top React Native apps`

/**
* @param {{  }} i
*/
export const react_native_power_aproximately_1_of_apps_on_google_play_store = (i) => `React Native power aproximately $1% of apps on Google Play Store`

/**
* @param {{  }} i
*/
export const table_of_contents = (i) => `Table of Contents`

/**
* @param {{  }} i
*/
export const latest_from_news = (i) => `Latest from news`

/**
* @param {{  }} i
*/
export const capgo_gives_you_the_best_insights_you_need_to_create_a_truly_professional_mobile_app = (i) => `Capgo gives you the best insights you need to create a truly professional mobile app.`

/**
* @param {{  }} i
*/
export const see_all_from_our_blog = (i) => `See all from our blog`

/**
* @param {{  }} i
*/
export const latest_from_the_blog = (i) => `Latest from the blog`

/**
* @param {{  }} i
*/
export const calculate_your_usage = (i) => `Calculate your usage`

/**
* @param {{  }} i
*/
export const monthly_active_users = (i) => `Monthly Active Users`

/**
* @param {{  }} i
*/
export const enter_your_estimated_monthly_active_users = (i) => `Enter your estimated monthly active users, updates per month and update size to get your estimated monthly cost.`

/**
* @param {{  }} i
*/
export const updates_by_month = (i) => `Updates<br />by month`

/**
* @param {{  }} i
*/
export const updates_size = (i) => `Updates Size<br />(MB)`

/**
* @param {{  }} i
*/
export const updates_total = (i) => `Updates<br />(Total)`

/**
* @param {{  }} i
*/
export const bandwidth_gb = (i) => `Bandwidth<br />(GB)`

/**
* @param {{  }} i
*/
export const storage = (i) => `Storage<br />(GB)`

/**
* @param {{  }} i
*/
export const yearly = (i) => `Yearly`

/**
* @param {{  }} i
*/
export const monthly = (i) => `Monthly`

/**
* @param {{  }} i
*/
export const we_suggest_you_to_choose_the = (i) => `We suggest you to choose the`

/**
* @param {{  }} i
*/
export const plan = (i) => `plan`

/**
* @param {{  }} i
*/
export const questions_and_answers = (i) => `Questions & Answers`

/**
* @param {{  }} i
*/
export const explore_common_questions = (i) => `Explore the common questions and answers about Capgo`

/**
* @param {{  }} i
*/
export const how_are_mau_counted = (i) => `How are Monthly Active Users (MAU) counted?`

/**
* @param {{  }} i
*/
export const mau_counting_explanation = (i) => `We count MAU (Monthly Active Users) by tracking unique users who open your app within a 30-day period. Each user is counted once, regardless of how many times they engage with the app.`

/**
* @param {{  }} i
*/
export const capgo_usage_explanation = (i) => `At Capgo, we don't count emulators and dev builds in your usage. Learn more about this`

/**
* @param {{  }} i
*/
export const here = (i) => `here.`

/**
* @param {{  }} i
*/
export const what_does_storage_mean = (i) => `What does storage mean?`

/**
* @param {{  }} i
*/
export const storage_explanation = (i) => `Storage, specifically edge storage, refers to the total capacity Capgo provides at edge locations to store all your update bundles. This ensures that users receive the latest version of your app or service quickly and efficiently.`

/**
* @param {{  }} i
*/
export const how_is_bandwidth_counted = (i) => `How is Bandwidth Counted?`

/**
* @param {{  }} i
*/
export const bandwidth_explanation = (i) => `At Capgo, we measure bandwidth by tracking the amount of data transmitted between the storage location and user devices through edge servers. This helps us deliver real-time updates.`

/**
* @param {{  }} i
*/
export const unsure_about_active_users = (i) => `Not sure about your number of active users?`

/**
* @param {{  }} i
*/
export const free_trial_explanation = (i) => `If you're unsure about the number of active users you have and worried about reaching your plan limit, take advantage of Capgo's free trial. It's a great way to test our service, find the right plan, avoid unexpected charges, and ensure everything works smoothly.`

/**
* @param {{  }} i
*/
export const didnt_find_answer = (i) => `Didn’t find the answer you were looking for?`

/**
* @param {{  }} i
*/
export const contact_support = (i) => `Contact our support`

/**
* @param {{  }} i
*/
export const pay_as_you_go = (i) => `Pay as you go`

/**
* @param {{  }} i
*/
export const pay_as_you_go_description = (i) => `Live Updates/mo. No commitments.`

/**
* @param {{  }} i
*/
export const users_included = (i) => `Users included`

/**
* @param {{  }} i
*/
export const then = (i) => `then`

/**
* @param {{  }} i
*/
export const bandwidth = (i) => `Bandwidth`

/**
* @param {{  }} i
*/
export const TB_included = (i) => `TB included`

/**
* @param {{  }} i
*/
export const per_GB = (i) => `per GB`

/**
* @param {{  }} i
*/
export const cloud_storage = (i) => `Cloud Storage`

/**
* @param {{  }} i
*/
export const GB_included = (i) => `GB included`

/**
* @param {{  }} i
*/
export const API_access = (i) => `API Access`

/**
* @param {{  }} i
*/
export const create_anything_you_want = (i) => `Create anything you want`

/**
* @param {{  }} i
*/
export const dedicated_support = (i) => `Dedicated support`

/**
* @param {{  }} i
*/
export const get_an_answer_in_less_than_6h = (i) => `Get an answer in less than 6h`

/**
* @param {{  }} i
*/
export const custom_domain = (i) => `Custom Domain`

/**
* @param {{  }} i
*/
export const add_your_own_domain = (i) => `Add your own domain`

/**
* @param {{  }} i
*/
export const all_our_features_are_available_to_all_users = (i) => `All our features are available to all users`

/**
* @param {{  }} i
*/
export const month = (i) => `Month`

/**
* @param {{  }} i
*/
export const user = (i) => `User`

/**
* @param {{  }} i
*/
export const get_started_for_free = (i) => `Get started for FREE`

/**
* @param {{  }} i
*/
export const most_popular = (i) => `Most popular`

/**
* @param {{  }} i
*/
export const days_free_trial = (i) => `14 days free trial`

/**
* @param {{  }} i
*/
export const billed_annually_at = (i) => `Billed annually at`

/**
* @param {{  }} i
*/
export const you_get = (i) => `You get`

/**
* @param {{  }} i
*/
export const live_updates_per_month = (i) => `Live Updates/month`

/**
* @param {{  }} i
*/
export const of_bandwidth = (i) => `of Bandwidth`

/**
* @param {{  }} i
*/
export const of_storage = (i) => `of Storage`

/**
* @param {{  }} i
*/
export const priority_support_for_all_capgo_plugins = (i) => `Priority support for all Capgo plugins <span class='font-bold'>(30+ plugins)</span>`

/**
* @param {{  }} i
*/
export const for_the_pay_as_you_go_plan = (i) => `for the Pay-as-you-go plan`

/**
* @param {{  }} i
*/
export const per_added_user = (i) => `per added user`

/**
* @param {{  }} i
*/
export const included = (i) => `included`

/**
* @param {{  }} i
*/
export const per_added_gb = (i) => `per added GB`

/**
* @param {{  }} i
*/
export const updates = (i) => `Updates`

/**
* @param {{  }} i
*/
export const updates_explanation = (i) => `Part of the Bandwidth price calculation`

/**
* @param {{  }} i
*/
export const plan_free_desc = (i) => `Best for experimenting without worries`

/**
* @param {{  }} i
*/
export const plan_solo_desc = (i) => `Best for independent developers`

/**
* @param {{  }} i
*/
export const plan_maker_desc = (i) => `Best for small business owners`

/**
* @param {{  }} i
*/
export const plan_team_desc = (i) => `Best for medium enterprises`

/**
* @param {{  }} i
*/
export const tutorial_on = (i) => `Tutorial on`

/**
* @param {{  }} i
*/
export const view_repo = (i) => `View Repo`

/**
* @param {{  }} i
*/
export const view_npm = (i) => `View on NPM`

/**
* @param {{  }} i
*/
export const last_modified = (i) => `Last Modified`

/**
* @param {{  }} i
*/
export const aup_intro = (i) => `This Acceptable Use Policy (this 'Policy') outlines prohibited uses of the web services offered by Capgo and its affiliates (the 'Services') and the website located at https://capgo.app (the 'Capgo Site'). The examples in this Policy are not exhaustive. We may modify this Policy at any time by posting a revised version on the Capgo Site. By using the Services or accessing the Capgo Site, you agree to the latest version of this Policy. If you violate the Policy or authorize or help others to do so, we may suspend or terminate your use of the Services.`

/**
* @param {{  }} i
*/
export const aup_no_illegal_use = (i) => `No Illegal, Harmful, or Offensive Use or Content`

/**
* @param {{  }} i
*/
export const aup_no_illegal_use_desc = (i) => `You may not use, or encourage, promote, facilitate or instruct others to use, the Services or Capgo Site for any illegal, harmful, fraudulent, infringing or offensive use, or to transmit, store, display, distribute or otherwise make available content that is illegal, harmful, fraudulent, infringing or offensive. Prohibited activities or content include:`

/**
* @param {{  }} i
*/
export const illegal_activities = (i) => `Illegal, Harmful or Fraudulent Activities.`

/**
* @param {{  }} i
*/
export const infringing_content = (i) => `Infringing Content.`

/**
* @param {{  }} i
*/
export const offensive_content = (i) => `Offensive Content.`

/**
* @param {{  }} i
*/
export const harmful_content = (i) => `Harmful Content.`

/**
* @param {{  }} i
*/
export const platform_compliance = (i) => `Platform compliance.`

/**
* @param {{  }} i
*/
export const aup_no_security_violations = (i) => `No Security Violations`

/**
* @param {{  }} i
*/
export const aup_no_security_violations_desc = (i) => `You may not use the Services to violate the security or integrity of any network, computer or communications system, software application, or network or computing device (each, a 'System'). Prohibited activities include:`

/**
* @param {{  }} i
*/
export const unauthorized_access = (i) => `Unauthorized Access.`

/**
* @param {{  }} i
*/
export const interception = (i) => `Interception.`

/**
* @param {{  }} i
*/
export const falsification_of_origin = (i) => `Falsification of Origin.`

/**
* @param {{  }} i
*/
export const aup_no_network_abuse = (i) => `No Network Abuse`

/**
* @param {{  }} i
*/
export const aup_no_network_abuse_desc = (i) => `You may not make network connections to any users, hosts, or networks unless you have permission to communicate with them. Prohibited activities include:`

/**
* @param {{  }} i
*/
export const monitoring_crawling = (i) => `Monitoring or Crawling.`

/**
* @param {{  }} i
*/
export const denial_of_service = (i) => `Denial of Service (DoS).`

/**
* @param {{  }} i
*/
export const intentional_interference = (i) => `Intentional Interference.`

/**
* @param {{  }} i
*/
export const operation_of_network_services = (i) => `Operation of Certain Network Services.`

/**
* @param {{  }} i
*/
export const avoiding_system_restrictions = (i) => `Avoiding System Restrictions.`

/**
* @param {{  }} i
*/
export const aup_no_email_abuse = (i) => `No E-Mail or Other Message Abuse`

/**
* @param {{  }} i
*/
export const aup_no_email_abuse_desc = (i) => `You will not distribute, publish, send, or facilitate the sending of unsolicited mass e-mail or other messages, promotions, advertising, or solicitations (like 'spam'), including commercial advertising and informational announcements. You will not alter or obscure mail headers or assume a sender's identity without the sender's explicit permission. You will not collect replies to messages sent from another internet service provider if those messages violate this Policy or the acceptable use policy of that provider.`

/**
* @param {{  }} i
*/
export const aup_monitoring_enforcement = (i) => `Our Monitoring and Enforcement`

/**
* @param {{  }} i
*/
export const aup_monitoring_enforcement_desc = (i) => `We reserve the right, but do not assume the obligation, to investigate any violation of this Policy or misuse of the Services or Capgo Site. We may:`

/**
* @param {{  }} i
*/
export const investigate_violations = (i) => `investigate violations of this Policy or misuse of the Services or Capgo Site;`

/**
* @param {{  }} i
*/
export const remove_modify_content = (i) => `remove, disable access to, or modify any content or resource that violates this Policy or any other agreement we have with you for use of the Services or the Capgo Site.`

/**
* @param {{  }} i
*/
export const aup_reporting_violations = (i) => `Reporting of Violations of this Policy`

/**
* @param {{  }} i
*/
export const aup_reporting_violations_desc = (i) => `If you become aware of any violation of this Policy, you will immediately notify us and provide us with assistance, as requested, to stop or remedy the violation. To report any violation of this Policy, please contact us at support@capgo.app.`

/**
* @param {{  }} i
*/
export const illegal_activities_desc = (i) => `Any activities that are illegal, that violate the rights of others, or that may be harmful to others, our operations or reputation, including disseminating, promoting or facilitating child pornography, offering or disseminating fraudulent goods, services, schemes, or promotions, make-money-fast schemes, ponzi and pyramid schemes, phishing, or pharming.`

/**
* @param {{  }} i
*/
export const infringing_content_desc = (i) => `Content that infringes or misappropriates the intellectual property or proprietary rights of others.`

/**
* @param {{  }} i
*/
export const offensive_content_desc = (i) => `Content that is defamatory, obscene, abusive, invasive of privacy, or otherwise objectionable, including content that constitutes child pornography, relates to bestiality, or depicts non-consensual sex acts.`

/**
* @param {{  }} i
*/
export const harmful_content_desc = (i) => `Content or other computer technology that may damage, interfere with, surreptitiously intercept, or expropriate any system, program, or data, including viruses, Trojan horses, worms, time bombs, or cancelbots.`

/**
* @param {{  }} i
*/
export const platform_compliance_desc = (i) => `Any activities that are deemed unacceptable by the platforms used by the Capgo Site and Services.`

/**
* @param {{  }} i
*/
export const unauthorized_access_desc = (i) => `Accessing or using any System without permission, including attempting to probe, scan, or test the vulnerability of a System or to breach any security or authentication measures used by a System.`

/**
* @param {{  }} i
*/
export const falsification_of_origin_desc = (i) => `Forging TCP-IP packet headers, e-mail headers, or any part of a message describing its origin or route. The legitimate use of aliases and anonymous remailers is not prohibited by this provision.`

/**
* @param {{  }} i
*/
export const monitoring_crawling_desc = (i) => `Monitoring or crawling of a System that impairs or disrupts the System being monitored or crawled.`

/**
* @param {{  }} i
*/
export const denial_of_service_desc = (i) => `Inundating a target with communications requests so the target either cannot respond to legitimate traffic or responds so slowly that it becomes ineffective.`

/**
* @param {{  }} i
*/
export const intentional_interference_desc = (i) => `Interfering with the proper functioning of any System, including any deliberate attempt to overload a system by mail bombing, news bombing, broadcast attacks, or flooding techniques.`

/**
* @param {{  }} i
*/
export const operation_of_network_services_desc = (i) => `Operating or attempting to operate any network service or service that interferes with the proper functioning of any network service.`

/**
* @param {{  }} i
*/
export const avoiding_system_restrictions_desc = (i) => `Using manual or electronic means to avoid any use limitations placed on a System, such as access and storage restrictions.`

/**
* @param {{  }} i
*/
export const report_violations_desc = (i) => `We may report any activity that we suspect violates any law or regulation to appropriate law enforcement officials, regulators, or other appropriate third parties.`

/**
* @param {{  }} i
*/
export const report_violations_desc_2 = (i) => `Our reporting may include disclosing appropriate customer information. We also may cooperate with appropriate law enforcement agencies, regulators, or other appropriate third parties to help with the investigation and prosecution of illegal conduct by providing network and systems information related to alleged violations of this Policy.`

/**
* @param {{  }} i
*/
export const security_policy_title = (i) => `Capgo Security Policy`

/**
* @param {{  }} i
*/
export const canonical = (i) => `Canonical`

/**
* @param {{  }} i
*/
export const security_intro = (i) => `At Capgo, we consider the security of our systems a top priority. However, no matter how much effort we put into system security, there can still be vulnerabilities present.`

/**
* @param {{  }} i
*/
export const security_discovery = (i) => `If you discover a vulnerability, we would like to know about it so we can take steps to address it as quickly as possible. We would like to ask you to help us better protect our clients and our systems.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_title = (i) => `Out of scope vulnerabilities:`

/**
* @param {{  }} i
*/
export const security_out_of_scope_1 = (i) => `Clickjacking on pages with no sensitive actions.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_2 = (i) => `Unauthenticated/logout/login CSRF.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_3 = (i) => `Attacks requiring MITM or physical access to a user's device.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_4 = (i) => `Attacks requiring social engineering.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_5 = (i) => `Any activity that could lead to the disruption of our service (DoS).`

/**
* @param {{  }} i
*/
export const security_out_of_scope_6 = (i) => `Content spoofing and text injection issues without showing an attack vector/without being able to modify HTML/CSS.`

/**
* @param {{  }} i
*/
export const security_out_of_scope_7 = (i) => `Email spoofing`

/**
* @param {{  }} i
*/
export const security_out_of_scope_8 = (i) => `Missing DNSSEC, CAA, CSP headers`

/**
* @param {{  }} i
*/
export const security_out_of_scope_9 = (i) => `Lack of Secure or HTTP only flag on non-sensitive cookies`

/**
* @param {{  }} i
*/
export const security_out_of_scope_10 = (i) => `Deadlinks`

/**
* @param {{  }} i
*/
export const security_out_of_scope_11 = (i) => `User enumeration`

/**
* @param {{  }} i
*/
export const security_testing_guidelines_title = (i) => `Testing guidelines:`

/**
* @param {{  }} i
*/
export const security_testing_guidelines_1 = (i) => `Do not run automated scanners on other customer projects. Running automated scanners can run up costs for our users. Aggressively configured scanners might inadvertently disrupt services, exploit vulnerabilities, lead to system instability or breaches and violate Terms of Service from our upstream providers. Our own security systems won't be able to distinguish hostile reconnaissance from whitehat research. If you wish to run an automated scanner, notify us at security@capgo.app and only run it on your own Capgo project. Do NOT attack projects of other customers.`

/**
* @param {{  }} i
*/
export const security_testing_guidelines_2 = (i) => `Do not take advantage of the vulnerability or problem you have discovered, for example by downloading more data than necessary to demonstrate the vulnerability or deleting or modifying other people's data.`

/**
* @param {{  }} i
*/
export const security_reporting_guidelines_title = (i) => `Reporting guidelines:`

/**
* @param {{  }} i
*/
export const security_reporting_guidelines_1 = (i) => `Submit your findings through our GitHub Security Advisory:`

/**
* @param {{  }} i
*/
export const security_reporting_guidelines_2 = (i) => `Do provide sufficient information to reproduce the problem, so we will be able to resolve it as quickly as possible.`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_title = (i) => `Disclosure guidelines:`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_1 = (i) => `In order to protect our customers, do not reveal the problem to others until we have researched, addressed and informed our affected customers.`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_2 = (i) => `If you want to publicly share your research about Capgo at a conference, in a blog or any other public forum, you should share a draft with us for review and approval at least 30 days prior to the publication date. Please note that the following should not be included:`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_2_1 = (i) => `Data regarding any Capgo customer projects`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_2_2 = (i) => `Capgo customers' data`

/**
* @param {{  }} i
*/
export const security_disclosure_guidelines_2_3 = (i) => `Information about Capgo employees, contractors or partners`

/**
* @param {{  }} i
*/
export const security_what_we_promise_title = (i) => `What we promise:`

/**
* @param {{  }} i
*/
export const security_what_we_promise_1 = (i) => `We will respond to your report within 7 business days with our evaluation of the report and an expected resolution date.`

/**
* @param {{  }} i
*/
export const security_what_we_promise_2 = (i) => `If you have followed the instructions above, we will not take any legal action against you in regard to the report.`

/**
* @param {{  }} i
*/
export const security_what_we_promise_3 = (i) => `We will handle your report with strict confidentiality, and not pass on your personal details to third parties without your permission.`

/**
* @param {{  }} i
*/
export const security_what_we_promise_4 = (i) => `We will keep you informed of the progress towards resolving the problem.`

/**
* @param {{  }} i
*/
export const security_what_we_promise_5 = (i) => `In the public information concerning the problem reported, we will give your name as the discoverer of the problem (unless you desire otherwise).`

/**
* @param {{  }} i
*/
export const security_closing = (i) => `We strive to resolve all problems as quickly as possible, and we would like to play an active role in the ultimate publication on the problem after it is resolved.`

/**
* @param {{  }} i
*/
export const sla_title = (i) => `Service Level Agreements`

/**
* @param {{  }} i
*/
export const enterprise_platform_uptime_sla = (i) => `Enterprise Platform Uptime SLA`

/**
* @param {{  }} i
*/
export const sla_intro = (i) => `The following Service Level Agreement, which is incorporated into and forms part of the Subscription Agreement between Capgo ("Capgo") and Customer (the "Agreement"), will apply to the Services for Enterprise Customers specified in an Order Form during the applicable Subscription Term:`

/**
* @param {{  }} i
*/
export const uptime_commitment_title = (i) => `1. Uptime Commitment`

/**
* @param {{  }} i
*/
export const uptime_commitment_desc = (i) => `Capgo will provide Actual Availability for at least ninety-nine percent (99.0%) of the total time in each calendar month during the Subscription Term, as measured by Capgo (the "Uptime Commitment").`

/**
* @param {{  }} i
*/
export const service_credits_title = (i) => `2. Service Credits`

/**
* @param {{  }} i
*/
export const service_credits_desc = (i) => `If the Uptime Commitment is not met during any particular calendar month during the Subscription Term, then Customer will be eligible for a service credit ("Service Credit"), provided that Customer reports to Capgo such failure to meet the Uptime Commitment and requests such Service Credit in accordance with this Exhibit. The amount of any Service Credit due hereunder shall be calculated as follows: X * Y, where X = the total fees due from Customer to Capgo for the affected Services for the relevant calendar month (regardless of when billed or payable), and Y = the Credit Percentage corresponding with the Actual Availability provided (as a percentage of total time) for the relevant calendar month, as set forth in the table below.`

/**
* @param {{  }} i
*/
export const actual_availability = (i) => `Actual Availability`

/**
* @param {{  }} i
*/
export const credit_percentage = (i) => `Credit Percentage`

/**
* @param {{  }} i
*/
export const availability_99_98 = (i) => `Less than 99.0% but greater than or equal to 98.0%`

/**
* @param {{  }} i
*/
export const credit_10_percent = (i) => `10%`

/**
* @param {{  }} i
*/
export const availability_98_97 = (i) => `Less than 98.0% but greater than or equal to 97.0%`

/**
* @param {{  }} i
*/
export const credit_15_percent = (i) => `15%`

/**
* @param {{  }} i
*/
export const availability_97_95 = (i) => `Less than 97.0% but greater than or equal to 95.0%`

/**
* @param {{  }} i
*/
export const credit_20_percent = (i) => `20%`

/**
* @param {{  }} i
*/
export const availability_below_95 = (i) => `Less than 95.0%`

/**
* @param {{  }} i
*/
export const credit_30_percent = (i) => `30%`

/**
* @param {{  }} i
*/
export const credit_requests_payment_title = (i) => `3. Credit Requests and Payment`

/**
* @param {{  }} i
*/
export const credit_requests_payment_desc = (i) => `To request a Service Credit, Customer must send an email to Capgo at support@capgo.app within thirty (30) days of the end of the month in which the Uptime Commitment was not met. Customer must include either its account ID or registered email address, and the previously reported dates and times that there was no Service Availability. If Capgo confirms that Customer is eligible for a Service Credit, Capgo will issue a credit to Customer's account within thirty (30) days. Service Credits are not refunds, cannot be exchanged into a cash amount, and may only be used against future billing charges. Except as set forth in Section 4 below, the Service Credits shall be Customer's sole and exclusive remedy, and Capgo's sole and exclusive liability, for any failure by Capgo to meet the Uptime Commitment.`

/**
* @param {{  }} i
*/
export const four_definitions_title = (i) => `4. Definitions`

/**
* @param {{  }} i
*/
export const definitions_desc = (i) => `All capitalized words used but not defined in this Service Level Agreement have the meaning set forth in the Agreement.`

/**
* @param {{  }} i
*/
export const scheduled_availability_title = (i) => `4.1 Scheduled Availability`

/**
* @param {{  }} i
*/
export const scheduled_availability_desc = (i) => `"Scheduled Availability" means the time, in minutes, that the applicable Services are generally accessible and available to Customer's Permitted Users.`

/**
* @param {{  }} i
*/
export const unscheduled_downtime_title = (i) => `4.2 Unscheduled Downtime`

/**
* @param {{  }} i
*/
export const unscheduled_downtime_desc = (i) => `"Unscheduled Downtime" means the time, in minutes, that the applicable Services are not generally accessible and available to Customer's Permitted Users, excluding inaccessibility or unavailability due to Customer's or Permitted Users' acts or omissions, force majeure events, scheduled maintenance disclosed with at least 24 hours' notice by email, hacking or virus attacks, reasonable emergency maintenance or other product specific exclusions listed under SLA Exclusions.`

/**
* @param {{  }} i
*/
export const actual_availability_title = (i) => `4.3 Actual Availability`

/**
* @param {{  }} i
*/
export const actual_availability_desc = (i) => `"Actual Availability" means Scheduled Availability less Unscheduled Downtime.`

/**
* @param {{  }} i
*/
export const production_title = (i) => `4.4 Production`

/**
* @param {{  }} i
*/
export const production_desc = (i) => `"Production" is defined as a system serving live customer-facing or business systems with existing deployed and functional features.`

/**
* @param {{  }} i
*/
export const non_production_desc = (i) => `"Development", "Staging", "uat", "pre-production" or new feature implementation even if in a production environment, are not considered Production.`

/**
* @param {{  }} i
*/
export const sla_exclusions_title = (i) => `SLA Exclusions`

/**
* @param {{  }} i
*/
export const general_service_exclusions_title = (i) => `General Service Exclusions`

/**
* @param {{  }} i
*/
export const general_service_exclusion_1 = (i) => `(i) Caused by factors outside of our reasonable control, including but not limited to any force majeure event or Internet access, ISP provider issues, and/or related problems beyond the demarcation point of Capgo.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_2 = (i) => `(ii) That result from any voluntary actions or inactions from you.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_3 = (i) => `(iii) That result from instance class CPU and memory resource limitations.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_4 = (i) => `(iv) That result from you not following the basic operational guidelines described in our Docs.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_5 = (i) => `(v) That result in a long recovery time due to insufficient IO capacity for your workload.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_6 = (i) => `(vi) That result from your equipment, software, or other technology.`

/**
* @param {{  }} i
*/
export const general_service_exclusion_7 = (i) => `(vii) Arising from our suspension and termination of your right to use Capgo in accordance with our Terms.`

/**
* @param {{  }} i
*/
export const live_update_sla_exclusions_title = (i) => `Live Update SLA Exclusions`

/**
* @param {{  }} i
*/
export const live_update_exclusion_1 = (i) => `(i) Inappropriately provisioned compute resources related to your project for the expected load.`

/**
* @param {{  }} i
*/
export const live_update_exclusion_2 = (i) => `(ii) Outages caused by overly permissive rate-limiting configurations.`

/**
* @param {{  }} i
*/
export const live_update_exclusion_3 = (i) => `(iii) Outages or issues caused by retracted versions of official Capgo libraries, frameworks, software packages or APIs, including urgent retractions due to identified security vulnerabilities.`

/**
* @param {{  }} i
*/
export const live_update_exclusion_4 = (i) => `(iv) Outages or issues caused by unofficial Capgo client libraries, frameworks, or API proxies, even when those libraries internally use official Capgo libraries.`

/**
* @param {{  }} i
*/
export const live_update_exclusion_5 = (i) => `(v) Outages or issues that could have been resolved by upgrading to a higher minor or patch version of an official Capgo client library, framework, or software package.`

/**
* @param {{  }} i
*/
export const support_title = (i) => `Support`

/**
* @param {{  }} i
*/
export const support_desc = (i) => `Capgo provides Support Service Level Agreements for our Team and Enterprise customers.`

/**
* @param {{  }} i
*/
export const urgent_support_title = (i) => `1. Urgent`

/**
* @param {{  }} i
*/
export const urgent_support_subtitle = (i) => `Critical Issue`

/**
* @param {{  }} i
*/
export const urgent_support_desc = (i) => `Defect resulting in full or partial system outage or a condition that makes Capgo unusable or unavailable in production for all of Customer's Users.`

/**
* @param {{  }} i
*/
export const high_support_title = (i) => `2. High`

/**
* @param {{  }} i
*/
export const high_support_subtitle = (i) => `Significant Business Disruption`

/**
* @param {{  }} i
*/
export const high_support_desc = (i) => `Issue resulting in a situation meaning major functionality is impacted and significant performance degradation is experienced. Issue impacts significant proportion of user base and / or major Capgo functionality.`

/**
* @param {{  }} i
*/
export const normal_support_title = (i) => `3. Normal`

/**
* @param {{  }} i
*/
export const normal_support_subtitle = (i) => `Minor Feature or Functional Issue / General Question`

/**
* @param {{  }} i
*/
export const normal_support_desc = (i) => `Issue results in a component of Capgo not performing as expected or documented. An inquiry by a Customer representative regarding a general technical issue or general question.`

/**
* @param {{  }} i
*/
export const low_support_title = (i) => `4. Low`

/**
* @param {{  }} i
*/
export const low_support_subtitle = (i) => `Minor Issue / Feature Request`

/**
* @param {{  }} i
*/
export const low_support_desc = (i) => `An Information request about Capgo or feature request.`

/**
* @param {{  }} i
*/
export const target_initial_response_times_title = (i) => `Target initial response times`

/**
* @param {{  }} i
*/
export const severity_level = (i) => `Severity Level`

/**
* @param {{  }} i
*/
export const team_plan = (i) => `Team`

/**
* @param {{  }} i
*/
export const pay_as_you_go_plan = (i) => `Pay as you go`

/**
* @param {{  }} i
*/
export const priority_plus_plan = (i) => `Priority Plus`

/**
* @param {{  }} i
*/
export const urgent_team_response = (i) => `24 hours<br />24/7 × 365`

/**
* @param {{  }} i
*/
export const urgent_payg_response = (i) => `1 hour<br />24/7 × 365`

/**
* @param {{  }} i
*/
export const urgent_priority_response = (i) => `1 hour<br />24/7 × 365`

/**
* @param {{  }} i
*/
export const high_team_response = (i) => `1 business day<br />Monday - Friday`

/**
* @param {{  }} i
*/
export const high_payg_response = (i) => `2 business hours<br />Monday - Friday`

/**
* @param {{  }} i
*/
export const high_priority_response = (i) => `2 hours<br />24/7 × 365`

/**
* @param {{  }} i
*/
export const normal_team_response = (i) => `1 business day<br />Monday - Friday`

/**
* @param {{  }} i
*/
export const normal_payg_response = (i) => `1 business day<br />Monday - Friday`

/**
* @param {{  }} i
*/
export const normal_priority_response = (i) => `12 hours<br />24/7 x 365`

/**
* @param {{  }} i
*/
export const low_team_response = (i) => `2 business days<br />Monday - Friday`

/**
* @param {{  }} i
*/
export const low_payg_response = (i) => `2 business days<br />Monday - Friday`

/**
* @param {{  }} i
*/
export const low_priority_response = (i) => `24 hours<br />24/7 x 365`

/**
* @param {{  }} i
*/
export const business_hours_note = (i) => `Business hours are from 6am to 6pm (local time), except where otherwise stated.`

/**
* @param {{  }} i
*/
export const support_policy_title = (i) => `Capgo Customer Support`

/**
* @param {{  }} i
*/
export const support_policy_intro = (i) => `Capgo is committed to delivering an outstanding customer experience. As part of this commitment, we offer limited technical support for all paid projects using our Capgo platform. Our technical support is defined by the following scope, hours, contacts, and channels.`

/**
* @param {{  }} i
*/
export const support_policy_scope_title = (i) => `Scope`

/**
* @param {{  }} i
*/
export const support_policy_scope_intro = (i) => `Capgo's support offering is available only for technologies supported by the Capgo Platform and is limited to:`

/**
* @param {{  }} i
*/
export const support_policy_configuration_issues_title = (i) => `Configuration Issues`

/**
* @param {{  }} i
*/
export const support_policy_configuration_issues_1 = (i) => `Setup of live updates`

/**
* @param {{  }} i
*/
export const support_policy_configuration_issues_2 = (i) => `Best practices for app configuration`

/**
* @param {{  }} i
*/
export const support_policy_configuration_issues_3 = (i) => `General questions about the Capgo stack`

/**
* @param {{  }} i
*/
export const support_policy_troubleshooting_title = (i) => `Troubleshooting`

/**
* @param {{  }} i
*/
export const support_policy_troubleshooting_1 = (i) => `Providing workarounds or solutions for known issues`

/**
* @param {{  }} i
*/
export const support_policy_troubleshooting_2 = (i) => `Answering general how-to questions and directing to documentation`

/**
* @param {{  }} i
*/
export const support_policy_troubleshooting_3 = (i) => `Troubleshooting supported features (Live Updates, App Management, Analytics) showing unexpected behavior on Capgo, independent of the user's application code`

/**
* @param {{  }} i
*/
export const support_policy_not_covered_title = (i) => `Not Covered`

/**
* @param {{  }} i
*/
export const support_policy_not_covered_intro = (i) => `Capgo technical support services do not include:`

/**
* @param {{  }} i
*/
export const support_policy_not_covered_1 = (i) => `General debugging of user applications`

/**
* @param {{  }} i
*/
export const support_policy_not_covered_2 = (i) => `Rewriting application code for compatibility with Capgo`

/**
* @param {{  }} i
*/
export const support_policy_not_covered_3 = (i) => `Modifying and/or patching third-party or Open Source software for Capgo compatibility`

/**
* @param {{  }} i
*/
export const support_policy_billing_support = (i) => `Billing and account management support is available to all customers.`

/**
* @param {{  }} i
*/
export const support_policy_limited_support_intro = (i) => `Limited technical support is available for Capgo customers using paid Capgo resources and/or paid Capgo Add-Ons. Support requests will only be processed if:`

/**
* @param {{  }} i
*/
export const support_policy_limited_support_1 = (i) => `The request is made through one of our official support channels`

/**
* @param {{  }} i
*/
export const support_policy_limited_support_2 = (i) => `The request comes from a registered Capgo account email address`

/**
* @param {{  }} i
*/
export const support_policy_limited_support_3 = (i) => `The requester has Developer or higher access to any specific Capgo projects related to the request`

/**
* @param {{  }} i
*/
export const support_policy_official_channels_title = (i) => `Official Support Channels`

/**
* @param {{  }} i
*/
export const support_policy_official_channels_1 = (i) => `Web and Dashboard: Support is available exclusively through the Capgo help feature in the dashboard or our website`

/**
* @param {{  }} i
*/
export const support_policy_official_channels_2 = (i) => `Email: If you can't access the dashboard or ticket system, contact support by emailing support@capgo.app from a registered Capgo account email address`

/**
* @param {{  }} i
*/
export const support_policy_official_channels_note = (i) => `Capgo support staff will only address requests received through these official channels. Community channels may exist for peer-to-peer support and discussions, provided by volunteers contributing to the Capgo community.`

/**
* @param {{  }} i
*/
export const support_policy_code_debugging = (i) => `For code debugging questions, we recommend reaching out on GitHub Issues or Discord. The community includes experienced developers who may offer guidance on code-related issues.`

/**
* @param {{  }} i
*/
export const support_policy_community_response = (i) => `To get the most helpful community response, provide precise and detailed information about your problem and any error messages. Include relevant code snippets explaining how to reproduce the issue in your message.`

/**
* @param {{  }} i
*/
export const support_policy_team_participation = (i) => `Note that Capgo team members may participate in community channels at their discretion, but there's no guarantee of response unless submitted through official channels.`

/**
* @param {{  }} i
*/
export const support_policy_sla_title = (i) => `Service Level Agreement`

/**
* @param {{  }} i
*/
export const support_policy_sla_desc = (i) => `Service Level Agreements are only available to Enterprise customers. You can find SLA details, including support response times, on our dedicated SLA page:`

/**
* @param {{  }} i
*/
export const support_policy_proactive_monitoring_title = (i) => `Proactive Monitoring`

/**
* @param {{  }} i
*/
export const support_policy_proactive_monitoring_desc = (i) => `In case of a platform issue, we'll post a notice on our status site at status.capgo.app to quickly communicate the impact and status. You don't need to submit a support ticket for ongoing platform issues. Instead, monitor the status page for the latest updates and information.`

/**
* @param {{  }} i
*/
export const support_policy_premium_support_title = (i) => `Premium Support`

/**
* @param {{  }} i
*/
export const support_policy_premium_support_desc = (i) => `To learn about our Premium Support options for Team Plan and Enterprise customers, please contact us using the form below:`

/**
* @param {{  }} i
*/
export const disclaimer_title = (i) => `Disclaimer`

/**
* @param {{  }} i
*/
export const disclaimer_last_updated = (i) => `Last updated: January 28, 2022`

/**
* @param {{  }} i
*/
export const interpretation_and_definitions_title = (i) => `Interpretation and Definitions`

/**
* @param {{  }} i
*/
export const interpretation_title = (i) => `Interpretation`

/**
* @param {{  }} i
*/
export const interpretation_text = (i) => `The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.`

/**
* @param {{  }} i
*/
export const definitions_title = (i) => `Definitions`

/**
* @param {{  }} i
*/
export const definitions_purpose = (i) => `For the purposes of this Disclaimer:`

/**
* @param {{  }} i
*/
export const company_definition = (i) => `<strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Disclaimer) refers to Digital Shift OU, 6 sepapaja, 15510 Tallinn.`

/**
* @param {{  }} i
*/
export const service_definition = (i) => `<strong>Service</strong> refers to the Application.`

/**
* @param {{  }} i
*/
export const you_definition = (i) => `<strong>You</strong> means the individual accessing the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`

/**
* @param {{ { brand : NonNullable<unknown> }} i
*/
export const application_definition = (i) => `<strong>Application</strong> means the software program provided by the Company downloaded by You on any electronic device named ${i['{ brand ']}}.`

/**
* @param {{  }} i
*/
export const disclaimer_text = (i) => `The information contained on the Service is for general information purposes only.`

/**
* @param {{  }} i
*/
export const company_no_responsibility = (i) => `The Company assumes no responsibility for errors or omissions in the contents of the Service.`

/**
* @param {{  }} i
*/
export const company_no_liability = (i) => `In no event shall the Company be liable for any special, direct, indirect, consequential, or incidental damages or any damages whatsoever, whether in an action of contract, negligence or other tort, arising out of or in connection with the use of the Service or the contents of the Service. The Company reserves the right to make additions, deletions, or modifications to the contents on the Service at any time without prior notice. This Disclaimer has been created with the help of the <a href="https://www.termsfeed.com/blog/sample-disclaimer-template/" target="_blank"> Disclaimer Template. </a>`

/**
* @param {{  }} i
*/
export const no_virus_warranty = (i) => `The Company does not warrant that the Service is free of viruses or other harmful components.`

/**
* @param {{  }} i
*/
export const external_links_disclaimer_title = (i) => `External Links Disclaimer`

/**
* @param {{  }} i
*/
export const external_links_disclaimer_text = (i) => `The Service may contain links to external websites that are not provided or maintained by or in any way affiliated with the Company.`

/**
* @param {{  }} i
*/
export const external_links_no_guarantee = (i) => `Please note that the Company does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.`

/**
* @param {{  }} i
*/
export const errors_and_omissions_disclaimer_title = (i) => `Errors and Omissions Disclaimer`

/**
* @param {{  }} i
*/
export const errors_and_omissions_disclaimer_text = (i) => `The information given by the Service is for general guidance on matters of interest only. Even if the Company takes every precaution to insure that the content of the Service is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules and regulations, there may be delays, omissions or inaccuracies in the information contained on the Service.`

/**
* @param {{  }} i
*/
export const company_not_responsible = (i) => `The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.`

/**
* @param {{  }} i
*/
export const fair_use_disclaimer_title = (i) => `Fair Use Disclaimer`

/**
* @param {{  }} i
*/
export const fair_use_disclaimer_text = (i) => `The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.`

/**
* @param {{  }} i
*/
export const fair_use_belief = (i) => `The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.`

/**
* @param {{  }} i
*/
export const copyright_permission = (i) => `If You wish to use copyrighted material from the Service for your own purposes that go beyond fair use, You must obtain permission from the copyright owner.`

/**
* @param {{  }} i
*/
export const views_expressed_disclaimer_title = (i) => `Views Expressed Disclaimer`

/**
* @param {{  }} i
*/
export const views_expressed_disclaimer_text = (i) => `The Service may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer or company, including the Company.`

/**
* @param {{  }} i
*/
export const user_comments_responsibility = (i) => `Comments published by users are their sole responsibility and the users will take full responsibility, liability and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.`

/**
* @param {{  }} i
*/
export const no_responsibility_disclaimer_title = (i) => `No Responsibility Disclaimer`

/**
* @param {{  }} i
*/
export const no_responsibility_disclaimer_text = (i) => `The information on the Service is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal or other competent advisers.`

/**
* @param {{  }} i
*/
export const company_no_liability_for_access = (i) => `In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Service.`

/**
* @param {{  }} i
*/
export const use_at_your_own_risk_disclaimer_title = (i) => `"Use at Your Own Risk" Disclaimer`

/**
* @param {{  }} i
*/
export const use_at_your_own_risk_disclaimer_text = (i) => `All information in the Service is provided "as is", with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability and fitness for a particular purpose.`

/**
* @param {{  }} i
*/
export const company_no_liability_for_decisions = (i) => `The Company will not be liable to You or anyone else for any decision made or action taken in reliance on the information given by the Service or for any consequential, special or similar damages, even if advised of the possibility of such damages.`

/**
* @param {{  }} i
*/
export const contact_us_title = (i) => `Contact Us`

/**
* @param {{  }} i
*/
export const contact_us_text = (i) => `If you have any questions about this Disclaimer, You can contact Us:`

/**
* @param {{  }} i
*/
export const contact_us_website = (i) => `By visiting this page on the website:`

/**
* @param {{  }} i
*/
export const trust_capgo_security = (i) => `Capgo Security.`

/**
* @param {{  }} i
*/
export const trust_move_forward_with_confidence = (i) => `Move forward with confidence. We offer multiple levels of protection to keep your intellectual property and sensitive data secure.`

/**
* @param {{  }} i
*/
export const trust_product_security = (i) => `Product security`

/**
* @param {{  }} i
*/
export const trust_source_code_protection = (i) => `Source code protection`

/**
* @param {{  }} i
*/
export const trust_source_code_vulnerabilities = (i) => `Source code is continuously scanned for vulnerabilities using Sink Inspector.`

/**
* @param {{  }} i
*/
export const trust_data_security = (i) => `Data security`

/**
* @param {{  }} i
*/
export const trust_encryption_communication = (i) => `Encryption communication`

/**
* @param {{  }} i
*/
export const trust_data_traffic_encrypted = (i) => `All data traffic is encrypted via TLS and HTTPS.`

/**
* @param {{  }} i
*/
export const trust_source_code_encryption = (i) => `Source code encryption`

/**
* @param {{  }} i
*/
export const trust_source_code_encrypted_in_transit = (i) => `Source code is always encrypted in transit via TLS and HTTPS.`

/**
* @param {{  }} i
*/
export const trust_data_backup = (i) => `Data backup`

/**
* @param {{  }} i
*/
export const trust_data_backup_policy = (i) => `Capgo maintains a data backup policy that follows industry best practices.`

/**
* @param {{  }} i
*/
export const trust_network_security = (i) => `Network security`

/**
* @param {{  }} i
*/
export const trust_architecture = (i) => `Architecture`

/**
* @param {{  }} i
*/
export const trust_architecture_layers = (i) => `Capgo’s architecture consists of multiple secure network layers.`

/**
* @param {{  }} i
*/
export const trust_application_security = (i) => `Application security`

/**
* @param {{  }} i
*/
export const trust_secure_coding = (i) => `Secure coding`

/**
* @param {{  }} i
*/
export const trust_code_review = (i) => `Any changes that make their way into production must first be reviewed and approved. Code refactoring must adhere to secure coding principles and industry best practices, such as those defined by OWASP.`

/**
* @param {{  }} i
*/
export const trust_site_reliability = (i) => `Site reliability`

/**
* @param {{  }} i
*/
export const trust_serverless_infrastructure = (i) => `Capgo use 100% serverless infrastructure, historically achieving 99.9% uptime. See status here`

/**
* @param {{  }} i
*/
export const trust_application_penetration_testing = (i) => `Application penetration testing`

/**
* @param {{  }} i
*/
export const trust_third_party_testing = (i) => `Capgo is regularly tested by third-party penetration testers to ensure the security of the application.`

/**
* @param {{  }} i
*/
export const trust_business_security = (i) => `Business security`

/**
* @param {{  }} i
*/
export const trust_background_checks = (i) => `Background checks`

/**
* @param {{  }} i
*/
export const trust_access_to_production_database = (i) => `Capgo don't have employees and will never, only one person, Martin Donadieu has access to production database. Freelancer or open-source contributors are not allowed to have access to production database.`

/**
* @param {{  }} i
*/
export const trust_security_awareness = (i) => `Security awareness`

/**
* @param {{  }} i
*/
export const trust_security_training = (i) => `Capgo Founder take security awareness, best practice, and incident response training.`

/**
* @param {{  }} i
*/
export const trust_security_coding_education = (i) => `Security coding education`

/**
* @param {{  }} i
*/
export const trust_open_source_security = (i) => `Capgo by been 100% open-source, is leaded to improve security with the community.`

/**
* @param {{  }} i
*/
export const trust_partner_management = (i) => `Partner management`

/**
* @param {{  }} i
*/
export const trust_soc2_certification = (i) => `Capgo requires all critical third-party vendors to achieve SOC 2 certification at the minimum, and verifies certifications annually.`

/**
* @param {{  }} i
*/
export const trust_incident_response = (i) => `Incident response`

/**
* @param {{  }} i
*/
export const trust_dedicated_incident_response = (i) => `Capgo stands at the ready with a dedicated Incident Response Person.`

/**
* @param {{  }} i
*/
export const trust_incident_response_policy_plan = (i) => `Incident response policy & plan`

/**
* @param {{  }} i
*/
export const trust_incident_response_policy = (i) => `An incident response policy is maintained and managed by a dedicated incident response Person at Capgo.`

/**
* @param {{  }} i
*/
export const trust_communication = (i) => `Communication`

/**
* @param {{  }} i
*/
export const trust_system_wide_issues_notification = (i) => `In the event of system-wide issues, customers are notified by their email. Capgo's system status and network and security incidents are published at https://status.capgo.app.`

/**
* @param {{  }} i
*/
export const tos_title = (i) => `Terms and Conditions`

/**
* @param {{  }} i
*/
export const tos_last_updated = (i) => `Last updated: January 12, 2022`

/**
* @param {{  }} i
*/
export const tos_please_read = (i) => `Please read these terms and conditions carefully before using our Service.`

/**
* @param {{  }} i
*/
export const tos_interpretation_title = (i) => `Interpretation and Definitions`

/**
* @param {{  }} i
*/
export const tos_interpretation_subtitle = (i) => `Interpretation`

/**
* @param {{  }} i
*/
export const tos_interpretation_text = (i) => `The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.`

/**
* @param {{  }} i
*/
export const tos_definitions_subtitle = (i) => `Definitions`

/**
* @param {{  }} i
*/
export const tos_definitions_intro = (i) => `For the purposes of these Terms and Conditions:`

/**
* @param {{  }} i
*/
export const tos_definition_application = (i) => `Application means the software program provided by the Company downloaded by You on any electronic device, named $1`

/**
* @param {{  }} i
*/
export const tos_definition_application_store = (i) => `Application Store means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) in which the Application has been downloaded.`

/**
* @param {{  }} i
*/
export const tos_definition_affiliate = (i) => `Affiliate means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.`

/**
* @param {{  }} i
*/
export const tos_definition_account = (i) => `Account means a unique account created for You to access our Service or parts of our Service.`

/**
* @param {{  }} i
*/
export const tos_definition_country = (i) => `Country refers to: Estonia`

/**
* @param {{  }} i
*/
export const tos_definition_company = (i) => `Company (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Digital shift OU, Sepapaja 6, 15551 , Tallinn, Estonia.`

/**
* @param {{  }} i
*/
export const tos_definition_device = (i) => `Device means any device that can access the Service such as a computer, a cellphone or a digital tablet.`

/**
* @param {{  }} i
*/
export const tos_definition_feedback = (i) => `Feedback means feedback, innovations or suggestions sent by You regarding the attributes, performance or features of our Service.`

/**
* @param {{  }} i
*/
export const tos_definition_free_trial = (i) => `Free Trial refers to a limited period of time that may be free when purchasing a Subscription.`

/**
* @param {{  }} i
*/
export const tos_definition_in_app_purchase = (i) => `In-app Purchase refers to the purchase of a product, item, service or Subscription made through the Application and subject to these Terms and Conditions and/or the Application Store's own terms and conditions.`

/**
* @param {{  }} i
*/
export const tos_definition_service = (i) => `Service refers to the Application.`

/**
* @param {{  }} i
*/
export const tos_definition_subscriptions = (i) => `Subscriptions refer to the services or access to the Service offered on a subscription basis by the Company to You.`

/**
* @param {{  }} i
*/
export const tos_definition_terms = (i) => `Terms and Conditions (also referred as "Terms") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service.`

/**
* @param {{  }} i
*/
export const tos_definition_third_party_social_media = (i) => `Third-party Social Media Service means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.`

/**
* @param {{  }} i
*/
export const tos_definition_you = (i) => `You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_title = (i) => `Acknowledgment`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_text_1 = (i) => `These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_text_2 = (i) => `Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_text_3 = (i) => `By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_text_4 = (i) => `You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.`

/**
* @param {{  }} i
*/
export const tos_acknowledgment_text_5 = (i) => `Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your personal information when You use the Application or the Website and tells You about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before using Our Service.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_title = (i) => `Subscriptions`

/**
* @param {{  }} i
*/
export const tos_subscriptions_period_subtitle = (i) => `Subscription period`

/**
* @param {{  }} i
*/
export const tos_subscriptions_period_text_1 = (i) => `The Service or some parts of the Service are available only with a paid Subscription. You will be billed in advance on a recurring and periodic basis (such as daily, weekly, monthly or annually), depending on the type of Subscription plan you select when purchasing the Subscription.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_period_text_2 = (i) => `At the end of each period, Your Subscription will automatically renew under the exact same conditions unless You cancel it or the Company cancels it.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_cancellations_subtitle = (i) => `Subscription cancellations`

/**
* @param {{  }} i
*/
export const tos_subscriptions_cancellations_text_1 = (i) => `You may cancel Your Subscription renewal either through Your Account settings page or by contacting the Company. You will not receive a refund for the fees You already paid for Your current Subscription period and You will be able to access the Service until the end of Your current Subscription period.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_cancellations_text_2 = (i) => `If the Subscription has been made through an In-app Purchase, You can cancel the renewal of Your Subscription with the Application Store.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_billing_subtitle = (i) => `Billing`

/**
* @param {{  }} i
*/
export const tos_subscriptions_billing_text_1 = (i) => `You shall provide the Company with accurate and complete billing information including full name, address, state, zip code, telephone number, and a valid payment method information.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_billing_text_2 = (i) => `Should automatic billing fail to occur for any reason, the Company will issue an electronic invoice indicating that you must proceed manually, within a certain deadline date, with the full payment corresponding to the billing period as indicated on the invoice.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_billing_text_3 = (i) => `If the Subscription has been made through an In-app Purchase, all billing is handled by the Application Store and is governed by the Application Store's own terms and conditions.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_fee_changes_subtitle = (i) => `Fee Changes`

/**
* @param {{  }} i
*/
export const tos_subscriptions_fee_changes_text_1 = (i) => `The Company, in its sole discretion and at any time, may modify the Subscription fees. Any Subscription fee change will become effective at the end of the then-current Subscription period.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_fee_changes_text_2 = (i) => `The Company will provide You with reasonable prior notice of any change in Subscription fees to give You an opportunity to terminate Your Subscription before such change becomes effective.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_fee_changes_text_3 = (i) => `Your continued use of the Service after the Subscription fee change comes into effect constitutes Your agreement to pay the modified Subscription fee amount.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_refunds_subtitle = (i) => `Refunds`

/**
* @param {{  }} i
*/
export const tos_subscriptions_refunds_text_1 = (i) => `Except when required by law, paid Subscription fees are non-refundable.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_refunds_text_2 = (i) => `Certain refund requests for Subscriptions may be considered by the Company on a case-by-case basis and granted at the sole discretion of the Company.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_refunds_text_3 = (i) => `If the Subscription has been made through an In-app purchase, the Application Store's refund policy will apply. If You wish to request a refund, You may do so by contacting the Application Store directly.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_free_trial_subtitle = (i) => `Free Trial`

/**
* @param {{  }} i
*/
export const tos_subscriptions_free_trial_text_1 = (i) => `The Company may, at its sole discretion, offer a Subscription with a Free Trial for a limited period of time.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_free_trial_text_2 = (i) => `You may be required to enter Your billing information in order to sign up for the Free Trial.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_free_trial_text_3 = (i) => `If You do enter Your billing information when signing up for a Free Trial, You will not be charged by the Company until the Free Trial has expired. On the last day of the Free Trial period, unless You cancelled Your Subscription, You will be automatically charged the applicable Subscription fees for the type of Subscription You have selected.`

/**
* @param {{  }} i
*/
export const tos_subscriptions_free_trial_text_4 = (i) => `At any time and without notice, the Company reserves the right to (i) modify the terms and conditions of the Free Trial offer, or (ii) cancel such Free Trial offer.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_title = (i) => `In-app Purchases`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_1 = (i) => `The Application may include In-app Purchases that allow you to buy products, services or Subscriptions.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_2 = (i) => `More information about how you may be able to manage In-app Purchases using your Device may be set out in the Application Store's own terms and conditions or in your Device's Help settings.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_3 = (i) => `In-app Purchases can only be consumed within the Application. If you make a In-app Purchase, that In-app Purchase cannot be cancelled after you have initiated its download. In-app Purchases cannot be redeemed for cash or other consideration or otherwise transferred.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_4 = (i) => `If any In-app Purchase is not successfully downloaded or does not work once it has been successfully downloaded, we will, after becoming aware of the fault or being notified to the fault by You, investigate the reason for the fault. We will act reasonably in deciding whether to provide You with a replacement In-app Purchase or issue You with a patch to repair the fault. In no event will We charge You to replace or repair the In-app Purchase. In the unlikely event that we are unable to replace or repair the relevant In-app Purchase or are unable to do so within a reasonable period of time and without significant inconvenience to You, We will authorize the Application Store to refund You an amount up to the cost of the relevant In-app Purchase. Alternatively, if You wish to request a refund, You may do so by contacting the Application Store directly.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_5 = (i) => `You acknowledge and agree that all billing and transaction processes are handled by the Application Store from where you downloaded the Application and are governed by that Application Store's own terms and conditions.`

/**
* @param {{  }} i
*/
export const tos_in_app_purchases_text_6 = (i) => `If you have any payment related issues with In-app Purchases, then you need to contact the Application Store directly.`

/**
* @param {{  }} i
*/
export const tos_user_accounts_title = (i) => `User Accounts`

/**
* @param {{  }} i
*/
export const tos_user_accounts_text_1 = (i) => `When You create an account with Us, You must provide Us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of Your account on Our Service.`

/**
* @param {{  }} i
*/
export const tos_user_accounts_text_2 = (i) => `You are responsible for safeguarding the password that You use to access the Service and for any activities or actions under Your password, whether Your password is with Our Service or a Third-Party Social Media Service.`

/**
* @param {{  }} i
*/
export const tos_user_accounts_text_3 = (i) => `You agree not to disclose Your password to any third party. You must notify Us immediately upon becoming aware of any breach of security or unauthorized use of Your account.`

/**
* @param {{  }} i
*/
export const tos_user_accounts_text_4 = (i) => `You may not use as a username the name of another person or entity or that is not lawfully available for use, a name or trademark that is subject to any rights of another person or entity other than You without appropriate authorization, or a name that is otherwise offensive, vulgar or obscene.`

/**
* @param {{  }} i
*/
export const tos_intellectual_property_title = (i) => `Intellectual Property`

/**
* @param {{  }} i
*/
export const tos_intellectual_property_text_1 = (i) => `The Service and its original content (excluding Content provided by You or other users), features and functionality are and will remain the exclusive property of the Company and its licensors.`

/**
* @param {{  }} i
*/
export const tos_intellectual_property_text_2 = (i) => `The Service is protected by copyright, trademark, and other laws of both the Country and foreign countries.`

/**
* @param {{  }} i
*/
export const tos_intellectual_property_text_3 = (i) => `Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of the Company.`

/**
* @param {{  }} i
*/
export const tos_your_feedback_title = (i) => `Your Feedback to Us`

/**
* @param {{  }} i
*/
export const tos_your_feedback_text = (i) => `You assign all rights, title and interest in any Feedback You provide the Company. If for any reason such assignment is ineffective, You agree to grant the Company a non-exclusive, perpetual, irrevocable, royalty free, worldwide right and license to use, reproduce, disclose, sub-license, distribute, modify and exploit such Feedback without restriction.`

/**
* @param {{  }} i
*/
export const tos_links_to_other_websites_title = (i) => `Links to Other Websites`

/**
* @param {{  }} i
*/
export const tos_links_to_other_websites_text_1 = (i) => `Our Service may contain links to third-party web sites or services that are not owned or controlled by the Company.`

/**
* @param {{  }} i
*/
export const tos_links_to_other_websites_text_2 = (i) => `The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.`

/**
* @param {{  }} i
*/
export const tos_links_to_other_websites_text_3 = (i) => `We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites or services that You visit.`

/**
* @param {{  }} i
*/
export const tos_termination_title = (i) => `Termination`

/**
* @param {{  }} i
*/
export const tos_termination_text_1 = (i) => `We may terminate or suspend Your Account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.`

/**
* @param {{  }} i
*/
export const tos_termination_text_2 = (i) => `Upon termination, Your right to use the Service will cease immediately. If You wish to terminate Your Account, You may simply discontinue using the Service.`

/**
* @param {{  }} i
*/
export const tos_limitation_of_liability_title = (i) => `Limitation of Liability`

/**
* @param {{  }} i
*/
export const tos_limitation_of_liability_text_1 = (i) => `Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.`

/**
* @param {{  }} i
*/
export const tos_limitation_of_liability_text_2 = (i) => `To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of this Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.`

/**
* @param {{  }} i
*/
export const tos_limitation_of_liability_text_3 = (i) => `Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.`

/**
* @param {{  }} i
*/
export const tos_disclaimer_title = (i) => `"AS IS" and "AS AVAILABLE" Disclaimer`

/**
* @param {{  }} i
*/
export const tos_disclaimer_text_1 = (i) => `The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title an`

/**
* @param {{  }} i
*/
export const tos_disclaimer_text_2 = (i) => `Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.`

/**
* @param {{  }} i
*/
export const tos_disclaimer_text_3 = (i) => `Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.`

/**
* @param {{  }} i
*/
export const tos_governing_law_title = (i) => `Governing Law`

/**
* @param {{  }} i
*/
export const tos_governing_law_text = (i) => `The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.`

/**
* @param {{  }} i
*/
export const tos_disputes_resolution_title = (i) => `Disputes Resolution`

/**
* @param {{  }} i
*/
export const tos_disputes_resolution_text = (i) => `If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.`

/**
* @param {{  }} i
*/
export const tos_eu_users_title = (i) => `For European Union (EU) Users`

/**
* @param {{  }} i
*/
export const tos_eu_users_text = (i) => `If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which you are resident in.`

/**
* @param {{  }} i
*/
export const tos_us_federal_government_title = (i) => `United States Federal Government End Use Provisions`

/**
* @param {{  }} i
*/
export const tos_us_federal_government_text = (i) => `If You are a U.S. federal government end user, our Service is a "Commercial Item" as that term is defined at 48 C.F.R. §2.101.`

/**
* @param {{  }} i
*/
export const tos_us_legal_compliance_title = (i) => `United States Legal Compliance`

/**
* @param {{  }} i
*/
export const tos_us_legal_compliance_text = (i) => `You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.`

/**
* @param {{  }} i
*/
export const tos_severability_waiver_title = (i) => `Severability and Waiver`

/**
* @param {{  }} i
*/
export const tos_severability_subtitle = (i) => `Severability`

/**
* @param {{  }} i
*/
export const tos_severability_text = (i) => `If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.`

/**
* @param {{  }} i
*/
export const tos_waiver_subtitle = (i) => `Waiver`

/**
* @param {{  }} i
*/
export const tos_waiver_text = (i) => `Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.`

/**
* @param {{  }} i
*/
export const tos_translation_title = (i) => `Translation Interpretation`

/**
* @param {{  }} i
*/
export const tos_translation_text = (i) => `These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.`

/**
* @param {{  }} i
*/
export const tos_changes_title = (i) => `Changes to These Terms and Conditions`

/**
* @param {{  }} i
*/
export const tos_changes_text_1 = (i) => `We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.`

/**
* @param {{  }} i
*/
export const tos_changes_text_2 = (i) => `By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the website and the Service.`

/**
* @param {{  }} i
*/
export const tos_contact_us_title = (i) => `Contact Us`

/**
* @param {{  }} i
*/
export const tos_contact_us_text = (i) => `If you have any questions about these Terms and Conditions, You can contact us:`

/**
* @param {{  }} i
*/
export const tos_contact_us_website = (i) => `By visiting this page on the website:`

/**
* @param {{  }} i
*/
export const return_policy_title = (i) => `Return and Refund Policy`

/**
* @param {{  }} i
*/
export const last_updated = (i) => `Last updated: January 28, 2022`

/**
* @param {{  }} i
*/
export const thank_you_for_shopping = (i) => `Thank you for shopping at $1.`

/**
* @param {{  }} i
*/
export const not_satisfied_policy = (i) => `If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns. This Return and Refund Policy has been created with the help of the`

/**
* @param {{  }} i
*/
export const policy_generator = (i) => `Return and Refund Policy Generator`

/**
* @param {{  }} i
*/
export const terms_applicable = (i) => `The following terms are applicable for any products that You purchased with Us.`

/**
* @param {{  }} i
*/
export const interpretation_and_definitions = (i) => `Interpretation and Definitions`

/**
* @param {{  }} i
*/
export const interpretation = (i) => `Interpretation`

/**
* @param {{  }} i
*/
export const interpretation_description = (i) => `The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.`

/**
* @param {{  }} i
*/
export const definitions = (i) => `Definitions`

/**
* @param {{  }} i
*/
export const definitions_purpose_refund = (i) => `For the purposes of this Return and Refund Policy:`

/**
* @param {{  }} i
*/
export const application_definition_refund = (i) => `Application means the software program provided by the Company downloaded by You on any electronic device, named $1`

/**
* @param {{  }} i
*/
export const goods_definition = (i) => `Goods refer to the items offered for sale on the Service.`

/**
* @param {{  }} i
*/
export const orders_definition = (i) => `Orders mean a request by You to purchase Goods from Us.`

/**
* @param {{  }} i
*/
export const order_cancellation_rights = (i) => `Your Order Cancellation Rights`

/**
* @param {{  }} i
*/
export const cancellation_period = (i) => `You are entitled to cancel Your Order within 14 days without giving any reason for doing so.`

/**
* @param {{  }} i
*/
export const cancellation_deadline = (i) => `The deadline for cancelling an Order is 14 days from the date on which You received the Goods or on which a third party you have appointed, who is not the carrier, takes possession of the product delivered.`

/**
* @param {{  }} i
*/
export const how_to_cancel = (i) => `In order to exercise Your right of cancellation, You must inform Us of your decision by means of a clear statement. You can inform us of your decision by:`

/**
* @param {{  }} i
*/
export const cancellation_link = (i) => `By visiting this page on our website:`

/**
* @param {{  }} i
*/
export const reimbursement_policy = (i) => `We will reimburse You no later than 14 days from the day on which We receive the returned Goods. We will use the same means of payment as You used for the Order, and You will not incur any fees for such reimbursement.`

/**
* @param {{  }} i
*/
export const conditions_for_returns = (i) => `Conditions for Returns`

/**
* @param {{  }} i
*/
export const return_eligibility = (i) => `In order for the Goods to be eligible for a return, please make sure that:`

/**
* @param {{  }} i
*/
export const purchase_timeframe = (i) => `The Goods were purchased in the last 14 days`

/**
* @param {{  }} i
*/
export const non_returnable_goods = (i) => `The following Goods cannot be returned:`

/**
* @param {{  }} i
*/
export const custom_goods = (i) => `The supply of Goods made to Your specifications or clearly personalized.`

/**
* @param {{  }} i
*/
export const perishable_goods = (i) => `The supply of Goods which according to their nature are not suitable to be returned, deteriorate rapidly or where the date of expiry is over.`

/**
* @param {{  }} i
*/
export const unsealed_goods = (i) => `The supply of Goods which are not suitable for return due to health protection or hygiene reasons and were unsealed after delivery.`

/**
* @param {{  }} i
*/
export const inseparable_goods = (i) => `The supply of Goods which are, after delivery, according to their nature, inseparably mixed with other items.`

/**
* @param {{  }} i
*/
export const right_to_refuse = (i) => `We reserve the right to refuse returns of any merchandise that does not meet the above return conditions in our sole discretion.`

/**
* @param {{  }} i
*/
export const sale_items_policy = (i) => `Only regular priced Goods may be refunded. Unfortunately, Goods on sale cannot be refunded. This exclusion may not apply to You if it is not permitted by applicable law.`

/**
* @param {{  }} i
*/
export const returning_goods = (i) => `Returning Goods`

/**
* @param {{  }} i
*/
export const return_responsibility = (i) => `You are responsible for the cost and risk of returning the Goods to Us. You should send the Goods at the following address:`

/**
* @param {{  }} i
*/
export const return_address = (i) => `6 sepapaja
Tallinn, 15510
Estonia`

/**
* @param {{  }} i
*/
export const return_shipping_disclaimer = (i) => `We cannot be held responsible for Goods damaged or lost in return shipment. Therefore, We recommend an insured and trackable mail service. We are unable to issue a refund without actual receipt of the Goods or proof of received return delivery.`

/**
* @param {{  }} i
*/
export const gifts = (i) => `Gifts`

/**
* @param {{  }} i
*/
export const gift_return_policy = (i) => `If the Goods were marked as a gift when purchased and then shipped directly to you, You'll receive a gift credit for the value of your return. Once the returned product is received, a gift certificate will be mailed to You.`

/**
* @param {{  }} i
*/
export const non_gift_return_policy = (i) => `If the Goods weren't marked as a gift when purchased, or the gift giver had the Order shipped to themselves to give it to You later, We will send the refund to the gift giver.`

/**
* @param {{  }} i
*/
export const contact_us = (i) => `Contact Us`

/**
* @param {{  }} i
*/
export const questions_about_policy = (i) => `If you have any questions about our Returns and Refunds Policy, please contact us:`

/**
* @param {{  }} i
*/
export const contact_link = (i) => `By visiting this page on the website:`

/**
* @param {{  }} i
*/
export const register_title = (i) => `Sign up to Capgo`

/**
* @param {{  }} i
*/
export const already_have_account = (i) => `Already have an account?`

/**
* @param {{  }} i
*/
export const sign_in = (i) => `Sign in`

/**
* @param {{  }} i
*/
export const email_label = (i) => `Email`

/**
* @param {{  }} i
*/
export const email_placeholder = (i) => `Enter your email`

/**
* @param {{  }} i
*/
export const first_name_label = (i) => `First name`

/**
* @param {{  }} i
*/
export const first_name_placeholder = (i) => `John`

/**
* @param {{  }} i
*/
export const last_name_label = (i) => `Last name`

/**
* @param {{  }} i
*/
export const last_name_placeholder = (i) => `Doe`

/**
* @param {{  }} i
*/
export const password_label = (i) => `Password`

/**
* @param {{  }} i
*/
export const password_placeholder = (i) => `Enter your password`

/**
* @param {{  }} i
*/
export const sign_up_button = (i) => `Sign up`

/**
* @param {{  }} i
*/
export const need_help = (i) => `Need help?`

/**
* @param {{  }} i
*/
export const open_support = (i) => `Open Support`

/**
* @param {{  }} i
*/
export const testimonial_title = (i) => `We rolled out Capgo in production for our user base of +5000!`

/**
* @param {{  }} i
*/
export const testimonial_highlight = (i) => `users are up to date within minutes`

/**
* @param {{  }} i
*/
export const testimonial_description = (i) => `Capgo User since 2023`

/**
* @param {{  }} i
*/
export const eula_title = (i) => `End-User License Agreement ("Agreement")`

/**
* @param {{  }} i
*/
export const eula_last_updated = (i) => `Last updated: January 28, 2022`

/**
* @param {{  }} i
*/
export const eula_read_carefully = (i) => `Please read this End-User License Agreement carefully before clicking the "I Agree" button, downloading or using $1.`

/**
* @param {{  }} i
*/
export const eula_interpretation_title = (i) => `Interpretation and Definitions`

/**
* @param {{  }} i
*/
export const eula_interpretation_subtitle = (i) => `Interpretation`

/**
* @param {{  }} i
*/
export const eula_interpretation_text = (i) => `The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.`

/**
* @param {{  }} i
*/
export const eula_definitions_subtitle = (i) => `Definitions`

/**
* @param {{  }} i
*/
export const eula_definitions_intro = (i) => `For the purposes of this End-User License Agreement:`

/**
* @param {{  }} i
*/
export const eula_definition_agreement = (i) => `**Agreement** means this End-User License Agreement that forms the entire agreement between You and the Company regarding the use of the Application.`

/**
* @param {{  }} i
*/
export const eula_definition_application = (i) => `**Application** means the software program provided by the Company downloaded by You through an Application Store's account to a Device, named $1`

/**
* @param {{  }} i
*/
export const eula_definition_application_store = (i) => `**Application Store** means the digital distribution service operated and developed by Apple Inc. (Apple App Store) or Google Inc. (Google Play Store) by which the Application has been downloaded to your Device.`

/**
* @param {{  }} i
*/
export const eula_definition_company = (i) => `**Company** (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Digital shift OU, 6 sepapaja 15510 Tallinn.`

/**
* @param {{  }} i
*/
export const eula_definition_content = (i) => `**Content** refers to content such as text, images, or other information that can be posted, uploaded, linked to or otherwise made available by You, regardless of the form of that content.`

/**
* @param {{  }} i
*/
export const eula_definition_country = (i) => `**Country** refers to: Estonia`

/**
* @param {{  }} i
*/
export const eula_definition_device = (i) => `**Device** means any device that can access the Application such as a computer, a cellphone or a digital tablet.`

/**
* @param {{  }} i
*/
export const eula_definition_family_sharing = (i) => `**Family Sharing / Family Group** permits You to share applications downloaded through the Application Store with other family members by allowing them to view and download each others' eligible Applications to their associated Devices.`

/**
* @param {{  }} i
*/
export const eula_definition_third_party_services = (i) => `**Third-Party Services** means any services or content (including data, information, applications and other products services) provided by a third-party that may be displayed, included or made available by the Application.`

/**
* @param {{  }} i
*/
export const eula_definition_you = (i) => `**You** means the individual accessing or using the Application or the company, or other legal entity on behalf of which such individual is accessing or using the Application, as applicable.`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_title = (i) => `Acknowledgment`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_text_1 = (i) => `By clicking the "I Agree" button, downloading or using the Application, You are agreeing to be bound by the terms and conditions of this Agreement. If You do not agree to the terms of this Agreement, do not click on the "I Agree" button, do not download or do not use the Application.`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_text_2 = (i) => `This Agreement is a legal document between You and the Company and it governs your use of the Application made available to You by the Company.`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_text_3 = (i) => `This Agreement is between You and the Company only and not with the Application Store. Therefore, the Company is solely responsible for the Application and its content. Although the Application Store is not a party to this Agreement, it has the right to enforce it against You as a third party beneficiary relating to your use of the Application.`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_text_4 = (i) => `Since the Application can be accessed and used by other users via, for example, Family Sharing / Family Group or volume purchasing, the use of the Application by those users is expressly subject to this Agreement.`

/**
* @param {{  }} i
*/
export const eula_acknowledgment_text_5 = (i) => `The Application is licensed, not sold, to You by the Company for use strictly in accordance with the terms of this Agreement.`

/**
* @param {{  }} i
*/
export const eula_license_title = (i) => `License`

/**
* @param {{  }} i
*/
export const eula_license_scope_subtitle = (i) => `Scope of License`

/**
* @param {{  }} i
*/
export const eula_license_scope_text_1 = (i) => `The Company grants You a revocable, non-exclusive, non-transferable, limited license to download, install and use the Application strictly in accordance with the terms of this Agreement.`

/**
* @param {{  }} i
*/
export const eula_license_scope_text_2 = (i) => `You may only use the Application on a Device that You own or control and as permitted by the Application Store's terms and conditions.`

/**
* @param {{  }} i
*/
export const eula_license_scope_text_3 = (i) => `The license that is granted to You by the Company is solely for your personal, non-commercial purposes strictly in accordance with the terms of this Agreement.`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_subtitle = (i) => `License Restrictions`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_intro = (i) => `You agree not to, and You will not permit others to:`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_1 = (i) => `License, sell, rent, lease, assign, distribute, transmit, host, outsource, disclose or otherwise commercially exploit the Application or make the Application available to any third party.`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_2 = (i) => `Copy or use the Application for any purpose other than as permitted under the above section 'License'.`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_3 = (i) => `Modify, make derivative works of, disassemble, decrypt, reverse compile or reverse engineer any part of the Application.`

/**
* @param {{  }} i
*/
export const eula_license_restrictions_4 = (i) => `Remove, alter or obscure any proprietary notice (including any notice of copyright or trademark) of the Company or its affiliates, partners, suppliers or the licensors of the Application.`

/**
* @param {{  }} i
*/
export const eula_intellectual_property_title = (i) => `Intellectual Property`

/**
* @param {{  }} i
*/
export const eula_intellectual_property_text_1 = (i) => `The Application, including without limitation all copyrights, patents, trademarks, trade secrets and other intellectual property rights are, and shall remain, the sole and exclusive property of the Company.`

/**
* @param {{  }} i
*/
export const eula_intellectual_property_text_2 = (i) => `The Company shall not be obligated to indemnify or defend You with respect to any third party claim arising out of or relating to the Application. To the extent the Company is required to provide indemnification by applicable law, the Company, not the Application Store, shall be solely responsible for the investigation, defense, settlement and discharge of any claim that the Application or your use of it infringes any third party intellectual property rights.`

/**
* @param {{  }} i
*/
export const eula_your_suggestions_title = (i) => `Your Suggestions`

/**
* @param {{  }} i
*/
export const eula_your_suggestions_text_1 = (i) => `Any feedback, comments, ideas, improvements or suggestions provided by You to the Company with respect to the Application shall remain the sole and exclusive property of the Company.`

/**
* @param {{  }} i
*/
export const eula_your_suggestions_text_2 = (i) => `The Company shall be free to use, copy, modify, publish, or redistribute the Suggestions for any purpose and in any way without any credit or any compensation to You.`

/**
* @param {{  }} i
*/
export const eula_modifications_title = (i) => `Modifications to the Application`

/**
* @param {{  }} i
*/
export const eula_modifications_text = (i) => `The Company reserves the right to modify, suspend or discontinue, temporarily or permanently, the Application or any service to which it connects, with or without notice and without liability to You.`

/**
* @param {{  }} i
*/
export const eula_updates_subtitle = (i) => `Updates to the Application`

/**
* @param {{  }} i
*/
export const eula_updates_text_1 = (i) => `The Company may from time to time provide enhancements or improvements to the features/functionality of the Application, which may include patches, bug fixes, updates, upgrades and other modifications.`

/**
* @param {{  }} i
*/
export const eula_updates_text_2 = (i) => `Updates may modify or delete certain features and/or functionalities of the Application. You agree that the Company has no obligation to (i) provide any Updates, or (ii) continue to provide or enable any particular features and/or functionalities of the Application to You.`

/**
* @param {{  }} i
*/
export const eula_updates_text_3 = (i) => `You further agree that all updates or any other modifications will be (i) deemed to constitute an integral part of the Application, and (ii) subject to the terms and conditions of this Agreement.`

/**
* @param {{  }} i
*/
export const eula_maintenance_subtitle = (i) => `Maintenance and Support`

/**
* @param {{  }} i
*/
export const eula_maintenance_text = (i) => `The Company does not provide any maintenance or support for the download and use of the Application. To the extent that any maintenance or support is required by applicable law, the Company, not the Application Store, shall be obligated to furnish any such maintenance or support.`

/**
* @param {{  }} i
*/
export const eula_third_party_services_title = (i) => `Third-Party Services`

/**
* @param {{  }} i
*/
export const eula_third_party_services_text_1 = (i) => `The Application may display, include or make available third-party content (including data, information, applications and other products services) or provide links to third-party websites or services.`

/**
* @param {{  }} i
*/
export const eula_third_party_services_text_2 = (i) => `You acknowledge and agree that the Company shall not be responsible for any Third-party Services, including their accuracy, completeness, timeliness, validity, copyright compliance, legality, decency, quality or any other aspect thereof. The Company does not assume and shall not have any liability or responsibility to You or any other person or entity for any Third-party Services.`

/**
* @param {{  }} i
*/
export const eula_third_party_services_text_3 = (i) => `You must comply with applicable Third parties' Terms of agreement when using the Application. Third-party Services and links thereto are provided solely as a convenience to You and You access and use them entirely at your own risk and subject to such third parties' Terms and conditions.`

/**
* @param {{  }} i
*/
export const eula_term_and_termination_title = (i) => `Term and Termination`

/**
* @param {{  }} i
*/
export const eula_term_and_termination_text_1 = (i) => `This Agreement shall remain in effect until terminated by You or the Company. The Company may, in its sole discretion, at any time and for any or no reason, suspend or terminate this Agreement with or without prior notice.`

/**
* @param {{  }} i
*/
export const eula_term_and_termination_text_2 = (i) => `This Agreement will terminate immediately, without prior notice from the Company, in the event that you fail to comply with any provision of this Agreement. You may also terminate this Agreement by deleting the Application and all copies thereof from your Device or from your computer.`

/**
* @param {{  }} i
*/
export const eula_term_and_termination_text_3 = (i) => `Upon termination of this Agreement, You shall cease all use of the Application and delete all copies of the Application from your Device.`

/**
* @param {{  }} i
*/
export const eula_term_and_termination_text_4 = (i) => `Termination of this Agreement will not limit any of the Company's rights or remedies at law or in equity in case of breach by You (during the term of this Agreement) of any of your obligations under the present Agreement.`

/**
* @param {{  }} i
*/
export const eula_indemnification_title = (i) => `Indemnification`

/**
* @param {{  }} i
*/
export const eula_indemnification_text = (i) => `You agree to indemnify and hold the Company and its parents, subsidiaries, affiliates, officers, employees, agents, partners and licensors (if any) harmless from any claim or demand, including reasonable attorneys' fees, due to or arising out of your: (a) use of the Application; (b) violation of this Agreement or any law or regulation; or (c) violation of any right of a third party.`

/**
* @param {{  }} i
*/
export const eula_no_warranties_title = (i) => `No Warranties`

/**
* @param {{  }} i
*/
export const eula_no_warranties_text_1 = (i) => `The Application is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Application, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Application will meet your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.`

/**
* @param {{  }} i
*/
export const eula_no_warranties_text_2 = (i) => `Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Application, or the information, content, and materials or products included thereon; (ii) that the Application will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Application; or (iv) that the Application, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.`

/**
* @param {{  }} i
*/
export const eula_no_warranties_text_3 = (i) => `Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law. To the extent any warranty exists under law that cannot be disclaimed, the Company, not the Application Store, shall be solely responsible for such warranty.`

/**
* @param {{  }} i
*/
export const eula_limitation_of_liability_title = (i) => `Limitation of Liability`

/**
* @param {{  }} i
*/
export const eula_limitation_of_liability_text_1 = (i) => `Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of this Agreement and your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You for the Application or through the Application or 100 USD if You haven't purchased anything through the Application.`

/**
* @param {{  }} i
*/
export const eula_limitation_of_liability_text_2 = (i) => `To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Application, third-party software and/or third-party hardware used with the Application, or otherwise in connection with any provision of this Agreement), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.`

/**
* @param {{  }} i
*/
export const eula_limitation_of_liability_text_3 = (i) => `Some states/jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation or exclusion may not apply to You.`

/**
* @param {{  }} i
*/
export const eula_limitation_of_liability_text_4 = (i) => `You expressly understand and agree that the Application Store, its subsidiaries and affiliates, and its licensors shall not be liable to You under any theory of liability for any direct, indirect, incidental, special consequential or exemplary damages that may be incurred by You, including any loss of data, whether or not the Application Store or its representatives have been advised of or should have been aware of the possibility of any such losses arising.`

/**
* @param {{  }} i
*/
export const eula_severability_and_waiver_title = (i) => `Severability and Waiver`

/**
* @param {{  }} i
*/
export const eula_severability_subtitle = (i) => `Severability`

/**
* @param {{  }} i
*/
export const eula_severability_text = (i) => `If any provision of this Agreement is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.`

/**
* @param {{  }} i
*/
export const eula_waiver_subtitle = (i) => `Waiver`

/**
* @param {{  }} i
*/
export const eula_waiver_text = (i) => `Except as provided herein, the failure to exercise a right or to require performance of an obligation under this Agreement shall not effect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.`

/**
* @param {{  }} i
*/
export const eula_product_claims_title = (i) => `Product Claims`

/**
* @param {{  }} i
*/
export const eula_product_claims_text = (i) => `The Company does not make any warranties concerning the Application. To the extent You have any claim arising from or relating to your use of the Application, the Company, not the Application Store, is responsible for addressing any such claims, which may include, but not limited to: (i) any product liability claims; (ii) any claim that the Application fails to conform to any applicable legal or regulatory requirement; and (iii) any claim arising under consumer protection, or similar legislation.`

/**
* @param {{  }} i
*/
export const eula_us_legal_compliance_title = (i) => `United States Legal Compliance`

/**
* @param {{  }} i
*/
export const eula_us_legal_compliance_text = (i) => `You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a "terrorist supporting" country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.`

/**
* @param {{  }} i
*/
export const eula_changes_title = (i) => `Changes to this Agreement`

/**
* @param {{  }} i
*/
export const eula_changes_text_1 = (i) => `The Company reserves the right, at its sole discretion, to modify or replace this Agreement at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at the sole discretion of the Company.`

/**
* @param {{  }} i
*/
export const eula_changes_text_2 = (i) => `By continuing to access or use the Application after any revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, You are no longer authorized to use the Application.`

/**
* @param {{  }} i
*/
export const eula_governing_law_title = (i) => `Governing Law`

/**
* @param {{  }} i
*/
export const eula_governing_law_text = (i) => `The laws of the Country, excluding its conflicts of law rules, shall govern this Agreement and your use of the Application. Your use of the Application may also be subject to other local, state, national, or international laws.`

/**
* @param {{  }} i
*/
export const eula_entire_agreement_title = (i) => `Entire Agreement`

/**
* @param {{  }} i
*/
export const eula_entire_agreement_text_1 = (i) => `The Agreement constitutes the entire agreement between You and the Company regarding your use of the Application and supersedes all prior and contemporaneous written or oral agreements between You or oral agreements between You and the Company.`

/**
* @param {{  }} i
*/
export const eula_entire_agreement_text_2 = (i) => `You may be subject to additional terms and conditions that apply when You use or purchase other Company's services, which the Company will provide to You at the time of such use or purchase.`

/**
* @param {{  }} i
*/
export const eula_contact_us_title = (i) => `Contact Us`

/**
* @param {{  }} i
*/
export const eula_contact_us_text = (i) => `If you have any questions about this Agreement, You can contact Us:`

/**
* @param {{  }} i
*/
export const eula_contact_us_link = (i) => `By visiting this page on the website:`

/**
* @param {{  }} i
*/
export const dpa_title = (i) => `Data Processing Agreement`

/**
* @param {{  }} i
*/
export const dpa_last_updated = (i) => `Last updated: September 20, 2023`

/**
* @param {{  }} i
*/
export const dpa_definitions_title = (i) => `Definitions`

/**
* @param {{  }} i
*/
export const dpa_definitions_1 = (i) => `In the course of providing the Capgo service to user pursuant to the agreement, Capgo may process visitor data on behalf of user.`

/**
* @param {{  }} i
*/
export const dpa_definitions_2 = (i) => `In this Data Processing Agreement ("DPA"), "Data Protection Legislation" means the General Data Protection Regulation (Regulation (EU) 2016/279), and all other applicable laws relating to processing of visitor data and privacy that may exist in any relevant jurisdiction.`

/**
* @param {{  }} i
*/
export const dpa_definitions_3 = (i) => `"data controller", "data processor", "data subject", "personal data" and "processing" shall be interpreted in accordance with applicable Data Protection Legislation.`

/**
* @param {{  }} i
*/
export const dpa_definitions_4 = (i) => `The parties agree that user is the data controller and that Capgo is its data processor in relation to visitor data that is processed in the course of providing the service.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_title = (i) => `Privacy and security of your visitor data`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_1 = (i) => `We take many measures to protect and secure your data through backups, redundancies, and encryption. When you use our service to measure your website stats, Capgo will collect information about your visitors.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_2 = (i) => `You entrust us with your site data and we take that trust to heart. You agree that Capgo may process your data as described in our data policy and for no other purpose. We do our best to deserve that trust by being open about who we are, how we work, and keeping an open door to your feedback.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_3 = (i) => `You own all right, title, and interest to your website data. We obtain no rights from you to your website data. We do not collect and analyze personal information from web users and use these behavioral insights to sell advertisements. When using Capgo, you 100% own and control all of your website data. We don't sell or share your site data to any third-parties, and we don't abuse your visitor's privacy.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_4 = (i) => `The purpose of Capgo is updates the Capacitor, this can still be done without tracking, collecting or storing any personal data or personally identifiable information (PII), without using cookies and while respecting the privacy of your website visitors.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_5 = (i) => `By using Capgo, all the site measurement is carried out absolutely anonymously. We minimize data collection in general. We measure only the most essential data points and nothing else. All the metrics we do collect fit on one single page.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_6 = (i) => `We do not attempt to generate a device-persistent identifier because they are considered personal data under GDPR. We do not use cookies, browser cache nor the local storage. We do not store, retrieve nor extract anything from visitor's devices. The data we process cannot be used to identify any single individual.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_7 = (i) => `The group of data subjects affected by the processing of their data under this agreement includes end-users of the controller's websites which make use of the service provided by the processor.`

/**
* @param {{  }} i
*/
export const dpa_privacy_security_8 = (i) => `You can find more information about our processing of your visitor data and what types/categories of data we collect on your behalf in our publicly available data policy.`

/**
* @param {{  }} i
*/
export const dpa_security_measures_title = (i) => `Organizational and technical security measures`

/**
* @param {{  }} i
*/
export const dpa_security_measures_1 = (i) => `For encryption, we use https in transit and the hashing process at rest. Our hashing process is much stronger than encryption. Encryption implies that there's a key that can decrypt and reveal the raw data. In our database the raw IP address and User Agent are rendered completely inaccessible to anyone, including ourselves. In addition to this, we use strict firewall rules and private encrypted networking. We keep offsite backups with replication including strong bcrypt passwords.`

/**
* @param {{  }} i
*/
export const dpa_security_measures_2 = (i) => `Capgo is fully open source software which means that our source code is available and accessible on GitHub so anyone can check it out and audit it. You can read it, inspect it and review it to understand how it works and to ensure it keeps the data private and secure. This gives you and everyone else full transparency on how we handle the website traffic data.`

/**
* @param {{  }} i
*/
export const dpa_security_measures_3 = (i) => `With more than 500+ GitHub stars, there are a lot of eyes on our code and it is this transparency and openness that means that open source products can be more trustworthy than proprietary and closed source products. Our software is updated several times per week and on our GitHub page we also have a way for people to report any security vulnerabilities.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_title = (i) => `Processor's obligations with respect to the controller`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_1 = (i) => `Capgo will process visitor data only in accordance with instructions from customer through the settings of the service, i.e. (a) to operate, maintain and support the infrastructure used to provide the service; (b) to comply with customer's instructions and processing instructions in their use, management and administration of the service; (c) as otherwise instructed through settings of the service. Capgo will only process visitor data in accordance with the agreement.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_2 = (i) => `Capgo shall notify customer without undue delay if, in Capgo's opinion, an instruction for the processing of visitor data given by customer infringes applicable Data Protection Legislation.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_3 = (i) => `Capgo shall guarantee the confidentiality of visitor data processed hereunder.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_4 = (i) => `We as humans can access your data to help you with support requests you make and to maintain and safeguard Capgo to ensure the security of your data and the service as a whole. Capgo shall ensure that all Capgo personnel required to access the visitor data are trained in GDPR and data privacy, informed of the confidential nature of the data and comply with the obligations sets out in this agreement.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_5 = (i) => `Capgo shall implement and maintain appropriate technical and organisational security measures designed to protect the visitor data against unauthorised or unlawful processing and against accidental loss, destruction, damage, theft, alteration or disclosure. These measures shall be appropriate to the harm which might result from any unauthorised or unlawful processing, accidental loss, destruction, damage or theft of the visitor data and having regard to the nature of the visitor data which is to be protected.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_6 = (i) => `We do work with sub-processors. With each vendor, we assess their commitment to privacy and we sign a data processing agreement with them that include the controller-processor Standard Contractual Clauses. Any such subcontractors will be permitted to process data only to deliver the services Capgo has retained them to provide, and they shall be prohibited from using data for any other purpose. Capgo shall notify the controller when modifying the list of subprocessors using our in-app notifications, email and/or blog. The controller is able to legitimately object and may terminate the agreement.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_7 = (i) => `If Capgo becomes aware of any accidental, unauthorised or unlawful security breach, destruction, loss, alteration, or disclosure of the personal data that is processed by Capgo in the course of providing the service, it shall without undue delay (not later than 48 hours after having become aware of it), notify customer by email and provide customer with a description of the incident as well as periodic updates to information about the incident, including its impact on customer content. Capgo shall additionally take action to investigate the incident and reasonably prevent or mitigate the effects of the incident.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_8 = (i) => `Capgo shall not on its own authority rectify, erase or restrict the processing of visitor data that is being processed on behalf of the controller (unless this is required by law or the Processor Terms of Service), but shall only do so on documented instructions from the controller and in accordance to the data retention rules associated to the controller subscription plan.`

/**
* @param {{  }} i
*/
export const dpa_processor_obligations_9 = (i) => `Capgo shall assist the controller in complying with the obligations concerning the security of personal data. Plausible will also provide assistance to the controller for DPIAs. Where a data subject asserts their rights as a data subject, this request will be forwarded to the controller without delay.`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_title = (i) => `Customer undertakings and Capgo assistance`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_1 = (i) => `Customer warrants that it has all necessary rights to provide to Capgo the visitor data for processing in connection with the provision of the Capgo Services.`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_2 = (i) => `Customer shall comply at all times with Data Protection Legislations in respect of all visitor data it provided to Capgo pursuant to the Agreement.`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_3 = (i) => `Customer understands, as a controller, that it is responsible (as between customer and Capgo) for:`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_4 = (i) => `determining the lawfulness of any processing, performing any required data protection impact assessments, and accounting to regulators and individuals, as may be needed;`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_5 = (i) => `providing relevant privacy notices to data subjects as may be required in your jurisdiction;`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_6 = (i) => `implementing your own appropriate technical and organizational measures to ensure and demonstrate processing in accord with this DPA;`

/**
* @param {{  }} i
*/
export const dpa_customer_undertakings_7 = (i) => `notifying any relevant regulators or authorities of any incident as may be required by law in your jurisdiction.`

/**
* @param {{  }} i
*/
export const dpa_liability_indemnity_title = (i) => `Liability and Indemnity`

/**
* @param {{  }} i
*/
export const dpa_liability_indemnity_1 = (i) => `Each party indemnifies the other and holds them harmless against all claims, actions, third party claims, losses, damages and expenses incurred by the indemnified party and arising directly or indirectly out of or in connection with a breach of this DPA.`

/**
* @param {{  }} i
*/
export const dpa_signing_required_title = (i) => `Are customers required to sign the Capgo DPA?`

/**
* @param {{  }} i
*/
export const dpa_signing_required_1 = (i) => `In order to use our products and services, you need to accept our DPA. By using our product you are agreeing to our terms of service, and you are automatically accepting our DPA and do not need to sign a separate document. We provide the same privacy rights and protection to all customers.`

/**
* @param {{  }} i
*/
export const dpa_sharing_title = (i) => `Can a customer share the Capgo DPA with its customers?`

/**
* @param {{  }} i
*/
export const dpa_sharing_1 = (i) => `Yes. The DPA is a publicly available document and customers who wish to share it with their customers to confirm our security measures and other terms may feel free to do so.`

/**
* @param {{  }} i
*/
export const dpa_notification_title = (i) => `Do customers need to notify anyone upon accepting our DPA?`

/**
* @param {{  }} i
*/
export const dpa_notification_1 = (i) => `No. You are not required to notify us or any third party upon accepting our DPA though, as mentioned above, you are free to do so.`

/**
* @param {{  }} i
*/
export const dpa_contact_title = (i) => `Contact Us`

/**
* @param {{  }} i
*/
export const dpa_contact_1 = (i) => `If you have any questions about this Privacy Policy, You can contact us:`

/**
* @param {{  }} i
*/
export const dpa_contact_2 = (i) => `By visiting this page on the website:`

/**
* @param {{  }} i
*/
export const data_policy_title = (i) => `Data Policy`

/**
* @param {{  }} i
*/
export const data_policy_last_updated = (i) => `Last updated: September 21, 2023`

/**
* @param {{  }} i
*/
export const data_policy_intro = (i) => `A data policy contains a set of rules, principles, and guidelines that provide a framework for different areas of data management throughout the enterprise, including but not limited to data governance, data quality, and data architecture.`

/**
* @param {{  }} i
*/
export const data_policy_what_we_collect_title = (i) => `What we collect and what we use it for`

/**
* @param {{  }} i
*/
export const data_policy_no_tracking = (i) => `We do not track people across their devices and across websites and apps that they visit. All the data is isolated to a single day, single website and single device only. There is no way to know whether the same person visits a site from more than one device or visits another website`

/**
* @param {{  }} i
*/
export const data_policy_goal = (i) => `The goal of Capgo is to track overall trends in your website traffic, it is not to track individual visitors. We don't use cookies, we don't generate any persistent identifiers and we don't collect or store any personal or identifiable data. All of the data is aggregated data only and it has no personal information.`

/**
* @param {{  }} i
*/
export const data_policy_anonymous_measurement = (i) => `By using Capgo, all the site measurement is carried out absolutely anonymously. We measure only the most essential data points and nothing else. All the metrics we do collect fit on one single page.`

/**
* @param {{  }} i
*/
export const data_policy_unique_users_title = (i) => `How we count unique users without cookies`

/**
* @param {{  }} i
*/
export const data_policy_unique_users_intro = (i) => `Counting unique visitors is an integral part of web analytics. Capgo attempts to strike a reasonable balance between de-duplicating pageviews and staying respectful of visitor privacy.`

/**
* @param {{  }} i
*/
export const data_policy_no_persistent_identifier = (i) => `We do not attempt to generate a device-persistent identifier because they are considered personal data under GDPR. We do not use cookies, browser cache nor the local storage. We do not store, retrieve nor extract anything from visitor's devices.`

/**
* @param {{  }} i
*/
export const data_policy_ip_user_agent = (i) => `Every single HTTP request sends the IP address and the User-Agent to the server so that's what we use. We generate a daily changing identifier using the visitor's IP address and User-Agent.`

/**
* @param {{  }} i
*/
export const data_policy_ip_accuracy = (i) => `In our testing, using IP addresses to count visitors is remarkably accurate when compared to using a cookie. In some cases it might even be more accurate than using a cookie because some visitors block cookies altogether.`

/**
* @param {{  }} i
*/
export const data_policy_compliance_info = (i) => `We're happy to provide information on how Capgo is built to help you comply with the different privacy regulations. We encourage you to discuss specific issues with your lawyer to help you decide whether our service allows you to fulfill the legal requirements that apply to you.`

/**
* @param {{  }} i
*/
export const data_policy_ownership_title = (i) => `Data ownership of your web`

/**
* @param {{  }} i
*/
export const data_policy_ownership_intro = (i) => `When you use our service,Capgo will collect information about your visitors. You entrust us with your site data and we take that trust to heart. The privacy of your site data — and it is your data, not ours! — is a big deal to us.`

/**
* @param {{  }} i
*/
export const data_policy_ownership_statement = (i) => `By using Capgo, you keep 100% ownership of your website data. Although when using our hosted service, your site analytics are stored on our server in the cloud, you remain completely in control of your site data and you fully own all of your data too.`

/**
* @param {{  }} i
*/
export const data_policy_ownership_rights = (i) => `You own all right, title, and interest to your website data. We obtain no rights from you to your website data. We will never sell or share your site data to any third-parties.`

/**
* @param {{  }} i
*/
export const data_policy_data_protection_1 = (i) => `Your website data is not shared with advertising companies or any other companies in general.`

/**
* @param {{  }} i
*/
export const data_policy_data_protection_2 = (i) => `Your website data is not sent to any third-parties at all.`

/**
* @param {{  }} i
*/
export const data_policy_data_protection_3 = (i) => `Your website data is not mined and harvested for personal and behavioral trends.`

/**
* @param {{  }} i
*/
export const data_policy_data_protection_4 = (i) => `Your website data is not monetized.`

/**
* @param {{  }} i
*/
export const data_policy_account_deletion = (i) => `You can choose to delete your account and delete your site stats at any time. We provide simple no-questions-asked deletion links.`

/**
* @param {{  }} i
*/
export const data_policy_permanent_deletion = (i) => `All your stats will be permanently deleted immediately when you delete your Capgo account or when you delete your site stats. We cannot recover this information once it has been permanently deleted.`

/**
* @param {{  }} i
*/
export const data_policy_trust_title = (i) => `Why should I trust you?`

/**
* @param {{  }} i
*/
export const data_policy_trust_open_source = (i) => `Capgo is 100% open source . Our source code is available and accessible on GitHub so you can read it and review it to ensure our code does what we say.`

/**
* @param {{  }} i
*/
export const data_policy_trust_transparency = (i) => `We are not a black box. Everything is in the open. Anyone can view, review and inspect the code we're running to verify that we practice what we preach.`

/**
* @param {{  }} i
*/
export const data_policy_trust_importance = (i) => `This is essential in the market of privacy software. Corporations and proprietary software cannot always be trusted when data is in question. The only way to prove your trust is to allow experts to look into your code and verify that you're actually doing what you're saying you're doing.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_title = (i) => `GDPR Privacy`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_title = (i) => `Legal Basis for Processing Personal Data under GDPR`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_intro = (i) => `We may process Personal Data under the following conditions:`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_consent = (i) => `Consent: You have given Your consent for processing Personal Data for one or more specific purposes.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_contract = (i) => `Performance of a contract: Provision of Personal Data is necessary for the performance of an agreement with You and/or for any pre-contractual obligations thereof.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_legal_obligations = (i) => `Legal obligations: Processing Personal Data is necessary for compliance with a legal obligation to which the Company is subject.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_vital_interests = (i) => `Vital interests: Processing Personal Data is necessary in order to protect Your vital interests or of another natural person.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_public_interests = (i) => `Public interests: Processing Personal Data is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Company.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_legitimate_interests = (i) => `Legitimate interests: Processing Personal Data is necessary for the purposes of the legitimate interests pursued by the Company.`

/**
* @param {{  }} i
*/
export const data_policy_legal_basis_clarification = (i) => `In any case, the Company will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_rights_title = (i) => `Your Rights under the GDPR`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_rights_intro = (i) => `The Company undertakes to respect the confidentiality of Your Personal Data and to guarantee You can exercise Your rights.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_rights_list_intro = (i) => `You have the right under this Privacy Policy, and by law if You are within the EU, to:`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_access = (i) => `Request access to Your Personal Data. The right to access, update or delete the information We have on You. Whenever made possible, you can access, update or request deletion of Your Personal Data directly within Your account settings section. If you are unable to perform these actions yourself, please contact Us to assist You. This also enables You to receive a copy of the Personal Data We hold about You.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_correction = (i) => `Request correction of the Personal Data that We hold about You. You have the right to have any incomplete or inaccurate information We hold about You corrected.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_object = (i) => `Object to processing of Your Personal Data. This right exists where We are relying on a legitimate interest as the legal basis for Our processing and there is something about Your particular situation, which makes You want to object to our processing of Your Personal Data on this ground. You also have the right to object where We are processing Your Personal Data for direct marketing purposes.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_erasure = (i) => `Request erasure of Your Personal Data. You have the right to ask Us to delete or remove Personal Data when there is no good reason for Us to continue processing it.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_transfer = (i) => `Request the transfer of Your Personal Data. We will provide to You, or to a third-party You have chosen, Your Personal Data in a structured, commonly used, machine-readable format. Please note that this right only applies to automated information which You initially provided consent for Us to use or where We used the information to perform a contract with You.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_right_withdraw_consent = (i) => `Withdraw Your consent. You have the right to withdraw Your consent on using your Personal Data. If You withdraw Your consent, We may not be able to provide You with access to certain specific functionalities of the Service.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_exercising_rights_title = (i) => `Exercising of Your GDPR Data Protection Rights`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_exercising_rights_contact = (i) => `You may exercise Your rights of access, rectification, cancellation and opposition by contacting Us. Please note that we may ask You to verify Your identity before responding to such requests. If You make a request, We will try our best to respond to You as soon as possible.`

/**
* @param {{  }} i
*/
export const data_policy_gdpr_complaint_right = (i) => `You have the right to complain to a Data Protection Authority about Our collection and use of Your Personal Data. For more information, if You are in the European Economic Area (EEA), please contact Your local data protection authority in the EEA.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_title = (i) => `CCPA Privacy`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_intro = (i) => `This privacy notice section for California residents supplements the information contained in Our Privacy Policy and it applies solely to all visitors, users, and others who reside in the State of California.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_categories_title = (i) => `Categories of Personal Information Collected`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_categories_intro = (i) => `We collect information that identifies, relates to, describes, references, is capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular Consumer or Device. The following is a list of categories of personal information which we may collect or may have been collected from California residents within the last twelve (12) months.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_categories_note = (i) => `Please note that the categories and examples provided in the list below are those defined in the CCPA. This does not mean that all examples of that category of personal information were in fact collected by Us, but reflects our good faith belief to the best of our knowledge that some of that information from the applicable category may be and may have been collected. For example, certain categories of personal information would only be collected if You provided such personal information directly to Us.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_a = (i) => `Category A: Identifiers.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_a_examples = (i) => `Examples: A real name, alias, postal address, unique personal identifier, online identifier, Internet Protocol address, email address, account name, driver's license number, passport number, or other similar identifiers.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_a_collected = (i) => `Collected: Yes.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_b = (i) => `Category B: Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e)).`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_b_examples = (i) => `Examples: A name, signature, Social Security number, physical characteristics or description, address, telephone number, passport number, driver's license or state identification card number, insurance policy number, education, employment, employment history, bank account number, credit card number, debit card number, or any other financial information, medical information, or health insurance information. Some personal information included in this category may overlap with other categories.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_b_collected = (i) => `Collected: Yes.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_c = (i) => `Category C: Protected classification characteristics under California or federal law.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_c_examples = (i) => `Examples: Age (40 years or older), race, color, ancestry, national origin, citizenship, religion or creed, marital status, medical condition, physical or mental disability, sex (including gender, gender identity, gender expression, pregnancy or childbirth and related medical conditions), sexual orientation, veteran or military status, genetic information (including familial genetic information).`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_c_collected = (i) => `Collected: No.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_d = (i) => `Category D: Commercial information.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_d_examples = (i) => `Examples: Records and history of products or services purchased or considered.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_d_collected = (i) => `Collected: Yes.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_e = (i) => `Category E: Biometric information.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_e_examples = (i) => `Examples: Genetic, physiological, behavioral, and biological characteristics, or activity patterns used to extract a template or other identifier or identifying information, such as, fingerprints, faceprints, and voiceprints, iris or retina scans, keystroke, gait, or other physical patterns, and sleep, health, or exercise data.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_e_collected = (i) => `Collected: No.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_f = (i) => `Category F: Internet or other similar network activity.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_f_examples = (i) => `Examples: Interaction with our Service or advertisement.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_f_collected = (i) => `Collected: Yes.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_g = (i) => `Category G: Geolocation data.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_g_examples = (i) => `Examples: Approximate physical location.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_g_collected = (i) => `Collected: No.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_h = (i) => `Category H: Sensory data.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_h_examples = (i) => `Examples: Audio, electronic, visual, thermal, olfactory, or similar information.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_h_collected = (i) => `Collected: No.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_i = (i) => `Category I: Professional or employment-related information.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_i_examples = (i) => `Examples: Current or past job history or performance evaluations.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_i_collected = (i) => `Collected: No.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_j = (i) => `Category J: Non-public education information (per the Family Educational Rights and Privacy Act (20 U.S.C. Section 1232g, 34 C.F.R. Part 99)).`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_j_examples = (i) => `Examples: Education records directly related to a student maintained by an educational institution or party acting on its behalf, such as grades, transcripts, class lists, student schedules, student identification codes, student financial information, or student disciplinary records.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_j_collected = (i) => `Collected: No.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_k = (i) => `Category K: Inferences drawn from other personal information.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_k_examples = (i) => `Examples: Profile reflecting a person's preferences, characteristics, psychological trends, predispositions, behavior, attitudes, intelligence, abilities, and aptitudes.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_category_k_collected = (i) => `Collected: No.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sources_title = (i) => `Under CCPA, personal information is to be broadly construed as information that identifies, relates to, describes, references, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular consumer or device. Personal information does not include publicly available information from government records, deidentified or aggregated consumer information, or information excluded from the CCPA's scope.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sources_intro = (i) => `We obtain the categories of personal information listed above from the following categories of sources:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_source_1 = (i) => `Directly from You. For example, from the forms You complete on our Service, preferences You express or provide through our Service, or from Your purchases on our Service.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_source_2 = (i) => `Indirectly from You. For example, from observing Your activity on our Service.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_source_3 = (i) => `Automatically from You. For example, through cookies We or our Service Providers set on Your Device as You navigate through our Service.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_source_4 = (i) => `From Service Providers. For example, third-party vendors for payment processing, or other third-party vendors that We use to provide the Service to You.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_title = (i) => `Use of Personal Information for Business Purposes or Commercial Purposes`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_intro = (i) => `We may use or disclose personal information We collect for "business purposes" or "commercial purposes" (as defined under the CCPA), which may include the following examples:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_1 = (i) => `To operate our Service and provide You with our Service.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_2 = (i) => `To provide You with support and to respond to Your inquiries, including to investigate and address Your concerns and monitor and improve our Service.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_3 = (i) => `To fulfill or meet the reason You provided the information. For example, if You share Your contact information to ask a question about our Service, We will use that personal information to respond to Your inquiry.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_4 = (i) => `To respond to law enforcement requests and as required by applicable law, court order, or governmental regulations.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_5 = (i) => `As described to You when collecting Your personal information or as otherwise set forth in the CCPA.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_6 = (i) => `For internal administrative and auditing purposes.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_use_of_info_7 = (i) => `To detect security incidents and protect against malicious, deceptive, fraudulent or illegal activity, including, when necessary, to prosecute those responsible for such activities.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_title = (i) => `Share of Personal Information`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_intro = (i) => `We may share Your personal information identified in the above categories with the following categories of third parties:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_1 = (i) => `Service Providers`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_2 = (i) => `Payment processors`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_3 = (i) => `Our affiliates`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_4 = (i) => `Our business partners`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_info_sharing_5 = (i) => `Third party vendors to whom You or Your agents authorize Us to disclose Your personal information in connection with products or services We provide to You`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_info_title = (i) => `Sale of Personal Information`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_info_definition = (i) => `As defined in the CCPA, "sell" and "sale" mean selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a consumer's personal information by the business to a third party for valuable consideration. This means that We may have received some kind of benefit in return for sharing personal information, but not necessarily a monetary benefit.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_info_note = (i) => `Please note that the categories listed below are those defined in the CCPA. This does not mean that all examples of that category of personal information were in fact sold, but reflects our good faith belief to the best of our knowledge that some of that information from the applicable category may be and may have been shared for value in return.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_info_statement = (i) => `We may sell and may have sold in the last twelve (12) months the following categories of personal information:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_info_categories = (i) => `Category A: Identifiers
Category B: Personal information categories listed in the California Customer Records statute (Cal. Civ. Code § 1798.80(e))
Category D: Commercial information
Category F: Internet or other similar network activity`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_share_of_info_title = (i) => `Share of Personal Information`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_share_of_info_statement = (i) => `We may share Your personal information identified in the above categories with the following categories of third parties:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_share_of_info_categories = (i) => `Service Providers
Payment processors
Our affiliates
Our business partners
Third party vendors to whom You or Your agents authorize Us to disclose Your personal information in connection with products or services We provide to You`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_minors_info_title = (i) => `Sale of Personal Information of Minors Under 16 Years of Age`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_minors_info_statement = (i) => `We do not knowingly collect personal information from minors under the age of 16 through our Service, although certain third party websites that we link to may do so. These third-party websites have their own terms of use and privacy policies and we encourage parents and legal guardians to monitor their children's Internet usage and instruct their children to never provide information on other websites without their permission.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_minors_info_policy = (i) => `We do not sell the personal information of Consumers We actually know are less than 16 years of age, unless We receive affirmative authorization (the "right to opt-in") from either the Consumer who is between 13 and 16 years of age, or the parent or guardian of a Consumer less than 13 years of age. Consumers who opt-in to the sale of personal information may opt-out of future sales at any time. To exercise the right to opt-out, You (or Your authorized representative) may submit a request to Us by contacting Us.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_sale_of_minors_info_request = (i) => `If You have reason to believe that a child under the age of 13 (or 16) has provided Us with personal information, please contact Us with sufficient detail to enable Us to delete that information.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_your_rights_title = (i) => `Your Rights under the CCPA`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_your_rights_intro = (i) => `The CCPA provides California residents with specific rights regarding their personal information. If You are a resident of California, You have the following rights:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_notice = (i) => `The right to notice. You have the right to be notified which categories of Personal Data are being collected and the purposes for which the Personal Data is being used.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request = (i) => `The right to request. Under CCPA, You have the right to request that We disclose information to You about Our collection, use, sale, disclosure for business purposes and share of personal information. Once We receive and confirm Your request, We will disclose to You:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_1 = (i) => `The categories of personal information We collected about You`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_2 = (i) => `The categories of sources for the personal information We collected about You`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_3 = (i) => `Our business or commercial purpose for collecting or selling that personal information`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_4 = (i) => `The categories of third parties with whom We share that personal information`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_5 = (i) => `The specific pieces of personal information We collected about You`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_6 = (i) => `If we sold Your personal information or disclosed Your personal information for a business purpose, We will disclose to You:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_6_1 = (i) => `The categories of personal information categories sold`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_request_6_2 = (i) => `The categories of personal information categories disclosed`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_opt_out = (i) => `The right to say no to the sale of Personal Data (opt-out). You have the right to direct Us to not sell Your personal information. To submit an opt-out request please contact Us.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete = (i) => `The right to delete Personal Data. You have the right to request the deletion of Your Personal Data, subject to certain exceptions. Once We receive and confirm Your request, We will delete (and direct Our Service Providers to delete) Your personal information from our records, unless an exception applies. We may deny Your deletion request if retaining the information is necessary for Us or Our Service Providers to:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_1 = (i) => `Complete the transaction for which We collected the personal information, provide a good or service that You requested, take actions reasonably anticipated within the context of our ongoing business relationship with You, or otherwise perform our contract with You.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_2 = (i) => `Detect security incidents, protect against malicious, deceptive, fraudulent, or illegal activity, or prosecute those responsible for such activities.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_3 = (i) => `Debug products to identify and repair errors that impair existing intended functionality.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_4 = (i) => `Exercise free speech, ensure the right of another consumer to exercise their free speech rights, or exercise another right provided for by law.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_5 = (i) => `Comply with the California Electronic Communications Privacy Act (Cal. Penal Code § 1546 et. seq.).`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_6 = (i) => `Engage in public or peer-reviewed scientific, historical, or statistical research in the public interest that adheres to all other applicable ethics and privacy laws, when the information's deletion may likely render impossible or seriously impair the research's achievement, if You previously provided informed consent.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_7 = (i) => `Enable solely internal uses that are reasonably aligned with consumer expectations based on Your relationship with Us.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_8 = (i) => `Comply with a legal obligation.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_delete_9 = (i) => `Make other internal and lawful uses of that information that are compatible with the context in which You provided it.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_non_discrimination = (i) => `The right not to be discriminated against. You have the right not to be discriminated against for exercising any of Your consumer's rights, including by:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_non_discrimination_1 = (i) => `Denying goods or services to You`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_non_discrimination_2 = (i) => `Charging different prices or rates for goods or services, including the use of discounts or other benefits or imposing penalties`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_non_discrimination_3 = (i) => `Providing a different level or quality of goods or services to You`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_right_to_non_discrimination_4 = (i) => `Suggesting that You will receive a different price or rate for goods or services or a different level or quality of goods or services`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_title = (i) => `Exercising Your CCPA Data Protection Rights`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_contact = (i) => `In order to exercise any of Your rights under the CCPA, and if You are a California resident, You can contact Us:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_website = (i) => `By visiting this page on our website: $1/#support`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_authorized_agent = (i) => `Only You, or a person registered with the California Secretary of State that You authorize to act on Your behalf, may make a verifiable request related to Your personal information.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_request_must = (i) => `Your request to Us must:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_request_must_1 = (i) => `Provide sufficient information that allows Us to reasonably verify You are the person about whom We collected personal information or an authorized representative`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_request_must_2 = (i) => `Describe Your request with sufficient detail that allows Us to properly understand, evaluate, and respond to it`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_cannot_respond = (i) => `We cannot respond to Your request or provide You with the required information if We cannot:`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_cannot_respond_1 = (i) => `Verify Your identity or authority to make the request`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_cannot_respond_2 = (i) => `And confirm that the personal information relates to You`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_disclosure = (i) => `We will disclose and deliver the required information free of charge within 45 days of receiving Your verifiable request. The time period to provide the required information may be extended once by an additional 45 days when reasonably necessary and with prior notice.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_disclosure_period = (i) => `Any disclosures We provide will only cover the 12-month period preceding the verifiable request's receipt.`

/**
* @param {{  }} i
*/
export const data_policy_ccpa_exercising_rights_data_portability = (i) => `For data portability requests, We will select a format to provide Your personal information that is readily usable and should allow You to transmit the information from one entity to another entity without hindrance.`

/**
* @param {{  }} i
*/
export const privacy_title = (i) => `Privacy Policy`

/**
* @param {{  }} i
*/
export const privacy_last_updated = (i) => `Last updated: January 28, 2022`

/**
* @param {{  }} i
*/
export const privacy_description = (i) => `This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.`

/**
* @param {{  }} i
*/
export const privacy_agreement = (i) => `We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.`

/**
* @param {{  }} i
*/
export const privacy_interpretation_title = (i) => `Interpretation and Definitions`

/**
* @param {{  }} i
*/
export const privacy_interpretation_subtitle = (i) => `Interpretation`

/**
* @param {{  }} i
*/
export const privacy_interpretation_text = (i) => `The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.`

/**
* @param {{  }} i
*/
export const privacy_definitions_subtitle = (i) => `Definitions`

/**
* @param {{  }} i
*/
export const privacy_definitions_intro = (i) => `For the purposes of this Privacy Policy:`

/**
* @param {{  }} i
*/
export const privacy_definition_account = (i) => `**Account** means a unique account created for You to access our Service or parts of our Service.`

/**
* @param {{  }} i
*/
export const privacy_definition_affiliate = (i) => `**Affiliate** means an entity that controls, is controlled by or is under common control with a party, where "control" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.`

/**
* @param {{  }} i
*/
export const privacy_definition_application = (i) => `**Application** means the software program provided by the Company downloaded by You on any electronic device, named $1`

/**
* @param {{  }} i
*/
export const privacy_definition_business = (i) => `**Business**, for the purpose of the CCPA (California Consumer Privacy Act), refers to the Company as the legal entity that collects Consumers' personal information and determines the purposes and means of the processing of Consumers' personal information, or on behalf of which such information is collected and that alone, or jointly with others, determines the purposes and means of the processing of consumers' personal information, that does business in the State of California.`

/**
* @param {{  }} i
*/
export const privacy_definition_company = (i) => `**Company** (referred to as either "the Company", "We", "Us" or "Our" in this Agreement) refers to Digital shift OU, 6 sepapaja 15510 Tallinn.`

/**
* @param {{  }} i
*/
export const privacy_definition_company_gdpr = (i) => `For the purpose of the GDPR, the Company is the Data Controller.`

/**
* @param {{  }} i
*/
export const privacy_definition_consumer = (i) => `**Consumer**, for the purpose of the CCPA (California Consumer Privacy Act), means a natural person who is a California resident. A resident, as defined in the law, includes (1) every individual who is in the USA for other than a temporary or transitory purpose, and (2) every individual who is domiciled in the USA who is outside the USA for a temporary or transitory purpose.`

/**
* @param {{  }} i
*/
export const privacy_definition_country = (i) => `**Country** refers to: Estonia`

/**
* @param {{  }} i
*/
export const privacy_definition_data_controller = (i) => `**Data Controller**, for the purposes of the GDPR (General Data Protection Regulation), refers to the Company as the legal person which alone or jointly with others determines the purposes and means of the processing of Personal Data.`

/**
* @param {{  }} i
*/
export const privacy_definition_device = (i) => `**Device** means any device that can access the Service such as a computer, a cellphone or a digital tablet.`

/**
* @param {{  }} i
*/
export const privacy_definition_do_not_track = (i) => `**Do Not Track** (DNT) is a concept that has been promoted by US regulatory authorities, in particular the U.S. Federal Trade Commission (FTC), for the Internet industry to develop and implement a mechanism for allowing internet users to control the tracking of their online activities across websites.`

/**
* @param {{  }} i
*/
export const privacy_definition_personal_data = (i) => `**Personal Data** is any information that relates to an identified or identifiable individual.`

/**
* @param {{  }} i
*/
export const privacy_definition_personal_data_gdpr = (i) => `For the purposes of GDPR, Personal Data means any information relating to You such as a name, an identification number, location data, online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity.`

/**
* @param {{  }} i
*/
export const privacy_definition_personal_data_ccpa = (i) => `For the purposes of the CCPA, Personal Data means any information that identifies, relates to, describes or is capable of being associated with, or could reasonably be linked, directly or indirectly, with You.`

/**
* @param {{  }} i
*/
export const privacy_definition_sale = (i) => `**Sale**, for the purpose of the CCPA (California Consumer Privacy Act), means selling, renting, releasing, disclosing, disseminating, making available, transferring, or otherwise communicating orally, in writing, or by electronic or other means, a Consumer's personal information to another business or a third party for monetary or other valuable consideration.`

/**
* @param {{  }} i
*/
export const privacy_definition_service = (i) => `**Service** refers to the Application.`

/**
* @param {{  }} i
*/
export const privacy_definition_service_provider = (i) => `**Service Provider** means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used. For the purpose of the GDPR, Service Providers are considered Data Processors.`

/**
* @param {{  }} i
*/
export const privacy_definition_usage_data = (i) => `**Usage Data** refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).`

/**
* @param {{  }} i
*/
export const privacy_definition_you = (i) => `**You** means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.`

/**
* @param {{  }} i
*/
export const privacy_definition_you_gdpr = (i) => `Under GDPR (General Data Protection Regulation), You can be referred to as the Data Subject or as the User as you are the individual using the Service.`

/**
* @param {{  }} i
*/
export const privacy_collecting_data_title = (i) => `Collecting and Using Your Personal Data`

/**
* @param {{  }} i
*/
export const privacy_types_of_data_title = (i) => `Types of Data Collected`

/**
* @param {{  }} i
*/
export const privacy_personal_data_title = (i) => `Personal Data`

/**
* @param {{  }} i
*/
export const privacy_personal_data_description = (i) => `While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:`

/**
* @param {{  }} i
*/
export const privacy_personal_data_usage = (i) => `Usage Data`

/**
* @param {{  }} i
*/
export const privacy_usage_data_title = (i) => `Usage Data`

/**
* @param {{  }} i
*/
export const privacy_usage_data_description = (i) => `Usage Data is collected automatically when using the Service.`

/**
* @param {{  }} i
*/
export const privacy_usage_data_details = (i) => `Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.`

/**
* @param {{  }} i
*/
export const privacy_usage_data_mobile = (i) => `When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.`

/**
* @param {{  }} i
*/
export const privacy_usage_data_browser = (i) => `We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_title = (i) => `Use of Your Personal Data`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_intro = (i) => `The Company may use Personal Data for the following purposes:`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_provide_service = (i) => `**To provide and maintain our Service**, including to monitor the usage of our Service.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_manage_account = (i) => `**To manage Your Account:** to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_performance = (i) => `**For the performance of a contract:** the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_contact = (i) => `**To contact You:** To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_offers = (i) => `**To provide You** with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_requests = (i) => `**To manage Your requests:** To attend and manage Your requests to Us.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_business_transfers = (i) => `**For business transfers:** We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.`

/**
* @param {{  }} i
*/
export const privacy_use_of_data_other_purposes = (i) => `**For other purposes**: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_intro = (i) => `We may share Your personal information in the following situations:`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_service_providers = (i) => `**With Service Providers:** We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_business_transfers = (i) => `**For business transfers:** We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_affiliates = (i) => `**With Affiliates:** We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_business_partners = (i) => `**With business partners:** We may share Your information with Our business partners to offer You certain products, services or promotions.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_other_users = (i) => `**With other users:** when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.`

/**
* @param {{  }} i
*/
export const privacy_share_of_data_consent = (i) => `**With Your consent**: We may disclose Your personal information for any other purpose with Your consent.`

/**
* @param {{  }} i
*/
export const privacy_retention_of_data_title = (i) => `Retention of Your Personal Data`

/**
* @param {{  }} i
*/
export const privacy_retention_of_data_description = (i) => `The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.`

/**
* @param {{  }} i
*/
export const privacy_retention_of_usage_data = (i) => `The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.`

/**
* @param {{  }} i
*/
export const privacy_transfer_of_data_title = (i) => `Transfer of Your Personal Data`

/**
* @param {{  }} i
*/
export const privacy_transfer_of_data_description = (i) => `Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.`

/**
* @param {{  }} i
*/
export const privacy_transfer_of_data_consent = (i) => `Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.`

/**
* @param {{  }} i
*/
export const privacy_transfer_of_data_safeguards = (i) => `The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.`

/**
* @param {{  }} i
*/
export const privacy_disclosure_of_data_title = (i) => `Disclosure of Your Personal Data`

/**
* @param {{  }} i
*/
export const privacy_disclosure_business_transactions_title = (i) => `Business Transactions`

/**
* @param {{  }} i
*/
export const privacy_disclosure_business_transactions_description = (i) => `If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.`

/**
* @param {{  }} i
*/
export const privacy_disclosure_law_enforcement_title = (i) => `Law enforcement`

/**
* @param {{  }} i
*/
export const privacy_disclosure_law_enforcement_description = (i) => `Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_title = (i) => `Other legal requirements`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_description = (i) => `The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_comply = (i) => `Comply with a legal obligation`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_protect = (i) => `Protect and defend the rights or property of the Company`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_prevent = (i) => `Prevent or investigate possible wrongdoing in connection with the Service`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_protect_personal = (i) => `Protect the personal safety of Users of the Service or the public`

/**
* @param {{  }} i
*/
export const privacy_disclosure_other_legal_requirements_protect_legal = (i) => `Protect against legal liability`

/**
* @param {{  }} i
*/
export const privacy_security_of_data_title = (i) => `Security of Your Personal Data`

/**
* @param {{  }} i
*/
export const privacy_security_of_data_description = (i) => `The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.`

/**
* @param {{  }} i
*/
export const privacy_children_privacy_title = (i) => `Children's Privacy`

/**
* @param {{  }} i
*/
export const privacy_children_privacy_description = (i) => `Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.`

/**
* @param {{  }} i
*/
export const privacy_children_privacy_consent = (i) => `If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.`

/**
* @param {{  }} i
*/
export const privacy_links_to_other_websites_title = (i) => `Links to Other Websites`

/**
* @param {{  }} i
*/
export const privacy_links_to_other_websites_description = (i) => `Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.`

/**
* @param {{  }} i
*/
export const privacy_links_to_other_websites_control = (i) => `We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.`

/**
* @param {{  }} i
*/
export const privacy_changes_to_policy_title = (i) => `Changes to this Privacy Policy`

/**
* @param {{  }} i
*/
export const privacy_changes_to_policy_description = (i) => `We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.`

/**
* @param {{  }} i
*/
export const privacy_changes_to_policy_notification = (i) => `We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the "Last updated" date at the top of this Privacy Policy.`

/**
* @param {{  }} i
*/
export const privacy_changes_to_policy_review = (i) => `You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.`

/**
* @param {{  }} i
*/
export const privacy_contact_us_title = (i) => `Contact Us`

/**
* @param {{  }} i
*/
export const privacy_contact_us_description = (i) => `If you have any questions about this Privacy Policy, You can contact us:`

/**
* @param {{  }} i
*/
export const privacy_contact_us_website = (i) => `By visiting this page on our website: $1`

/**
* @param {{  }} i
*/
export const website_title = (i) => `Capgo - Capacitor Live update`

/**
* @param {{  }} i
*/
export const website_description = (i) => `Send and manage updates in realtime for your capacitor app without store hassle, 5 min to install Over-the-Air (OTA) updates. Use channels to send to specific groups.`

/**
* @param {{  }} i
*/
export const website_keywords = (i) => `Capacitor, updater, OTA, autoupdate, capgo`