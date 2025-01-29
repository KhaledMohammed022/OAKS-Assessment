// The issue in your code arises because the setTimeout function is asynchronous. By the time the callback function inside setTimeout is executed,
// the loop has already finished running, and the value of i is 5 for all iterations.
// This happens because var is function-scoped, not block-scoped, so it doesn’t create a new scope for each iteration.
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
