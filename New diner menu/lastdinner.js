import _ from "https://esm.sh/lodash";

// Side Menu
const sideMenu = {
    first: "fries",
    second: "bread",
    third: "ham"
}

const sideMenuPrice = {
    fries: 5,
    bread: 3,
    ham: 2
}

// Breakfast Menu
const BFastMenu = {
    first: "coffee",
    second: "tea",
    third: "juice"
}

const BFastMenuPrice = {
    coffee: 5,
    tea: 3,
    juice: 4
}

const BFSideMenu = {
  first: "cookies",
  second: "ham",
  third: "cereals"
}

const BFSideMenuPrice= {
  cookies: 5,
  ham: 7,
  cereals: 6
}

// Main Menu Lunch
const LunchMenu = {
    first: "salad",
    second: "steak",
    third: "hake"
}

const LunchMenuPrice = {
    salad: 10,
    steak: 15,
    hake: 20
}

const SecondLunchMenu = {
    first: "salad",
    second: "steak",
    third: "hake"
}

const SecondLunchMenuPrice = {
    salad: 10,
    steak: 15,
    hake: 20
}

// Main Menu Dinner
const DinnerMenu = {
    first: "salad",
    second: "steak",
    third: "hake"
}

const DinnerMenuPrice = {
    salad: 5,
    steak: 20,
    hake: 15
}

// comment selector
const commentList = ["Excellent choice", "Of course. Please, wait a bit", "I'd recommend other dish instead", "That's a good point!"]
function comment(){
    return commentList[Math.floor(Math.random() * commentList.length)]
}

// prompt to choose the hour & display the correct menu + choosing a dish based on time
const welcome = alert('Welcome to Bottega Restaurant')
let currentTime = prompt("What time is it? Enter a 24 hour format (enter a number between 1 and 24):")
let NumcurrentTime = parseInt(currentTime)

// Breakfast
function BreakfastLogic() {
    let BFastChoice = prompt("Choose a breakfast dish:\ncoffee: 5$, \ntea: 3$, \njuice: 4$").toLowerCase();
    let menuItems = [];
    for (let item in BFastMenu) {
        menuItems.push(BFastMenu[item]);
    }
    if (BFastChoice == BFastMenu.first || BFastChoice == BFastMenu.second || BFastChoice == BFastMenu.third) {
        alert(`Good choice. You chose ${BFastChoice}.`);
        let BFSideChoice = prompt("Choose a breakfast side dish:\ncookies: 5$, \nham: 7$, \ncereals: 6$").toLowerCase();
        let BFSidemenuItems = [];
        for (let item in BFSideMenu) {
            BFSidemenuItems.push(BFSideMenu[item]);
        }
        if (BFSideChoice == BFSideMenu.first || BFSideChoice == BFSideMenu.second || BFSideChoice == BFSideMenu.third) {
            alert(`Good choice. You chose ${BFSideChoice}.`);
            let total = calculateTotalBreakfast(BFastChoice, BFSideChoice, BFastMenuPrice, BFSideMenuPrice);
            alert(`Your total is: ${total}`);
        } else {
          alert(`Choose a valid dish. Our breakfast menu has ${menuItems.join(', ')}`)
          BreakfastLogic();
        }
    } else {
        alert(`Choose a valid dish. Our breakfast menu has ${menuItems.join(', ')}`)
        BreakfastLogic();
    }
}

function BreakfastMenu() {
    if (NumcurrentTime >= 7 && NumcurrentTime <= 11) {
        let menuItemsWithPrices = [];
        for (let item in BFastMenu) {
            let dish = BFastMenu[item];
            let price = BFastMenuPrice[dish];
            menuItemsWithPrices.push(`\n${dish}`);
        }
        alert(`Our breakfast menu has:${menuItemsWithPrices.join(', ')}`);
        BreakfastLogic();
    }
}

