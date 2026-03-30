// LICENCE -----------------------------------------------------------------------------

// Copyright 2023 - xxxx

// Initialize jsPsych -----------------------------------------------------------------
var jsPsych = initJsPsych({
});

// browser exclusion ------------------------------------------------------------------
var browser_check = {
  type: jsPsychBrowserCheck,
  inclusion_function: (data) => {
    return data.browser === 'firefox'|| data.browser === 'chrome' && data.mobile === false
  },
  exclusion_message: (data) => {
    if(data.mobile){
      return "p>You must use a desktop/laptop computer to participate in this experiment.</p>";
    } else if (data.browser !== 'firefox' && data.browser !== 'chrome'){
      return "<p>You must use Chrome or Firefox to complete this experiment.</p>"+
             "<p>If you would like to take part in our study, please copy and paste the experiment link into one of the compatible browsers.</p>";
    }
  }
}

// Create Timeline --------------------------------------------------------------------------
var timeline = [];

// Welcome
var welcome = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions'>Dear participant,</p>" +
  "<p class='instructions'>This study should take about 15 minutes to complete. It is important that you complete the study in one sitting and do not search any information on the Internet during the task.</p>" +
  "<p class='instructions'>You may stop the study at any time. Your answers are anonymous and confidential. " +
  "We are only interested in the statistical trends of the responses, and we will not be able to, nor willing to, identify participants. </p>" +
  "<p class='instructions'>By clicking on \u0022Continue\u0022, you consent to participate in this study.</p>",
  choices: ['Continue']
};

//Fixation screen
var cross = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "+",
    choices: "NO_KEY",
    trial_duration: 500,
    width: 600
};


// randomization boutton
var conspiracy_button_randomization = jsPsych.randomization.sampleWithoutReplacement(["j_true_conspiracy", "j_false_conspiracy"], 1)[0];
var pattern_button_randomization = jsPsych.randomization.sampleWithoutReplacement(["j_yes", "j_no"], 1)[0];

var faces_houses_randomization = jsPsych.randomization.sampleWithReplacement(["faces_pattern", "houses_pattern"], 1)[0];
var combined_button_faces_houses = pattern_button_randomization + "_" + faces_houses_randomization


//var instruction_pattern_randomization  = undefined;

switch(combined_button_faces_houses) 
{
  case "j_yes_faces_pattern":
    instruction_pattern_randomization  = 
    "<p class= 'instruction'>Images will appear, some will contain faces and others will not."+
    "<p class= 'instruction'>Please click on 'j' for yes when you see a face or 'd' for no when you don't.";
    instruction_message_slow_randomization =
    "<p class= 'instruction'>d = no, j = yes"
        break;
      
  case "j_no_faces_pattern":
    instruction_pattern_randomization  = 
    "<p class= 'instruction'>Images will appear, some will contain faces and others will not."+
    "<p class= 'instruction'>Please click on 'd' for yes when you see a face or 'j' for no when you don't.";
    instruction_message_slow_randomization =
    "<p class= 'instruction'>d = yes, j = no"
        break;

  case "j_yes_houses_pattern":
   instruction_pattern_randomization  = 
   "<p class= 'instruction'>Images will appear, some will contain houses and others will not."+
   "<p class= 'instruction'>Please click on 'j' for yes when you see a house or 'd' for no when you don't.";
   instruction_message_slow_randomization =
    "<p class= 'instruction'>d = no, j = yes"
        break
  
  case "j_no_houses_pattern":
    instruction_pattern_randomization  = 
    "<p class= 'instruction'>Images will appear, some will contain houses and others will not."+
    "<p class= 'instruction'>Please click on 'd' for yes when you see a house or 'j' for no when you don't.";
    instruction_message_slow_randomization =
    "<p class= 'instruction'>d = yes, j = no"
        break;

      }

switch(conspiracy_button_randomization) 
{
  case "j_true_conspiracy":
    instruction_conspiracy_randomization  = "<p class= 'instruction'>Please click on 'j' for true when you believe that the event actually took place or 'd' for false when you don't.";
    message_randomization = "<p class= 'instruction'>'d' false or 'j' true."
        break;
      
  case "j_false_conspiracy":
    instruction_conspiracy_randomization  = "<p class= 'instruction'>Please click on 'd' for true when you believe that the event actually took place or 'j' for false when you don't.";
    message_randomization = "<p class= 'instruction'>'d' true or 'j' false."
        break;

      }


