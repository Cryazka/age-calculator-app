document.querySelector('#user-birthday').addEventListener('submit', ageCalc)

function ageCalc() {
    event.preventDefault()

    // error constant start

    let birthDayError = document.querySelector('#userDay')
    let birthMonthError = document.querySelector('#userMonth')
    let birthYearError = document.querySelector('#userYear')

    // error constants end

    let birthYear = document.querySelectorAll('.input')[2].value
    let birthMonth = document.querySelectorAll('.input')[1].value -1
    let birthDay = document.querySelectorAll('.input')[0].value
    let nowDate = new Date() // Текущая дата
    let birthDate = new Date(birthYear, birthMonth, birthDay)
    // let birthDate = new Date(birthYear, birthMonth, birthDay) // Дата рождения


    if (errorTypeIdentifier()) {
        let diff = nowDate.getTime() - birthDate.getTime() // Разница между датой рождения и настоящим в миллисекундах, прошедших с 01.01.1970

        let ageYears = 
        Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)) // Годы
        let ageMonths = 
        Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * (365.25 / 12))) // Месяцы
        let ageDays = 
        Math.floor((diff % (1000 * 60 * 60 * 24 * (365.24 / 12))) / (1000 * 60 * 60 * 24)) // Дни

        const putNumbersHere = document.querySelectorAll('.number')

        putNumbersHere[0].textContent = ageYears
        putNumbersHere[1].textContent = ageMonths
        putNumbersHere[2].textContent = ageDays
    }

    function errorTypeIdentifier() {
    console.log('func=dateValid')
    let name = document.querySelectorAll('.name')
    let input = document.querySelectorAll('.input')
    input[0].classList.add('error-active-input')
    input[1].classList.add('error-active-input')
    input[2].classList.add('error-active-input')
    name[0].classList.add('error-active')
    name[1].classList.add('error-active')
    name[2].classList.add('error-active')
    
    if (nowDate.getFullYear() < birthYear) { 
        birthYearError.innerHTML = 'Must be a valid year'
        birthYearError.classList.add('error-active')
        input[2].classList.add('error-input-active')
        console.log('func=dateValid-month2')
        return false
    } else {
        birthYearError.classList.remove('error-active')
    }
    
    if (birthDate.getDate() != birthDay) {
        birthDayError.innerHTML = 'Must be a valid day'
        birthDayError.classList.add('error-active')
        input[0].classList.add('error-input-active')
        console.log('func=dateValid-day')
        return false
    } else {
        birthDayError.classList.remove('error-active')
    }

    if (birthDate.getMonth() != birthMonth) {    
        birthMonthError.innerHTML = 'Must be a valid month'
        birthMonthError.classList.add('error-active')
        input[1].classList.add('error-input-active')
        console.log('func=dateValid-month')
        return false
    } else {
        birthMonthError.classList.remove('error-active')
    }

    if (nowDate < birthDate) {
        birthDayError.innerHTML = 'Must be a valid date'
        birthDayError.classList.add('error-active')
        console.log('func=dateValid-date')
        return false
    } else {
        
    }

    input[0].classList.remove('error-active-input')
    input[1].classList.remove('error-active-input')
    input[2].classList.remove('error-active-input')
    name[0].classList.remove('error-active')
    name[1].classList.remove('error-active')
    name[2].classList.remove('error-active')
    return true
    }
}
/*
реализовать проверку даты


/*
    function dateValid() {
        console.log('func=dateValid')
        if (nowDate.getFullYear >= birthYear && birthDay <= 31 && birthDay >= 1 && birthMonth <= 12 && birthMonth >= 1) {
            console.log('func=dateValid-frst')
            if (birthDay <= 30 && (birthMonth == 2 || birthMonth == 4 || birthMonth == 6 || birthMonth == 9 || birthMonth == 11)) {
                console.log('func=dateValid-scnd')
            }
        }
        return error()
    }
*/

/*
    function validate_date(Date) {
        console.log('func=dateValid')
        console.log(birthDate.getMonth() == birthMonth)
        if ((birthDate.getFullYear() == birthYear) && (birthDate.getMonth() == birthMonth) && (birthDate.getDate() == birthDay)) {
            console.log('func=dateValid-true')

            return true;
        } else {
            console.log('func=dateValid-false')
            return errorTypeIdentifier();
        }
    }
*/

// ###########################################################################################################################
            /*
            let dobNow = new Date(now.getFullYear(), dob.getMonth(), dob.getDate()) // ДР в текущем году

            // Возраст = текущий год - год рождения
            let ageYears = now.getFullYear() - dob.getFullYear()
            // Если ДР в этом году ещё предстоит, то вычитаем из birthYear один год
            if (now < dobNow) {
                ageYears = ageYears -1;
            }

            let ageMonths = dob.getMonth() - now.getMonth()

            if (ageMonths < 0) {
                ageMonths *= -1
            }

            let ageDays = now.getDate() - dob.getDate()
            if (ageDays < 0) {
                ageDays += 30
            }
            */

/*
function validated() {

    
    let birthYear = document.querySelectorAll('.input')[2].value
    let birthMonth = document.querySelectorAll('.input')[1].value
    let birthDay = document.querySelectorAll('.input')[0].value
    let systemDate = new Date()
    let userBirthDate = new Date(year, birthMonth - 1, day)
    let userAge = systemDate - userBirthDate
    let userYears = userAge / (1000 * 60 * 60 * 24 * 365)
    let userMonths = userYears % 10 * 12
    let userDays = 
}
*/