// =================================================================
// NOTICIAS DE DIDNOTFINISH
// Este archivo contiene todas las noticias de la web. Cada noticia tiene
// su propia dirección: https://didnotfinish.netlify.app/noticias/<slug>
// Campo opcional en cualquier noticia:
//   image -> URL de una foto para la vista previa al compartir en redes
// =================================================================

// ---------------------------------------------------------------
// NOTICIAS GENERALES
// Esta es la portada de noticias situada justo debajo del Hero.
// Añade cada noticia nueva al principio del array para que aparezca
// antes que las anteriores.
// ---------------------------------------------------------------
export const GENERAL_NEWS = [
  {
    "slug": "minimas-olimpicas-la28-records-espana",
    "date": "11 nov 2026",
    "tag": "Mínimas",
    "title": "Mínimas de LA28: en 20 de 39 pruebas ni el récord de España llega",
    "subtitle": "World Athletics endurece las marcas de entrada para Los Ángeles 2028; las comparamos prueba a prueba con los récords absolutos de España",
    "image": "/images/minimas-la28-portada.png",
    "imageAlt": "En 20 de 39 pruebas ni el récord de España llega a la mínima olímpica de LA28",
    "imageCaption": "Infografía: DIDNOTFINISH, con datos de World Athletics y la RFEA.",
    "body": "<strong>11 de noviembre de 2026.</strong> World Athletics publicó el 10 de noviembre las marcas de entrada para los Juegos de Los Ángeles 2028 y ha endurecido todas las carreras respecto a París 2024. Frente a los récords absolutos de España al aire libre, en 19 pruebas el récord ya supera la mínima; en 20, ni la mejor marca de la historia española alcanza.",
    "sections": [
      {
        "heading": "Qué ha cambiado respecto a París",
        "paragraphs": [
          "Las marcas de entrada bajan en todas las carreras: el maratón masculino pasa de 2:08:10 a 2:05:00 y el femenino, de 2:26:50 a 2:22:20; en 1.500 m, de 3:33.50 a 3:30.00 (hombres) y de 4:02.50 a 3:57.50 (mujeres). En los concursos el movimiento es menor y desigual: suben pértiga, longitud, triple masculino, martillo masculino, peso y disco femeninos, decatlón y heptatlón; se mantienen peso, disco y jabalina masculinos, altura femenina y martillo femenino, y tres marcas se relajan ligeramente (altura masculina, triple femenino y jabalina femenina).",
          "El sistema también cambia. Alrededor del <strong>40 %</strong> de los atletas entrará por marca y el <strong>60 %</strong> por ranking mundial, frente al 50/50 de París. Si en una prueba más atletas alcanzan la mínima que plazas hay, entran los de mejores marcas del periodo y ya no hay plazas por ranking."
        ]
      },
      {
        "heading": "Dónde está la distancia",
        "image": "/images/infografia-minimas-la28.png",
        "imageAlt": "Infografía con la distancia entre el récord de España y la mínima de LA28 en cada prueba: 20 de 39 sin llegar",
        "imageCaption": "Distancia entre el récord de España y la mínima de LA28, prueba a prueba. Rojo: el récord no llega; negro: ya la supera.",
        "paragraphs": [
          "Entre los hombres, el récord no llega en <strong>10 de 20</strong> pruebas. Las más ajustadas son 200 m (0.09 s), 10.000 m (1.49 s), 400 m vallas (0.11 s), peso (0.03 m). El maratón queda a 48 s (2:05:48 de Tariku Novales frente a 2:05:00) y el decatlón, a 116 pts. En los 100 m, el 10.06 de Hortelano queda a 0.13 s del 9.93 exigido.",
          "Entre las mujeres, el récord no llega en <strong>10 de 19</strong> pruebas. En el medio fondo y el obstáculos se quedan a décimas o a poco más de un segundo (800 m (0.45 s), 1.500 m (0.25 s), 3.000 m obst. (1.32 s)), pero en los lanzamientos y las combinadas la distancia es otra: disco (3.11 m, con 61.89 frente a 65.00) y heptatlón (246 pts, con 6.304 frente a 6.550) son las brechas más grandes de toda la comparación.",
          "En porcentaje sobre la mínima, la prueba más lejana es el disco femenino (4.8 %) y la más cercana, los 10.000 m masculinos (0.09 %: 26:49.49 de Thierry Ndikumwenayo frente a 26:48.00)."
        ]
      },
      {
        "heading": "Lo que esta comparación no dice",
        "list": [
          "<strong>Un récord que supera la mínima no es un atleta que la tenga.</strong> De los 19 récords que ya superan la marca exigida, 8 se establecieron entre 1991 y 2010 (Ortiz en altura, Lamela en longitud, Beitia, Montalvo, Myers, Onyia, Chilla, Pestano…). Que el récord la supere no significa que los atletas actuales estén cerca.",
          "<strong>Ninguna marca de hoy cuenta todavía.</strong> Las ventanas de clasificación son: maratón, del 1 de noviembre de 2026 al 30 de abril de 2028; 10.000 m, combinadas, marchas y relevos, del 19 de diciembre de 2026 al 18 de junio de 2028; resto de pruebas, del 19 de junio de 2027 al 18 de junio de 2028.",
          "<strong>Alcanzar la mínima no garantiza plaza</strong>, y el 60 % de las plazas se reparte por ranking, donde la regularidad pesa tanto como una sola marca."
        ]
      },
      {
        "heading": "La comparación, prueba a prueba",
        "paragraphs": [
          "Mínima de LA28 (entre paréntesis, la de París 2024), récord absoluto de España al aire libre y diferencia entre ambos."
        ],
        "tables": [
          {
            "caption": "Hombres",
            "headers": [
              "Prueba",
              "Mínima LA28",
              "Récord de España",
              "Diferencia"
            ],
            "rows": [
              [
                "100 m",
                "9.93<br><span style=\"opacity:.6\">París 10.00</span>",
                "10.06<br><span style=\"opacity:.6\">Hortelano, 2016</span>",
                "<strong>+0.13 s</strong>"
              ],
              [
                "200 m",
                "19.95<br><span style=\"opacity:.6\">París 20.16</span>",
                "20.04<br><span style=\"opacity:.6\">Hortelano, 2018</span>",
                "<strong>+0.09 s</strong>"
              ],
              [
                "400 m",
                "44.40<br><span style=\"opacity:.6\">París 45.00</span>",
                "44.69<br><span style=\"opacity:.6\">Hortelano, 2018</span>",
                "<strong>+0.29 s</strong>"
              ],
              [
                "800 m",
                "1:43.00<br><span style=\"opacity:.6\">París 1:44.70</span>",
                "1:42.04<br><span style=\"opacity:.6\">Attaoui, 2024</span>",
                "−0.96 s"
              ],
              [
                "1.500 m",
                "3:30.00<br><span style=\"opacity:.6\">París 3:33.50</span>",
                "3:28.76<br><span style=\"opacity:.6\">Katir, 2021</span>",
                "−1.24 s"
              ],
              [
                "5.000 m",
                "12:50.00<br><span style=\"opacity:.6\">París 13:05.00</span>",
                "12:45.01<br><span style=\"opacity:.6\">Katir, 2023</span>",
                "−4.99 s"
              ],
              [
                "10.000 m",
                "26:48.00<br><span style=\"opacity:.6\">París 27:00.00</span>",
                "26:49.49<br><span style=\"opacity:.6\">Ndikumwenayo, 2024</span>",
                "<strong>+1.49 s</strong>"
              ],
              [
                "Maratón",
                "2:05:00<br><span style=\"opacity:.6\">París 2:08:10</span>",
                "2:05:48<br><span style=\"opacity:.6\">Novales, 2023</span>",
                "<strong>+48 s</strong>"
              ],
              [
                "110 m vallas",
                "13.18<br><span style=\"opacity:.6\">París 13.27</span>",
                "13.04<br><span style=\"opacity:.6\">Ortega, 2016</span>",
                "−0.14 s"
              ],
              [
                "400 m vallas",
                "48.00<br><span style=\"opacity:.6\">París 48.70</span>",
                "48.11<br><span style=\"opacity:.6\">J. D. Delgado, 2026</span>",
                "<strong>+0.11 s</strong>"
              ],
              [
                "3.000 m obst.",
                "8:07.50<br><span style=\"opacity:.6\">París 8:15.00</span>",
                "8:05.69<br><span style=\"opacity:.6\">Carro, 2019</span>",
                "−1.81 s"
              ],
              [
                "Altura",
                "2.32<br><span style=\"opacity:.6\">París 2.33</span>",
                "2.34<br><span style=\"opacity:.6\">Ortiz, 1991</span>",
                "−0.02 m"
              ],
              [
                "Pértiga",
                "5.90<br><span style=\"opacity:.6\">París 5.82</span>",
                "5.81<br><span style=\"opacity:.6\">Miranda, 2000</span>",
                "<strong>+0.09 m</strong>"
              ],
              [
                "Longitud",
                "8.30<br><span style=\"opacity:.6\">París 8.27</span>",
                "8.56<br><span style=\"opacity:.6\">Lamela, 1999</span>",
                "−0.26 m"
              ],
              [
                "Triple salto",
                "17.35<br><span style=\"opacity:.6\">París 17.22</span>",
                "18.18<br><span style=\"opacity:.6\">J. Díaz, 2024</span>",
                "−0.83 m"
              ],
              [
                "Peso",
                "21.50<br><span style=\"opacity:.6\">París 21.50</span>",
                "21.47<br><span style=\"opacity:.6\">M. Martínez, 2002</span>",
                "<strong>+0.03 m</strong>"
              ],
              [
                "Disco",
                "67.20<br><span style=\"opacity:.6\">París 67.20</span>",
                "69.50<br><span style=\"opacity:.6\">Pestano, 2008</span>",
                "−2.30 m"
              ],
              [
                "Martillo",
                "78.50<br><span style=\"opacity:.6\">París 78.20</span>",
                "79.38<br><span style=\"opacity:.6\">Cienfuegos, 2019</span>",
                "−0.88 m"
              ],
              [
                "Jabalina",
                "85.50<br><span style=\"opacity:.6\">París 85.50</span>",
                "84.80<br><span style=\"opacity:.6\">Jainaga, 2021</span>",
                "<strong>+0.70 m</strong>"
              ],
              [
                "Decatlón",
                "8650<br><span style=\"opacity:.6\">París 8460</span>",
                "8534<br><span style=\"opacity:.6\">Peñalver, 1994</span>",
                "<strong>+116 pts</strong>"
              ]
            ]
          },
          {
            "caption": "Mujeres",
            "headers": [
              "Prueba",
              "Mínima LA28",
              "Récord de España",
              "Diferencia"
            ],
            "rows": [
              [
                "100 m",
                "10.96<br><span style=\"opacity:.6\">París 11.07</span>",
                "11.06<br><span style=\"opacity:.6\">Myers, 1991</span>",
                "<strong>+0.10 s</strong>"
              ],
              [
                "200 m",
                "22.25<br><span style=\"opacity:.6\">París 22.57</span>",
                "22.19<br><span style=\"opacity:.6\">Bestué, 2025</span>",
                "−0.06 s"
              ],
              [
                "400 m",
                "49.90<br><span style=\"opacity:.6\">París 50.95</span>",
                "49.67<br><span style=\"opacity:.6\">Myers, 1991</span>",
                "−0.23 s"
              ],
              [
                "800 m",
                "1:57.00<br><span style=\"opacity:.6\">París 1:59.30</span>",
                "1:57.45<br><span style=\"opacity:.6\">Zúñiga, 1988</span>",
                "<strong>+0.45 s</strong>"
              ],
              [
                "1.500 m",
                "3:57.50<br><span style=\"opacity:.6\">París 4:02.50</span>",
                "3:57.75<br><span style=\"opacity:.6\">M. Pérez, 2024</span>",
                "<strong>+0.25 s</strong>"
              ],
              [
                "5.000 m",
                "14:34.00<br><span style=\"opacity:.6\">París 14:52.00</span>",
                "14:33.40<br><span style=\"opacity:.6\">M. García, 2025</span>",
                "−0.60 s"
              ],
              [
                "10.000 m",
                "30:30.00<br><span style=\"opacity:.6\">París 30:40.00</span>",
                "30:51.69<br><span style=\"opacity:.6\">M. Domínguez, 2006</span>",
                "<strong>+21.69 s</strong>"
              ],
              [
                "Maratón",
                "2:22:20<br><span style=\"opacity:.6\">París 2:26:50</span>",
                "2:21:27<br><span style=\"opacity:.6\">Maayouf, 2023</span>",
                "−53 s"
              ],
              [
                "100 m vallas",
                "12.58<br><span style=\"opacity:.6\">París 12.77</span>",
                "12.50<br><span style=\"opacity:.6\">Onyia, 2008</span>",
                "−0.08 s"
              ],
              [
                "400 m vallas",
                "54.00<br><span style=\"opacity:.6\">París 54.85</span>",
                "54.34<br><span style=\"opacity:.6\">S. Gallego, 2022</span>",
                "<strong>+0.34 s</strong>"
              ],
              [
                "3.000 m obst.",
                "9:06.00<br><span style=\"opacity:.6\">París 9:23.00</span>",
                "9:07.32<br><span style=\"opacity:.6\">M. Domínguez, 2009</span>",
                "<strong>+1.32 s</strong>"
              ],
              [
                "Altura",
                "1.97<br><span style=\"opacity:.6\">París 1.97</span>",
                "2.02<br><span style=\"opacity:.6\">Beitia, 2007</span>",
                "−0.05 m"
              ],
              [
                "Longitud",
                "6.90<br><span style=\"opacity:.6\">París 6.86</span>",
                "7.06<br><span style=\"opacity:.6\">Montalvo, 1999</span>",
                "−0.16 m"
              ],
              [
                "Triple salto",
                "14.50<br><span style=\"opacity:.6\">París 14.55</span>",
                "14.87<br><span style=\"opacity:.6\">Peleteiro, 2021</span>",
                "−0.37 m"
              ],
              [
                "Peso",
                "19.30<br><span style=\"opacity:.6\">París 18.80</span>",
                "18.80<br><span style=\"opacity:.6\">Toimil, 2021</span>",
                "<strong>+0.50 m</strong>"
              ],
              [
                "Disco",
                "65.00<br><span style=\"opacity:.6\">París 64.50</span>",
                "61.89<br><span style=\"opacity:.6\">Asenjo, 2016</span>",
                "<strong>+3.11 m</strong>"
              ],
              [
                "Martillo",
                "74.00<br><span style=\"opacity:.6\">París 74.00</span>",
                "72.00<br><span style=\"opacity:.6\">L. Redondo, 2022</span>",
                "<strong>+2.00 m</strong>"
              ],
              [
                "Jabalina",
                "63.80<br><span style=\"opacity:.6\">París 64.00</span>",
                "64.07<br><span style=\"opacity:.6\">Chilla, 2010</span>",
                "−0.27 m"
              ],
              [
                "Heptatlón",
                "6550<br><span style=\"opacity:.6\">París 6480</span>",
                "6304<br><span style=\"opacity:.6\">M. Vicente, 2021</span>",
                "<strong>+246 pts</strong>"
              ]
            ]
          }
        ],
        "after": [
          "<em>Diferencia: «+» es lo que le falta al récord para igualar la mínima (en negrita, no llega); «−» es lo que la supera.</em>"
        ]
      },
      {
        "heading": "Notas sobre los datos y fuentes",
        "list": [
          "Récords de España absolutos al aire libre. Los femeninos proceden de la ficha oficial de la RFEA; los masculinos, de una recopilación basada en la ficha oficial actualizada a 25 de octubre de 2026, pendiente de contrastar con la página de la RFEA.",
          "Pértiga femenina excluida: las fuentes consultadas no coinciden en cuál es el récord al aire libre.",
          "La RFEA lista dos marcas femeninas recientes pendientes de homologación (jabalina 65.39 y heptatlón 6.372); se usan las ratificadas (64.07 y 6.304). En el heptatlón la conclusión no cambia: 6.372 sigue lejos de 6.550.",
          "En 3.000 m obstáculos femeninos se usa 9:07.32 (Marta Domínguez, Berlín 2009).",
          "Las marchas no tienen mínima publicada en las fuentes consultadas y quedan fuera."
        ],
        "after": [
          "<strong>Fuentes:</strong> <a href=\"https://athleticsillustrated.com/la-28-qualification-standards-are-out-and-they-are-more-difficult/\" target=\"_blank\" rel=\"noopener\">Athletics Illustrated</a> · <a href=\"https://www.jamaicaobserver.com/2026/11/10/world-athletics-raises-bar-la28-new-olympic-qualifying-standards-unveiled/\" target=\"_blank\" rel=\"noopener\">Jamaica Observer</a> · <a href=\"https://cada-atletismo.org/world-athletics-anuncia-el-sistema-de-clasificacion-para-los-angeles-2028/\" target=\"_blank\" rel=\"noopener\">CADA</a> · <a href=\"https://www.rfeacontent.es/records/recordsESP_ABS_mujeres.htm\" target=\"_blank\" rel=\"noopener\">RFEA (récords femeninos)</a> · <a href=\"https://en.wikipedia.org/wiki/List_of_Spanish_records_in_athletics\" target=\"_blank\" rel=\"noopener\">Wikipedia (récords de España)</a>"
        ]
      }
    ]
  },
  {
  "slug": "cronica-cross-italica-2026",
  "date": "9 nov 2026",
  "tag": "Cross",
  "title": "Amebaw y Kwizera conquistan Itálica",
  "subtitle": "Kwizera gana por un segundo y Amebaw encabeza el podio femenino; Robles, Forero y la cantera ponen el acento andaluz",
  "image": "/images/italica-2026-amebaw.jpg",
  "imageAlt": "Likina Amebaw corre por el circuito del Cross Internacional de Itálica",
  "imageCaption": "Likina Amebaw, vencedora de la prueba internacional femenina. Foto: @finidiblanco",
  "body": "<strong>Santiponce, 8 de noviembre de 2026.</strong> Itálica dejó dos victorias con márgenes muy distintos. Likina Amebaw se impuso en la internacional femenina con 30:41, ocho segundos por delante de Charity Cherop. En la masculina, Rodrigue Kwizera ganó con 27:37 en un podio comprimido en apenas dos segundos. La XLIV edición también tuvo un marcado protagonismo andaluz: Carolina Robles y María Forero fueron las dos primeras españolas, y las victorias de Carla Cabezas en sub20 y Manuel Cruz Tejada en sub18 dieron brillo a la cantera.",
  "sections": [
    {
      "heading": "Internacional femenina: Amebaw hace valer su candidatura",
      "paragraphs": [
        "La clasificación confirmó a <strong>Likina Amebaw</strong> como la referencia de la carrera femenina. La etíope cerró su actuación en <strong>30:41</strong>, por los 30:49 de la ugandesa <strong>Charity Cherop</strong> y los 30:57 de la keniana <strong>Cynthia Chepkirui</strong>. Dieciséis segundos separaron a las tres primeras: un podio de alto nivel en el que Amebaw encontró el margen necesario para llevarse la victoria.",
        "Yenenesh Shimket terminó cuarta en 31:24, a 43 segundos de la ganadora. Maurine Jepkoech Chebor fue quinta con 32:02 y Francine Niyomukunzi, sexta con 32:06. La neerlandesa Amina Maatoug completó el grupo de siete primeras en 32:18, antes de la llegada de las mejores españolas.",
        "<strong>Carolina Robles fue octava y primera española con 32:51.</strong> La sevillana precedió a la onubense <strong>María Forero</strong>, novena en 33:16, para firmar dos puestos andaluces entre las diez primeras. Marta Serrano acabó undécima con 33:26; Ángela Viciosa fue decimocuarta con 33:37 y Carla Gallardo, decimoquinta con 34:01."
      ]
    },
    {
      "heading": "Internacional masculina: tres hombres en dos segundos",
      "image": "/images/italica-2026-kwizera-kiboino.jpg",
      "imageAlt": "Rodrigue Kwizera y Charles Kiboino durante el Cross Internacional de Itálica",
      "imageCaption": "Rodrigue Kwizera y Charles Kiboino, primero y segundo en la clasificación final. Foto: @finidiblanco",
      "paragraphs": [
        "<strong>Rodrigue Kwizera repitió victoria en Itálica</strong> con un desenlace ajustadísimo en los tiempos: 27:37 para el ganador, 27:38 para el keniano <strong>Charles Kiboino Kiprono</strong> y 27:39 para su compatriota <strong>Frankline Kibet</strong>. Un segundo entre cada escalón del podio resume la igualdad de la lucha por el triunfo.",
        "Denis Kipkoech fue cuarto con 27:52. Por detrás, <strong>Thierry Ndikumwenayo</strong> terminó quinto en 27:59 y <strong>Miguel Ángel Martínez Chazarra</strong> fue sexto en 28:00, a un solo segundo. Con Kwizera, tres atletas que figuran con nacionalidad española en la clasificación entraron entre los seis primeros.",
        "Andrew Kiptoo Alamisi ocupó la séptima plaza con 28:17. Dismas Yeko y Berihu Aregawi marcaron ambos 28:24, con el ugandés octavo y el etíope noveno según el orden oficial. Samuel Simba Cherop cerró los diez primeros en 28:42. Entre los españoles, Juan Antonio Pérez fue decimocuarto con 28:52 y Zakaria Boufaljat, decimosexto con 28:55."
      ]
    },
    {
      "heading": "La actuación andaluza: Robles y Forero abren el camino",
      "paragraphs": [
        "<strong>El octavo puesto de Carolina Robles y el noveno de María Forero</strong> fueron las principales referencias andaluzas en las internacionales. Las dos encabezaron la clasificación española femenina, separadas por 25 segundos. También finalizaron Nadia Lozano, del Unicaja Jaén, 26.ª con 36:58, y las atletas del Trops-Cueva de Nerja María del Mar Marques Córdoba, 31.ª con 38:00, y Andrea Cobo Pérez, 32.ª con 38:53.",
        "En hombres, el granadino <strong>Ignacio Fontes</strong> fue 27.º con 29:38. Por clubes andaluces, <strong>Nabil Sebbar</strong>, del Trops-Cueva de Nerja, terminó 34.º en 29:53. También completaron la prueba Mahmud Abnu Hamadi, del Córdoba Patrimonio, 61.º con 32:47; Said Elbouchikhi, del Maratón Marchena, 63.º con 33:04; Nicolás Manuel Montero, del Runchip Jerez, 64.º con 33:09, y Diego Clemente, del Atletismo Delsur, 65.º con 33:31."
      ]
    },
    {
      "heading": "Sub20: Carla Cabezas gana y Amanda Román sube al podio",
      "paragraphs": [
        "<strong>Carla Cabezas Moreno, del Unicaja, ganó la sub20 femenina en 17:29</strong>, con cinco segundos sobre Mara Rolli Grau (17:34). <strong>Amanda Román Vázquez</strong> completó el podio en 17:48. La presencia de los clubes andaluces se prolongó con María Flores García, del Trops-Cueva de Nerja, cuarta en 18:16, y su compañera Daniela Sierra Gálvez, sexta en 18:55. Victoria Cordón Díaz, del Club Onubense de Atletismo, fue novena en 19:53.",
        "En la sub20 masculina ganó Álvaro González Fernández con 14:16, seguido de Alejandro Ibáñez (14:21) y Adriá Boyano Requena (14:28). <strong>Samuel Ruiz Herrador, del Trops-Cueva de Nerja, entró noveno con 14:55</strong>. Mateo del Nogal García, del Maracena, terminó 17.º en 15:22, y Jesús Jódar Alonso, del Trops, fue 23.º con 16:04."
      ]
    },
    {
      "heading": "Sub18: doblete andaluz y cuatro puestos entre los cinco primeros",
      "paragraphs": [
        "<strong>Manuel Cruz Tejada, del Atletismo Hornachuelos, ganó con 11:25</strong> y Rafael Jesús Sánchez Castro, del Unicaja, fue segundo en 11:32. El portugués Santiago Fernandes completó el podio con 11:36. David Feria Sánchez, del Club Onubense de Atletismo, terminó cuarto en 11:42, y Alejandro Perálvarez López, del Hornachuelos, quinto en 11:43. Cuatro atletas de clubes andaluces entre los cinco primeros, con Mario Casas Méndez, del Trops-Cueva de Nerja, también en el top diez: noveno con 12:05.",
        "En la sub18 femenina venció Sandra Velasco Antón con 13:35, por delante de Elena Torres Volkava (13:38) y Andrea González Yagüe (13:41). <strong>Sara Lladó García, del Atletismo Chiclana, fue quinta con 14:11</strong>, seguida a solo un segundo por <strong>Marta Rodríguez Aguilar, del Atletismo Baza</strong>, sexta con 14:12. María Carrasco Álvarez, del Hornachuelos, cerró las diez primeras con 14:53, e Irene Morales Rodríguez, del Bahía Algeciras, fue undécima en 14:54."
      ]
    },
    {
      "heading": "Relevo mixto popular: SBT 1 encabeza la clasificación",
      "paragraphs": [
        "La prueba denominada <strong>Cross Popular Relevo Mixto</strong> en los resultados tuvo como ganador a <strong>SBT 1, con 16:38</strong>, por delante de Despega (17:11) y Mauri Castillo (17:23). Los Choqueros acabaron cuartos en 18:10, SBT 2.0 fue quinto con 18:52 y Escuela Carmen Valle, sexta con 18:59."
      ]
    }
  ]
},
  {
    slug: "la-previa-al-cross-de-italica-2026",
    date: "5 nov 2026",
    tag: "Cross",
    title: "La previa al Cross de Itálica",
    subtitle: "Itálica 2026: Kwizera busca el doblete en un cartel de máximo nivel",
    image: "/images/cross-italica-2026.jpg",
    imageAlt: "Cross Internacional de Itálica 2026",
    body: "Este domingo 8 de noviembre, el Cross Internacional de Itálica vuelve a Santiponce. La cita, de nivel Gold en el World Athletics Cross Country Tour, llega con una lista masculina que mezcla estrellas de pista, jóvenes kenianos recién coronados y la plana mayor del fondo español.",
    sections: [
      {
        paragraphs: [
          "<strong>El rey, en casa.</strong> Rodrigue Kwizera defiende título. Su victoria de 2025 en 26:10 se decidió en un final táctico: Alamisi se lanzó a un kilómetro de meta, con Kipkoech y Kwizera pegados, y el hoy español atacó en la bajada a 500 metros del final. Un año después llega más fuerte en carretera: récord del recorrido en el Medio Maratón de Praga en marzo (58:16) y victoria en el Medio Maratón de Valencia en octubre (58:03) con Récord de España incluido, con Ndikumwenayo segundo a solo seis segundo, batiendo el Récord de Europa.",
          "<strong>Aregawi, el gran rival.</strong> Berihu Aregawi es el nombre de mayor palmarés de la lista. Fue plata individual en el Mundial de Cross de Tallahassee 2026 y oro por equipos con Etiopía, y ganó el Juan Muguerza de Elgoibar en enero. En Sevilla aún no ha ganado: en 2024 fue tercero, con un tiempo muy cercano a los de Ndikumwenayo y Kwizera. Si el ritmo es alto y la carrera llega abierta al último kilómetro, es el candidato con más cambio de ritmo de todo el cartel",
          "<strong>Ndikumwenayo y la nueva ola keniana.</strong> Thierry Ndikumwenayo, ganador en 2022 y 2024, fue quinto el año pasado (26:26) y llega con ese medio maratón de Valencia en las piernas. Del lado keniano, el trío que ya puso en apuros a Kwizera vuelve con más galones. Andrew Alamisi, segundo en 2025, es campeón del mundo sub-20 de 5.000. Denis Kipkoech, tercero el año pasado, corrió los 5.000 en 13:21.85 en el Kip Keino Classic de abril. Y Frankline Kibet, con solo 19 años, ganó el oro mundial sub-20 de 5.000 en Eugene tras proclamarse campeón del mundo sub-20 de cross en enero.",
          "<strong>Los segundos espadas con peligro.</strong> Entre los etíopes, Adisu Wegene trae una marca de 7:47.64 en 3.000 en Madrid este año y Fasika Ayele, 28:52 en 10 km en ruta en marzo. El ugandés Samuel Simba Cherop firmó 13:46.45 en 5.000 en los Juegos de la Solidaridad Islámica, a sus 19 años.",
          "<strong>La lucha española.</strong> Aarón Las Heras fue sexto en 2025 con el mismo tiempo que Ndikumwenayo (26:26) y viene de hacer un grandísimo crono en el Medio Maratón de Valencia, una hora justa, y por detrás entraron Yahya Aouina (10º, 26:38), Zakaria Boufaljat (13º, 26:57) e Ignacio Fontes (19º, 27:18). Mesfin Escamilla fue 30º y Daniel Arce, 50º. El objetivo de los españoles será mejorar posiciones y, si la carrera se rompe, colarse en el grupo de cabeza."
        ]
      },
      {
        heading: "La prueba femenina",
        paragraphs: [
          "El Cross Internacional de Itálica se corre este domingo 8 de noviembre, y la carrera femenina llega sin su campeona. Winfred Yavi ganó el año pasado en 28:58, pero ni ella ni la segunda, Daisy Jepkemei, ni la cuarta, Celestin Jepkosgei Biwot, figuran en la lista de este año. Por tanto aquí no se puede «repetir el triunfo», porque el trono está vacío. La tercera clasificada de 2025 sí vuelve, y llega en mejor forma.",
          "<strong>La favorita: Likina Amebaw.</strong> La etíope afincada en España fue tercera en Sevilla en 2025 (29:37) y ganó en Soria la semana siguiente. Su 2026 ha sido de otro nivel. Ganó los 5.000 del World Athletics Ultimate Championship en Budapest en septiembre, y firmó un 10 km en 30:59 en junio. En Amorebieta, el 18 de octubre, ganó por tercera vez con 28:41 en su primera carrera como campeona del mundo, 31 segundos por delante de Francine Niyomukunzi. Terminó además segunda del ranking de la World Athletics Cross Country Tour 2025-26. Es la candidata clara, y lo normal es que mande en cabeza desde el principio.",
          "<strong>Las jóvenes que pueden romper la carrera.</strong> La principal amenaza viene de la nueva generación. Yenenesh Shimket, etíope de 19 años, ganó en Alcobendas el año pasado. En 2026 corrió los 5.000 en 14:48.02 y firmó 30:21 en un 10 km en Brasov, mejor marca mundial sub-20 en ruta. Charity Cherop, ugandesa de 19 años, es campeona del mundo sub-20 de 5.000 en Eugene (15:03.88). También fue bronce sub-20 en el Mundial de Cross, y su marca de 14:39.38 en 5.000 es récord nacional. Cynthia Chepkirui, keniana de 18 años, fue cuarta en el Mundial sub-20 de cross y de 5.000, y ganó en Cardiff y en el Betika de Kericho. De ese grupo parece salir la principal rival de Amebaw en el último kilómetro.",
          "<strong>Más nombres a vigilar.</strong> Niyomukunzi (BDI) ya ha demostrado velocidad en el cross: ganó en Lidingö y fue segunda en Zornotza. Maurine Jepkoech Chebor (KEN), de 22 años, fue octava en el Mundial de Cross y campeona de Kenia en 2025, y bajó de 14:40 en 5.000 en mayo. Wosane Asefa Mangistu fue plata sub-20 en el Mundial de cross. Izzy Fry (GBR), campeona británica de 10.000 en 2026 (32:12.91), aporta un perfil de más fondo.",
          "<strong>La lucha española.</strong> El año pasado hubo seis españolas entre las diez primeras. María Forero fue la primera, quinta con 31:07. Es campeona de Europa sub-23 de cross, y fue 14ª en el Mundial de Tallahassee con 33:53, la mejor española. Carolina Robles, campeona de España de cross en 2024 y 2025, llega en casa tras ser décima en 2025. Detrás, Ángela Viciosa (8ª en 2025) y Marta Serrano (9ª) cerraron con el mismo tiempo, 31:35. También repiten Carla Gallardo (11ª), Claudia Corral (16ª), Beatriz Álvarez (21ª) y Ainhoa Brea (23ª). Corral y Gallardo están en el top 30 del ranking mundial de cross. Con cuatro africanas de máximo nivel en cabeza, el reto español es repetir un puesto entre las cinco o seis primeras."
        ]
      }
    ]
  },
  {
    slug: "cross-clubes-andalucia-cartama-2026",
    date: "1 nov 2026",
    tag: "Cross por clubes",
    title: "Campeonato de Andalucía de Cross por Clubes",
    subtitle: "Trops-Cueva de Nerja arrasa en Cártama y se lleva 9 de los 15 títulos por equipos del Andalucía de Cross por Clubes",
    body: "<strong>Cártama (Málaga), 1 de noviembre de 2026.</strong> El Campeonato de Andalucía de Clubes de Campo a Través, de Sub12 a Absoluto, se disputó en Cártama con un dominio claro del <strong>Trops-Cueva de Nerja</strong>, que ganó 9 de las 15 clasificaciones por equipos. El Trotasierra Hornachuelos (tres títulos), el CD Galosport (dos) y el CD Atletismo Bollullos (uno) completaron el reparto.",
    sections: [
      {
        heading: "Trops-Cueva de Nerja, un rodillo",
        paragraphs: [
          "El club malagueño ganó en Absoluto masculino y femenino, Sub23 masculino y femenino, Sub20 masculino y femenino, Sub16 femenino, Sub14 masculino y relevo mixto."
        ],
        list: [
          "<strong>Absoluto femenino:</strong> Nazha Machrouh ganó en 26:07 y Trops colocó a sus cuatro primeras corredoras en los puestos 1 a 4 (10 puntos).",
          "<strong>Sub23:</strong> doblete de Trops. Mario Esparraga (23:03) y Marina Jiménez (27:21) ganaron las pruebas masculina y femenina, y ambos equipos copaban los tres primeros puestos.",
          "<strong>Sub20:</strong> Samuel Ruiz Herrador (16:37) y Amanda Román (18:34) vencieron en sus pruebas, con victoria por equipos de Trops.",
          "<strong>Absoluto masculino:</strong> la prueba más igualada de la jornada. Trops ganó con 29 puntos, pero el segundo puesto se decidió en un desempate: Unicaja Jaén y CD Surco Lucena terminaron con 50 puntos y el Trotasierra quedó a solo dos (52). Individualmente ganó Youness Belyamna (DELSUR Coop La Palma, 21:52), por delante de Nabil Sebbar (Trops) y Andrés Estepa (Unicaja).",
          "<strong>Relevo mixto:</strong> victoria de Trops (25:41) sobre Unicaja Jaén (26:03) y DELSUR (26:59)."
        ]
      },
      {
        heading: "Trotasierra Hornachuelos manda en las categorías de base",
        paragraphs: [
          "El club cordobés se impuso en Sub16 masculino (38 puntos), Sub18 masculino (13 puntos, con Manuel Cruz Tejada ganando en 12:38) y Sub18 femenino (38 puntos). Fue además segundo en Sub20 masculino, Sub16 femenino y Absoluto femenino."
        ]
      },
      {
        heading: "Los más igualados",
        list: [
          "<strong>Sub14 femenino:</strong> el Galosport ganó con 54 puntos, solo uno por delante del Trops (55). Alba Graullera (Trops) fue la primera individual (6:56).",
          "<strong>Sub14 masculino:</strong> Trops ganó con 52 puntos por solo uno al Gedysa Comarcal (53). Iván Montoro (CA Ciudad de Atarfe) fue el mejor individual con 6:27.",
          "<strong>Sub18 femenino:</strong> Olimpo Cádiz, DELSUR y Galosport quedaron separados por seis puntos en la lucha por las plazas nacionales. Sara Lladó (Atletismo Chiclana) ganó en 16:04."
        ]
      },
      {
        heading: "Sub12: el futuro",
        paragraphs: [
          "El Galosport ganó en masculino (40 puntos) con Yassine Bencheikh (Trops) como primero en 5:00. En femenino se impuso el CD Atletismo Bollullos (67 puntos), con Elena Mesa Revuelta (Trotasierra) como ganadora en 5:27."
        ]
      },
      {
        heading: "Plazas para el Campeonato de España",
        paragraphs: [
          "Según la tabla de plazas, Andalucía cuenta con 45 plazas por equipos. Estas son las clasificadas de cada categoría:"
        ],
        tables: [
          {
            headers: ["Categoría", "Plazas", "Clasifican"],
            rows: [
              ["Absoluto H", "4", "Trops, Unicaja Jaén, Surco Lucena, Trotasierra"],
              ["Sub23 H", "5", "Trops, DELSUR (solo 2 equipos)"],
              ["Sub20 H", "6", "Trops, Trotasierra, Curtius, Atl. Cartama, Unicaja, Olimpo Cádiz"],
              ["Sub18 H", "5", "Trotasierra, Unicaja, Trops, Galosport, Olimpo Cádiz"],
              ["Sub16 H", "5", "Trotasierra, Trops, Sayma Nijar, CA Ciudad de Atarfe, DELSUR"],
              ["Relevo mixto", "4", "Trops, Unicaja, DELSUR, Córdoba Patrimonio"],
              ["Absoluto M", "3", "Trops, Trotasierra, Unicaja"],
              ["Sub20 M", "4", "Trops, Unicaja (solo 2 equipos)"],
              ["Sub18 M", "5", "Trotasierra, Unicaja, Olimpo Cádiz, DELSUR, Galosport"],
              ["Sub16 M", "4", "Trops, Trotasierra, DELSUR, Curtius"]
            ]
          },
          {
            caption: "Clubes con más equipos clasificados",
            headers: ["Club", "Equipos"],
            rows: [
              ["Trops-Cueva de Nerja", "9"],
              ["Trotasierra Hornachuelos", "7"],
              ["Unicaja Jaén Paraíso Interior", "7"],
              ["DELSUR Coop La Palma", "5"],
              ["Polideportivo Olimpo Cádiz", "3"],
              ["CD Galosport", "2"],
              ["Atletismo Curtius", "2"],
              ["Surco Lucena, Sayma Nijar, CA Ciudad de Atarfe, Atletismo Cartama, Córdoba Patrimonio", "1 cada uno"]
            ]
          }
        ],
        after: [
          "Quedan cinco plazas sin cubrir: tres en Sub23 masculino y dos en Sub20 femenino, por falta de equipos completos. Por muy poco se quedaron fuera de las plazas el Trotasierra en el relevo mixto (5º, con 4 plazas) y el DELSUR en Absoluto femenino (4º, con 3 plazas)."
        ]
      }
    ]
  },
  {
    slug: "campeonato-espana-atletismo-malaga-2026",
    date: "19 ago 2026",
    tag: "Campeonato de España",
    title: "Campeonato de España de atletismo en Málaga",
    subtitle: "Málaga corona a los mejores del atletismo español y confirma el gran momento del atletismo andaluz",
    body: "El Estadio Ciudad de Málaga vivió del 24 al 26 de julio una nueva edición del Campeonato de España Absoluto de atletismo, una cita que reunió a buena parte de la élite nacional y que dejó grandes actuaciones, récords y carreras de enorme nivel. Andalucía aprovechó la condición de anfitriona para firmar una de las mejores actuaciones de los últimos años: 11 medallas individuales, dos metales más en los relevos y varios récords autonómicos.",
    sections: [
      {
        heading: "María Pérez, protagonista absoluta",
        paragraphs: [
          "Uno de los grandes momentos del campeonato llegó en la mañana del sábado. La granadina María Pérez volvió a demostrar por qué es una de las grandes figuras mundiales de la marcha al proclamarse campeona de España de los 10.000 metros marcha con 42:12.93, nuevo récord de España.",
          "Pérez dominó la prueba desde el comienzo y rebajó en más de un segundo el anterior récord nacional, que estaba en poder de Raquel González desde 2016. El registro se convirtió también en nuevo récord de Andalucía.",
          "La actuación de la granadina fue uno de los grandes momentos deportivos de todo el campeonato y confirmó que la marcha continúa siendo una de las grandes especialidades del atletismo español."
        ]
      },
      {
        heading: "Marta García prolonga su reinado en los 5.000 metros",
        paragraphs: [
          "Otro de los nombres propios de Málaga fue Marta García, que volvió a subir a lo más alto del podio en los 5.000 metros.",
          "La atleta consiguió su quinto título consecutivo de campeona de España en la distancia, una extraordinaria racha que la deja a solamente un campeonato del récord histórico de títulos consecutivos. Su victoria llegó con un registro de 16:08.02.",
          "También destacó la espectacular final masculina de 1.500 metros, en la que Adrián Ben volvió a proclamarse campeón de España después de una remontada en la última vuelta que convirtió la carrera en una de las más emocionantes del campeonato. En categoría femenina, Marina Martínez consiguió su primer título absoluto en la distancia."
        ]
      },
      {
        heading: "Velocidad y nuevas generaciones",
        paragraphs: [
          "La velocidad dejó también algunos de los momentos más destacados del Nacional. En los 400 metros femeninos, Blanca Hervás se proclamó campeona de España en una final decidida por apenas una centésima frente a Paula Sevilla.",
          "Málaga también permitió comprobar que el futuro del atletismo español viene pisando fuerte. Entre las jóvenes protagonistas estuvo Aitana Navajo, que estableció un nuevo récord de España sub-18 en los 800 metros, una de las actuaciones que la RFEA destacó especialmente en su balance final del campeonato.",
          "En las combinadas, María Vicente volvió a proclamarse campeona de España de heptatlón. La catalana, después de un periodo complicado, regresó a las pruebas combinadas con 6.174 puntos y sumó así su tercer título nacional absoluto."
        ]
      },
      {
        heading: "Andalucía, protagonista en su propio campeonato",
        paragraphs: [
          "Pero si hubo una gran protagonista colectiva en Málaga fue Andalucía.",
          "La representación andaluza alcanzó las 11 medallas individuales: dos oros, seis platas y tres bronces, además de dos medallas de plata en los relevos. Andalucía terminó cuarta en la clasificación por federaciones autonómicas.",
          "El balance fue especialmente significativo teniendo en cuenta que la Federación Andaluza acudió al campeonato con 69 participaciones, 39 femeninas y 30 masculinas, siendo la cuarta federación con mayor representación."
        ]
      },
      {
        heading: "Los dos oros andaluces",
        paragraphs: [
          "Los títulos nacionales fueron para una atleta sevillana y otra granadina.",
          "María Pérez se llevó el oro en los 10.000 metros marcha con el mencionado récord de España de 42:12.93.",
          "Maribel Pérez volvió a demostrar su enorme regularidad en la velocidad al proclamarse campeona de España de 100 metros. La sevillana venció con 11.28, con viento favorable de +1,9 m/s, y sumó así su tercer título nacional al aire libre en la distancia, después de los conseguidos en 2018 y 2021."
        ]
      },
      {
        heading: "Seis platas para Andalucía",
        paragraphs: [
          "El segundo escalón del podio tuvo un marcado acento andaluz.",
          "Alba Borrero, atleta del FC Barcelona, fue segunda en los 200 metros con 22.97, una marca histórica que la convirtió en la séptima atleta española en bajar de los 23 segundos y que supuso además un nuevo récord de Andalucía absoluto.",
          "También fueron subcampeones de España:"
        ],
        list: [
          "Nneka Naomey Ezenwa, en lanzamiento de disco, con 54,84 metros.",
          "Ana Estrella de León, en triple salto.",
          "Una Stancev, en salto de altura, con 1,81 metros.",
          "Alberto González, en lanzamiento de martillo.",
          "Antonio Santana, en lanzamiento de peso, con 18,50 metros, mejor marca de la temporada."
        ],
        after: [
          "Una Stancev, además, confirmó su regularidad durante toda la temporada y terminó el campeonato como una de las grandes especialistas españolas del salto de altura."
        ]
      },
      {
        heading: "Tres bronces",
        paragraphs: [
          "El medallero individual andaluz se completó con tres bronces.",
          "Ana Prieto fue tercera en los 400 metros, después de una temporada en la que ya había establecido el récord de Andalucía de la distancia.",
          "María Forero consiguió el bronce en los 5.000 metros, mientras que Pedro José Martín terminó tercero en el lanzamiento de martillo."
        ]
      },
      {
        heading: "El protagonismo de los clubes andaluces",
        paragraphs: [
          "Los clubes de Andalucía también tuvieron un papel fundamental.",
          "El Trops-Cueva de Nerja consiguió cuatro medallas de plata: Nneka Naomey Ezenwa en disco, Antonio Santana en peso, Una Stancev en altura y el relevo femenino de 4x400 metros, formado por Laura Aguilera, Rocío Navarro, Andrea de la Rosa y Herminia Parra, que además estableció un nuevo récord del club con 3:36.04.",
          "El Unicaja Jaén Paraíso Interior también subió al podio con una plata en el 4x100 masculino, integrado por Kiko de las Heras, Pablo Montalvo, David Carbón y Joselu Jiménez.",
          "Además, el campeonato dejó otro récord andaluz para el Trops-Cueva de Nerja. Su cuarteto femenino de 4x100, formado por Alba Lobato, Lucía Vaca, Paula Molina y María Hernández, consiguió 45.93, rebajando el récord de Andalucía que permanecía vigente desde 2011."
        ]
      },
      {
        heading: "Una actuación que confirma el crecimiento andaluz",
        paragraphs: [
          "El balance de Málaga permite hablar de algo más que de un buen campeonato puntual.",
          "Andalucía acudió con una representación amplia, colocó atletas en las primeras posiciones de numerosas pruebas y terminó con 11 medallas individuales, dos platas en relevos y varios récords autonómicos, con especial protagonismo de atletas como María Pérez, Maribel Pérez y Alba Borrero.",
          "El campeonato también volvió a poner de manifiesto la profundidad del atletismo andaluz, con clubes como Trops-Cueva de Nerja y Unicaja Jaén Paraíso Interior entre los grandes protagonistas del Nacional.",
          "Málaga bajó el telón con el atletismo español mirando ya hacia los grandes objetivos internacionales de la temporada, pero dejó también un mensaje claro: Andalucía no solo tiene grandes figuras; tiene cada vez más atletas capaces de competir por los podios nacionales.",
          "Y en un campeonato celebrado en casa, el atletismo andaluz supo aprovechar la oportunidad."
        ]
      }
    ]
  }
];

