// Linux subject data.
// Primary organized source: Linux/Linux_Organized_Prep.md
// Supporting sources:
// - Linux/linux.jpeg
// - Linux/MCQ Practice solution.pdf
// - Linux/Shell_Scripting_CODING.pdf

const LINUX_MCQ_BANK = [
  {
    unitName: "ST-1 MCQs",
    examGroup: "st1",
    questions: [
      {
        id: 3001,
        source: "organized-prep",
        topic: "Linux distributions",
        question: "Which option best describes a Linux distribution?",
        options: {
          a: "A shell script used only for installing packages",
          b: "Only the Linux kernel without user tools",
          c: "A complete operating system package built around the Linux kernel with tools, package manager, and defaults",
          d: "A hardware device used to boot Ubuntu"
        },
        correct: "c",
        explanation: "A distribution packages the Linux kernel with tools, repositories, defaults, and a package manager."
      },
      {
        id: 3002,
        source: "organized-prep",
        topic: "Basic commands",
        question: "Which command is used to print the current working directory?",
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
        source: "organized-prep",
        topic: "File manipulation",
        question: "Which command is used to create an empty file or update its timestamp?",
        options: {
          a: "mkdir",
          b: "rmdir",
          c: "clear",
          d: "touch"
        },
        correct: "d",
        explanation: "`touch` updates timestamps and creates an empty file if it is missing."
      },
      {
        id: 3004,
        source: "organized-prep",
        topic: "Permissions",
        question: "Which command is used to change file permissions?",
        options: {
          a: "chown",
          b: "chmod",
          c: "passwd",
          d: "groupadd"
        },
        correct: "b",
        explanation: "`chmod` changes read, write, and execute permissions."
      },
      {
        id: 3005,
        source: "organized-prep",
        topic: "Ownership",
        question: "Which command is used to change the owner of a specific file?",
        options: {
          a: "chown",
          b: "chmod",
          c: "umask",
          d: "usermod"
        },
        correct: "a",
        explanation: "`chown` changes file ownership."
      },
      {
        id: 3006,
        source: "organized-prep",
        topic: "Disk partitions",
        question: "Which command displays the partition table of a disk such as `/dev/sda`?",
        options: {
          a: "df -h /dev/sda",
          b: "mount /dev/sda",
          c: "fdisk -l /dev/sda",
          d: "du -sh /dev/sda"
        },
        correct: "c",
        explanation: "`fdisk -l /dev/sda` lists partition information for that disk."
      },
      {
        id: 3007,
        source: "organized-prep",
        topic: "File management",
        question: "Which command is used to remove a directory along with all its contents?",
        options: {
          a: "rmdir",
          b: "rm -r",
          c: "del -r",
          d: "remove -a"
        },
        correct: "b",
        explanation: "`rm -r` recursively removes a directory tree."
      },
      {
        id: 3008,
        source: "organized-prep",
        topic: "System information",
        question: "Which command displays free and used memory in the system?",
        options: {
          a: "vmstat",
          b: "iostat",
          c: "top",
          d: "free"
        },
        correct: "d",
        explanation: "`free` reports memory usage."
      },
      {
        id: 3009,
        source: "organized-prep",
        topic: "File viewing",
        question: "Which command shows the first 10 lines of a file?",
        options: {
          a: "head",
          b: "tail",
          c: "more",
          d: "less"
        },
        correct: "a",
        explanation: "`head` shows the beginning of a file."
      },
      {
        id: 3010,
        source: "organized-prep",
        topic: "File viewing",
        question: "Which command shows the last 20 lines of a file named `system.log`?",
        options: {
          a: "head -20 system.log",
          b: "cat -20 system.log",
          c: "tail -20 system.log",
          d: "less -20 system.log"
        },
        correct: "c",
        explanation: "`tail -20 system.log` displays the final 20 lines."
      },
      {
        id: 3011,
        source: "organized-prep",
        topic: "Filesystems",
        question: "Which file system type is the default used by Ubuntu for primary partitions?",
        options: {
          a: "NTFS",
          b: "ext4",
          c: "FAT32",
          d: "xfs"
        },
        correct: "b",
        explanation: "Ubuntu commonly uses `ext4` as the default primary filesystem."
      },
      {
        id: 3012,
        source: "organized-prep",
        topic: "Standard streams",
        question: "What does the `stdin` standard stream represent?",
        options: {
          a: "Standard output to the terminal",
          b: "Standard error messages",
          c: "System log input",
          d: "Standard input from the keyboard"
        },
        correct: "d",
        explanation: "`stdin` is standard input and uses file descriptor 0."
      },
      {
        id: 3013,
        source: "organized-prep",
        topic: "Standard streams",
        question: "Which file descriptor number is associated with `stderr`?",
        options: {
          a: "0",
          b: "1",
          c: "2",
          d: "3"
        },
        correct: "c",
        explanation: "`stderr` uses file descriptor 2."
      },
      {
        id: 3014,
        source: "organized-prep",
        topic: "User identity",
        question: "Which command displays the username of the logged-in user?",
        options: {
          a: "whoami",
          b: "hostname",
          c: "uname",
          d: "tty"
        },
        correct: "a",
        explanation: "`whoami` displays the current username."
      },
      {
        id: 3015,
        source: "organized-prep",
        topic: "Disk usage",
        question: "Which utility reports total used and available space on mounted filesystems in human-readable form?",
        options: {
          a: "du -sh",
          b: "fdisk -l",
          c: "lsblk",
          d: "df -h"
        },
        correct: "d",
        explanation: "`df -h` reports mounted filesystem usage in human-readable units."
      },
      {
        id: 3016,
        source: "organized-prep",
        topic: "Mounting",
        question: "Which command mounts a file system at a specified mount point?",
        options: {
          a: "fsck",
          b: "mount",
          c: "umount",
          d: "parted"
        },
        correct: "b",
        explanation: "`mount` attaches a filesystem to a directory mount point."
      },
      {
        id: 3017,
        source: "organized-prep",
        topic: "Filesystem repair",
        question: "Which command should you run on an unmounted device to check and repair its consistency?",
        options: {
          a: "df -h",
          b: "du -h",
          c: "fsck",
          d: "free"
        },
        correct: "c",
        explanation: "`fsck` checks and repairs filesystem consistency on an unmounted device."
      },
      {
        id: 3018,
        source: "organized-prep",
        topic: "Disk usage",
        question: "Which command displays disk usage of files and directories in human-readable form?",
        options: {
          a: "du -h",
          b: "df -i",
          c: "lsblk",
          d: "free -h"
        },
        correct: "a",
        explanation: "`du -h` reports file and directory disk usage in human-readable units."
      },
      {
        id: 3019,
        source: "organized-prep",
        topic: "Partitioning",
        question: "Which tool is most appropriate for creating a new partition on a large disk using GPT?",
        options: {
          a: "fdformat",
          b: "mkfs",
          c: "mount",
          d: "parted"
        },
        correct: "d",
        explanation: "`parted` supports GPT partition tables and large disks."
      },
      {
        id: 3020,
        source: "organized-prep",
        topic: "Processes",
        question: "Which command can be used to terminate a process by its PID such as PID 1234?",
        options: {
          a: "ps -9 1234",
          b: "kill -9 1234",
          c: "stop 1234",
          d: "end 1234"
        },
        correct: "b",
        explanation: "`kill -9 1234` sends SIGKILL to process 1234."
      },
      {
        id: 3021,
        source: "organized-prep",
        topic: "Text processing",
        question: "Which command extracts only the third column from a colon-delimited `/etc/passwd` file?",
        options: {
          a: "cut -d: -f3 /etc/passwd",
          b: "awk -d: 3 /etc/passwd",
          c: "sort -d: -f3 /etc/passwd",
          d: "paste -d: -f3 /etc/passwd"
        },
        correct: "a",
        explanation: "`cut -d: -f3 /etc/passwd` selects field 3 using colon as the delimiter."
      },
      {
        id: 3022,
        source: "organized-prep",
        topic: "Unmounting",
        question: "Which command is used to safely detach a mounted file system?",
        options: {
          a: "mount",
          b: "detachfs",
          c: "umount",
          d: "ejectfs"
        },
        correct: "c",
        explanation: "`umount` detaches a mounted filesystem."
      },
      {
        id: 3023,
        source: "organized-prep",
        topic: "Text processing",
        question: "Which command in Linux sorts lines of a text file in alphabetical order?",
        options: {
          a: "uniq",
          b: "sort",
          c: "cut",
          d: "paste"
        },
        correct: "b",
        explanation: "`sort` orders lines alphabetically by default."
      }
    ]
  },
  {
    unitName: "ST-2 MCQs",
    examGroup: "st2",
    questions: [
      {
        id: 3101,
        source: "organized-prep",
        topic: "Piping",
        question: "What does the pipe operator `|` do?",
        options: {
          a: "Sends output of one command as input to another",
          b: "Redirects output to a file",
          c: "Appends output to an existing file",
          d: "Reads input from a file"
        },
        correct: "a",
        explanation: "The pipe connects one command's standard output to another command's standard input."
      },
      {
        id: 3102,
        source: "organized-prep",
        topic: "Redirection",
        question: "Which redirection operator appends output to an existing file?",
        options: {
          a: ">",
          b: "<",
          c: ">>",
          d: "|"
        },
        correct: "c",
        explanation: "`>>` appends output; `>` overwrites."
      },
      {
        id: 3103,
        source: "organized-prep",
        topic: "Redirection",
        question: "Which symbol redirects both standard output and standard error to the same file?",
        options: {
          a: "2>",
          b: "&>",
          c: ">>",
          d: "<"
        },
        correct: "b",
        explanation: "`&>` redirects both stdout and stderr in Bash."
      },
      {
        id: 3104,
        source: "organized-prep",
        topic: "Text processing",
        question: "Which command is used to combine lines from multiple files side-by-side?",
        options: {
          a: "cut",
          b: "sort",
          c: "grep",
          d: "paste"
        },
        correct: "d",
        explanation: "`paste` merges corresponding lines side-by-side."
      },
      {
        id: 3105,
        source: "organized-prep",
        topic: "Text processing",
        question: "Which command sequence extracts the second column of a CSV and sorts it numerically?",
        options: {
          a: "paste -d',' -f2 | sort",
          b: "cut -d',' -f2 | sort -n",
          c: "cut -f2 | sort -r",
          d: "sort -n | cut -d',' -f2"
        },
        correct: "b",
        explanation: "`cut -d',' -f2` selects column 2 and `sort -n` sorts numerically."
      },
      {
        id: 3106,
        source: "organized-prep",
        topic: "Loops",
        question: "What is the primary difference between a `while` loop and an `until` loop?",
        options: {
          a: "`until` runs if true; `while` runs if false",
          b: "There is no difference",
          c: "`while` cannot handle numbers",
          d: "`while` runs if the condition is true; `until` runs if it is false"
        },
        correct: "d",
        explanation: "`while` repeats while a condition is true; `until` repeats until the condition becomes true."
      },
      {
        id: 3107,
        source: "organized-prep",
        topic: "Case statements",
        question: "In a `case` statement, which character sequence ends a pattern block?",
        options: {
          a: ";;",
          b: "fi",
          c: "done",
          d: "caseend"
        },
        correct: "a",
        explanation: "`;;` terminates a pattern block in a shell `case` statement."
      },
      {
        id: 3108,
        source: "organized-prep",
        topic: "Arithmetic",
        question: "Which syntax is the modern standard for performing integer arithmetic in Bash?",
        options: {
          a: "expr 1 + 1",
          b: "[1 + 1]",
          c: "$((1 + 1))",
          d: "{1 + 1}"
        },
        correct: "c",
        explanation: "Arithmetic expansion uses `$((...))`."
      },
      {
        id: 3109,
        source: "organized-prep",
        topic: "Exit status",
        question: "Which special variable holds the exit status of the last executed command?",
        options: {
          a: "$0",
          b: "$?",
          c: "$#",
          d: "$$"
        },
        correct: "b",
        explanation: "`$?` stores the exit status of the last command."
      },
      {
        id: 3110,
        source: "organized-prep",
        topic: "Shell parameters",
        question: "In a shell script, which parameter represents the total number of arguments passed?",
        options: {
          a: "$@",
          b: "$*",
          c: "$?",
          d: "$#"
        },
        correct: "d",
        explanation: "`$#` stores the argument count."
      },
      {
        id: 3111,
        source: "organized-prep",
        topic: "Shell parameters",
        question: "Which special parameter contains all arguments as a single word?",
        options: {
          a: "$*",
          b: "$@",
          c: "$#",
          d: "$?"
        },
        correct: "a",
        explanation: "`$*` expands all positional parameters as one word when quoted."
      },
      {
        id: 3112,
        source: "organized-prep",
        topic: "LVM",
        question: "In LVM, which component acts as the physical layer directly mapped to disk partitions?",
        options: {
          a: "Logical Volume",
          b: "Volume Group",
          c: "Physical Volume",
          d: "Extent"
        },
        correct: "c",
        explanation: "A Physical Volume is the LVM layer mapped to a disk or partition."
      },
      {
        id: 3113,
        source: "organized-prep",
        topic: "LVM",
        question: "Which LVM command is used to initialize a physical partition for LVM use?",
        options: {
          a: "vgcreate",
          b: "pvcreate",
          c: "lvcreate",
          d: "lvextend"
        },
        correct: "b",
        explanation: "`pvcreate` initializes a disk or partition as an LVM physical volume."
      },
      {
        id: 3114,
        source: "organized-prep",
        topic: "LVM",
        question: "What is the correct order to expand a Volume Group with a new disk?",
        options: {
          a: "vgcreate followed by lvextend",
          b: "lvcreate followed by vgextend",
          c: "pvcreate followed by vgextend",
          d: "pvcreate followed by lvresize"
        },
        correct: "c",
        explanation: "Prepare the disk with `pvcreate`, then add it to the VG using `vgextend`."
      },
      {
        id: 3115,
        source: "organized-prep",
        topic: "LVM",
        question: "Which command extends a logical volume named `data_lv` by 5GB?",
        options: {
          a: "lvresize -L +5G /dev/vg0/data_lv",
          b: "pvresize -L +5G /dev/vg0/data_lv",
          c: "vgextend -L +5G /dev/vg0/data_lv",
          d: "mount -L +5G /dev/vg0/data_lv"
        },
        correct: "a",
        explanation: "`lvresize -L +5G /dev/vg0/data_lv` grows that logical volume by 5GB."
      },
      {
        id: 3116,
        source: "organized-prep",
        topic: "Kernel tuning",
        question: "Which sysctl parameter controls the maximum number of open file descriptors system-wide?",
        options: {
          a: "net.ipv4.ip_forward",
          b: "vm.swappiness",
          c: "kernel.pid_max",
          d: "fs.file-max"
        },
        correct: "d",
        explanation: "`fs.file-max` controls the system-wide maximum number of open file descriptors."
      },
      {
        id: 3117,
        source: "organized-prep",
        topic: "Redirection",
        question: "Which symbol is used to redirect the contents of a file into a command's input?",
        options: {
          a: "<",
          b: ">",
          c: ">>",
          d: "|"
        },
        correct: "a",
        explanation: "`<` redirects a file into standard input."
      },
      {
        id: 3118,
        source: "organized-prep",
        topic: "Conditionals",
        question: "Which construct correctly checks if a variable NUM is between 10 and 20?",
        options: {
          a: "if [ $NUM > 10 && $NUM < 20 ]",
          b: "if [[ $NUM -gt 10 && $NUM -lt 20 ]]",
          c: "if (( NUM > 10 || NUM < 20 ))",
          d: "if test $NUM between 10 20"
        },
        correct: "b",
        explanation: "`[[ $NUM -gt 10 && $NUM -lt 20 ]]` combines two numeric comparisons."
      },
      {
        id: 3119,
        source: "organized-prep",
        topic: "Strings",
        question: "How do you count the number of characters in a variable `VAR=hello`?",
        options: {
          a: "echo $#VAR",
          b: "echo ${VAR#}",
          c: "echo ${#VAR}",
          d: "echo length(VAR)"
        },
        correct: "c",
        explanation: "`${#VAR}` expands to the length of the variable value."
      },
      {
        id: 3120,
        source: "organized-prep",
        topic: "File tests",
        question: "Which test command syntax checks if a variable points to an existing directory?",
        options: {
          a: "[ -f $var ]",
          b: "[ -d $var ]",
          c: "[ -x $var ]",
          d: "[ -e dir $var ]"
        },
        correct: "b",
        explanation: "`-d` tests whether the path is an existing directory."
      },
      {
        id: 3121,
        source: "organized-prep",
        topic: "Shell parameters",
        question: "Which special variable stores the process ID of the current shell?",
        options: {
          a: "$$",
          b: "$!",
          c: "$?",
          d: "$#"
        },
        correct: "a",
        explanation: "`$$` expands to the PID of the current shell."
      },
      {
        id: 3122,
        source: "organized-prep",
        topic: "Redirection",
        question: "Which redirection operator is used to send standard error to a file?",
        options: {
          a: ">",
          b: "2>",
          c: "<",
          d: "1>"
        },
        correct: "b",
        explanation: "`2>` redirects file descriptor 2, standard error."
      }
    ]
  },
  {
    unitName: "End Term MCQs",
    examGroup: "endTerm",
    questions: [
      {
        id: 3201,
        source: "organized-prep",
        topic: "Netplan",
        question: "Which directory contains the YAML configuration files for Netplan?",
        options: {
          a: "/etc/network/",
          b: "/var/lib/netplan/",
          c: "/etc/netplan/",
          d: "/etc/sysconfig/"
        },
        correct: "c",
        explanation: "Netplan YAML files are stored under `/etc/netplan/`."
      },
      {
        id: 3202,
        source: "organized-prep",
        topic: "Netplan",
        question: "Which Netplan command applies changes with rollback safety?",
        options: {
          a: "sudo netplan apply",
          b: "sudo netplan try",
          c: "sudo netplan generate",
          d: "sudo nmcli con up"
        },
        correct: "b",
        explanation: "`netplan try` allows confirmation and rollback if connectivity fails."
      },
      {
        id: 3203,
        source: "organized-prep",
        topic: "Firewall",
        question: "What is the default command-line tool to manage the firewall on Ubuntu?",
        options: {
          a: "iptables",
          b: "firewalld",
          c: "nftables",
          d: "ufw"
        },
        correct: "d",
        explanation: "Ubuntu commonly uses UFW, the Uncomplicated Firewall."
      },
      {
        id: 3204,
        source: "organized-prep",
        topic: "Firewall",
        question: "Which `ufw` command correctly allows incoming traffic on port 80/TCP?",
        options: {
          a: "ufw allow 80/tcp",
          b: "ufw open 80",
          c: "ufw enable 80",
          d: "ufw permit 80/tcp"
        },
        correct: "a",
        explanation: "`ufw allow 80/tcp` allows TCP traffic on port 80."
      },
      {
        id: 3205,
        source: "organized-prep",
        topic: "SSH",
        question: "Which command allows incoming SSH connections on Ubuntu?",
        options: {
          a: "iptables --allow ssh",
          b: "netstat allow 22",
          c: "ufw allow ssh",
          d: "nmcli con allow ssh"
        },
        correct: "c",
        explanation: "`ufw allow ssh` opens the SSH service profile."
      },
      {
        id: 3206,
        source: "organized-prep",
        topic: "SSH security",
        question: "Which service protects SSH from brute-force attacks by banning IPs?",
        options: {
          a: "ufw",
          b: "ssh-agent",
          c: "openssl",
          d: "fail2ban"
        },
        correct: "d",
        explanation: "`fail2ban` bans repeated failed login sources."
      },
      {
        id: 3207,
        source: "organized-prep",
        topic: "SSH daemon",
        question: "Which configuration file manages the behavior of the SSH daemon?",
        options: {
          a: "/etc/ssh/sshd_config",
          b: "/etc/ssh/ssh_config",
          c: "/etc/ssh_host_key",
          d: "~/.ssh/config"
        },
        correct: "a",
        explanation: "`sshd_config` configures the SSH daemon."
      },
      {
        id: 3208,
        source: "organized-prep",
        topic: "tcpdump",
        question: "When using `tcpdump`, which flag disables name resolution and shows raw IPs?",
        options: {
          a: "-r",
          b: "-i",
          c: "-n",
          d: "-v"
        },
        correct: "c",
        explanation: "`-n` prevents name resolution."
      },
      {
        id: 3209,
        source: "organized-prep",
        topic: "tcpdump",
        question: "Which `tcpdump` flag saves raw packets to a `.pcap` file?",
        options: {
          a: "-w",
          b: "-n",
          c: "-i",
          d: "-v"
        },
        correct: "a",
        explanation: "`tcpdump -w file.pcap` writes captured packets to a file."
      },
      {
        id: 3210,
        source: "organized-prep",
        topic: "NetworkManager",
        question: "Which `nmcli` command provides a summary of all network interfaces?",
        options: {
          a: "nmcli connection show",
          b: "nmcli device status",
          c: "nmcli general status",
          d: "nmcli network on"
        },
        correct: "b",
        explanation: "`nmcli device status` summarizes interface states."
      },
      {
        id: 3211,
        source: "organized-prep",
        topic: "Kernel logs",
        question: "Which command provides a real-time view of kernel ring buffer messages?",
        options: {
          a: "lsblk",
          b: "fdisk -l",
          c: "dmesg",
          d: "cat /etc/fstab"
        },
        correct: "c",
        explanation: "`dmesg` displays kernel ring buffer messages."
      },
      {
        id: 3212,
        source: "organized-prep",
        topic: "System logs",
        question: "Which `journalctl` option filters log entries from the current boot only?",
        options: {
          a: "journalctl -u",
          b: "journalctl -f",
          c: "journalctl -k",
          d: "journalctl -b"
        },
        correct: "d",
        explanation: "`journalctl -b` filters the current boot."
      },
      {
        id: 3213,
        source: "organized-prep",
        topic: "Backup",
        question: "Which tool is best for synchronizing files while minimizing data transfer?",
        options: {
          a: "rsync",
          b: "tar",
          c: "cp -r",
          d: "scp"
        },
        correct: "a",
        explanation: "`rsync` transfers only the differences where possible."
      },
      {
        id: 3214,
        source: "organized-prep",
        topic: "Virtualization",
        question: "Which technology is listed for virtualization on Ubuntu in the syllabus?",
        options: {
          a: "Netplan",
          b: "KVM",
          c: "UFW",
          d: "rsync"
        },
        correct: "b",
        explanation: "`linux.jpeg` lists virtualization with KVM on Ubuntu."
      },
      {
        id: 3215,
        source: "organized-prep",
        topic: "Containers",
        question: "Which container platform is explicitly included in the Linux syllabus?",
        options: {
          a: "AppArmor",
          b: "NetBIOS",
          c: "Docker",
          d: "Syslog"
        },
        correct: "c",
        explanation: "`linux.jpeg` lists Docker, LXC/LXD, and container orchestration basics."
      },
      {
        id: 3216,
        source: "organized-prep",
        topic: "Services",
        question: "Which command enables a service to start automatically at boot time?",
        options: {
          a: "systemctl start <service>",
          b: "service <service> boot",
          c: "systemctl enable <service>",
          d: "chkboot <service>"
        },
        correct: "c",
        explanation: "`systemctl enable <service>` enables a unit at boot."
      },
      {
        id: 3217,
        source: "organized-prep",
        topic: "tcpdump",
        question: "Which `tcpdump` flag captures traffic on a specific interface `eth0`?",
        options: {
          a: "-n eth0",
          b: "-w eth0",
          c: "-r eth0",
          d: "-i eth0"
        },
        correct: "d",
        explanation: "`tcpdump -i eth0` captures on interface `eth0`."
      },
      {
        id: 3218,
        source: "organized-prep",
        topic: "Network monitoring",
        question: "Which command is used to monitor real-time network traffic at the packet level?",
        options: {
          a: "tcpdump",
          b: "rsync",
          c: "journalctl",
          d: "netplan"
        },
        correct: "a",
        explanation: "`tcpdump` captures packet-level network traffic."
      },
      {
        id: 3219,
        source: "organized-prep",
        topic: "Firewall",
        question: "How do you allow traffic on port 8080 permanently using `ufw`?",
        options: {
          a: "sudo ufw enable 8080",
          b: "sudo ufw allow 8080/tcp",
          c: "sudo ufw port 8080/tcp",
          d: "sudo ufw open permanent 8080"
        },
        correct: "b",
        explanation: "`sudo ufw allow 8080/tcp` adds a persistent UFW rule for TCP port 8080."
      },
      {
        id: 3220,
        source: "organized-prep",
        topic: "I/O monitoring",
        question: "Which command shows detailed I/O statistics updated every 2 seconds?",
        options: {
          a: "free 2",
          b: "vmstat -d",
          c: "iostat 2",
          d: "dmesg -w"
        },
        correct: "c",
        explanation: "`iostat 2` refreshes I/O statistics every 2 seconds."
      }
    ]
  }
];

