// Linux subject data.
// Sources:
// - Linux/linux.jpeg
// - Linux/MCQ Practice solution.pdf
// - Linux/drive-download-20260526T120507Z-3-001/*.jpg
// - Linux/Shell_Scripting_CODING.pdf

const LINUX_MCQ_BANK = [
  {
    unitName: "ST-1 MCQs",
    examGroup: "st1",
    questions: [
      {
        id: 3001,
        source: "syllabus-generated",
        topic: "Linux distributions",
        question: "Which option best describes a Linux distribution?",
        options: {
          a: "Only the Linux kernel without user tools",
          b: "A complete operating system package built around the Linux kernel with tools, package manager, and defaults",
          c: "A hardware device used to boot Ubuntu",
          d: "A shell script used only for installing packages"
        },
        correct: "b",
        explanation: "The syllabus covers Ubuntu, Debian-based distributions, and derivatives. A distribution packages the Linux kernel with system tools, repositories, defaults, and a package manager."
      },
      {
        id: 3002,
        source: "syllabus-generated",
        topic: "Basic commands",
        question: "Which command prints the current working directory?",
        options: {
          a: "pwd",
          b: "whoami",
          c: "uname",
          d: "hostname"
        },
        correct: "a",
        explanation: "`pwd` prints the present working directory."
      },
      {
        id: 3003,
        source: "syllabus-generated",
        topic: "File navigation",
        question: "Which command changes the current directory in a Linux shell?",
        options: {
          a: "ls",
          b: "cd",
          c: "pwd",
          d: "cat"
        },
        correct: "b",
        explanation: "`cd` changes the shell's current working directory."
      },
      {
        id: 3004,
        source: "syllabus-generated",
        topic: "File manipulation",
        question: "Which command creates an empty file if it does not already exist?",
        options: {
          a: "touch",
          b: "mkdir",
          c: "rmdir",
          d: "clear"
        },
        correct: "a",
        explanation: "`touch` updates timestamps and creates an empty file when the file is missing."
      },
      {
        id: 3301,
        source: "provided-pdf",
        topic: "Standard streams",
        question: "Which standard stream is used to display error messages in a Linux terminal?",
        options: {
          a: "stdin",
          b: "stdout",
          c: "stderr",
          d: "stdlog"
        },
        correct: "c",
        explanation: "From `MCQ Practice solution.pdf`: `stderr` is the standard error stream."
      },
      {
        id: 3302,
        source: "provided-pdf",
        topic: "Redirection",
        question: "Which operator is used to append the output of a command to an existing file without overwriting it?",
        options: {
          a: ">",
          b: ">>",
          c: "<",
          d: "|"
        },
        correct: "b",
        explanation: "From `MCQ Practice solution.pdf`: `>>` appends output to an existing file."
      },
      {
        id: 3303,
        source: "provided-pdf",
        topic: "Disk usage",
        question: "Which command is primarily used to check the amount of available disk space on file systems?",
        options: {
          a: "du",
          b: "df",
          c: "fdisk",
          d: "mount"
        },
        correct: "b",
        explanation: "From `MCQ Practice solution.pdf`: `df` reports filesystem disk space."
      },
      {
        id: 3304,
        source: "provided-pdf",
        topic: "Shell parameters",
        question: "In a shell script, which special parameter represents the total number of arguments passed to the script?",
        options: {
          a: "$@",
          b: "$*",
          c: "$#",
          d: "$?"
        },
        correct: "c",
        explanation: "From `MCQ Practice solution.pdf`: `$#` stores the argument count."
      },
      {
        id: 3305,
        source: "provided-pdf",
        topic: "Ownership",
        question: "Which command is used to change the owner of a specific file in Linux?",
        options: {
          a: "chmod",
          b: "chown",
          c: "umask",
          d: "usermod"
        },
        correct: "b",
        explanation: "From `MCQ Practice solution.pdf`: `chown` changes file ownership."
      },
      {
        id: 3306,
        source: "provided-pdf",
        topic: "Permissions",
        question: "Which command changes file permissions in Linux?",
        options: {
          a: "chown",
          b: "chmod",
          c: "chgrp",
          d: "passwd"
        },
        correct: "b",
        explanation: "The ST-1 syllabus includes `chmod`; it changes file permission bits."
      },
      {
        id: 3307,
        source: "provided-pdf",
        topic: "Process management",
        question: "An administrator notices a process consuming high CPU. Which command can terminate that process by PID?",
        options: {
          a: "ps -9 <PID>",
          b: "kill -9 <PID>",
          c: "stop <PID>",
          d: "terminate <PID>"
        },
        correct: "b",
        explanation: "From `MCQ Practice solution.pdf`: `kill -9 <PID>` sends SIGKILL to the process."
      },
      {
        id: 3308,
        source: "provided-pdf",
        topic: "File viewing",
        question: "Which command is used to display the first 10 lines of a file in Linux?",
        options: {
          a: "tail",
          b: "cat",
          c: "head",
          d: "more"
        },
        correct: "c",
        explanation: "From `MCQ Practice solution.pdf`: `head` shows the beginning of a file."
      }
    ]
  },
  {
    unitName: "ST-2 MCQs",
    examGroup: "st2",
    questions: [
      {
        id: 3101,
        source: "syllabus-generated",
        topic: "Piping",
        question: "What does the pipe operator `|` do in Linux?",
        options: {
          a: "Redirects output to a file",
          b: "Sends output of one command as input to another",
          c: "Appends output to an existing file",
          d: "Reads input from a file"
        },
        correct: "b",
        explanation: "The pipe connects one command's standard output to another command's standard input."
      },
      {
        id: 3102,
        source: "syllabus-generated",
        topic: "Shell scripting tests",
        question: "Which test operator checks whether two numbers are equal in POSIX shell style?",
        options: {
          a: "-eq",
          b: "-ne",
          c: "-gt",
          d: "-lt"
        },
        correct: "a",
        explanation: "`-eq` tests numeric equality."
      },
      {
        id: 3311,
        source: "provided-pdf",
        topic: "Text processing",
        question: "Which command sequence correctly extracts the second column of a comma-separated file and sorts it numerically?",
        options: {
          a: "cut -d',' -f2 | sort -n",
          b: "paste -d',' -f2 | sort",
          c: "cut -f2 | sort -r",
          d: "sort -n | cut -d',' -f2"
        },
        correct: "a",
        explanation: "From `MCQ Practice solution.pdf`: `cut -d',' -f2` selects column 2 and `sort -n` sorts numerically."
      },
      {
        id: 3312,
        source: "provided-pdf",
        topic: "LVM",
        question: "Which component in Logical Volume Management acts as the physical layer directly mapped to disk partitions?",
        options: {
          a: "Logical Volume",
          b: "Volume Group",
          c: "Physical Volume",
          d: "Extent"
        },
        correct: "c",
        explanation: "From `MCQ Practice solution.pdf`: a Physical Volume is the LVM layer mapped to a disk or partition."
      },
      {
        id: 3313,
        source: "provided-pdf",
        topic: "Loops",
        question: "What is the primary difference between a `while` loop and an `until` loop in Bash?",
        options: {
          a: "While runs if true; Until runs if false",
          b: "Until runs if true; While runs if false",
          c: "There is no difference",
          d: "While cannot handle numbers"
        },
        correct: "a",
        explanation: "From `MCQ Practice solution.pdf`: `while` repeats while a condition is true; `until` repeats until it becomes true."
      },
      {
        id: 3314,
        source: "provided-pdf",
        topic: "Networking",
        question: "When using `tcpdump` to capture traffic, which flag disables name resolution and shows raw IP addresses?",
        options: {
          a: "-r",
          b: "-i",
          c: "-n",
          d: "-v"
        },
        correct: "c",
        explanation: "From `MCQ Practice solution.pdf`: `-n` prevents name resolution."
      },
      {
        id: 3315,
        source: "provided-pdf",
        topic: "File tests",
        question: "Which test command syntax checks if a variable points to an existing directory?",
        options: {
          a: "[ -f $var ]",
          b: "[ -x $var ]",
          c: "[ -d $var ]",
          d: "[ -z $var ]"
        },
        correct: "c",
        explanation: "From `MCQ Practice solution.pdf`: `-d` checks for a directory."
      },
      {
        id: 3316,
        source: "provided-pdf",
        topic: "Backup",
        question: "Which utility is used to create a compressed archive file with the `.tar.gz` extension?",
        options: {
          a: "zip",
          b: "gzip",
          c: "tar",
          d: "rsync"
        },
        correct: "c",
        explanation: "From `MCQ Practice solution.pdf`: `tar` creates archive files and can use gzip compression."
      },
      {
        id: 3317,
        source: "provided-pdf",
        topic: "Firewall",
        question: "What is the default command-line tool used to manage the firewall on Ubuntu systems?",
        options: {
          a: "iptables",
          b: "firewalld",
          c: "ufw",
          d: "nftables"
        },
        correct: "c",
        explanation: "From `MCQ Practice solution.pdf`: Ubuntu commonly uses UFW, the Uncomplicated Firewall."
      },
      {
        id: 3318,
        source: "provided-pdf",
        topic: "Arithmetic",
        question: "Which syntax is the modern standard for performing integer arithmetic in Bash?",
        options: {
          a: "expr 1 + 1",
          b: "$((1 + 1))",
          c: "[1 + 1]",
          d: "{1 + 1}"
        },
        correct: "b",
        explanation: "From `MCQ Practice solution.pdf`: arithmetic expansion uses `$((...))`."
      },
      {
        id: 3319,
        source: "provided-pdf",
        topic: "Netplan",
        question: "Which directory contains the YAML configuration files used by `netplan` for network setup?",
        options: {
          a: "/etc/network/",
          b: "/etc/netplan/",
          c: "/var/lib/netplan/",
          d: "/etc/sysconfig/"
        },
        correct: "b",
        explanation: "From `MCQ Practice solution.pdf`: netplan YAML files live under `/etc/netplan/`."
      },
      {
        id: 3320,
        source: "provided-pdf",
        topic: "Logs",
        question: "Which command provides a real-time view of kernel ring buffer messages to diagnose file system errors?",
        options: {
          a: "lsblk",
          b: "dmesg",
          c: "fdisk -l",
          d: "cat /etc/fstab"
        },
        correct: "b",
        explanation: "From `MCQ Practice solution.pdf`: `dmesg` displays kernel ring buffer messages."
      }
    ]
  },
  {
    unitName: "End Term MCQs",
    examGroup: "endTerm",
    questions: [
      {
        id: 3201,
        source: "syllabus-generated",
        topic: "Virtualization",
        question: "Which technology is specifically listed in the syllabus for virtualization on Ubuntu?",
        options: {
          a: "KVM",
          b: "HyperCard",
          c: "FAT32",
          d: "NetBIOS"
        },
        correct: "a",
        explanation: "`linux.jpeg` lists virtualization with KVM on Ubuntu."
      },
      {
        id: 3202,
        source: "syllabus-generated",
        topic: "Containers",
        question: "Which container platform is explicitly included in the Linux syllabus?",
        options: {
          a: "Docker",
          b: "Photoshop",
          c: "Postfix only",
          d: "BIOS"
        },
        correct: "a",
        explanation: "`linux.jpeg` lists containers and Docker/LXC/LXD on Ubuntu."
      },
      {
        id: 3321,
        source: "provided-pdf",
        topic: "SSH security",
        question: "Which service protects SSH servers against brute-force attacks by banning offending IP addresses?",
        options: {
          a: "ufw",
          b: "ssh-agent",
          c: "fail2ban",
          d: "openssl"
        },
        correct: "c",
        explanation: "From `MCQ Practice solution.pdf`: `fail2ban` can ban repeated failed login sources."
      },
      {
        id: 3322,
        source: "provided-pdf",
        topic: "SSH daemon",
        question: "Which configuration file is primarily used to manage the behavior of the SSH daemon?",
        options: {
          a: "/etc/ssh/ssh_config",
          b: "/etc/ssh/sshd_config",
          c: "/etc/ssh_host_key",
          d: "~/.ssh/config"
        },
        correct: "b",
        explanation: "From `MCQ Practice solution.pdf`: `sshd_config` configures the SSH daemon."
      },
      {
        id: 3323,
        source: "provided-pdf",
        topic: "UFW",
        question: "Which `ufw` command syntax correctly allows incoming traffic on port 80 using TCP?",
        options: {
          a: "ufw allow 80/tcp",
          b: "ufw open 80",
          c: "ufw enable 80",
          d: "ufw permit 80/tcp"
        },
        correct: "a",
        explanation: "From `MCQ Practice solution.pdf`: `ufw allow 80/tcp` allows TCP traffic on port 80."
      },
      {
        id: 3324,
        source: "provided-pdf",
        topic: "Netplan safety",
        question: "When modifying network settings on a remote Ubuntu server, which command applies changes with rollback if the connection fails?",
        options: {
          a: "sudo netplan apply",
          b: "sudo netplan generate",
          c: "sudo netplan try",
          d: "sudo nmcli con up"
        },
        correct: "c",
        explanation: "From `MCQ Practice solution.pdf`: `netplan try` allows confirmation and rollback."
      },
      {
        id: 3325,
        source: "provided-pdf",
        topic: "System logs",
        question: "Which `journalctl` option filters log entries from the current boot session only?",
        options: {
          a: "journalctl -u",
          b: "journalctl -b",
          c: "journalctl -f",
          d: "journalctl -k"
        },
        correct: "b",
        explanation: "From `MCQ Practice solution.pdf`: `journalctl -b` filters the current boot."
      }
    ]
  }
];

