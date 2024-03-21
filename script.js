function myFunc() {
  event.preventDefault();
  let otvet = [];
  let pr_otvet = [19, 3, 6, 25 , 140, 102, 9, 10, 13, 6];
  let score = 0;

  for (let i = 1; i <= 10; i++) {
    let ans = document.getElementById('ans' + i).value;
    otvet.push(ans);
  }

  for (let i = 0; i < otvet.length; i++) {
    if (pr_otvet[i]==otvet[i]) {
      score++;
    }
  }

  const kolvo_zadach = 10;
  let procent = score / kolvo_zadach * 100;
  let result = `Задания выполнены верно на ${procent}%`;
  document.getElementById("result").innerHTML = result;
}

document.getElementById('deleteButton').addEventListener('click', function(event) {
  event.target.parentNode.removeChild(event.target);
});

