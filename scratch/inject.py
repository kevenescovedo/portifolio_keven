html_content = open('c:/Users/keven/Documents/portifolio/scratch/sections.html', 'r', encoding='utf-8').read()
index_path = 'c:/Users/keven/Documents/portifolio/index.html'
index_content = open(index_path, 'r', encoding='utf-8').read()

js_functions = """
    // Accordion Toggle
    function toggleAccordion(element) {
      const isCurrentlyActive = element.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
      });
      if (!isCurrentlyActive) {
        element.classList.add('active');
      }
    }

    // Contact Form Fake Submit
    function submitForm(event) {
      event.preventDefault();
      const btn = document.getElementById('submit-btn');
      const msg = document.getElementById('success-msg');
      btn.innerHTML = '<iconify-icon icon="lucide:loader-2" class="animate-spin"></iconify-icon> Enviando...';
      btn.disabled = true;
      
      setTimeout(() => {
        btn.innerHTML = 'Enviado!';
        btn.classList.add('bg-emerald-500', 'text-white');
        btn.classList.remove('bg-white', 'text-black');
        msg.classList.remove('hidden');
        msg.classList.remove('opacity-0');
        msg.classList.add('opacity-100');
        document.getElementById('contact-form').reset();
      }, 1500);
    }
"""

new_index = index_content.replace('  <!-- Interactive Scripts -->', html_content + '\n  <!-- Interactive Scripts -->')
new_index = new_index.replace('    });\n  </script>', '    });\n' + js_functions + '  </script>')

with open(index_path, 'w', encoding='utf-8') as f:
    f.write(new_index)
print('Injection Complete!')