const LINUX_BASH_PROBLEMS = [
  {
    id: "bash-001",
    title: "Positive, Negative Or Zero",
    difficulty: "Easy",
    tags: ["if-else", "numbers", "test"],
    source: "Shell_Scripting_CODING.pdf",
    prompt: "Read one integer and print whether it is positive, negative, or zero.",
    constraints: ["Input contains one integer.", "Output must match exactly: `Positive number`, `Negative number`, or `Zero`."],
    starterCode: "#!/usr/bin/env bash\nread n\nif [ \"$n\" -gt 0 ]; then\n  echo \"Positive number\"\nelif [ \"$n\" -lt 0 ]; then\n  echo \"Negative number\"\nelse\n  echo \"Zero\"\nfi\n",
    examples: [
      { input: "-5\n", expectedOutput: "Negative number\n" }
    ],
    tests: [
      { name: "sample negative", input: "-5\n", expectedOutput: "Negative number\n", visible: true },
      { name: "positive", input: "9\n", expectedOutput: "Positive number\n", visible: true },
      { name: "zero", input: "0\n", expectedOutput: "Zero\n", visible: false }
    ]
  },
  {
    id: "bash-002",
    title: "Leap Year",
    difficulty: "Medium",
    tags: ["if-else", "arithmetic"],
    source: "Shell_Scripting_CODING.pdf",
    prompt: "Read a year and print whether it is a leap year.",
    constraints: ["Input contains one integer year.", "Use the standard leap-year rule.", "Output exactly `Leap year` or `Not a leap year`."],
    starterCode: "#!/usr/bin/env bash\nread year\nif [ $((year % 400)) -eq 0 ] || { [ $((year % 4)) -eq 0 ] && [ $((year % 100)) -ne 0 ]; }; then\n  echo \"Leap year\"\nelse\n  echo \"Not a leap year\"\nfi\n",
    examples: [
      { input: "2024\n", expectedOutput: "Leap year\n" }
    ],
    tests: [
      { name: "sample leap", input: "2024\n", expectedOutput: "Leap year\n", visible: true },
      { name: "century not leap", input: "1900\n", expectedOutput: "Not a leap year\n", visible: true },
      { name: "century leap", input: "2000\n", expectedOutput: "Leap year\n", visible: false }
    ]
  },
  {
    id: "bash-003",
    title: "Greater Number",
    difficulty: "Easy",
    tags: ["if-else", "numbers"],
    source: "Shell_Scripting_CODING.pdf",
    prompt: "Read two numbers and print the greater one using the exact format from the provided practice PDF.",
    constraints: ["Input contains two integers on one line.", "For equal values, printing either value as greater is accepted by the tests."],
    starterCode: "#!/usr/bin/env bash\nread a b\nif [ \"$a\" -gt \"$b\" ]; then\n  echo \"$a is greater\"\nelse\n  echo \"$b is greater\"\nfi\n",
    examples: [
      { input: "10 25\n", expectedOutput: "25 is greater\n" }
    ],
    tests: [
      { name: "sample second greater", input: "10 25\n", expectedOutput: "25 is greater\n", visible: true },
      { name: "first greater", input: "30 12\n", expectedOutput: "30 is greater\n", visible: true },
      { name: "negative comparison", input: "-3 -8\n", expectedOutput: "-3 is greater\n", visible: false }
    ]
  },
  {
    id: "bash-004",
    title: "Divisible By 3 And 5",
    difficulty: "Easy",
    tags: ["if-else", "modulo"],
    source: "Shell_Scripting_CODING.pdf",
    prompt: "Read one number and check whether it is divisible by both 3 and 5.",
    constraints: ["Input contains one integer.", "Output exactly `Divisible by both 3 and 5` or `Not divisible by both`."],
    starterCode: "#!/usr/bin/env bash\nread n\nif [ $((n % 3)) -eq 0 ] && [ $((n % 5)) -eq 0 ]; then\n  echo \"Divisible by both 3 and 5\"\nelse\n  echo \"Not divisible by both\"\nfi\n",
    examples: [
      { input: "15\n", expectedOutput: "Divisible by both 3 and 5\n" }
    ],
    tests: [
      { name: "sample divisible", input: "15\n", expectedOutput: "Divisible by both 3 and 5\n", visible: true },
      { name: "only divisible by 3", input: "9\n", expectedOutput: "Not divisible by both\n", visible: true },
      { name: "only divisible by 5", input: "20\n", expectedOutput: "Not divisible by both\n", visible: false }
    ]
  },
  {
    id: "bash-005",
    title: "Day Name",
    difficulty: "Easy",
    tags: ["case", "input"],
    source: "Shell_Scripting_CODING.pdf",
    prompt: "Read a day number from 1 to 7 and print the corresponding day name.",
    constraints: ["Input contains one integer.", "For values outside 1-7, print `Invalid day`."],
    starterCode: "#!/usr/bin/env bash\nread n\ncase \"$n\" in\n  1) echo \"Monday\" ;;\n  2) echo \"Tuesday\" ;;\n  3) echo \"Wednesday\" ;;\n  4) echo \"Thursday\" ;;\n  5) echo \"Friday\" ;;\n  6) echo \"Saturday\" ;;\n  7) echo \"Sunday\" ;;\n  *) echo \"Invalid day\" ;;\nesac\n",
    examples: [
      { input: "3\n", expectedOutput: "Wednesday\n" }
    ],
    tests: [
      { name: "sample", input: "3\n", expectedOutput: "Wednesday\n", visible: true },
      { name: "first day", input: "1\n", expectedOutput: "Monday\n", visible: true },
      { name: "invalid day", input: "9\n", expectedOutput: "Invalid day\n", visible: false }
    ]
  },
  {
    id: "bash-006",
    title: "Grade Result",
    difficulty: "Easy",
    tags: ["case", "strings"],
    source: "Shell_Scripting_CODING.pdf",
    prompt: "Read a grade letter and print the matching result.",
    constraints: ["A means Excellent, B means Good, C means Average, D means Below Average.", "Any other grade prints `Invalid`."],
    starterCode: "#!/usr/bin/env bash\nread grade\ncase \"$grade\" in\n  A) echo \"Excellent\" ;;\n  B) echo \"Good\" ;;\n  C) echo \"Average\" ;;\n  D) echo \"Below Average\" ;;\n  *) echo \"Invalid\" ;;\nesac\n",
    examples: [
      { input: "B\n", expectedOutput: "Good\n" }
    ],
    tests: [
      { name: "sample", input: "B\n", expectedOutput: "Good\n", visible: true },
      { name: "below average", input: "D\n", expectedOutput: "Below Average\n", visible: true },
      { name: "invalid", input: "F\n", expectedOutput: "Invalid\n", visible: false }
    ]
  }
];