function calculateTotalBreakfast(BFmainChoice, BFsideChoice, BFmainMenuPrice, BFsideMenuPrice) {
    let BFmainPrice = BFmainChoice ? BFmainMenuPrice[BFmainChoice] : 0;
    let BFsidesMenuPrice = BFsideChoice ? BFsideMenuPrice[BFsideChoice] : 0;
    let total = BFmainPrice + BFsidesMenuPrice;
    let totalWithIVA = total * 1.10; // Total con el 10% de IVA
    return `\n${BFmainChoice} ==> $${BFmainPrice}, \n${BFsideChoice} ==> $${BFsidesMenuPrice}. \nThe total is $${total}. \nThe total with 10% IVA is $${totalWithIVA.toFixed(2)}`;
}

// Lunch
function LunchLogic() {
    let LunchChoice = prompt("Choose a lunch dish:\nsalad: 10$, \nsteak: 15$, \nhake: 20$").toLowerCase();
    let LunchMenuItems = [];
    for (let item in LunchMenu) {
        LunchMenuItems.push(LunchMenu[item]);
    }
    if (LunchChoice == LunchMenu.first || LunchChoice == LunchMenu.second || LunchChoice == LunchMenu.third) {
        alert(`Good choice. You chose ${LunchChoice}. ${comment()}`);
        let SecondLunchChoice = prompt("Now choose a second lunch dish:\nsalad: 10$, \nsteak: 15$, \nhake: 20$").toLowerCase();
        let SecondLunchMenuItems = [];
        for (let item in SecondLunchMenu) {
            SecondLunchMenuItems.push(SecondLunchMenu[item]);
        }
        if (SecondLunchChoice == SecondLunchMenu.first || SecondLunchChoice == SecondLunchMenu.second || SecondLunchChoice == SecondLunchMenu.third) {
            alert(`Good choice. You chose ${SecondLunchChoice}. ${comment()}`);
                let SideMenuChoice = prompt("Now choose a Side Menu's dish:\nfries: 5$, \nbread: 3$, \nham: 2$").toLowerCase();
                let SidemenuItems = [];
                for (let item in sideMenu) {
                    SidemenuItems.push(sideMenu[item]);
                }
                if (SideMenuChoice == sideMenu.first || SideMenuChoice == sideMenu.second || SideMenuChoice == sideMenu.third) {
                    alert(`Good choice. You chose ${SideMenuChoice}. ${comment()}`);
                    let total = calculateTotalLunchDiner(LunchChoice, SecondLunchChoice, SideMenuChoice, LunchMenuPrice, LunchMenuPrice, sideMenuPrice);
                    alert(`Your total is: ${total}`);
                } else {
                    alert(`Choose a valid dish. Our lunch menu has ${SidemenuItems.join(', ')}`);
                    LunchLogic();
                }
        } else {
            alert(`Choose a valid dish. Our lunch menu has ${SecondLunchMenuItems.join(', ')}`);
            LunchLogic();
        }
    } else {
        alert(`Choose a valid dish. Our lunch menu has ${LunchMenuItems.join(', ')}`);
        LunchLogic();
    }
}

function LunchMenuDisplay() {
    if (NumcurrentTime >= 12 && NumcurrentTime <= 15) {
        let menuItemsWithPrices = [];
        for (let item in LunchMenu) {
            let dish = LunchMenu[item];
            let price = LunchMenuPrice[dish];
            menuItemsWithPrices.push(`\n${dish}`);
        }
        alert(`Our lunch menu has: ${menuItemsWithPrices.join(', ')}`);
        LunchLogic();
    }
}

