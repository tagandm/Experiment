This README file was generated on 2025-05-28 by Maude Tagand.
Last updated: 2025-05-28.
 
# GENERAL INFORMATION
 
## Title: Experiment_OPP_CONSPI_BELIEVERS_S1
 
## DOI:
 
## Contact email: maude.tagand@univ-grenoble-alpes.fr
## Project Structure

The folder contains:
    index.html: Loads necessary packages from the internet and runs the script.
    jsPsych/ directory:
        Experiment_OPP_CONSPI_BELIEVERS_S2.js: The core script for the study.
        custom.css: Custom styling file (e.g., font modifications).

## Description
The task was programmed on jsPsych (version 7; de Leeuw et al., 2023) and hosted on Netlify. Data were transmitted through DataPipe and directly stored on OSF.
You can find the library here: https://www.jspsych.org/7.3/

For reference, the task consists of seven main parts:
    A classification task where participants categorize 26 unwarranted conspiracy claims and 26 warranted conspiracy claims as "true" or "false."
    An attention check.
    A Conspiracy Mentality Questionnaire (CMQ; Bruder et al., 2014).
    A Conspiracy Mentality Scale (CMS; Imhoff & Bruder, 2014).
    A Single Item-Conspiracy Belief Scale (SICBS; Lantian et al., 2016)
    Questions about participants’ interests and demographics.
    A question about information-seeking behavior.

## Usage
If you wish reuse this script, you need to:
    Copy and paste the full folder.
    Modify the Prolific integration section: Insert your Prolific study submission and completion URLs (https://app.prolific.com/researcher)
    Modify the DataPipe configuration here: https://pipe.jspsych.org/getting-started
	Replace the study ID with the one associated with your datapipe project.
	Refer to the official DataPipe setup guide below for a detailed, step-by-step walkthrough.
Important: When creating the DataPipe link, be sure to increase the maximum number of allowed participants — otherwise, not all data may be collected.

If you want to costumizing the study to create you own version:
Check out the official jsPsych tutorials here: https://www.jspsych.org/7.3/tutorials/hello-world/

## Support
If you have questions or encounter issues:
    You can open a discussion in the jsPsych GitHub community here: https://github.com/jspsych/jsPsych/discussions/3398
    And feel free to reach out to the original script author — I will be happy to help!

## License
CC0 1.0 Universal