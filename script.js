document.getElementById("play-btn").addEventListener('click', function() {
    document.getElementById("start").style.display = 'none';
    document.getElementById("settings").style.display = 'block';
});

const quizData = {
    computer: {
        easy: [
            {
                question: "Who is the founder of Apple Inc.?",
                choices:['Steve Jobs','Bill Gates','Jeff Bezos','Mark Zuckerberg'],
                correctAnswer:'Steve Jobs'
            },
            {
                question: "What does HTML stands for?",
                choices:['Hyperlinks and Text Markup Language','Home Tool Markup Language','Hyper Text Markup Language','Hyperlinking Text Markup Language'],
                correctAnswer:'Hyper Text Markup Language'
            },
            {
                question: "Which device is used to input data into a computer?",
                choices:['Monitor','Printer','Keyboard','Speakers'],
                correctAnswer:'Keyboard'
            },
            {
                question: "Which type of storage is volatile and loses its data when the computer is turned off?",
                choices:['Hard Disk Drive(HDD)','Solid State Drive(SSD)','Random Access Memory(RAM)','Read-Only Memory(ROM)'],
                correctAnswer:'Random Access Memory(RAM)'
            },
            {
                question: "What does the acronym 'URL' stand for?",
                choices:['Universal Resource Locator','Universal Reference Locator','Uniform Resource Link','Uniform Reference Locator'],
                correctAnswer:'Universal Resource Locator'
            },
            {
                question: "Which computer port is used to connect a keyboard to a PC?",
                choices:['USB','HDMI','VGA','PS/2'],
                correctAnswer:'PS/2'
            },
            {
                question: "What does 'HTTP' stand for in website addresses?",
                choices:['HyperText Transfer Protocol','HyperText Transfer Package','HyperText Terminal Protocol','HyperText Transfer Program'],
                correctAnswer:'HyperText Transfer Protocol'
            },
            {
                question: "What do we call a program that replicates itself and spreads to other computers without permission?",
                choices:['Virus','Firewall','Antivirus','Application'],
                correctAnswer:'Virus'
            },
            {
                question: "What does the acronym 'LAN' stand for in networking?",
                choices:['Local Area Network','Longitudinal Access Node','Logical Area Network','Large Array Node'],
                correctAnswer:'Local Area Network'
            },
            {
                question: "in binary code, how many bits make up a byte?",
                choices:['4','8','16','32'],
                correctAnswer:'8'
            }
           
        ],
        medium: [
            {
                question: "What year was JavaScript first introduced?",
                choices:['1993','1995','1997','1999'],
                correctAnswer:'1995'
            },
            {
                question: "Which programming language is also known as 'the mother of all languages'?",
                choices:['Python','C','Java','Assembly'],
                correctAnswer:'C'
            },
            {
                question: "What does the term 'GUI' stand for in computing?",
                choices:['General User Interface','Graphic User Interface','General User Integration','Graphical User Integration'],
                correctAnswer:'Graphic User Interface'
            },
            {
                question: "Which protocol is used to send and receive emails over the internet?",
                choices:['SMTP','HTTP','FTP','TCP'],
                correctAnswer:'SMTP'
            },
            {
                question: "What is the binary equivalent of the decimal number 25?",
                choices:['11001','10100','11101','10011'],
                correctAnswer:'10011'
            },
            {
                question: "What is the purpose of an IP adress in computer networking?",
                choices:['To identify a specific website','To identify a specific computer or network device','To encrypt data for secure transmission','To install software updates'],
                correctAnswer:'To identify a specific computer or network device'
            },
            {
                question: "Which programming language is commonly used for developing mobile applications for Android devices?",
                choices:['Swift','Java','C#','Kotlin'],
                correctAnswer:'Kotlin'
            },
            {
                question: "Which programming language is commonly used for creating web pages and web applications?",
                choices:['Java','C++','Python','JavaScript'],
                correctAnswer:''
            },
            {
                question: "Which component of a computer is responsible for converting digital signals to analog signals for communication over telephone lines?",
                choices:['NIC','Modern','Router','Switch'],
                correctAnswer:'Modern'
            },
            {
                question: "What is the maximum number of characters allowed in a filename for most Windows operating systems?",
                choices:['128','255','64','512'],
                correctAnswer:'255'
            }
           
        ],
        hard: [
            {
                question: "What is the purpose of a firewall in computer networks?",
                choices:['Preventing unauthorized access','Speeding up data transfer','Detecting malware','Encrypting Data'],
                correctAnswer:'Preventing unauthorized access'
            },
            {
                question: "What is the binary representation of the number 42?",
                choices:['00101010','11001100','10101010','11110000'],
                correctAnswer:'00101010'
            },
            {
                question: "Which cryptographic algorithm is widely used for secure data transmission over the internet,such as in HTTPS connection?",
                choices:['RSA','MD5','AES','SHA-1'],
                correctAnswer:'AES'
            },
            {
                question: "Which encryption method is used to secure internet communications,as indicated by 'http' in the URL?",
                choices:['RSA','AES','SHA','SSL/TLS'],
                correctAnswer:'SSL/TLS'
            },
            {
                question: "What is the purpose of the Domain Name System (DNS) in computer networks?",
                choices:['Translating IP addresses to domain names','Encrypting network traffic','Controlling network access','Managing hardware resources'],
                correctAnswer:'Translating IP addresses to domain names'
            },
            {
                question: "which protocol is used for email retrieval from a mail server to a client application?",
                choices:['SMTP(Simple Mail Transfer Protocol)','POP3(Post Office Protocol 3)','HTTP(HyperText Transfer Protocol)','FTP(File Transfer Protocol)'],
                correctAnswer:'POP3(Post Office Protocol 3)'
            },
            {
                question: "Which of the following file systems is commonly used in modern Linux distribtions?",
                choices:['NTFS','FAT32','ext4','HFS+'],
                correctAnswer:'ext4'
            },
            {
                question: "What is the purpose of a GPU(Graphics Processing Unit) in a computer?",
                choices:['To handle storage and retrievalof data','To perform complex mathematical calculations','To manage internet connections','To render graphics and images for display'],
                correctAnswer:'To render graphics and images for display'
            },
            {
                question: "What is the maximum theoretical data transfer rate of a USB 3.1 Gen 2 port?",
                choices:['5 Gbps','10 Gbps','20 Gbps','40 Gbps'],
                correctAnswer:'20 Gbps'
            },
            {
                question: "Which type of cyberattack is characterized by an attacker sending excessive traffic to a target system, causing it to become unavailable to users?",
                choices:['Phishing','DDoS(Distributed Denial of Service','Ransomware','SQL injection'],
                correctAnswer:'DDoS(Distributed Denial of Service'
            }
         
        ]
    },
    sports: {
        easy: [
            {
                question: "Which country won the FIFA World Cup in 2018?",
                choices:['Brazil','Germany','France','Spain'],
                correctAnswer:'France'
            },
            {
                question: "Who holds the record for the most home runs in Major League Baseball (MLB) history?",
                choices:['Babe Ruth','Hank Aaron','Barry Bonds','Alex Rodriguez'],
                correctAnswer:'Barry Bonds'
            },
            {
                question: "Which team has won the most number of Football world cups?",
                choices:['France','Uruguay','Brazil','Italy'],
                correctAnswer:'Brazil'
            },
            {
                question: "Tiger Woods is famous for which sports?",
                choices:['Tennis','Golf','Shooting','Badminton'],
                correctAnswer:'Golf'
            },
            {
                question: "How many players does a baseball team have?",
                choices:['11','7','9','10'],
                correctAnswer:'9'
            },
            {
                question: "After how many years are the Olympics held?",
                choices:['5','3','4','6'],
                correctAnswer:'4'
            },
            {
                question: "Which country won its fifth world cup in 2002?",
                choices:['Germany','Argentina','Brazil','Italy'],
                correctAnswer:'Brazil'
            },
            {
                question: "What is the name of Manchester United's home ground?",
                choices:['Anfield','Villa Park','Emirates','Old Trafford'],
            correctAnswer:'Old Trafford'
            },
            {
                question: "The shortest woman's track race is of length-",
                choices:['1000 meters','200 meters','100 meters','500 meters'],
                correctAnswer:'100 meters'
            },
            {
                question: "Where are the headquarters of FIFA situated?",
                choices:['Paris','Zurich','Milan','Amsterdam'],
                correctAnswer:'Zurich'
            },
       
         
        ],
        medium: [
            {
                question: "Which country has won the most gold medals in the history of the Summer Olympics?",
                choices:['United States','China','Russia','Germany'],
                correctAnswer:'United States'
            },
            {
                question: "In which year did Usain Bolt set the world record for the 100-meter dash?",
                choices:['2008','2009','2012','2016'],
                correctAnswer:'2009'
            },
            {
                question: "Which is the national game of Japan?",
                choices:['Sumo Wrestling','Tennis','Polo','Baseball'],
                correctAnswer:'Sumo Wrestling'
            },
            {
                question: "In India, National Sports Day is celebrated in-",
                choices:['August 28','August 30','August 29','August 25'],
                correctAnswer:'August 29'
            },
            {
                question: "Which Indian cricketer has become the first player to score double century in 4 consecutive test series?",
                choices:['Virendra Sehwag','Virat Kohli','Rohit Sharma','Rahul Dravid'],
                correctAnswer:'Virat Kohli'
            },
            {
                question: "Maradona played for which football team?",
                choices:['Inter','Napoli','Roma','Juventus'],
                correctAnswer:'Napoli'
            },
            {
                question: "Who was the first woman cricketer to score 10000 runs in international cricket format?",
                choices:['Mithali Raj','Jhulan Goswami','Ellyse Perry','Charlotte Edwards'],
                correctAnswer:'Charlotte Edwards'
            },
            {
                question: "The stick which is used to hit the ball in Golf is called-",
                choices:['Bat','Golf Stick','Club','Golf Bat'],
                correctAnswer:'Club'
            },
            {
                question: "The first organized national wrestling tournament took place in which country?",
                choices:['United States of America','United Kingdom','Greece','Russia'],
                correctAnswer:'United States of America'
            },
            {
                question: "Who won 10th Italian open title in 2021?",
                choices:['Rafael Nadal','Roger Federer','Novac Djokovic','Serena Williams'],
                correctAnswer:'Rafael Nadal'
            }
         
        ],
        hard: [
            {
                question: "Which tennis player has won the most Grand Slam singles titles?",
                choices:['Roger Federer','Rafeal Nadal','Novak Djokovic','Serena Williams'],
                correctAnswer:'Serena Williams'
            },
            {
                question: "In which year did the first modern Olympic Games take place?",
                choices:['1892','1904','1896','1900'],
                correctAnswer:'1896'
            },
            {
                question: "Thomas cup and Uber cup are prestigious of-",
                choices:['Rasheed Khan','James Anderson','Dwayne Bravo','Stuart Broad'],
                correctAnswer:'Dwayne Bravo'
            },
            {
                question: "The playground of baseball is known as-",
                choices:['Ring','Diamond','Court','Pitch'],
                correctAnswer:'Diamond'
            },
            {
                question: "When was the first cricket ODI played?",
                choices:['1973','1972','1970','1971'],
                correctAnswer:'1971'
            },
            {
                question: "Thr term 'Dolphin Kick' is associated with which sports?",
                choices:['Polo','Swimming','Kickboxing','Football'],
                correctAnswer:'Swimming'
            },
            {
                question: "Which sport takes place in velodrome?",
                choices:['Cycling','Boxing','Swimming','Hockey'],
                correctAnswer:'Cycling'
            },
            {
                question: "Who was the first President of International Olympic Committee?",
                choices:['Jacques Rogge','Demetrios Vikelas','Avery Brundage','Lord Killanin'],
                correctAnswer:'Demetrios Vikelas'
            },
            {
                question: "Which emblem appears on the shirt of England's football team?",
                choices:['Bulldog','Two Eagles','Three Lions','Red Rose'],
                correctAnswer:'Three Lions'
            },
            {
                question: "'THE WORLD BENEATH HIS FEET' is a Biography of?",
                choices:['Ajit Wadekar','Dhyan Chand','Kapil Dev','Pulela Gopichand'],
                correctAnswer:'Pulela Gopichand'
            }
       
        ]
    },
    history: {
        easy: [
            {
                question: "Who sent Christopher Columbus to explore the New World?",
                choices:['King Henry','King Marcus','Queen Victoria','King Ferdinand'],
                correctAnswer:'King Ferdinand'
            },
            {
                question: "How many Punic Wars were fought?",
                choices:['5','3','2','4'],
                correctAnswer:'3'
            },
            {
                question: "The invasion of Germany on which country started world war 2?",
                choices:['Norway','Denmark','Poland','Hungry'],
                correctAnswer:'Poland'
            },
            {
                question: "Who said 'Egypt is the gift of Nile'?",
                choices:['Alexander the Great','Herodotus','Cleopatra','Napoleon Bonaparte'],
                correctAnswer:'Herodotus'
            },
            {
                question: "The first Indian Mathematician who treated Mathematics as a different discipline?",
                choices:['Ramanujan','Chanakya','Varahmihira','Aryabhatta'],
                correctAnswer:'Aryabhatta'
            },
            {
                question: "The Statue of Liberty was a gift from which country?",
                choices:['Britain','France','USA','Italy'],
                correctAnswer:'France'
            },
            {
                question: "What was the name of the research ship Charles Darwin travelled with?",
                choices:['Santa Maria','Pinta','Nina','The Beagle'],
                correctAnswer:'The Beagle'
            },
            {
                question: "Who was the first Indian ruler who had territory outside India?",
                choices:['Ashoka','Chandragupta Maurya','HarsaBardhan','Samudragupta first'],
                correctAnswer:'Chandragupta Maurya'
            },
            {
                question: "What does 'T' stands for in NATO?",
                choices:['Treaty','Terrain','Terms','Territories'],
                correctAnswer:'Treaty'
            },
            {
                question: "Who was the Last Viceroy of India?",
                choices:['Lord Amherst','Lord Wellesley','Lord Mountbatten','Lord Warren Hastings'],
                correctAnswer:'Lord Mountbatten'
            }
         
        ],
        medium: [
            {
                question: "Great Economic Depression happened in which year?",
                choices:['1939','1929','1932','1935'],
                correctAnswer:'1929'
            },
            {
                question: "What was the name of the first Space Shuttle to go into space?",
                choices:['Space Shuttle Challenger','Space Shuttle Discovery','Space Shuttle Enterprise','Space Shuttle Columbia'],
                correctAnswer:'Space Shuttle Columbia'
            },
            {
                question: "What movement is the relationship of 'do or die'?",
                choices:['Non-cooperation Movement','Salt March','Khilafat','Quit India'],
                correctAnswer:'Quit India'
            },
            {
                question: "Gandhi-Irvine was compromised in which year?",
                choices:['1931','1932','1941','1936'],
                correctAnswer:'1931'
            },
            {
                question: "Which of the following was the first dynasty in China?",
                choices:['Qin','Western Zhou','Shang','Xia'],
                correctAnswer:'Xia'
            },
            {
                question: "Britain founded its first industry in india at-",
                choices:['Punjab','Kolkata','Mumbai','Surat'],
                correctAnswer:'Surat'
            },
            {
                question: "Which ancient Roman city was destroyed after the eruption of Mount Vesuvius?",
                choices:['Messina','Athens','Pompeii','Alexandria'],
                correctAnswer:'Pompeii'
            },
            {
                question: "In which year did the Great Smong of London occur?",
                choices:['1958','1948','1952','1954'],
                correctAnswer:'1952'
            },
            {
                question: "The land granted by the lord to the knights was called-",
                choices:['Seigneur','Feud','Manor','Fief'],
                correctAnswer:'Fief'
            },
            {
                question: "The sinking of which of the following ships is considered the greatest maritime disaster of all time?",
                choices:['Britannic','Titanic','Wilhelm Gustloff','Yamato'],
                correctAnswer:'Wilhelm Gustloff'
            }
        ],
        hard: [
            {
                question: "The D-Day invasion of June 6, 1994 took place in?",
                choices:['France','Italy','Belgium','Germany'],
                correctAnswer:'France'
            },
            {
                question: "Which Buddhist council was held during the reign of Kanishka?",
                choices:['4th','3rd','2nd','1st'],
                correctAnswer:'4th'
            },
            {
                question: "The construction of the Berlin Wall began in the year?",
                choices:['1959','1962','1967','1961'],
                correctAnswer:'1961'
            },
            {
                question: "What is the breed of Snoopy in the highly successful comic strip?",
                choices:['Dalmatian','Labrador','Beagle','Dachshund'],
                correctAnswer:'Beagle'
            },
            {
                question: "Where is the evidence of Plough found in Indus Valley Civilization?",
                choices:['Lothal','Mohen Jo Dero','Harappa','Kalibangan'],
                correctAnswer:'Kalibangan'
            },
            {
                question: "Which Roman emperor was the first to profess Christianity?",
                choices:['Constantine-2','Constantine-1','Maximinus Thrax','Comodos'],
                correctAnswer:'Constantine-1'
            },
            {
                question: "The capital city 'Daydo' established by Kublai Khan is situated at which place?",
                choices:['Alma Atta','Beijing','Mongolia','Samar Qand'],
                correctAnswer:'Beijing'
            },
            {
                question: "Who wrote the document known as the 95 Theses?",
                choices:['Jeremy Bentham','Aristotle','Plato','Martin Luther'],
                correctAnswer:'Martin Luther'
            },
            {
                question: "In what year did the French war of Religion began?",
                choices:['1566','1655','1572','1562'],
                correctAnswer:'1562'
            },
            {
                question: "First English newspaper in India is?",
                choices:['The Indian Gazette','The Bombay Herald','The Bengal Gazette','The Bengal Journal'],
                correctAnswer:'The Bengal Gazette'
            }      
        ]
    },
    geography: {
      easy: [
            {
                question: "Red Sea and Mediterranean Sea is separated by?",
                choices:['Suez Canal','Panama Canal','Strait of Gibraltar','Strait of Hormuz'],
                correctAnswer:'Suez Canal'
            },
            {
                question: "Which among the following is a Treeless Biome?",
                choices:['Grassland','Tundra','Taiga','Savannah'],
                correctAnswer:'Tundra'
            },
            {
                question: "The world's largest river is-",
                choices:['The Amazon','The Mississippi and Missouri','Brahmaputra','The Nile'],
                correctAnswer:'The Amazon'
            },
            {
                question: "What is the deepest point of Earth's oceans?",
                choices:['Tonga Trench','Java Trench','Philippine Trench','Mariana trench'],
                correctAnswer:'Mariana trench'
            },
            {
                question: "The continents of Africa and Europe, at their closest point are separated from each other by the strait of-",
                choices:['Malacca Strait','Strait of Hormuz','Bering Strait','Strait of Gibraltar'],
                correctAnswer:'Strait of Gibraltar'
            },
            {
                question: "Which canal is considered to be an important link b/w the developed countries and the developing countries?",
                choices:['Grand Canal','Kiel Canal','Panama Canal','Suez Canal'],
                correctAnswer:'Suez Canal'
            },
            {
                question: "What is the largest state in United States?",
                choices:['Texas','New Mexico','California','Alaska'],
                correctAnswer:'Alaska'
            },
            {
                question: "What is the largest non-continental island in the world?",
                choices:['Madagascar','New Guinea','Greenland','Iceland'],
                correctAnswer:'Greenland'
            },
            {
            question: "What is the most commonly spoken language in the world?",
            choices:['Mandarin Chinese','Spanish','French','English'],
            correctAnswer:'Mandarin Chinese'
            },
            {
                question: "Venus has atmosphere made up of which gas?",
                choices:['Nitrogen','Carbon di oxide','Methane','Hydrogen'],
                correctAnswer:'Carbon di oxide'
            }         
        ],
      medium: [
            {
                question: "The famous 'Ring of fire' which account for 68% of earthquakes, occuring in the earth is in the-",
                choices:['Atlantic Ocean','Indian Ocean','Arctic Ocean','Pacific Ocean'],
                correctAnswer:'Pacific Ocean'
            },
            {
                question: "How many kilometres are represented by 1 degree of latitude?",
                choices:['93 km','122 km','111 km','71 km'],
                correctAnswer:'111 km'
            },
            {
                question: "Which biome is also called Mediterranean?",
                choices:['Chapparal','Desert','Savannah','Taiga'],
                correctAnswer:'Chapparal'
            },
            {
                question: "The island state of Australia is-",
                choices:['Melbourne','Victoria','Tasmania','Sydney'],
                correctAnswer:'Tasmania'
            },
            {
                question: "Colca Canyon is located in which country?",
                choices:['Namibia','United States','Bolivia','Peru'],
                correctAnswer:'Peru'
            },
            {
                question: "Which country is called the 'land of thousand lakes'?",
                choices:['Holland','Greenland','Finland','Australia'],
                correctAnswer:'Finland'
            },
            {
                question: "How many federal states does Germany have?",
                choices:['12','14','8','16'],
                correctAnswer:'16'
            },
            {
                question: "What is a narrow pass or gorge between mountains or hills called?",
                choices:['Defile','Gaur','Dale','Barkhan'],
                correctAnswer:'Defile'
            },
            {
                question: "Which is the smallest gulf in the world?",
                choices:['Gulf of Alaska','Gulf of Kutch','Gulf of Mexico','Gulf of California'],
                correctAnswer:'Gulf of California'
            },
            {
                question: "The highest sand dunes are found is-",
                choices:['Sahara Desert','Taklamakan Desert','Gobi Desert','Atacama Desert'],
                correctAnswer:'Sahara Desert'
            }         
        ],
      hard: [
            {
                question: "Greenland is part of Which country?",
                choices:['Netherlands','United States','Denmark','Canada'],
                correctAnswer:'Denmark'
            },
            {
                question: "What is the currency of South Korea?",
                choices:['Yen','Won','Korean dollar','Peso'],
                correctAnswer:'Won'
            },
            {
                question: "About how many years ago, the Ice age ended?",
                choices:['50000','14000','140000','100000'],
                correctAnswer:'14000'
            },
            {
                question: "Which of the following planet is a Jovian planet?",
                choices:['Earth','Mercury','Saturn','Venus'],
                correctAnswer:'Saturn'
            },
            {
                question: "Which river flows through the Grand canyon?",
                choices:['Colorado river','Amazon river','Congo river','Altamaha river'],
                correctAnswer:'Colorado river'
            }, 
            {
                question: "Which planet's another name is Lucifer?",
                choices:['Saturn','Mercury','Mars','Venus'],
                correctAnswer:'Venus'
            },
            {
                question: "Which planet has the volcano with the name of 'Arsia Mon'?",
                choices:['Saturn','Venus','Jupiter','Mars'],
                correctAnswer:'Mars'
            },
            {
                question: "Which mountain separates Black Sea and Caspian Sea?",
                choices:['Balkan mountain','Alps','Urals','Caucasus'],
                correctAnswer:'Caucasus'
            },
            {
                question: "Which state in India is known as 'Scotland of the East'?",
                choices:['Arunachal Pradesh','Sikkim','Meghalaya','Manipur'],
                correctAnswer:'Meghalaya'
            },
            {
                question: "What place is situated as 0 degrees longitude?",
                choices:['Tibet','Greenwich','Alaska','Norway'],
                correctAnswer:'Greenwich'
            }   
        ]
    }

};


