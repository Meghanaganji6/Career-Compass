function redirect(page) {
  window.location.href = "10th/10.html";
}

function openStreamForm() {
  document.getElementById('streamPopup').style.display = 'flex';
}

function closeStreamForm() {
  document.getElementById('streamPopup').style.display = 'none';
}

function submitStream() {
  const selected = document.querySelector('input[name="stream"]:checked');
  if (!selected) {
    alert("Please select a stream.");
    return;
  }

  const stream = selected.value;

  // Map stream to page URLs
  const streamPages = {
    science: "Sciencs/sci.html",
    commerce: "Commerce/com.html",
    arts: "Arts/art.html",
    vocational: "Others/voc.html",
    diploma: "Diploma/dip.html",
    skillBased: "SkillBased/ski.html"
  };

  if (streamPages[stream]) {
    window.location.href = streamPages[stream];
  } else {
    alert("Something went wrong. Please try again.");
  }
}
