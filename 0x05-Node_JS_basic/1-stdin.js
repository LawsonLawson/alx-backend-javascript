/**
 * Displays a welcome message and prompts the user to input their name.
 *
 * This program writes a welcome message to the console asking for the user's name.
 * It listens for input from the terminal (stdin) and displays the user's input back
 * to the console with a formatted message. The program also handles the `end` event,
 * which occurs when the input stream is closed (e.g., when the user presses Ctrl+D).
 */

// Write the initial message prompting the user for input
process.stdout.write('Welcome to Holberton School, what is your name?\n');

/**
 * Listens for data from the standard input (stdin).
 *
 * When the user provides input, it reads that input using `process.stdin.read()`
 * and then displays the message "Your name is: [input]" to the standard output (stdout).
 * If no input is provided, no action is taken.
 */
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  // If data is available, print the user's name
  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

/**
 * Handles the end of input stream.
 *
 * When the input stream is closed (i.e., the user sends an EOF signal like Ctrl+D),
 * it writes a closing message to the console: "This important software is now closing."
 */
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