// ---------------------------------------------------------------
// NOTICIAS DE ATLETISMO ANDALUZ
// Para publicar una noticia nueva, copia un bloque { ... } y pégalo
// arriba del todo del array (así aparece primero). Rellena:
//   slug  -> dirección web de la noticia (/noticias/slug): solo minúsculas,
//            números y guiones. Si se deja vacío se genera del título.
//            No lo cambies una vez publicada: se perderían los comentarios.
//   date  -> texto libre, ej. "19 ago 2026"
//   tag   -> etiqueta corta, ej. "PISTA" / "RUTA" / "CANTERA"
//   title -> titular
//   body  -> uno o dos párrafos de texto
// No hace falta tocar nada más del archivo.
// ---------------------------------------------------------------
export const ANDALUCIA_NEWS = [
  {
    slug: "andalucia-11-medallas-malaga-2026",
    date: "19 ago 2026",
    tag: "Campeonato de España",
    title: "Andalucía brilla en Málaga con 11 medallas y tres récords autonómicos",
    body: "El atletismo andaluz cerró el Campeonato de España Absoluto de Málaga con un balance sobresaliente: <strong>11 medallas individuales —2 oros, 6 platas y 3 bronces—, dos medallas más en los relevos y tres récords</strong>, uno de España y dos de Andalucía. Un resultado que permitió a Andalucía finalizar <strong>cuarta en la clasificación por federaciones autonómicas</strong>.",
    sections: [
      {
        heading: "María Pérez pulveriza el récord de España",
        paragraphs: [
          "La gran protagonista fue <strong>María Pérez</strong>. La granadina se proclamó campeona de España de los 10.000 metros marcha con <strong>42:12.93</strong>, pulverizando el récord de España que permanecía vigente desde 2016 y estableciendo también un nuevo récord de Andalucía."
        ]
      },
      {
        heading: "Maribel Pérez recupera la corona del 100",
        paragraphs: [
          "El segundo oro andaluz llegó de la mano de <strong>Maribel Pérez</strong>. La sevillana volvió a coronarse como la mujer más rápida de España al conquistar el título nacional de 100 metros con <strong>11.28</strong>, recuperando el campeonato que ya había ganado en 2018 y 2021."
        ]
      },
      {
        heading: "Seis platas con acento andaluz",
        paragraphs: [
          "Las seis platas tuvieron también un marcado acento andaluz. <strong>Alba Borrero</strong> fue segunda en los 200 metros y estableció un nuevo récord de Andalucía con <strong>22.97</strong>; <strong>Ana Estrella de León</strong> consiguió la plata en triple salto; <strong>Una Stancev</strong>, en altura; <strong>Nneka Ezenwa</strong>, en lanzamiento de disco; <strong>Alberto González</strong>, en martillo; y <strong>Antonio Santana</strong>, en lanzamiento de peso."
        ]
      },
      {
        heading: "Tres bronces completan el medallero individual",
        paragraphs: [
          "El medallero individual se completó con los bronces de <strong>Ana Prieto en 400 metros, María Forero en 5.000 metros y Pedro José Martín en lanzamiento de martillo</strong>."
        ]
      },
      {
        heading: "Platas y récord en los relevos",
        paragraphs: [
          "También hubo protagonismo andaluz en los relevos. El <strong>Trops-Cueva de Nerja</strong> logró la plata en el 4x400 femenino, mientras que el <strong>Unicaja Jaén Paraíso Interior</strong> fue subcampeón de España en el 4x100 masculino. Además, el cuarteto femenino del Trops-Cueva de Nerja estableció un nuevo <strong>récord de Andalucía de 4x100</strong>."
        ]
      },
      {
        heading: "Andalucía confirma la profundidad de su atletismo",
        paragraphs: [
          "Málaga deja así un balance que va mucho más allá de las medallas. <strong>Andalucía volvió a demostrar la profundidad y el nivel de su atletismo</strong>, con presencia en los podios de velocidad, medio fondo, fondo, saltos, lanzamientos y marcha, y con una nueva generación que sigue acercándose a la élite nacional.",
          "<strong>Dos oros, seis platas, tres bronces, dos medallas en relevos y tres récords. El atletismo andaluz volvió a ser protagonista en el Nacional.</strong>"
        ]
      }
    ]
  },
  {
    slug: "se-abre-el-cuaderno-de-atletismo-andaluz",
    date: "19 ago 2026",
    tag: "Bienvenida",
    title: "Se abre el cuaderno de atletismo andaluz",
    body: "Nace este espacio dentro de DIDNOTFINISH para seguir de cerca el atletismo andaluz: crónicas de competiciones, marcas destacadas y todo lo que pasa en las pistas de nuestra tierra."
  },
  {
    slug: "cronicas-campeonatos-autonomicos",
    date: "Próximamente",
    tag: "Cantera",
    title: "En camino: crónicas de los campeonatos autonómicos",
    body: "Muy pronto llegarán las primeras crónicas de los Campeonatos de Andalucía, con los resultados y las marcas más destacadas de cada categoría."
  }
];

// Convierte un título en un identificador apto para URL.
export function slugify(text){
  return String(text).normalize('NFD').replace(/[\u0300-\u036f]/g,'')
    .toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'').slice(0,80);
}

export function getSlug(item){ return item.slug || slugify(item.title); }

export const ALL_NEWS = [
  ...GENERAL_NEWS.map(item => ({ ...item, section: 'general' })),
  ...ANDALUCIA_NEWS.map(item => ({ ...item, section: 'andalucia' }))
];

export function findNews(slug){
  return ALL_NEWS.find(item => getSlug(item) === slug) || null;
}

// Texto plano (sin etiquetas HTML) para descripciones y redes sociales.
export function plainText(html){
  return String(html || '').replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();
}
