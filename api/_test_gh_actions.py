import sysconfig


def get_runtime_info() -> str:
    return f"System: {sysconfig.get_platform()}\nPython Version: {sysconfig.get_python_version()}"


if __name__ == "__main__":
    print(get_runtime_info())