//Faces images
var faces = [
  {face: "1", image: "img/1_noise.png", signal: false},
  {face: "2", image: "img/2_noise.png", signal: false},
  {face: "3", image: "img/3_noise.png", signal: false},
  {face: "4", image: "img/4_noise.png", signal: false},
  {face: "5", image: "img/5_noise.png", signal: false},
  {face: "6", image: "img/6_noise.png", signal: false},
  {face: "7", image: "img/7_noise.png", signal: false},
  {face: "8", image: "img/8_noise.png", signal: false},
  {face: "9", image: "img/9_noise.png", signal: false},
  {face: "10", image: "img/10_noise.png", signal: false},
  {face: "11", image: "img/11_noise.png", signal: false},
  {face: "12", image: "img/12_noise.png", signal: false},
  {face: "13", image: "img/13_noise.png", signal: false},
  {face: "14", image: "img/14_noise.png", signal: false},
  {face: "15", image: "img/15_noise.png", signal: false},
  {face: "16", image: "img/16_noise.png", signal: false},
  {face: "17", image: "img/17_noise.png", signal: false},
  {face: "18", image: "img/18_noise.png", signal: false},
  {face: "19", image: "img/19_noise.png", signal: false},
  {face: "20", image: "img/20_noise.png", signal: false},
  {face: "21", image: "img/21_noise.png", signal: false},
  {face: "22", image: "img/22_noise.png", signal: false},
  {face: "23", image: "img/23_noise.png", signal: false},
  {face: "24", image: "img/24_noise.png", signal: false},
  {face: "25", image: "img/25_noise.png", signal: false},
  {face: "26", image: "img/26_noise.png", signal: false},
  {face: "27", image: "img/27_noise.png", signal: false},
  {face: "28", image: "img/28_noise.png", signal: false},
  {face: "29", image: "img/29_noise.png", signal: false},
  {face: "30", image: "img/30_noise.png", signal: false},
  {face: "31", image: "img/31_noise.png", signal: false},
  {face: "32", image: "img/32_noise.png", signal: false},
  {face: "33", image: "img/33_noise.png", signal: false},
  {face: "34", image: "img/34_noise.png", signal: false},
  {face: "35", image: "img/35_noise.png", signal: false},
  {face: "36", image: "img/36_noise.png", signal: false},
  {face: "37", image: "img/37_noise.png", signal: false},
  {face: "38", image: "img/38_noise.png", signal: false},
  {face: "39", image: "img/39_noise.png", signal: false},
  {face: "40", image: "img/40_noise.png", signal: false},
  {face: "41", image: "img/41_noise.png", signal: false},
  {face: "42", image: "img/42_noise.png", signal: false},
  {face: "43", image: "img/43_noise.png", signal: false},
  {face: "44", image: "img/44_noise.png", signal: false},
  {face: "45", image: "img/45_noise.png", signal: false},
  {face: "46", image: "img/46_noise.png", signal: false},
  {face: "47", image: "img/47_noise.png", signal: false},
  {face: "48", image: "img/48_noise.png", signal: false},
  {face: "49", image: "img/49_noise.png", signal: false},
  {face: "50", image: "img/50_noise.png", signal: false},

  //{image: "img/51_noise.png", signal: false},
  //{image: "img/52_noise.png", signal: false},
  //{image: "img/53_noise.png", signal: false},
  //{image: "img/54_noise.png", signal: false},
  //{image: "img/55_noise.png", signal: false},
  //{image: "img/56_noise.png", signal: false},
  //{image: "img/57_noise.png", signal: false},
  //{image: "img/58_noise.png", signal: false},
  //{image: "img/59_noise.png", signal: false},
  //{image: "img/60_noise.png", signal: false},
  //{image: "img/61_noise.png", signal: false},
  //{image: "img/62_noise.png", signal: false},
  //{image: "img/63_noise.png", signal: false},
  //{image: "img/64_noise.png", signal: false},
  //{image: "img/65_noise.png", signal: false},
  //{image: "img/66_noise.png", signal: false},
  //{image: "img/67_noise.png", signal: false},
  //{image: "img/68_noise.png", signal: false},
  //{image: "img/69_noise.png", signal: false},
  //{image: "img/70_noise.png", signal: false},
  //{image: "img/71_noise.png", signal: false},
  //{image: "img/72_noise.png", signal: false},
  //{image: "img/73_noise.png", signal: false},
  //{image: "img/74_noise.png", signal: false},
  //{image: "img/75_noise.png", signal: false},
  //{image: "img/76_noise.png", signal: false},
  //{image: "img/77_noise.png", signal: false},
  //{image: "img/78_noise.png", signal: false},
  //{image: "img/79_noise.png", signal: false},
  //{image: "img/80_noise.png", signal: false},
  //{image: "img/81_noise.png", signal: false},
  //{image: "img/82_noise.png", signal: false},
  //{image: "img/83_noise.png", signal: false},

  //{image: "img/85_noise.png", signal: false},
  //{image: "img/86_noise.png", signal: false},

  //{image: "img/88_noise.png", signal: false},
  //{image: "img/89_noise.png", signal: false},
  //{image: "img/90_noise.png", signal: false},
  //{image: "img/91_noise.png", signal: false},
  //{image: "img/92_noise.png", signal: false},
  //{image: "img/93_noise.png", signal: false},
  //{image: "img/94_noise.png", signal: false},
  //{image: "img/95_noise.png", signal: false},
  //{image: "img/96_noise.png", signal: false},
  //{image: "img/97_noise.png", signal: false},
  //{image: "img/98_noise.png", signal: false},
  //{image: "img/99_noise.png", signal: false},
  //{image: "img/100_noise.png", signal: false},
  //{image: "img/101_noise.png", signal: false},
  //{image: "img/102_noise.png", signal: false},
  //{image: "img/103_noise.png", signal: false},
  //{image: "img/104_noise.png", signal: false},
  //{image: "img/105_noise.png", signal: false},
  //{image: "img/106_noise.png", signal: false},
  //{image: "img/107_noise.png", signal: false},
  //{image: "img/108_noise.png", signal: false},
  //{image: "img/109_noise.png", signal: false},
  //{image: "img/110_noise.png", signal: false},
  //{image: "img/111_noise.png", signal: false},
  //{image: "img/112_noise.png", signal: false},
  //{image: "img/113_noise.png", signal: false},
  //{image: "img/114_noise.png", signal: false},
  //{image: "img/115_noise.png", signal: false},
  //{image: "img/116_noise.png", signal: false},
  //{image: "img/117_noise.png", signal: false},
  //{image: "img/118_noise.png", signal: false},
  //{image: "img/119_noise.png", signal: false},
  //{image: "img/120_noise.png", signal: false},
  //{image: "img/121_noise.png", signal: false},
  //{image: "img/122_noise.png", signal: false},
  //{image: "img/123_noise.png", signal: false},
  //{image: "img/124_noise.png", signal: false},
  //{image: "img/125_noise.png", signal: false},

  {face: "51", image: "img/face_0_60.png", signal: true},
  {face: "52", image: "img/face_0_70.png", signal: true},
  {face: "53", image: "img/face_0_75.png", signal: true},
  {face: "54", image: "img/face_0_80.png", signal: true},
  {face: "55", image: "img/face_0_85.png", signal: true},
  {face: "56", image: "img/face_1_60.png", signal: true},
  {face: "57", image: "img/face_1_70.png", signal: true},
  {face: "58", image: "img/face_1_75.png", signal: true},
  {face: "59", image: "img/face_1_80.png", signal: true},
  {face: "60", image: "img/face_1_85.png", signal: true},
  {face: "61", image: "img/face_4_60.png", signal: true},
  {face: "62", image: "img/face_4_70.png", signal: true},
  {face: "63", image: "img/face_4_75.png", signal: true},
  {face: "64", image: "img/face_4_80.png", signal: true},
  {face: "65", image: "img/face_4_85.png", signal: true},
  {face: "66", image: "img/face_7_60.png", signal: true},
  {face: "67", image: "img/face_7_70.png", signal: true},
  {face: "68", image: "img/face_7_75.png", signal: true},
  {face: "69", image: "img/face_7_80.png", signal: true},
  {face: "70", image: "img/face_7_85.png", signal: true},
  {face: "71", image: "img/face_8_60.png", signal: true},
  {face: "72", image: "img/face_8_70.png", signal: true},
  {face: "73", image: "img/face_8_75.png", signal: true},
  {face: "74", image: "img/face_8_80.png", signal: true},
  {face: "75", image: "img/face_8_85.png", signal: true},
  {face: "76", image: "img/face_11_60.png", signal: true},
  {face: "77", image: "img/face_11_70.png", signal: true},
  {face: "78", image: "img/face_11_75.png", signal: true},
  {face: "79", image: "img/face_11_80.png", signal: true},
  {face: "80", image: "img/face_11_85.png", signal: true},
  {face: "81", image: "img/face_14_60.png", signal: true},
  {face: "82", image: "img/face_14_70.png", signal: true},
  {face: "83", image: "img/face_14_75.png", signal: true},
  {face: "84", image: "img/face_14_80.png", signal: true},
  {face: "85", image: "img/face_14_85.png", signal: true},
  {face: "86", image: "img/face_15_60.png", signal: true},
  {face: "87", image: "img/face_15_70.png", signal: true},
  {face: "88", image: "img/face_15_75.png", signal: true},
  {face: "89", image: "img/face_15_80.png", signal: true},
  {face: "90", image: "img/face_15_85.png", signal: true},
  {face: "91", image: "img/face_17_60.png", signal: true},
  {face: "92", image: "img/face_17_70.png", signal: true},
  {face: "93", image: "img/face_17_75.png", signal: true},
  {face: "94", image: "img/face_17_80.png", signal: true},
  {face: "95", image: "img/face_17_85.png", signal: true},
  {face: "96", image: "img/face_18_60.png", signal: true},
  {face: "97", image: "img/face_18_70.png", signal: true},
  {face: "98", image: "img/face_18_75.png", signal: true},
  {face: "99", image: "img/face_18_80.png", signal: true},
  {face: "100", image: "img/face_18_85.png", signal: true},

  //{image: "img/face_19_60.png", signal: true},
  //{image: "img/face_19_70.png", signal: true},
  //{image: "img/face_19_75.png", signal: true},
  //{image: "img/face_19_80.png", signal: true},
  //{image: "img/face_19_85.png", signal: true},
  //{image: "img/face_20_60.png", signal: true},
  //{image: "img/face_20_70.png", signal: true},
  //{image: "img/face_20_75.png", signal: true},
  //{image: "img/face_20_80.png", signal: true},
  //{image: "img/face_20_85.png", signal: true},
  //{image: "img/face_25_60.png", signal: true},
  //{image: "img/face_25_70.png", signal: true},
  //{image: "img/face_25_75.png", signal: true},
  //{image: "img/face_25_80.png", signal: true},
  //{image: "img/face_25_85.png", signal: true},
  //{image: "img/face_27_60.png", signal: true},
  //{image: "img/face_27_70.png", signal: true},
  //{image: "img/face_27_75.png", signal: true},
  //{image: "img/face_27_80.png", signal: true},
  //{image: "img/face_27_85.png", signal: true},
  //{image: "img/face_28_60.png", signal: true},
  //{image: "img/face_28_70.png", signal: true},
  //{image: "img/face_28_75.png", signal: true},
  //{image: "img/face_28_80.png", signal: true},
  //{image: "img/face_28_85.png", signal: true},
  //{image: "img/face_30_60.png", signal: true},
  //{image: "img/face_30_70.png", signal: true},
  //{image: "img/face_30_75.png", signal: true},
  //{image: "img/face_30_80.png", signal: true},
  //{image: "img/face_30_85.png", signal: true},
  //{image: "img/face_33_60.png", signal: true},
  //{image: "img/face_33_70.png", signal: true},
  //{image: "img/face_33_75.png", signal: true},
  //{image: "img/face_33_80.png", signal: true},
  //{image: "img/face_33_85.png", signal: true},
  //{image: "img/face_35_60.png", signal: true},
  //{image: "img/face_35_70.png", signal: true},
  //{image: "img/face_35_75.png", signal: true},
  //{image: "img/face_35_80.png", signal: true},
  //{image: "img/face_35_85.png", signal: true},
  //{image: "img/face_38_60.png", signal: true},
  //{image: "img/face_38_70.png", signal: true},
  //{image: "img/face_38_75.png", signal: true},
  //{image: "img/face_38_80.png", signal: true},
  //{image: "img/face_38_85.png", signal: true},
  //{image: "img/face_39_60.png", signal: true},
  //{image: "img/face_39_70.png", signal: true},
  //{image: "img/face_39_75.png", signal: true},
  //{image: "img/face_39_80.png", signal: true},
  //{image: "img/face_39_85.png", signal: true},
  //{image: "img/face_40_60.png", signal: true},
  //{image: "img/face_40_70.png", signal: true},
  //{image: "img/face_40_75.png", signal: true},
  //{image: "img/face_40_80.png", signal: true},
  //{image: "img/face_40_85.png", signal: true},
  //{image: "img/face_45_60.png", signal: true},
  //{image: "img/face_45_70.png", signal: true},
  //{image: "img/face_45_75.png", signal: true},
  //{image: "img/face_45_80.png", signal: true},
  //{image: "img/face_45_85.png", signal: true},
  //{image: "img/face_46_60.png", signal: true},
  //{image: "img/face_46_70.png", signal: true},
  //{image: "img/face_46_75.png", signal: true},
  //{image: "img/face_46_80.png", signal: true},
  //{image: "img/face_46_85.png", signal: true},
  //{image: "img/face_47_60.png", signal: true},
  //{image: "img/face_47_70.png", signal: true},
  //{image: "img/face_47_75.png", signal: true},
  //{image: "img/face_47_80.png", signal: true},
  //{image: "img/face_47_85.png", signal: true},
  //{image: "img/face_48_60.png", signal: true},
  //{image: "img/face_48_70.png", signal: true},
  //{image: "img/face_48_75.png", signal: true},
  //{image: "img/face_48_80.png", signal: true},
  //{image: "img/face_48_85.png", signal: true},
];