const startContainer = document.querySelector('#settings');
const quizContainer = document.querySelector('#quiz');
const categorySelect = document.getElementById('category');
const levelSelect = document.getElementById('level');
const startButton = document.getElementById('start-btn');
const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const feedbackElement = document.getElementById('feedback');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
const previousButton = document.getElementById('previous');
const finalScoreElement = document.querySelector('.final-score');

let currentQuestionIndex = 0,
    score = 0,
    currentCategory,
    currentLevel;
    

startButton.addEventListener('click',startQuiz);
previousButton.addEventListener('click', displayPreviousQuestion); 

let timerInterval;
let currentQuestionNumber = 1;

function startQuiz() {
    currentCategory = categorySelect.value;
    currentLevel = levelSelect.value;
    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    currentQuestionNumber = 1;
    currentQuestionIndex = 0; 
    score = 0;
    shuffleQuestions();
    displayQuestion();    
    startTimer();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions(); 
    clearInterval(timerInterval);
    document.getElementById('end-screen').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('settings').style.display = 'none';
    displayQuestion();
    startTimer();
}

function shuffleQuestions() {
    const questions = quizData[currentCategory][currentLevel];

    
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

function startTimer() {
    const timerElement = document.querySelector('.time-left');
    let timeLeft = 30; 

    function updateTimer() {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerElement.innerText = '0s';
            displayNextQuestion();
        } else {
            timerElement.innerText = `${timeLeft}s`;
            timeLeft--;
        }
    }

    clearInterval(timerInterval);
    updateTimer(); 
    timerInterval = setInterval(updateTimer, 1000); 
}

