import IPython.display as display

# Create HTML file
html_code = """
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My AI Portfolio</title>
  <style>
    body { font-family: Arial, sans-serif; background: #f9f9f9; color: #333; margin: 0; }
    header { background: #4CAF50; color: white; padding: 20px; text-align: center; }
    section { padding: 20px; }
    footer { background: #222; color: white; padding: 10px; text-align: center; }
  </style>
</head>
<body>
  <header>
    <h1>Hi, I’m Aradhya Marya</h1>
    <p>3rd Year AI Student | Durham College</p>
  </header>

  <section>
    <h2>About Me</h2>
    <p>I’m pursuing an Honours Bachelor in Artificial Intelligence. Passionate about ML & real-world AI projects.</p>
  </section>

  <section>
    <h2>Projects</h2>
    <ul>
      <li><b>English → French Translator:</b> Built using Python (googletrans library)</li>
    </ul>
  </section>

  <footer>
    <p>Contact: your.email@example.com</p>
  </footer>
</body>
</html>
"""

# Save to file
with open("portfolio.html", "w") as f:
    f.write(html_code)

# Display inside Colab
display.IFrame("portfolio.html", width=800, height=500)
