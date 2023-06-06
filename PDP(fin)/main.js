$(function(){
    //儲存目前作答到第幾題
    var currentQuiz = null;
    //當按鈕按下後，要做的事情
    $("#startButton").on("click", function(){
        var check = false;
        //如果還沒開始作答就從這裡開始
        if(currentQuiz == null){
            currentQuiz = 0;
            //顯示題目
            $("#question").text(questions[0].question);
            //將選項區清空
            $("#options").empty();
            //將選項逐個加入
            questions[0].answers.forEach(function(element, index, array){
                $("#options").append(`<input name='options' type='radio'
                value='${index}' class="mui-switch mui-switch-animbg"<label>${element[0]}</label>`);
            });
            //將按鈕上的文字換成Next
            $("#startButton").attr("value", "Next");
        }
        else {
            //已經開始作答從這邊繼續
            //尋訪哪一個選項有被選取
            $.each($(":radio"), function(i, val){
                if(val.checked){
                    check = true;
                    //確認是否已走到最後要產生結果（A-D）
                    if(currentQuiz == 29){
                        
                        answers.push(questions[currentQuiz].answers[i][1]);
                        var score = [];
                        score.push(answers[4]+answers[9]+answers[13]+answers[17]+answers[23]+answers[29]);
                        score.push(answers[3]+answers[8]+answers[11]+answers[18]+answers[22]+answers[26]);
                        score.push(answers[2]+answers[7]+answers[14]+answers[16]+answers[24]+answers[27]);
                        score.push(answers[1]+answers[6]+answers[10]+answers[15]+answers[20]+answers[25]);
                        score.push(answers[0]+answers[5]+answers[12]+answers[19]+answers[21]+answers[28]);
                        console.log(score);
                        currentQuiz++;
                        //通往最終結果
                        var finalResult = questions[currentQuiz].question;
                        //顯示最終結果的標題
                        $("#question").text(finalResult);
                        $("#options").empty();//顯示最終結果內容
                        //將選項區域清空
                        finalAnswers[0].answers.forEach(function(element,index,array){
                            $("#options").append(`<label>${element[0]}</label><label> ：</label>&nbsp&nbsp<label>${element[1]}</label>&nbsp&nbsp<label>${score[index]}</label><label>分</label><br><br>`);
                        });
                        //$("#options").append(`${finalAnswers[finalResult][1]}<br><br>`);
                        currentQuiz = null;
                        $("#startButton").attr("value", "重新開始");
                    }
                    else{
                        answers.push(questions[currentQuiz].answers[i][1]);
                        //指定下一題，原始資料從1開始，所以要-1
                        currentQuiz++;//顯示新的題目
                        //顯示新的題目
                        $("#question").text(questions[currentQuiz].question);
                        $("#options").empty();
                        questions[currentQuiz].answers.forEach(function(element, index, array){
                            $("#options").append(`<input name='options' type='radio'
                            value='${index}' class="mui-switch mui-switch-animbg"<label>${element[0]}</label>`);
                        });
                    }
                    return false;
                }
            });  
            if(check === false){
                check = true;          
                alert("尚未選擇答案！");
            }
        }
    });
});