//Test C2 Houses
var houses = [
  {house: "1", image: "img/1_noise.png", signal: false,},
  {house: "2", image: "img/2_noise.png", signal: false},
  {house: "3", image: "img/3_noise.png", signal: false},
  {house: "4", image: "img/4_noise.png", signal: false},
  {house: "5", image: "img/5_noise.png", signal: false},
  {house: "6", image: "img/6_noise.png", signal: false},
  {house: "7", image: "img/7_noise.png", signal: false},
  {house: "8", image: "img/8_noise.png", signal: false},
  {house: "9", image: "img/9_noise.png", signal: false},
  {house: "10", image: "img/10_noise.png", signal: false},
  {house: "11", image: "img/11_noise.png", signal: false},
  {house: "12", image: "img/12_noise.png", signal: false},
  {house: "13", image: "img/13_noise.png", signal: false},
  {house: "14", image: "img/14_noise.png", signal: false},
  {house: "15", image: "img/15_noise.png", signal: false},
  {house: "16", image: "img/16_noise.png", signal: false},
  {house: "17", image: "img/17_noise.png", signal: false},
  {house: "18", image: "img/18_noise.png", signal: false},
  {house: "19", image: "img/19_noise.png", signal: false},
  {house: "20", image: "img/20_noise.png", signal: false},
  {house: "21", image: "img/21_noise.png", signal: false},
  {house: "22", image: "img/22_noise.png", signal: false},
  {house: "23", image: "img/23_noise.png", signal: false},
  {house: "24", image: "img/24_noise.png", signal: false},
  {house: "25", image: "img/25_noise.png", signal: false},
  {house: "26", image: "img/26_noise.png", signal: false},
  {house: "27", image: "img/27_noise.png", signal: false},
  {house: "28", image: "img/28_noise.png", signal: false},
  {house: "29", image: "img/29_noise.png", signal: false},
  {house: "30", image: "img/30_noise.png", signal: false},
  {house: "31", image: "img/31_noise.png", signal: false},
  {house: "32", image: "img/32_noise.png", signal: false},
  {house: "33", image: "img/33_noise.png", signal: false},
  {house: "34", image: "img/34_noise.png", signal: false},
  {house: "35", image: "img/35_noise.png", signal: false},
  {house: "36", image: "img/36_noise.png", signal: false},
  {house: "37", image: "img/37_noise.png", signal: false},
  {house: "38", image: "img/38_noise.png", signal: false},
  {house: "39", image: "img/39_noise.png", signal: false},
  {house: "40", image: "img/40_noise.png", signal: false},
  {house: "41", image: "img/41_noise.png", signal: false},
  {house: "42", image: "img/42_noise.png", signal: false},
  {house: "43", image: "img/43_noise.png", signal: false},
  {house: "44", image: "img/44_noise.png", signal: false},
  {house: "45", image: "img/45_noise.png", signal: false},
  {house: "46", image: "img/46_noise.png", signal: false},
  {house: "47", image: "img/47_noise.png", signal: false},
  {house: "48", image: "img/48_noise.png", signal: false},
  {house: "49", image: "img/49_noise.png", signal: false},
  {house: "50", image: "img/50_noise.png", signal: false},

  //{image: "img/51_noise.png", signal: false},
  //{image: "img/52_noise.png", signal: false},
  //{image: "img/53_noise.png", signal: false},
  //{image: "img/54_noise.png", signal: false},
  //{image: "img/55_noise.png", signal: false},
  //{image: "img/56_noise.png", signal: false},
  //{image: "img/57_noise.png", signal: false},
  //{image: "img/58_noise.png", signal: false},
  //{image: "img/59_noise.png", signal: false},
  //{image: "img/60_noise.png", signal: false},
  //{image: "img/61_noise.png", signal: false},
  //{image: "img/62_noise.png", signal: false},
  //{image: "img/63_noise.png", signal: false},
  //{image: "img/64_noise.png", signal: false},
  //{image: "img/65_noise.png", signal: false},
  //{image: "img/66_noise.png", signal: false},
  //{image: "img/67_noise.png", signal: false},
  //{image: "img/68_noise.png", signal: false},
  //{image: "img/69_noise.png", signal: false},
  //{image: "img/70_noise.png", signal: false},
  //{image: "img/71_noise.png", signal: false},
  //{image: "img/72_noise.png", signal: false},
  //{image: "img/73_noise.png", signal: false},
  //{image: "img/74_noise.png", signal: false},
  //{image: "img/75_noise.png", signal: false},
  //{image: "img/76_noise.png", signal: false},
  //{image: "img/77_noise.png", signal: false},
  //{image: "img/78_noise.png", signal: false},
  //{image: "img/79_noise.png", signal: false},
  //{image: "img/80_noise.png", signal: false},
  //{image: "img/81_noise.png", signal: false},
  //{image: "img/82_noise.png", signal: false},
  //{image: "img/83_noise.png", signal: false},

  //{image: "img/85_noise.png", signal: false},
  //{image: "img/86_noise.png", signal: false},

  //{image: "img/88_noise.png", signal: false},
  //{image: "img/89_noise.png", signal: false},
  //{image: "img/90_noise.png", signal: false},
  //{image: "img/91_noise.png", signal: false},
  //{image: "img/92_noise.png", signal: false},
  //{image: "img/93_noise.png", signal: false},
  //{image: "img/94_noise.png", signal: false},
  //{image: "img/95_noise.png", signal: false},
  //{image: "img/96_noise.png", signal: false},
  //{image: "img/97_noise.png", signal: false},
  //{image: "img/98_noise.png", signal: false},
  //{image: "img/99_noise.png", signal: false},
  //{image: "img/100_noise.png", signal: false},
  //{image: "img/101_noise.png", signal: false},
  //{image: "img/102_noise.png", signal: false},
  //{image: "img/103_noise.png", signal: false},
  //{image: "img/104_noise.png", signal: false},
  //{image: "img/105_noise.png", signal: false},
  //{image: "img/106_noise.png", signal: false},
  //{image: "img/107_noise.png", signal: false},
  //{image: "img/108_noise.png", signal: false},
  //{image: "img/109_noise.png", signal: false},
  //{image: "img/110_noise.png", signal: false},
  //{image: "img/111_noise.png", signal: false},
  //{image: "img/112_noise.png", signal: false},
  //{image: "img/113_noise.png", signal: false},
  //{image: "img/114_noise.png", signal: false},
  //{image: "img/115_noise.png", signal: false},
  //{image: "img/116_noise.png", signal: false},
  //{image: "img/117_noise.png", signal: false},
  //{image: "img/118_noise.png", signal: false},
  //{image: "img/119_noise.png", signal: false},
  //{image: "img/120_noise.png", signal: false},
  //{image: "img/121_noise.png", signal: false},
  //{image: "img/122_noise.png", signal: false},
  //{image: "img/123_noise.png", signal: false},
  //{image: "img/124_noise.png", signal: false},
  //{image: "img/125_noise.png", signal: false},

  {house: "51", image: "img/house_2_40.png", signal: true},
  {house: "52", image: "img/house_2_50.png", signal: true},
  {house: "53", image: "img/house_2_60.png", signal: true},
  {house: "54", image: "img/house_2_70.png", signal: true},
  {house: "55", image: "img/house_2_80.png", signal: true},
  {house: "56", image: "img/house_3_40.png", signal: true},
  {house: "57", image: "img/house_3_50.png", signal: true},
  {house: "58", image: "img/house_3_60.png", signal: true},
  {house: "59", image: "img/house_3_70.png", signal: true},
  {house: "60", image: "img/house_3_80.png", signal: true},
  {house: "61", image: "img/house_5_40.png", signal: true},
  {house: "62", image: "img/house_5_50.png", signal: true},
  {house: "63", image: "img/house_5_60.png", signal: true},
  {house: "64", image: "img/house_5_70.png", signal: true},
  {house: "65", image: "img/house_5_80.png", signal: true},
  {house: "66", image: "img/house_6_40.png", signal: true},
  {house: "67", image: "img/house_6_50.png", signal: true},
  {house: "68", image: "img/house_6_60.png", signal: true},
  {house: "69", image: "img/house_6_70.png", signal: true},
  {house: "70", image: "img/house_6_80.png", signal: true},
  {house: "71", image: "img/house_9_40.png", signal: true},
  {house: "72", image: "img/house_9_50.png", signal: true},
  {house: "73", image: "img/house_9_60.png", signal: true},
  {house: "74", image: "img/house_9_70.png", signal: true},
  {house: "75", image: "img/house_9_80.png", signal: true},
  {house: "76", image: "img/house_10_40.png", signal: true},
  {house: "77", image: "img/house_10_50.png", signal: true},
  {house: "78", image: "img/house_10_60.png", signal: true},
  {house: "79", image: "img/house_10_70.png", signal: true},
  {house: "80", image: "img/house_10_80.png", signal: true},
  {house: "81", image: "img/house_12_40.png", signal: true},
  {house: "82", image: "img/house_12_50.png", signal: true},
  {house: "83", image: "img/house_12_60.png", signal: true},
  {house: "84", image: "img/house_12_70.png", signal: true},
  {house: "85", image: "img/house_12_80.png", signal: true},
  {house: "86", image: "img/house_13_40.png", signal: true},
  {house: "87", image: "img/house_13_50.png", signal: true},
  {house: "88", image: "img/house_13_60.png", signal: true},
  {house: "89", image: "img/house_13_70.png", signal: true},
  {house: "90", image: "img/house_13_80.png", signal: true},
  {house: "91", image: "img/house_16_40.png", signal: true},
  {house: "92", image: "img/house_16_50.png", signal: true},
  {house: "93", image: "img/house_16_60.png", signal: true},
  {house: "94", image: "img/house_16_70.png", signal: true},
  {house: "95", image: "img/house_16_80.png", signal: true},
  {house: "96", image: "img/house_21_40.png", signal: true},
  {house: "97", image: "img/house_21_50.png", signal: true},
  {house: "98", image: "img/house_21_60.png", signal: true},
  {house: "99", image: "img/house_21_70.png", signal: true},
  {house: "100", image: "img/house_21_80.png", signal: true},

  //{image: "img/house_22_40.png", signal: true},
  //{image: "img/house_22_50.png", signal: true},
  //{image: "img/house_22_60.png", signal: true},
  //{image: "img/house_22_70.png", signal: true},
  //{image: "img/house_22_80.png", signal: true},
  //{image: "img/house_23_40.png", signal: true},
  //{image: "img/house_23_50.png", signal: true},
  //{image: "img/house_23_60.png", signal: true},
  //{image: "img/house_23_70.png", signal: true},
  //{image: "img/house_23_80.png", signal: true},
  //{image: "img/house_24_40.png", signal: true},
  //{image: "img/house_24_50.png", signal: true},
  //{image: "img/house_24_60.png", signal: true},
  //{image: "img/house_24_70.png", signal: true},
  //{image: "img/house_24_80.png", signal: true},
  //{image: "img/house_26_40.png", signal: true},
  //{image: "img/house_26_50.png", signal: true},
  //{image: "img/house_26_60.png", signal: true},
  //{image: "img/house_26_70.png", signal: true},
  //{image: "img/house_26_80.png", signal: true},
  //{image: "img/house_29_40.png", signal: true},
  //{image: "img/house_29_50.png", signal: true},
  //{image: "img/house_29_60.png", signal: true},
  //{image: "img/house_29_70.png", signal: true},
  //{image: "img/house_29_80.png", signal: true},
  //{image: "img/house_31_40.png", signal: true},
  //{image: "img/house_31_50.png", signal: true},
  //{image: "img/house_31_60.png", signal: true},
  //{image: "img/house_31_70.png", signal: true},
  //{image: "img/house_31_80.png", signal: true},
  //{image: "img/house_32_40.png", signal: true},
  //{image: "img/house_32_50.png", signal: true},
  //{image: "img/house_32_60.png", signal: true},
  //{image: "img/house_32_70.png", signal: true},
  //{image: "img/house_32_80.png", signal: true},
  //{image: "img/house_34_40.png", signal: true},
  //{image: "img/house_34_50.png", signal: true},
  //{image: "img/house_34_60.png", signal: true},
  //{image: "img/house_34_70.png", signal: true},
  //{image: "img/house_34_80.png", signal: true},
  //{image: "img/house_36_40.png", signal: true},
  //{image: "img/house_36_50.png", signal: true},
  //{image: "img/house_36_60.png", signal: true},
  //{image: "img/house_36_70.png", signal: true},
  //{image: "img/house_36_80.png", signal: true},
  //{image: "img/house_37_40.png", signal: true},
  //{image: "img/house_37_50.png", signal: true},
  //{image: "img/house_37_60.png", signal: true},
  //{image: "img/house_37_70.png", signal: true},
  //{image: "img/house_37_80.png", signal: true},
  //{image: "img/house_41_40.png", signal: true},
  //{image: "img/house_41_50.png", signal: true},
  //{image: "img/house_41_60.png", signal: true},
  //{image: "img/house_41_70.png", signal: true},
  //{image: "img/house_41_80.png", signal: true},
  //{image: "img/house_42_40.png", signal: true},
  //{image: "img/house_42_50.png", signal: true},
  //{image: "img/house_42_60.png", signal: true},
  //{image: "img/house_42_70.png", signal: true},
  //{image: "img/house_42_80.png", signal: true},
  //{image: "img/house_43_40.png", signal: true},
  //{image: "img/house_43_50.png", signal: true},
  //{image: "img/house_43_60.png", signal: true},
  //{image: "img/house_43_70.png", signal: true},
  //{image: "img/house_43_80.png", signal: true},
  //{image: "img/house_44_40.png", signal: true},
  //{image: "img/house_44_50.png", signal: true},
  //{image: "img/house_44_60.png", signal: true},
  //{image: "img/house_44_70.png", signal: true},
  //{image: "img/house_44_80.png", signal: true},
  //{image: "img/house_49_40.png", signal: true},
  //{image: "img/house_49_50.png", signal: true},
  //{image: "img/house_49_60.png", signal: true},
  //{image: "img/house_49_70.png", signal: true},
  //{image: "img/house_49_80.png", signal: true},

]


