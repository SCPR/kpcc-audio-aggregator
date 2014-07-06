import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return data.items;
  }
});

var data = {
  "items": [
      {
        "category": "Politics", 
        "title": "Activists concerned about possible low voter turnout", 
        "url": "http://www.scpr.org/news/2014/06/02/44500/activists-concerned-about-possible-low-voter-turno/", 
        "timestamp": "16:32", 
        "source": "KPCC", 
        "program": "", 
        "duration": "1:02", 
        "audio": "http://media.scpr.org/audio/features/20140602_features1157.mp3"
      }, 
      {
        "category": "", 
        "title": "What\u2019s ahead for the California primary elections?", 
        "url": "http://www.scpr.org/programs/airtalk/2014/06/02/37709/what-s-ahead-for-the-california-primary-elections/", 
        "timestamp": "11:03", 
        "source": "KPCC", 
        "program": "AirTalk", 
        "duration": "42:11", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/02/_Election_Round_Table-25be495c.mp3?via=website"
      }, 
      {
        "category": "Science", 
        "title": "FAQ: What do the EPA's new climate rules for existing power plants mean?", 
        "url": "http://www.scpr.org/news/2014/06/02/44494/faq-what-do-the-epa-s-new-climate-rules-for-existi/", 
        "timestamp": "12:03", 
        "source": "KPCC", 
        "program": "", 
        "duration": "1:30", 
        "audio": "http://media.scpr.org/audio/features/20140602_features1156.mp3"
      }, 
      {
        "category": "", 
        "title": "David Folkenflik on NY Times tumult and media coverage of Isla Vista massacre", 
        "url": "http://www.scpr.org/programs/airtalk/2014/06/02/37710/david-folkenflik-on-ny-times-tumult-and-media-cove/", 
        "timestamp": "14:28", 
        "source": "KPCC", 
        "program": "AirTalk", 
        "duration": "10:00", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/02/folkenflick-78432505.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "The College Life, Part One: College Adjacent", 
        "url": "http://www.scpr.org/programs/loh-life/2014/06/02/37711/the-college-life-part-one-college-adjacent/", 
        "timestamp": "10:39", 
        "source": "KPCC", 
        "program": "The Loh Life", 
        "duration": "2:41", 
        "audio": "http://media.scpr.org/audio/loh/20140602_lohlife.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "Political posturing begins over Guantanamo prisoner swap", 
        "url": "http://www.scpr.org/programs/airtalk/2014/06/02/37707/political-posturing-begins-over-guantanamo-prisone/", 
        "timestamp": "14:30", 
        "source": "KPCC", 
        "program": "AirTalk", 
        "duration": "20:14", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/02/prisoner_swap-ed7d285e.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "Are you working for a corporate cult?", 
        "url": "http://www.scpr.org/programs/airtalk/2014/06/02/37708/are-you-working-for-a-corporate-cult/", 
        "timestamp": "14:29", 
        "source": "KPCC", 
        "program": "AirTalk", 
        "duration": "16:46", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/02/corporate_cult-2e6c6884.mp3?via=website"
      }, 
      {
        "category": "Science", 
        "title": "Pregnancy hormone may reduce multiple sclerosis symptoms", 
        "url": "http://www.scpr.org/news/2014/06/02/44487/pregnancy-hormone-may-reduce-multiple-sclerosis-sy/", 
        "timestamp": "9:36", 
        "source": "NPR", 
        "program": "", 
        "duration": "4:44", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_pregnancy_hormone_may_reduce_multiple_sclerosis_symptoms.mp3?orgId=1&topicId=1128&ft=3&f=317355068"
      }, 
      {
        "category": "", 
        "title": "How ants play school will surprise you!", 
        "url": "http://www.scpr.org/programs/loh-down-on-science/2014/06/02/37694/how-ants-play-school-will-surprise-you/", 
        "timestamp": "6:00", 
        "source": "KPCC", 
        "program": "Loh Down on Science", 
        "duration": "1:30", 
        "audio": "http://media.scpr.org/audio/upload/2014/05/30/1406-01_Ant_Academy-8b2e40ab.mp3?via=website"
      }, 
      {
        "category": "Education", 
        "title": "After years of cuts, Cal State University hiring more faculty", 
        "url": "http://www.scpr.org/blogs/education/2014/06/02/16755/after-years-of-cuts-cal-state-university-hiring-mo/", 
        "timestamp": "18:14", 
        "source": "KPCC", 
        "program": "", 
        "duration": "1:00", 
        "audio": "http://media.scpr.org/audio/features/20140602_features3003.mp3"
      }, 
      {
        "category": "Education", 
        "title": "Teaching Through Trauma: How poverty affects kids' brains", 
        "url": "http://www.scpr.org/blogs/education/2014/06/02/16743/poverty-has-been-found-to-affect-kids-brains-can-o/", 
        "timestamp": "17:33", 
        "source": "KPCC", 
        "program": "", 
        "duration": "4:26", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/02/TEACH_TRAUMA_ONE-3ccc4942.mp3"
      }, 
      {
        "category": "", 
        "title": "California housing remains unaffordable for poorest residents", 
        "url": "http://www.scpr.org/programs/take-two/2014/06/02/37704/california-housing-remains-unaffordable-for-poores/", 
        "timestamp": "9:00", 
        "source": "KPCC", 
        "program": "Take Two", 
        "duration": "6:13", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/03/20140602_housing-42216fba.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "Obama administration seeks to cut carbon emissions from power plants", 
        "url": "http://www.scpr.org/programs/take-two/2014/06/02/37700/obama-administration-seeks-to-cut-carbon-emissions/", 
        "timestamp": "11:00", 
        "source": "KPCC", 
        "program": "Take Two", 
        "duration": "7:09", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/03/20140602_climatechange-4ce95eef.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "EPA's climate change rules could spur renewable energy in West", 
        "url": "http://www.scpr.org/programs/take-two/2014/06/02/37699/epa-s-climate-change-rules-could-spur-renewable-en/", 
        "timestamp": "9:00", 
        "source": "KPCC", 
        "program": "Take Two", 
        "duration": "7:01", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/03/20140602_eparules-27ae1176.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "The races to watch in California's June 3 primary", 
        "url": "http://www.scpr.org/programs/take-two/2014/06/02/37702/the-races-to-watch-in-california-s-june-3-primary/", 
        "timestamp": "10:27", 
        "source": "KPCC", 
        "program": "Take Two", 
        "duration": "14:59", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/03/20140602_election-b7af0dbc.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "Study: For many African-American grads, a college degree is not a job guarantee", 
        "url": "http://www.scpr.org/programs/take-two/2014/06/02/37697/african-american-college-grads-have-unemployment-r/", 
        "timestamp": "11:00", 
        "source": "KPCC", 
        "program": "Take Two", 
        "duration": "4:58", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/03/20140602_degreejobs-e55ebe5b.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "The Mexican vigilantes from California", 
        "url": "http://www.scpr.org/programs/take-two/2014/06/02/37698/the-mexican-vigilantes-from-california/", 
        "timestamp": "9:00", 
        "source": "KPCC", 
        "program": "Take Two", 
        "duration": "6:42", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/03/20140602_vigilantes-ef0ca4e3.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "Amazon's illegal market for prescription drugs", 
        "url": "http://www.scpr.org/programs/take-two/2014/06/02/37706/amazon-s-illegal-market-for-prescription-drugs/", 
        "timestamp": "11:00", 
        "source": "KPCC", 
        "program": "Take Two", 
        "duration": "7:55", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/03/20140602_amazon-8f553401.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "On the Lot: Bueller house, Avatar teams with Cirque du Soleil and Maleficent rules the box office", 
        "url": "http://www.scpr.org/programs/take-two/2014/06/02/37705/on-the-lot-bueller-house-avatar-teams-with-cirque/", 
        "timestamp": "9:00", 
        "source": "KPCC", 
        "program": "Take Two", 
        "duration": "7:03", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/03/20140602_onthelot-28584ecf.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "Hackers try to solve LA's data problems in a weekend", 
        "url": "http://www.scpr.org/programs/take-two/2014/06/02/37703/hackers-try-to-solve-la-s-data-problems-in-a-weeke/", 
        "timestamp": "9:00", 
        "source": "KPCC", 
        "program": "Take Two", 
        "duration": "4:42", 
        "audio": "http://media.scpr.org/audio/upload/2014/06/03/20140602_hackathon-d9553040.mp3?via=website"
      }, 
      {
        "category": "", 
        "title": "PRI's The World: 6/02/14", 
        "url": "http://www.scpr.org/programs/world/2014/06/02/4326/", 
        "timestamp": "12:29", 
        "source": "PRI", 
        "program": "The World", 
        "duration": "46:52", 
        "audio": "http://feedproxy.google.com/~r/pri/theworld/~5/pqlfkT0vIjQ/06022014full.mp3"
      }, 
      {
        "category": "", 
        "title": "Human rights in Thailand, the how-to follow to Lean In, foolproof fitness", 
        "url": "http://www.scpr.org/programs/q-with-jian-ghomeshi/2014/06/01/4332/", 
        "timestamp": "0:00", 
        "source": "CBC", 
        "program": "Q with Jian Ghomeshi", 
        "duration": "55.26", 
        "audio": "http://podcast.cbc.ca/mp3/podcasts/qpodcast_20140602_17301.mp3"
      }, 
      {
        "category": "", 
        "title": "Sgt. Bergdahl's Hometown Rejoices At His Long-Awaited Release", 
        "url": "http://www.npr.org/2014/06/02/318098891/sgt-bergdahl-releases-from-captivity-by-taliban?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "4:39", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_bowe_bergdahl_and_his_hometown.mp3"
      }, 
      {
        "category": "", 
        "title": "Release Of Sgt. Bergdahl May Have Come At A High Cost", 
        "url": "http://www.npr.org/2014/06/02/318098898/sgt-bergdahls-release-may-have-come-at-a-high-cost?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "4:13", 
        "audio": ""
      }, 
      {
        "category": "", 
        "title": "Syrian Election Expected To Give Assad Another Term", 
        "url": "http://www.npr.org/2014/06/02/318098905/syria-election-expected-to-give-assad-another-term?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "3:36", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_syria_election_expected_to_give_assad_another_term.mp3"
      }, 
      {
        "category": "", 
        "title": "India's New Prime Minister Takes A Stand On Foreign Policy", 
        "url": "http://www.npr.org/2014/06/02/318098912/india-s-prime-minister-demonstrates-foreign-policy-on-his-1st-day?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "4:11", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_indias_prime_minister_demonstrates_foreign_policy_on_his_1st_day.mp3"
      }, 
      {
        "category": "", 
        "title": "Chicago Blackhawks' Social Media Team Sends Obscene Tweet", 
        "url": "http://www.npr.org/2014/06/02/318098919/chicago-blackhawks-social-media-team-sends-obscene-tweet?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "0:29", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_hr_1_return_029_-_davidkevin.mp3"
      }, 
      {
        "category": "", 
        "title": "#WeNeedDiverseBooks Campaign Comes To Inaugural BookCon", 
        "url": "http://www.npr.org/blogs/codeswitch/2014/06/02/318098926/-weneeddiversebooks-campaign-comes-to-inaugural-bookcon?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "3:57", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_bookexpo_criticized_for_disproportionate_white_author_lineup.mp3"
      }, 
      {
        "category": "", 
        "title": "Pregnancy Hormone May Reduce Multiple Sclerosis Symptoms", 
        "url": "http://www.npr.org/blogs/health/2014/06/02/317355068/pregnancy-hormone-may-reduce-multiple-sclerosis-symptoms?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "4:44", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_pregnancy_hormone_may_reduce_multiple_sclerosis_symptoms.mp3"
      }, 
      {
        "category": "", 
        "title": "Tiny Magnetic Beads Help Tame Severe Reflux For Some People", 
        "url": "http://www.npr.org/blogs/health/2014/06/02/317355435/tiny-magnetic-beads-help-tame-severe-reflux-for-some-people?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "3:49", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_tiny_magnetic_beads_help_tame_severe_reflux_for_some_people.mp3"
      }, 
      {
        "category": "", 
        "title": "Mickelson Says He's Done Nothing Wrong In Trading Probe", 
        "url": "http://www.npr.org/2014/06/02/318098933/mickelson-says-he-s-done-nothing-wrong-in-trading-probe?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "1:29", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_mickelson_says_hes_done_nothing_wrong_in_trading_probe.mp3"
      }, 
      {
        "category": "", 
        "title": "Commodities Traders: 'The Secret Club That Runs That World'", 
        "url": "http://www.npr.org/2014/06/02/318098940/commodities-traders-the-secret-club-that-runs-that-world?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "4:57", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_commodities_traders_the_secret_club_that_runs_that_world.mp3"
      }, 
      {
        "category": "", 
        "title": "British Study: Water Is Key To A Perfect Cup Of Coffee", 
        "url": "http://www.npr.org/2014/06/02/318098947/the-last-word-in-business?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "0:44", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_the_last_word_in_business.mp3"
      }, 
      {
        "category": "", 
        "title": "EPA To Propose Rules To Deeply Cut Power Plant Emissions", 
        "url": "http://www.npr.org/2014/06/02/318098954/epa-to-propose-rules-to-deeply-cut-power-plant-emissions?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "4:07", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_epa_to_propose_rules_to_deeply_cut_power_plant_emissions.mp3"
      }, 
      {
        "category": "", 
        "title": "Even If Keystone Pipeline Rejected, Oil May Still Cross Neb. By Rail", 
        "url": "http://www.npr.org/2014/06/02/318098961/if-keystone-xl-pipeline-is-rejected-more-trains-will-transfer-oil?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "3:50", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_if_keystone_xl_pipeline_is_rejected_more_trains_will_transfer_oil.mp3"
      }, 
      {
        "category": "", 
        "title": "Civil Rights Champion Yuri Kochiyama Dies At 93", 
        "url": "http://www.npr.org/2014/06/02/318098968/civil-rights-champion-yuri-kochiyama-dies-at-93?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "0:52", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_civil_rights_champion_yuri_kochiyama_dies_at_93.mp3"
      }, 
      {
        "category": "", 
        "title": "For One Soldier At Tiananmen, A Day 'Never Forgotten'", 
        "url": "http://www.npr.org/blogs/parallels/2014/06/02/317996805/for-one-soldier-at-tiananmen-a-day-never-forgotten?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "7:48", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_for_one_soldier_at_tiananmen_a_day_never_forgotten.mp3"
      }, 
      {
        "category": "", 
        "title": "Paperweight Gets Stanford Professor In Hot Water With TSA", 
        "url": "http://www.npr.org/2014/06/02/318098975/paperweight-gets-stanford-professor-in-hot-water-with-tsa?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "0:28", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_hr_2_return_029.mp3"
      }, 
      {
        "category": "", 
        "title": "Corruption Allegations Surface Before World Cup Opens", 
        "url": "http://www.npr.org/2014/06/02/318098982/corruption-allegations-surface-before-world-cup-opens?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "3:58", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_corruption_allegations_surface_before_world_cup_opens.mp3"
      }, 
      {
        "category": "", 
        "title": "Mitt Romney Emerges As A Player In Midterm Elections", 
        "url": "http://www.npr.org/2014/06/02/318098989/mitt-romney-emerges-as-a-player-in-midterm-elections?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "4:28", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_mitt_romney_emerges_as_a_player_in_midterm_elections.mp3"
      }, 
      {
        "category": "", 
        "title": "17 Primary Candidates Vie For Rep. Henry Waxman's Seat", 
        "url": "http://www.npr.org/2014/06/02/318098996/17-primary-candidates-vie-for-rep-henry-waxman-s-seat?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "4:23", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_ca_33_-_race_to_succeed_waxman.mp3"
      }, 
      {
        "category": "", 
        "title": "The Silence And Awe Of Arvo P\u00e4rt", 
        "url": "http://www.npr.org/blogs/deceptivecadence/2014/06/02/316322238/the-silence-and-awe-of-arvo-p-rt?ft=3&f=3", 
        "timestamp": "4:48", 
        "source": "NPR", 
        "program": "Morning Edition", 
        "duration": "6:59", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/me/2014/06/20140602_me_the_silence_and_awe_of_arvo_prt.mp3"
      }, 
      {
        "category": "", 
        "title": "06-02-2014- Marketplace- Facing the NSA", 
        "url": "http://www.scpr.org/programs/marketplace/2014/06/02/4323/", 
        "timestamp": "14:44", 
        "source": "APM", 
        "program": "Marketplace", 
        "duration": "26:00", 
        "audio": "http://feeds.americanpublicmedia.org/~r/MarketplacePodcast/~5/k3P8NHnz-W4/marketplace_podcast_20140602_64.mp3"
      }, 
      {
        "category": "", 
        "title": "EPA Lays Out Centerpiece To Obama's Climate Change Policy", 
        "url": "http://www.npr.org/2014/06/02/318266794/epa-lays-out-centerpiece-to-obamas-climate-change-policy?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "3:51", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_epa_lays_out_centerpiece_to_obamas_climate_change_policy.mp3"
      }, 
      {
        "category": "", 
        "title": "With New EPA Rules, McCarthy Sees Economic Upside In Health Savings", 
        "url": "http://www.npr.org/2014/06/02/318266801/with-new-epa-rules-mccarthy-sees-economic-upside-in-health-savings?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "4:31", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_with_new_epa_rules_mccarthy_sees_economic_upside_in_health_savings.mp3"
      }, 
      {
        "category": "", 
        "title": "Bursts Of Light Create Memories, Then Take Them Away", 
        "url": "http://www.npr.org/blogs/health/2014/06/02/318104637/bursts-of-light-create-memories-then-take-them-away?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "3:55", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_bursts_of_light_create_memories_then_take_them_away.mp3"
      }, 
      {
        "category": "", 
        "title": "'How Not To Be Wrong' In Math Class? Add A Dose Of Skepticism", 
        "url": "http://www.npr.org/2014/06/02/318252678/how-not-to-be-wrong-in-math-class-add-a-dose-of-skepticism?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "7:23", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_the_secret_to_getting_math_right_a_healthy_dose_of_skepticism.mp3"
      }, 
      {
        "category": "", 
        "title": "As Spain's King Steps Down, Protesters Hope He's The Last One", 
        "url": "http://www.npr.org/2014/06/02/318266808/as-spains-king-steps-down-protesters-hope-hes-the-last-one?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "3:19", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_as_spains_king_steps_down_protesters_hope_hes_the_last_one.mp3"
      }, 
      {
        "category": "", 
        "title": "Double Rape, Lynching In India Exposes Caste Fault Lines", 
        "url": "http://www.npr.org/blogs/parallels/2014/06/02/318259419/double-rape-lynching-in-india-exposes-caste-fault-lines?ft=3&f=2", 
        "timestamp": "16:19", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "5:03", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_double_rape_draws_protests_of_neglect_against_indian_police.mp3"
      }, 
      {
        "category": "", 
        "title": "With California Campaign, Political Pundit Decides To Try It Himself", 
        "url": "http://www.npr.org/2014/06/02/318266815/with-california-campaign-political-pundit-decides-to-try-it-himself?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "4:10", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_a_pundit_runs_for_office.mp3"
      }, 
      {
        "category": "", 
        "title": "Will EPA's New Emission Rules Boost Your Power Bill? It Depends", 
        "url": "http://www.npr.org/2014/06/02/318261777/will-epas-new-emission-rules-boost-your-power-bill-it-depends?ft=3&f=2", 
        "timestamp": "17:27", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "3:29", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_as_epa_unveils_new_rules_questions_abound_about_electricity_prices.mp3"
      }, 
      {
        "category": "", 
        "title": "From A Band On The Border, The Stories That Shape 'South Of Nowhere'", 
        "url": "http://www.npr.org/2014/06/02/318266822/from-a-band-on-the-border-the-stories-that-shape-south-of-nowhere?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "4:31", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_from_a_band_on_the_border_the_stories_that_shape_south_of_nowhere.mp3"
      }, 
      {
        "category": "", 
        "title": "As Bergdahl Returns Home, Accusations Of Desertion Surface", 
        "url": "http://www.npr.org/2014/06/02/318266829/as-bergdahl-returns-home-accusations-of-desertion-surface?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "3:58", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_as_bergdahl_returns_home_accusations_of_desertion_surface.mp3"
      }, 
      {
        "category": "", 
        "title": "Supreme Court: Case Involved Romantic Jealousy, Not Chemical Weapons", 
        "url": "http://www.npr.org/2014/06/02/318266836/in-chemical-weapons-case-supreme-court-sidesteps-broad-questions?ft=3&f=2", 
        "timestamp": "16:19", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "5:11", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_in_chemical_weapons_case_supreme_court_sidesteps_broad_questions.mp3"
      }, 
      {
        "category": "", 
        "title": "Yuri Kochiyama, Activist And Former World War II Internee, Dies At 93", 
        "url": "http://www.npr.org/blogs/codeswitch/2014/06/02/318072652/japanese-american-activist-and-malcolm-x-ally-dies-at-93?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "3:10", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_civil_rights_activist_yuri_kochiyama_dies_at_93.mp3"
      }, 
      {
        "category": "", 
        "title": "Palestinian Split Shows Signs Of Healing, But Israelis Aren't Pleased", 
        "url": "http://www.npr.org/2014/06/02/318266850/palestinian-split-shows-signs-of-healing-but-israelis-arent-pleased?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "3:44", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_palestinian_split_shows_signs_of_healing_but_israelis_arent_pleased.mp3"
      }, 
      {
        "category": "", 
        "title": "What Syria's President Seeks From A Not-So-Democratic Election", 
        "url": "http://www.npr.org/blogs/parallels/2014/06/02/318234262/what-syrias-president-seeks-from-a-no-so-democratic-election?ft=3&f=2", 
        "timestamp": "17:27", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "3:56", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_what_syrias_president_seeks_from_a_not-so-democratic_election.mp3"
      }, 
      {
        "category": "", 
        "title": "Apple Makes A Play For 'Smart Homes' By Connecting Appliances", 
        "url": "http://www.npr.org/blogs/alltechconsidered/2014/06/02/318223412/apple-makes-a-play-for-smart-homes-by-connecting-appliances?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "2:24", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_apple_makes_a_play_for_smart_homes_by_connecting_appliances.mp3"
      }, 
      {
        "category": "", 
        "title": "With The Internet Of Things, 'The Jetsons Lifestyle Is Upon Us'", 
        "url": "http://www.npr.org/2014/06/02/318266857/with-the-internet-of-things-the-jetsons-lifestyle-is-upon-us?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "2:46", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_all_tech_internet_of_all_things_-_smartthings.mp3"
      }, 
      {
        "category": "", 
        "title": "A Connected Life Means More Than Just Smart Appliances", 
        "url": "http://www.npr.org/2014/06/02/318266864/a-connected-life-means-more-than-just-smart-appliances?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "3:11", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_all_tech_internet_of_all_things.mp3"
      }, 
      {
        "category": "", 
        "title": "Amazon's Pricing Dispute Sets Book Expo Buzzing", 
        "url": "http://www.npr.org/2014/06/02/318266871/amazons-pricing-dispute-sets-book-expo-buzzing?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "3:52", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_amazon-hachette_at_book_expo.mp3"
      }, 
      {
        "category": "", 
        "title": "Despite Expansion, Many Pre-K Programs Fail To Reach Immigrant Kids", 
        "url": "http://www.npr.org/2014/06/02/318266878/despite-expansion-many-pre-k-programs-fail-to-reach-immigrant-kids?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "2:34", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_immigrants_preschool_report.mp3"
      }, 
      {
        "category": "", 
        "title": "Do Autistic Kids Fare Better In Integrated Or Specialized Schools?", 
        "url": "http://www.npr.org/2014/06/02/316462407/do-autistic-kids-fare-better-in-integrated-or-specialized-schools?ft=3&f=2", 
        "timestamp": "15:50", 
        "source": "NPR", 
        "program": "All Things Considered", 
        "duration": "5:36", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/atc/2014/06/20140602_atc_autism-only_schools_create_safe_spaces_and_raise_questions.mp3"
      }, 
      {
        "category": "", 
        "title": "'Raisin In The Sun' Revival: A Uniquely American Story Is Back On Broadway", 
        "url": "http://www.npr.org/2014/06/02/318207683/raisin-in-the-sun-revival-a-uniquely-american-story-is-back-on-broadway?ft=3&f=13", 
        "timestamp": "13:05", 
        "source": "NPR", 
        "program": "Fresh Air", 
        "duration": "37:24", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/fa/2014/06/20140602_fa_01.mp3"
      }, 
      {
        "category": "", 
        "title": "John Fullbright's Uneven 'Songs' Finds A Way To Fascinate", 
        "url": "http://www.npr.org/2014/06/02/318214238/john-fullbrights-uneven-songs-finds-a-way-to-fascinate?ft=3&f=13", 
        "timestamp": "12:09", 
        "source": "NPR", 
        "program": "Fresh Air", 
        "duration": "8:08", 
        "audio": "http://pd.npr.org/anon.npr-mp3/npr/fa/2014/06/20140602_fa_02.mp3?dl=1"
      }, 
      {
        "category": "", 
        "title": "GlobalNews: 02 Jun 14: Spain's King Abdicates", 
        "url": "http://www.scpr.org/programs/bbc-world-service/2014/06/02/4322/", 
        "timestamp": "7:48", 
        "source": "BBC", 
        "program": "BBC World Service", 
        "duration": "39:54", 
        "audio": "http://downloads.bbc.co.uk/podcasts/worldservice/globalnews/globalnews_20140602-1548a.mp3"
      }, 
      {
        "category": "", 
        "title": "GlobalNews: 03 Jun 14 AM Madrid monarchy protest", 
        "url": "http://www.scpr.org/programs/bbc-world-service/2014/06/02/4321/", 
        "timestamp": "16:36", 
        "source": "BBC", 
        "program": "BBC World Service", 
        "duration": "23:39", 
        "audio": "http://downloads.bbc.co.uk/podcasts/worldservice/globalnews/globalnews_20140603-0036a.mp3"
      }, 
      {
        "category": "", 
        "title": "Newshour: Spain's king abdicates.", 
        "url": "http://www.scpr.org/programs/bbc-newshour/2014/06/02/4330/", 
        "timestamp": "7:20", 
        "source": "BBC", 
        "program": "BBC Newshour", 
        "duration": "49:19", 
        "audio": "http://downloads.bbc.co.uk/podcasts/worldservice/newshour/newshour_20140602-1520a.mp3"
      }, 
      {
        "category": "", 
        "title": "Newshour: Ukraine border under assault", 
        "url": "http://www.scpr.org/programs/bbc-newshour/2014/06/02/4329/", 
        "timestamp": "14:19", 
        "source": "BBC", 
        "program": "BBC Newshour", 
        "duration": "48:38", 
        "audio": "http://downloads.bbc.co.uk/podcasts/worldservice/newshour/newshour_20140602-2219a.mp3"
      }
    ]
}
