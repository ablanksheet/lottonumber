<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로또 번호 추출기</title>
    <link rel="stylesheet" href="lotto-numbers-generator-styles.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
</head>
<body>
    <header>
        <h1>로또 번호 추출기</h1>
        <nav class="top-nav">
            <a href="../index.html">홈</a> |
            <a href="lotto-numbers-generator.html" class="active">로또번호 추출</a>
        </nav>
    </header>
    <div class="top-nav">
        <a href="past-lotto-numbers.html">역대 로또번호</a> |
        <a href="lotto-numbers-analysis.html">번호 분석</a> |
        <a href="lotto-winner-stores.html">1등 배출점</a>
    </div>
    <div id="condition-form">
        <h3>조건 설정 <span id="popup-icon">ℹ️</span></h3>
        <div class="popup" id="probability-popup"></div>
        <div class="left">
            <div>
                <label for="frequency-all">출현빈도 전체:</label>
                <input type="number" id="frequency-all" value="1" placeholder="전체" />
            </div>
            <div>
                <label for="frequency-100">최근 100단위:</label>
                <input type="number" id="frequency-100" value="2" placeholder="100단위" />
            </div>
            <div>
                <label for="frequency-20">최근 20단위:</label>
                <input type="number" id="frequency-20" value="10" placeholder="20단위" />
            </div>
            <div>
                <label for="frequency-5">최근 5단위:</label>
                <input type="number" id="frequency-5" value="5" placeholder="5단위" />
            </div>
            <div>
                <label for="frequency-1">최근 1단위:</label>
                <input type="number" id="frequency-1" value="-30" placeholder="1단위" />
            </div>
        </div>
        <div class="right">
            <div>
                <label for="odd-even">홀짝:</label>
                <input type="checkbox" id="odd-even" checked />
                <span class="small-text">6 : 0 제외</span>
            </div>
            <div>
                <label for="high-low">고저:</label>
                <input type="checkbox" id="high-low" checked />
                <span class="small-text">6 : 0 제외</span>
            </div>
            <div>
                <label for="sum">총합의 수:</label>
                <select id="sum-min">
                    <option value="61">61</option>
                    <option value="81">81</option>
                    <option value="101" selected>101</option>
                    <option value="121">121</option>
                    <option value="141">141</option>
                    <option value="161">161</option>
                    <option value="181">181</option>
                    <option value="201">201</option>
                    <option value="221">221</option>
                    <option value="241">241</option>
                </select>
                ~
                <select id="sum-max">
                    <option value="80">80</option>
                    <option value="100">100</option>
                    <option value="120">120</option>
                    <option value="140">140</option>
                    <option value="160">160</option>
                    <option value="180">180</option>
                    <option value="200">200</option>
                    <option value="220" selected>220</option>
                    <option value="240">240</option>
                    <option value="260">260</option>
                </select>
            </div>
            <div>
                <label for="consecutive">연속된 숫자:</label>
                <select id="consecutive">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <span>개 이내</span>
            </div>
            <div>
                <label for="range">10단위씩 허용된 수:</label>
                <select id="range">
                    <option value="2">2</option>
                    <option value="3" selected>3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <span>개 이내</span>
            </div>
        </div>
    </div>
    <div id="lotto-generator">
        <button id="generate-btn">번호 생성하기</button>
        <div id="display-numbers"></div>
    </div>
    <div id="past-numbers">
        <h2>생성된 번호</h2>
        <div id="numbers-list"></div>
    </div>
    <script src="lotto-numbers-generator-script.js"></script>
</body>
</html>
