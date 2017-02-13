$(document).ready(function() {
  // Get JSON data
  treeData = {
    "name": "Education, training and skills",
    "parents": [

    ],
    "children": [
      {
        "name": "School curriculum",
        "parents": [
          "Education, training and skills"
        ],
        "children": [
          {
            "name": "Primary curriculum, key stage 1",
            "parents": [
              "School curriculum"
            ],
            "children": [
              {
                "name": "Tests",
                "parents": [
                  "Primary curriculum, key stage 1"
                ],
                "children": [

                ],
                "number_of_tagged_content": 98,
                "number_of_tagged_guidance_content": 51
              },
              {
                "name": "Phonics",
                "parents": [
                  "Primary curriculum, key stage 1"
                ],
                "children": [

                ],
                "number_of_tagged_content": 91,
                "number_of_tagged_guidance_content": 47
              },
              {
                "name": "Assessments",
                "parents": [
                  "Primary curriculum, key stage 1"
                ],
                "children": [

                ],
                "number_of_tagged_content": 127,
                "number_of_tagged_guidance_content": 62
              },
              {
                "name": "Science",
                "parents": [
                  "Primary curriculum, key stage 1"
                ],
                "children": [

                ],
                "number_of_tagged_content": 8,
                "number_of_tagged_guidance_content": 2
              },
              {
                "name": "Maths",
                "parents": [
                  "Primary curriculum, key stage 1"
                ],
                "children": [

                ],
                "number_of_tagged_content": 16,
                "number_of_tagged_guidance_content": 3
              },
              {
                "name": "English",
                "parents": [
                  "Primary curriculum, key stage 1"
                ],
                "children": [

                ],
                "number_of_tagged_content": 17,
                "number_of_tagged_guidance_content": 2
              },
              {
                "name": "Programmes of study",
                "parents": [
                  "Primary curriculum, key stage 1"
                ],
                "children": [

                ],
                "number_of_tagged_content": 0,
                "number_of_tagged_guidance_content": 0
              }
            ],
            "number_of_tagged_content": 60,
            "number_of_tagged_guidance_content": 5
          },
          {
            "name": "Exam regulation and administration",
            "parents": [
              "School curriculum"
            ],
            "children": [

            ],
            "number_of_tagged_content": 362,
            "number_of_tagged_guidance_content": 61
          },
          {
            "name": "Secondary curriculum, key stage 3 and key stage 4 (GCSEs)",
            "parents": [
              "School curriculum"
            ],
            "children": [
              {
                "name": "GCSE changes and reforms",
                "parents": [
                  "Secondary curriculum, key stage 3 and key stage 4 (GCSEs)"
                ],
                "children": [

                ],
                "number_of_tagged_content": 131,
                "number_of_tagged_guidance_content": 14
              },
              {
                "name": "Key stage 3 and 4 exam marking, qualifications and results",
                "parents": [
                  "Secondary curriculum, key stage 3 and key stage 4 (GCSEs)"
                ],
                "children": [

                ],
                "number_of_tagged_content": 238,
                "number_of_tagged_guidance_content": 39
              },
              {
                "name": "GCSE subject content and requirements",
                "parents": [
                  "Secondary curriculum, key stage 3 and key stage 4 (GCSEs)"
                ],
                "children": [

                ],
                "number_of_tagged_content": 149,
                "number_of_tagged_guidance_content": 45
              }
            ],
            "number_of_tagged_content": 121,
            "number_of_tagged_guidance_content": 12
          },
          {
            "name": "Spiritual, moral, social and cultural development",
            "parents": [
              "School curriculum"
            ],
            "children": [

            ],
            "number_of_tagged_content": 33,
            "number_of_tagged_guidance_content": 4
          },
          {
            "name": "Key stage 5 (AS and A Levels)",
            "parents": [
              "School curriculum"
            ],
            "children": [
              {
                "name": "AS and A level subject content and requirements",
                "parents": [
                  "Key stage 5 (AS and A Levels)"
                ],
                "children": [

                ],
                "number_of_tagged_content": 173,
                "number_of_tagged_guidance_content": 59
              },
              {
                "name": "Key stage 5 exam marking, qualifications and results",
                "parents": [
                  "Key stage 5 (AS and A Levels)"
                ],
                "children": [

                ],
                "number_of_tagged_content": 160,
                "number_of_tagged_guidance_content": 14
              },
              {
                "name": "AS and A level changes and reforms",
                "parents": [
                  "Key stage 5 (AS and A Levels)"
                ],
                "children": [

                ],
                "number_of_tagged_content": 108,
                "number_of_tagged_guidance_content": 13
              }
            ],
            "number_of_tagged_content": 43,
            "number_of_tagged_guidance_content": 14
          },
          {
            "name": "Personal, social, health and economic education",
            "parents": [
              "School curriculum"
            ],
            "children": [

            ],
            "number_of_tagged_content": 21,
            "number_of_tagged_guidance_content": 1
          },
          {
            "name": "Primary curriculum, key stage 2",
            "parents": [
              "School curriculum"
            ],
            "children": [
              {
                "name": "Maths",
                "parents": [
                  "Primary curriculum, key stage 2"
                ],
                "children": [

                ],
                "number_of_tagged_content": 23,
                "number_of_tagged_guidance_content": 3
              },
              {
                "name": "English",
                "parents": [
                  "Primary curriculum, key stage 2"
                ],
                "children": [

                ],
                "number_of_tagged_content": 17,
                "number_of_tagged_guidance_content": 3
              },
              {
                "name": "Assessments",
                "parents": [
                  "Primary curriculum, key stage 2"
                ],
                "children": [

                ],
                "number_of_tagged_content": 182,
                "number_of_tagged_guidance_content": 87
              },
              {
                "name": "Tests",
                "parents": [
                  "Primary curriculum, key stage 2"
                ],
                "children": [

                ],
                "number_of_tagged_content": 148,
                "number_of_tagged_guidance_content": 75
              },
              {
                "name": "Science",
                "parents": [
                  "Primary curriculum, key stage 2"
                ],
                "children": [

                ],
                "number_of_tagged_content": 12,
                "number_of_tagged_guidance_content": 2
              },
              {
                "name": "Programmes of study",
                "parents": [
                  "Primary curriculum, key stage 2"
                ],
                "children": [

                ],
                "number_of_tagged_content": 16,
                "number_of_tagged_guidance_content": 14
              }
            ],
            "number_of_tagged_content": 61,
            "number_of_tagged_guidance_content": 4
          },
          {
            "name": "Early years curriculum",
            "parents": [
              "School curriculum"
            ],
            "children": [

            ],
            "number_of_tagged_content": 103,
            "number_of_tagged_guidance_content": 27
          }
        ],
        "number_of_tagged_content": 57,
        "number_of_tagged_guidance_content": 2
      },
      {
        "name": "Running and managing a school",
        "parents": [
          "Education, training and skills"
        ],
        "children": [
          {
            "name": "Careers guidance in schools",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 25,
            "number_of_tagged_guidance_content": 2
          },
          {
            "name": "School food, accommodation, transport and uniform",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 29,
            "number_of_tagged_guidance_content": 12
          },
          {
            "name": "Setting up or changing the status of a school",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 195,
            "number_of_tagged_guidance_content": 75
          },
          {
            "name": "School planning",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 28,
            "number_of_tagged_guidance_content": 15
          },
          {
            "name": "School to school support",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 38,
            "number_of_tagged_guidance_content": 9
          },
          {
            "name": "School trips and extracurricular activity",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 11,
            "number_of_tagged_guidance_content": 1
          },
          {
            "name": "School admissions",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 41,
            "number_of_tagged_guidance_content": 13
          },
          {
            "name": "School governance",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 51,
            "number_of_tagged_guidance_content": 26
          },
          {
            "name": "Recruiting and managing non-teaching school staff",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 23,
            "number_of_tagged_guidance_content": 6
          },
          {
            "name": "School complaints and whistleblowing",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 10,
            "number_of_tagged_guidance_content": 7
          },
          {
            "name": "Data collection for pupil data and school censuses",
            "parents": [
              "Running and managing a school"
            ],
            "children": [

            ],
            "number_of_tagged_content": 173,
            "number_of_tagged_guidance_content": 155
          },
          {
            "name": "School buildings and land",
            "parents": [
              "Running and managing a school"
            ],
            "children": [
              {
                "name": "School buildings and land transactions",
                "parents": [
                  "School buildings and land"
                ],
                "children": [

                ],
                "number_of_tagged_content": 7,
                "number_of_tagged_guidance_content": 6
              },
              {
                "name": "School buildings and land guidelines",
                "parents": [
                  "School buildings and land"
                ],
                "children": [

                ],
                "number_of_tagged_content": 40,
                "number_of_tagged_guidance_content": 35
              }
            ],
            "number_of_tagged_content": 28,
            "number_of_tagged_guidance_content": 16
          }
        ],
        "number_of_tagged_content": 234,
        "number_of_tagged_guidance_content": 79
      },
      {
        "name": "Further and higher education, skills and vocational training",
        "parents": [
          "Education, training and skills"
        ],
        "children": [
          {
            "name": "Inspection and performance of further education providers",
            "parents": [
              "Further and higher education, skills and vocational training"
            ],
            "children": [
              {
                "name": "Inspection of further education and skills providers",
                "parents": [
                  "Inspection and performance of further education providers"
                ],
                "children": [

                ],
                "number_of_tagged_content": 73,
                "number_of_tagged_guidance_content": 19
              },
              {
                "name": "Inspection of residential provision in further education colleges",
                "parents": [
                  "Inspection and performance of further education providers"
                ],
                "children": [

                ],
                "number_of_tagged_content": 8,
                "number_of_tagged_guidance_content": 6
              },
              {
                "name": "Further education intervention notices and reports",
                "parents": [
                  "Inspection and performance of further education providers"
                ],
                "children": [

                ],
                "number_of_tagged_content": 5,
                "number_of_tagged_guidance_content": 2
              },
              {
                "name": "Student performance in further education",
                "parents": [
                  "Inspection and performance of further education providers"
                ],
                "children": [

                ],
                "number_of_tagged_content": 8,
                "number_of_tagged_guidance_content": 0
              },
              {
                "name": "Further education provider performance measures",
                "parents": [
                  "Inspection and performance of further education providers"
                ],
                "children": [

                ],
                "number_of_tagged_content": 34,
                "number_of_tagged_guidance_content": 23
              },
              {
                "name": "Performance data and Ofsted reports of further education providers",
                "parents": [
                  "Inspection and performance of further education providers"
                ],
                "children": [

                ],
                "number_of_tagged_content": 29,
                "number_of_tagged_guidance_content": 1
              }
            ],
            "number_of_tagged_content": 67,
            "number_of_tagged_guidance_content": 5
          },
          {
            "name": "Running a further or higher education institution",
            "parents": [
              "Further and higher education, skills and vocational training"
            ],
            "children": [

            ],
            "number_of_tagged_content": 56,
            "number_of_tagged_guidance_content": 39
          },
          {
            "name": "Further and higher education courses and qualifications",
            "parents": [
              "Further and higher education, skills and vocational training"
            ],
            "children": [

            ],
            "number_of_tagged_content": 80,
            "number_of_tagged_guidance_content": 42
          },
          {
            "name": "Further education financial management and data collection",
            "parents": [
              "Further and higher education, skills and vocational training"
            ],
            "children": [
              {
                "name": "Data collection for further education providers",
                "parents": [
                  "Further education financial management and data collection"
                ],
                "children": [

                ],
                "number_of_tagged_content": 26,
                "number_of_tagged_guidance_content": 20
              },
              {
                "name": "Financial management for further education providers",
                "parents": [
                  "Further education financial management and data collection"
                ],
                "children": [

                ],
                "number_of_tagged_content": 23,
                "number_of_tagged_guidance_content": 19
              },
              {
                "name": "Local authority further education financial reporting and assurance",
                "parents": [
                  "Further education financial management and data collection"
                ],
                "children": [

                ],
                "number_of_tagged_content": 8,
                "number_of_tagged_guidance_content": 8
              }
            ],
            "number_of_tagged_content": 7,
            "number_of_tagged_guidance_content": 5
          },
          {
            "name": "Adult and community learning",
            "parents": [
              "Further and higher education, skills and vocational training"
            ],
            "children": [

            ],
            "number_of_tagged_content": 31,
            "number_of_tagged_guidance_content": 13
          },
          {
            "name": "Careers guidance in further and higher education",
            "parents": [
              "Further and higher education, skills and vocational training"
            ],
            "children": [

            ],
            "number_of_tagged_content": 24,
            "number_of_tagged_guidance_content": 9
          },
          {
            "name": "Education in prisons",
            "parents": [
              "Further and higher education, skills and vocational training"
            ],
            "children": [

            ],
            "number_of_tagged_content": 14,
            "number_of_tagged_guidance_content": 6
          },
          {
            "name": "Apprenticeships, traineeships and internships",
            "parents": [
              "Further and higher education, skills and vocational training"
            ],
            "children": [
              {
                "name": "Apprenticeship skills and standards",
                "parents": [
                  "Apprenticeships, traineeships and internships"
                ],
                "children": [

                ],
                "number_of_tagged_content": 278,
                "number_of_tagged_guidance_content": 268
              },
              {
                "name": "Employers and training organisations",
                "parents": [
                  "Apprenticeships, traineeships and internships"
                ],
                "children": [

                ],
                "number_of_tagged_content": 57,
                "number_of_tagged_guidance_content": 32
              },
              {
                "name": "Traineeships",
                "parents": [
                  "Apprenticeships, traineeships and internships"
                ],
                "children": [

                ],
                "number_of_tagged_content": 13,
                "number_of_tagged_guidance_content": 8
              },
              {
                "name": "Internships",
                "parents": [
                  "Apprenticeships, traineeships and internships"
                ],
                "children": [

                ],
                "number_of_tagged_content": 7,
                "number_of_tagged_guidance_content": 2
              },
              {
                "name": "Being an apprentice",
                "parents": [
                  "Apprenticeships, traineeships and internships"
                ],
                "children": [

                ],
                "number_of_tagged_content": 12,
                "number_of_tagged_guidance_content": 9
              },
              {
                "name": "Types of apprenticeships",
                "parents": [
                  "Apprenticeships, traineeships and internships"
                ],
                "children": [

                ],
                "number_of_tagged_content": 128,
                "number_of_tagged_guidance_content": 112
              }
            ],
            "number_of_tagged_content": 145,
            "number_of_tagged_guidance_content": 11
          },
          {
            "name": "Learning Records Service (LRS)",
            "parents": [
              "Further and higher education, skills and vocational training"
            ],
            "children": [

            ],
            "number_of_tagged_content": 18,
            "number_of_tagged_guidance_content": 15
          },
          {
            "name": "Further education funding",
            "parents": [
              "Further and higher education, skills and vocational training"
            ],
            "children": [
              {
                "name": "Further education building and premises",
                "parents": [
                  "Further education funding"
                ],
                "children": [

                ],
                "number_of_tagged_content": 10,
                "number_of_tagged_guidance_content": 9
              },
              {
                "name": "Dance and drama funding for 16 to 19 year olds",
                "parents": [
                  "Further education funding"
                ],
                "children": [

                ],
                "number_of_tagged_content": 3,
                "number_of_tagged_guidance_content": 2
              },
              {
                "name": "European Social Fund (ESF) and skills funding",
                "parents": [
                  "Further education funding"
                ],
                "children": [

                ],
                "number_of_tagged_content": 12,
                "number_of_tagged_guidance_content": 8
              },
              {
                "name": "Free meals for 16 to 18 year olds",
                "parents": [
                  "Further education funding"
                ],
                "children": [

                ],
                "number_of_tagged_content": 4,
                "number_of_tagged_guidance_content": 3
              },
              {
                "name": "Further education funding data",
                "parents": [
                  "Further education funding"
                ],
                "children": [

                ],
                "number_of_tagged_content": 52,
                "number_of_tagged_guidance_content": 22
              }
            ],
            "number_of_tagged_content": 161,
            "number_of_tagged_guidance_content": 122
          }
        ],
        "number_of_tagged_content": 352,
        "number_of_tagged_guidance_content": 42
      },
      {
        "name": "Support for education work in other countries",
        "parents": [
          "Education, training and skills"
        ],
        "children": [

        ],
        "number_of_tagged_content": 9,
        "number_of_tagged_guidance_content": 0
      },
      {
        "name": "Pupil wellbeing, behaviour and attendance",
        "parents": [
          "Education, training and skills"
        ],
        "children": [
          {
            "name": "Pupil mental health and wellbeing",
            "parents": [
              "Pupil wellbeing, behaviour and attendance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 35,
            "number_of_tagged_guidance_content": 4
          },
          {
            "name": "Health and safety in schools",
            "parents": [
              "Pupil wellbeing, behaviour and attendance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 13,
            "number_of_tagged_guidance_content": 8
          },
          {
            "name": "School discipline and exclusions",
            "parents": [
              "Pupil wellbeing, behaviour and attendance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 43,
            "number_of_tagged_guidance_content": 10
          },
          {
            "name": "School attendance and absence",
            "parents": [
              "Pupil wellbeing, behaviour and attendance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 62,
            "number_of_tagged_guidance_content": 6
          },
          {
            "name": "Alternative provision and pupil referral units",
            "parents": [
              "Pupil wellbeing, behaviour and attendance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 28,
            "number_of_tagged_guidance_content": 7
          },
          {
            "name": "School bullying",
            "parents": [
              "Pupil wellbeing, behaviour and attendance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 20,
            "number_of_tagged_guidance_content": 3
          },
          {
            "name": "Safeguarding pupils",
            "parents": [
              "Pupil wellbeing, behaviour and attendance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 188,
            "number_of_tagged_guidance_content": 63
          }
        ],
        "number_of_tagged_content": 48,
        "number_of_tagged_guidance_content": 4
      },
      {
        "name": "School inspections and performance",
        "parents": [
          "Education, training and skills"
        ],
        "children": [
          {
            "name": "Inspection of local authority support for schools",
            "parents": [
              "School inspections and performance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 49,
            "number_of_tagged_guidance_content": 6
          },
          {
            "name": "Inspection of maintained schools and academies",
            "parents": [
              "School inspections and performance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 114,
            "number_of_tagged_guidance_content": 21
          },
          {
            "name": "School performance measures",
            "parents": [
              "School inspections and performance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 31,
            "number_of_tagged_guidance_content": 14
          },
          {
            "name": "Inspection of independent schools",
            "parents": [
              "School inspections and performance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 42,
            "number_of_tagged_guidance_content": 22
          },
          {
            "name": "Inspection of boarding and residential schools",
            "parents": [
              "School inspections and performance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 24,
            "number_of_tagged_guidance_content": 21
          },
          {
            "name": "Pupil performance in schools",
            "parents": [
              "School inspections and performance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 34,
            "number_of_tagged_guidance_content": 1
          },
          {
            "name": "School performance tables and Ofsted reports",
            "parents": [
              "School inspections and performance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 125,
            "number_of_tagged_guidance_content": 13
          },
          {
            "name": "Academy intervention notices and reports",
            "parents": [
              "School inspections and performance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 195,
            "number_of_tagged_guidance_content": 1
          },
          {
            "name": "Inspection of non-maintained schools",
            "parents": [
              "School inspections and performance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 1,
            "number_of_tagged_guidance_content": 1
          },
          {
            "name": "Inspection of British schools overseas",
            "parents": [
              "School inspections and performance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 7,
            "number_of_tagged_guidance_content": 4
          }
        ],
        "number_of_tagged_content": 182,
        "number_of_tagged_guidance_content": 24
      },
      {
        "name": "Education and funding for high needs, special educational needs and disability (SEND)",
        "parents": [
          "Education, training and skills"
        ],
        "children": [
          {
            "name": "Special educational needs and disability (SEND) code of practice",
            "parents": [
              "Education and funding for high needs, special educational needs and disability (SEND)"
            ],
            "children": [

            ],
            "number_of_tagged_content": 22,
            "number_of_tagged_guidance_content": 14
          },
          {
            "name": "Funding for special educational needs and disability (SEND)",
            "parents": [
              "Education and funding for high needs, special educational needs and disability (SEND)"
            ],
            "children": [

            ],
            "number_of_tagged_content": 38,
            "number_of_tagged_guidance_content": 12
          },
          {
            "name": "High needs funding",
            "parents": [
              "Education and funding for high needs, special educational needs and disability (SEND)"
            ],
            "children": [

            ],
            "number_of_tagged_content": 47,
            "number_of_tagged_guidance_content": 37
          },
          {
            "name": "Special educational needs and disability (SEND) support in education",
            "parents": [
              "Education and funding for high needs, special educational needs and disability (SEND)"
            ],
            "children": [

            ],
            "number_of_tagged_content": 50,
            "number_of_tagged_guidance_content": 12
          }
        ],
        "number_of_tagged_content": 110,
        "number_of_tagged_guidance_content": 6
      },
      {
        "name": "School and academy funding and provision",
        "parents": [
          "Education, training and skills"
        ],
        "children": [
          {
            "name": "Local authority schools funding",
            "parents": [
              "School and academy funding and provision"
            ],
            "children": [

            ],
            "number_of_tagged_content": 55,
            "number_of_tagged_guidance_content": 25
          },
          {
            "name": "Pupil premium and other school premiums ",
            "parents": [
              "School and academy funding and provision"
            ],
            "children": [

            ],
            "number_of_tagged_content": 54,
            "number_of_tagged_guidance_content": 26
          },
          {
            "name": "Funding for different types of schools and settings",
            "parents": [
              "School and academy funding and provision"
            ],
            "children": [
              {
                "name": "Alternative provision funding",
                "parents": [
                  "Funding for different types of schools and settings"
                ],
                "children": [

                ],
                "number_of_tagged_content": 7,
                "number_of_tagged_guidance_content": 3
              },
              {
                "name": "Faith schools funding",
                "parents": [
                  "Funding for different types of schools and settings"
                ],
                "children": [

                ],
                "number_of_tagged_content": 6,
                "number_of_tagged_guidance_content": 0
              },
              {
                "name": "Special schools funding",
                "parents": [
                  "Funding for different types of schools and settings"
                ],
                "children": [

                ],
                "number_of_tagged_content": 9,
                "number_of_tagged_guidance_content": 7
              },
              {
                "name": "Academy funding",
                "parents": [
                  "Funding for different types of schools and settings"
                ],
                "children": [

                ],
                "number_of_tagged_content": 75,
                "number_of_tagged_guidance_content": 49
              },
              {
                "name": "Early years funding",
                "parents": [
                  "Funding for different types of schools and settings"
                ],
                "children": [

                ],
                "number_of_tagged_content": 41,
                "number_of_tagged_guidance_content": 23
              },
              {
                "name": "Funding for 16 to 19 year olds in schools",
                "parents": [
                  "Funding for different types of schools and settings"
                ],
                "children": [

                ],
                "number_of_tagged_content": 44,
                "number_of_tagged_guidance_content": 32
              }
            ],
            "number_of_tagged_content": 28,
            "number_of_tagged_guidance_content": 13
          },
          {
            "name": "Schools forums",
            "parents": [
              "School and academy funding and provision"
            ],
            "children": [

            ],
            "number_of_tagged_content": 4,
            "number_of_tagged_guidance_content": 2
          },
          {
            "name": "Funding for school buildings and land",
            "parents": [
              "School and academy funding and provision"
            ],
            "children": [

            ],
            "number_of_tagged_content": 95,
            "number_of_tagged_guidance_content": 39
          },
          {
            "name": "Initial Teacher Training funding",
            "parents": [
              "School and academy funding and provision"
            ],
            "children": [

            ],
            "number_of_tagged_content": 21,
            "number_of_tagged_guidance_content": 21
          },
          {
            "name": "School places and capacity",
            "parents": [
              "School and academy funding and provision"
            ],
            "children": [

            ],
            "number_of_tagged_content": 88,
            "number_of_tagged_guidance_content": 7
          },
          {
            "name": "School Direct funding",
            "parents": [
              "School and academy funding and provision"
            ],
            "children": [

            ],
            "number_of_tagged_content": 13,
            "number_of_tagged_guidance_content": 11
          },
          {
            "name": "Free school meals (FSM) funding ",
            "parents": [
              "School and academy funding and provision"
            ],
            "children": [

            ],
            "number_of_tagged_content": 14,
            "number_of_tagged_guidance_content": 8
          }
        ],
        "number_of_tagged_content": 141,
        "number_of_tagged_guidance_content": 26
      },
      {
        "name": "Teaching and leadership",
        "parents": [
          "Education, training and skills"
        ],
        "children": [
          {
            "name": "Teacher training and professional development",
            "parents": [
              "Teaching and leadership"
            ],
            "children": [
              {
                "name": "Initial Teacher Training (ITT)",
                "parents": [
                  "Teacher training and professional development"
                ],
                "children": [

                ],
                "number_of_tagged_content": 118,
                "number_of_tagged_guidance_content": 38
              },
              {
                "name": "Teacher training providers",
                "parents": [
                  "Teacher training and professional development"
                ],
                "children": [

                ],
                "number_of_tagged_content": 33,
                "number_of_tagged_guidance_content": 14
              },
              {
                "name": "School leadership",
                "parents": [
                  "Teacher training and professional development"
                ],
                "children": [

                ],
                "number_of_tagged_content": 71,
                "number_of_tagged_guidance_content": 1
              },
              {
                "name": "National Professional Qualification for Headship (NPQH)",
                "parents": [
                  "Teacher training and professional development"
                ],
                "children": [

                ],
                "number_of_tagged_content": 2,
                "number_of_tagged_guidance_content": 2
              },
              {
                "name": "Qualified Teacher Status (QTS)",
                "parents": [
                  "Teacher training and professional development"
                ],
                "children": [

                ],
                "number_of_tagged_content": 10,
                "number_of_tagged_guidance_content": 4
              },
              {
                "name": "Subject Knowledge Enhancement (SKE)",
                "parents": [
                  "Teacher training and professional development"
                ],
                "children": [

                ],
                "number_of_tagged_content": 20,
                "number_of_tagged_guidance_content": 10
              }
            ],
            "number_of_tagged_content": 120,
            "number_of_tagged_guidance_content": 29
          },
          {
            "name": "Recruiting and managing teachers",
            "parents": [
              "Teaching and leadership"
            ],
            "children": [

            ],
            "number_of_tagged_content": 45,
            "number_of_tagged_guidance_content": 20
          },
          {
            "name": "Teacher pay, pensions and conditions",
            "parents": [
              "Teaching and leadership"
            ],
            "children": [

            ],
            "number_of_tagged_content": 90,
            "number_of_tagged_guidance_content": 6
          },
          {
            "name": "Teacher records",
            "parents": [
              "Teaching and leadership"
            ],
            "children": [

            ],
            "number_of_tagged_content": 2,
            "number_of_tagged_guidance_content": 2
          },
          {
            "name": "Teaching standards, misconduct and practice",
            "parents": [
              "Teaching and leadership"
            ],
            "children": [

            ],
            "number_of_tagged_content": 630,
            "number_of_tagged_guidance_content": 19
          }
        ],
        "number_of_tagged_content": 64,
        "number_of_tagged_guidance_content": 0
      },
      {
        "name": "Funding and finance for students",
        "parents": [
          "Education, training and skills"
        ],
        "children": [
          {
            "name": "Financial help for students who are parents or carers",
            "parents": [
              "Funding and finance for students"
            ],
            "children": [

            ],
            "number_of_tagged_content": 7,
            "number_of_tagged_guidance_content": 6
          },
          {
            "name": "Student loans, bursaries, and sponsorship",
            "parents": [
              "Funding and finance for students"
            ],
            "children": [

            ],
            "number_of_tagged_content": 32,
            "number_of_tagged_guidance_content": 24
          },
          {
            "name": "Financial help for international students in the UK",
            "parents": [
              "Funding and finance for students"
            ],
            "children": [

            ],
            "number_of_tagged_content": 2,
            "number_of_tagged_guidance_content": 0
          }
        ],
        "number_of_tagged_content": 7,
        "number_of_tagged_guidance_content": 7
      },
      {
        "name": "School and academy financial management and assurance",
        "parents": [
          "Education, training and skills"
        ],
        "children": [
          {
            "name": "Financial management, reporting and assurances for 16 to 19 year olds funding",
            "parents": [
              "School and academy financial management and assurance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 29,
            "number_of_tagged_guidance_content": 20
          },
          {
            "name": "Academy and academy trust finance and reporting",
            "parents": [
              "School and academy financial management and assurance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 81,
            "number_of_tagged_guidance_content": 52
          },
          {
            "name": "School procurement",
            "parents": [
              "School and academy financial management and assurance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 27,
            "number_of_tagged_guidance_content": 22
          },
          {
            "name": "Local authority schools financial reporting and assurance",
            "parents": [
              "School and academy financial management and assurance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 46,
            "number_of_tagged_guidance_content": 29
          },
          {
            "name": "School insurance and risk management",
            "parents": [
              "School and academy financial management and assurance"
            ],
            "children": [

            ],
            "number_of_tagged_content": 6,
            "number_of_tagged_guidance_content": 4
          }
        ],
        "number_of_tagged_content": 13,
        "number_of_tagged_guidance_content": 1
      },
      {
        "name": "Education of disadvantaged children",
        "parents": [
          "Education, training and skills"
        ],
        "children": [

        ],
        "number_of_tagged_content": 63,
        "number_of_tagged_guidance_content": 5
      }
    ],
    "number_of_tagged_content": 132,
    "number_of_tagged_guidance_content": 3
  }

  // Calculate total nodes, max label length
  var totalNodes = 0;
  var maxLabelLength = 0;
  // panning variables
  var panSpeed = 200;
  var panBoundary = 20; // Within 20px from edges will pan when dragging.
  // Misc. variables
  var i = 0;
  var duration = 750;
  var root;

  // size of the diagram
  var viewerWidth = 1448; //$(document).width();
  var viewerHeight = 815; //$(document).height();

  var tree = d3.layout.tree()
      .size([viewerHeight, viewerWidth]);

  // define a d3 diagonal projection for use by the node paths later on.
  var diagonal = d3.svg.diagonal()
      .projection(function(d) {
          return [d.y, d.x];
      });

  // A recursive helper function for performing some setup by walking through all nodes

  function visit(parent, visitFn, childrenFn) {
      if (!parent) return;

      visitFn(parent);

      var children = childrenFn(parent);
      if (children) {
          var count = children.length;
          for (var i = 0; i < count; i++) {
              visit(children[i], visitFn, childrenFn);
          }
      }
  }

  // Call visit function to establish maxLabelLength
  visit(treeData, function(d) {
      expand(d);
      totalNodes++;
      maxLabelLength = Math.max(d.name.length, maxLabelLength);

  }, function(d) {
      return d.children && d.children.length > 0 ? d.children : null;
  });


  // sort the tree according to the node names

  function sortTree() {
      tree.sort(function(a, b) {
          return b.name.toLowerCase() < a.name.toLowerCase() ? 1 : -1;
      });
  }
  // Sort the tree initially incase the JSON isn't in a sorted order.
  sortTree();

  // TODO: Pan function, can be better implemented.

  function pan(domNode, direction) {
      var speed = panSpeed;
      if (panTimer) {
          clearTimeout(panTimer);
          translateCoords = d3.transform(svgGroup.attr("transform"));
          if (direction == 'left' || direction == 'right') {
              translateX = direction == 'left' ? translateCoords.translate[0] + speed : translateCoords.translate[0] - speed;
              translateY = translateCoords.translate[1];
          } else if (direction == 'up' || direction == 'down') {
              translateX = translateCoords.translate[0];
              translateY = direction == 'up' ? translateCoords.translate[1] + speed : translateCoords.translate[1] - speed;
          }
          scaleX = translateCoords.scale[0];
          scaleY = translateCoords.scale[1];
          scale = zoomListener.scale();
          svgGroup.transition().attr("transform", "translate(" + translateX + "," + translateY + ")scale(" + scale + ")");
          d3.select(domNode).select('g.node').attr("transform", "translate(" + translateX + "," + translateY + ")");
          zoomListener.scale(zoomListener.scale());
          zoomListener.translate([translateX, translateY]);
          panTimer = setTimeout(function() {
              pan(domNode, speed, direction);
          }, 50);
      }
  }

  // Define the zoom function for the zoomable tree

  function zoom() {
      svgGroup.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }


  // define the zoomListener which calls the zoom function on the "zoom" event constrained within the scaleExtents
  var zoomListener = d3.behavior.zoom().scaleExtent([0.1, 3]).on("zoom", zoom);

  // define the baseSvg, attaching a class for styling and the zoomListener
  var baseSvg = d3.select("#tree-container").append("svg")
      .attr("width", viewerWidth)
      .attr("height", viewerHeight)
      .attr("class", "overlay")
      .call(zoomListener);


  // Helper functions for collapsing and expanding nodes.

  function collapse(d) {
      if (d.children) {
          d._children = d.children;
          d._children.forEach(collapse);
          d.children = null;
      }
  }

  function expand(d) {
      if (d._children) {
          d.children = d._children;
          d.children.forEach(expand);
          d._children = null;
      }
  }

  var overCircle = function(d) {
      selectedNode = d;
      updateTempConnector();
  };
  var outCircle = function(d) {
      selectedNode = null;
      updateTempConnector();
  };

  // Function to center node when clicked/dropped so node doesn't get lost when collapsing/moving with large amount of children.

  function centerNode(source) {
      scale = zoomListener.scale();
      x = -source.y0;
      y = -source.x0;
      x = x * scale + viewerWidth / 2;
      y = y * scale + viewerHeight / 2;
      d3.select('g').transition()
          .duration(duration)
          .attr("transform", "translate(" + x + "," + y + ")scale(" + scale + ")");
      zoomListener.scale(scale);
      zoomListener.translate([x, y]);
  }

  // Toggle children function

  function toggleChildren(d) {
      if (d.children) {
          d._children = d.children;
          d.children = null;
      } else if (d._children) {
          d.children = d._children;
          d._children = null;
      }
      return d;
  }

  // Toggle children on click.

  function click(d) {
      if (d3.event.defaultPrevented) return; // click suppressed
      d = toggleChildren(d);
      update(d);
      centerNode(d);
  }

  function update(source) {
      // Compute the new height, function counts total children of root node and sets tree height accordingly.
      // This prevents the layout looking squashed when new nodes are made visible or looking sparse when nodes are removed
      // This makes the layout more consistent.
      var levelWidth = [1];
      var childCount = function(level, n) {

          if (n.children && n.children.length > 0) {
              if (levelWidth.length <= level + 1) levelWidth.push(0);

              levelWidth[level + 1] += n.children.length;
              n.children.forEach(function(d) {
                  childCount(level + 1, d);
              });
          }
      };
      childCount(0, root);
      var newHeight = d3.max(levelWidth) * 50; // 25 pixels per line
      tree = tree.size([newHeight, viewerWidth]);

      // Compute the new tree layout.
      var nodes = tree.nodes(root).reverse(),
          links = tree.links(nodes);

      // Set widths between levels based on maxLabelLength.
      nodes.forEach(function(d) {
          // d.y = (d.depth * (maxLabelLength * 16)); //maxLabelLength * 10px
          // alternatively to keep a fixed scale one can set a fixed depth per level
          // Normalize for fixed-depth by commenting out below line
          d.y = (d.depth * 500); //500px per level.
      });

      // Update the nodes…
      node = svgGroup.selectAll("g.node")
          .data(nodes, function(d) {
              return d.id || (d.id = ++i);
          });

      // Enter any new nodes at the parent's previous position.
      var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("transform", function(d) {
              return "translate(" + source.y0 + "," + source.x0 + ")";
          })
          // .on('click', click);

      nodeEnter.append("circle")
          .attr('class', 'nodeCircle')
          .attr("r", 0)
          .style("fill", function(d) {
              return d._children ? "lightsteelblue" : "#fff";
          });

      nodeEnter.append("text")
          .attr("x", function(d) {
              return d.children || d._children ? -10 : 10;
          })
          .attr("dy", ".35em")
          .attr('class', 'nodeText')
          .attr("text-anchor", function(d) {
              return d.children || d._children ? "end" : "start";
          })
          .text(function(d) {
              return d.name;
          })
          .style("fill-opacity", 0);

      // phantom node to give us mouseover in a radius around it
      // nodeEnter.append("circle")
      //     .attr('class', 'ghostCircle')
      //     .attr("r", 30)
      //     .attr("opacity", 0.2) // change this to zero to hide the target area
      // .style("fill", "red")
      //     .attr('pointer-events', 'mouseover')
      //     .on("mouseover", function(node) {
      //         overCircle(node);
      //     })
      //     .on("mouseout", function(node) {
      //         outCircle(node);
      //     });

      // Update the text to reflect whether node has children or not.
      node.select('text')
          .attr("x", function(d) {
              return 10;
          })
          .attr("text-anchor", function(d) {
              return "start";
          })
          .text(function(d) {
              return d.name//+" ("+d.number_of_tagged_content+" / "+d.number_of_tagged_guidance_content+")";
          });

      // Change the circle fill depending on whether it has children and is collapsed
      node.select("circle.nodeCircle")
          .attr("r", 4.5)
          .style("fill", function(d) {
              return d._children ? "lightsteelblue" : "#fff";
          });

      // Transition nodes to their new position.
      var nodeUpdate = node.transition()
          .duration(duration)
          .attr("transform", function(d) {
              return "translate(" + d.y + "," + d.x + ")";
          });

      // Fade the text in
      nodeUpdate.select("text")
          .style("fill-opacity", 1);

      // Transition exiting nodes to the parent's new position.
      var nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) {
              return "translate(" + source.y + "," + source.x + ")";
          })
          .remove();

      nodeExit.select("circle")
          .attr("r", 0);

      nodeExit.select("text")
          .style("fill-opacity", 0);

      // Update the links…
      var link = svgGroup.selectAll("path.link")
          .data(links, function(d) {
              return d.target.id;
          });

      // Enter any new links at the parent's previous position.
      link.enter().insert("path", "g")
          .attr("class", "link")
          .attr("d", function(d) {
              var o = {
                  x: source.x0,
                  y: source.y0
              };
              return diagonal({
                  source: o,
                  target: o
              });
          });

      // Transition links to their new position.
      link.transition()
          .duration(duration)
          .attr("d", diagonal);

      // Transition exiting nodes to the parent's new position.
      link.exit().transition()
          .duration(duration)
          .attr("d", function(d) {
              var o = {
                  x: source.x,
                  y: source.y
              };
              return diagonal({
                  source: o,
                  target: o
              });
          })
          .remove();

      // Stash the old positions for transition.
      nodes.forEach(function(d) {
          d.x0 = d.x;
          d.y0 = d.y;
      });
  }

  // Append a group which holds all nodes and which the zoom Listener can act upon.
  var svgGroup = baseSvg.append("g");

  // Define the root
  root = treeData;
  root.x0 = viewerHeight / 2;
  root.y0 = 0;

  // Layout the tree initially and center on the root node.
  update(root);
  centerNode(root);
});