//Urge to answer
var message_slow = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
  "<p class= 'instruction'>Please answer the question."+
  instruction_message_slow_randomization,
  choices: ['j', 'd']
}

var conditional = {
  timeline: [message_slow],
  conditional_function: function() {
    var last_trial = jsPsych.data.get().last().values()[0];
    // Shows only when no answer has been given
    if (last_trial.response === null) {
      return true;
    } else {
      return false;
    }
  }
};

// Instructions pattern
var instruction_pattern = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
    instruction_pattern_randomization +
    "<p class= 'instruction'>When you are ready, click anywhere on the keyboard to start",
    choices: "ALL_KEYS"
};

//Procedure faces
var categorization_faces = {
    type: jsPsychImageKeyboardResponse,
    stimulus: jsPsych.timelineVariable('image'),
    stimulus_width: 156,
    choices: ['j', 'd'],
    prompt: instruction_message_slow_randomization,
    trial_duration: 3500
};

//Randomize faces
var procedure_faces = {
  timeline: [cross, categorization_faces, conditional],
  timeline_variables: faces,
  randomize_order: true,
  data: {
      number: jsPsych.timelineVariable('faces'),
      name: jsPsych.timelineVariable('image'),
      group: jsPsych.timelineVariable('signal'),
    },
};

//Procedure houses
var categorization_houses = {
    type: jsPsychImageKeyboardResponse,
    stimulus: jsPsych.timelineVariable('image'),
    stimulus_width: 156,
    choices: ['j', 'd'],
    prompt: instruction_message_slow_randomization,
    trial_duration: 3500
};