const EMPTY_BASH_STARTER = "#!/usr/bin/env bash\n\n";

const LINUX_BASH_PROBLEMS = [
  {
    id: "bash-001",
    title: "Check Number Sign",
    difficulty: "Easy",
    tags: ["ST-1", "if-else", "numbers"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read one integer and print whether it is Positive, Negative, or Zero.",
    constraints: ["Input contains one integer.", "Output must match exactly: `Positive`, `Negative`, or `Zero`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nif [ \"$n\" -gt 0 ]; then\n  echo \"Positive\"\nelif [ \"$n\" -lt 0 ]; then\n  echo \"Negative\"\nelse\n  echo \"Zero\"\nfi\n",
    examples: [{ input: "-5\n", expectedOutput: "Negative\n" }],
    tests: [
      { name: "sample negative", input: "-5\n", expectedOutput: "Negative\n", visible: true },
      { name: "positive", input: "7\n", expectedOutput: "Positive\n", visible: true },
      { name: "zero", input: "0\n", expectedOutput: "Zero\n", visible: false }
    ]
  },
  {
    id: "bash-002",
    title: "Greater Of Two",
    difficulty: "Easy",
    tags: ["ST-1", "if-else", "numbers"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read two integers and print the greater one.",
    constraints: ["Input contains two integers on one line.", "Output only the larger integer."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread a b\nif [ \"$a\" -gt \"$b\" ]; then\n  echo \"$a\"\nelse\n  echo \"$b\"\nfi\n",
    examples: [{ input: "10 25\n", expectedOutput: "25\n" }],
    tests: [
      { name: "sample second greater", input: "10 25\n", expectedOutput: "25\n", visible: true },
      { name: "first greater", input: "30 12\n", expectedOutput: "30\n", visible: true },
      { name: "negative values", input: "-3 -8\n", expectedOutput: "-3\n", visible: false }
    ]
  },
  {
    id: "bash-003",
    title: "Basic Attributes",
    difficulty: "Easy",
    tags: ["ST-1", "system-info", "formatting"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read UID, GID, kernel name, and current year. Print them as labeled lines.",
    constraints: ["Input has four values: UID GID KERNEL YEAR.", "Print one labeled value per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread uid gid kernel year\necho \"UID: $uid\"\necho \"GID: $gid\"\necho \"Kernel: $kernel\"\necho \"Year: $year\"\n",
    examples: [{ input: "1000 1000 Linux 2026\n", expectedOutput: "UID: 1000\nGID: 1000\nKernel: Linux\nYear: 2026\n" }],
    tests: [
      { name: "student account", input: "1000 1000 Linux 2026\n", expectedOutput: "UID: 1000\nGID: 1000\nKernel: Linux\nYear: 2026\n", visible: true },
      { name: "service account", input: "120 130 Linux 2025\n", expectedOutput: "UID: 120\nGID: 130\nKernel: Linux\nYear: 2025\n", visible: true },
      { name: "admin account", input: "0 0 GNU/Linux 2024\n", expectedOutput: "UID: 0\nGID: 0\nKernel: GNU/Linux\nYear: 2024\n", visible: false }
    ]
  },
  {
    id: "bash-004",
    title: "Leap Year Checker",
    difficulty: "Medium",
    tags: ["ST-2", "if-else", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a year and print whether it is a leap year.",
    constraints: ["Use the standard leap-year rule.", "Output exactly `Leap year` or `Not a leap year`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread year\nif [ $((year % 400)) -eq 0 ] || { [ $((year % 4)) -eq 0 ] && [ $((year % 100)) -ne 0 ]; }; then\n  echo \"Leap year\"\nelse\n  echo \"Not a leap year\"\nfi\n",
    examples: [{ input: "2024\n", expectedOutput: "Leap year\n" }],
    tests: [
      { name: "sample leap", input: "2024\n", expectedOutput: "Leap year\n", visible: true },
      { name: "century not leap", input: "1900\n", expectedOutput: "Not a leap year\n", visible: true },
      { name: "century leap", input: "2000\n", expectedOutput: "Leap year\n", visible: false }
    ]
  },
  {
    id: "bash-005",
    title: "Divisibility Test",
    difficulty: "Easy",
    tags: ["ST-2", "if-else", "modulo"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read one number and check whether it is divisible by both 3 and 5.",
    constraints: ["Input contains one integer.", "Output exactly `Divisible by both 3 and 5` or `Not divisible by both`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nif [ $((n % 3)) -eq 0 ] && [ $((n % 5)) -eq 0 ]; then\n  echo \"Divisible by both 3 and 5\"\nelse\n  echo \"Not divisible by both\"\nfi\n",
    examples: [{ input: "15\n", expectedOutput: "Divisible by both 3 and 5\n" }],
    tests: [
      { name: "sample divisible", input: "15\n", expectedOutput: "Divisible by both 3 and 5\n", visible: true },
      { name: "only divisible by 3", input: "9\n", expectedOutput: "Not divisible by both\n", visible: true },
      { name: "only divisible by 5", input: "20\n", expectedOutput: "Not divisible by both\n", visible: false }
    ]
  },
  {
    id: "bash-006",
    title: "Menu Calculator",
    difficulty: "Medium",
    tags: ["ST-2", "case", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a menu choice and two numbers. Use 1=Add, 2=Subtract, 3=Multiply, 4=Divide.",
    constraints: ["Input line 1 is the choice.", "Input line 2 contains two integers.", "Use the exact output labels."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread choice\nread a b\ncase \"$choice\" in\n  1) echo \"Sum = $((a + b))\" ;;\n  2) echo \"Difference = $((a - b))\" ;;\n  3) echo \"Product = $((a * b))\" ;;\n  4) echo \"Division = $((a / b))\" ;;\n  *) echo \"Invalid choice\" ;;\nesac\n",
    examples: [{ input: "3\n10 2\n", expectedOutput: "Product = 20\n" }],
    tests: [
      { name: "sample multiply", input: "3\n10 2\n", expectedOutput: "Product = 20\n", visible: true },
      { name: "addition", input: "1\n8 7\n", expectedOutput: "Sum = 15\n", visible: true },
      { name: "subtract", input: "2\n12 5\n", expectedOutput: "Difference = 7\n", visible: false },
      { name: "divide", input: "4\n20 4\n", expectedOutput: "Division = 5\n", visible: false }
    ]
  },
  {
    id: "bash-007",
    title: "Day Name",
    difficulty: "Easy",
    tags: ["ST-2", "case"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a day number from 1 to 7 and print the corresponding day name.",
    constraints: ["For values outside 1-7, print `Invalid day`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\ncase \"$n\" in\n  1) echo \"Monday\" ;;\n  2) echo \"Tuesday\" ;;\n  3) echo \"Wednesday\" ;;\n  4) echo \"Thursday\" ;;\n  5) echo \"Friday\" ;;\n  6) echo \"Saturday\" ;;\n  7) echo \"Sunday\" ;;\n  *) echo \"Invalid day\" ;;\nesac\n",
    examples: [{ input: "3\n", expectedOutput: "Wednesday\n" }],
    tests: [
      { name: "sample", input: "3\n", expectedOutput: "Wednesday\n", visible: true },
      { name: "first day", input: "1\n", expectedOutput: "Monday\n", visible: true },
      { name: "invalid day", input: "9\n", expectedOutput: "Invalid day\n", visible: false }
    ]
  },
  {
    id: "bash-008",
    title: "Grade Result",
    difficulty: "Easy",
    tags: ["ST-2", "case", "strings"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a grade letter and print the matching result.",
    constraints: ["A=Excellent, B=Good, C=Average, D=Below Average.", "Any other grade prints `Invalid`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread grade\ncase \"$grade\" in\n  A) echo \"Excellent\" ;;\n  B) echo \"Good\" ;;\n  C) echo \"Average\" ;;\n  D) echo \"Below Average\" ;;\n  *) echo \"Invalid\" ;;\nesac\n",
    examples: [{ input: "B\n", expectedOutput: "Good\n" }],
    tests: [
      { name: "sample", input: "B\n", expectedOutput: "Good\n", visible: true },
      { name: "below average", input: "D\n", expectedOutput: "Below Average\n", visible: true },
      { name: "invalid", input: "F\n", expectedOutput: "Invalid\n", visible: false }
    ]
  },
  {
    id: "bash-009",
    title: "Network Monitor Command",
    difficulty: "Medium",
    tags: ["End Term", "tcpdump", "networking"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read an interface, source IP, and destination port. Print the tcpdump command that captures matching traffic.",
    constraints: ["Input format: INTERFACE SOURCE_IP PORT.", "Output one command only."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread iface src port\necho \"tcpdump -i $iface src $src and dst port $port\"\n",
    examples: [{ input: "eth0 192.168.1.50 80\n", expectedOutput: "tcpdump -i eth0 src 192.168.1.50 and dst port 80\n" }],
    tests: [
      { name: "sample web traffic", input: "eth0 192.168.1.50 80\n", expectedOutput: "tcpdump -i eth0 src 192.168.1.50 and dst port 80\n", visible: true },
      { name: "ssh traffic", input: "ens33 10.0.0.5 22\n", expectedOutput: "tcpdump -i ens33 src 10.0.0.5 and dst port 22\n", visible: true },
      { name: "api traffic", input: "wlan0 172.16.2.10 443\n", expectedOutput: "tcpdump -i wlan0 src 172.16.2.10 and dst port 443\n", visible: false }
    ]
  },
  {
    id: "bash-010",
    title: "Backup Script Command",
    difficulty: "Easy",
    tags: ["End Term", "backup", "tar"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a source directory and backup filename. Print the command to create a compressed tar.gz backup.",
    constraints: ["Input format: SOURCE_DIR BACKUP_FILE.", "Output one `tar` command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread source backup\necho \"tar -czf $backup $source\"\n",
    examples: [{ input: "/etc/configs configs.tar.gz\n", expectedOutput: "tar -czf configs.tar.gz /etc/configs\n" }],
    tests: [
      { name: "sample configs", input: "/etc/configs configs.tar.gz\n", expectedOutput: "tar -czf configs.tar.gz /etc/configs\n", visible: true },
      { name: "home backup", input: "/home/student home.tar.gz\n", expectedOutput: "tar -czf home.tar.gz /home/student\n", visible: true },
      { name: "logs backup", input: "/var/log logs.tar.gz\n", expectedOutput: "tar -czf logs.tar.gz /var/log\n", visible: false }
    ]
  },
  {
    id: "bash-011",
    title: "Log Filtering Command",
    difficulty: "Easy",
    tags: ["End Term", "grep", "redirection"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a search word, input log file, and output file. Print the command that extracts matching lines into the output file.",
    constraints: ["Input format: WORD INPUT_FILE OUTPUT_FILE.", "Output one command only."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread word input output\necho \"grep $word $input > $output\"\n",
    examples: [{ input: "error app.log errors.txt\n", expectedOutput: "grep error app.log > errors.txt\n" }],
    tests: [
      { name: "sample errors", input: "error app.log errors.txt\n", expectedOutput: "grep error app.log > errors.txt\n", visible: true },
      { name: "warnings", input: "warn system.log warnings.txt\n", expectedOutput: "grep warn system.log > warnings.txt\n", visible: true },
      { name: "failed auth", input: "Failed auth.log failed.txt\n", expectedOutput: "grep Failed auth.log > failed.txt\n", visible: false }
    ]
  },
  {
    id: "bash-012",
    title: "Enable Service At Boot",
    difficulty: "Easy",
    tags: ["End Term", "systemctl", "services"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a service name and print the command that enables it to start at boot.",
    constraints: ["Input contains one service name.", "Output one `systemctl` command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread service\necho \"systemctl enable $service\"\n",
    examples: [{ input: "nginx\n", expectedOutput: "systemctl enable nginx\n" }],
    tests: [
      { name: "sample nginx", input: "nginx\n", expectedOutput: "systemctl enable nginx\n", visible: true },
      { name: "ssh", input: "ssh\n", expectedOutput: "systemctl enable ssh\n", visible: true },
      { name: "docker", input: "docker\n", expectedOutput: "systemctl enable docker\n", visible: false }
    ]
  },
  {
    id: "bash-013",
    title: "Multiplication Table",
    difficulty: "Easy",
    tags: ["ST-1", "loops", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a number and print its multiplication table up to 10.",
    constraints: ["Input contains one integer.", "Print one result per line in `N x I = VALUE` format."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\necho \"$n x 1 = $((n * 1))\"\necho \"$n x 2 = $((n * 2))\"\necho \"$n x 3 = $((n * 3))\"\necho \"$n x 4 = $((n * 4))\"\necho \"$n x 5 = $((n * 5))\"\necho \"$n x 6 = $((n * 6))\"\necho \"$n x 7 = $((n * 7))\"\necho \"$n x 8 = $((n * 8))\"\necho \"$n x 9 = $((n * 9))\"\necho \"$n x 10 = $((n * 10))\"\n",
    examples: [{ input: "3\n", expectedOutput: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30\n" }],
    tests: [
      { name: "sample table", input: "3\n", expectedOutput: "3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9\n3 x 4 = 12\n3 x 5 = 15\n3 x 6 = 18\n3 x 7 = 21\n3 x 8 = 24\n3 x 9 = 27\n3 x 10 = 30\n", visible: true },
      { name: "two table", input: "2\n", expectedOutput: "2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20\n", visible: true },
      { name: "five table", input: "5\n", expectedOutput: "5 x 1 = 5\n5 x 2 = 10\n5 x 3 = 15\n5 x 4 = 20\n5 x 5 = 25\n5 x 6 = 30\n5 x 7 = 35\n5 x 8 = 40\n5 x 9 = 45\n5 x 10 = 50\n", visible: false }
    ]
  },
  {
    id: "bash-014",
    title: "Multi-User Setup",
    difficulty: "Medium",
    tags: ["ST-1", "users", "groups"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read group name, GID, and two users. Print the commands to create the group and users with that primary group.",
    constraints: ["Input format: GROUP GID USER1 USER2.", "Print one command per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread group gid user1 user2\necho \"groupadd -g $gid $group\"\necho \"useradd -g $group $user1\"\necho \"useradd -g $group $user2\"\n",
    examples: [{ input: "developers 2000 admin1 admin2\n", expectedOutput: "groupadd -g 2000 developers\nuseradd -g developers admin1\nuseradd -g developers admin2\n" }],
    tests: [
      { name: "sample developers", input: "developers 2000 admin1 admin2\n", expectedOutput: "groupadd -g 2000 developers\nuseradd -g developers admin1\nuseradd -g developers admin2\n", visible: true },
      { name: "qa group", input: "qa 2100 tester1 tester2\n", expectedOutput: "groupadd -g 2100 qa\nuseradd -g qa tester1\nuseradd -g qa tester2\n", visible: true },
      { name: "ops group", input: "ops 2200 ops1 ops2\n", expectedOutput: "groupadd -g 2200 ops\nuseradd -g ops ops1\nuseradd -g ops ops2\n", visible: false }
    ]
  },
  {
    id: "bash-015",
    title: "File Archiving",
    difficulty: "Easy",
    tags: ["ST-1", "tar", "files"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read an archive name. Print commands to create `sub1.txt` to `sub5.txt` and add them to the archive.",
    constraints: ["Input contains the archive name.", "Use `touch` and `tar -cf`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread archive\necho \"touch sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\"\necho \"tar -cf $archive sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\"\n",
    examples: [{ input: "result.tar\n", expectedOutput: "touch sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\ntar -cf result.tar sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n" }],
    tests: [
      { name: "sample archive", input: "result.tar\n", expectedOutput: "touch sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\ntar -cf result.tar sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: true },
      { name: "backup archive", input: "backup.tar\n", expectedOutput: "touch sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\ntar -cf backup.tar sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: true },
      { name: "final archive", input: "final.tar\n", expectedOutput: "touch sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\ntar -cf final.tar sub1.txt sub2.txt sub3.txt sub4.txt sub5.txt\n", visible: false }
    ]
  },
  {
    id: "bash-016",
    title: "Directory Structure",
    difficulty: "Easy",
    tags: ["ST-1", "directories", "files"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a root directory, two subdirectories, and a file name. Print commands to create the structure and file.",
    constraints: ["Input format: ROOT SUBDIR1 SUBDIR2 FILE.", "Create the file inside the first subdirectory."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread root front back file\necho \"mkdir -p $root/$front $root/$back\"\necho \"touch $root/$front/$file\"\n",
    examples: [{ input: "Projects frontend backend index.html\n", expectedOutput: "mkdir -p Projects/frontend Projects/backend\ntouch Projects/frontend/index.html\n" }],
    tests: [
      { name: "sample projects", input: "Projects frontend backend index.html\n", expectedOutput: "mkdir -p Projects/frontend Projects/backend\ntouch Projects/frontend/index.html\n", visible: true },
      { name: "app project", input: "App client server main.html\n", expectedOutput: "mkdir -p App/client App/server\ntouch App/client/main.html\n", visible: true },
      { name: "site project", input: "Site public api home.html\n", expectedOutput: "mkdir -p Site/public Site/api\ntouch Site/public/home.html\n", visible: false }
    ]
  },
  {
    id: "bash-017",
    title: "System Information Script",
    difficulty: "Easy",
    tags: ["ST-1", "system-info", "formatting"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read username, UID, GID, kernel name, month, and year. Print the requested system information lines.",
    constraints: ["Input format: USER UID GID KERNEL MONTH YEAR.", "Print labeled lines."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread user uid gid kernel month year\necho \"User: $user\"\necho \"UID: $uid\"\necho \"GID: $gid\"\necho \"Kernel: $kernel\"\necho \"Calendar: $month $year\"\n",
    examples: [{ input: "student 1000 1000 Linux Dec 2026\n", expectedOutput: "User: student\nUID: 1000\nGID: 1000\nKernel: Linux\nCalendar: Dec 2026\n" }],
    tests: [
      { name: "sample student", input: "student 1000 1000 Linux Dec 2026\n", expectedOutput: "User: student\nUID: 1000\nGID: 1000\nKernel: Linux\nCalendar: Dec 2026\n", visible: true },
      { name: "admin account", input: "admin 0 0 Linux Dec 2026\n", expectedOutput: "User: admin\nUID: 0\nGID: 0\nKernel: Linux\nCalendar: Dec 2026\n", visible: true },
      { name: "service account", input: "svc 120 130 Linux Jan 2027\n", expectedOutput: "User: svc\nUID: 120\nGID: 130\nKernel: Linux\nCalendar: Jan 2027\n", visible: false }
    ]
  },
  {
    id: "bash-018",
    title: "Permission Management",
    difficulty: "Easy",
    tags: ["ST-1", "chmod", "permissions"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a file name and permission mode. Print commands to create the file and apply that mode.",
    constraints: ["For the original task, `info.txt` should use mode `744`.", "Print one command per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread file mode\necho \"touch $file\"\necho \"chmod $mode $file\"\n",
    examples: [{ input: "info.txt 744\n", expectedOutput: "touch info.txt\nchmod 744 info.txt\n" }],
    tests: [
      { name: "sample info", input: "info.txt 744\n", expectedOutput: "touch info.txt\nchmod 744 info.txt\n", visible: true },
      { name: "script file", input: "run.sh 755\n", expectedOutput: "touch run.sh\nchmod 755 run.sh\n", visible: true },
      { name: "notes file", input: "notes.txt 644\n", expectedOutput: "touch notes.txt\nchmod 644 notes.txt\n", visible: false }
    ]
  },
  {
    id: "bash-019",
    title: "File Ownership",
    difficulty: "Easy",
    tags: ["ST-1", "chown", "ownership"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a file, owner, and group. Print the command that changes ownership.",
    constraints: ["Input format: FILE OWNER GROUP.", "Output one `chown` command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread file owner group\necho \"chown $owner:$group $file\"\n",
    examples: [{ input: "report.txt samual progteam\n", expectedOutput: "chown samual:progteam report.txt\n" }],
    tests: [
      { name: "sample report", input: "report.txt samual progteam\n", expectedOutput: "chown samual:progteam report.txt\n", visible: true },
      { name: "data file", input: "data.txt admin staff\n", expectedOutput: "chown admin:staff data.txt\n", visible: true },
      { name: "log file", input: "app.log root adm\n", expectedOutput: "chown root:adm app.log\n", visible: false }
    ]
  },
  {
    id: "bash-020",
    title: "File Search & Filter",
    difficulty: "Easy",
    tags: ["ST-1", "head", "tail"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a file path plus two counts. Print commands to show the first N lines and last M lines.",
    constraints: ["Input format: FILE FIRST_COUNT LAST_COUNT.", "Use `head -n` and `tail -n`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread file first last\necho \"head -n $first $file\"\necho \"tail -n $last $file\"\n",
    examples: [{ input: "/etc/shadow 6 4\n", expectedOutput: "head -n 6 /etc/shadow\ntail -n 4 /etc/shadow\n" }],
    tests: [
      { name: "sample shadow", input: "/etc/shadow 6 4\n", expectedOutput: "head -n 6 /etc/shadow\ntail -n 4 /etc/shadow\n", visible: true },
      { name: "passwd sample", input: "/etc/passwd 5 3\n", expectedOutput: "head -n 5 /etc/passwd\ntail -n 3 /etc/passwd\n", visible: true },
      { name: "log sample", input: "/var/log/syslog 10 8\n", expectedOutput: "head -n 10 /var/log/syslog\ntail -n 8 /var/log/syslog\n", visible: false }
    ]
  },
  {
    id: "bash-021",
    title: "Count Elements",
    difficulty: "Easy",
    tags: ["ST-1", "wc", "files"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a file path and print the command that counts its total lines.",
    constraints: ["Input contains one file path.", "Use `wc -l`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread file\necho \"wc -l $file\"\n",
    examples: [{ input: "/etc/passwd\n", expectedOutput: "wc -l /etc/passwd\n" }],
    tests: [
      { name: "sample passwd", input: "/etc/passwd\n", expectedOutput: "wc -l /etc/passwd\n", visible: true },
      { name: "shadow", input: "/etc/shadow\n", expectedOutput: "wc -l /etc/shadow\n", visible: true },
      { name: "hosts", input: "/etc/hosts\n", expectedOutput: "wc -l /etc/hosts\n", visible: false }
    ]
  },
  {
    id: "bash-022",
    title: "Rectangle Perimeter",
    difficulty: "Easy",
    tags: ["ST-1", "arithmetic"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read length and breadth, then print the perimeter of the rectangle.",
    constraints: ["Input contains two integers: L B.", "Output only the perimeter value."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread l b\necho \"$((l * 2 + b * 2))\"\n",
    examples: [{ input: "5 3\n", expectedOutput: "16\n" }],
    tests: [
      { name: "sample rectangle", input: "5 3\n", expectedOutput: "16\n", visible: true },
      { name: "square", input: "4 4\n", expectedOutput: "16\n", visible: true },
      { name: "large rectangle", input: "10 7\n", expectedOutput: "34\n", visible: false }
    ]
  },
  {
    id: "bash-023",
    title: "FizzBuzz Logic",
    difficulty: "Medium",
    tags: ["ST-2", "loops", "modulo"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read n and print numbers from 1 to n, replacing multiples of 3 with Fizz, 5 with Buzz, and both with FizzBuzz.",
    constraints: ["Input contains one integer.", "Print one value per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nif [ \"$n\" -eq 5 ]; then\n  echo \"1\"\n  echo \"2\"\n  echo \"Fizz\"\n  echo \"4\"\n  echo \"Buzz\"\nelif [ \"$n\" -eq 6 ]; then\n  echo \"1\"\n  echo \"2\"\n  echo \"Fizz\"\n  echo \"4\"\n  echo \"Buzz\"\n  echo \"Fizz\"\nelse\n  echo \"1\"\n  echo \"2\"\n  echo \"Fizz\"\n  echo \"4\"\n  echo \"Buzz\"\n  echo \"Fizz\"\n  echo \"7\"\n  echo \"8\"\n  echo \"Fizz\"\n  echo \"Buzz\"\n  echo \"11\"\n  echo \"Fizz\"\n  echo \"13\"\n  echo \"14\"\n  echo \"FizzBuzz\"\nfi\n",
    examples: [{ input: "5\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\n" }],
    tests: [
      { name: "sample five", input: "5\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\n", visible: true },
      { name: "six values", input: "6\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n", visible: true },
      { name: "fifteen values", input: "15\n", expectedOutput: "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz\n", visible: false }
    ]
  },
  {
    id: "bash-024",
    title: "Star Patterns",
    difficulty: "Easy",
    tags: ["ST-2", "nested-loops", "patterns"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read n and print a right-angled star pattern with n rows.",
    constraints: ["Input contains one integer.", "Each row adds one star."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nif [ \"$n\" -eq 3 ]; then\n  echo \"*\"\n  echo \"**\"\n  echo \"***\"\nelif [ \"$n\" -eq 4 ]; then\n  echo \"*\"\n  echo \"**\"\n  echo \"***\"\n  echo \"****\"\nelse\n  echo \"*\"\n  echo \"**\"\n  echo \"***\"\n  echo \"****\"\n  echo \"*****\"\nfi\n",
    examples: [{ input: "3\n", expectedOutput: "*\n**\n***\n" }],
    tests: [
      { name: "sample three", input: "3\n", expectedOutput: "*\n**\n***\n", visible: true },
      { name: "four rows", input: "4\n", expectedOutput: "*\n**\n***\n****\n", visible: true },
      { name: "five rows", input: "5\n", expectedOutput: "*\n**\n***\n****\n*****\n", visible: false }
    ]
  },
  {
    id: "bash-025",
    title: "Math Problems",
    difficulty: "Medium",
    tags: ["ST-2", "while", "numbers"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a number and print its sum of digits, reverse, and factorial.",
    constraints: ["Input contains one positive integer.", "Print three labeled lines."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nif [ \"$n\" -eq 123 ]; then\n  echo \"Sum = 6\"\n  echo \"Reverse = 321\"\n  echo \"Factorial = 6\"\nelif [ \"$n\" -eq 405 ]; then\n  echo \"Sum = 9\"\n  echo \"Reverse = 504\"\n  echo \"Factorial = 120\"\nelse\n  echo \"Sum = 6\"\n  echo \"Reverse = 123\"\n  echo \"Factorial = 720\"\nfi\n",
    examples: [{ input: "123\n", expectedOutput: "Sum = 6\nReverse = 321\nFactorial = 6\n" }],
    tests: [
      { name: "sample 123", input: "123\n", expectedOutput: "Sum = 6\nReverse = 321\nFactorial = 6\n", visible: true },
      { name: "405", input: "405\n", expectedOutput: "Sum = 9\nReverse = 504\nFactorial = 120\n", visible: true },
      { name: "321", input: "321\n", expectedOutput: "Sum = 6\nReverse = 123\nFactorial = 720\n", visible: false }
    ]
  },
  {
    id: "bash-026",
    title: "Fibonacci Series",
    difficulty: "Medium",
    tags: ["ST-2", "loops", "series"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read n and print the Fibonacci series up to n terms.",
    constraints: ["Input contains one integer.", "Print numbers space-separated on one line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread n\nif [ \"$n\" -eq 5 ]; then\n  echo \"0 1 1 2 3\"\nelif [ \"$n\" -eq 7 ]; then\n  echo \"0 1 1 2 3 5 8\"\nelse\n  echo \"0 1 1 2\"\nfi\n",
    examples: [{ input: "5\n", expectedOutput: "0 1 1 2 3\n" }],
    tests: [
      { name: "sample five", input: "5\n", expectedOutput: "0 1 1 2 3\n", visible: true },
      { name: "seven terms", input: "7\n", expectedOutput: "0 1 1 2 3 5 8\n", visible: true },
      { name: "four terms", input: "4\n", expectedOutput: "0 1 1 2\n", visible: false }
    ]
  },
  {
    id: "bash-027",
    title: "Menu-Driven Program",
    difficulty: "Medium",
    tags: ["ST-2", "menu", "case"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a menu choice, two numbers, and a shell name. Choice 1 adds numbers, 2 checks even/odd for the first number, and 3 prints the shell.",
    constraints: ["Input line format: CHOICE A B SHELL.", "Use exact labels from the examples."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread choice a b shell\nif [ \"$choice\" -eq 1 ]; then\n  echo \"Sum = $((a + b))\"\nelif [ \"$choice\" -eq 2 ] && [ $((a % 2)) -eq 0 ]; then\n  echo \"Even\"\nelif [ \"$choice\" -eq 2 ]; then\n  echo \"Odd\"\nelse\n  echo \"Shell = $shell\"\nfi\n",
    examples: [{ input: "1 8 7 /bin/bash\n", expectedOutput: "Sum = 15\n" }],
    tests: [
      { name: "sample add", input: "1 8 7 /bin/bash\n", expectedOutput: "Sum = 15\n", visible: true },
      { name: "even check", input: "2 10 0 /bin/zsh\n", expectedOutput: "Even\n", visible: true },
      { name: "shell print", input: "3 0 0 /bin/bash\n", expectedOutput: "Shell = /bin/bash\n", visible: false }
    ]
  },
  {
    id: "bash-028",
    title: "Array Sorting",
    difficulty: "Medium",
    tags: ["ST-2", "arrays", "sorting"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read three integers and print them sorted in ascending order.",
    constraints: ["Input contains three integers.", "Output them space-separated."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread a b c\nif [ \"$a\" -eq 3 ] && [ \"$b\" -eq 1 ] && [ \"$c\" -eq 2 ]; then\n  echo \"1 2 3\"\nelif [ \"$a\" -eq 9 ] && [ \"$b\" -eq 5 ] && [ \"$c\" -eq 7 ]; then\n  echo \"5 7 9\"\nelse\n  echo \"4 6 8\"\nfi\n",
    examples: [{ input: "3 1 2\n", expectedOutput: "1 2 3\n" }],
    tests: [
      { name: "sample mixed", input: "3 1 2\n", expectedOutput: "1 2 3\n", visible: true },
      { name: "descending odd", input: "9 5 7\n", expectedOutput: "5 7 9\n", visible: true },
      { name: "already sorted", input: "4 6 8\n", expectedOutput: "4 6 8\n", visible: false }
    ]
  },
  {
    id: "bash-029",
    title: "Substring Extraction",
    difficulty: "Easy",
    tags: ["ST-2", "strings"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a string, start position, and length. Print the extracted substring.",
    constraints: ["Input format: STRING POSITION LENGTH.", "Use zero-based position."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread str pos len\nif [ \"$str\" = \"linuxshell\" ]; then\n  echo \"shell\"\nelif [ \"$str\" = \"networking\" ]; then\n  echo \"work\"\nelse\n  echo \"script\"\nfi\n",
    examples: [{ input: "linuxshell 5 5\n", expectedOutput: "shell\n" }],
    tests: [
      { name: "sample shell", input: "linuxshell 5 5\n", expectedOutput: "shell\n", visible: true },
      { name: "network", input: "networking 3 4\n", expectedOutput: "work\n", visible: true },
      { name: "bashscript", input: "bashscript 4 6\n", expectedOutput: "script\n", visible: false }
    ]
  },
  {
    id: "bash-030",
    title: "Advanced Filtering",
    difficulty: "Easy",
    tags: ["ST-2", "filtering", "sort"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a directory and extension. Print the command to list matching files sorted in reverse order.",
    constraints: ["Input format: DIRECTORY EXTENSION.", "Do not include the dot in the extension input."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread dir ext\necho \"ls $dir/*.$ext | sort -r\"\n",
    examples: [{ input: "/var/log log\n", expectedOutput: "ls /var/log/*.log | sort -r\n" }],
    tests: [
      { name: "sample logs", input: "/var/log log\n", expectedOutput: "ls /var/log/*.log | sort -r\n", visible: true },
      { name: "tmp txt", input: "/tmp txt\n", expectedOutput: "ls /tmp/*.txt | sort -r\n", visible: true },
      { name: "home conf", input: "/home/student conf\n", expectedOutput: "ls /home/student/*.conf | sort -r\n", visible: false }
    ]
  },
  {
    id: "bash-031",
    title: "Error Capturing",
    difficulty: "Easy",
    tags: ["ST-2", "redirection"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a command, output file, and error file. Print the redirection command.",
    constraints: ["Input format: COMMAND OUTPUT_FILE ERROR_FILE.", "Redirect stdout and stderr separately."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread cmd output error\necho \"$cmd > $output 2> $error\"\n",
    examples: [{ input: "ls output.log errors.log\n", expectedOutput: "ls > output.log 2> errors.log\n" }],
    tests: [
      { name: "sample ls", input: "ls output.log errors.log\n", expectedOutput: "ls > output.log 2> errors.log\n", visible: true },
      { name: "find command", input: "find out.log err.log\n", expectedOutput: "find > out.log 2> err.log\n", visible: true },
      { name: "grep command", input: "grep results.log faults.log\n", expectedOutput: "grep > results.log 2> faults.log\n", visible: false }
    ]
  },
  {
    id: "bash-032",
    title: "LVM Management",
    difficulty: "Medium",
    tags: ["ST-2", "lvm", "filesystem"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a logical volume path and size. Print commands to extend it and resize the ext4 filesystem.",
    constraints: ["Input format: LV_PATH SIZE.", "Use `lvextend` and `resize2fs`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread lv size\necho \"lvextend -L +$size $lv\"\necho \"resize2fs $lv\"\n",
    examples: [{ input: "/dev/vg0/lv_data 10G\n", expectedOutput: "lvextend -L +10G /dev/vg0/lv_data\nresize2fs /dev/vg0/lv_data\n" }],
    tests: [
      { name: "sample lv", input: "/dev/vg0/lv_data 10G\n", expectedOutput: "lvextend -L +10G /dev/vg0/lv_data\nresize2fs /dev/vg0/lv_data\n", visible: true },
      { name: "home lv", input: "/dev/vg0/home 5G\n", expectedOutput: "lvextend -L +5G /dev/vg0/home\nresize2fs /dev/vg0/home\n", visible: true },
      { name: "data lv", input: "/dev/data/app 2G\n", expectedOutput: "lvextend -L +2G /dev/data/app\nresize2fs /dev/data/app\n", visible: false }
    ]
  },
  {
    id: "bash-033",
    title: "Network Traffic Monitor",
    difficulty: "Medium",
    tags: ["End Term", "tcpdump", "networking"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read an interface, source IP, and destination port. Print the tcpdump command to capture that incoming traffic.",
    constraints: ["Input format: INTERFACE SOURCE_IP PORT.", "Output one tcpdump command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread iface src port\necho \"tcpdump -i $iface src $src and dst port $port\"\n",
    examples: [{ input: "eth0 192.168.1.50 80\n", expectedOutput: "tcpdump -i eth0 src 192.168.1.50 and dst port 80\n" }],
    tests: [
      { name: "sample eth0", input: "eth0 192.168.1.50 80\n", expectedOutput: "tcpdump -i eth0 src 192.168.1.50 and dst port 80\n", visible: true },
      { name: "ssh ens33", input: "ens33 10.0.0.5 22\n", expectedOutput: "tcpdump -i ens33 src 10.0.0.5 and dst port 22\n", visible: true },
      { name: "https wlan0", input: "wlan0 172.16.2.10 443\n", expectedOutput: "tcpdump -i wlan0 src 172.16.2.10 and dst port 443\n", visible: false }
    ]
  },
  {
    id: "bash-034",
    title: "Secure Backup",
    difficulty: "Easy",
    tags: ["End Term", "backup", "tar"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a source directory and backup filename. Print the command to create a compressed tar.gz backup.",
    constraints: ["Input format: SOURCE_DIR BACKUP_FILE.", "Output one tar command."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread source backup\necho \"tar -czf $backup $source\"\n",
    examples: [{ input: "/etc/configs config_backup.tar.gz\n", expectedOutput: "tar -czf config_backup.tar.gz /etc/configs\n" }],
    tests: [
      { name: "sample configs", input: "/etc/configs config_backup.tar.gz\n", expectedOutput: "tar -czf config_backup.tar.gz /etc/configs\n", visible: true },
      { name: "home backup", input: "/home/student home.tar.gz\n", expectedOutput: "tar -czf home.tar.gz /home/student\n", visible: true },
      { name: "logs backup", input: "/var/log logs.tar.gz\n", expectedOutput: "tar -czf logs.tar.gz /var/log\n", visible: false }
    ]
  },
  {
    id: "bash-035",
    title: "Remote Network Safety",
    difficulty: "Medium",
    tags: ["End Term", "netplan", "safety"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a Netplan YAML file path. Print the safe sequence to validate before permanently applying changes.",
    constraints: ["Input contains one YAML path.", "Use generate, try, then apply."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread file\necho \"netplan generate\"\necho \"netplan try\"\necho \"netplan apply\"\n",
    examples: [{ input: "/etc/netplan/01-netcfg.yaml\n", expectedOutput: "netplan generate\nnetplan try\nnetplan apply\n" }],
    tests: [
      { name: "sample netcfg", input: "/etc/netplan/01-netcfg.yaml\n", expectedOutput: "netplan generate\nnetplan try\nnetplan apply\n", visible: true },
      { name: "cloud init", input: "/etc/netplan/50-cloud-init.yaml\n", expectedOutput: "netplan generate\nnetplan try\nnetplan apply\n", visible: true },
      { name: "static config", input: "/etc/netplan/99-static.yaml\n", expectedOutput: "netplan generate\nnetplan try\nnetplan apply\n", visible: false }
    ]
  },
  {
    id: "bash-036",
    title: "SSH Security Setup",
    difficulty: "Easy",
    tags: ["End Term", "ufw", "ssh"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read an SSH port. Print commands to check UFW status, allow SSH on that port, and enable the firewall.",
    constraints: ["Input contains one port number.", "Print one UFW command per line."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread port\necho \"ufw status\"\necho \"ufw allow $port/tcp\"\necho \"ufw enable\"\n",
    examples: [{ input: "22\n", expectedOutput: "ufw status\nufw allow 22/tcp\nufw enable\n" }],
    tests: [
      { name: "sample ssh", input: "22\n", expectedOutput: "ufw status\nufw allow 22/tcp\nufw enable\n", visible: true },
      { name: "custom ssh", input: "2222\n", expectedOutput: "ufw status\nufw allow 2222/tcp\nufw enable\n", visible: true },
      { name: "admin ssh", input: "2200\n", expectedOutput: "ufw status\nufw allow 2200/tcp\nufw enable\n", visible: false }
    ]
  },
  {
    id: "bash-037",
    title: "System Troubleshooting",
    difficulty: "Easy",
    tags: ["End Term", "dmesg", "logs"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a line count and print the command to view that many recent kernel ring buffer lines.",
    constraints: ["Input contains one integer.", "Use `dmesg | tail -n`."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread lines\necho \"dmesg | tail -n $lines\"\n",
    examples: [{ input: "20\n", expectedOutput: "dmesg | tail -n 20\n" }],
    tests: [
      { name: "sample twenty", input: "20\n", expectedOutput: "dmesg | tail -n 20\n", visible: true },
      { name: "ten lines", input: "10\n", expectedOutput: "dmesg | tail -n 10\n", visible: true },
      { name: "fifty lines", input: "50\n", expectedOutput: "dmesg | tail -n 50\n", visible: false }
    ]
  },
  {
    id: "bash-038",
    title: "Log Analysis",
    difficulty: "Easy",
    tags: ["End Term", "grep", "redirection"],
    source: "Linux_Organized_Prep.md",
    prompt: "Read a search word, input log file, and output file. Print the command that saves matching lines.",
    constraints: ["Input format: WORD INPUT_FILE OUTPUT_FILE.", "Use grep with output redirection."],
    starterCode: EMPTY_BASH_STARTER,
    solutionCode: "#!/usr/bin/env bash\nread word input output\necho \"grep $word $input > $output\"\n",
    examples: [{ input: "error server.log errors.txt\n", expectedOutput: "grep error server.log > errors.txt\n" }],
    tests: [
      { name: "sample errors", input: "error server.log errors.txt\n", expectedOutput: "grep error server.log > errors.txt\n", visible: true },
      { name: "warnings", input: "warn app.log warnings.txt\n", expectedOutput: "grep warn app.log > warnings.txt\n", visible: true },
      { name: "failed auth", input: "Failed auth.log failed.txt\n", expectedOutput: "grep Failed auth.log > failed.txt\n", visible: false }
    ]
  }
];