function displayQuestion() {
    
    const currentQuestion = quizData[currentCategory][currentLevel][currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    const totalQuestions = quizData[currentCategory][currentLevel].length;
    document.querySelector('.number-of-question').innerText = `Question ${currentQuestionNumber} of ${totalQuestions}`;
    

    choicesElement.innerHTML = '';
    currentQuestion.choices.forEach(choice => {
        const li = document.createElement('li');
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'answer';
        input.value = choice;
        li.appendChild(input);
        li.appendChild(document.createTextNode(choice));
        choicesElement.appendChild(li);
    });

    feedbackElement.innerText = '';
    submitButton.disabled = false;
    previousButton.classList.toggle('hidden', currentQuestionIndex === 0);
}

    
function checkAnswer(){
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');

    if (selectedAnswer) {
        const currentQuestion = quizData[currentCategory][currentLevel][currentQuestionIndex];
        const selectedValue = selectedAnswer.value;
        
        if (selectedValue === currentQuestion.correctAnswer) {
            feedbackElement.innerText = 'Correct!';
            score++;
        }else {
            feedbackElement.innerText = 'Wrong!';
        }
        submitButton.disabled = true;
    }else {
        feedbackElement.innerText = 'please select an answer.';
    }
}

function displayNextQuestion() {
    currentQuestionIndex++; 
    currentQuestionNumber++;  

    if (currentQuestionIndex === quizData[currentCategory][currentLevel].length) {
        document.getElementById("quiz").style.display = 'none';
        document.getElementById("end-screen").style.display = 'block';
        finalScoreElement.textContent = `${score} / ${quizData[currentCategory][currentLevel].length}`;       
        //finalScoreElement.textContent = `${score} / 10`;       
        
    }else {
        displayQuestion();
    }
    clearInterval(timerInterval);
    startTimer(); 
}


function displayPreviousQuestion() {
  currentQuestionIndex--;
  

  if (currentQuestionIndex >= 0) {
      displayQuestion();
  }
}

submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', displayNextQuestion);

document.getElementById('restart-btn').addEventListener('click', restartQuiz);

document.getElementById("menu-btn").addEventListener('click', function() {
    document.getElementById("end-screen").style.display = 'none';
    document.getElementById("start").style.display = 'block';
});