//Randomize houses
var procedure_houses = {
  timeline: [cross, categorization_houses, conditional],
  timeline_variables: houses,
  randomize_order: true,
  data: {
      number: jsPsych.timelineVariable('house'),
      name: jsPsych.timelineVariable('image'),
      group: jsPsych.timelineVariable('signal'),
    },
};

//Task pattern randomization  
var procedure_pattern = {
  timeline: (function() {
    switch (faces_houses_randomization) {

      case "faces_pattern":
        return [procedure_faces];

      case "houses_pattern":
        return [procedure_houses];

    }
  })()
};

//Instruction Scenario Attention event et non events
var instruction_conspiracy = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus:
  "<p class= 'instruction'>In this task, you will read short descriptions of events. "+
  "<p class= 'instruction'>For each event, we ask you to judge whether you believe that these events actually took place.<br>"+
  instruction_conspiracy_randomization+
  "<p class= 'instruction'>When you are ready, click anywhere on the keyboard to start",
  choices: "ALL_KEYS"
};

// Conspiracy
var scenario= [
  
 {number: "1",
  name: "tobacco",
  scenario: "A tobacco company conducted laboratory studies to investigate the effects of tobacco on health. These studies revealed the carcinogenic nature of tobacco. Nonetheless, the company and other tobacco industries publicly denied these scientific findings. Instead, they promoted the false benefits of tobacco through misleading advertisements endorsed by doctors.",
  conspiracy: true,
  },

  {number: "2",
  name: "snowden",
  scenario: "The US and UK governments employed mass surveillance programs to access citizens' smartphone data, including contacts, text messages, phone conversations, GPS coordinates, and Internet connection data. These practices were based on agreements between major companies such as Apple, Facebook, Google and Microsoft, and national security agencies.",
  conspiracy: true,
  },
  
  {number: "3",
  name: "watergate",
  scenario: "The re-election committee of an outgoing US president orchestrated a large-scale operation of political sabotage, including illegal wiretapping, document theft, and intimidation against their political opponents. The president was aware of the operation and attempted to cover it up by concealing facts and obstructing the investigation.",
  conspiracy: true,
  },
   
  {number: "4",
  name: "cont_blood",
  scenario: "Some French doctors and senior officials knowingly allowed patients to receive HIV-infected blood transfusions based on economic and financial considerations, disregarding moral and health considerations.",
  conspiracy: true,
  },
   
  {number: "5",
  name: "mk_ultra",
  scenario: "The US intelligence services established a secret program to develop mind and behaviour manipulation techniques, using drugs, hypnosis, or sensory deprivation. Experimental subjects were recruited without their consent and included psychiatric hospital patients, prisoners, prostitutes, and soldiers.",
  conspiracy: true,
  },
   
  {number: "6",
  name: "irangate",
  scenario: "Despite the US government's prohibition on weapons sales to Iran, some government members clandestinely conducted weapons transactions with Iran to negotiate the release of American hostages. The proceeds from these sales were then diverted to finance a rebel group engaged in guerrilla operations in South America.",
  conspiracy: true,
  },
   
  {number: "7",
  name: "dieselgate",
  scenario: "A car manufacturer tried to bypass environmental regulations by using software to falsify emissions data for some of its vehicles. The software falsified emissions tests to portray the vehicles as less polluting than they actually were.",
  conspiracy: true,
  },
   
  {number: "8",
  name: "adm_Irak",
  scenario: "The US government provided false evidence of the presence of mass destruction weapons (including nuclear, chemical, and biological weapons) to justify a military intervention in Iraq.",
  conspiracy: true,
  },
   
  {number: "9",
  name: "russian_campaign",
  scenario: "During democratic elections in Germany, the USA, France, the Netherlands, and the UK, actors linked to the Russian government engaged in information manipulation campaigns to polarize debates and influence election results. These activities included hacking and the targeted dissemination of disinformation via social media.",
  conspiracy: true,
  },
   
  {number: "10",
  name: "panama",
  scenario: "The leaders of several European countries, including Russia, Ukraine, and Iceland, have been implicated in concealing financial activities through the use of shell companies, often for tax evasion purposes.",
  conspiracy: true,
},
  
  {number: "11",
  name: "cambridge_analytica",
  scenario: "A British political consulting firm illegally obtained and exploited personal data from social network users for political manipulation and influence purposes. The data were used to create psychological and behavioral profiles for personalized political advertisements during the Brexit debates.",
  conspiracy: true,
},
   
  {number: "12",
  name: "hacking_team",
  scenario: "An Italian cybersecurity company turned out to specialize in the development and sale of surveillance software to governments and intelligence services in countries such as Saudi Arabia, Egypt, the United Arab Emirates, Morocco, Sudan and Kazakhstan.",
  conspiracy: true,
  },
   
  {number: "13",
  name: "fifa",
  scenario: "In the world of soccer, a vast network of corruption on a global scale involved FIFA executives, sports marketing companies, the media, and government officials. Corruption acts such as bribes, illegal commissions and fraud in various fields were perpetrated. Millions of dollars were secretly exchanged to influence political decisions and enrich those involved.",
  conspiracy: true,
  },
   
  {number: "14",
  name: "tonkin",
  scenario: "To justify military escalation in the Vietnam War, the US administration claimed that US warships had been attacked by the North Vietnamese navy. Actually, these attacks never took place.",
  conspiracy: true,
  },
   
  {number: "15",
  name: "tuskeegee",
  scenario: "In a series of studies designed to understand the natural evolution of syphilis, the US Public Health Service and one of its universities concealed their diagnosis from African-American men and made them believe that they were receiving medical care for their condition, when, in fact, these men were left untreated even after the discovery of an effective cure.",
  conspiracy: true,
 },
   
  {number: "16",
  name: "lavon",
  scenario: "Israeli intelligence services attempted to carry out a bomb attack on Western facilities in Egypt and to pass it off as attack by Egyptian extremists. The aim was to discredit the Egyptian government and encourage Western countries to maintain their support for Israel.",
  conspiracy: true,
  },
   
  {number: "17",
  name: "ajax",
  scenario: "American and British intelligence services orchestrated clandestine actions, propaganda, demonstrations, and political manipulation to foster a coup d'état against the Iranian prime minister who sought to nationalize the country's oil industry. Their aim was to preserve their economic and geopolitical interests in Iran.",
  conspiracy: true,
  },
   
  {number: "18",
  name: "paperclip",
  scenario: "The US secretly integrated Nazi scientists into military and scientific research and development programs, allowing them to escape prosecution and enjoy immunity in exchange for their expertise.",
  conspiracy: true,
  },
   
  {number: "19",
  name: "condor",
  scenario: "Several Latin American countries, including Argentina, Chile, Paraguay, Uruguay, and Brazil, coordinated efforts to implement cross-border actions of political repression, including surveillance, kidnapping, torture, and assassination of political dissidents and activists suspected of threatening the regimes in power.",
  conspiracy: true,
  },
   
  {number: "20",
  name: "hormone",
  scenario: "Growth hormones contaminated with brain-damaging substances were marketed even though French laboratories and health authorities were aware of the contamination risks. The pharmaceutical companies marketing them chose to withhold contamination information for financial reasons.",
  conspiracy: true,
  },
   
  {number: "21",
  name: "sugar_indus",
  scenario: "The sugar industry funded research that aimed at minimizing the links between sugar and health problems. These studies were designed to emphasize other factors, such as saturated fats, as primary risk factors for heart disease.",
  conspiracy: true,
  },
  
  {number: "22",
  name: "climat_indus",
  scenario: "Some major oil companies undertook disinformation campaigns to sow doubt about the reality of climate change and the underlying role of fossil fuels. These companies deliberately downplayed the effects of climate change and exerted pressure to block policies combating global warming.",
  conspiracy: true,
  },
  
  {number: "23",
  name: "rainbow_warrior",
  scenario: "French intelligence services organized a bomb attack on a Greenpeace ship to halt its activities against French nuclear testing in the Pacific.",
  conspiracy: true,
  },
  
  {number: "24",
  name: "sterilization",
  scenario: "The Peruvian government implemented a program of forced sterilization of thousands of indigenous women to control births within this population.",
  conspiracy: true,
  },
  
  {number: "25",
  name: "chaos",
  scenario: "The US intelligence services conducted a secret operation to monitor and infiltrate anti-government groups and movements involved in protests against the Vietnam War.",
  conspiracy: true,
  },
  
  {number: "26",
  name: "afrikaner_broed",
  scenario: "A South African secret organization composed of descendants of Dutch settlers helped maintain and promote the apartheid system of racial segregation.",
  conspiracy: true,
  },
  
  {number: "27",
  name: "dsk",
  scenario: "Political opponents of a French presidential candidate orchestrated his arrest on false charges of sexual assault to discredit him during his presidential campaign.",
  conspiracy: false,
  },
  
  {number: "28",
  name: "paris_river",
  scenario: "The technical services of the French state deliberately triggered the flooding of a valley upstream from Paris. This action resulted in significant material damage to local populations, done in favor of protecting the capital, which was also threatened by rising waters.",
  conspiracy: false,
  },
  
  {number: "29",
  name: "kennedy",
  scenario: "The US intelligence services orchestrated the assassination of a US president due to disagreements with him, particularly regarding military operations.",
  conspiracy: false,
  },
  
  {number: "30",
  name: "great_rep",
  scenario: "Some European politicians and intellectuals are encouraging and planning the replacement of European population by people from Africa, with the aim —among others— of destroying white European identities.",
  conspiracy: false,
  },
   
  {number: "31",
  name: "freemason",
  scenario: "Members of Masonic lodges belonging to the intellectual and political elite played a leading role in the planning of the French Revolution. They overthrew the monarchy and established a republic to promote their economic interests and consolidate their political power.",
  conspiracy: false,
  },
   
  {number: "32",
  name: "new_world_order",
  scenario: "Wealthy and influential families aspire to establish a world government by uniting all nations under centralized economic and media control, to institute a global police state.",
  conspiracy: false,
  },
   
  {number: "33",
  name: "climate_change",
  scenario: "Governments and companies create data on climate change and use them to justify implementing new taxes and regulations, and exert greater control over the economy.",
  conspiracy: false,
  },
   
  {number: "34",
  name: "aids",
  scenario: "Western countries engineered and disseminated the AIDS virus to harm politically unstable regions, developing countries, and strategically significant areas. The African continent has been among the regions most affected by these practices with the intentional weakening of local populations contributing to their dependency on pharmaceutical companies.",
  conspiracy: false,
  },
   
  {number: "35",
  name: "ben_laden",
  scenario: "The US secret services orchestrated the arrest and reported the death of Osama bin Laden, the founder of Al Qaeda who actually died several years earlier. This media maneuver aimed at bolstering the popularity of the incumbent president.",
  conspiracy: false,
  },
  
  {number: "36",
  name: "chemtrail",
  scenario: "The trails left by aircraft contain chemicals whose existence and function are hidden from the public by governments.",
  conspiracy: false,
  },
   
  {number: "37",
  name: "agro_indus",
  scenario: "The agri-food industries are deliberately poisoning the population to benefit pharmaceutical industries and increase profits.",
  conspiracy: false,
  },
   
  {number: "38",
  name: "sept_11th",
  scenario: "Despite being aware of the preparation of a terrorist attack by Al-Qaeda, the US government allowed events to unfold in order to justify military interventions in the Middle East and thus to defend its financial interests.",
  conspiracy: false,
  },
   
  {number: "39",
  name: "plane",
  scenario: "The plane crash which resulted in the deaths of the former Polish prime minister and many other government members was organized by the political opposition with the assistance of Russian agents.",
  conspiracy: false,
  },
   
  {number: "40",
  name: "haarp",
  scenario: "The US government has access to secret technology enabling it to manipulate weather conditions and induce natural disasters such as storms and cyclones. It uses this technology to create crises and manipulate the media agenda and migratory flows.",
  conspiracy: false,
  },
   
  {number: "41",
  name: "hydroxychloroquine",
  scenario: "Albeit being effective against COVID-19, the French government refused to recommend hydroxychloroquine as a treatment to allow pharmaceutical companies to develop vaccines that are more lucrative.",
  conspiracy: false,
  },
   
  {number: "42",
  name: "covid_lab",
  scenario: "The Chinese government created COVID-19 in a laboratory and deliberately used it as a biological weapon to weaken Western countries economically and geopolitically.",
  conspiracy: false,
  },
   
  {number: "43",
  name: "hepatitis _B_vaccine",
  scenario: "Some scientists have been bribed by pharmaceutical companies to manipulate data and conceal the fact that the hepatitis B vaccine could foster the development of multiple sclerosis.",
  conspiracy: false,
  },
   
  {number: "44",
  name: "moon",
  scenario: "During the Cold War, the US government and NASA staged the successful Apollo lunar landing missions as a demonstration of force against the Russians.",
  conspiracy: false,
  }, 
   
  {number: "45",
  name: "gmo",
  scenario: "Some agri-food companies driven by economic motives continued to market GMOs (genetically modified organisms) after the publication of a scientific report demonstrating their harmfulness.",
  conspiracy: false,
  },
  
  {number: "46",
  name: "lottery",
  scenario: "Some governments and secret groups manipulate and rig winning lottery numbers to prevent individuals with modest incomes from becoming wealthy and to take some of the population's money.",
  conspiracy: false,
  },
  
  {number: "47",
  name: "beverage_indus",
  scenario: "Some soda companies secretly add caffeine to their recipes to create a dependency on their products and ultimately generate more profits.",
  conspiracy: false,
  },
  
  {number: "48",
  name: "reaction_time",
  scenario: "Some media outlets fabricate the reactions of public figures with whom they politically disagree when these figures appear on television. The aim is to portray them as less competent and, ultimately, to influence public opinion.",
  conspiracy: false,
  },
  
  {number: "49",
  name: "jew",
  scenario: "Jewish intellectuals, politicians, and businessmen control governments, media and financial institutions to foster the interests of the Jewish community.",
  conspiracy: false,
  },
   
  {number: "50",
  name: "lady_diana",
  scenario: "At the request of the royal family, the British intelligence services murdered a Princess of Wales, making it seem like a car accident.",
  conspiracy: false,
  },
  
  {number: "51",
  name: "harmful_waves",
  scenario: "To protect their profits, telecom companies conceal scientific data indicating that electromagnetic waves emitted by electronic devices such as cell phones, cell phone antennas, and wireless networks have harmful effects on human health (they can cause cancer, sleep disorders, etc.).",
  conspiracy: false,
  },
  
  {number: "52",
  name: "lsd_cia",
  scenario: "As part of a covert operation, the US intelligence services poisoned the inhabitants of a French village with LSD transported by airplane. As a result, 5 people died and 50 were committed.",
  conspiracy: false
},
]

