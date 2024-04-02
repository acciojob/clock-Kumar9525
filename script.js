//your JS code here. If required.
    function updateTimer() {
      // Get the current date and time
      const now = new Date();

      // Format the date and time
      const formattedDateTime = now.toLocaleString();

      // Display the formatted date and time in the timer element
      document.getElementById('timer').textContent = formattedDateTime;
    }

    // Call the updateTimer function initially to display the current date and time
    updateTimer();

    // Call the updateTimer function every second to keep the timer updated
    setInterval(updateTimer, 1000);