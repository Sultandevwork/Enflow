let readyToAdopt = 'yes';

        function toggleDropdown(id, trigger) {
            // Close all others
            document.querySelectorAll('.dropdown').forEach(d => {
                if (d.id !== id) d.classList.remove('open');
            });
            document.getElementById(id).classList.toggle('open');
        }

        function closeDropdown(id) {
            document.getElementById(id).classList.remove('open');
        }

        function selectOption(valueId, value, dropdownId) {
            document.getElementById(valueId).textContent = value;
            document.getElementById(valueId).classList.add('selected');
            setTimeout(() => closeDropdown(dropdownId), 150);
        }

        function setToggle(val) {
            readyToAdopt = val;
            document.getElementById('yesBtn').classList.toggle('active', val === 'yes');
            document.getElementById('noBtn').classList.toggle('active', val === 'no');
        }

        function submitForm() {
            const required = ['fullName', 'businessName', 'phone', 'email'];
            for (let id of required) {
                if (!document.getElementById(id).value.trim()) {
                    document.getElementById(id).focus();
                    document.getElementById(id).style.borderColor = '#ef4444';
                    setTimeout(() => document.getElementById(id).style.borderColor = '', 2000);
                    return;
                }
            }
            const card = document.getElementById('formCard');
            const success = document.getElementById('successCard');
            card.style.opacity = '0';
            card.style.transform = 'translateY(-16px)';
            setTimeout(() => {
                card.style.display = 'none';
                success.style.display = 'flex';
                setTimeout(() => {
                    success.style.opacity = '1';
                    success.style.transform = 'translateY(0)';
                }, 30);
            }, 350);
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.custom-select')) {
                document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
            }
        });