//Procedure Categorization
var categorization_conspiracy = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: function(){
  return "<p class='instructions'>"+jsPsych.timelineVariable ('scenario')+"</p>" + "<p class='stimuli'>In your opinion, this statement is...<br></p>"+
  message_randomization},
  choices: ['j', 'd']
}


var procedure_conspiracy = {
  timeline: [categorization_conspiracy],
  timeline_variables: scenario,
  randomize_order: true,
    data: {
      number: jsPsych.timelineVariable('number'),
      name: jsPsych.timelineVariable('name'),
      group: jsPsych.timelineVariable('conspiracy'),
    },
  }      
        
//Survey
var instruction_questionnary = {
  type: jsPsychHtmlButtonResponse,
  stimulus: "<p class='instructions_questionnary'>The tasks are now complete. We are now going to ask you a few questions about yourself and your worldview.</p>" ,
  choices: ['Continue']
}

//Attention check
var attention_check = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>When asked for your favorite color, please enter the word baguette instead in the box below.</p>" +
              "<p class='instructions_questionnary'>Based on the text above, what is your favorite color?</p>",
      name: 'attention_check',
      required: true
    }
  ],
  button_label: 'Continue'
}

///Questionnary CMQ
var cmq_label = [
  "<br>0%<br><br>certainly not", 
  "<br>10%<br><br>extremely unlikely",
  "<br>20%<br><br>very unlikely",
  "<br>30%<br><br>unlikely",
  "<br>40%<br><br>somewhat unlikely",
  "<br>50%<br><br>undecided",
  "<br>60%<br><br>somewhat likely",
  "<br>70%<br><br>likely",
  "<br>80%<br><br>very likely", 
  "<br>90%<br><br>extremely likely", 
  "<br>100%<br><br>certainly"
  ];
          
