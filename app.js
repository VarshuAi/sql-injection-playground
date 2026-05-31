
            const db = [
                {id: 1, user: "admin", pass: "admin123"},
                {id: 2, user: "varshan", pass: "pass69"}
            ];
            
            window.runUnsafe = function() {
                const inp = document.getElementById('sqli-unsafe').value;
                const out = document.getElementById('sqli-unsafe-out');
                // Simulate injection parsing
                if (inp.includes("' OR '1'='1")) {
                    out.innerHTML = "<span style='color:red;'>[EXPLOITED] Dumped Table:</span>\n" + JSON.stringify(db, null, 2);
                } else {
                    const match = db.filter(u => u.user === inp);
                    out.innerText = JSON.stringify(match, null, 2);
                }
            }
            
            window.runSafe = function() {
                const inp = document.getElementById('sqli-safe').value;
                const out = document.getElementById('sqli-safe-out');
                // Parameterized parsing safely separates data
                const match = db.filter(u => u.user === inp);
                out.innerHTML = "<span style='color:green;'>[SAFE] Query Result:</span>\n" + JSON.stringify(match, null, 2);
            }
            runUnsafe();
            runSafe();
        