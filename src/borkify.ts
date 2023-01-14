
const forkButton: HTMLAnchorElement|null = document.querySelector<HTMLAnchorElement>("#fork-button");
if (forkButton) 
{
    //forkButton.style.backgroundColor = 'green';
    forkButton.querySelector<SVGElement>('svg')!.style.fill = 'green';
    forkButton.querySelector<SVGElement>('svg')!.outerHTML = `<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537.6 773.81" aria-hidden="true" height="16" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2"><defs><style>.cls-1{fill:#f8d1a0}.cls-2{fill:#ee7225}.cls-3{fill:#e4202a}.cls-5{fill:#1e1816}.cls-7{fill:#fdfdfd}.cls-5{stroke-width:5px;stroke:#231f20;stroke-miterlimit:10}</style></defs><path d="M401.18 329.56c11.15-2.81 21.19-3.23 30.79 2.78-1.1 2.48-5.14.86-5.37 4.34-.24 3.75 2.69 6.67 7.34 6.98 2.25.15 6.44-1.88 6.27-.25-.43 4.23 3.85 7.69 1.54 11.73-1.72 3.01-.72 4.95 1.24 7.43 5.76 7.29 6.57 16.25 7.04 25.02.41 7.43.6 14.93-.71 22.4-.89 5.1 1.34 9.65 3.73 14.15 5.63 10.59 7.97 21.87 4.82 33.69-2.42 9.08-8.84 14.49-17.51 17.62-6.94 2.51-7.37 5.59-1.84 10.28 2.73 2.31 5.46 4.71 7.85 8.27-4.31.36-8.18-1.42-12.1 1.35 14.96 2.88 29.36 4.66 44.02 3.5 1.25-.1 2.8-.6 3.61.88.76 1.39-.18 2.52-.92 3.64-4.28 6.41-10.21 10.93-16.98 14.3-7.93 3.95-16.34 6.68-25.14 7.84-4.35.57-6.17 2.1-7.09 6.92-5.34 27.89-17.54 52.46-37.22 73.14-.33.34-.51.81-.95 1.52 1.95 1.06 3.93.37 5.79.46 7.54.36 10.97 3.76 10.87 11.13-.16 11.8-4.22 22.82-7.06 34.07-1.99 7.88-4.75 15.57-6.69 23.46-1.49 6.06 1.17 11.83 2.65 17.56 3.54 13.72 6.65 27.46 5.98 41.74-.16 3.47-.51 7-1.38 10.34-2.38 9.09-7.81 12.16-17.33 10.16-24.12-5.06-43.29-17.36-56.28-38.61-1.69-2.77-3.24-4.39-6.6-2.29-1.35.84-3.17 1.27-4.78 1.28-8.07.05-12.8 3.83-17.21 10.86-9.39 14.95-24.75 22.69-40.63 29.16-9.26 3.78-18.98 6.07-28.63 8.63-2.74.73-4.43-.21-6.12-2.05-9.21-10.01-13.03-22.1-13.93-35.39-.22-3.2 1.62-7.84-1.03-9.2-2.17-1.12-4.79 3.29-7.31 5.09-5.26 3.76-10.27 7.91-15.18 12.14-2.11 1.82-3.09 1.75-4.41-.75-12.25-23.18-22.14-47.28-27.68-72.97-2.38-11.03-3.96-22.25-3.42-33.61.14-2.9-.84-4.73-3.08-6.76-19.71-17.81-37.11-37.8-46.24-62.93-4.16-11.45-10.34-18.1-20.82-22.77-7.23-3.22-13.34-8.23-14.12-17.25-.17-2.02-2.3-2.75-3.8-3.72-3.82-2.47-7.1-5.51-9.79-9.15-.65-.88-1.62-1.99-.71-3.14.74-.94 1.85-.15 2.8-.07 8.53.7 16.97 2.54 25.69 1.79-9.18-1.48-16.21-5.48-17.73-15.4-.89-5.8.36-11.61 1.64-17.27 1.25-5.49 2.69-10.97 5.66-15.9 1.44-2.4.38-4.82-.29-7.23-4.43-15.89-7.79-31.95-8.05-48.53-.14-8.69 1.34-16.91 6.97-23.89 1.21-1.5 1-2.67-.19-3.93-.68-.73-1.45-1.42-1.97-2.25-1.47-2.39-3.68-5.16-2.18-7.7 1.22-2.06 3.79.63 5.87.68 2.92.07 6.88 2.39 8.45.09 1.52-2.23-2.67-4.3-4.03-6.66-2.15-3.73-5.05-7.02-6.69-11.07-.48-1.18-1.79-2.39-.87-3.68 1.05-1.48 2.75-.83 4.15-.44 8.58 2.39 17.31 3.17 26.18 2.67.79-.04 1.58-.13 3.54-.3-4.93-4.26-9.57-6.59-15.88-7.11 10.16-8.61 21.27-11.72 34.18-9.88-1.57-6.65-5.24-11.78-9.2-17.11 12.84 2.87 25.23 6.76 37.56 13.18 0-4.61-.01-8.52 0-12.44.01-3.59-2.57-3.35-4.91-3.24-13.64.64-26.84-1.74-39.74-5.94-28.41-9.25-50.16-27.21-67.38-51.26-11.44-15.98-20.16-33.28-25.27-52.17-3.5-12.95-5.6-26.14-3.83-39.87 1.96-15.24 10.42-23.49 24.6-27.81 18.83-5.73 38.16-8.74 57.48-11.92 7.04-1.16 13.5-3.16 18.85-8.19 5.92-5.57 12.01-10.96 18.11-16.33 20.65-18.17 42.97-33.98 66.96-47.47 24.61-13.84 50.47-24.55 77.9-31.46 22.84-5.75 46.03-7.72 69.26-4.26 23.56 3.51 44.92 12.94 63.63 27.97 16.86 13.54 29.94 30.13 39.98 49.21 1.55 2.95 3.78 5.7 4.59 8.84 1.97 7.72 7.78 10.29 14.4 12.8 18.58 7.04 36.19 15.88 51.52 28.86 11.73 9.93 15.26 21.86 10.86 36.58-6.16 20.58-17.41 38.29-30.37 55.05-11.74 15.19-24.43 29.49-41.31 39.21-14.48 8.35-30.26 13.59-46.31 18.01-11.53 3.18-23.07 6.39-34.93 8.2-2.3.35-3.38 1.61-3.33 4.1.19 9.83.2 19.65.35 29.48.05 3.61 1.31 4.82 4.87 2.64 8.44-5.16 16.28-10.91 21.57-19.52.58-.94.9-2.47 2.28-2.35 1.63.15 1.7 1.84 2.09 3.05 1.8 5.57 1.68 11.1-1.02 17.22Z" style="stroke-width:17px;stroke:#231f20;stroke-miterlimit:10;fill:#1e1816"/><path class="cls-5" d="M129.42 320.59c-.52-.71-1.13-1.08-1.97-.49.37.44.73.89 1.1 1.33 2.86 4.42 6.43 8.39 8.89 13.84-11.38-3.14-22.26-3.75-33.67-.17 1.69 1.08 3.02 1.76 4.15 2.68 2.1 1.71 4.12 3.68 3.55 6.7-.6 3.18-3.4 3.78-6.03 4.35-4.44.97-8.92 1.06-13.4.34-4.61-.74-9.22-1.48-14.44-2.31 4.13 6.63 10.7 8.97 16.57 12.5-2.21 1.65-4.28-.57-6.47 1.02 5.27 6.43 12.7 5.01 19.51 5.8-7.89 2.45-16.06 2.21-25.51 2.74 5.29 2.44 9.58 2.57 13.8 2.83 16.23 1.02 31.76-2.65 47.06-7.43 8.6-2.69 17.41-4.46 26.02-1.82 8.63 2.65 13.84-1.82 19.36-6.7 2.09-1.85 1.39-2.83-.85-3.79-10.45-4.48-19.85-10.78-29.34-16.92-8.94-5.78-18.12-11.15-28.31-14.5ZM198.83 478.13c.41.08 1.12.34 1.19.22.36-.61-.27-.63-.63-.78-10.25-11.49-11.7-19.45-5.59-30.98 2.99-5.64 6.7-10.86 11.65-14.8 4.57-3.64 6.77-7.98 7.85-13.6 1.03-5.35 3.16-10.48 4.99-16.29-4.22 2.59-8.16 4.09-12.26 4.71-5.54.84-10.33 3.25-15.22 5.76-14.55 7.44-29.58 13.69-45.95 15.84-9.45 1.24-18.83 1.31-28.19-3.76 9.2-8.21 18.03-16.08 27.04-24.12-3.25-1.97-5.98-3.62-9.33-5.65 9.66-5.12 19.23-8.1 29.62-12.71-4.88-.27-8.25-.46-12.94-.72 4.75-4.13 8.51-7.39 13.35-11.59-9.31.5-16.95 2.58-24.73 3.6-4.33.57-6.64 2.71-8.63 6.33-8.53 15.46-14.78 31.89-21.15 48.3-8.77 22.58-12.22 45.8-9.89 69.93.28 2.86.95 3.63 3.81 3.06 7.74-1.56 15.29-4.07 21.81-8.23 12.98-8.27 26.55-13.46 42.64-11.64-2.36-4.86-3.59-9.33-2.52-14.56 10.58 6.07 21.68 9.3 33.07 11.69ZM89.89 203.46c6.14-1.98 12.23-1.99 18.33-1.21 13.96 1.8 27.11 6.52 40.29 11.16 16.14 5.68 32.12 11.86 49.2 14.37 30.06 4.43 59.73 1.93 89.31-4.25 32.9-6.87 61.91-20.83 85.5-45.18 7.74-7.99 14.79-16.55 21.52-25.41-3.93 22.68-19.77 36.85-36.56 50.62 16.04 7.69 32.81 9.21 49.94 7.98 17.06-1.22 33.44-5.66 50.5-12.24-1.24 1.81-1.66 2.5-2.16 3.14-8.52 11.03-20.58 15.33-33.68 17.41-16.8 2.67-33.57 1.56-50.22-1.32-3.45-.6-3.94.29-3.59 3.31.43 3.63.81 7.32.68 10.96-.13 3.54 1.25 5.89 3.9 8.03 7.54 6.1 16.24 9.6 25.52 11.93 4.67 1.17 9.39 2.06 14.13 3.07-14.36 4.45-27.74.16-40.42-4.35 0 9.2.18 18.35-.08 27.48-.11 3.99 1.38 4.18 4.65 3.45 11.68-2.61 23.35-5.27 34.79-8.8 20.91-6.45 40.46-15.4 55.74-31.67 7.86-8.37 15.61-16.88 22.83-25.8 11.78-14.55 21.68-30.29 27.15-48.4 3.72-12.33 2.18-16.75-8.09-24.46-9.07-6.8-19-12.21-29.2-17.1-7.68-3.68-15.45-7.15-24.1-11.14 1.54 5.22 2.73 9.26 4.22 14.33-5.33-3.65-8.42-7.56-10.94-11.84-6.4-10.88-12.46-21.95-18.9-32.81-8.06-13.59-15.77-27.54-28.77-37.28-28.34-21.24-60.82-27.91-95.3-25.08-38.33 3.15-73.82 16.59-107.77 33.86-28.27 14.38-52.3 34.89-74.92 56.8-10.57 10.24-22.56 15.39-36.67 16.99-13.89 1.58-27.81 2.97-41.65 4.9-14 1.96-23.35 9.91-24.47 21.13-1.08 10.77-.88 21.61 1.38 32.32 4.6 21.88 15.42 40.6 29.58 57.47 10.26 12.23 20.59 24.59 34.64 32.81 18.5 10.84 38.87 14.08 59.99 14.16 3.56.01 4.4-.97 4.26-4.45-.81-19.97-1.43-39.95-1.95-59.92-.07-2.72-.71-4.12-3.47-5.03-5.83-1.92-11.54-4.22-17.23-6.54-4.45-1.82-8.82-2.23-13.62-1.31-7.98 1.53-16.07 2.49-25.09 3.83 4.42-5.43 10.12-7.19 14.88-10.83-5.11-1.84-9.6-3.46-14.09-5.08ZM107.06 542.52c.27 1.17.32 2.01.64 2.73 14.55 33.06 35.04 61.53 64.79 82.59 9.56 6.77 19.33 13 31.7 14.65 28.2 3.77 55.85 10.61 83.68 16.47 1.85.39 3.19.92 4.7-1.12 8.93-12.09 21.4-14.99 35.47-12.79 2.39.37 3.71-.31 5.29-1.62 9.9-8.14 19.76-16.33 29.78-24.31 13.16-10.48 26.41-20.81 36.47-34.58 12.21-16.71 21.02-34.99 26.1-55.05.37-1.45 1.75-3.48-1.27-3.64-3.3-.18-6.6-1.06-9.92-.07-7.35 2.19-14.86 3.71-22.49 4.41-14.1 1.31-27.97.93-40.6-6.72-1.06-.64-2.04-.99-3.27-.78-10.56 1.78-20.54 4.43-25.57 15.44-.96 2.1-2.43 3.96-3.69 5.92-5.31 8.23-9.63 17.22-16.33 24.43-17.42 18.75-32.02 20.06-50.67 8.05-1.4-.9-2.72-1.92-4.03-2.94-14.11-11-24.85-24.92-34.4-39.85-1.06-1.66-1.78-2.72-4.18-2.4-7.13.96-14.28.69-21.38-.66-1.79-.34-3.4-.38-5.24.56-11.45 5.85-23.94 7.84-36.52 9.32-12.87 1.51-25.8 2.09-39.06 1.97Z"/><path class="cls-5" d="M211.52 333.07c16.21 4.88 33.13 5.63 48.55 12.34.53.23 1.47.32 1.83.01 6.35-5.49 13.78-7.67 22.05-7.56.86.01 1.72-.94 2.61-1.38 7.86-3.88 16.11-5.38 25.5-4.48-2.25 2.84-4.05 5.11-6.24 7.87 7.74.76 14.65 2.46 21.59 4 5.95 1.32 11.95 5.6 17.59 4.06 5.78-1.57 10.55-6.69 15.91-10.03 2.29-1.43 2.94-3.02 2.76-5.71-.65-9.8-.98-19.62-1.42-29.43-1.2-26.78-2.54-53.55-3.47-80.34-.16-4.6-2.18-6.48-6.03-7.33-3.29-.73-6.13-3.76-10.13-.54-4.09 3.29-9.14 5.32-14.06 7.37-19.49 8.14-40.02 12.12-60.73 15.42-24.79 3.96-49.63 5.49-74.59 1.57-11.49-1.81-22.75-4.53-33.62-8.8-.19.67-.36.98-.35 1.29.66 31.29 1.36 62.59 1.99 93.88.04 2.05.82 3.81 2.33 4.71 12.6 7.52 24.09 18.59 40.94 12.97 2.6-.87 6.53.31 8.09-1.23 2.13-2.11-1.98-5.17-1.11-8.66ZM168.12 493.48c-16.53.03-30.57 4.48-44.54 9.47-14.67 5.23-29.71 8.66-45.46 7.62-2.16-.14-4.33-.24-7.57-.42 5.67 4.59 11.64 6.15 16.47 10.38H75.98c4.01 5.69 9.13 7.92 14.68 9.22 18.1 4.27 36.41 3.5 54.61 1.3 18.41-2.22 35.99-7.96 53.37-14.27 1.7-.62 3.44-1.96 5.58-.38-1.68 2.57-5.23 2.83-6.91 6.01 20.53.89 40.08-.43 58.65-8.65 6.96-3.08 6.98-3.04 2.73-9.46 8.71 1.59 16.95 3.53 24.72 6.67 15.92 6.44 32.36 8.73 49.37 7.69 3.18-.19 6.35-.66 9.35-.98.03-2.94-3.12-3.33-2.65-5.71 2.27-.98 3.88.32 5.61 1.29 8.49 4.72 17.45 8.19 27.03 9.95 9.48 1.75 18.9 2.15 29.44-.95-7.61-2.16-13.49-4.96-18.12-10.08 1.19-.82 2.13-.48 3.07-.21 13.47 3.88 27.23 6.33 41.19 7.16 14.94.89 28.22-3.93 40-13.05-13.59 2.39-26.86 2.61-40.34-3.53 3.11-1.69 6.18 0 8.89-2.32-7.87-1.16-15.17-1.86-22.16-4.09-1.87-.59-4.72-.79-4.75-2.95-.03-2.6 3.01-2.63 4.99-3.18 1.91-.53 3.91-.89 5.9-1.01 2.77-.17 5.56-.04 8.34-.04-2.39-2.88-5.14-3.64-7.87-4.16-24.39-4.65-48.65-1.03-73.65 1.46 3.61-3.84 7.5-6.86 9.03-12.25-16.06 6.51-31.79 9.78-48.41 5.87-3.23-.76-6.21.09-9.32 2.12-18.85 12.3-38.8 16.82-59.8 5.74-7.06-3.72-13.74-3.97-21.07-1.94-8.87 2.46-17.67 2.75-26.3-1.34-3.97-1.88-8.16-3.31-13.36-5.39 2.66 3.8 5.19 6.23 6.63 10.11-9.25-2.24-17.99-1.82-28.23-.93 4.3 2.19 7.93 2.14 11.9 5.21Z"/><path class="cls-5" d="M321.73 437.32c-3.36-6.91-5.6-13.45-7.64-20.09-4.09-13.33-7.61-26.9-15.65-38.62-10.38-15.15-27.72-18.69-43.27-8.87-6.56 4.14-11.87 9.63-16.64 15.66-11.07 14-17.24 30.17-21.19 47.38-1 4.37-2.24 8.77-5.37 13.02-.95-3.12-1.7-5.56-2.48-8.11-7.03 5.15-12.36 19.17-9.49 26.01 4.57 10.89 15.08 11.69 25.09 14.38-.43-1.63-.82-2.55-.87-3.48-.04-.87-.84-1.93.54-2.79 11.14 8.13 23.91 12.12 37.58 12.64 17.9.67 32.74-7.4 46.68-17.61.92-.68 1.45-2.83 3.09-1.71 1.28.88.46 2.4.24 3.7-.15.89-1.35 1.54-.36 3.03 8.31-2.14 15.68-5.89 21.2-12.79 1.91-2.39 3.19-5.19 2.5-8.32-1.8-8.13-6.35-14.69-12.02-21.18-.84 2.61-.03 4.91-1.94 7.76ZM266.84 686.75c10.28.12 20.4.41 30.47-1.26 1.69-.28 3.64.11 4.08-2.61 1.04-6.4-4.76-15.25-11.24-16.69-12.16-2.7-24.29-5.53-36.49-8.01-16.43-3.35-32.89-6.58-49.41-9.5-3.73-.66-9.37-3.3-11.11-.15-1.81 3.26 1.89 7.99 3.92 11.78 6.34 11.88 12.95 23.62 19.07 35.61 4 7.83 7.44 15.97 9.65 24.52-2.35.73-3.47-1.9-5.63-1.01-.29 11.47 3.5 21.83 8.8 31.75.98 1.84 2.39 2.68 4.94 1.85 17.34-5.61 34.04-12.54 48.6-23.71 9.65-7.4 17.69-16.27 20.45-28.65 2.31-10.32 1.04-11.59-9.04-9.89-.65.11-1.29.37-1.95.42-8.76.64-17.44.73-25.11-4.47Z"/><path class="cls-5" d="M390.26 410.18c-.72-2.08-3.54-1.02-3.64-3.52 3.79-2.45 8.79-1.12 13.3-3.52-12.14-5.29-25.04-4.81-37.08-8.67 1.62-2.3 4.43-.85 5.6-3.29-2.93-1.07-6.19-1.06-8.98-3.07 2.74-1.36 5.92-.42 8.39-2.76-13.71-8.54-27.25-16.97-41.48-25.83 5.63-2.19 10.55-2.36 16.78-3.38-17.4-8.38-34.64-9.11-52.94-9.11 3.15-3 5.59-5.31 8.03-7.63-8.88.94-15.97 5.68-23.24 10.08-.75-2.08 2.06-3.05.68-5.03-4.48 1.49-8.31 4.14-11.44 7.52-2.37 2.56-3.99 2.83-7.08.96-9.85-5.98-20.69-9.09-32.6-10.11 1.46 2.99 4.58 4.25 4.68 7.62-9.92-1.82-19.45-1.5-28.45 3.77 2.55 1.68 5.99 1.52 7.69 4.92-14.87 1.67-27.3 8.05-40.29 16.69 8.47.73 15.09-2.04 22.04-2.5-10.48 11.11-24.63 15.33-38.43 20.92 2.3.94 5.18.49 5.7 2.5.57 2.16-2.26 2.83-3.69 4.03-7.2 6.04-14.2 12.27-20.96 20.36 36-2.25 64.52-18.23 90.63-41.59-.95 7.06-5.53 10.88-9.32 16.35 6.53-2.71 11.28-5.56 14.87-10.54 8.15-11.32 17.61-21.25 30.89-26.79 11.1-4.63 21.47-3.32 31.24 3.39 7.84 5.38 13.69 12.59 18.28 20.83 1.36 2.44 3.11 4.04 5.64 5.31 7.58 3.8 15.23 7.55 22.43 12 13.67 8.46 28.89 10.59 44.38 11.85 2.79.23 5.65-.02 8.36-1.75ZM366.81 689.96c-3.34 1.03-5.31-.22-7.38-.64-6.02-1.22-12-2.59-18.16-3.09-4.06-.33-6.63.36-6.96 5.16-.2 2.93-1.12 5.91-2.24 8.66-1.28 3.14-.5 5.4 1.77 7.57 5.54 5.27 10.8 10.87 16.61 15.82 9.24 7.87 18.75 15.51 30.62 19.22 9.93 3.1 14.69-.53 15.23-11.01.87-17.04-3.42-33.3-7.37-49.6-.61-2.51-.8-4.77 0-7.29 5.73-17.88 10.31-36.05 13.82-54.5.66-3.47-.68-4.16-3.33-4.4-4.2-.38-8.25.4-12.22 1.75-17.1 5.86-31.28 16.61-45.57 27.18-3.81 2.82-8.39 5.37-4.52 11.32.32.48.13 1.3.15 1.97l.27 9.43c3.04-.55 6.08-1.21 9.14-1.64 8.11-1.14 16.42.51 20.55 4.36-9.85-1.02-18.92.59-27.92 2.82-2.22.55-3.74 1.28-3.56 4.32.18 3.09 1.7 3.33 4.05 3.62 9.27 1.13 17.95 4.09 27.03 8.98Z"/><path class="cls-5" d="M317.14 397.23c.08 5.11 2.12 9.19 2.79 13.52.63 4.11 2.56 7.23 5.67 10.07 6.82 6.22 12.06 13.71 15.93 22.13 4.28 9.31 2.88 16.22-4.49 23.4-2.92 2.84-6.49 4.81-9.62 7.57 13.97.2 26.56-5.29 40.08-9.6-1.95 5.13-3.6 9.45-5.42 14.23 13.51-2.22 26.25-2.41 39.03-1.11 7.28.74 14.57 1.44 21.83 2.33 2.29.28 3.36.1 3.16-2.66-1.79-23.92-7.26-46.9-17.1-68.83-1.47-3.27-2.45-2.49-4.35-.44-8.48 9.18-19.22 12.66-31.49 12.19-7.73-.29-15.15-2.05-22.37-4.66-11.91-4.3-22.8-10.6-33.65-18.14ZM82.6 412.44c4.46-2.31 8.11-1.92 11.9-.14 3.82 1.79 6.15 5.29 9.39 8.14 2.69-7.95 5.98-15.21 9.41-22.4 3.36-7.04 6.86-14.02 10.63-21.69-14.31 3.78-27.79 3.79-41.24.37-2.26-.58-3.29.39-4.29 2.19-2.31 4.12-3.64 8.53-4.33 13.17-2.27 15.19.82 29.83 5 44.24 2.81 9.7 4.04 18.76-1.06 28.31-3.08 5.77-4.44 12.54-3.85 19.35.4 4.7 4.73 8.07 9.82 7.75 4.84-.3 6.2-3.07 6.3-7.68.15-7.29 1.05-14.56 1.64-21.99-3.52.93-5.74 4.19-9.67 5.51 1.28-4.69 2.72-9.06 6.16-11.14 6.32-3.81 7.69-9.77 9.1-16.04.51-2.26 1.06-4.58 2.03-6.66 1.42-3.03.5-5.34-1.33-7.77-4.1-5.47-9.26-9.73-15.62-13.51ZM427.31 389.04c3.34 9.38 3.22 17.45-1.67 25.1-1.36 2.13-1.64 3.91-1.05 6.45.85 3.68 2.76 5.47 6.19 6.83 7.5 2.97 10.39 7.17 9.66 13.09-3.5-1.74-6.73-4.04-10.89-4.73 1.74 8.66 3.42 16.91 5.02 25.17.43 2.23 1.04 3.17 3.56 1.92 7.46-3.68 11.99-9.18 12.34-17.79.35-8.63-2.53-16.35-6.5-23.74-1.39-2.59-2.07-5.06-1.94-8.01.5-10.97.7-21.94 1.17-32.91.32-7.59-3.13-13.03-9.21-17.09-3.77-2.52-7.98-3.94-12.34-5.14-2.29-.63-3.28 0-4.13 2.04-1.72 4.16-4.19 7.84-7.16 11.28-2.23 2.57-7.44 2.93-7.27 6.22.16 3 3.69 5.71 5.33 8.76 3.71 6.92 7.18 13.98 10.88 21.26 4.47-5.36 5.15-11.96 8.01-18.7ZM219.84 530.86c8.5 12.71 17.08 24.35 28.4 33.87 18.72 15.74 43.19 7.95 54.65-8.32a865.69 865.69 0 0 1 18.86-25.73c1.13-1.49 3.13-2.53 3.05-4.95-5.72-.35-11.36-.61-16.98-1.09-2.49-.21-3.92.67-5.23 2.78-3.69 5.95-8.16 11.31-13.22 16.17-12.26 11.78-24.81 12.7-38.57 2.76-5.56-4.02-10.5-8.68-14.91-13.94-1.21-1.44-2.27-3.4-4.77-3.03-3.55.53-7.12.95-11.28 1.5Z"/><path class="cls-5" d="M345.15 362.79c5.79 4.44 10.68 8.2 18.07 6.26 3.9-1.03 8.27-.47 12.42-.34 6.81.23 13.61.93 20.41.99 6.53.05 10.51-4.23 14.69-9.43-7.8 0-14.35-1.05-20.28-7.47 6.86 1.71 12.59 2.31 17.99.53 7.8-2.57 15.36-4.23 23.11-.11 1.6.85 2.44-.17 2.98-1.59.66-1.74-.52-1.91-1.73-2.17-1.46-.31-3.06-.42-4.34-1.1-2.96-1.57-7.13-2.35-7.15-6.65-.01-3.37-1.5-2.95-3.7-2.51-4.1.83-7.21 3.7-11.73 5.93 2.74-5.68 7.78-7.16 12.78-10.32-9.47-.41-17.19 1.57-24.89 3.63-1.06.28-2.37 1.07-3.27 0-.9-1.07.09-2.14.62-3.15.85-1.61 1.71-3.22 2.5-4.86.49-1.02 1.35-2.26.35-3.21-1.2-1.14-2.12.27-2.88.96-2.86 2.61-6.16 4.61-9.58 6.24-9.19 4.4-16.61 11.38-25.62 16.49 3.43 2.67 6.38 4.96 10.19 7.93-7.5 1.42-13.9 2.63-20.95 3.96ZM318.29 652.31c-3.31.16-5.66.12-7.97.4-4.61.57-8.62 2.4-11.55 6.18-1.03 1.33-1.57 2.52.33 3.67 5.18 3.15 7.25 8.36 7.72 13.88.69 8.03 3.87 15.92 1.7 24.17-.31 1.17-.57 2.54 1.35 3.16 5.88 1.89 15.74-3.46 17.07-9.62 2.08-9.61 2.79-19.39 3.4-29.19.76-12.12.12-12.94-12.06-12.66ZM241.97 527.69c9.63 10.89 20.1 18.8 34.97 15.57 10.09-2.2 15.92-9.64 20.02-19.17-8.89.14-16.34-2.42-23.56-5.98-1.21-.6-2.4-2.27-4.01-1.12-8 5.7-17.46 7.72-27.41 10.7ZM159.21 626.06c.24 12.02 1.78 23.31 4.1 34.49 4.21 20.29 11.11 39.6 21.15 57.78 1.63 2.96 2.98 2.49 5.35.99 2.17-1.37 2.56-2.14.96-4.46-16.49-23.97-23.53-51.06-25.4-79.67-.29-4.48-2.1-6.85-6.16-9.13Z"/><path class="cls-5" d="M169.23 633.21c.09 1.38.07 2.69.27 3.96 2.11 13.8 4.81 27.47 9 40.8 3.69 11.73 8.21 23.09 14.81 33.58 2.47 3.92 4.1.44 5.98-.24 2.13-.77 1.86-1.92.54-3.7-14.7-19.93-21.61-42.78-24.57-67.01-.48-3.93-1.62-6.63-6.02-7.39ZM179.02 638.37c.59 6.96 2.4 13.16 4.17 19.35 4.67 16.38 11.53 31.77 20.76 46.13 1.81 2.81 3.26 2.17 5.58 1.19 3.6-1.53.88-3.33.21-4.64-6.38-12.57-12.82-25.12-19.46-37.56-2.56-4.8-4.62-9.78-4.25-15.15.36-5.31-2.77-7.2-7-9.33ZM407.17 399.39c-3.13-8.46-7.52-14.92-11.7-21.49-.7-1.1-1.58-1.72-2.76-1.86-7.82-.91-15.64-1.77-23.47-2.65 5.07 5.2 10.47 9.52 17.69 10.26 2.53.26 2.85 1.06 1.8 3.03-.71 1.32-1.39 2.66-2.25 3.87-1.22 1.72-1.51 2.75 1.1 3.41 6.24 1.58 12.42 3.42 19.6 5.43Z"/><path class="cls-7" d="M89.89 203.46c4.49 1.62 8.97 3.23 14.09 5.08-4.76 3.64-10.46 5.4-14.88 10.83 9.02-1.34 17.11-2.3 25.09-3.83 4.79-.92 9.17-.5 13.62 1.31 5.69 2.32 11.4 4.62 17.23 6.54 2.76.91 3.4 2.32 3.47 5.03.52 19.98 1.14 39.96 1.95 59.92.14 3.48-.7 4.46-4.26 4.45-21.12-.08-41.48-3.32-59.99-14.16-14.05-8.23-24.37-20.58-34.64-32.81-14.16-16.88-24.98-35.6-29.58-57.47-2.25-10.71-2.45-21.55-1.38-32.32 1.12-11.22 10.47-19.17 24.47-21.13 13.84-1.94 27.76-3.33 41.65-4.9 14.12-1.6 26.1-6.75 36.67-16.99 22.62-21.91 46.65-42.42 74.92-56.8 33.95-17.27 69.43-30.71 107.77-33.86 34.48-2.83 66.95 3.84 95.3 25.08 13 9.74 20.7 23.7 28.77 37.28 6.44 10.85 12.5 21.93 18.9 32.81 2.52 4.28 5.61 8.19 10.94 11.84-1.49-5.08-2.68-9.11-4.22-14.33 8.65 3.99 16.43 7.46 24.1 11.14 10.2 4.89 20.12 10.3 29.2 17.1 10.28 7.7 11.82 12.13 8.09 24.46-5.47 18.11-15.37 33.85-27.15 48.4-7.22 8.92-14.97 17.43-22.83 25.8-15.28 16.27-34.83 25.22-55.74 31.67-11.44 3.53-23.11 6.19-34.79 8.8-3.27.73-4.76.55-4.65-3.45.26-9.13.08-18.27.08-27.48 12.68 4.52 26.05 8.81 40.42 4.35-4.73-1.01-9.46-1.9-14.13-3.07-9.28-2.33-17.98-5.83-25.52-11.93-2.65-2.14-4.03-4.5-3.9-8.03.13-3.64-.25-7.32-.68-10.96-.36-3.02.14-3.9 3.59-3.31 16.65 2.88 33.42 3.99 50.22 1.32 13.1-2.08 25.16-6.38 33.68-17.41.5-.64.92-1.34 2.16-3.14-17.06 6.58-33.44 11.01-50.5 12.24-17.13 1.23-33.89-.29-49.94-7.98 16.79-13.77 32.63-27.93 36.56-50.62-6.73 8.86-13.78 17.42-21.52 25.41-23.6 24.36-52.6 38.31-85.5 45.18-29.58 6.18-59.25 8.68-89.31 4.25-17.08-2.52-33.07-8.69-49.2-14.37-13.18-4.64-26.33-9.36-40.29-11.16-6.1-.79-12.19-.77-18.33 1.21Z"/><path class="cls-1" d="M107.06 542.52c13.26.12 26.19-.46 39.06-1.97 12.58-1.48 25.07-3.46 36.52-9.32 1.84-.94 3.45-.91 5.24-.56 7.09 1.35 14.25 1.62 21.38.66 2.4-.32 3.12.75 4.18 2.4 9.55 14.93 20.29 28.85 34.4 39.85 1.31 1.02 2.63 2.04 4.03 2.94 18.66 12.01 33.26 10.7 50.67-8.05 6.7-7.21 11.02-16.2 16.33-24.43 1.26-1.95 2.73-3.82 3.69-5.92 5.03-11.01 15.01-13.66 25.57-15.44 1.24-.21 2.21.14 3.27.78 12.63 7.65 26.51 8.02 40.6 6.72 7.63-.71 15.13-2.23 22.49-4.41 3.32-.99 6.62-.11 9.92.07 3.02.16 1.64 2.19 1.27 3.64-5.08 20.06-13.9 38.34-26.1 55.05-10.06 13.77-23.31 24.1-36.47 34.58-10.02 7.98-19.88 16.17-29.78 24.31-1.59 1.3-2.9 1.99-5.29 1.62-14.07-2.19-26.54.71-35.47 12.79-1.51 2.04-2.84 1.51-4.7 1.12-27.82-5.86-55.48-12.7-83.68-16.47-12.37-1.65-22.14-7.88-31.7-14.65-29.75-21.06-50.24-49.53-64.79-82.59-.32-.72-.37-1.56-.64-2.73Zm106.55 45.42c14.63 26.58 41.28 39.61 69.09 34.23 22.78-4.41 46.09-23.57 48.29-39.86-16.4 15.6-34.59 27.82-57.6 30.27-24.19 2.58-42.53-9.81-59.78-24.63Z"/><path class="cls-7" d="M211.52 333.07c-.87 3.49 3.25 6.55 1.11 8.66-1.56 1.54-5.49.37-8.09 1.23-16.85 5.62-28.34-5.45-40.94-12.97-1.51-.9-2.29-2.66-2.33-4.71-.63-31.3-1.32-62.59-1.99-93.88 0-.31.16-.62.35-1.29 10.87 4.27 22.12 6.99 33.62 8.8 24.96 3.92 49.8 2.39 74.59-1.57 20.71-3.3 41.24-7.28 60.73-15.42 4.91-2.05 9.96-4.08 14.06-7.37 3.99-3.21 6.84-.18 10.13.54 3.84.85 5.86 2.73 6.03 7.33.93 26.79 2.27 53.56 3.47 80.34.44 9.81.77 19.63 1.42 29.43.18 2.69-.47 4.28-2.76 5.71-5.35 3.34-10.13 8.46-15.91 10.03-5.63 1.53-11.64-2.74-17.59-4.06-6.94-1.54-13.85-3.24-21.59-4 2.19-2.76 3.99-5.04 6.24-7.87-9.39-.9-17.64.6-25.5 4.48-.89.44-1.75 1.39-2.61 1.38-8.28-.1-15.71 2.08-22.05 7.56-.35.31-1.3.22-1.83-.01-15.42-6.71-32.35-7.45-48.55-12.34Z"/><path class="cls-2" d="M168.12 493.48c-3.97-3.07-7.6-3.02-11.9-5.21 10.24-.89 18.98-1.31 28.23.93-1.44-3.88-3.97-6.31-6.63-10.11 5.2 2.08 9.39 3.51 13.36 5.39 8.63 4.09 17.43 3.79 26.3 1.34 7.32-2.03 14.01-1.78 21.07 1.94 21 11.07 40.95 6.56 59.8-5.74 3.11-2.03 6.1-2.88 9.32-2.12 16.62 3.91 32.35.64 48.41-5.87-1.53 5.39-5.42 8.4-9.03 12.25 25-2.49 49.26-6.11 73.65-1.46 2.72.52 5.48 1.28 7.87 4.16-2.78 0-5.57-.12-8.34.04-1.98.12-3.98.48-5.9 1.01-1.98.55-5.02.58-4.99 3.18.03 2.16 2.89 2.35 4.75 2.95 7 2.23 14.29 2.94 22.16 4.09-2.7 2.32-5.77.63-8.89 2.32 13.48 6.14 26.76 5.92 40.34 3.53-11.78 9.12-25.06 13.94-40 13.05-13.96-.83-27.72-3.28-41.19-7.16-.93-.27-1.87-.61-3.07.21 4.63 5.12 10.51 7.92 18.12 10.08-10.54 3.11-19.96 2.7-29.44.95-9.58-1.77-18.54-5.23-27.03-9.95-1.73-.97-3.34-2.27-5.61-1.29-.47 2.37 2.68 2.76 2.65 5.71-3 .32-6.17.78-9.35.98-17.01 1.04-33.44-1.25-49.37-7.69-7.77-3.14-16.02-5.08-24.72-6.67 4.25 6.43 4.23 6.39-2.73 9.46-18.57 8.21-38.13 9.53-58.65 8.65 1.68-3.18 5.23-3.44 6.91-6.01-2.14-1.58-3.88-.24-5.58.38-17.38 6.32-34.97 12.05-53.37 14.27-18.2 2.19-36.51 2.97-54.61-1.3-5.55-1.31-10.67-3.53-14.68-9.22h11.04c-4.83-4.23-10.81-5.79-16.47-10.38 3.24.18 5.41.28 7.57.42 15.75 1.03 30.79-2.39 45.46-7.62 13.97-4.98 28-9.44 44.54-9.47Z"/><path class="cls-1" d="M321.73 437.32c1.91-2.85 1.09-5.15 1.94-7.76 5.67 6.48 10.22 13.05 12.02 21.18.69 3.13-.59 5.93-2.5 8.32-5.51 6.9-12.89 10.65-21.2 12.79-.98-1.48.21-2.14.36-3.03.22-1.3 1.04-2.83-.24-3.7-1.64-1.12-2.16 1.04-3.09 1.71-13.94 10.22-28.78 18.29-46.68 17.61-13.67-.51-26.44-4.51-37.58-12.64-1.38.86-.58 1.92-.54 2.79.04.93.44 1.85.87 3.48-10.01-2.69-20.51-3.49-25.09-14.38-2.87-6.84 2.46-20.86 9.49-26.01.78 2.55 1.53 4.99 2.48 8.11 3.14-4.24 4.37-8.64 5.37-13.02 3.94-17.21 10.11-33.39 21.19-47.38 4.77-6.03 10.08-11.52 16.64-15.66 15.55-9.82 32.89-6.28 43.27 8.87 8.04 11.73 11.56 25.3 15.65 38.62 2.04 6.64 4.27 13.18 7.64 20.09Z"/><path class="cls-1" d="M198.83 478.13c-11.39-2.39-22.49-5.62-33.07-11.69-1.06 5.22.16 9.7 2.52 14.56-16.09-1.83-29.66 3.36-42.64 11.64-6.52 4.16-14.07 6.67-21.81 8.23-2.86.58-3.53-.19-3.81-3.06-2.33-24.12 1.12-47.35 9.89-69.93 6.37-16.41 12.62-32.83 21.15-48.3 2-3.62 4.3-5.76 8.63-6.33 7.78-1.02 15.42-3.1 24.73-3.6-4.84 4.2-8.6 7.46-13.35 11.59 4.69.26 8.06.45 12.94.72-10.39 4.61-19.96 7.59-29.62 12.71 3.35 2.03 6.09 3.69 9.33 5.65-9.01 8.04-17.84 15.92-27.04 24.12 9.36 5.06 18.74 5 28.19 3.76 16.37-2.15 31.4-8.4 45.95-15.84 4.89-2.5 9.68-4.91 15.22-5.76 4.1-.62 8.03-2.12 12.26-4.71-1.83 5.81-3.96 10.94-4.99 16.29-1.08 5.61-3.29 9.96-7.85 13.6-4.95 3.94-8.66 9.17-11.65 14.8-6.11 11.53-4.66 19.49 5.59 30.98l-.57.57Z"/><path class="cls-3" d="M266.84 686.75c7.68 5.21 16.35 5.12 25.11 4.47.66-.05 1.29-.31 1.95-.42 10.07-1.7 11.34-.42 9.04 9.89-2.77 12.38-10.8 21.25-20.45 28.65-14.56 11.16-31.27 18.09-48.6 23.71-2.55.83-3.95-.02-4.94-1.85-5.3-9.92-9.09-20.29-8.8-31.75 2.16-.89 3.28 1.74 5.63 1.01-2.21-8.55-5.66-16.68-9.65-24.52-6.12-11.99-12.73-23.73-19.07-35.61-2.02-3.79-5.73-8.52-3.92-11.78 1.74-3.14 7.38-.51 11.11.15 16.51 2.92 32.98 6.15 49.41 9.5 12.2 2.49 24.33 5.31 36.49 8.01 6.47 1.44 12.27 10.29 11.24 16.69-.44 2.72-2.39 2.33-4.08 2.61-10.06 1.66-20.19 1.38-30.47 1.26Z"/><path class="cls-2" d="M390.26 410.18c-2.71 1.72-5.57 1.97-8.36 1.75-15.5-1.26-30.72-3.39-44.38-11.85-7.2-4.45-14.85-8.2-22.43-12-2.53-1.27-4.28-2.87-5.64-5.31-4.59-8.24-10.45-15.45-18.28-20.83-9.77-6.7-20.14-8.02-31.24-3.39-13.28 5.54-22.74 15.46-30.89 26.79-3.58 4.98-8.34 7.83-14.87 10.54 3.79-5.48 8.37-9.3 9.32-16.35-26.11 23.35-54.62 39.34-90.63 41.59 6.76-8.09 13.75-14.32 20.96-20.36 1.42-1.19 4.25-1.86 3.69-4.03-.53-2.01-3.4-1.56-5.7-2.5 13.8-5.59 27.95-9.82 38.43-20.92-6.95.45-13.56 3.23-22.04 2.5 12.99-8.64 25.42-15.02 40.29-16.69-1.71-3.4-5.14-3.25-7.69-4.92 9-5.28 18.53-5.59 28.45-3.77-.1-3.37-3.22-4.64-4.68-7.62 11.9 1.02 22.74 4.13 32.6 10.11 3.09 1.87 4.71 1.61 7.08-.96 3.13-3.38 6.96-6.03 11.44-7.52 1.38 1.98-1.43 2.95-.68 5.03 7.27-4.4 14.36-9.14 23.24-10.08-2.44 2.32-4.88 4.63-8.03 7.63 18.3 0 35.54.74 52.94 9.11-6.22 1.02-11.15 1.19-16.78 3.38 14.23 8.86 27.77 17.29 41.48 25.83-2.46 2.34-5.65 1.4-8.39 2.76 2.79 2.02 6.05 2 8.98 3.07-1.17 2.44-3.98.99-5.6 3.29 12.04 3.87 24.94 3.39 37.08 8.67-4.51 2.4-9.51 1.07-13.3 3.52.09 2.5 2.92 1.44 3.64 3.52Z"/><path class="cls-3" d="M366.81 689.96c-9.08-4.89-17.76-7.85-27.03-8.98-2.35-.29-3.87-.53-4.05-3.62-.18-3.04 1.35-3.78 3.56-4.32 9-2.22 18.07-3.83 27.92-2.82-4.14-3.85-12.44-5.51-20.55-4.36-3.06.43-6.09 1.09-9.14 1.64-.09-3.14-.17-6.28-.27-9.43-.02-.66.17-1.48-.15-1.97-3.87-5.95.7-8.5 4.52-11.32 14.29-10.57 28.47-21.32 45.57-27.18 3.97-1.36 8.02-2.13 12.22-1.75 2.65.24 3.99.93 3.33 4.4-3.51 18.45-8.09 36.62-13.82 54.5-.81 2.52-.62 4.78 0 7.29 3.95 16.3 8.24 32.56 7.37 49.6-.53 10.48-5.3 14.11-15.23 11.01-11.87-3.71-21.38-11.34-30.62-19.22-5.81-4.95-11.07-10.55-16.61-15.82-2.27-2.16-3.06-4.43-1.77-7.57 1.12-2.74 2.04-5.72 2.24-8.66.33-4.8 2.9-5.49 6.96-5.16 6.16.5 12.14 1.87 18.16 3.09 2.07.42 4.04 1.67 7.38.64Z"/><path class="cls-1" d="M317.14 397.23c10.85 7.54 21.74 13.84 33.65 18.14 7.22 2.61 14.64 4.37 22.37 4.66 12.27.46 23.01-3.02 31.49-12.19 1.9-2.05 2.88-2.83 4.35.44 9.85 21.93 15.32 44.91 17.1 68.83.21 2.77-.87 2.94-3.16 2.66-7.26-.89-14.55-1.58-21.83-2.33-12.78-1.31-25.52-1.11-39.03 1.11 1.82-4.78 3.47-9.1 5.42-14.23-13.52 4.32-26.12 9.81-40.08 9.6 3.13-2.76 6.69-4.73 9.62-7.57 7.38-7.18 8.77-14.09 4.49-23.4-3.87-8.41-9.11-15.9-15.93-22.13-3.12-2.84-5.04-5.96-5.67-10.07-.67-4.33-2.71-8.41-2.79-13.52Z"/><path class="cls-2" d="M129.42 320.59c10.2 3.35 19.38 8.72 28.31 14.5 9.5 6.15 18.9 12.45 29.34 16.92 2.25.96 2.94 1.94.85 3.79-5.53 4.88-10.73 9.35-19.36 6.7-8.61-2.64-17.42-.87-26.02 1.82-15.3 4.78-30.83 8.45-47.06 7.43-4.22-.27-8.51-.39-13.8-2.83 9.45-.54 17.62-.3 25.51-2.74-6.82-.79-14.24.63-19.51-5.8 2.19-1.59 4.26.64 6.47-1.02-5.87-3.53-12.44-5.86-16.57-12.5 5.22.84 9.83 1.58 14.44 2.31 4.49.72 8.96.63 13.4-.34 2.64-.58 5.43-1.18 6.03-4.35.57-3.02-1.44-4.98-3.55-6.7-1.13-.92-2.46-1.6-4.15-2.68 11.41-3.58 22.29-2.97 33.67.17-2.46-5.45-6.03-9.43-8.89-13.84l.87-.84Z"/><path class="cls-1" d="M82.6 412.44c6.35 3.78 11.52 8.04 15.62 13.51 1.82 2.43 2.75 4.74 1.33 7.77-.98 2.08-1.52 4.39-2.03 6.66-1.41 6.27-2.78 12.23-9.1 16.04-3.45 2.08-4.88 6.45-6.16 11.14 3.93-1.33 6.15-4.58 9.67-5.51-.59 7.44-1.49 14.71-1.64 21.99-.1 4.62-1.46 7.38-6.3 7.68-5.09.32-9.42-3.05-9.82-7.75-.58-6.81.77-13.58 3.85-19.35 5.1-9.55 3.87-18.61 1.06-28.31-4.18-14.4-7.27-29.05-5-44.24.69-4.63 2.02-9.05 4.33-13.17 1.01-1.8 2.03-2.77 4.29-2.19 13.45 3.43 26.93 3.42 41.24-.37-3.77 7.67-7.27 14.65-10.63 21.69-3.43 7.19-6.72 14.44-9.41 22.4-3.24-2.85-5.58-6.35-9.39-8.14-3.79-1.78-7.45-2.17-11.9.14ZM427.31 389.04c-2.86 6.74-3.54 13.35-8.01 18.7-3.71-7.28-7.17-14.33-10.88-21.26-1.64-3.05-5.17-5.76-5.33-8.76-.17-3.29 5.04-3.65 7.27-6.22 2.98-3.44 5.45-7.12 7.16-11.28.85-2.05 1.84-2.67 4.13-2.04 4.36 1.2 8.57 2.62 12.34 5.14 6.08 4.06 9.54 9.49 9.21 17.09-.47 10.97-.67 21.95-1.17 32.91-.13 2.95.55 5.43 1.94 8.01 3.96 7.39 6.85 15.11 6.5 23.74-.35 8.61-4.88 14.11-12.34 17.79-2.52 1.24-3.13.3-3.56-1.92-1.6-8.26-3.29-16.5-5.02-25.17 4.17.7 7.39 2.99 10.89 4.73.73-5.91-2.16-10.12-9.66-13.09-3.44-1.36-5.35-3.15-6.19-6.83-.58-2.54-.31-4.33 1.05-6.45 4.89-7.65 5-15.72 1.67-25.1Z"/><path class="cls-3" d="M219.84 530.86c4.17-.55 7.73-.98 11.28-1.5 2.51-.37 3.56 1.59 4.77 3.03 4.42 5.26 9.36 9.92 14.91 13.94 13.76 9.94 26.31 9.02 38.57-2.76 5.06-4.86 9.53-10.22 13.22-16.17 1.31-2.11 2.74-2.99 5.23-2.78 5.62.48 11.25.74 16.98 1.09.08 2.42-1.92 3.47-3.05 4.95-6.44 8.47-12.74 17.03-18.86 25.73-11.46 16.27-35.92 24.07-54.65 8.32-11.32-9.52-19.91-21.15-28.4-33.87Z"/><path class="cls-2" d="M345.15 362.79c7.05-1.33 13.45-2.54 20.95-3.96-3.81-2.96-6.76-5.26-10.19-7.93 9.01-5.12 16.43-12.1 25.62-16.49 3.42-1.63 6.72-3.63 9.58-6.24.76-.69 1.68-2.1 2.88-.96 1 .95.15 2.19-.35 3.21-.79 1.64-1.65 3.25-2.5 4.86-.53 1-1.52 2.07-.62 3.15.9 1.07 2.21.29 3.27 0 7.71-2.06 15.42-4.04 24.89-3.63-5 3.17-10.04 4.64-12.78 10.32 4.53-2.23 7.64-5.09 11.73-5.93 2.2-.45 3.69-.86 3.7 2.51.02 4.3 4.18 5.08 7.15 6.65 1.28.68 2.87.79 4.34 1.1 1.21.25 2.39.43 1.73 2.17-.54 1.42-1.38 2.44-2.98 1.59-7.75-4.12-15.3-2.46-23.11.11-5.4 1.78-11.14 1.18-17.99-.53 5.93 6.42 12.48 7.46 20.28 7.47-4.18 5.2-8.16 9.48-14.69 9.43-6.81-.06-13.61-.76-20.41-.99-4.15-.14-8.52-.69-12.42.34-7.39 1.94-12.28-1.82-18.07-6.26Z"/><path class="cls-3" d="M318.29 652.31c12.18-.28 12.81.53 12.06 12.66-.61 9.81-1.32 19.58-3.4 29.19-1.33 6.15-11.19 11.51-17.07 9.62-1.92-.62-1.66-1.99-1.35-3.16 2.16-8.25-1.02-16.14-1.7-24.17-.47-5.52-2.55-10.73-7.72-13.88-1.9-1.16-1.36-2.34-.33-3.67 2.93-3.79 6.94-5.61 11.55-6.18 2.31-.29 4.65-.25 7.97-.4Z"/><path class="cls-1" d="M241.97 527.69c9.95-2.98 19.41-5 27.41-10.7 1.61-1.15 2.8.52 4.01 1.12 7.22 3.57 14.66 6.13 23.56 5.98-4.1 9.52-9.93 16.97-20.02 19.17-14.86 3.24-25.33-4.68-34.97-15.57Z"/><path class="cls-7" d="M159.21 626.06c4.06 2.28 5.86 4.66 6.16 9.13 1.88 28.61 8.92 55.7 25.4 79.67 1.6 2.32 1.21 3.09-.96 4.46-2.37 1.5-3.72 1.97-5.35-.99-10.04-18.18-16.94-37.49-21.15-57.78-2.32-11.18-3.86-22.47-4.1-34.49Z"/><path class="cls-7" d="M169.23 633.21c4.4.76 5.54 3.46 6.02 7.39 2.97 24.23 9.88 47.08 24.57 67.01 1.32 1.79 1.59 2.93-.54 3.7-1.88.68-3.52 4.16-5.98.24-6.59-10.49-11.12-21.85-14.81-33.58-4.19-13.33-6.89-27.01-9-40.8-.2-1.28-.18-2.58-.27-3.96ZM179.02 638.37c4.23 2.14 7.36 4.02 7 9.33-.37 5.37 1.69 10.35 4.25 15.15 6.64 12.44 13.08 24.98 19.46 37.56.67 1.31 3.39 3.11-.21 4.64-2.32.98-3.77 1.63-5.58-1.19-9.22-14.37-16.08-29.75-20.76-46.13-1.77-6.19-3.58-12.4-4.17-19.35Z"/><path class="cls-1" d="M407.17 399.39c-7.18-2.01-13.36-3.85-19.6-5.43-2.61-.66-2.32-1.69-1.1-3.41.86-1.21 1.54-2.56 2.25-3.87 1.06-1.97.73-2.77-1.8-3.03-7.22-.74-12.61-5.07-17.69-10.26 7.82.88 15.65 1.74 23.47 2.65 1.18.14 2.06.76 2.76 1.86 4.19 6.57 8.57 13.03 11.7 21.49Z"/><path class="cls-2" d="M128.55 321.43c-.37-.44-.73-.89-1.1-1.33.85-.59 1.45-.22 1.97.49l-.87.84Z"/><path class="cls-1" d="M199.4 477.56c.36.16.99.18.63.78-.07.12-.78-.13-1.19-.21.18-.19.37-.39.56-.57Z"/><path d="M213.61 587.94c17.25 14.83 35.6 27.21 59.78 24.63 23.01-2.45 41.2-14.67 57.6-30.27-2.21 16.29-25.52 35.45-48.29 39.86-27.81 5.38-54.46-7.65-69.09-34.23Z" style="fill:#1e1816"/></svg>`;
    forkButton.innerHTML = forkButton.innerHTML.replace('Fork', 'Bork!');
//     const forkButtonSVG: SVGElement|null = forkButton.querySelector<SVGElement>('svg');

//     const borkSVG = document.createElement(`<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-2" style="fill: pink;">
//     <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
// </svg>`);


//     if (forkButtonSVG) {
//         forkButton.replaceChild(forkButtonSVG, borkSVG);
//     }
}