// Dinner
function DinnerLogic() {
    let DinnerChoice = prompt("Choose a Dinner dish:\nsalad: 5$, \nsteak: 20$, \nhake: 15$").toLowerCase();
    let DinnermenuItems = [];
    for (let item in DinnerMenu) {
        DinnermenuItems.push(DinnerMenu[item]);
    }
    if (DinnerChoice == DinnerMenu.first || DinnerChoice == DinnerMenu.second || DinnerChoice == DinnerMenu.third) {
        alert(`Good choice. You chose ${DinnerChoice}. ${comment()}`);
        let SecondDinnerChoice = prompt("Now choose a second dinner dish:\nsalad: 5$, \nsteak: 20$, \nhake: 15$").toLowerCase();
        let SecondDinnerMenuItems = [];
        for (let item in DinnerMenu) {
            SecondDinnerMenuItems.push(DinnerMenu[item]);
        }
        if (SecondDinnerChoice == DinnerMenu.first || SecondDinnerChoice == DinnerMenu.second || SecondDinnerChoice == DinnerMenu.third) {
            alert(`Good choice. You chose ${SecondDinnerChoice}. ${comment()}`);
            let SideDinnerMenuChoice = prompt("Now choose a Side Menu's dish:\nfries: 5$, \nbread: 3$, \nham: 2$").toLowerCase();
            let SecondSideMenuItems = [];
            for (let item in sideMenu) {
                SecondSideMenuItems.push(sideMenu[item]);
            }
            if (SideDinnerMenuChoice == sideMenu.first || SideDinnerMenuChoice == sideMenu.second || SideDinnerMenuChoice == sideMenu.third) {
                alert(`Good choice. You chose ${SideDinnerMenuChoice}. ${comment()}`);
                let total = calculateTotalLunchDiner(DinnerChoice, SecondDinnerChoice, SideDinnerMenuChoice, DinnerMenuPrice, DinnerMenuPrice, sideMenuPrice);
                alert(`Your total is: ${total}`);
            } else {
                alert(`Choose a valid dish. Our Dinner menu has ${SecondDinnerMenuItems.join(', ')}`);
                DinnerLogic();
            }
        } else {
            alert(`Choose a valid dish. Our Dinner menu has ${SecondDinnerMenuItems.join(', ')}`);
            DinnerLogic();
        }
    } else {
        alert(`Choose a valid dish. Our Dinner menu has ${DinnermenuItems.join(', ')}`);
        DinnerLogic();
    }
}

function DinnerMenuDisplay() {
    if (NumcurrentTime >= 16 && NumcurrentTime <= 22) {
        let menuItemsWithPrices = [];
        for (let item in DinnerMenu) {
            let dish = DinnerMenu[item];
            let price = DinnerMenuPrice[dish];
            menuItemsWithPrices.push(`${dish}`);
        }
        alert(`Our dinner menu has: ${menuItemsWithPrices.join(', ')}`);
        DinnerLogic();
    }
}

function calculateTotalLunchDiner(mainChoiceOne, mainChoiceTwo, sideChoice, mainMenuPriceOne, mainMenuPriceTwo, sideMenuPrice) {
    let mainPriceOne = mainChoiceOne ? mainMenuPriceOne[mainChoiceOne] : 0;
    let mainPriceTwo = mainChoiceTwo ? mainMenuPriceTwo[mainChoiceTwo] : 0;
    let sidePrice = sideChoice ? sideMenuPrice[sideChoice] : 0;
    let total = mainPriceOne +  mainPriceTwo + sidePrice;
    let totalWithIVA = total * 1.10; // Total con el 10% de IVA

    let totalMessage = `The price of the first dish is $${mainPriceOne}, the price of the second dish is $${mainPriceTwo}and the price of the third dish is         $${sidePrice}`
    return `\n${mainChoiceOne} ==> $${mainPriceOne}, \n${mainChoiceTwo} ==> $${mainPriceTwo}, \n${sideChoice} ==> $${sidePrice}. \nThe total is $${total}. \nThe total with 10% IVA is $${totalWithIVA.toFixed(2)}.`;
}

while (NumcurrentTime < 1 || NumcurrentTime > 24) {
    alert("The day isn't that short/long!")
    currentTime = prompt("What time is it?", "Enter a 24 hour format (enter a number between 1 and 24)")
    NumcurrentTime = parseInt(currentTime)
}

if (NumcurrentTime >= 7 && NumcurrentTime <= 11) {
    BreakfastMenu();
} else if (NumcurrentTime >= 12 && NumcurrentTime <= 15) {
    LunchMenuDisplay();
} else if (NumcurrentTime >= 16 && NumcurrentTime <= 22) {
    DinnerMenuDisplay();
} else {
    alert("We are closed. Please come back during our opening hours.");
}