var cmq_questionnary = {
  type: jsPsychSurveyLikert,
  preamble:
  "<p class='instructions_questionnary'>For each statement below, please choose the appropriate number to indicate the extent to which you think these statements are true.</br></p>"+ 
  "<p class='instructions_questionnary'>There is no objectively true or false answer, we are interested in your personal opinions.</p>"+
  "<p class='instructions_questionnary'>I think that...",
  questions: [
       {prompt: "many very important things happen in the world, which the public is never informed about.", name: 'cmq_1', labels: cmq_label, required: true},
       {prompt: "politicians usually do not tell us the true motives for their decisions.", name: 'cmq_2', labels: cmq_label, required: true},
       {prompt: "government agencies closely monitor all citizens.", name: 'cmq_3', labels: cmq_label, required: true},
       {prompt: "events which superficially seem to lack a connection are often the result of secret activities.", name: 'cmq_4', labels: cmq_label, required: true},
       {prompt: "there are secret organizations that greatly influence political decisions.", name: 'cmq_5', labels: cmq_label, required: true},  
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

//Task randomization      
var task_randomization = jsPsych.randomization.sampleWithoutReplacement(["pattern_first", "conspiracy_first"], 1)[0];

var procedure = {
  timeline: (function() {
    switch (task_randomization) {

      case "pattern_first":
        return [instruction_pattern, procedure_pattern, attention_check, instruction_conspiracy, procedure_conspiracy];

      case "conspiracy_first":
        return [instruction_conspiracy, procedure_conspiracy, attention_check, instruction_pattern, procedure_pattern];

    }
  })()
};

/// Demographic Questions
var instruction_demographic_questionnary = {
  type: jsPsychHtmlButtonResponse,
  stimulus:
  "<p class='instructions_questionnary'>You are almost finished with the study. Please answer these last questions.</p>",
  choices: ['Continue']
}
          
var gender = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>What gender do you identify as?</p>", 
      options: ["Woman", "Man","Other"],
      name: 'gender',
      required: true,
      horizontal: true
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}
          
var age = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>How old are you? (in years, just a number, for instance 32)</p>",
      placeholder: 'XX',
      name: 'age',
      required: true
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

var search_check = {
  type: jsPsychSurveyMultiSelect,
  questions: [
    {
      prompt: "<p class='instructions_questionnary'>Did you research any of the events on the Internet during the task?</p>" +
      "<p class='instructions_questionnary'>Please answer this question honestly. We assure you that your answer will have no impact on your remuneration.</p>", 
      options: ["yes", "no"],
      name: 'research_check',
      required: true,
      horizontal: true
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

var comment = {
  type: jsPsychSurveyText,
  questions: [
    {
      prompt: "<p class='instructions'>Do you have any comments about the study?</p>",
      name: 'comment',
      rows: 5
    }
  ],
  required_error: "Please, answer all questions.",
  button_label: 'Continue'
}

//prolific ----------------------------------------------------------------------------------
var prolific = {
  type: jsPsychHtmlKeyboardResponse,
  stimulus: "<p class='instructions'>You are finished with the last task. Thanks for participating!</p>"+
  "<p class='instructions'>Please wait a moment, you will automatically be redirected to prolific.</p>",
  trial_duration: 3000,
  choices: "NO_KEYS",
  on_finish: function(){
  window.location.href = "https://app.prolific.com/submissions/complete?cc=XXX"; // To complete
  }
}
var prolific_id = jsPsych.data.getURLVariable('PROLIFIC_PID');
var study_id = jsPsych.data.getURLVariable('STUDY_ID');
var session_id = jsPsych.data.getURLVariable('SESSION_ID');
          
//Save data ---------------------------------------------------------------------------------
const subject_id = jsPsych.randomization.randomID(10);
const filename = `${subject_id}.csv`;
const experiment_id = "hQWwFhRSIyOs";

jsPsych.data.addProperties({
  subject_id: subject_id,
  prolific_id: prolific_id,
  study_id: study_id,
  session_id: session_id,
  task_randomization: task_randomization,
  conspiracy_button_randomization : conspiracy_button_randomization,
  pattern_button_randomization : pattern_button_randomization,
  faces_houses_randomization : faces_houses_randomization,
})

var save_data = {
  type: jsPsychPipe,
  action: "save",
  experiment_id: experiment_id,
  filename: filename,
  data_string: ()=>jsPsych.data.get().csv()
}

//timeline
timeline.push 
  (browser_check,
  welcome,
  procedure,
  instruction_questionnary,
  cmq_questionnary,
  instruction_demographic_questionnary,
  gender,
  age,
  search_check,
  comment,
  save_data,
  prolific
  )

jsPsych.run(timeline)